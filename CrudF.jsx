import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
    collection, addDoc, getDocs, updateDoc, deleteDoc, doc
} from "firebase/firestore";

const CrudF = () => {
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({ name: "", email: "", id: null });

    const usersCollection = collection(db, "users");

    const fetchUsers = async () => {
        const shot = await getDocs(usersCollection);
        setUsers(shot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.id) {
            await updateDoc(doc(db, "users", form.id), {
                name: form.name,
                email: form.email
            });
        } else {
            await addDoc(usersCollection, form);
        }
        setForm({ name: "", email: "", id: null });
        fetchUsers();
    };

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "users", id));
        fetchUsers();
    };

    const handleEdit = (user) => setForm(user);

    return (
        <div>
            <h3>CRUD Users</h3>
            <form onSubmit={handleSubmit}>
                <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <button type="submit">{form.id ? "Update" : "Add"}</button>
            </form>

            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                        <button onClick={() => handleEdit(user)}>Edit</button>
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CrudF;