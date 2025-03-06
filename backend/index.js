const express = require("express");
const passport = require("passport");
const cors = require("cors");
const session = require("express-session");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); // ✅ Import bcrypt
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/User");

const app = express();

// MongoDB connection with detailed logging
console.log("Attempting to connect to MongoDB...");
mongoose
  .connect("mongodb+srv://shreya:mongo@cluster0.nhcbu.mongodb.net/shreya?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB successfully");
    console.log("Database name:", mongoose.connection.name);
    console.log("Database host:", mongoose.connection.host);
    console.log("Database port:", mongoose.connection.port);
  })
  .catch((err) => {
    console.error("❌ Failed to connect to MongoDB");
    console.error("Error details:", err);
  });

// 🔹 CORS Configuration
const corsOptions = {
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Requested-With'],
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

// 🔹 Middleware to parse JSON
app.use(express.json());

// 🔹 Session Configuration
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: 'none'
    },
  })
);

// 🔹 Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Add session check middleware
app.use((req, res, next) => {
  console.log('Session:', req.session);
  console.log('User:', req.user);
  console.log('Is Authenticated:', req.isAuthenticated());
  next();
});

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

// 🔹 Routes
app.use("/user", require("./routes/user"));
app.use("/scores", require("./routes/scores")); // Add scores routes

// 🔹 Test Route
app.get("/", (req, res) => {
  res.send("✅ Server is running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
