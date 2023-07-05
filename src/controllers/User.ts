// import { NextFunction, Request, Response } from "express";
// import mongoose from "mongoose";
// import Users from "../models/Users";

// interface props {
//     userName : string, 
//     email: string, 
//     password: string
// }

// export default class userController {

// // const createUser = (req: Request, res: Response, next: NextFunction) => {
//     public static createUser = (req: Request, res: Response, next: NextFunction) => {
//    const {userName, email, password} = req.body;

//    const userToSave: props = {
//     userName, email, password
//    }

//   Users.create(userToSave)
//   .then(createdUser => res.status(201).json({ message: "user created", createdUser}))
//   .catch(error => res.status(500).json({message: "failed to save user", error}));
// }
// }

import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Users from "../models/Users";
import Logging from "../libraries/Logging";

const createUser = async (req: Request, res: Response, next: NextFunction) =>{
   const { userName, email, password} = req.body;
   const user = new Users({
    userName, email, password
   });
   return await user.save()
   .then((author) => res.status(200).json( { author} ))
   .catch((error) => res.status(500).json({ error }));
}
const readUser = (req: Request, res: Response, next: NextFunction) =>{
    return res.status(200).json({message: "read  users"});
}
const readAllUser = (req: Request, res: Response, next: NextFunction) =>{
    return res.status(200).json({message: "read all users"});
}
const updateUser = (req: Request, res: Response, next: NextFunction) =>{
    return res.status(200).json({message: "update users"});
}
const deleteUser = (req: Request, res: Response, next: NextFunction) =>{
    return res.status(200).json({message: "delete a user"});
}

export default { createUser, readAllUser, readUser, deleteUser, updateUser};
