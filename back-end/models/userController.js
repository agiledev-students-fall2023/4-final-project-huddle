const user = require('user.js')
const getUsers = async ( _req, res ) => {
    const users = await user.find()
    res.send(users)
}

const addUsers = async (res,res) => {
    const newUser = await user.create(req.body)
    res.send(newUser)
}

const updateUsers = async (res,res) => {
    const updatedUser = await user.findOneAndUpdate(req.params,id, req.body)
    res.send(updatedUser)
}

const deleteUsers = async (res,res) => {
    const userId = req.params.id
    await user.findByIdAndRemove(userId)
    res.send(`User ${userId} deleted.`)
}