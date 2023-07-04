"use strict";
// import { NextFunction, Request, Response } from "express";
// import mongoose from "mongoose";
// import Users from "../models/Users";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = __importDefault(require("../models/Users"));
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, email, password } = req.body;
    const user = new Users_1.default({
        userName, email, password
    });
    return yield user.save()
        .then((author) => res.status(200).json({ author }))
        .catch((error) => res.status(200).json({ error }));
});
const readUser = (req, res, next) => {
    return res.status(200).json({ message: "read  users" });
};
const readAllUser = (req, res, next) => {
    return res.status(200).json({ message: "read all users" });
};
const updateUser = (req, res, next) => {
    return res.status(200).json({ message: "update users" });
};
const deleteUser = (req, res, next) => {
    return res.status(200).json({ message: "delete a user" });
};
exports.default = { createUser, readAllUser, readUser, deleteUser, updateUser };
