import * as firebase from 'firebase'
export class AuthService {
    token:String;
    signUpUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => {
                console.log(error)
            }
            )
    }
    signInUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response => {
                console.log(response)
                firebase.auth().currentUser.getIdToken().then
                    ((token) => {
                        this.token = token;
                    })
            })
            .catch(error => {
                console.log(error)
            }
            )
    }
    getToken() {
        firebase.auth().currentUser.getIdToken().then
            ((token) => {
                this.token = token;
            })
        return this.token;
    }
    isAuthenticated() {
        return this.token!= null;
    }
    signOut(){
        firebase.auth().signOut();
        this.token=null;
    }
}