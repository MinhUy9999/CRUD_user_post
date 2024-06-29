const express = require('express');
const Post = require('../models/postModel'); // Hypothetical Post model
const userModel = require('../models/userModel');

// Create a new Post
exports.createPost = async (req, res) => {
    try {
        // Check if the user exists
        const user = await userModel.findById(req.body.userId);
        if (!user) {
            return res.status(404).send({ message: 'Không tìm thấy người dùng.' });
        }

        // Create a new post
        const newPost = new Post({
            title: req.body.title,
            content: req.body.content,
            userId: req.body.userId,
        });
        
        await newPost.save();

        // Populate the user details
        const populatedPost = await newPost.populate('userId', 'username').execPopulate();

        res.status(201).send({ message: 'Tạo bài viết thành công!', post: populatedPost });
    } catch (error) {
        res.status(400).send({ message: 'Tạo bài viết thất bại.', error: error.message });
    }
};
// Get all Posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('userId');
        res.send({ message: 'Lấy tất cả bài viết thành công!', posts });
    } catch (error) {
        res.status(500).send({ message: 'Lấy tất cả bài viết thất bại.', error: error.message });
    }
};

// Read a Post by ID
exports.readPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('userId');
        if (!post) {
            return res.status(404).send({ message: 'Không tìm thấy bài viết.' });
        }
        res.send({ message: 'Lấy bài viết thành công!', post });
    } catch (error) {
        res.status(500).send({ message: 'Lấy bài viết thất bại.', error: error.message });
    }
};

// Update a Post by ID
exports.updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!post) {
            return res.status(404).send({ message: 'Không tìm thấy bài viết.' });
        }
        res.send({ message: 'Cập nhật bài viết thành công!', post });
    } catch (error) {
        res.status(400).send({ message: 'Cập nhật bài viết thất bại.', error: error.message });
    }
};

// Delete a Post by ID
exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) {
            return res.status(404).send({ message: 'Không tìm thấy bài viết.' });
        }
        res.send({ message: 'Xóa bài viết thành công!', post });
    } catch (error) {
        res.status(500).send({ message: 'Xóa bài viết thất bại.', error: error.message });
    }
};
