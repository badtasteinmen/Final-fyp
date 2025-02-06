const express = require("express");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User"); // Assuming your User model is at this path

const router = express.Router();

// 🔹 Middleware: Express Session (Required for Passport.js)
router.use(
  session({
    secret: "your-secret-key", // Change this to a secure secret key
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true, maxAge: 24 * 60 * 60 * 1000 },
  })
);

// 🔹 Initialize Passport.js and use sessions
router.use(passport.initialize());
router.use(passport.session());

// 🔹 Passport Local Strategy (Using Email Instead of Username)
passport.use(
  new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
    try {
      const user = await User.findOne({ email });
      if (!user) return done(null, false, { message: "Invalid email." });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return done(null, false, { message: "Invalid password." });

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

// 🔹 Serialize user (Store user ID in session)
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// 🔹 Deserialize user (Retrieve user from session)
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

// 🔹 Register Route
router.post("/register", async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email already exists." });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully." });
  } catch (err) {
    res.status(500).json({ message: "Error registering user." });
  }
});

// 🔹 Login Route
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return res.status(500).json({ message: "Authentication error.", error: err.message });
    if (!user) return res.status(401).json({ message: info?.message || "Invalid credentials." });

    req.logIn(user, (err) => {
      if (err) return res.status(500).json({ message: "Error logging in.", error: err.message });

      return res.status(200).json({ message: "Logged in successfully", user });
    });
  })(req, res, next);
});

// 🔹 Logout Route
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.status(200).json({ message: "Logged out successfully." });
  });
});

// 🔹 Dashboard Route (Authenticated)
router.get("/dashboard", (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ message: `Welcome, ${req.user.username}` });
  } else {
    res.status(401).json({ message: "Unauthorized. Please log in." });
  }
});

module.exports = router;
