import React from "react";
import { Link } from "react-router-dom";
import ProfileImg from "../asset/Profile.png";
import ProfileWoman from "../asset/Profile-woman.png";

export default function Profile({ img, name, gender, id }) {
  return (
    <>
      <Link to={`/profile/${id}`}>
        {/* prettier-ignore */}
        <div className="profile-img">
            {img ? <img src={`https://image.tmdb.org/t/p/w200/${img}`} alt={name} /> : gender === 1 ? 
            <img src={ProfileWoman} alt={name} /> : <img src={ProfileImg} alt={name}/>}
        </div>
        <div className="profile-info">
          <p>{name}</p>
        </div>
      </Link>
    </>
  );
}
