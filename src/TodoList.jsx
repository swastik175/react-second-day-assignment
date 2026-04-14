import React from "react";

export default function TodoList() {
    const todos = [
        { id: 1, task: "Learn React" },
        { id: 2, task: "Practice Hooks" },
        { id: 3, task: "Build Project" },
        { id: 4, task: "Deploy Live" }
    ];

    return (
        <ul>
            {todos.map((item) => (
                <li key={item.id}>
                    {item.task}
                    <button>Delete</button>
                </li>
            ))}
        </ul>
    );
}