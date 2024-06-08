const express = require('express');
const Post = require('../models/postModel'); // Hypothetical Post model

// Create a new Post
exports.createPost = async (req, res) => {
    try {
        const newPost = new Post({
            title: req.body.title,
            content: req.body.content,
            userId: req.body.userId // Ensure this is a valid ObjectId
        });
        await newPost.save();
        res.status(201).send(newPost);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Read a Post by ID
exports.readPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('userId');
        if (!post) {
            return res.status(404).send();
        }
        res.send(post);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a Post by ID
exports.updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!post) {
            return res.status(404).send();
        }
        res.send(post);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a Post by ID
exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) {
            return res.status(404).send();
        }
        res.send(post);
    } catch (error) {
        res.status(500).send(error);
    }
};

// module.exports = new PostController();
