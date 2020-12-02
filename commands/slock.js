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
    sessionannouncements.send({embed: {
        color: "Blue",
        
        description: `The training above has been locked! Don't fret if you couldn't attend, we host daily sessions! You can also DM an Assistant Manager+ and ask them to host a training. If you get disconnected, you will have 2 minutes to rejoin the server.`,
        title: "Cafe Mezlo Utility Announcement",
        footer: {
            text: 'Cafe Mezlo Databse | Session Announcement'
        },
        timestamp: new Date(),
         thumbnail: {
            url: `https://cdn.discordapp.com/attachments/700000077460144154/769963169321058364/logo.png`
        }
        
    }});
     message.channel.send({embed: {
        color: 9240450,
        description: `Slock announcement posted!`,
        title: "Success!",
        footer: {
          text: 'Cafe Mezlo User Database | Session Information'
        }
    }});
     let shoutResponse;
    try {
        shoutResponse = await roblox.shout(Number(process.env.groupId), 'The training has now slocked! Do not  fret if you could not attend, we host daily sessions! You can also DM an Assistant Manager+ and ask them to host a training. If you get disconnected, you will have 2 minutes to rejoin the server');
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