const Order = require("../models/Order");


module.exports.addOrder = async (req, res) => {
    const { items, totalAmount } = req.body;


    const user = req.user;

    try {
        const user_id = user._id;
        console.log(user_id);
        const new_order = await Order.create({ user: user_id, items, totalAmount });
        user.orders.push(new_order);
        await user.save();

        res.status(201).json({ new_order, user });
    }
    catch (err) {

        res.status(500).json({ err });
    }
}

module.exports.getOrders = async (req, res) => {

    try {
        const user = req.user;
        const user_orders = user.orders;

        res.status(201).json({ user_orders });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

