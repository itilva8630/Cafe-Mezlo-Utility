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
sessionannouncements.send("<@&772250331286863902>,"),
    sessionannouncements.send({embed: {
        color: "GREEN",
        
        description: `A training is being hosted! All Trainees, Junior Baristas, and Baristas can attend for a possible promotion!
        
        Host: <@${message.author.id}>
        
        [Training Center Link](https://www.roblox.com/games/5231446103/Cafe-Mezlo-Hub-Interview-and-Training-Center?refPageId=2cdd96bd-8ce8-4938-8ca2-8d33630cd0e8)`,
        title: "Cafe Mezlo Session Announcement",
        footer: {
            text: 'Cafe Mezlo Utility | Session Announcement'
        },
        timestamp: new Date(),
         thumbnail: {
            url: `https://cdn.discordapp.com/attachments/700000077460144154/769963169321058364/logo.png`
        }
        
    }});
      message.channel.send({
           content: `<@` + message.author.id + `>,`,
           embed: {
        color: 9240450,
        description: `Success! Best of luck with your session!`,
        title: "Session Posted!",
        footer: {
          text: 'Cafe Mezlo User Database | Session Information'
        }
    }});
     let shoutResponse;
    try {
        shoutResponse = await roblox.shout(Number(process.env.groupId), 'A training has now commenced! All Trianees, Junior Baristas, Baristas, and Senior Baristas, may come for a possible promotion!');
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