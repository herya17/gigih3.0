import React from 'react';

function Login({ loginHandler }) {
  return (
    <>
      <p>Login dulu yuk</p>
      <button onClick={loginHandler}>Login</button>
    </>
  );
}

export default Login;
