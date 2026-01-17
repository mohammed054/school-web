import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';

const EditableText = ({ section, field, children }) => {
  const { isAdmin } = useAdmin();
  const [isEditing, setIsEditing] = useState(false);

  if (!isAdmin) {
    return <>{children}</>;
  }

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleCancel = (e) => {
    e.stopPropagation();
    setIsEditing(false);
  };

  const handleConfirm = (e) => {
    e.stopPropagation();
    setIsEditing(false);
  };

  return (
    <div className="editable-text-wrapper" onClick={handleClick}>
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
