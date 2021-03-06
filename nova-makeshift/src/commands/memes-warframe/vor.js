var { Command } = require("discord.js-commando");
var selectRandomly = require("./../../utils/selectRandomly");
var { oneLine } = require("common-tags");

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "vor",
			aliases: [
				"vor",
				"vorpost",
				"monologue"
			],
			group: "memes-warframe",
			memberName: "vor",
			description: "Look at them, ..."
		});
	}
	
	async run(msg, args) {
		var options = [
			oneLine`Look at them, they come to this place when they know they are not pure.
			Tenno use the keys, but they are mere trespassers.
			Only I, Vor, know the true power of the Void.
			I was cut in half, destroyed, but through its Janus Key, the Void called to me.
			It brought me here and here I was reborn.
			We cannot blame these creatures, they are being led by a false prophet, an impostor who knows not the secrets of the Void.
			Behold the Tenno, come to scavenge and desecrate this sacred realm.
			My brothers, did I not tell of this day?
			Did I not prophesize this moment?
			Now, I will stop them.
			Now I am changed, reborn through the energy of the Janus Key.
			Forever bound to the Void.
			Let it be known, if the Tenno want true salvation, they will lay down their arms, and wait for the baptism of my Janus key.
			It is time.
			I will teach these trespassers the redemptive power of my Janus key.
			They will learn its simple truth.
			The Tenno are lost, and they will resist.
			But I, Vor, will cleanse this place of their impurity.`
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
