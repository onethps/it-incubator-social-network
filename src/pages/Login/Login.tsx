import React from 'react';

import { useForm } from 'react-hook-form';

import s from 'pages/Login/Login.module.scss';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
  });

  const onSubmit = (data: any) => console.log(data);
  return (
    <div className={s.container}>
      <div className={s.login}>
        <form onSubmit={handleSubmit(onSubmit)} className={s.loginForm}>
          <h2>Sign Into Your Account</h2>

          <div className={s.inputBox}>
            <input
              placeholder="Email"
              className={errors.Email ? s.active : ''}
              {...register('Email', { required: 'Email' })}
            />
            {errors.Email && <span>Email is required</span>}
          </div>

          <div className={s.inputBox}>
            <input
              placeholder="Password"
              className={errors.Password ? s.active : ''}
              {...register('Password', { required: 'Password' })}
            />
            {errors.Password && <span>Password is required</span>}
          </div>

          <input type="submit" className={s.submitButton} value="LOGIN" />
        </form>
      </div>
    </div>
  );
};

export default Login;
