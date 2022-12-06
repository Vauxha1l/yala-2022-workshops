const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gm')
        .setDescription('Says gm to the user!'),
    async execute(interaction) {
        await interaction.reply('gm!');
    },
};
