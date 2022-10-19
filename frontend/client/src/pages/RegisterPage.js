import React, { useState } from 'react';
import Layout from 'components/Layout';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


const RegisterPage = () => {
  const { registered } = useSelector(state => state.user)

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });

  const { first_name, last_name, email, password } = formData;

  if(registered) {
    return <Navigate to="/login" />
  }
  return (
    <Layout title="Auth Site | Register" content="Register page">
      <h1>Register for an account</h1>
      <form>
        <div>
          <label htmlFor='first_name'>First Name</label>
          <input 
          type="text"
          name="first_name"

          />
        </div>
      </form>
    </Layout>
  )
}

export default RegisterPage;