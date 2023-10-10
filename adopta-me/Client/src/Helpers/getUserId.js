import React from "react";

const getUserId = async (email) => {
    const res = await fetch(`/users/email/${email}`);
    const user = await res.json();
    return user.id;
  }

  export default getUserId;