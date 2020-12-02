const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  const roblox = require('noblox.js');
const chalk = require('chalk');
require('dotenv').config();
    if(!message.member.roles.cache.some(role =>["Assistant Manager", "General Manager", "Senior Manager", "Executive Manager", "HR"].includes(role.name))){
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


if(process.env.sessionannouncements === 'false') return;
  let sessionannouncements = await message.guild.channels.cache.get(process.env.sessionannouncements);
(process.env.sessionannouncements);
sessionannouncements.send("<@&755143046261113034>,"),
    sessionannouncements.send({embed: {
        color: 15105570,
        
        description: `A shift is being hosted! Why not join the Cafe and get a lovely drink with our community? Sounds fantastic to me!`,
         fields: [{
       name: "HOST",
        value: `<@${message.author.id}>`
      },
      {
        name: "CAFE LINK",
        value: "[Click Here](https://www.roblox.com/games/5511987126/Cafe-Mezlo-V2?refPageId=15c36a43-f2d9-4ac2-ad2f-8b0c917119e9)"
      }
    ],
    

        title: "Cafe Mezlo Session Announcement",
        footer: {
            text: 'Cafe Mezlo Databse | Session Announcement'
        },
        timestamp: new Date(),
         thumbnail: {
            url: `https://cdn.discordapp.com/attachments/700000077460144154/769963169321058364/logo.png`
        },
        image: {
          url: `https://cdn.discordapp.com/attachments/700000077460144154/771563685554159616/CafeMezlo_Thumbnail.png`
        }
    }});
         message.channel.send({
           content: `<@` + message.author.id + `>,`,
           embed: {
        color: 9240450,
        description: `Success! Best of luck with your session!`,
        title: "Session Posted!",
        footer: {
          text: 'Cafe Mezlo Utility | Session Information'
        }
    }});
 let shoutResponse;
    try {
        shoutResponse = await roblox.shout(Number(process.env.groupId), 'A shift has now commenced! Why not join the Cafe and get a lovely drink with our community? Sounds great to me!');
    } catch (err) {
        console.log(chalk.red('An error occured when running the shout command: ' + err));
        return message.channel.send({embed: {
            color: 16733013,
            description: `Oops! An unexpected error has occured. It has been logged to the bot console.`,
            author: {
                name: message.author.tag,
                icon_url: message.author.displayAvatarURL()
            }
        }});
    }
}