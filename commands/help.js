exports.run = async (client, message, args) => {

  const roblox = require('noblox.js');
const chalk = require('chalk');
require('dotenv').config();


message.author.send({embed: {
  title: "Help System",
  description: `Hiya! I've noticed you need some help! Here is some additional information that can help you out!\n\n[FAQ](https://discord.com/channels/695445836791939204/771020971548213328/781677863635910667)**\n**[Rules](https://discord.com/channels/695445836791939204/724116397805928481/782291738014384158)**\n**[Important Links](https://discord.com/channels/695445836791939204/724116397805928481/782293498547142666)\nStill need help? No worries, we're here to help! Simply DM <@780804590244855859> with your question.`,
color: "GREEN",
footer: {
  text: "Cafe Mezlo Utility"
},
timestamp: new Date()
}})


  if (args[0] === "public"){

              if(!message.member.roles.cache.some(role =>["Verified"].includes(role.name))){
       return message.channel.send({
           content: `<@` + message.author.id + `>,`,
           embed: {
            color: "#FF0000",
            description: "An error has occured while attempting to preform this command.",
           fields: [
             {
            name: "Error Code",
            value: "MEZLO-ZeW3-3ThID"
             },
             {
               name: "Error",
               value: "Not Verified."
             },
             {
               name: "User Note",
               value: "You Must Be Verified To Run This Command."
             }
           ],
            author: {
                name: message.author.tag,
                icon_url: message.author.displayAvatarURL()
            }
        }})
    }

    return message.channel.send({embed: {
      title: "PUBLIC COMMANDS",
      color: "GREEN",
      description: "``.suggest`` - Post a suggestion.\n``.help`` - Displays the help menu.\n``.currentshout`` - View the current shout.\n``.discordcount`` - View our Discord member count.\n``.info`` - Get information on a Roblox user.",
      footer: {
        text: "Cafe Mezlo Utility"
      },
      timestamp: new Date()
    }})
   }else if (args[0] === "ranking"){

    if(!message.member.roles.cache.some(role =>["MR", "HR"].includes(role.name))){
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

    return message.channel.send({embed: {
      title: "RANKING COMMANDS",
      color: "GREEN",
      description: "``.promote`` - Promote a user.\n``.demote`` - Demote a user.\n``.rank`` - Change a members rank to the specified rank.\n``.pcban`` - PCban a Roblox user.",
      footer: {
        text: "Cafe Mezlo Utility"
      },
      timestamp: new Date()
    }})
    }else if (args[0] === "shout"){

      if(!message.member.roles.cache.some(role =>["MR", "HR"].includes(role.name))){
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


    return message.channel.send({embed: {
      title: "SHOUT COMMANDS",
      color: "GREEN",
      description: "``.shout`` - Post a group shout.\n``.clearshout`` - Clear the current group shout.\n``.currentshout`` - View the current shout.",
      footer: {
        text: "Cafe Mezlo Utility"
      },
      timestamp: new Date()
    }})

    }else if (args[0] === "sessions"){

      if(!message.member.roles.cache.some(role =>["MR", "HR"].includes(role.name))){
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


    return message.channel.send({embed: {
      title: "SESSION COMMANDS",
      color: "GREEN",
      description: "``.shift`` - Post a shift.\n``.training`` - Post a training.\n``.slock`` - Slock a training.\n``.conclude`` - Conclude a session.\nWhen a session command is run, the group shout is automatically posted.",
      footer: {
        text: "Cafe Mezlo Utility"
      },
      timestamp: new Date()
    }})

    }else if (args[0] === "moderation"){

      if(!message.member.roles.cache.some(role =>["Community Moderation Team", "HR"].includes(role.name))){
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
               value: "You need a Community Moderator or HR to preform this command."
             }
           ],
            author: {
                name: message.author.tag,
                icon_url: message.author.displayAvatarURL()
            }
        }})
    }


    return message.channel.send({embed: {
      title: "MODERATION COMMANDS",
      color: "GREEN",
      description: "Coming soon...",
      footer: {
        text: "Cafe Mezlo Utility"
      },
      timestamp: new Date()
    }})
    }else if (args[0] === "other"){

      if(!message.member.roles.cache.some(role =>["MR", "HR"].includes(role.name))){
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


    return message.channel.send({embed: {
      title: "OTHER COMMANDS",
      color: "GREEN",
      description: "``.faq`` - Post a FAQ card.\n``.post`` - Post an application.\n``.say`` - Have the bot repeat you.",
      footer: {
        text: "Cafe Mezlo Utility"
      },
      timestamp: new Date()
    }})
  }else {

        if(!message.member.roles.cache.some(role =>["Verified"].includes(role.name))){
       return message.channel.send({
           content: `<@` + message.author.id + `>,`,
           embed: {
            color: "#FF0000",
            description: "An error has occured while attempting to preform this command.",
           fields: [
             {
            name: "Error Code",
            value: "MEZLO-ZeW3-3ThID"
             },
             {
               name: "Error",
               value: "Not Verified."
             },
             {
               name: "User Note",
               value: "You Must Be Verified To Run This Command."
             }
           ],
            author: {
                name: message.author.tag,
                icon_url: message.author.displayAvatarURL()
            }
        }})
    }

    return message.channel.send({
    content: `<@` + message.author.id + `>,`,
      embed: {
      title: "CAFE MEZLO UTILITY HELP",
      description: "Hiya! If you're looking for information on how to use me, you're in the right place! These following commands can help you out! Still have a question? Feel free to DM <@780804590244855859> so we can assist you!",
      fields: [
{
  name: "``.help public``",
  value: "Displays the commands available to the public."
},
{
  name: "``.help ranking``",
  value: "Displays the information regarding ranking members through me!"
},
{
  name: "``.help shout``",
  value: "Displays the information regarding posting group shouts through the bot."
},
{
  name: "``.help sessions``",
  value: "Displays information to help MRs with hosting sessions."
},
{
  name: "``.help moderation``",
  value: "This is used to help our Community Moderation Team and HRs to keep our community safe!"
},
{
  name: "``.help other``",
  value: "Displays all other miscellaneous commands."
}
      ],
      color: "ORANGE",
    }});
  }
}