import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    } else {
      fetchContacts();
    }
  }, []);

  const fetchContacts = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await axios.get('http://127.0.0.1:8000/contacts/', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setContacts(res.data);
    } catch (err) {
      console.error(err);
      alert('Failed to fetch contacts. Maybe login again.');
      router.push('/login');
    }
  };

  const createContact = async () => {
    const token = localStorage.getItem('token');
    try {
      await axios.post('http://127.0.0.1:8000/contacts/', {
        name,
        email,
        phone
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Contact added!');
      setName('');
      setEmail('');
      setPhone('');
      fetchContacts();
    } catch (err) {
      console.error(err);
      alert('Failed to add contact.');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>

      <h2>Add Contact</h2>
      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        style={{ display: 'block', marginBottom: 10 }}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ display: 'block', marginBottom: 10 }}
      />
      <input
        placeholder="Phone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        style={{ display: 'block', marginBottom: 10 }}
      />
      <button onClick={createContact}>Add Contact</button>

      <h2>Your Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name} | {contact.email} | {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}
