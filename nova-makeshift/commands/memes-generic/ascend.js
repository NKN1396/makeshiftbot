const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_generic_ascend extends commando.Command {
	constructor(client) {
		super(client, {
			name: "ascend",
			aliases: [
				"ascension",
				"ascended"
			],
			group: "memes-generic",
			memberName: "ascend",
			description: "Ascension"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439490332380495884/ascension1.jpg"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439490425510821898/ascension2.jpg"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439490493672587264/ascension3.jpg"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439490569266528266/ascension4.jpg"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439490611079413761/ascension5.jpg"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439490939732623390/ascension6.png"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439491002303250442/ascension7.jpg"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439491046557089792/ascension8.jpg"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439491123938066433/ascension9.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
