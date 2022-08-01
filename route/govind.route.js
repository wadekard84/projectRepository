const express= require("express");
const Router = express.Router();


const govind_structure =require("../controllers/govind.controllers");
const{authenticateJWT} =require("../middleware/auth")

Router.post("/post1",govind_structure.post)
Router.get("/getAll",authenticateJWT,govind_structure.get)
Router.get("/get1/:id",govind_structure.getAll)
Router.delete("/delete1/:id",govind_structure.delete)
Router.put("/update/:id",govind_structure.updateName)
Router.post("/hashmethod",govind_structure.hashmethod)
Router.get("/compare/:id",govind_structure.compare)

module.exports=Router;