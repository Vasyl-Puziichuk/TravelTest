import { useState, useEffect } from "react";
import axios from "axios";

const fetchHotels = (places) => {
  const [hotels, setHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      if (places === 1) {
        const response = await axios.get(
          "http://192.168.0.101:5003/api/hotels/byCity/65ff0aa767b1fdad57566bb2?limit=3"
        );
        setHotels(response.data);
      } else {
        const response = await axios.get(
          "http://192.168.0.101:5003/api/hotels/byCity/65ff0aa767b1fdad57566bb2"
        );
        setHotels(response.data);
      }

      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { hotels, isLoading, error, refetch };
};

export default fetchHotels;
