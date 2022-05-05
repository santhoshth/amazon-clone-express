import React from 'react';
import '../styles/Error.css';

function Error({ error }) {
  return (
    <div className="error">
      <p>{error}</p>
    </div>
  )
}

export default Error;