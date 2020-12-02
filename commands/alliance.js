const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  const roblox = require('noblox.js');
const chalk = require('chalk');
require('dotenv').config();
    if(!message.member.roles.cache.some(role =>["Chairman"].includes(role.name))){
        return message.channel.send({embed: {
            color: 16733013,
            description: "You need the `Chairman` role to run this command.",
            author: {
                name: message.author.tag,
                icon_url: message.author.displayAvatarURL()
            }
        }})
    }


if(process.env.allianceannouncements === 'false') return;
  let allianceannouncements = await message.guild.channels.cache.get(process.env.allianceannouncements);
(process.env.allianceannouncements);
    allianceannouncements.send({embed: {
        color: 12320855,
         fields: [{
       name: "Discord",
        value: `https://discord.gg/MP8Fk9PBjM`
      },
      {
        name: "Roblox Group",
        value: "https://www.roblox.com/groups/4578155/Frizzl-d#!/about"
      },
     { 
       name: "Representatives",
      value: "Aqusteus, tiffanydatboss5"
      }
    ],
    

        title: "Frizzled Bakery",
        footer: {
            text: 'Cafe Mezlo Parnter System'
        },
         thumbnail: {
            url: `https://cdn.discordapp.com/attachments/700000077460144154/781553921709178930/Frizzled.png`
        }
    }});
         message.channel.send({embed: {
        color: 9240450,
        description: `Success! Posted!`,
        title: "Alliance posted!",
        footer: {
          text: 'Cafe Mezlo Utility | Parnter System'
        }
    }});
}