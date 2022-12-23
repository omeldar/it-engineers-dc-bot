module.exports = {
    name: 'help',
    description: 'This command displays all the possibilities you have with the bot.',
    execute(message, args, clientCommands) {
        let outputString = "The bot currently has following commands:\n";
        let array = Array.from(clientCommands.values());
        for(let i = 0; i < array.length; i++){
            outputString += "\n" + array[i].name + ":\t" + array[i].description;
        }
        message.channel.send(outputString);
    }
}