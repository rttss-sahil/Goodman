import f from "../../utils/firebase.config";

const EmailPasswordLogin = {
    registerNewUser: async (email, password) => {
        await f.auth.createUserWithEmailAndPassword(email, password)
            .then(() => console.log("User Registered Successfully."))
            .catch(err => console.log(err))
    },
    logUserIn: async (email, password) => {
        if (email !== " " && password !== "") {
            await f.auth.signInWithEmailAndPassword(email, password)
                .then(() => console.log("Logged In Successfully.")).catch(err => console.log("Error in Logging In :", err))
        } else {
            console.log("Please enter valid Email/Password")
        }
    },
    logUserOut: async () => {
        await f.auth.signOut()
            .then(() => console.log("Logged Out Successfully.")).catch(err => console.log("Error in Logging Out :", err))
    },
    checkUserLoggedIn: () => f.auth.currentUser ? true : false

}


export default EmailPasswordLogin;