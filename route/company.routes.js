
const express = require("express");
const router = express.Router();

const company_controller = require("../controllers/company.controllers")
const {authenticateJWT}= require("../middleware/auth")

router.post("/post",company_controller.postcompany)
router.get("/getAll",authenticateJWT,company_controller.getcompany)
router.get("/get1/:id",company_controller.getcompany1)
router.delete("/delete/:id",company_controller.deletecompany)
router.put("/put/:id",company_controller.putcompany)
router.post("/hashpost",company_controller.hashing)
router.get("/getcompare",company_controller.login)
module.exports=router;