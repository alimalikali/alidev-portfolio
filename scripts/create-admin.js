const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

// MongoDB connection string
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';
const MONGODB_URI = "mongodb+srv://AliMalik:ALIMALIKALIMALIK1234@cluster0.dbzi8s8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


// User Schema
const UserSchema = new Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        name: { type: String, required: true },
        role: { type: String, enum: ["admin", "editor"], default: "admin" },
    },
    { timestamps: true },
)

// Hash password before saving
UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()

    try {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        next()
    } catch (error) {
        next(error)
    }
})

// Method to compare passwords
UserSchema.methods.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password)
}

const User = mongoose.models.User || mongoose.model("User", UserSchema)

async function createAdminUser() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');

        // Check if admin user already exists
        const existingAdmin = await User.findOne({ email: "alimalikali1928@gmail.com" });
        if (existingAdmin) {
            console.log("Admin user already exists");
            process.exit(0);
        }

        // Create admin user
        const adminUser = new User({
            email: "alimalikali192@gmail.com",
            password: "12345678",
            name: "Admin User",
            role: "admin"
        });

        await adminUser.save();
        console.log("Admin user created successfully");
        process.exit(0);
    } catch (error) {
        console.error("Error creating admin user:", error);
        process.exit(1);
    } finally {
        await mongoose.disconnect();
    }
}

createAdminUser(); 