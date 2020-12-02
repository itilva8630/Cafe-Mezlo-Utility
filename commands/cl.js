const roblox = require('noblox.js');
const chalk = require('chalk');
require('dotenv').config();

exports.run = async (client, message, args) => {

  message.channel.send({embed: {
    title: "Version Three Checklist",
    description: "This checklist is our V3 checklist. It will be updated if an update occurrs. Feel free to reach out to us if you have any questions by DMing <@780804590244855859>.",
             thumbnail: {
            url: `https://cdn.discordapp.com/attachments/700000077460144154/769963169321058364/logo.png`
        },
    fields: [

         {
        name: "CHECKLIST",
        value: "**Cafe Building - <:mezlooff:782974456502812693>\nCafe Scripting - <:mezlocross:782974593609498625>\n3D Modeling - <:mezlooff:782974456502812693>\nFunding - <:mezlocross:782974593609498625> (7/7000 <:robux:741276449402781727>)**",
        inline: true
         },

      {
        name: "KEY CODES",
        value: "**Not Started - <:mezlooff:782974456502812693>\nStarted/Incomplete - <:mezlocross:782974593609498625>\nComplete - <:mezlocheckmark:782974344245936198>**",
        inline: true
      }
    ],
    color: "#add8e6",
    footer: {
      text: "Cafe Mezlo Utility"
    },
    timestamp: new Date()
  }})



}