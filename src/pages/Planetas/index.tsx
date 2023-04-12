import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../../components/Button";
import { PlanetList } from "../../models/planets";
import api from "../../services/axios";

const Planetas = () => {
  const [planetData, setPlanetData] = useState<PlanetList>();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  console.log(location.pathname);

  const fetchApi = (pageList: number) => {
    setLoading(true);

    api.get("planets", { params: { page: pageList } }).then((res) => {
      setPlanetData(res.data);
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
        planetData?.results?.map((result) => {
          return (
            <p key={result.name + result.name}>
              Nome: {result.name} /<br></br> Clima {result.climate} /<br></br>{" "}
              Population {result.population} /<br></br> Terreno {result.terrain}
            </p>
          );
        })
      )}

      <div>
        {page > 1 && <Button onClick={fetchPrevious} title="Previous" />}
        {planetData && planetData?.count > 10 * page && (
          <Button onClick={fecthNext} title="Next" />
        )}
      </div>
    </div>
  );
};

export default Planetas;
