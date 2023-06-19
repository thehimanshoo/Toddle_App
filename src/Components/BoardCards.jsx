import React, { useState } from "react";
import "../style/boardCard.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteBoard as deleteBoardAction } from "../redux/posts/post.actions";

export let BoardCards = ({ boardCard }) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [popup, setPopup] = useState(false);

  let handleDots = () => {
    setPopup(!popup);
  };

  let color =
    boardCard.color === "1"
      ? "color-1"
      : boardCard.color === "2"
      ? "color-2"
      : boardCard.color === "3"
      ? "color-3"
      : boardCard.color === "4"
      ? "color-4"
      : "color-1";

  let handlePost = () => {
    navigate("/posts");
  };

  let handleDeleteBoard = (id) => {
    dispatch(deleteBoardAction(id));
  };

  return (
    <>
      <div className={`card-board d-flex flex-row w-50%`}>
        <div className={`card-1 p-1 ${color}`}></div>
        <div className="d-flex p-4 justify-content-center text-box">
          <div className="topic p-2" onClick={handlePost}>
            {boardCard.boardName}
          </div>
          <div className="icon-box" onClick={handleDots}>
            <img src="/image/Union.png" />
          </div>
        </div>
        {popup && (
          <div className="buttons">
            <span
              className="btn btn-sm ml-3"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Edit
            </span>
            <span
              className="btn btn-sm"
              onClick={handleDeleteBoard.bind(this, boardCard.id)}
            >
              Delete
            </span>
          </div>
        )}
      </div>
    </>
  );
};
