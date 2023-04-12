import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../../components/Button";
import { ShipList } from "../../models/ship";
import api from "../../services/axios";

const Planetas = () => {
  const [shipData, setShipData] = useState<ShipList>();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  console.log(location.pathname);

  const fetchApi = (pageList: number) => {
    setLoading(true);

    api.get("starships", { params: { page: pageList } }).then((res) => {
      setShipData(res.data);
      setLoading(false);
      console.log(res.data);
    });
  };

  useEffect(() => {
    fetchApi(page);
  }, []);

  const fetchPrevious = () => {
    const newPage = page - 1;
    setPage(newPage);
    fetchApi(newPage);
  };

  const fecthNext = () => {
    const newPage = page + 1;
    setPage(newPage);
    fetchApi(newPage);
  };
  return (
    <div
      style={{
        backgroundColor: "#1b1e23",
        height: "100vh",
        color: "white",
        padding: "1rem",
      }}
    >
      {loading ? (
        <p>Loading..</p>
      ) : (
        shipData?.results?.map((result) => {
          return <p key={result.name + result.name}>{result.name}</p>;
        })
      )}

      <div>
        {page > 1 && <Button onClick={fetchPrevious} title="Previous" />}
        {shipData && shipData?.count > 10 * page && (
          <Button onClick={fecthNext} title="Next" />
        )}
      </div>
    </div>
  );
};

export default Planetas;
