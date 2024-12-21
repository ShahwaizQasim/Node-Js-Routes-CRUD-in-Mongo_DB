import UserModel from "../../model/user/index.js";


const postUser = async (req, res) => {
    try {
        let user = await UserModel(req.body);
        user = await user.save();
        const userData = user.toObject();  // string ko object me convert kiya hai because hamy password frontend pr nhi dikhana tha
        delete userData.password; // is liye password delete krdia
        console.log("request", req.body);
        res.status(200).send({ status: 200, user: userData, message: "user added" })
    } catch (error) {
        res.status(400).send({ status: 400, message: error })
    }
}

export default postUser;