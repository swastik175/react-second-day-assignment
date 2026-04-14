import React, { useState } from "react";

export default function SearchBar() {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                onChange={handleChange}
            />

            <p>{text.toUpperCase()}</p>
        </div>
    );
}