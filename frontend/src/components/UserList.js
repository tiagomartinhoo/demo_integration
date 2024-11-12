import React, { useEffect, useState } from "react";
import { getUsers } from "../services/userService";

function UserList({ userAdded }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, [userAdded]);

    const fetchUsers = async () => {
        try {
            const userList = await getUsers();
            setUsers(userList);
        } catch (error) {
            console.error("Error fetching users", error);
        }
    };

    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h3 className="text-2xl font-bold mb-4 text-gray-700">User List</h3>
            <ul className="divide-y divide-gray-300">
                {users !== undefined && users.map((user) => (
                    <li key={user.id} className="py-2 flex justify-between">
                        <span className="text-gray-800">{user.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
