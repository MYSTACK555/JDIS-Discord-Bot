module.exports = (client, message) => {
    if (message.author.bot) return;
    if (message.content.toLowerCase().indexOf("steg")!==-1 || message.content.toLowerCase().indexOf("stég")!==-1)
    {
        message.channel.send(":man_gesturing_no_tone1::rage: **La Steg c'est non!** :rage::man_gesturing_no_tone1: ");
    }
    if (message.content.indexOf(client.config.prefix) !== 0) return;

    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command);

    if (!cmd) return;

    cmd.run(client, message, args);
};