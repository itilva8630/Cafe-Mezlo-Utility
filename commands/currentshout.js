const roblox = require('noblox.js');
const chalk = require('chalk');
require('dotenv').config();

exports.run = async (client, message, args) => {
    let shout;
    try {
        shout = await roblox.getShout(Number(process.env.groupId));
    } catch (err) {
        console.log(chalk.red('An error occured when running the currentshout command: ' + err));
        return message.channel.send({embed: {
            color: 16733013,
            description: `Oops! An unexpected error has occured. It has been logged to the bot console.`,
            author: {
                name: message.author.tag,
                icon_url: message.author.displayAvatarURL()
            }
        }});
    }
  if(shout.body){
    message.channel.send({embed: {
        color: "GREEN",
        title: 'CURRENT SHOUT',
        footer: {
          text: 'Cafe Mezlo Utility. Requested by: ' + message.author.username + '.'
        },
        description: `\n**Posted by ${shout.poster.username}**\n\n${shout.body}`,
        author: {
            icon_url: message.author.displayAvatarURL()
        },
        thumbnail: {
            url: `http://www.roblox.com/Thumbs/Avatar.ashx?x=150&y=150&format=png&username=${shout.poster.username}`
        }
    }});
  } else {
        message.channel.send({embed: {
        color: 7948427,
        description: `**Posted by ${shout.poster.username}**\n*Shout cleared.*`,
        author: {
            name: message.author.tag,
            icon_url: message.author.displayAvatarURL()
        },
        thumbnail: {
            url: `http://www.roblox.com/Thumbs/Avatar.ashx?x=150&y=150&format=png&username=${shout.poster.username}`
        }
    }});
  }
}
 