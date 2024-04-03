import { ChangeEvent, useState } from "react";

export function useInputValue() {
  const [insertValue, setInsertValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInsertValue(e.target.value);
  };

  return { insertValue, onChange: handleChange };
}
