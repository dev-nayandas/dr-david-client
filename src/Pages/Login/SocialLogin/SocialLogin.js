import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div>
            <p className='mx-auto'>Or</p>
            <button className='btn btn-primary'>Sign In With Google</button>
        </div>
    );
};

export default SocialLogin;