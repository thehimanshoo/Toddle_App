import React, { useState } from "react";
import "../style/createNewBoard.css";
import { useDispatch } from "react-redux";
import { createBoard } from "../redux/posts/post.actions";

let CreateNewBoard = ({ createPost }) => {
  let dispatch = useDispatch();
  let [board, setBoard] = useState({
    id: 0,
    boardName: "",
    color: "",
  });

  let handleBoardName = (e) => {
    setBoard({
      ...board,
      boardName: e.target.value,
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setBoard({
      ...board,
      id: board.id + 1,
    });
    dispatch(createBoard(board));
  };

  let handleColor = (color) => {
    setBoard({
      ...board,
      color: color,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content border-0">
              <div className="modal-header border-0">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Add a name for your board
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div>
                  <input
                    className="textarea"
                    placeholder="Places around the world"
                    onChange={handleBoardName}
                    type="text"
                  />
                </div>
                <div>
                  <span className="color">Select post colour</span>
                  <span> Here are some templates to help you get started</span>
                </div>
                <div className="d-flex mt-2 ">
                  <div
                    className="color-picker custom-color1 m-1"
                    onClick={handleColor.bind(this, "1")}
                  ></div>
                  <div
                    className="color-picker custom-color2 m-1"
                    onClick={handleColor.bind(this, "2")}
                  ></div>
                  <div
                    className="color-picker custom-color3 m-1"
                    onClick={handleColor.bind(this, "3")}
                  ></div>
                  <div
                    className="color-picker custom-color4 m-1"
                    onClick={handleColor.bind(this, "4")}
                  ></div>
                </div>
              </div>

              <div className="modal-footer border-0">
                <button
                  type="submit"
                  className="btn btn-primary  savechange "
                  data-bs-dismiss="modal"
                >
                  Create board
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default CreateNewBoard;
