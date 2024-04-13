import axios, { AxiosResponse } from "axios";
import { useState } from "react";

export const useAsync = <T>(asyncFunction: () => Promise<AxiosResponse<T>>) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | any>(null);
  const [data, setData] = useState<null | T>(null);

  const asyncState = async () => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const response = await asyncFunction();
      setData(response?.data ?? null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { asyncState, loading, error, data };
};
