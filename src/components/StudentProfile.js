import React from "react";

export const StudentProfile = props => {
  console.log(props.student);

  const { name, age, identity, bestFriend, image } = props.student;
  return (
    <div>
      <img src={image} alt="Character Image" />
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Identity: {identity}</p>
      <p>Best Friend: {bestFriend}</p>
    </div>
  );
};

//export default StudentProfile;
