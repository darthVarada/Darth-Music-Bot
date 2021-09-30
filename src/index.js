import { MessageEmbed, Client } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({
    intents: [
        32767,
    ]
});

client.on("ready", () => console.log("he is on!"));

client.on("messageCreate", msg => {
    if (!msg.content.includes(process.env.PREFIX)){
        return;
    } else {
        const command = msg.content.substr(1, msg.content.length);
        if(command == "oi") message.reply("coe mano!");
        if(command === "ping") msg.reply("pong");
        if(command === "source") {
            const embed = new MessageEmbed()
                .setTitle("Código fonte")
                .setDescription("Código fonte do aplicativo no github")
                .setURL("https://github.com/darthVarada/Darth-Music-Bot");

            msg.channel.send({content: "hello", embeds: [embed]});
        }
    }
});

client.login(process.env.TOKEN);