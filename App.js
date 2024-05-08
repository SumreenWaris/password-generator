import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const length = 12; // Change the length of the generated password as needed
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+'; // You can customize the characters included in the password
    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(newPassword);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  return (
    <div>
      <h2>Password Generator</h2>
      <div>
        <input type="text" value={password} readOnly />
        <button onClick={generatePassword}>Generate Password</button>
        <span onClick={copyPassword} style={{ cursor: 'pointer' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
            <path d="M5 1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2V1zM3 5v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5H3z"/>
            <path fillRule="evenodd" d="M5.5 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V3h-2V2.5zm1.5 5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z"/>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default PasswordGenerator;
