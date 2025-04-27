import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const login = async () => {
    try {
      const res = await axios.post('http://127.0.0.1:8000/token',
        new URLSearchParams({
          username,
          password
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );
      localStorage.setItem('token', res.data.access_token);
      alert('Login successful!');
      router.push('/dashboard');
    } catch (err) {
      alert('Error logging in. Check your username or password.');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Login</h1>
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
      <button onClick={login}>Login</button>
    </div>
  );
}
