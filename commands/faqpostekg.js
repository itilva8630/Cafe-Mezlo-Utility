require('dotenv').config();
exports.run = async (client, message, args) => {
  
  return message.channel.send({
    embed: {
      footer: {
        text: 'Cafe Mezlo Utility | Last Updated:'
      },
      thumbnail: {
        url: `https://cdn.discordapp.com/attachments/700000077460144154/769963169321058364/logo.png`
      },
            color: 3066993,
      title: "<:cafemezlo:743479686931415041> | Frequently Asked Questios!",
      description: ` \n\n\n**Q | How do I apply for Trainee?**\n\nA | First off, join the group! After that, apply via the Application Center. If you pass, you'll be ranked to Trainee! We do require you to be a Premium Customer+, feel free to ask an HR to rank you!\n\n\n**Q | How do I get a Barsita role?**\n\nA | In order to become a Bairsta, you must be a Trainee already! After that, attend a training session, if you pass, you'll be promoted to Junior Barista! You can attend up to two more session if you pass and then get to Senior Bairsta.\n\n\n**Q | How do I become a MR?**\n\n\nA | There are two ways to become a MR! First off, we currently do **not** have application open. Secondly, you can be recommended by any HR. If you are, you'll be getting a DM from me containing some information and an applicaiton you must take!\n\n\n**Q | How do I get ping roles?**\n\nA | Good question! If you [click here](https://discord.com/channels/695445836791939204/759163701965750272/772253234759860224), you'll be taken to our reaction role panel! Once there, you may get any ping role you'd like! How cool?! :)\n\n\n**Q | Can we buy ranks?**\n\nA | We don't sell any ranks, including Trainee. Nor do we free-rank, so please don't ask us to free-rank you. :) You must work for all ranks.\n\n\n**Q | How do I join the Community Moderation Team?**\n\n A | Great question, we can't remain as calm as we are without them! Our CMT (Community Moderation Team) is led by <@508288140541427733>. When he decides to open applications, we'll post it in <#755143115135909988>! Sadly, the only way to join the CMT is via applications. Feel free to DM him if you'er interested in the role, he may open applications! Please direct all CMT questions to Niko!\n\n\n*Thank you for reading our FAQ! Please DM <@780804590244855859> if you have any questions!* :).
      \n\n\n`,
      footer: {
        text: "Cafe Mezlo Utility | FAQ"
      }


    }
  });
}