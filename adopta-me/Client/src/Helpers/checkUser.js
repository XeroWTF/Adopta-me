const checkIfUserExists = async (email) => {

    const response = await fetch(`http://localhost:3001/user/email/${email}`);
  
    if (response.status === 404) {
      return false; 
    }
  
    return true;
  
  }

  export default checkIfUserExists;