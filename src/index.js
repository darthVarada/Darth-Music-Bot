const Discord = require("discord.js");

const config = require("./data/config.json");

const intents = new Discord.Intents(32767);

const client = new Discord.Client({ intents });

//client.on("ready", () => console.log("he is on!"));

client.on("messageCreate", message => {

    if(message.content == "oi") message.reply("coe mano!");
    
});

client.login(config.token);