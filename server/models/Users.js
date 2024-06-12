import { Schema, model } from 'mongoose';
const userSchema = new Schema({
   uname: String,
   pass : String,
   role: String,
    others : Object,
    dept : Object,
    addons : Object,
});

if (!modelAlreadyDeclared()) {
    var User = model('User', userSchema);
}

// Function to check if the model has already been declared
function modelAlreadyDeclared() {
    try {
        // Try to access the model, will throw an error if not declared
        User = model('User');
        return true;
    } catch (error) {
        return false;
    }
}
export default User;
