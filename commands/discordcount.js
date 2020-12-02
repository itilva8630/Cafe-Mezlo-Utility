exports.run = async(client, message, args) => {
  const members = await message.guild.memberCount
  message.channel.send({
           content: `<@` + message.author.id + `>,`,
           embed: {
    color: 39423,
    footer: {
      text: 'Cafe Mezlo Utility'
    },
    
    fields: [
      {
      name: `Discord Member Count`,
      value: `**${members}** members in our Discord!`,
      },
     ],
    timestamp: new Date(),
  }})
}