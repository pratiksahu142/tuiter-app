import React from "react";

const WhoToFollowListItem = (
    {
      who = {userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png'}
    }
) => {
  return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-2">
            <img className="rounded-circle" height={48}
                 src={`/images/${who.avatarIcon}`}/></div>
          <div className="col-7">
            <div className="fw-bold ps-2">{who.userName}</div>
            <div className=" ps-2">@{who.handle}</div>
          </div>
          <div className="col-3">
            <button className="btn btn-primary rounded-pill float-end">Follow
            </button>
          </div>
        </div>
      </li>
  );
};
export default WhoToFollowListItem;