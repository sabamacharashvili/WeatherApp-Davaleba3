import React from 'react';

export default function ErrorCard({ message }) {
  return (
    <div className="error-card">
      <div className="error-title">ვერ მოიძებნა</div>
      <div className="error-message">✕ {message}</div>
    </div>
  );
}