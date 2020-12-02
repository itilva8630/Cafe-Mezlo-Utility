exports.run = async (client, message, args) => {
  
let shift = message.guild.roles.cache.find(r => r.name === "Shift Ping");
let training = message.guild.roles.cache.find(r => r.name === "Training Ping");
let dev = message.guild.roles.cache.find(r => r.name === "Development Ping");



  if (args[0] === "all"){
     message.member.roles.add(shift);
     message.member.roles.add(training);
     message.member.roles.add(dev);
    return message.channel.send({embed: {
      title: "Ping Roles",
      color: "GREEN",
      description: "I've added all the ping roles to you! If you'd like to remove any, simply state ``!remove``."
    }})
   
   }else if (args[0] === "shift"){
     message.member.roles.add(shift);
    return message.channel.send({embed: {
      title: "Ping Roles",
      color: "GREEN",
      description: "We've added the Shift Ping role to you! Say ``!remove shift`` to remove the Upload role."
    }})
  }else {
    return message.channel.send({embed: {
      title: "Ping Roles",
      description: "Strange. It looks like you either spelled the role wrong or didn't imput a role to add!\n**Types Of Ping Roles**\n``all``\n``shift``\n ``training``\n``dev``",
      color: "RED",
    }});
  }
}