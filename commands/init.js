module.exports = {
    name: 'init',
    description: 'This is an admin command to initialize messages the bot sends to channels.',
    execute(message, args) {
        switch(args[0]){
            case "get-roles":
                switch (args[1]){
                    case "degree":
                        message.channel.send("React with the correct emoji to receive the type of graduation you have and/or you're currently working on." +
                        "\n💛  if you're an apprentice" +
                        "\n🧡  if you already own an EFZ" +
                        "\n💙  if you're doing your bachelors degree" +
                        "\n🤍  if you already own a bachelors degree");
                        break;
                    default:
                        message.reply("No message with this parameter to display.");
                        break;
                }
                break;
            default:
                message.reply("I do not know the channel you're trying to initialize.");
                break;
        }
    }
};