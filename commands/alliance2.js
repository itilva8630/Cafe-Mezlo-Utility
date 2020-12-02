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
        color: 16580705,

         fields: [{
       name: "Discord",
        value: `https://discord.gg/cbRSPFc6TV`
      },
      {
        name: "Representatives",
      value: "itilva8630, jqmesxc"
      }
    ],
    

        title: "Berry",
        footer: {
            text: 'Cafe Mezlo Parnter System'
        },
         thumbnail: {
            url: `https://cdn.discordapp.com/attachments/700000077460144154/776180838299336754/179d1110-e018-47f3-8e03-58881011c4f9_200x200.png`
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