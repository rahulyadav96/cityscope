const express = require("express");
const Article = require('../models/artilce.model');
const router = express.Router();

//router for get all article
router.get('/', async(req,res)=>{

    const articles = await  Article.find().lean().exec();
    res.status(200).json({articles});
})

//route for create a new article
router.get("/", async(req,res)=>{

    const article = await Article.create(req.body);
    res.status(201).json({article});
})

//router to delete an article
router.delete("/:id", async(req,res)=>{

    const article = await Article.findByIdAndDelete(req.params.id);
    res.status(200).json({article});
})

//update an artile

router.patch("/:id", async(req,res)=>{

    const article = await Article.findByIdAndUpdate(req.params.id, req.body,{new: true});

    return res.status(200).json({article});
})

module.exports = router;