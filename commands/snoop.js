const { SlashCommandBuilder } = require(`discord.js`);
const fs = require(`fs`);
const util = require(`util`);

const readFile = util.promisify(fs.readFile);

module.exports = {
	data: new SlashCommandBuilder()
		.setName(`snoop`)
		.setDescription(`Snoop on someones studying habits`)
		.addUserOption(option =>
            option.setName(`user`)
			    .setDescription(`The person to check out`)
                .setRequired(true))
		.addBooleanOption(option =>
			option.setName(`public`)
				.setDescription(`Do you want everyone to know?`)
				.setRequired(true)),
	async execute(interaction) {
		await interaction.deferReply({ephemeral: true });
        const data = await readFile(`console.log`, `utf8`);
		const user = interaction.options.getUser('user');
		const ephemeral = interaction.options.getBoolean('public');
		const id = user?.id;
		let count = data?.split(`${id} IS STUDYING`).length - 1;
		count += data?.split(`${id} IS LEARNING`).length - 1;

		await interaction.editReply({content: `<@${interaction.user.id}> 👀 \nNosey are we!\n\n<@${id}> has studied ${count} questions!`, ephemeral: !ephemeral});
	},
};
