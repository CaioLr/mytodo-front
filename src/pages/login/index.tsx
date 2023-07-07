// import React from 'react'
// import { useState } from "react";
import LoginPage from "../../components/cards/login.component";
// import api from '../../services/api';

const Login = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const history = useHistory();

  // async function handleLogin(e) {
  //   e.preventDefault();

  //   try {
  //     const response = await api.post('api/login', { email, password });
  //     localStorage.setItem('token', response.data.token);

  //     history.push('/lists');
  //   } catch (err) {
  //     alert('Falha no login, tente novamente.');
  //   }
  // }
  return (
    <div className="login-container">
      <LoginPage />
    </div>
  );
};

export default Login;
