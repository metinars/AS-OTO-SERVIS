const Blog = require('../models/blog');
const cloudinary = require('cloudinary').v2;
const generateSlug = require('./utils/generateSlug');

const createBlog = async (req, res) => {
  try {
    let images = [];

    if (typeof req.body.images === 'string') {
      images.push(req.body.images);
    } else if (Array.isArray(req.body.images)) {
      images = req.body.images;
    } else {
      console.log('No images found');
    }

    let allImage = [];

    if (images.length > 0) {
      for (let index = 0; index < images.length; index++) {
        const result = await cloudinary.uploader.upload(images[index], {
          folder: 'blogImages',
        });

        allImage.push({
          public_id: result.public_id,
          url: result.secure_url,
        });
      }
    }

    req.body.images = allImage;

    req.body.uId = req.user._id;
    req.body.uName = req.user.userName;

    req.body.titleUrl = generateSlug(req.body.title);

    const blog = await Blog.create(req.body);

    res.status(201).json({
      success: true,
      result: { blog },
    });
  } catch (error) {
    console.log('error: ', error);
    return res.status(500).json({ message: error.message });
  }
};

const allBlog = async (req, res) => {
  const blogs = await Blog.find().sort({ _id: -1 });
  res.status(200).json({ success: true, result: blogs });
};

const detailBlog = async (req, res) => {
  try {
    const blog = await Blog.findOne({ titleUrl: req.params.titleUrl });

    if (!blog) {
      return res.status(404).json({ message: 'Blog bulunamadı' });
    }

    res.status(200).json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Sunucu hatası' });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const existingBlog = await Blog.findById(id);
    await Blog.findByIdAndDelete(id);
    console.log(existingBlog);
    res.status(200).json({
      message: `Blog Silme İşlemi Başarılı: ${existingBlog.title}`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Sunucu Hatası!' });
  }
};

const editBlog = async (req, res) => {
  try {
    console.log('Received body:', req.body); // Gönderilen veriyi kontrol edin

    const { titleUrl } = req.params;
    const existingBlog = await Blog.findOne({ titleUrl });

    if (!existingBlog) {
      return res.status(404).json({ message: 'Blog bulunamadı' });
    }

    const blogData = req.body; // blogData'ya erişmeye çalışın
    if (!blogData) {
      return res.status(400).json({ message: 'Blog verisi eksik' });
    }

    let newImages = [];
    if (Array.isArray(blogData.images)) {
      newImages = blogData.images;
    }

    let imagesToDelete = existingBlog.images.filter(
      (img) => !newImages.some((newImg) => newImg.public_id === img.public_id)
    );

    for (let image of imagesToDelete) {
      await cloudinary.uploader.destroy(image.public_id);
    }

    let allImage = [];
    if (newImages.length > 0) {
      for (let image of newImages) {
        if (!image.public_id) {
          const result = await cloudinary.uploader.upload(image.file, {
            folder: 'blogImages',
          });
          allImage.push({
            public_id: result.public_id,
            url: result.secure_url,
          });
        } else {
          allImage.push(image);
        }
      }
    }

    blogData.images = allImage;

    req.body.titleUrl = generateSlug(req.body.title);

    await Blog.findOneAndUpdate({ titleUrl }, blogData, { new: true });

    res.status(200).json({
      message: 'Düzenleme başarılı',
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Düzenleme başarısız!', errorMessage: error.message });
  }
};

const searchBlogs = async (req, res) => {
  console.log('Girdi kanks');
  try {
    const { title } = req.params; // Burada title query parametresini alıyoruz
    console.log('Search term:', title); // Debugging için log ekleyin

    if (!title) {
      return res
        .status(400)
        .json({ message: 'Arama yapmak istediğiniz kelimeyi girin!' });
    }

    const blogs = await Blog.find({
      title: { $regex: title, $options: 'i' },
    });

    res.status(200).json({ success: true, result: blogs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Sunucu Hatası!' });
  }
};

module.exports = {
  createBlog,
  allBlog,
  detailBlog,
  deleteBlog,
  editBlog,
  searchBlogs,
};
