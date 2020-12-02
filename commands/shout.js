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
    let msg = args.join(' ');
    if(!msg){
        return message.channel.send({embed: {
            color: 16733013,
            description: `The message argument is required.`,
            author: {
                name: message.author.tag,
                icon_url: message.author.displayAvatarURL()
            }
        }});
    }
    let shoutResponse;
    try {
        shoutResponse = await roblox.shout(Number(process.env.groupId), msg);
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
    message.channel.send({embed: {
        color: 9240450,
        description: `**Success!** Posted group shout:\n`
        + `\`\`\`${msg}\`\`\``,
        author: {
            name: message.author.tag,
            icon_url: message.author.displayAvatarURL()
        }
    }});
    if(process.env.logchannelid === 'false') return;
    let logchannel = message.guild.channels.cache.get(process.env.logchannelid);
    logchannel.send({embed: {
        color: 2127726,
        description: `<@${message.author.id}> has posted a group shout:\n`
        + `\`\`\`${msg}\`\`\``,
        author: {
            name: message.author.tag,
            icon_url: message.author.displayAvatarURL()
        },
        footer: {
            text: 'Action Logs'
        },
        timestamp: new Date()
    }});
}
