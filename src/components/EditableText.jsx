import React, { useState, useEffect } from 'react';
import { useAdmin, useContent } from '../context/AdminContext';

const EditableText = ({ section, field, children, className = '', style = {} }) => {
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
    return React.cloneElement(children, {
      children: (
        <>
          <input
            type="text"
            value={editValue}
            onChange={handleChange}
            className="editable-inline-input"
            onClick={(e) => e.stopPropagation()}
            disabled={saving}
            autoFocus
            style={{ 
              width: '100%', 
              minWidth: '100px',
              border: 'none',
              borderBottom: '2px solid #1a5490',
              background: 'transparent',
              font: 'inherit',
              color: 'inherit',
              outline: 'none',
              padding: '2px 4px'
            }}
          />
          <span 
            className="editable-inline-controls" 
            onClick={(e) => e.stopPropagation()}
            style={{ marginLeft: '8px' }}
          >
            <button
              className="editable-inline-btn cancel"
              onClick={handleCancel}
              title="إلغاء"
              disabled={saving}
              style={{
                background: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                cursor: 'pointer',
                marginRight: '4px'
              }}
            >
              ✕
            </button>
            <button
              className="editable-inline-btn confirm"
              onClick={handleConfirm}
              title="حفظ"
              disabled={saving}
              style={{
                background: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                cursor: 'pointer'
              }}
            >
              {saving ? '...' : '✓'}
            </button>
          </span>
        </>
      )
    });
  }

  return React.cloneElement(children, {
    className: `${className} editable-transparent`.trim(),
    style: { ...style, cursor: 'pointer' },
    onClick: handleClick,
    'data-editable': `${section}_${field}`,
    children: currentValue
  });
};

export default EditableText;
