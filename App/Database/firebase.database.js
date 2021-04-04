import f from '../utils/firebase.config';

export const database = () => {

    /*/
    f.database.ref("/users/dat").set("hell")
    console.log("helllo")
    // /*/

    /*/
    for (let i = 0; i <= 2; i++) {
        const updates = {
            names: "Sahil",
            email: "abc@def.com"
        };
        f.database.ref().child("users").child(Math.floor(Math.random() * 10000)).update(updates);
    }
    // /*/

    // f.database.ref().child("/users").remove()

    // f.database.ref("users").on("value", snapshot => snapshot ? console.log(snapshot.val()) : console.log("no value"))


}