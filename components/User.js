import React, { useEffect, useState } from "react";
import api from "../api/api";

const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await api.get("/user/get-list");
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Users</h1>
            {users.length > 0 ? (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.name} - {user.email}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No users found.</p>
            )}
        </div>
    );
};

export default User;
