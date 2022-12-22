module.exports = {
    name: 'ping',
    description: 'Bot will reply with pong!',
    execute(message, args) {
        message.reply('pong!');
    }
}