const {Client, Intents} = require('discord.js');
const {token} = require("./config.json");

// Create a new client instance
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
    allowedMentions: {repliedUser: false}
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity('cuh...', {type: 'WATCHING'});
});


// When the client receives a message, run this code
client.on('messageCreate', async message => {
    // If the message is "ping"
    if (message.author.id !== client.user.id) {
        if (message.content.toLowerCase().includes("cuh")) {
            await message.reply('https://tenor.com/view/cuh-old-man-gif-22853886');
        }
    }
});

// Login to Discord with your client's token
client.login(token);
