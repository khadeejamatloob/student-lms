const express = require('express');
const mongoose = require('mongoose');
const bcrypt= require('bcrypt');
const app = express();


const cors = require('cors');
app.use(cors());
const Course =require('./models/Course');
app.use(express.json());

// 1. Database Connection
mongoose.connect("mongodb://127.0.0.1:27017/student-lms")
    .then(() => console.log("✅ DB Connected Successfully"))
    .catch(err => console.log("❌ DB Error:", err));

// 2. User Schema (Stucture)
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String
});
const User = mongoose.model('User', userSchema);

// // 3. The Registration Route (Testing)
// app.post('/register', async (req, res) => {
//     try {
//         const { name, email, password } = req.body;
//         const newUser = new User({ name, email, password });
//         await newUser.save();
//         res.status(201).send("🔥 MUBARAK HO! Data Database mein save ho gaya!");
//     } catch (err) {
//         res.status(400).send("❌ Error: Shayad ye email pehle se exist karti hai.");
//     }
// });

// Register Route
app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Password ko "Hiding Machine" (Bcrypt) mein daalna
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: hashedPassword // Ab hashed password save hoga
        });

        await newUser.save();
        res.status(201).json({ message: "Registration Successful! ✅" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
// Login Route
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Check karna ke user database mein hai ya nahi
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "User not found! firstly you can register." });
        }

        // 2. Password ko Compare karna (Hashed password ke saath)
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "wrong Password!" });
        }

        // 3. Agar sab sahi hai
        res.status(200).json({ 
            message: "Login Successful! Welcome back ✅",
            userName: user.name 
        });

    } catch (err) {
        res.status(500).json({ error: "problem in server" });
    }
});
// Courses mangwane ke liye GET route
app.get('/courses', async (req, res) => {
    try {
        const allCourses = await Course.find(); // Database se saare courses lao
        res.json(allCourses); // Front-end ko data bhejo
    } catch (err) {
        res.status(500).json({ message: "Data nahi mil raha" });
    }
});

// Naya data add karne ke liye route
app.post('/add-course', async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.json({ message: "course is saved" });
  } catch (err) {
    res.status(500).json({ error: "Data cannot saved" });
  }
});


app.listen(5000, () => console.log("🚀 Server is running on Port 5000"));