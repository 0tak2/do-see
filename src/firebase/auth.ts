import { getAuth, createUserWithEmailAndPassword,
        signInWithEmailAndPassword, sendEmailVerification,
        signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth();

const gProvider = new GoogleAuthProvider();

export function register(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            return {success: true, msg: '', payload: {uid: '', gtoken: '', email: ''}}
        })
        .catch((error) => {
            return {
                success: false,
                msg: `Error Code ${error.code}. ${error.message}`,
                payload: {}
            }
        });
}

export function logIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            if(!userCredential.user.emailVerified) {
                throw ({
                    code: 'do-see/noEmailVerifyed',
                    message: '이메일 인증이 완료되지 않아 로그인할 수 없습니다.'
                });
            }

            return {
                success: true,
                msg: '',
                payload: {
                    uid: userCredential.user.uid,
                    gtoken: '',
                    email: userCredential.user.email
                }
            }
        })
        .catch((error) => {
            return {
                success: false,
                msg: `[${error.code}] ${error.message}`,
                payload: {uid: '', gtoken: '', email: ''}
            }
        });
}

export function logOut() {
    signOut(auth).then(() => {
        return {
            success: true
        }
    })
    .catch((error) => {
        return {
            success: false,
            msg: `[${error.code}] ${error.message}`
        }
    })
}

export function googleLogIn() {
    return signInWithPopup(auth, gProvider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            return {
                success: true,
                msg: '',
                payload: {
                    uid: result.user.uid,
                    gtoken: credential.accessToken,
                    email: result.user.email
                }
            }
        }).catch((error) => {
            return {
                success: false,
                msg: `[${error.code}] ${error.message}`,
                payload: {uid: '', gtoken: '', email: ''}
            }
        });
}

export function requestEmailVerification() {
    return sendEmailVerification(auth.currentUser)
        .then(() => {
            return {
                success: true,
                msg: 'Verification Email Sent.'
            }
        }).catch((error) => {
            return {
                success: false,
                msg: `[${error.code}] ${error.message}`
            }
        });
}