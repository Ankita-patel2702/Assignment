import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000/users";

const Table = () => {
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({ name: "", email: "", id: null });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const res = await axios.get(API_URL);
        setUsers(res.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.id) {
            await axios.put(`${API_URL}/${form.id}`, form);
        } else {
            await axios.post(API_URL, form);
        }
        setForm({ name: "", email: "", id: null });
        fetchUsers();
    };

    const handleDelete = async (id) => {
        await axios.delete(`${API_URL}/${id}`);
        fetchUsers();
    };

    const handleEdit = (user) => {
        setForm(user);
    };

    const handlePatch = async (id, newName) => {
        await axios.patch(`${API_URL}/${id}`, { name: newName });
        fetchUsers();
    };

    return (
        <div>
            <h2>User Table</h2>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <button type="submit">{form.id ? "Update" : "Add"} User</button>
            </form>

            <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
                <thead>
                    <tr><th>ID</th><th>Name</th><th>Email</th></tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td><td>{user.name}</td><td>{user.email}</td>
                            <td>
                                <button onClick={() => handleEdit(user)}>Edit</button>
                                <button onClick={() => handleDelete(user.id)}>Delete</button>
                                <button onClick={() => handlePatch(user.id, "Updated Name")}>
                                    Patch Name
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;