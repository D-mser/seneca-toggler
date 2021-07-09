import React, { useEffect, useState } from "react";

const DataContext = React.createContext(null);

function DataContextProvider({ children, url }) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res.questions);
        setIsFetching(false);
      })
      .catch(function (error) {
        console.log(error);
        setIsFetching(false);
      });

    return () => {
      setData([]);
    };
  }, [url]);

  return (
    <DataContext.Provider value={{ data, isFetching }}>
      {children}
    </DataContext.Provider>
  );
}

export { DataContextProvider, DataContext };
