import { ChangeEvent, useState } from "react";

export function useInputValue() {
  const [insertValue, setInsertValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInsertValue(e.target.value);
  };

  const handleReset = () => {
    setInsertValue("");
  };

  return { insertValue, onChange: handleChange, handleReset };
}
