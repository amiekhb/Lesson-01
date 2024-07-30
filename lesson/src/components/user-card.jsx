import React from "react";

const UserCard = ({ userImg, firstName }) => {
  return (
    <div className="p-5 flex gap-4 item-center">
      <img className=" w-10 h-10 rounded-full" src={userImg} alt="" />
      <div>
        <h1>{name}</h1>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default UserCard;
