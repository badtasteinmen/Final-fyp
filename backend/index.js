const express = require("express");
const passport = require("passport");
const cors = require("cors");
const session = require("express-session");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); // ✅ Import bcrypt
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/User");

const app = express();

// 🔹 MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/bhaskar", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ Failed to connect to MongoDB", err));

// 🔹 CORS Configuration
const corsOptions = {
  origin: ["http://192.168.0.202:3000", "http://localhost:3000"], // ✅ Support multiple origins
  credentials: true, // ✅ Allow cookies/sessions
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};
app.use(cors(corsOptions));

// 🔹 Middleware to parse JSON
app.use(express.json());

// 🔹 Session Middleware (Before Passport)
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // ✅ Change to true if using HTTPS
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // ✅ 24 hours
    },
  })
);

// 🔹 Passport Middleware (After Session)
app.use(passport.initialize());
app.use(passport.session());

// 🔹 Passport Local Strategy (Using Email)
passport.use(
    new LocalStrategy(
      { usernameField: "email" }, 
      async (email, password, done) => {
        try {
          const user = await User.findOne({ email });
          if (!user) return done(null, false, { message: "Invalid email" });
  
          console.log("Entered Password:", password);
          console.log("Stored Hashed Password:", user.password);
  
          const isMatch = await bcrypt.compare(password, user.password);
          console.log("Password Match Result:", isMatch);
  
          if (!isMatch) return done(null, false, { message: "Invalid password" });
  
          return done(null, user);
        } catch (err) {
          return done(err);
        }
      }
    )
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

// 🔹 Authentication Routes
app.use("/auth", require("./routes/user"));

// 🔹 Test Route
app.get("/", (req, res) => {
  res.send("✅ Server is running");
});

// 🔹 Start Server
app.listen(3000, () => console.log("🚀 Listening on port 3000"));
