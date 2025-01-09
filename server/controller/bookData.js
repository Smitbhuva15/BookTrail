const Bookmodel = require('../modules/bookmodules');

exports.getBookData = async (req, res) => {
    try {
        const data = await Bookmodel.find();
        res.status(200).json(data); 
    } catch (error) {
        res.status(500).json({ message: "Book data can't be fetched from the database" }); 
    }
};
