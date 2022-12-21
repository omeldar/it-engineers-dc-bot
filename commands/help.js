module.exports = {
    name: 'help',
    description: 'This is a help command!',
    execute(message, args) {
        message.channel.send('Currently the bot has a ping, info and help command.');
    }
}