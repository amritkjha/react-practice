import React from 'react';

function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const handleChange = (e, field) => {
    setFormData(prev=>({...prev, [field]: e.target.value}));
  }
  const handleSubmit = () => {
    alert(`name: ${formData.name}, email: ${formData.email} message: ${formData.message}`);
  }
  const inputContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #a9a9a9',
    padding: '12px 6px',
    borderRadius: '6px',
    margin: '9px 0'
  }
  const buttonStyles = {
    padding: '9px 36px',
    backgroundColor: '#24a0ed',
    color: 'white',
    borderRadius: '6px',
    border: 0,
    fontWeight: 'bold',
    fontSize: '15px',
    margin: '0 auto'
  }
  return (
    <form onSubmit={handleSubmit}>
      <div style={inputContainerStyles}>
        <label>Name</label>
        <input onChange={(e)=>handleChange(e, 'name')} />
      </div>
      <div style={inputContainerStyles}>
        <label>Email</label>
        <input onChange={(e)=>handleChange(e, 'email')} />
      </div>
      <div style={inputContainerStyles}>
        <label>Message</label>
        <textarea onChange={(e)=>handleChange(e, 'message')} />
      </div>
      <div>
        <button style={buttonStyles} type='submit'>Send</button>
      </div>
    </form>
  );
}

export default ContactForm;
