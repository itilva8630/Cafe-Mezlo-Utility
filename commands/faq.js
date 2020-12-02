exports.run = async (client, message, args) => {

  const roblox = require('noblox.js');
const chalk = require('chalk');
require('dotenv').config();
    if(!message.member.roles.cache.some(role =>["Community Moderation Team", "MR", "HR"].includes(role.name))){
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
  if (args[0] === "1"){
    return message.channel.send({embed: {
      title: "Q | How do I apply for Trainee?",
      color: "GREEN",
      description: "A | First off, join the group! After that, apply via the Application Center. If you pass, you'll be ranked to Trainee! We do require you to be a Premium Customer+, feel free to ask an HR to rank you!"
    }})
   
   }else if (args[0] === "2"){
    return message.channel.send({embed: {
      title: "Q | How do I get a Barsita role?",
      color: "GREEN",
      description: "A | In order to become a Bairsta, you must be a Trainee already! After that, attend a training session, if you pass, you'll be promoted to Junior Barista! You can attend up to two more session if you pass and then get to Senior Bairsta."
    }})
    }else if (args[0] === "3"){
    return message.channel.send({embed: {
      title: "Q | How do I become a MR?",
      color: "GREEN",
      description: "A | There are two ways to become a MR! First off, we currently do not have application open. Secondly, you can be recommended by any HR. If you are, you'll be getting a DM from me containing some information and an applicaiton you must take!"
    }})
    }else if (args[0] === "4"){
    return message.channel.send({embed: {
      title: "Q | How do I get ping roles?",
      color: "GREEN",
      description: "A | Good question! If you [click here](https://discord.com/channels/695445836791939204/759163701965750272/772253234759860224), you'll be taken to our reaction role panel! Once there, you may get any ping role you'd like! How cool?! :)"
    }})
    }else if (args[0] === "5"){
    return message.channel.send({embed: {
      title: "Q | Can we buy ranks?",
      color: "GREEN",
      description: "A | We don't sell any ranks, including Trainee. Nor do we free-rank, so please don't ask us to free-rank you. :) You must work for all ranks."
    }})
    }else if (args[0] === "6"){
    return message.channel.send({embed: {
      title: "Q | How do I join the Community Moderation Team?",
      color: "GREEN",
      description: "A | Great question, we can't remain as calm as we are without them! Our CMT (Community Moderation Team) is led by <@508288140541427733>. When he decides to open applications, we'll post it in <#755143115135909988>! Currently, applications are closed! Please direct all CMT questions to Niko!"
    }})
    }else if (args[0] === "7"){
    return message.channel.send({embed: {
      title: "Q | I Need Support! Where Do I Go?",
      color: "GREEN",
      description: "A | Don't worry, we're here to help! All you need to do is send a DM to <@780804590244855859> going over what you need help with! Then our HRs will assist you as soon as possible."
    }})
  }else {
    return message.channel.send({embed: {
      title: "FAQ",
      description: "Hiya! Please state a FAQ Card for me to reply to! Example: ``?faq 1``. Only MRs, HRs, and the Community Moderation Team can use these commands.\n\n``1`` - How To Apply For Trainee.\n``2`` - How To Get Barista.\n``3`` - How To Become An MR.\n``4`` - How To Get Ping Roles.\n``5`` - Buying Ranks Information.\n``6`` - How To Join the CMT.\n``7`` - Where To Go For Support.",
      color: "RED",
    }});
  }
}