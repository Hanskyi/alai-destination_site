import React, { ChangeEvent, FormEvent, useState } from 'react';
import loginImage from '@/assets/images/login_block_images/loginImage.jpg';
import Image from 'next/image';
import loginStyle from '@/features/Login/LoginPage.module.scss';

interface Login {
  username: string;
  password: string;
}

const Login = () => {
  const [login, setLogin] = useState<Login>({
    username: '',
    password: '',
  });

  const submitFormHandler = async (e: FormEvent) => {
    e.preventDefault();

    try {
      console.log(login);
    } catch (e) {
      alert('Error in Field');
    }
  };

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setLogin((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className={loginStyle.login__mainBlockContent}>
      <div className={loginStyle.login__backdrop}></div>
      <div className={loginStyle.login__mainBlockContainer}>
        <h6 className={loginStyle.login__title}>Have an account?</h6>
        <form onSubmit={submitFormHandler}>
          <div className={loginStyle.login__form_control}>
            <input
              required
              type="text"
              name="username"
              value={login.username}
              onChange={inputChangeHandler}
              placeholder="Username"
            />
          </div>

          <div className={loginStyle.login__form_control}>
            <input
              required
              type="password"
              name="password"
              value={login.password}
              onChange={inputChangeHandler}
              placeholder="Password"
            />
          </div>
          <button type="submit">SIGN IN</button>
        </form>
      </div>
      <Image
        width={1920}
        height={1080}
        className={loginStyle.login__mainBlockImage}
        src={loginImage}
        alt="Login Image"
      />
    </div>
  );
};

export default Login;
