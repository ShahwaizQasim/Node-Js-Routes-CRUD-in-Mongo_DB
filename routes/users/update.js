import UserModel from "../../model/user/index.js";

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userUpdate = await UserModel.findByIdAndUpdate(id, req.body);
        res.status(200).send({ status: 200, user: userUpdate, message: "user updated" });
    } catch (error) {
        res.status(400).send({ status: 400, message: error });
    }
}

export default updateUser;