import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if(user){
          navigate('/home')
      }
    return (
        <div>
            <p className='mx-auto'>Or</p>
            <button onClick={()=> signInWithGoogle()} className='btn btn-primary'>Sign In With Google</button>
        </div>
    );
};

export default SocialLogin;