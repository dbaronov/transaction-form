import React, { useState } from 'react';

interface MonetaryInputProps {
  precision?: number,
  handleChange?: (newValue: number) => void
}

const MonetaryInput = (props: MonetaryInputProps) => {
  const [value, setValue] = useState("0.00")

  const roundToPrecision = (value: number): number => {
    const p = props.precision === undefined ? 10 ** 2 : 10 ** props.precision
    return Math.round(value * p) / p
  }
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseFloat(event.target.value)

    if (isNaN(inputValue)) {
      setValue("0.00")
      return
    }

    const roundedValue = roundToPrecision(inputValue)
    setValue(roundedValue.toFixed(props.precision || 2))
    props.handleChange && props.handleChange(roundedValue)
  }
  return (
    <div>
      <input type='text' value={value} onChange={handleChange} placeholder="Enter a number" />
    </div>
  )
}

export default MonetaryInput
