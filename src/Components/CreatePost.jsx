import React, { useState } from "react";
import "../style/createpost.css";
import { createPost } from "../redux/posts/post.actions";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export let CreatePost = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    subject: "",
    image: "",
    InMind: "",
  });

  const handleCreatePost = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      setPost({
        ...post,
        image: base64String,
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    dispatch(createPost(post));
    handleClose();
  };

  return (
    <div className="post-model">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="border-0">
          <Modal.Title>Create a post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="subject" className="subject">
            Subject
          </label>{" "}
          <br />
          <input
            onChange={handleCreatePost}
            name="subject"
            type="text"
            id="subject"
            placeholder="Galápagos Islands, Ecuador"
            className="input-type"
          />
          <div className="file-upload mt-3" onChange={handleFileChange}>
            <img id="img" src="/image/imageIcon.png" alt="" />
            <input
              name="image"
              type="file"
              id="fileInput"
              accept="image/*"
              style={{ display: "none" }}
            />
            <label htmlFor="fileInput" className="custom-file-upload m-1">
              Add your image
            </label>
          </div>
          <dl className="mt-3">
            <dd>
              <dt className="mb-1" style={{ color: "#717171" }}>
                What's in your mind
              </dt>
              <textarea
                id="w3review"
                onChange={handleCreatePost}
                name="InMind"
                rows="3"
                cols="20"
              />
            </dd>
          </dl>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <div className="publicButton">
            <Button variant="primary" onClick={handleSubmit}>
              Publish
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
