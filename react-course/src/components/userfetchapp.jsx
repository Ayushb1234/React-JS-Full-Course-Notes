import React, { useEffect, useState } from "react";

function Fetch() {

    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {

                setUsers(data);
                setLoading(false);

            })
            .catch((err) => {

                setError("Failed to fetch data");
                setLoading(false);

            });

    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <div>

            <h1>User List</h1>

            {users.map((user) => (
                <div key={user.id}>

                    <h3>{user.name}</h3>
                    <p>{user.email}</p>

                </div>
            ))}

        </div>
    );
}

export default Fetch;