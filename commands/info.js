module.exports = {
    name: 'info',
    description: 'This command gives you information about the bot.',
    execute(message, args) {
        message.channel.send('You want to add features to the bot? Go ahead and implement something: https://github.com/omeldar/sw-engineering-dc-bot');
    }
}