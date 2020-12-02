const express = require('express');
const app = express();

app.get('/', (request, response) => {
     response.sendStatus(200);
});

let listener = app.listen(process.env.PORT, () => {
     console.log('Your app is currently listening on port: ' + listener.address().port);
});

const Discord = require('discord.js');
const client = new Discord.Client();
const roblox = require('noblox.js');
const chalk = require('chalk');
const figlet = require('figlet');
require('dotenv').config();
const fs = require('fs');

roblox.setCookie(process.env.cookie).catch(async err => {
    console.log(chalk.red('Issue with logging in: ' + err));
});

let commandlist = [];

var firstshout = true;
var shout;

async function onShout(){
  let shoutchannel = await client.channels.cache.get(process.env.shoutchannelid);
  if(firstshout == true){
    firstshout = false;
    shout = await roblox.getShout(Number(process.env.groupId));
    setTimeout(onShout, 10000);
  } else {
    setTimeout(onShout, 10000);
    let currentshout = await roblox.getShout(Number(process.env.groupId));
    if(currentshout.body == shout.body) return;
    if(currentshout.body){
      shoutchannel.send({embed: {
        color: "#90ee90",
        description: currentshout.body,
        author: {
          name: currentshout.poster.username,
          icon_url: `http://www.roblox.com/Thumbs/Avatar.ashx?x=150&y=150&format=png&username=${shout.poster.username}`
        }
      }});
    } else {
      shoutchannel.send({embed: {
        color: "RED",
          description: '*Shout cleared.*',
            author: {
              name: currentshout.poster.username,
              icon_url: `http://www.roblox.com/Thumbs/Avatar.ashx?x=150&y=150&format=png&username=${shout.poster.username}`
            }
      }});
    }
    shout = currentshout;
  }
}
if(process.env.shoutchannelid !== 'false'){
  setTimeout(onShout, 10000);
}

fs.readdir('./commands/', async (err, files) => {
    if(err){
        return console.log(chalk.red('An error occured when checking the commands folder for commands to load: ' + err));
    }
    files.forEach(async (file) => {
        if(!file.endsWith('.js')) return;
        let commandFile = require(`./commands/${file}`);
        commandlist.push({
            file: commandFile,
            name: file.split('.')[0]
        });
    });
});



// Bot owners - 20000
// Non Bot Owner - 30000
// 10 seconds - 10000

const axios = require('axios');
const discord = require("discord.js")
let GROUP_ID = 6784591
let GOAL = 400
let count = 1
let wid = "755258779670413434"
let wtoken = "x_E7hsHJF5TNCtnsDFw-4dMNFB3eH_XIHgztvz-wg74tmdhqYD6SWUcX2ISBhS4vz0Lf"

let webhook = new discord.WebhookClient(wid, wtoken)
async function updateCount() {
    let response = await axios.get(`https://groups.roblox.com/v1/groups/${GROUP_ID}/`)
    let response_count = response.data.memberCount 
    console.log("got request")
    if (count < response_count) {
        console.log(response_count, count) 
     const embed = new Discord.MessageEmbed()
.setColor("#FFDAB9")
.setThumbnail('https://cdn.discordapp.com/attachments/700000077460144154/769963169321058364/logo.png')
.setAuthor('Cafe Mezlo Member Counter', 'https://cdn.discordapp.com/attachments/700000077460144154/769963169321058364/logo.png', 'https://www.roblox.com/groups/6784591/Cafe-Mezlo')
.addFields(
		{ name: 'Currently', value: response_count, inline: true },
    { name: 'Left', value: GOAL - response_count, inline: true },
		{ name: 'Goal', value: GOAL, inline: true },
	)
.setFooter("Cafe Mezlo Utility")
.setTimestamp()
webhook.send(embed)      
  if (count == 0) {
            count = response_count
            return;
        }
        count = response_count
    }
}

setInterval(() => {

  updateCount()
}, 10000);





