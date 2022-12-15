import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();
  const [searchMovie, setSearchMovie] = useState("");
  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="영화를 검색해보세요"
          onChange={(e) => {
            setSearchMovie(e.currentTarget.value);
            //console.log(searchMovie);
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              navigate({
                pathname: "/search",
                search: `${createSearchParams({
                  movie: searchMovie,
                })}`,
              });
            }
          }}
        />
        <button
          onClick={() => {
            navigate(`/search?movie=${searchMovie}`);
          }}
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </>
  );
}
