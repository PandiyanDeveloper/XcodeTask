import React, { useState } from "react";
import "./PostUploadModal.css";
import { createNewPost } from "../../Services/postService";

const PostUploadModal = ({ show, onClose, user }) => {
  const [previewUrl, setPreviewUrl] = useState("");
  const [selectedFile, setsselectedFile] = useState();
  const [caption, setCaption] = useState("");

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setsselectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      alert("Please upload only image files!");
      setsselectedFile(null);
      setPreviewUrl("");
    }
  };

  const clearPreview = () => {
    setsselectedFile(null);
    setPreviewUrl("");
    setCaption("");
  };

  // Function for create post
  const createPost = async () => {
    console.log("oooo");
    try {
      const formData = new FormData();
      formData.append("userId", user._id ?? "01");
      formData.append("image", selectedFile);
      formData.append("desc", caption);
      const createRes = await createNewPost(formData);
      if (createRes) {
        onClose();
      }
    } catch (error) {
      console.log("create error", error);
    }
  };

  if (!show) return null;

  return (
    <div className="instagram-modal-overlay">
      <div className="instagram-modal-content">
        <div className="modal-header">
          <div></div>
          <h3>Create new post</h3>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          {!previewUrl ? (
            <div className="upload-area">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3342/3342137.png"
                alt="Upload Icon"
                className="upload-icon"
              />
              <p>Drag and drop an image here</p>
              <label htmlFor="file-upload" className="upload-button">
                Select from computer
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                hidden
              />
            </div>
          ) : (
            <div className="preview-area">
              <div className="image-preview">
                <img src={previewUrl} alt="Preview" className="preview-image" />
              </div>
              <div className="caption-area">
                <textarea
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="Write a caption..."
                  className="caption-input"
                  maxLength={2200}
                />
                <p className="char-count">{caption.length}/2200</p>
              </div>
              <div className="buttons-area">
                <button className="clear-button" onClick={clearPreview}>
                  Remove
                </button>
                <button
                  className="share-button"
                  onClick={() => createPost()}
                  disabled={!caption?.length}
                >
                  Share
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostUploadModal;
