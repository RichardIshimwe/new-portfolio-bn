import mongoose, { Schema, Document} from "mongoose";

export interface Iuser{
    userName: string,
    email: string,
    password: string
}

export interface IuserModel extends Iuser, Document {}

const UserSchema: Schema = new Schema({
    userName: {type: String},
    email: {type: String},
    password: {type: String},
})

export default mongoose.model<IuserModel>("Users", UserSchema);
