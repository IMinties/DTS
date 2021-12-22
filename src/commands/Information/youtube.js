const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('youtube')
		.setDescription('Gives you a link to the Devour youtube channel'),
	async execute(interaction) {
		await interaction.reply('https://www.youtube.com/Devour');
	},
};