import React, { useState } from 'react';
import './Login.css';

const Login = props => {
  const { setUser } = props;
  const [formValue, setFormValue] = useState('');

  const handleSubmit = e => {
    if (e) {
      e.preventDefault();
    }
    setUser(formValue);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form form">
      <div className="form-group">
        <label htmlFor="user">Username</label>
        <input
          id="user"
          type="text"
          onChange={e => setFormValue(e.target.value)}
          value={formValue}
        />
      </div>
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Login;
