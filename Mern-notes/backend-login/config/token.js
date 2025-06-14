import jwt from "jsonwebtoken";

const genToken = async (userId) => {
    try {
        const token = jwt.sign(
            { userId },
            process.env.JWT_SECRET,
            { expiresIn: "7d" } // Token expires in 7 days
        );
        return token;
    } catch (error) {
        console.error("Token generation error:", error);
        throw new Error("Token generation failed");
    }
};

export default genToken;
