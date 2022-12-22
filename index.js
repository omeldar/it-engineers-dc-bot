// require discord library
const { Client, Collection, Partials, GatewayIntentBits } = require('discord.js');
// require discordjs-reaction-role
const { ReactionRole } = require("discordjs-reaction-role");
// require dotenv to read out of config
const dotenv = require('dotenv');
// require fs to read from files
const fs = require('fs');

// define config location
dotenv.config({ path: './config.env' });

// create new client
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions,
		GatewayIntentBits.GuildMembers,
	],
    partials: [
        Partials.Message,
        Partials.Channel,
        Partials.Reaction
    ]
});
const rrConfiguration = [
    // for profession
    {
        messageId: process.env.FIELD_ROLE_MESSAGE_ID,
        reaction: "💚",
        roleId: process.env.FIELD_ROLE_SYS_E,
    },
    {
        messageId: process.env.FIELD_ROLE_MESSAGE_ID,
        reaction: "💜",
        roleId: process.env.FIELD_ROLE_SW_E,
    },
    // for degree
    {
        messageId: process.env.FIELD_ROLE_DEGREE_MESSAGE_ID,
        reaction: "💛",
        roleId: process.env.FIELD_ROLE_APPRENTICE
    },
    {
        messageId: process.env.FIELD_ROLE_DEGREE_MESSAGE_ID,
        reaction: "🧡",
        roleId: process.env.FIELD_ROLE_EFZDEGREE
    },
    {
        messageId: process.env.FIELD_ROLE_DEGREE_MESSAGE_ID,
        reaction: "💙",
        roleId: process.env.FIELD_ROLE_BACHELORSTUDENT
    },
    {
        messageId: process.env.FIELD_ROLE_DEGREE_MESSAGE_ID,
        reaction: "🤍",
        roleId: process.env.FIELD_ROLE_BACHELOR
    },
];

const manager = new ReactionRole(client, rrConfiguration);

// Command prefix
const prefix = '/';
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log("[Object object] running.");

    client.users.fetch(process.env.DEVUSER_ID).then((user) => {
        devUser = user;
    });
});

// on message event handler
client.on('messageCreate', message => {
    if(message.content.includes("bot") && message.content.includes("trash")){
        message.reply("Whats your problem?");
    }

    if(!`${message.content}`.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/('.*?'|".*?"|\S+)/).filter(s => s != ' ' && s != '');
    const command = args.shift().toLowerCase();

    switch(command){
        case "ping":
            client.commands.get('ping').execute(message, args);
            break;
        case "help":
            client.commands.get('help').execute(message, args);
            break;
        case "info":
            client.commands.get('info').execute(message, args);
            break;
        case "say":
            client.commands.get('say').execute(message, args);
            break;
        case "init":
            client.commands.get('init').execute(message, args);
            break;
        default:
            message.reply(`No command ${command} found.`);
            break;
    }
});

// login into bot
client.login(`${process.env.BOTTOKEN}`);