import UserModel from "../../model/user/index.js";

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userDelete = await UserModel.findByIdAndDelete(id);
        res.status(200).send({ status: 200, user: userDelete, message: "user deleted" });
    } catch (error) {
        res.status(400).send({ status: 400, message: error });
    }
}

export default deleteUser;