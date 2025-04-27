import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const register = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/register', {
        username,
        password
      });
      alert('Registration successful! Please login.');
      router.push('/login');
    } catch (err) {
      alert('Error registering user. Maybe username is taken?');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Register</h1>
      <input
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        style={{ display: 'block', marginBottom: 10 }}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ display: 'block', marginBottom: 10 }}
      />
      <button onClick={register}>Register</button>
    </div>
  );
}
