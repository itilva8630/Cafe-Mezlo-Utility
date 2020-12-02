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
        color: "RED",
        
        description: `The session above has now ended! Thank you if you attended. If you'd like the Session Ping role, please [click here](https://discordapp.com/channels/695445836791939204/759163701965750272/767182332683354132)! We hope to see you at our next session! We try to host them daily! :)`,
        title: "Cafe Mezlo Session Closure",
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
        description: `Success! The session has now ended! Thanks for hosting! Please ensure that you log the session in <#766667059093831690>`,
        title: "Session Concluded!",
        footer: {
          text: 'Cafe Mezlo Utility | Session Information'
        }
 
    }});

     let shoutResponse;
    try {
        shoutResponse = await roblox.shout(Number(process.env.groupId), 'The previous session has now been concluded. It is highly recommended to join our communications server. We hope to see you at our next session!');
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