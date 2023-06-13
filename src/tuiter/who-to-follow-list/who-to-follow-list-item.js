import React from "react";

const WhoToFollowListItem = (
    {
      who = {userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png'}
    }
) => {
  return (
      <li className="list-group-item">
        <div className="d-flex align-items-center">
          <div className="float-start">
            <img className="rounded-circle" height={48} src={`/images/${who.avatarIcon}`} alt="Avatar" />
          </div>
          <div className="d-inline-flex flex-grow-1">
            <div className="ps-2">
              <div className="fw-bold">{who.userName}</div>
              <div>@{who.handle}</div>
            </div>
          </div>
          <div className="float-end">
            <button className="btn btn-primary rounded-pill btn-sm">Follow</button>
          </div>
        </div>
      </li>


  );
};
export default WhoToFollowListItem;