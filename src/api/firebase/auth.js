import { fb } from "./";

export function createLogin(email, password, cb) {

    fb.auth.createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        cb(error);
    });
};

export function signOut(cb) {

    fb.auth.signOut().catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        cb(error);
    });
};

export function signIn(email, password, cb) {

    fb.auth.signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        cb(error);
    });
};

export function watchCurrentUser(cb) {

    fb.auth.onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            //   var displayName = user.displayName;
            //   var email = user.email;
            //   var emailVerified = user.emailVerified;
            //   var photoURL = user.photoURL;
            //   var isAnonymous = user.isAnonymous;
            //   var uid = user.uid;
            //   var providerData = user.providerData;

            cb(user)
            // ...
        } else {
            // User is signed out.
            cb({})
            // ...
        }
    });
}