const Discord = require('discord.js')
const RiveScript = require('rivescript')
require('dotenv').config()

const client = new Discord.Client()
const bot = new RiveScript()

//default prefix !bot or customized one
const prefix = process.env.PREFIX ? process.env.PREFIX : '!bot'
//bot connection
client.login(process.env.TOKEN_DISCORD)
    .then(() => {
        //loading brains in the brain directory
        bot.loadDirectory("brain")
            .then(loading_done)
            .catch(loading_error)
    })
    .catch((e) => console.log("Wrong token !"))

//show a message when the bot is ready
client.on('ready', () => {
    console.log(`Let's go ${client.user.username}`)
})

//detect any message starting with the prefix (!bot or your customized one)
client.on('message', (message) => {
    if (message.content.startsWith(prefix)) {
        let content
        [, ...content] = message.content.split(' ')
        //reply to the author of the message
        bot.reply(message.author.username, content.join(' '))
            .then((reply) => message.channel.send(reply))
    }
})

function loading_done() {
    console.log("Brains are loaded !")
    bot.sortReplies()
}
function loading_error(error) {
    console.log("Error when loading files: " + error);
}
