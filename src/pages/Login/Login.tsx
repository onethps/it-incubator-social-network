import React from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { userLoginType } from 'api/auth/types';
import style from 'pages/Login/Login.module.scss';
import { loginTC } from 'store/reducers/login';
import { AppDispatch } from 'store/store';

const Login = () => {
  const dispatch: AppDispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userLoginType>({
    mode: 'all',
  });

  const onSubmit = (data: userLoginType) => dispatch(loginTC(data));

  return (
    <div className={style.container}>
      <div className={style.login}>
        <form onSubmit={handleSubmit(onSubmit)} className={style.loginForm}>
          <h2>Sign Into Your Account</h2>

          <div className={style.inputBox}>
            <input
              type="text"
              placeholder="Email"
              className={errors.email ? style.active : ''}
              {...register('email', { required: 'email' })}
            />
            {errors.email && <span>Email is required</span>}
          </div>

          <div className={style.inputBox}>
            <input
              type="password"
              placeholder="Password"
              className={errors.password ? style.active : ''}
              {...register('password', { required: 'password' })}
            />
            {errors.password && <span>Password is required</span>}
          </div>

          <input type="submit" className={style.submitButton} value="LOGIN" />
        </form>
      </div>
    </div>
  );
};

export default Login;
