import { useState } from 'react';

export default function useMutation(mutateFunction, { onSuccess, onError } = {}) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  async function mutate(...args) {
    try {
      setIsLoading(true);

      const response = await mutateFunction(...args);
      setData(response.data);

      if (onSuccess) onSuccess(response.data);
    } catch (error) {
      setError(error);

      if (onError) onError(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { mutate, isLoading, data, error };
}
