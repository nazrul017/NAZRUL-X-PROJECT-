module.exports.config = {
  name: "album",
  version: "1.0.3",
  hasPermssion: 0,
  credits: "nazrul project",
  usePrefix: false,
  description: "Random video",
  commandCategory: "short video",
  cooldowns: 5,
  dependencies: {
    axios: ""
  }
}, module.exports.run = async function({
  event: e,
  api: a,
  args: n
}) {
  if (!n[0]) return a.sendMessage("•—»✨「 𝐕𝐈𝐃𝐄𝐎 」✨«—•\n•┄┅════❁🌺❁════┅┄•\n𝟏. 𝐈𝐒𝐋𝐀𝐌𝐈𝐊 𝐕𝐈𝐃𝐄𝐎🌺✨ \n𝟐. 𝐋𝐎𝐕𝐄 𝐕𝐈𝐃𝐄𝐎 🤗😌\n𝟑. 𝐒𝐔𝐑𝐀 𝐕𝐈𝐃𝐄𝐎 💫\n𝟒. 𝐒𝐓𝐀𝐓𝐔𝐒 𝐕𝐈𝐃𝐄𝐎💌\n𝟓. 𝐅𝐑𝐄𝐄 𝐅𝐈𝐑𝐄 𝐕𝐈𝐃𝐄𝐎 😻😊\n𝟔. 𝐒𝐀𝐃 𝐕𝐈𝐃𝐄𝐎 🥹💙\n𝟕. 𝐀𝐍𝐈𝐌𝐄 𝐕𝐈𝐃𝐄𝐎 🙂💔\n𝟖. 𝐒𝐇𝐎𝐑𝐓 𝐕𝐈𝐃𝐄𝐎 🌿🕊️\n𝟗. 𝐂𝐏𝐋 𝐕𝐈𝐃𝐄𝐎 🖤🥀 \n𝟏𝟎. 𝐁𝐀𝐁𝐘 𝐕𝐈𝐃𝐄𝐎 😚😊 \n𝟏𝟏.𝐒𝐇𝐀𝐈𝐑𝐈 𝐕𝐈𝐃𝐄𝐎❤️🥀\n\n===「 𝟏𝟖+ 𝐕𝐈𝐃𝐄𝐎 」===\n━━━━━━━━━━━━━\n𝟏𝟐. 𝐒𝐄𝐗 𝐕𝐈𝐃𝐄𝐎💜💛 \n𝟏𝟑. 𝐇𝐎𝐑𝐍𝐘 𝐕𝐈𝐃𝐄𝐎 💖✨\n𝟏𝟒. 𝐈𝐓𝐄𝐌 𝐕𝐈𝐃𝐄𝐎💔🥀\n15. 𝐇𝐎𝐓 𝐕𝐈𝐃𝐄𝐎 🐻\n\n•┄┅════❁🌺❁════┅┄•\n\nTell me how many video numbers you want to see by replaying this message", e.threadID, ((a, n) => {
    global.client.handleReply.push({
      name: this.config.name,
      messageID: n.messageID,
      author: e.senderID,
      type: "create"
    })
  }), e.messageID)
  }, module.exports.handleReply = async ({
  api: e,
  event: a,
  client: n,
  handleReply: t,
  Currencies: s,
  Users: i,
  Threads: o
  }) => {
  var { p, h } = linkanh();

  if ("create" === t.type) {
    const n = (await p.get(h)).data.data;
    const shaon = (await p.get(h)).data.shaon;
    let t = (await p.get(n, {
      responseType: "stream"
    })).data;
    return e.sendMessage({
      body: `🟡${shaon}//𝗡𝗔𝗭𝗥𝗨𝗟 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 😘💋`,
      attachment: t
    }, a.threadID, a.messageID)
  }

  function linkanh() {
        const p = require("axios");
        if ("1" == a.body)
            var h = "https://shaon-all-api-07mo.onrender.com/video/islam";
        else if ("2" == a.body)
         var   h = "https://shaon-all-api-07mo.onrender.com/video/love";
        else if ("3" == a.body)
         var   h = "https://shaon-all-api-07mo.onrender.com/video/ayat";
        else if ("4" == a.body)
          var  h = "https://shaon-all-api-07mo.onrender.com/video/status";
        else if ("5" == a.body)
          var  h = "https://shaon-all-api-07mo.onrender.com/video/ff";
        else if ("6" == a.body)
          var  h = "https://shaon-all-api-07mo.onrender.com/video/sad";
        else if ("7" == a.body)
          var  h = "https://shaon-all-api-07mo.onrender.com/video/anime";
        else if ("8" == a.body)
          var  h = "https://shaon-all-api-07mo.onrender.com/video/short";
        else if ("9" == a.body)
         var   h = "https://shaon-all-api-07mo.onrender.com/video/cpl";
        else if ("10" == a.body)
         var  h = "https://shaon-all-api-07mo.onrender.com/video/baby";
          else if ("11" == a.body)
          var  h = "https://shaon-all-api-07mo.onrender.com/video/shairi";
         else if ("12" == a.body)
         var  h = "https://shaon-all-api-07mo.onrender.com/video/sex";
         else if ("13" == a.body)
         var  h = "https://shaon-all-api-07mo.onrender.com/video/horny";
         else if ("14" == a.body)
         var  h = "https://shaon-all-api-07mo.onrender.com/video/item";
           else if ("15" == a.body)
         var  h =
"https://shaon-all-api-07mo.onrender.com/video/hot";
        return { p, h };
    }
};