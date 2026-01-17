import React, { useState, useRef } from 'react';
import { useAdmin, useContent } from '../context/AdminContext';

const EditableImage = ({ section, field, src, alt, className, width, height, loading }) => {
  const { isAdmin, editingField, startEdit, stopEdit } = useAdmin();
  const { uploadImage, content } = useContent();
  const [isEditing, setIsEditing] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const currentValue = content[section]?.[field] || src;
  const isThisEditing = editingField?.section === section && editingField?.field === field;

  const handleClick = (e) => {
    e.stopPropagation();
    if (isAdmin && !isThisEditing) {
      startEdit(section, field);
      setIsEditing(true);
    }
  };

  const handleCancel = (e) => {
    e.stopPropagation();
    setIsEditing(false);
    setPreview(null);
    stopEdit();
  };

  const handleFileSelect = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    setUploading(true);

    const result = await uploadImage(file);
    setUploading(false);

    if (result.success) {
      setContent(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: result.url
        }
      }));
      setIsEditing(false);
      setPreview(null);
      stopEdit();
    } else {
      alert('فشل رفع الصورة: ' + result.message);
      setPreview(null);
    }
  };

  const handleChangeImage = () => {
    fileInputRef.current?.click();
  };

  if (!isAdmin) {
    return (
      <img
        src={currentValue}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
      />
    );
  }

  return (
    <div className={`editable-image-wrapper ${isThisEditing ? 'editing' : ''}`} onClick={handleClick}>
      <img
        src={preview || currentValue}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        style={{ opacity: uploading ? 0.5 : 1 }}
      />

      {isThisEditing && (
        <>
          <div className="editable-image-overlay">
            {uploading ? (
              <span className="editable-image-status">جاري الرفع...</span>
            ) : (
              <button
                className="editable-image-btn"
                onClick={handleChangeImage}
              >
                📷 تغيير الصورة
              </button>
            )}
          </div>
          <div className="editable-controls">
            <button
              className="editable-btn cancel-btn"
              onClick={handleCancel}
              title="إلغاء"
            >
              ✕
            </button>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            accept="image/*"
            style={{ display: 'none' }}
          />
        </>
      )}
    </div>
  );
};

export default EditableImage;
