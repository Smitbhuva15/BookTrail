const express = require('express');
const contactRouter=express.Router();
const {getContactUs}=require('../controller/contactData')

contactRouter.post("/contact",getContactUs)

exports.contactRouter=contactRouter