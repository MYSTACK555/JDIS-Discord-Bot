module.exports = async (client, interaction) => {

    if (!interaction.isCommand()) return;
    const command = client.commands.get(interaction.commandName);
    if (!command) return;
    try { await command.execute(interaction); }
    catch (error) {
        if (error) console.error(error);
        await interaction.reply({ content: "Il y a une erreur lors du traitement de la commande" })
    }
}