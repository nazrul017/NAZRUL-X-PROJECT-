const fs = require('fs');

module.exports.config = {
    name: "murgi2",
    version: "1.0.2",
    hasPermssion: 2,
    credits: "nazrul",
    usePrefix: true,
    description: "gala deba voice ar sathe",
    commandCategory: "gala gali",
    usages: "[tag]",
    cooldowns: 5
};

module.exports.run = async function({ api, args, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("বস যে মেয়েকে ক্সুদ্দে চাউ সে মেয়েকে @ম্যানশন দেউ", event.threadID);
    let name =  event.mentions[mention];
    var arraytag = [];
    arraytag.push({id: mention, tag: name});
    const messages = [
        { message: `মাদারচোদ ${name} তর আম্মু পম পম খাংকির পো`, voicePath: __dirname + "/cache/1.mp3" },
        { message: `খাংকির মেয়ে ${name} তর মারে চুদি`, voicePath: __dirname + "/cache/2.mp3" },
        // Add more message objects as needed
    ];
    messages.forEach(async (messageObject) => {
        const { message, voicePath } = messageObject;
        const stream = fs.createReadStream(voicePath);
        api.sendMessage({ body: message, attachment: stream }, event.threadID);
      //, () => fs.unlinkSync(voicePath)
    });
}