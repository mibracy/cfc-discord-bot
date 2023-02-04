const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName(`leaderboard`)
		.setDescription(`THE tripple threat -straight white man- most hated study helper`)        
		.addBooleanOption(option =>
            option.setName('dance')
			    .setDescription('Who Can Dance If He Wants To?')
                .setRequired(true)),
	async execute(interaction) {
		const dance = interaction.options.getBoolean(`dance`);
		if (dance === true){
			await interaction.reply({content: `https://cdn.discordapp.com/attachments/962864335074496562/1063678344362729603/burkieDance.mp4`, ephemeral: true });
		} else {
			await interaction.reply({content: `https://cdn.discordapp.com/attachments/972712505417801728/1070213679779426314/Screenshot_2023-01-31_at_11.26.54_PM.png`, ephemeral: true });
		}
	},
};
