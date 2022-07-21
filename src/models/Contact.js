import mongoose from "mongoose";
const {Schema, model} = mongoose;

const contactSchema = Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone: {type: String, required: true, unique: true, match: /[0-9]{3} [0-9]{3}-[0-9]{4}/},
    favorite: {type: Boolean, default: false}
},{versionKey: false});

const handleErrors = (error, data, next)=> {
    const {name, code} = error;
    if(name === "MongoServerError" && code === 11000) {
        error.status = 409;
    } else {
        error.status = 400;
        error.message = "missing required name field";
    }
    next()
}

contactSchema.post("save", handleErrors);

const Contact = model("contacts", contactSchema);

export default Contact;