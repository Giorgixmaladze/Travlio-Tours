const Staff = require("../model/staff.model");


// controller for getting all staff members
const getStaff = async (req, res) => {
    try {
        const staff = await Staff.find();
        res.json(staff);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getStaff };