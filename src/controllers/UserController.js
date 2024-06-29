const express = require('express');
const User = require('../models/userModel'); // Hypothetical User model

// Tạo một người dùng mới
exports.createUser = async (req, res) => {
    try {
        const { username, email } = req.body;
        const newUser = new User({ username, email });
        // Mongoose validation sẽ kiểm tra username và email
        await newUser.save();
        res.status(201).send({ message: 'Tạo người dùng thành công!', user: newUser });
    } catch (error) {
        // Xử lý lỗi validation hoặc các lỗi khác
        if (error.name === 'ValidationError') {
            // Tùy chỉnh thông báo lỗi dựa trên các lỗi validation cụ thể
            res.status(400).send({ message: 'Tạo người dùng thất bại.', error: error.message });
        } else {
            res.status(500).send({ message: 'Lỗi máy chủ nội bộ.', error: error.message });
        }
    }
};

// Đọc một người dùng theo ID
exports.readUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send({ message: 'Không tìm thấy người dùng.' });
        }
        res.send({ message: 'Lấy thông tin người dùng thành công!', user });
    } catch (error) {
        res.status(500).send({ message: 'Lấy thông tin người dùng thất bại.', error: error.message });
    }
};

// Lấy tất cả người dùng
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().populate('posts');
        res.send({ message: 'Lấy tất cả người dùng thành công!', users });
    } catch (error) {
        res.status(500).send({ message: 'Lấy tất cả người dùng thất bại.', error: error.message });
    }
};

// Cập nhật một người dùng theo ID
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).send({ message: 'Không tìm thấy người dùng.' });
        }
        res.send({ message: 'Cập nhật thông tin người dùng thành công!', user });
    } catch (error) {
        res.status(400).send({ message: 'Cập nhật thông tin người dùng thất bại.', error: error.message });
    }
};

// Xóa một người dùng theo ID
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send({ message: 'Không tìm thấy người dùng.' });
        }
        res.send({ message: 'Xóa người dùng thành công!', user });
    } catch (error) {
        res.status(500).send({ message: 'Xóa người dùng thất bại.', error: error.message });
    }
};

// Xóa một người dùng theo ID
// exports.deleteUser = async (req, res) => {
//     try {
//         const user = await User.findOneAndDelete({ _id: req.params.id });
//         if (!user) {
//             return res.status(404).send({ message: 'Không tìm thấy người dùng.' });
//         }
//         res.send({ message: 'Xóa người dùng thành công!', user });
//     } catch (error) {
//         res.status(500).send({ message: 'Xóa người dùng thất bại.', error: error.message });
//     }
// };

