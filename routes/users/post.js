import UserModel from "../../model/user/index.js";
import bcrypt from "bcrypt";
import 'dotenv/config'
import jwt from "jsonwebtoken"

const postUser = async (req, res) => {
    try {
        const password = bcrypt.hashSync(req.body.password, 10);
        let user = await UserModel({
            ...req.body,
            password
        });
        user = await user.save();
        const userData = user.toObject();  // string ko object me convert kiya hai because hamy password frontend pr nhi dikhana tha
        delete userData.password; // is liye password delete krdia
        let token = jwt.sign({ email: user.email }, process.env.JWT_SECRETKEY);
        res.status(200).send({ status: 200, user: userData, message: "user added", token: token })
    } catch (error) {
        res.status(400).send({ status: 400, message: error })
    }
}

export default postUser;