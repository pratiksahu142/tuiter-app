import React, { useState } from 'react';
import { FaRegComments } from 'react-icons/fa';
import { BiRepost, BiUpload } from 'react-icons/bi';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const TuitStats = ({ replies, retuits, likes, liked }) => {
  const [likedBool, setLiked] = useState(liked);
  const [likesCount, setCount] = useState(likes);

  const handleLike = () => {
    if (likedBool) {
      setLiked(false);
      setCount(likesCount - 1);
    } else {
      setLiked(true);
      setCount(likesCount + 1);
    }
  };

  return (
      <div className="row">
        <div className="col-3">
          <FaRegComments size={20} color="grey" />
          <text className="ms-2">{replies}</text>
        </div>
        <div className="col-3">
          <BiRepost size={20} color="grey" />
          <text className="ms-2">{retuits}</text>
        </div>
        <div className="col-3">
          <button className="button-none" onClick={handleLike}>
            {likedBool ? <AiFillHeart size={20} color="red" /> : <AiOutlineHeart size={20} color="grey" />}
          </button>
          <text className="ms-2">{likesCount}</text>
        </div>
        <div className="col-3">
          <BiUpload size={20} color="grey" />
        </div>
      </div>
  );
};

export default TuitStats;
