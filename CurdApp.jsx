import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API = 'http://localhost:3001/users';

function CurdApp() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '' });
  const [editId, setEditId] = useState(null);


  const fetchUsers = () => {
    axios.get(API).then(res => setUsers(res.data)).catch(console.error);
  };

  useEffect(() => {
    fetchUsers();
  }, []);


  const addUser = () => {
    axios.post(API, form).then(() => {
      setForm({ name: '', email: '' });
      fetchUsers();
    });
  };


  const updateUser = () => {
    axios.put(`${API}/${editId}`, form).then(() => {
      setForm({ name: '', email: '' });
      setEditId(null);
      fetchUsers();
    });
  };


  const patchUserName = (id) => {
    const newName = prompt('Enter new name:');
    if (newName) {
      axios.patch(`${API}/${id}`, { name: newName }).then(fetchUsers);
    }
  };


  const deleteUser = (id) => {
    axios.delete(`${API}/${id}`).then(fetchUsers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editId ? updateUser() : addUser();
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>React + JSON Server CRUD</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          required
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          required
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
        <button type="submit">{editId ? 'Update' : 'Add'}</button>
      </form>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            <b>{user.name}</b> — {user.email}{' '}
            <button onClick={() => {
              setForm({ name: user.name, email: user.email });
              setEditId(user.id);
            }}>Edit</button>{' '}
            <button onClick={() => patchUserName(user.id)}>Patch</button>{' '}
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CurdApp;
