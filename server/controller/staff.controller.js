const Staff = require("../model/staff.model");

const getStaff = async (req, res) => {
    try {
        const staff = await Staff.find();
        res.json(staff);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getStaff };