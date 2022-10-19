import React, { useEffect, useState } from 'react';
import Layout from 'components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { resetRegistered, login } from 'features/user';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.user)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    dispatch(resetRegistered());
  }, []) 

  const { email, password } = formData;

  const onChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value });
  }

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(login({ email, password }));

    

  }
  return (
    <Layout title="Auth Site | Login" content="Login page">
      <h1>Login to an account</h1>
      <form>
        <div className='form-group'>
          <label className="form-label" htmlFor='email'>Email</label>
          <input 
          className='form-control'
          type="email"
          name="email"
          onChange={onChange}
          value={email}
          required
          />
        </div>
        <div className='form-group'>
          <label className="form-label" htmlFor='password'>Password</label>
          <input 
          className='form-control'
          type="password"
          name="password"
          onChange={onChange}
          value={password}
          required
          />
        </div>
        { loading ? (
          <div className='spinner-border text-primary' role="status">
            <span className='visually-hidden'>Loading...</span>
          </div>
        ) : (
          <button className='btn btn-primary mt-4' onSubmit={onSubmit}>
          Login
        </button>
        )}
        
      </form>
    </Layout>
  )
}

export default LoginPage;