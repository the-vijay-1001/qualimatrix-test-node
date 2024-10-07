import { User } from "../model/user.model.js"
import jwt from "jsonwebtoken"

export const login = async (req, res) => {
    const { email, password } = req.body;
    const result = await User.findOne({ email })
    if (result) {
        if (password == result.password) {
            const token = jwt.sign({ email }, "dsalkfjoiarhj");
            return res.status(200).json({ data: result, token })
        }
    }
}
export const register = async (req, res) => {
    try {
        const { email, password, name } = req.body;
        const result = await User.create({ email, password, name });
        if (result) {
            return res.status(200).json({ message: "user register", status: true, data: result })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", status: false, data: null })
    }
}
export const userList = async (req, res) => {
    try {
        const result = await User.find()
        if (result)
            return res.status(200).json({ result })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", status: false, data: null })
    }
}