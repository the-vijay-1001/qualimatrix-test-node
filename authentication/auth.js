import jwt from "jsonwebtoken"

export const authentication = (req, res, next) => {
    try {
        const header = req.headers;
        const token = header.authorization?.split(" ")[1]
        const isValid = jwt.verify(token, "dsalkfjoiarhj")
        if (isValid) {
            next()
        }
    } catch (error) {
        return res.status(500).json({ error })
    }
}