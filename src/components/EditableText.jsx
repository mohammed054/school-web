import React, { useState, useEffect } from 'react';
import { useAdmin, useContent } from '../context/AdminContext';

const EditableText = ({ section, field, children, tag: Tag = 'span' }) => {
  const { isAdmin, editingField, startEdit, stopEdit } = useAdmin();
  const { content, updateContent } = useContent();
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState('');
  const [saving, setSaving] = useState(false);

  const currentValue = content[section]?.[field] || '';
  const isThisEditing = editingField?.section === section && editingField?.field === field;

  useEffect(() => {
    if (isThisEditing) {
      setEditValue(currentValue);
    }
  }, [isThisEditing, currentValue]);

  if (!isAdmin) {
    return <>{children}</>;
  }

  const handleClick = (e) => {
    e.stopPropagation();
    if (!isThisEditing) {
      startEdit(section, field);
    }
  };

  const handleCancel = (e) => {
    e.stopPropagation();
    stopEdit();
  };

  const handleConfirm = async (e) => {
    e.stopPropagation();
    setSaving(true);
    const result = await updateContent(section, field, editValue);
    setSaving(false);
    if (result.success) {
      stopEdit();
    } else {
      alert('فشل الحفظ: ' + result.message);
    }
  };

  const handleChange = (e) => {
    setEditValue(e.target.value);
  };

  if (isThisEditing) {
    return (
      <span className={`editable-text-wrapper editing`}>
        <input
          type="text"
          value={editValue}
          onChange={handleChange}
          className="editable-input"
          onClick={(e) => e.stopPropagation()}
          disabled={saving}
          autoFocus
        />
        <div className="editable-controls">
          <button
            className="editable-btn cancel-btn"
            onClick={handleCancel}
            title="إلغاء"
            disabled={saving}
          >
            ✕
          </button>
          <button
            className="editable-btn confirm-btn"
            onClick={handleConfirm}
            title="حفظ"
            disabled={saving}
          >
            {saving ? '...' : '✓'}
          </button>
        </div>
      </span>
    );
  }

  return (
    <span
      className={`editable-text-wrapper ${isThisEditing ? 'editing' : ''}`}
      onClick={handleClick}
      title="اضغط للتعديل"
    >
      {currentValue}
      {isThisEditing && (
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
    </span>
  );
};

export default EditableText;
