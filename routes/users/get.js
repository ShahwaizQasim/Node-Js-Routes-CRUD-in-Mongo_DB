import UserModel from "../../model/user/index.js";

const getUser = async (req, res) => {
    try {
        const user = await UserModel.find();
        res.status(200).send({ status: 200, user: user, message: "user fetch" });
    } catch (error) {
        res.status(400).send({ status: 400, message: error });
    }
}

export default getUser;