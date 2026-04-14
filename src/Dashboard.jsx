import React from "react";
export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>

            <UserProfile1 username="Alice" age={25} isAdmin={true} />
            <UserProfile2 username="Bob" age={30} isAdmin={false} />
            <UserProfile3 username="Charlie" age={22} isAdmin={true} />

        </div>
    );
}

const UserProfile1 = ({ username, age, isAdmin = false }) => {
    return (
        <div>
            <h2>User Profile</h2>
            <p><strong>Username:</strong> {username}</p>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Admin:</strong> {isAdmin ? "Yes" : "No"}</p>
        </div>
    );
};

const UserProfile2 = ({ username, age, isAdmin = false }) => {
    return (
        <div>
            <h2>User Profile</h2>
            <p><strong>Username:</strong> {username}</p>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Admin:</strong> {isAdmin ? "Yes" : "No"}</p>
        </div>
    );
};

const UserProfile3 = ({ username, age, isAdmin = false }) => {
    return (
        <div>
            <h2>User Profile</h2>
            <p><strong>Username:</strong> {username}</p>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Admin:</strong> {isAdmin ? "Yes" : "No"}</p>
        </div>
    );
};