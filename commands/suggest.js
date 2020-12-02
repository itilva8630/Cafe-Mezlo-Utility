exports.run = async (client, message, args) => {

var Trello = require("trello");

                            let channel = message.guild.channels.cache.find((x) => (x.name === "suggestion" || x.name === "💡-suggestions"))
  var trello = new Trello("8cdaba0e4b4e75684af7d95065173ccb", "4078e4d4bc98415a272a015d75d33c075da3eb26a42cd71c500159f675a3e25c");
  const roblox = require('noblox.js');
const chalk = require('chalk');
require('dotenv').config();
    if(!message.member.roles.cache.some(role =>["Verified"].includes(role.name))){
        return message.channel.send({embed: {
            color: "RED",
            description: "Uh oh! It looks like you're not yet Verified! Only Verified members can use commands.",
            author: {
                name: message.author.tag,
                icon_url: message.author.displayAvatarURL()
            }
        }})
    }


 message.channel.send("👀🗒️ **Check your DMs to continue!**")




const { MessageEmbed } = require('discord.js');

      let embed = new MessageEmbed()
      .setTitle("Please specify a title for your suggestion in less then 10 words.")
      .setFooter("Cafe Mezlo Utility")
      .setThumbnail('https://media.discordapp.net/attachments/700000077460144154/769963169321058364/logo.png?width=447&height=447')
      .setColor("#add8e6")
      .setTimestamp()
                const DM = await message.author.send(embed)
             const collector = DM.channel.createMessageCollector(t => t.author.id === message.author.id, {max: 1})
                      collector.on('collect', async victum1 => {
                        const victum = victum1.content

      let embede = new MessageEmbed()
      .setTitle("Please specify a description for your sugestion.")
      .setFooter("Cafe Mezlo Utility")
      .setThumbnail('https://media.discordapp.net/attachments/700000077460144154/769963169321058364/logo.png?width=447&height=447')
      .setColor("#add8e6")
      .setTimestamp()
                const DM = await message.author.send(embede)
             const collector = DM.channel.createMessageCollector(t => t.author.id === message.author.id, {max: 1})
                      collector.on('collect', async mod1 => {
                        const mod = mod1.content


      let embeda = new MessageEmbed()
      .setTitle("Please specify the game regarding your suggestion. Allowed Responses: ``Cafe``, ``Discord``, ``Training Center``, ``Application Center``.")
      .setFooter("Cafe Mezlo Utility")
      .setThumbnail('https://media.discordapp.net/attachments/700000077460144154/769963169321058364/logo.png?width=447&height=447')
      .setColor("#add8e6")
      .setTimestamp()
                const DM = await message.author.send(embeda)
             const collector = DM.channel.createMessageCollector(t => t.author.id === message.author.id, {max: 1})
                      collector.on('collect', async reason1 => {
                        const reason = reason1.content

                              
      let embedp = new MessageEmbed()
      .setTitle("Suggestion Posted!")
      .setDescription("Thank you for suggesting something! Your suggestion has now been posted in <#781588281799606272> for others to vote on and our [Development Trello](https://trello.com/b/QQE1jkhg/cafe-mezlo-development) for developers to review!")
      .setFooter("Cafe Mezlo Utility")
      .setThumbnail('https://media.discordapp.net/attachments/700000077460144154/769963169321058364/logo.png?width=447&height=447')
      .setColor("GREEN")
      .setTimestamp() 
                            message.author.send(embedp)

                                        let embed = new MessageEmbed()
                                        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
                                        .setTitle(`${victum}`)
                                        .setDescription(`\n**Suggestion:**\n ${mod}\n\n**Game:**\n${reason}`)
                                        .setColor('YELLOW')
                                        .setThumbnail('https://cdn.discordapp.com/attachments/700000077460144154/769963169321058364/logo.png')
                                        .setFooter(`Cafe Mezlo Utility`)
                                        .setTimestamp()
               
                                        
    channel.send(embed).then(m => {
      m.react('<:check:755584257195245598>')
      m.react('<:x_:755584287423594628>')
  
                                            
                           
  
trello.addCard(message.author.tag, `**Tittle:**\n${victum}\n\n**Description:**\n${mod}\n\n**Game:**\n${reason}`, '5fbfd9377069442cf6117079',
      function (error, trelloCard) {
          if (error) {
              console.log('Could not add card:', error);
          }
          else {
              console.log('Added card:', trelloCard);
          }
      });

})

                 })

                                    })
                                
                      })

                      
}