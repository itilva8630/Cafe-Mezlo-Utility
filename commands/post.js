  exports.run = async (client, message, args) => {
  const roblox = require('noblox.js');
const chalk = require('chalk');
require('dotenv').config();
    if(!message.member.roles.cache.some(role =>["Executive Team", "Head Community Moderator"].includes(role.name))){
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
  
  if(process.env.pac === 'false') return;
  let pac = await message.guild.channels.cache.get(process.env.pac);
(process.env.pac);

  if (args[0] === "MRApps"){
        
pac.send("@everyone,"),
    pac.send({embed: {
        color: "GREEN",
        
        description: `Greetings, everyone! Middle Rank applications have now opened! You can [click here](https://forms.gle/6nbMbdDSQqYpfgwS9) to open them! The requirements are shown below. Please ensure to put effort and at least 2-3 sentences per question.

       ** Requirements:**

• You must be 13+ and in our Discord Server.
• Grammar at all times.
• No bad reputation in the past.
• Active within the Discord server and Cafe.

*Have a question? Feel free to DM <@780804590244855859> so we can assist you!*
        
        Opened By: <@${message.author.id}>
        
        *Signed,*
        ***Cafe Mezlo Utility***`,
        title: "Middle Rank Applications!",
        timestamp: new Date(),
    }})
    return message.channel.send({embed: {
      title: "Success!",
      color: "GREEN",
      description: "I've posted MR Applications in <#755143115135909988>!"
    }})
   
   }else if (args[0] === "CMTApps"){
            
pac.send("@everyone,"),
    pac.send({embed: {
        color: "GREEN",
        
        description: `Greetings, everyone! Community Moderator applications have now opened! You can [click here](https://forms.gle/XSH3fydgCSeXLH3P7) to open them! The requirements are shown below. Please ensure to put effort and at least 2-3 sentences per question.

**Requirements:**

• No current bans in-game.
• Semiclean punishment history.
• No bad reputation in the past.
• Active within the Discord server and Cafe.

*Have a question? Feel free to DM <@780804590244855859> so we can assist you!*
        
        Opened By: <@${message.author.id}>
        
        *Signed,*
        ***Cafe Mezlo Utility***`,
        title: "Community Moderator Applications!",
        timestamp: new Date(),
    }})
    return message.channel.send({embed: {
      title: "Success!",
      color: "GREEN",
      description: "I've posted Community Moderator Applications in <#755143115135909988>!"
    }})
  }else {
    return message.channel.send({embed: {
      title: "Post Feature",
      description: "``.post MRApps`` - This is used to post Middle Rank applications.\n``.post CMTApps`` - This is used to post Community Moderator Applications",
      color: "DARK BLUE",
    }});
  }
}