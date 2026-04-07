import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    first: '',
    last: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const errMessage = {
    first: 'First name cannot be empty',
    last: 'Last name cannot be empty',
    email: 'Invalid email address',
    password: 'Password must be greater than 7 characters',
    confirmPassword: 'Passwords do not match'
  }
  const [err, setErr] = useState({
    first: '',
    last: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const handleChange = (val, field) => {
    setFormData(prev=>({...prev, [field]: val}))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formData.first)setErr(prev=>({...prev, first: errMessage.first}))
    else setErr(prev=>({...prev, first: ''}))
    if(!formData.last)setErr(prev=>({...prev, last: errMessage.last}))
    else setErr(prev=>({...prev, last: ''}))
    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email))setErr(prev=>({...prev, email: errMessage.email}))
    else setErr(prev=>({...prev, email: ''}))
    if(formData.password.length<8)setErr(prev=>({...prev, password: errMessage.password}))
    else setErr(prev=>({...prev, password: ''}))
    if(formData.password!==formData.confirmPassword)setErr(prev=>({...prev, confirmPassword: errMessage.confirmPassword}))
    else setErr(prev=>({...prev, confirmPassword: ''}))
    const check = (Object.values(err).every(value => !value || value === ''))
    if(check)console.log('Form submitted successfully');
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          onChange={e=>handleChange(e.target.value, 'first')}
          data-testid="first-name-id"
          type="text"
          name="firstName"
          placeholder="First Name"
        />
        <p data-testid="first-name-error-id" className="error">{err.first}</p>
        <input
          onChange={e=>handleChange(e.target.value, 'last')}
          data-testid="last-name-id"
          type="text"
          name="lastName"
          placeholder="Last Name"
        />
        <p data-testid="last-name-error-id" className="error">{err.last}</p>
        <input
          onChange={e=>handleChange(e.target.value, 'email')}
          data-testid="email-id"
          type="email"
          name="email"
          placeholder="Email Address"
        />
        <p data-testid="email-error-id" className="error">{err.email}</p>
        <input
          onChange={e=>handleChange(e.target.value, 'password')}
          data-testid="password-id"
          type="password"
          name="password"
          placeholder="Password"
        />
        <p data-testid="password-error-id" className="error">{err.password}</p>
        <input
          onChange={e=>handleChange(e.target.value, 'confirmPassword')}
          data-testid="confirm-password-id"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
        <p data-testid="confirm-password-error-id" className="error">{err.confirmPassword}</p>
        <button type="submit">Sign Up</button>
      </form>
    </Wrapper>
  );
};

export default SignUpForm;

const Wrapper = styled.div`
  margin-top: 24px;
  font-family: sans-serif;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    padding: 8px 12px;
    font-size: 18px;
    margin-bottom: 6px;
    width: clamp(200px, 40%, 400px)
  }

  button {
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 4px;
    background-color: #333;
    color: #fff;
    cursor: pointer;
    margin-top: 24px;

    &:hover {
      opacity: 0.8;
    }
  }

  .error {
    margin: 0 0 24px 0;
    color: red;
  }
`;