client.on('ready', async () => {

    let responses = await axios.get(`https://groups.roblox.com/v1/groups/${GROUP_ID}/`)
    let response_counts = responses.data.memberCount 
  console.log(chalk.yellow(figlet.textSync('qbot', { horizontalLayout: 'full' })));
  console.log(chalk.red(`Bot started!\n---\n`
  + `> Channels: ${client.channels.cache.size}\n`
  + `> Servers: ${client.guilds.cache.size}`));
   const activities_list = [
    "in the Kitchen!", 
    "for .help",
    `over the community!`, 
    "staff!",
    "your commands!",
    "in the Cafe!",
    "Cafe Mezlo Utility | .help",
    `${response_counts} members!`
    ];
 const type_list = [
   "PLAYING",
   "WATCHING",
   "WATCHING",
   "LISTENING",
   "LISTENING",
   "PLAYING",
   "PLAYING",
   "WATCHING"
   
];

    setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
      client.user.setActivity(activities_list[index], {type: type_list[index]}); 
  }, 10000);
  setInterval(() => {

  updateCount()
}, 10000);
})

client.on('message', async (message) => {
    if(!message.content.startsWith(process.env.prefix)) return;
    const args = message.content.slice(process.env.prefix.length).split(' ');
    const commandName = args[0].toLowerCase();
    args.shift();
    const command = commandlist.findIndex((cmd) => cmd.name === commandName);
    if(command == -1) return;
    commandlist[command].file.run(client, message, args);
});



client.on('guildMemberAdd', member => { // when a member joins
    const channel = member.guild.channels.cache.find(ch => ch.name === '💭-community'); // defining the channel to send the message in, simple. change the channel name to ur welcome channel name exact
    if (!channel) return; // if there is sno such channel, ignore the rest of the code
  channel.send('<@' + member.user.id + '>,')
  
})


client.on('guildMemberAdd', member => { // when a member joins
    const channel = member.guild.channels.cache.find(ch => ch.name === '💭-community'); // defining the channel to send the message in, simple. change the channel name to ur welcome channel name exact
    if (!channel) return; // if there is sno such channel, ignore the rest of the code
    const embed = new Discord.MessageEmbed() // just making the embed :)

    .setDescription('☕ Welcome to Cafe Mezlo, <@'
     + member.user.id + '>! Because you are seeing this, it means you have already verified and you are ready to start your journey here at Cafe Mezlo!\n\n🤔 If you have any questions, feel free to send a DM to <@780804590244855859> so we can assist you!\n\n🤩 Make sure to join our Roblox Group, the link is below!\n\nℹ️ Make sure to check out the rules and other information in <#724116397805928481>\n\n<:roblox:741276591765848065> Group Link: https://www.roblox.com/groups/6784591/Cafe-Mezlo#!/about!\n\n*Signed,*\n***Cafe Mezlo Utility***')
    .setColor('RANDOM')
    channel.send(embed) // sending embed
  });


   const { MessageEmbed } = require('discord.js')
   client.on('messageDelete', (message) => {
        if (message.author.bot) return;

        if (message.mentions.members.first() && !message.mentions.members.first().user.bot && message.mentions.members.first().user.id !== message.author.id) {

            let embed = new MessageEmbed()
                .setTitle('Ghost Ping Detected!')
                .setColor('ff0000')
                .setFooter('Cafe Mezlo Utility | Moderation')
                .addField('Sender', message.author)
                .addField('Message', message.content);

            message.channel.send(embed)

            message.author.send({embed: {
              title: "Ghost Ping Detected",
              description: `Greetings, our systems have detected a ghost ping. Please ensure not to ghost ping anyone as it does vioulate our [guidelines](https://discord.com/channels/695445836791939204/724116397805928481/782291756418859008). If you have a question, please reach out to our team by DMing <@780804590244855859>. The user you ghost pinged has been notified.\n\n**Ghost Ping Message:**\n${message.content}\n**Channel:**\n${message.channel.toString()}`,
              color: "RED",
              timestamp: new Date()
            }})
      message.mentions.members.first().send({embed: {
        title: "You've Been Ghost Pinged!",
        description: `Greetings. Our systems have detected that you've been ghost pinged. If you'd like this user warned, please ping a member of the Community Moderation Team in <#757737326783889501>\n\n**Sender:**\n${message.author}\n**Message:**\n${message.content}\n**Channel:**\n${message.channel.toString()}`,
        footer: {
          text: "Cafe Mezlo Utility",
        },
        timestamp: new Date(),
        color: "RED"
      }})
}
    })



 

client.login(process.env.token);
