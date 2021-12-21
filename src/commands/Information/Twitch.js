const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('Twitch')
		.setDescription("This is the link to devour's twitch"),
	async execute(interaction) {
		await interaction.reply('https://www.twitch.tv/devour');
	},
};