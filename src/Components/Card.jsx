import React from "react";
import "../style/card.css";

const Card = ({ post }) => {
  return (
    <div className="card">
      <div className="card-header d-flex">
        <h4 className="card-title">{post?.subject}</h4>
        <div className="d-flex flex-row ">
          <div className="m-2 ">
            {" "}
            <img src="/image/Rectangle(Stroke).png" height="25px" />
          </div>
          <div className="m-2">
            <img src="/image/Union.png" height="20px" />
          </div>
        </div>
      </div>
      <div className="card-body">
        <img className="card-img-top" src={post?.image} alt="Card image cap" />
        <p className="card-text">{post?.InMind}</p>
        <div className="card-footer">
          <div className="heart">
            {" "}
            <img src="/image/heart.png" height="25px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
