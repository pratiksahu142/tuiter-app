import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";
import TuitStats from "./tuit-stats";
import {BsPatchCheckFill} from 'react-icons/bs';

const TuitItem = (
    {
      tuit = {
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": `Tesla CyberTruck lands on Mars and
picks up the Curiosity rover on its 6' bed`,
        "image": "tesla.png",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be betterthan the past. And I can’t think of anything more exciting than going out there and being among the stars"
      }
    }
) => {

  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }

  return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-2 mt-1">
            <img width={70} className="float-end rounded-circle"
                 src={`/images/${tuit.image}`}/></div>
          <div className="col-10">
            <div className="row">
              <div>
                <div className="fw-bolder d-inline me-1">{tuit.userName}</div>
                <BsPatchCheckFill size={20}
                                  color="#0d6efd"/> {tuit.handle} . {tuit.time}
                <button className="bi bi-x-lg float-end button-none"
                        onClick={() => deleteTuitHandler(tuit._id)}>x
                </button>
              </div>
            </div>
            <div className="row">
              <p>{tuit.tuit}</p>
            </div>
            <div className="row">
              <TuitStats
                  replies={tuit.replies}
                  retuits={tuit.retuits}
                  likes={tuit.likes}
                  liked={tuit.liked}
              />
            </div>
          </div>
        </div>
      </li>
  );
};
export default TuitItem;