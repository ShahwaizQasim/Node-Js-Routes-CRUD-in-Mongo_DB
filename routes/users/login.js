import UserModel from "../../model/user/index.js";
import bcrypt from "bcrypt";
import 'dotenv/config'
import jwt from "jsonwebtoken"

const LoginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await UserModel.findOne({ email });
        if (user) {
            const checkPassword = bcrypt.compareSync(password, user.password);
            if (checkPassword) {
                let token = jwt.sign({ email: user.email }, process.env.JWT_SECRETKEY);
                res.status(200).send({ status: 200, user: user, message: "user login successfully", token: token })
            } else {
                res.status(401).send({ status: 401, message: "Incorrect Password" })
            }
        } else {
            res.status(404).send({ status: 404, message: "User Not Found" })
        }
    } catch (error) {
        console.log(error);
        res.status(400).send({ status: 400, message: error })
    }
}

export default LoginUser;