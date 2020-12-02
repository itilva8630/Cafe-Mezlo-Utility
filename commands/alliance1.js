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
        value: `https://discord.gg/UduxRhFGmz`
      },
      {
        name: "Roblox Group",
        value: "https://www.roblox.com/groups/8082647/Drizzled-Cafe#!/about"
      },
      {
        name: "Representatives",
      value: "Goeybot, brightsnowflake1010, Dumboyhuchens"
      }
    ],
    

        title: "Drizzled Cafe",
        footer: {
            text: 'Cafe Mezlo Parnter System'
        },
         thumbnail: {
            url: `https://t6.rbxcdn.com/39e140528921fab17fb2340f22cc1edb`
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