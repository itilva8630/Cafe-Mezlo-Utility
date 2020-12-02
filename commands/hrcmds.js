exports.run = async (client, message, args) => {
  const roblox = require('noblox.js');
const chalk = require('chalk');
require('dotenv').config();
    if(!message.member.roles.cache.some(role =>["HR"].includes(role.name))){
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

 message.channel.send({
           content: `<@` + message.author.id + `>,`,
           embed: {
      timestamp: new Date(),
      footer: {
        text: 'Cafe Mezlo Utility'
      },
      title: "HIGH RANK COMMANDS",
      color: 3066993,
      thumbnail: {
        url: `https://cdn.discordapp.com/attachments/700000077460144154/769963169321058364/logo.png`
      },
      description: "Greetings! This will show you all the commands our High Rank team has access to! This will not include the MR commands, please say ``.mrcmds`` to see those commands. You do have access to them! :)\n\n``.demote`` - This will demote a user!\n``.role`` - This is used to add/remove a role from a user. Ensure to mention the user and type the role name.\n``.rank`` - Sets a users rank!\n``.acceptloa`` - Accept a MRs LOA!\n``.annondm`` - DM a user from the bot.\n``.clearshout`` - Clears the group shout.\n``.pcban`` - This will PCban the specified user.\n``.slowmode`` - Sets a channels slowmode.\n``.warn`` - Warn a staff member."
    }})
}