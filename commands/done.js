exports.run = async(client, message, args) => {

message.channel.send({embed: {
  title: "Suggestions Updated",
  description: "All suggestions have read and updated via our [Trello](https://trello.com/b/QQE1jkhg/cafe-mezlo-development). Is your suggestion not there? It must be been deleted by our systems!\n\nReasons Suggestions Get Deleted:\n- Off Topic\n- Not Beneficial For Our Cafe\n- Denied By An Executive Team Member\nHave anymore questions? Reach out to us via <@780804590244855859>!",
  color: "GREEN",
  timestamp: new Date(),
  footer: {
    text: "Cafe Mezlo Utility"
  }
}})


}