
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import checkIfUserExists from '../Helpers/checkUser';
import createUser from '../Helpers/createUser';

export default function useCheckUser() {

  const { user } = useAuth0();

  useEffect(() => {

    const checkAndCreateUser = async () => {
      
      const userExists = await checkIfUserExists(user.email);

      if(!userExists) {
        await createUser(user);
      }

    };

    if(user) {
      checkAndCreateUser();
    }

  }, [user]);

}