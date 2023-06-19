import React, { useState, useEffect } from "react";
import "../style/yourposts.css";
import { CreatePost } from "./CreatePost";
import Button from "react-bootstrap/Button";
import Card from "../Components/Card";
import { useSelector } from "react-redux";
import { postsFeatureKey } from "../redux/posts/post.reducer";

export let YourPost = () => {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const handleShowCreatePost = () => setShowCreatePost(true);
  const handleCloseCreatePost = () => setShowCreatePost(false);

  let postData = useSelector((state) => state[postsFeatureKey]);
  let { posts } = postData;

  let [postsData, setPostDatas] = useState(posts);

  useEffect(() => {
    if (posts.length > 0) {
      setPostDatas(posts);
    }
  }, [posts]);

  return (
    <>
      <div className="parent text-center ">
        <div className="d-flex justify-content-between ">
          <div className="yourpost">Your posts</div>
          <Button
            variant="primary"
            className="createpost"
            onClick={handleShowCreatePost}
          >
            <img src="/image/Union2.png" className="plus-logo" alt="" />
            &nbsp;Create new Post
          </Button>
        </div>
        <div>
          {postsData &&
            postsData.map((element) => {
              return (
                <div className="col-md-3 mt-5">
                  <Card post={element} />
                </div>
              );
            })}
        </div>

        {!posts.length > 0 && (
          <div className="middle">
            <img src="/image/posticon.png" alt="No posts" />
            <p className="p-tag-1 m-3">Nothing here yet</p>
            <p className="p-tag-2">
              Create your first post by clicking on the '+' button above
            </p>
          </div>
        )}
      </div>

      <CreatePost show={showCreatePost} handleClose={handleCloseCreatePost} />
    </>
  );
};
