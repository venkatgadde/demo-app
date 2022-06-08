import { createContext, useState, useEffect, useContext } from "react";

const TransfersContext = createContext();

export const TransfersContextProvider = ({ children }) => {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Something wrong')
        }
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        const e = { type: 'error', message: 'Sorry, something went wrong' };
        setLoading(false);
        setError(e);
      }
    };

    fetchData();
  }, []);

  const contextPayload = {
    loading,
    data,
    error
  };

  return (
    <TransfersContext.Provider value={contextPayload}>
      {children}
    </TransfersContext.Provider>
  )
}

export const useTransfersContext = () => useContext(TransfersContext);