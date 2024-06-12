import { Schema, model } from 'mongoose';
const userSchema = new Schema({
   name: String,
   section: String,
    others : Object,
    students : Object,
    subjects : Object,
});

if (!modelAlreadyDeclared()) {
    var User = model('Delay', userSchema);
}

// Function to check if the model has already been declared
function modelAlreadyDeclared() {
    try {
        // Try to access the model, will throw an error if not declared
        User = model('Delay');
        return true;
    } catch (error) {
        return false;
    }
}
export default User;
