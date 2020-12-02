
module.exports = {
    name: "slowmode",
    description: "Lets you set slowmode on the channel.",
    run: (client, message, args) => {
        const amount = parseInt(args[0])
       if(!message.member.roles.cache.some(role =>["HR", "Head Community Moderator"].includes(role.name))){
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
        if(isNaN(amount)) return message.channel.send({embed: {
          color: 15158332,
          title: "ERROR!",
          description: "Please enter a time for the slowmode.",
          timestamp: new Date(),
          footer: {
            text: "Cafe Mezlo Utility"
          }
        }})
        if(args[0] === amount + "s") {
        message.channel.setRateLimitPerUser(amount)
        if(amount > 1) {
        message.channel.send({embed: {
          color: 3066993,
          title: "SUCCESS!",
          description: "This channels slowmode is now " + amount + " second(s).",
          timestamp: new Date(),
          footer: {
            text: "Cafe Mezlo Utility"
          }
        }})
        return
        }
        else {message.channel.send({embed: {
          color: 3066993,
          title: "SUCCESS!",
          description: "This channels slowmode is now " + amount + " second(s).",
          timestamp: new Date(),
          footer: {
            text: "Cafe Mezlo Utility"
          }
        }})
        return }
    } if(args[0] === amount + "mins") {
        message.channel.setRateLimitPerUser(amount * 60)
        if(amount > 1) {
        message.channel.send({embed: {
          color: 3066993,
          title: "SUCCESS!",
          description: "This channels slowmode is now " + amount + " minute(s).",
          timestamp: new Date(),
          footer: {
            text: "Cafe Mezlo Utility"
          }
        }})
        return
        } else { 
            message.channel.send({embed: {
          color: 3066993,
          title: "SUCCESS!",
          description: "This channels slowmode is now " + amount + " minute(s).",
          timestamp: new Date(),
          footer: {
            text: "Cafe Mezlo Utility"
          }
        }})  
             
    
    return }
    } if(args[0] === amount + "h") {
        message.channel.setRateLimitPerUser(amount * 60 * 60)
        if(amount > 1) {
        message.channel.send({embed: {
          color: 3066993,
          title: "SUCCESS!",
          description: "This channels slowmode is now " + amount + " hour(s).",
          timestamp: new Date(),
          footer: {
            text: "Cafe Mezlo Utility"
          }
        }})
        return
        } else {
            message.channel.send({embed: {
          color: 3066993,
          title: "SUCCESS!",
          description: "This channels slowmode is now " + amount + " hour(s).",
          timestamp: new Date(),
          footer: {
            text: "Cafe Mezlo Utility"
          }
        }})
        return}
    } else {
        message.channel.send({embed: {
          color: 15158332,
          title: "ERROR!",
          description: "You can only set seconds(s), minutes(m) and hours(h).",
          timestamp: new Date(),
          footer: {
            text: "Cafe Mezlo Utility"
          }
        }})
    }

    }
}