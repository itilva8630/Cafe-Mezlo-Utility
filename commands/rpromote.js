exports.run = async (client, message, args) => {
  let filter = (msg) => msg.author.id === message.author.id;
  if (
    message.member.roles.cache.some(role =>
      ["HR"].includes(role.name)
    )
  ) {
    let mention =
      (await message.mentions.members.first()) ||
      (await message.guild.members.cache.get(args[0]));
    const tosend = args.slice(1).join(" ");
    if (tosend) {
      if (mention) {
        await mention
    .send({embed: {
        color: 3066993,
      title: `**STAFF PROMOTION**`,
      thumbnail: {
            url: `https://cdn.discordapp.com/attachments/700000077460144154/769963169321058364/logo.png`
        },
            timestamp: new Date(),
      description: `Greetings! We're pleased to announce you've been promoted to ${tosend}! We strive to ensure hard-working Staff Members and you've surpassed that requirment! Congratulations! :)\n\n Promoted By: ${message.member}.`,
      footer: {
    text: 'Cafe Mezlo Utility | Staff Management System |  Please open a Staffing Department ticket if you have any inquiries. You can not reply to this message.',
    thumbnail: "https://cdn.discordapp.com/attachments/700000077460144154/769963169321058364/logo.png"
        }
      }})


          .then(async () => {
            message.channel.send({
              embed: {
                color: 9240450,
                title: "SENT!",
                description: "Successfully promoted that user! :eyes:.",
                author: {
                  name: message.author.tag,
                  icon_url: message.author.displayAvatarURL()
                }
              }
            });
            if (process.env.ranklogs === "false") return;
            let ranklogs = await message.guild.channels.cache.get(
              process.env.ranklogs
            );
            ranklogs.send({
              embed: {
                color: 2127726,
                description: `<@${message.author.id}> (${message.author.tag}) promoted  <@${mention.id}> (${mention.user.tag}), to: \`${tosend}\``,
                author: {
                  name: message.author.tag,
                  icon_url: message.author.displayAvatarURL()
                },
                footer: {
                  text: "Cafe Mezlo Utility | Staff Management System"
                },
                timestamp: new Date()
              }
            });
          })
          .catch(async (err) => {
            return message.channel.send({
              embed: {
                color: 16733013,
                title: "ERROR!",
                description: "That person does not have their DMs on!",
                author: {
                  name: message.author.tag,
                  icon_url: message.author.displayAvatarURL()
                }
              }
            });
          });
      } else {
        let findname = await message.guild.members.fetch({
          query: args[0],
          limit: 1
        });
        if (findname.first().id) {
          const msg = await message.channel.send({
            embed: {
              color: 39423,
              description: `Do you want to send this DM to <@${
                findname.first().id
              }> (${findname.first().user.tag})?`,
              author: {
                name: message.author.tag,
                icon_url: message.author.displayAvatarURL()
              },
              footer: {
                text: `Options: No | Yes`
              }
            }
          });
          message.channel
            .awaitMessages(filter, { max: 1, time: 60000 })
            .then(async collected => {
              if (collected.size === 0) {
                message.channel.send({
                  embed: {
                    description: `You took to long.`,
                    color: 16733013,
                    author: {
                      name: message.author.tag,
                      icon_url: message.author.displayAvatarURL()
                    }
                  }
                });
              } else {
              let answer = collected.first().content.toLowerCase();
              if (answer === "no") {
                return message.channel.send({
                  embed: {
                    color: 9240450,
                    description: `Did not send a DM.`,
                    author: {
                      name: message.author.tag,
                      icon_url: message.author.displayAvatarURL()
                    }
                  }
                });
              } else {
              if (answer === "yes") {
        await findname.first()
    .send({embed: {
color: 3066993,
      title: `**STAFF LOA UPDATE NOTIFICATION**`,
      thumbnail: {
            url: `https://cdn.discordapp.com/attachments/700000077460144154/769963169321058364/logo.png`
        },
            timestamp: new Date(),
      description: `Greetings. Your LOA has been accpeted! The date of return is: ${tosend}. Enjoy your break!\n\n Approved from: ${message.member}.`,
      footer: {
    text: 'Cafe Mezlo User Utility | Staff Management |  Please open a Staffing Department ticket if you have any inquiries. You can not reply to this message.',
    thumbnail: "https://cdn.discordapp.com/attachments/700000077460144154/769963169321058364/logo.png"
        }
      }})
          .then(async () => {
            message.channel.send({
              embed: {
                color: 9240450,
                description: "Successfully sent DM!",
                author: {
                  name: message.author.tag,
                  icon_url: message.author.displayAvatarURL()
                }
              }
            });
            if (process.env.ranklogs === "false") return;
            let logchannel = await message.guild.channels.cache.get(
              process.env.ranklogs
            );
            ranklogs.send({
                embed: {
                color: 2127726,
                description: `<@${message.author.id}> (${message.author.tag}) approved LOA for  <@${mention.id}> (${mention.user.tag}), return date: \`${tosend}\``,
                author: {
                  name: message.author.tag,
                  icon_url: message.author.displayAvatarURL()
                },
                footer: {
                  text: "LOA Logs"
                },
                timestamp: new Date()
              }
            });
          })
          .catch(async (err) => {
            return message.channel.send({
              embed: {
                color: 16733013,
                description: "That person does not have their DMs on!",
                author: {
                  name: message.author.tag,
                  icon_url: message.author.displayAvatarURL()
                }
              }
            });
          });
              } else {
                return message.channel.send({embed: {
                  color: 16733013,
                  description: 'That is not a valid option.',
                  author: {
                    name: message.author.tag,
                    icon_url: message.author.displayAvatarURL()
                  }
                }})
              }
              }
            }
            });
        }
      }
    } else
      message.channel.send({
        embed: {
          color: "RED",
          title: "ERROR!",
          description: "You did not provide the new rank for the Staff Member",
          author: {
            name: message.author.tag,
            icon_url: message.author.displayAvatarURL()
          }
        }
      });
  } else {
    message.channel.send({
      embed: {
        color: 16733013,
        description: "You need the `Database Access` role to use this command!",
        author: {
          name: message.author.tag,
          icon_url: message.author.displayAvatarURL()
        }
      }
    });
  }
};