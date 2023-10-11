import React from "react";

const getUserId = async (email) => {
    const res = await fetch(`/users/email/${email}`);
    const user = await res.json();
    console.log(user.id)
    return user.id;
  }

  export default getUserId;