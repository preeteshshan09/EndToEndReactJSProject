import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h2>Name : {name}</h2>
      <h3>Location : Bangalore</h3>
      <h3>Mobile : +91 9000000001</h3>
      <h3>{count}</h3>
    </div>
  );
};

export default User;
