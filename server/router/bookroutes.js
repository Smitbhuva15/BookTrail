const {getBookData}=require('../controller/bookData')

const express =require('express')
const bookRouter= express.Router();


bookRouter.get('/book',getBookData)




exports.bookRouter=bookRouter