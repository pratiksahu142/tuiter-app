import React, {useState} from 'react';
import {FaRegComments} from 'react-icons/fa';
import {BiRepost, BiUpload} from 'react-icons/bi';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";

const TuitStats = ({replies, retuits, likes, liked, tuit}) => {
  const [likedBool, setLiked] = useState(liked);
  const [likesCount, setCount] = useState(likes);
  const dispatch = useDispatch();

  const handleLike = () => {
    if (likedBool) {
      dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes - 1, liked: false }))
      setLiked(false);
      setCount(likesCount - 1);
    } else {
      dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1, liked: true }))
      setLiked(true);
      setCount(likesCount + 1);
    }
  };

  return (
      <div className="row">
        <div className="col-3">
          <FaRegComments size={20} color="grey"/>
          <span className="ms-2">{replies}</span>
        </div>
        <div className="col-3">
          <BiRepost size={20} color="grey"/>
          <span className="ms-2">{retuits}</span>
        </div>
        <div className="col-3">
          <button className="button-none" onClick={handleLike}>
            {likedBool ? <AiFillHeart size={20} color="red"/> : <AiOutlineHeart
                size={20} color="grey"/>}
          </button>
          <span className="ms-2">{likesCount}</span>
        </div>
        <div className="col-3">
          <BiUpload size={20} color="grey"/>
        </div>
      </div>
  );
};

export default TuitStats;
