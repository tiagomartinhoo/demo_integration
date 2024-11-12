import React, { useEffect, useState } from "react";
import { getUsers } from "../services/userService";

function UserList({ userAdded }) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, [userAdded]);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const userList = await getUsers();
            setUsers(userList);
        } catch (error) {
            console.error("Error fetching users", error);
        }
        finally{
            setLoading(false);
        }
    };

    return (
        <div className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 m-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-700">User List</h3>
            <ul className="divide-y divide-gray-300 py-2">
                {loading ?  
                    <li className="py-2 text-center text-gray-500">Loading...</li> :
                users ? users.map((user) => (
                    <li key={user.id} className="py-2 flex justify-between">
                        <span className="text-gray-800">{user.name}</span>
                    </li>
                )): 
                <li className="py-2 text-center text-gray-500">No users found </li>}
            </ul>
        </div>
    );
}

export default UserList;
