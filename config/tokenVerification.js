import 'dotenv/config'
import jwt from "jsonwebtoken"

const TokenVerification = (req, res, next) => {
    try {
        if (req?.headers?.authorization) {
            const token = req?.headers?.authorization.split(" ")[1];
            var decoded = jwt.verify(token, process.env.JWT_SECRETKEY);
            if (decoded) {
                next();
            } else {
                res.status(403).send({ status: 403, message: "Token Unauthorized" });
            }
        } else {
            res.status(404).send({ status: 404, message: "Token Unauthorized" });
        }

    } catch (error) {
        res.status(400).send({ status: 400, message: error.message });
    }
}

export default TokenVerification;