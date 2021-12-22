const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('twitch')
		.setDescription('Gives you a link to the Devour Twitch channel'),
	async execute(interaction) {
		await interaction.reply('https://www.twitch.tv/devour');
	},
};