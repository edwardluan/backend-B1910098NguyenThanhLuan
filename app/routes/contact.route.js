const express = require("express");
const contacts = require("../controllers//contact.controller");

const router = express.Router();

router.route("/")
    .get(contacts.fildAll)
    .post(contacts.create)
    .delete(contacts.deleteAll)

router.route("/favorite")
    .get(contacts.fildAllFavorite);
    
router.route("/:id")
    .get(contacts.fildOne)
    .post(contacts.update)
    .delete(contacts.delete)
    
module.exports = router;    