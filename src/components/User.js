import { useState } from "react";

const User = (props) => {
  const { name, contact } = props;
  const [count1] = useState(0);
  const [count2] = useState(2);
  return (
    <div className="user-card">
    <h2>Count1 :{count1} </h2>
    <h2>Count2 :{count2} </h2>
      <h2>Name : {props.name}</h2>
      <h3>Education : B.Tech</h3>
      <h4>Contact : {contact}</h4>
    </div>
  );
};

export default User;
