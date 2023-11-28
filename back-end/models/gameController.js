const game = require('game.js')
const getGames = async ( _req, res ) => {
    const games = await game.find()
    res.send(users)
}

const addGames = async (res,res) => {
    const newGame = await game.create(req.body)
    res.send(newGame)
}

const updateGames = async (res,res) => {
    const updatedGame = await game.findOneAndUpdate(req.params,id, req.body)
    res.send(updatedUser)
}

const deleteGames = async (res,res) => {
    const gameId = req.params.id
    await game.findByIdAndRemove(gameId)
    res.send(`User ${gameId} deleted.`)
}

module.exports = {
    getGames,
    addGames,
    updateGames,
    deleteGames
}