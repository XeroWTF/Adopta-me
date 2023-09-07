const express = require('express');
const userRouter = express.Router();
const {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
} = require("../controllers/userController");


userRouter.get('/', async (req, res) => {
    try {
        const users = await getAllUsers()

        res.status(200).json(users)
    } catch (error) {
        res.status(404).send(error.message)
    }
})


userRouter.post('/', async (req, res) => {
    try {
        const newuser = await createUser()

        res.status(200).json(newuser)
    } catch (error) {
        res.status(404).send(error.message)
    }
})



userRouter.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const user = await getUserById(id)

        res.status(200).json(user)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

userRouter.put('/:id', updateUser);


userRouter.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const message = await deleteUser(id)
        res.status(200).send(message)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = userRouter;
