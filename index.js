const {Client, Intents} = require("discord.js");
const { Collection } = require('discord.js');
const fs = require('fs');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const token = 'Nope';
const { MessageActionRow, MessageButton } = require('discord.js');

client.commands = new Collection();

require('dotenv').config();


const functions = fs.readdirSync("./src/functions").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync("./src/events").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./src/commands");


(async () => {
    for (file of functions) {
        require(`./src/functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, ".src/events");
    client.handleCommands(commandFolders, "./src/commands");
    client.login(token);
})();



client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (command === 'ping') {
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('primary')
					.setLabel('Primary')
					.setStyle('PRIMARY'),
			);

		await interaction.reply({ content: 'Pong!', components: [row] });
	}
});