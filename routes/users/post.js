import UserModel from "../../model/user/index.js";


const postUser = async (req, res) => {
    try {
        let user = await UserModel(req.body);
        user = await user.save();
        console.log("request", req.body);
        res.status(200).send({ status: 200, message: "user added" })
    } catch (error) {
        res.status(400).send({ status: 400, message: error })
    }
}

export default postUser;