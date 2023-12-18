import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { ProductType } from '@/types/productType';

export const useApi = () => {
  const [data, setData] = useState<ProductType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse = await axios.get(
          'https://657ad0f9394ca9e4af12bb3e.mockapi.io/api/v1/services'
        );
        setData(response.data);
      } catch (error) {
        setError('Erro ao carregar os dados da API.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
