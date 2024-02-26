module.exports.config = {
  name: "🕌",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "nazrul",
  usePrefix: true,
  description: "sand best islamick Video",
  commandCategory: "noprefix",
  usages: "🕌",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
    if (event.body.indexOf("🕌")==0 || (event.body.indexOf("🕌")==0) || event.body.indexOf("Jummah Mubarak")==0 ||
event.body.indexOf("Jummah")==0 ||
event.body.indexOf("🕌")==0 ||
event.body.indexOf("জুম্মাহ মুবারক")==0 ||
event.body.indexOf("জুম্মাহ মোবারক")==0 ||
event.body.indexOf("🕌")==0 ||
event.body.indexOf("🕌")==0 ||
event.body.indexOf("🕌")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/g0dpYGm.mp4",
"https://drive.google.com/uc?id=1my0Qs9K60k3V0pb3AVZ1P-IE9Nhx4NOm",
"https://drive.google.com/uc?id=1mvRxV8PgSg4ja10BVPpGx7dU-cYc3vB",
"https://drive.google.com/uc?id=1mzkKdGjYXd3xFTQmLK7_Q87bf9Lu4235",
"https://drive.google.com/uc?id=1msyXgtT8SlcGHwjAm3cQlKiAssEO-AgI",
"https://drive.google.com/uc?id=1my6LKsQYTpYlpV48NI8_CJAxdhIkB612",
"https://drive.google.com/uc?id=1mwVWobITdE3n3bvAIsEA6Av4m7FI2RXI",
        ];
     var callback = () => api.sendMessage({body:`•—»✨[ 𝐏𝐫𝐞𝐟𝐢𝐱 𝐄𝐯𝐞𝐧𝐭 ]✨«—•\n•┄┅════❁🌺❁════┅┄•\n\n❂\n            🫶💜🪽
\n___𝗔𝘀𝘀𝗮𝗹𝗮𝗺𝘂 𝗔𝗹𝗮𝗶𝗸𝘂𝗺_♡༢\n
 ___𝗝𝘂𝗺𝗺𝗮𝗵 𝗠𝘂𝗯𝗮𝗿𝗮𝗸♡🩷🕌\n\n「 𝐍𝐀𝐙𝐑𝐔𝐋  」\n\n•┄┅════❁🌺❁════┅┄•\n•—»✨[ 𝐌𝐫 𝐍𝐀𝐙𝐑𝐔𝐋 💁😘🪽 ]✨«—•\n[🐰]  𝗣𝗿𝗲𝗳𝗶𝘅 : [ ${PREFIX} ]\n[🫰] 𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗  : 🕌\n[⌛]  𝐃𝐚𝐭𝐞  : ${Date.now() - timeStart} 𝐓𝐢𝐦𝐞\n[🍒]  ${global.config.BOTNAME}`,attachment: fs.createReadStream(__dirname + "/cache/2024.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.mp4"), event.messageID);
  const timeStart = Date.now();
  const dcm = process.uptime(); 
 var anh = Math.floor(dcm / (60 * 60));
  var la = Math.floor((dcm % (60 * 60)) / 60);
  var vt = Math.floor(dcm % 60);
const res = await
axios.get(`https://shaon-all-api-07mo.onrender.com/text`);
var shaon = res.data.data;
let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
      const PREFIX = config.PREFIX;
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/2024.mp4")).on("close",() => callback());
}

  module.exports.languages = {
  "vi": {
    "on": "Dùng sai cách rồi lêu lêu",
    "off": "sv ngu, đã bão dùng sai cách",
    "successText": `🧠`,
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "success!",
  }
    }
  module.exports.run = async ({ event, api, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  if (typeof data["🕌"] == "undefined" || data["🕌"] == true) data["🕌"] = false;
  else data["🕌"] = true;
  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
api.sendMessage(`${(data["🕌"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}      





    }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };