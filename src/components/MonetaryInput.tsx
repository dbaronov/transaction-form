import React, { useState } from 'react';

interface MonetaryInputProps {
    handleChange?: (newValue: number) => void
}

const MonetaryInput = (props: MonetaryInputProps) => {
    const [value, setValue] = useState("0.00")

    const roundToQuarter = (num: number) => {
      return Math.round(num * 100) / 100;
    }
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = parseFloat(event.target.value);

        if (isNaN(inputValue)) {
          setValue("0.00");
          return;
        }

        const roundedValue = roundToQuarter(inputValue);
        setValue(roundedValue.toFixed(2))
        props.handleChange && props.handleChange(roundedValue)
      };
    return (
        <div>
            <input type='text' value={value} onChange={handleChange} placeholder="Enter a number" />
        </div>
    )
}

export default MonetaryInput
