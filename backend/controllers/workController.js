const Work = require('../models/work');
const cloudinary = require('cloudinary').v2;
const generateSlug = require('./utils/generateSlug');

/*
|--------------------------------------------------------------------------
| Helper - Gelen görselleri array haline getir
|--------------------------------------------------------------------------
*/

const normalizeImages = (images) => {
  if (!images) {
    return [];
  }

  if (typeof images === 'string') {
    return [images];
  }

  if (Array.isArray(images)) {
    return images;
  }

  return [];
};

/*
|--------------------------------------------------------------------------
| Helper - Meta keywords değerini array haline getir
|--------------------------------------------------------------------------
*/

const normalizeMetaKeywords = (keywords) => {
  if (!keywords) {
    return [];
  }

  if (typeof keywords === 'string') {
    return keywords
      .split(',')
      .map((keyword) => keyword.trim())
      .filter(Boolean);
  }

  if (Array.isArray(keywords)) {
    return keywords
      .map((keyword) => String(keyword).trim())
      .filter(Boolean);
  }

  return [];
};

/*
|--------------------------------------------------------------------------
| Helper - Cloudinary'ye yeni görselleri yükle
|--------------------------------------------------------------------------
*/

const uploadImages = async (images, folder) => {
  const uploadedImages = [];

  for (const image of images) {
    const result = await cloudinary.uploader.upload(image, {
      folder,
    });

    uploadedImages.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  return uploadedImages;
};

/*
|--------------------------------------------------------------------------
| CREATE WORK
|--------------------------------------------------------------------------
*/

const createWork = async (req, res) => {
  try {
    /*
    |--------------------------------------------------------------------------
    | Görselleri hazırla
    |--------------------------------------------------------------------------
    */

    const beforeImages = normalizeImages(req.body.beforeImages);
    const afterImages = normalizeImages(req.body.afterImages);

    /*
    |--------------------------------------------------------------------------
    | Öncesi fotoğraflarını Cloudinary'ye yükle
    |--------------------------------------------------------------------------
    */

    const uploadedBeforeImages = await uploadImages(
      beforeImages,
      'workImages/before'
    );

    /*
    |--------------------------------------------------------------------------
    | Sonrası fotoğraflarını Cloudinary'ye yükle
    |--------------------------------------------------------------------------
    */

    const uploadedAfterImages = await uploadImages(
      afterImages,
      'workImages/after'
    );

    req.body.beforeImages = uploadedBeforeImages;
    req.body.afterImages = uploadedAfterImages;

    /*
    |--------------------------------------------------------------------------
    | Kullanıcı bilgileri
    |--------------------------------------------------------------------------
    */

    req.body.uId = req.user._id;
    req.body.uName = req.user.userName;

    /*
    |--------------------------------------------------------------------------
    | SEO URL
    |--------------------------------------------------------------------------
    */

    req.body.titleUrl = generateSlug(req.body.title);

    /*
    |--------------------------------------------------------------------------
    | Meta Keywords
    |--------------------------------------------------------------------------
    */

    req.body.metaKeywords = normalizeMetaKeywords(req.body.metaKeywords);

    /*
    |--------------------------------------------------------------------------
    | Work oluştur
    |--------------------------------------------------------------------------
    */

    const work = await Work.create(req.body);

    res.status(201).json({
      success: true,
      result: { work },
    });
  } catch (error) {
    console.error('Work oluşturma hatası:', error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| ALL WORKS
|--------------------------------------------------------------------------
*/

const allWorks = async (req, res) => {
  try {
    const works = await Work.find().sort({ _id: -1 });

    res.status(200).json({
      success: true,
      result: works,
    });
  } catch (error) {
    console.error('Work listeleme hatası:', error);

    res.status(500).json({
      success: false,
      message: 'Sunucu hatası',
    });
  }
};

/*
|--------------------------------------------------------------------------
| WORK DETAIL
|--------------------------------------------------------------------------
*/

const detailWork = async (req, res) => {
  try {
    const work = await Work.findOne({
      titleUrl: req.params.titleUrl,
    });

    if (!work) {
      return res.status(404).json({
        success: false,
        message: 'Çalışma bulunamadı',
      });
    }

    res.status(200).json(work);
  } catch (error) {
    console.error('Work detay hatası:', error);

    res.status(500).json({
      success: false,
      message: 'Sunucu hatası',
    });
  }
};

/*
|--------------------------------------------------------------------------
| DELETE WORK
|--------------------------------------------------------------------------
*/

const deleteWork = async (req, res) => {
  try {
    const { id } = req.params;

    const existingWork = await Work.findById(id);

    if (!existingWork) {
      return res.status(404).json({
        success: false,
        message: 'Çalışma bulunamadı',
      });
    }

    /*
    |--------------------------------------------------------------------------
    | Öncesi görsellerini Cloudinary'den sil
    |--------------------------------------------------------------------------
    */

    if (existingWork.beforeImages?.length > 0) {
      for (const image of existingWork.beforeImages) {
        if (image.public_id) {
          await cloudinary.uploader.destroy(image.public_id);
        }
      }
    }

    /*
    |--------------------------------------------------------------------------
    | Sonrası görsellerini Cloudinary'den sil
    |--------------------------------------------------------------------------
    */

    if (existingWork.afterImages?.length > 0) {
      for (const image of existingWork.afterImages) {
        if (image.public_id) {
          await cloudinary.uploader.destroy(image.public_id);
        }
      }
    }

    /*
    |--------------------------------------------------------------------------
    | MongoDB kaydını sil
    |--------------------------------------------------------------------------
    */

    await Work.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      id: existingWork._id,
      message: `Çalışma silme işlemi başarılı: ${existingWork.title}`,
    });
  } catch (error) {
    console.error('Work silme hatası:', error);

    res.status(500).json({
      success: false,
      message: 'Sunucu hatası',
    });
  }
};

/*
|--------------------------------------------------------------------------
| EDIT WORK
|--------------------------------------------------------------------------
*/

const editWork = async (req, res) => {
  try {
    const { titleUrl } = req.params;

    const existingWork = await Work.findOne({
      titleUrl,
    });

    if (!existingWork) {
      return res.status(404).json({
        success: false,
        message: 'Çalışma bulunamadı',
      });
    }

    const workData = req.body;

    if (!workData) {
      return res.status(400).json({
        success: false,
        message: 'Çalışma verisi eksik',
      });
    }

    /*
    |--------------------------------------------------------------------------
    | BEFORE IMAGES
    |--------------------------------------------------------------------------
    */

    let newBeforeImages = [];

    if (Array.isArray(workData.beforeImages)) {
      newBeforeImages = workData.beforeImages;
    }

    /*
      Düzenleme ekranında kaldırılan eski öncesi
      görsellerini tespit et.
    */

    const beforeImagesToDelete = existingWork.beforeImages.filter(
      (oldImage) =>
        !newBeforeImages.some(
          (newImage) => newImage.public_id === oldImage.public_id
        )
    );

    /*
      Kaldırılan görselleri Cloudinary'den sil.
    */

    for (const image of beforeImagesToDelete) {
      if (image.public_id) {
        await cloudinary.uploader.destroy(image.public_id);
      }
    }

    /*
      Mevcut görselleri koru ve yeni görselleri yükle.
    */

    const finalBeforeImages = [];

    for (const image of newBeforeImages) {
      if (image.public_id) {
        finalBeforeImages.push(image);
      } else if (image.file) {
        const result = await cloudinary.uploader.upload(image.file, {
          folder: 'workImages/before',
        });

        finalBeforeImages.push({
          public_id: result.public_id,
          url: result.secure_url,
        });
      }
    }

    /*
    |--------------------------------------------------------------------------
    | AFTER IMAGES
    |--------------------------------------------------------------------------
    */

    let newAfterImages = [];

    if (Array.isArray(workData.afterImages)) {
      newAfterImages = workData.afterImages;
    }

    /*
      Düzenleme ekranında kaldırılan eski sonrası
      görsellerini tespit et.
    */

    const afterImagesToDelete = existingWork.afterImages.filter(
      (oldImage) =>
        !newAfterImages.some(
          (newImage) => newImage.public_id === oldImage.public_id
        )
    );

    /*
      Kaldırılan görselleri Cloudinary'den sil.
    */

    for (const image of afterImagesToDelete) {
      if (image.public_id) {
        await cloudinary.uploader.destroy(image.public_id);
      }
    }

    /*
      Mevcut görselleri koru ve yeni görselleri yükle.
    */

    const finalAfterImages = [];

    for (const image of newAfterImages) {
      if (image.public_id) {
        finalAfterImages.push(image);
      } else if (image.file) {
        const result = await cloudinary.uploader.upload(image.file, {
          folder: 'workImages/after',
        });

        finalAfterImages.push({
          public_id: result.public_id,
          url: result.secure_url,
        });
      }
    }

    /*
    |--------------------------------------------------------------------------
    | UPDATE
    |--------------------------------------------------------------------------
    */

    workData.beforeImages = finalBeforeImages;
    workData.afterImages = finalAfterImages;

    /*
    |--------------------------------------------------------------------------
    | Meta Keywords
    |--------------------------------------------------------------------------
    */

    workData.metaKeywords = normalizeMetaKeywords(workData.metaKeywords);

    /*
    |--------------------------------------------------------------------------
    | SEO URL
    |--------------------------------------------------------------------------
    */

    workData.titleUrl = generateSlug(workData.title);

    const updatedWork = await Work.findOneAndUpdate(
      { titleUrl },
      workData,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      message: 'Düzenleme başarılı',
      result: updatedWork,
    });
  } catch (error) {
    console.error('Work düzenleme hatası:', error);

    res.status(500).json({
      success: false,
      message: 'Düzenleme başarısız!',
      errorMessage: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| SEARCH WORKS
|--------------------------------------------------------------------------
*/

const searchWorks = async (req, res) => {
  try {
    const { title } = req.params;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: 'Arama yapmak istediğiniz kelimeyi girin!',
      });
    }

    const works = await Work.find({
      title: {
        $regex: title,
        $options: 'i',
      },
    }).sort({ _id: -1 });

    res.status(200).json({
      success: true,
      result: works,
    });
  } catch (error) {
    console.error('Work arama hatası:', error);

    res.status(500).json({
      success: false,
      message: 'Sunucu hatası',
    });
  }
};

module.exports = {
  createWork,
  allWorks,
  detailWork,
  deleteWork,
  editWork,
  searchWorks,
};