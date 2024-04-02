import { useState, useEffect } from "react";
import axios from "axios";

const fetchCity = (id) => {
  const [city, setCity] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `http://192.168.0.101:5003/api/cities/${id}`
      );

      setCity(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { city, isLoading, error, refetch };
};

export default fetchCity;
