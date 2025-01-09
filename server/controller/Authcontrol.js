

exports.AuthControl = (req, res) => {

    try {
        const userdata = req.user;
        console.log(userdata);
        res.json({userdata})

    } catch (error) {
     res.status(500).json("internal server11 error");
    }


}