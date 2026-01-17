import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';

const LoginModal = () => {
  const { showLoginModal, closeLoginModal, login, loading } = useAdmin();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!showLoginModal) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    const result = await login(username, password);
    if (!result.success) {
      setError(result.message || 'فشل تسجيل الدخول');
    }
    setIsSubmitting(false);
  };

  const handleCancel = () => {
    setUsername('');
    setPassword('');
    setError('');
    closeLoginModal();
  };

  return (
    <div className="login-modal-overlay" onClick={handleCancel}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="login-modal-title">تسجيل الدخول للمشرف</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="login-form-group">
            <label htmlFor="username">اسم المستخدم</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="أدخل اسم المستخدم"
              disabled={isSubmitting}
              autoComplete="username"
            />
          </div>
          
          <div className="login-form-group">
            <label htmlFor="password">كلمة المرور</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="أدخل كلمة المرور"
              disabled={isSubmitting}
              autoComplete="current-password"
            />
          </div>
          
          {error && <div className="login-error">{error}</div>}
          
          <div className="login-modal-buttons">
            <button 
              type="button" 
              className="login-btn cancel" 
              onClick={handleCancel}
              disabled={isSubmitting}
            >
              إلغاء
            </button>
            <button 
              type="submit" 
              className="login-btn submit"
              disabled={isSubmitting || !username || !password}
            >
              {isSubmitting ? 'جاري...' : 'تسجيل الدخول'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
