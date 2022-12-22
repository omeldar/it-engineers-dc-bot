module.exports = {
    name: 'say',
    description: 'This is a say command!',
    execute(message, args) {
        if(!message.author.bot) message.channel.bulkDelete(1);
        message.channel.send(args[0].slice(1, -1));
    }
}