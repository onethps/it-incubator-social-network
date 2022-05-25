import React from 'react';

import s from './Login.module.scss';

const Login = () => (
  <div className={s.container}>
    <div className={s.login}>
      <div className={s.loginForm}>
        <h2>Sign Into Your Account</h2>
        <input placeholder="Email" />
        <input placeholder="Password" />
        <button>LOGIN</button>
      </div>
    </div>
  </div>
);

export default Login;
