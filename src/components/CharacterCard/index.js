import React from "react";
import "./style.css";

function FriendCard(props) {
  
  return (
    <div className="card">
        <img onClick={() => props.clicked(props.id)} alt={props.name} src={props.image} className="card-img-top" />
    </div>
  );
}

export default FriendCard;
