import React, { useState } from "react";

const InputComponent: React.FC = () => {
    const [value, setValue] = useState<string>('');

    const handleInputChange: React.EventHandler<React.ChangeEvent<HTMLInputElement>> = (event) => {
        const newString = event.target.value;
        setValue(newString);
    }

    return (
        <input onChange={handleInputChange} value={value} />
    )
}

export default InputComponent;