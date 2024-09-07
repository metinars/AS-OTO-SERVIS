import React from 'react';
import { useDropzone } from 'react-dropzone';
import classes from './ImageDropzone.module.css';

const ImageDropzone = ({ files = [], setFiles }) => {
  const onDrop = (acceptedFiles) => {
    const uploadedFiles = acceptedFiles.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleRemoveFile = (fileUrl) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.url !== fileUrl));
  };

  return (
    <div>
      <div {...getRootProps()} className={classes.dropzone}>
        <input {...getInputProps()} />
        <p>Görselleri sürükleyip bırakın veya buraya tıklayın</p>
      </div>
      <div className={classes.preview}>
        {files.map((file, index) => (
          <div key={index} className={classes.previewContainer}>
            <img src={file.url} alt={`preview ${index}`} />
            <button
              className={classes.removeBtn}
              onClick={() => handleRemoveFile(file.url)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageDropzone;
