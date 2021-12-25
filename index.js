const Discord = require("discord.js");
const discord = new Discord.Client
const fs = require("fs");
if (!fs.existsSync("./config.json")) {console.log("configure first!");}
const config = JSON.parse(fs.readFileSync("./config.json"));

discord.on("ready", function () {
  console.log("ready")
    discord.user.setActivity('abonniert Tutorial Ecke auf YouTube', { type: "PLAYING"})
});

discord.on("message", function(message) {
    if (message.guild.id !== config.guildId) {return;}
    else if (message.channel.id !== config.channelId) {return;}
    else {message.delete({timeout: config.delay})
          .catch(error =>{
        console.log(error);
    })
         }
})

discord.on("message", message => {
         const embed = new Discord.MessageEmbed()
        .setTitle("Fehler")
        .setDescription("Du kannst keinen Bot-Hosting Server per Discord erstellen, da wir auf ein Web-Dashboard umgestiegen sind.\nHier der Link zum Dashboard: https://dash.tutorialecke.org\nHier das Tutorial von uns dazu: https://www.youtube.com/watch?v=hmlttuhkC04")
        .setColor("#ff2323")
        .setFooter(message.author.username)
    if (message.content.startsWith("te!help")) {
    message.channel.send(embed)
                  .catch(error =>{
        console.log(error);
    })
}
        else if (message.content.startsWith("te!register")) {
    message.channel.send(embed)
        .catch(error =>{
        console.log(error);
    })
}
})

discord.login(config.token)