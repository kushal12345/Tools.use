import express from "express";
import mongoose from "mongoose";
import UserModel from "../Model/Usermodel.js"

const router = express.Router();


export default router.post("register", async(req,res) => {
    try{
        const user = await  UserModel.create(req.body);
        res.json(user);
    }catch (err) {
        res.json(err)
    }
})


//some error in this part

