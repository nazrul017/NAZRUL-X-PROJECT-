const fs = require("fs");
module.exports.config = {
	name: "Women",
    version: "1.0.2",
	hasPermssion: 0,
	credits: "JOSH",//SGE PALITAN MING KUPAL KA
	description: "no prefix",
  usePrefix: false,
	commandCategory: "No command marks needed",
	usages: "Women putang inamo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("women")==0 || (event.body.indexOf("Women")==0 || (event.body.indexOf("Babae")==0 || (event.body.indexOf("babae")==0)))) {
		var msg = {
				body: "pogi kung owner joshua🥹",
				attachment: fs.createReadStream(__dirname + `/noprefix/Women.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("☕", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }