import React, { useEffect, useState } from "react";

const DataContext = React.createContext();

function DataContextProvider({ children, url }) {
  const [isFetching, setIsFetching] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length) return;
    fetch(url)
      .then((res) => {
        setData((prevData) => prevData.concat(res.data));
        setIsFetching(false);
      })
      .catch(function (error) {
        console.log(error);
        setIsFetching(false);
      });
  });

  return (
    <DataContext.Provider value={{ isFetching, data }}>
      {children}
    </DataContext.Provider>
  );
}

export { DataContextProvider, DataContext };
