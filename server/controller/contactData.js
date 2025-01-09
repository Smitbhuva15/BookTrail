const { contactModel } = require("../modules/Contactmodules");

exports.getContactUs = async (req, res) => {
    try {
       
        const { name, email, country, contactNo, message } = req.body;

        
        const createContact = await contactModel.create({
            name,
            email,
            country,
            contactNo,
            message
        });

        
        res.status(201).json({ message: "Contact information successfully created!" });
        
    } catch (error) {
        
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};
