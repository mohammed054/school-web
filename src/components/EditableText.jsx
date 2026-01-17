import React from 'react';
import { useAdmin } from '../context/AdminContext';

const EditableText = ({ section, field, children }) => {
  const { isAdmin, editingField, startEdit, stopEdit } = useAdmin();
  const isEditing = editingField?.section === section && editingField?.field === field;

  if (!isAdmin) {
    return <>{children}</>;
  }

  const handleClick = (e) => {
    e.stopPropagation();
    if (!isEditing) {
      startEdit(section, field);
    }
  };

  const handleCancel = (e) => {
    e.stopPropagation();
    stopEdit();
  };

  const handleConfirm = (e) => {
    e.stopPropagation();
    stopEdit();
  };

  return (
    <div 
      className={`editable-text-wrapper ${isEditing ? 'editing' : ''}`} 
      onClick={handleClick}
    >
      {children}
      
      {isEditing && (
        <div className="editable-controls">
          <button 
            className="editable-btn cancel-btn" 
            onClick={handleCancel}
            title="إلغاء"
          >
            ✕
          </button>
          <button 
            className="editable-btn confirm-btn" 
            onClick={handleConfirm}
            title="حفظ"
          >
            ✓
          </button>
        </div>
      )}
    </div>
  );
};

export default EditableText;
