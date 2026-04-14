import React, { useState } from "react";

export default function SecretMessage() {
    const [show, setShow] = useState(false);

    const handleChange = (e) => {
        setShow(e.target.checked);
    };

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    onChange={handleChange}
                />
                Show Secret
            </label>

            {show && <p>This is a secret message 🤫</p>}
        </div>
    );
}