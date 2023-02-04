const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName(`meet`)
		.setDescription(`THE tripple threat -straight white man- most hated study helper`)        
		.addUserOption(option =>
            option.setName('person')
			    .setDescription('Who do you want to meet?')
                .setRequired(true)),
	async execute(interaction) {
		const person = interaction.options.getUser(`person`);
		const id = person?.id

		switch (id){
			case `133039615161401344`:
				await interaction.reply({content: `https://cdn.discordapp.com/attachments/962864335074496562/1063678344362729603/burkieDance.mp4`, ephemeral: true });
				break;
			case `387778267366686731`:
				await interaction.reply({content: `https://cdn.discordapp.com/attachments/972712505417801728/1070213679779426314/Screenshot_2023-01-31_at_11.26.54_PM.png`, ephemeral: true });
				break;
			default:
				break;
		}
	},
};
