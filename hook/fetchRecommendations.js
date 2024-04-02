import { useState, useEffect } from "react";
import axios from "axios";

const fetchRecommendations = (places) => {
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      if (places === 1) {
        const response = await axios.get(
          "http://192.168.0.101:5003/api/places?limit=3"
        );
        setRecommendations(response.data.places);
        // setIsLoading(false);
      } else {
        const response = await axios.get(
          "http://192.168.0.101:5003/api/places"
          // 10.0.2.2
        );
        setRecommendations(response.data.places);
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

  return { recommendations, isLoading, error, refetch };
};

export default fetchRecommendations;
