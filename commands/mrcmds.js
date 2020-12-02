exports.run = async (client, message, args) => {
  const roblox = require('noblox.js');
const chalk = require('chalk');
require('dotenv').config();
    if(!message.member.roles.cache.some(role =>["MR", "HR"].includes(role.name))){
       return message.channel.send({
           content: `<@` + message.author.id + `>,`,
           embed: {
            color: "#FF0000",
            description: "An error has occured while attempting to preform this command.",
           fields: [
             {
            name: "Error Code",
            value: "MEZLO-C4Zl-2yhcD"
             },
             {
               name: "Error",
               value: "Rank Too Low."
             },
             {
               name: "User Note",
               value: "You need a higher rank to preform this command."
             }
           ],
            author: {
                name: message.author.tag,
                icon_url: message.author.displayAvatarURL()
            }
        }})
    }

  return message.channel.send({
           content: `<@` + message.author.id + `>,`,
           embed: {
      timestamp: new Date(),
      footer: {
        text: 'Cafe Mezlo Utility'
      },
      title: "MIDDLE RANK COMMANDS",
      color: 3066993,
      thumbnail: {
        url: `https://cdn.discordapp.com/attachments/700000077460144154/769963169321058364/logo.png`
      },
      description: "Greetings! This will show you all the commands our Middle Rank team has access to!\n\n``.shift`` - This will post the training message!\n``.training`` - This post the training message!\n``.conclude`` - Use this to conclude a session!\n``.promote`` - Promote a user (Only should be used if a user passes a training).\n``.slock`` - Post the slock message.\n``.requestloa`` - Request LOA.\n``.faq`` - Post an FAQ Card. More information located [here](https://discord.com/channels/695445836791939204/755143115135909988/780448005932449814)"
    }})
}