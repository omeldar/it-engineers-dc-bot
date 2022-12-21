module.exports = {
    name: 'info',
    description: 'This is a info command!',
    execute(message, args) {
        message.channel.send('Currently the bot has no features, since this is a discord full of developers, go ahead and implement something: https://github.com/omeldar/sw-engineering-dc-bot');
    }
}