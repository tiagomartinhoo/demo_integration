import React, { useState } from "react";
import { createUser } from "../services/userService";

function UserForm({ onUserAdded }) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newUser = await createUser({ name, password });
            onUserAdded(newUser);
            setName("");
            setPassword("");
        } catch (error) {
            console.error("Error creating user", error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-2xl px-10 pt-8 pb-8 m-6"
        >
            <h3 className="text-2xl font-bold mb-4 text-gray-700 pb-2">Create New User</h3>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <button
                type="submit"
                className="bg-bluez hover:bg-pinkz hover:opacity-50 text-sm text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline transition duration-500"
            >
                Add User
            </button>
        </form>
    );
}

export default UserForm;
