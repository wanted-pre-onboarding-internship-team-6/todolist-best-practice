import { useState, useEffect } from 'react';

export default function useQuery(fetcher, { onSuccess, onError } = {}) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetcher();
        setData(response.data);

        if (onSuccess) onSuccess(response.data);
      } catch (error) {
        setError(error);

        if (onError) onError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isLoading, data, error };
}
