const createUser = async (user) => {

    const response = await fetch('http://localhost:3001/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        picture: user.picture,
        nickname: user.nickname
      })
    });
  
    const newUser = await response.json();
  
    return newUser;

}

export default createUser;