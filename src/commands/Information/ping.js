const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Updation'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};