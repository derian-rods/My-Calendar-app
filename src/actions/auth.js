import {types} from '../types';
import {firebase, googleAuthProvider} from '../FirebaseConfing';
import Swal from 'sweetalert2'
import { finishLoading, startLoading } from './ui';

export const startLoginWithGoogle = () => {
    return async (dispatch) => {
        dispatch(startLoading());
        try {
            const rep = await firebase.auth().signInWithPopup(googleAuthProvider);
            const {user} = rep;
            console.log(user);
            dispatch(login(user.uid, user.displayName, user.photoURL));
            dispatch(finishLoading());
        } catch (error) {
            dispatch(finishLoading());
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
              });
        }
    }
}
export const startLoginWithEmailAndPassword = (email, password) => {
    return async (dispatch) => {
        dispatch(startLoading());
        try {
            const {user} = await firebase.auth().signInWithEmailAndPassword(email, password);
            dispatch(login(user.uid, user.displayName));
            dispatch(finishLoading());
        } catch (error) {
            dispatch(finishLoading());
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
              });
        }
    }
}
export const startRegister = (email, password, name) => {
    return async (dispatch) => {
        dispatch(startLoading());
        try {
        const {user} = await firebase.auth().createUserWithEmailAndPassword(email, password);
        await user.updateProfile({displayName: name});
        console.log(user);
        dispatch(login(user.uid, user.displayName))
        dispatch(finishLoading())

        } catch (error) {
            dispatch(finishLoading());
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
              });
        }
    }
}
export const login = (uid, userName, userPhoto) => ({
    type: types.login,
    payload:{
        uid,
        userName,
        userPhoto
    }
}); 


export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut()
        dispatch(logout())
    }
}

const logout = () => ({
    type: types.logout
})

