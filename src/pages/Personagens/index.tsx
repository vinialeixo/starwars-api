import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../../components/Button";
import { People } from "../../models/people";
import api from "../../services/axios";

const Personagens = () => {
  const [peopleData, setPeopleData] = useState<People>();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  console.log(location.pathname);

  const fetchApi = (pageList: number) => {
    setLoading(true);

    api.get("people", { params: { page: pageList } }).then((res) => {
      setPeopleData(res.data);
      setLoading(false);
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
        peopleData?.results?.map((result) => {
          return <p key={result.name + result.skinColor}>{result.name}</p>;
        })
      )}

      <div>
        {page > 1 && <Button onClick={fetchPrevious} title="Previous" />}
        {peopleData && peopleData?.count > 10 * page && (
          <Button onClick={fecthNext} title="Next" />
        )}
      </div>
    </div>
  );
};

export default Personagens;
