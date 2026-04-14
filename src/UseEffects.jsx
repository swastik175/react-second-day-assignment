import React, { useEffect, useRef } from "react";

export default function UseEffects() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <form>
            <input
                type="text"
                ref={inputRef}
                placeholder="First Name"
            />
            <br />

            <input
                type="text"
                placeholder="Last Name"
            />
        </form>
    );
}