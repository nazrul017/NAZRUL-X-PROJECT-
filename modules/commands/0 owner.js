module.exports.config = {
  name: "owner0",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "nazrul",
  usePrefix: true,
  description:" owner information ",
  commandCategory: "noprefix",
  usages: "owner",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};
module.exports.handleEvent = async ({ api, event, Threads }) => {
    if (event.body.indexOf("owner")==0 || (event.body.indexOf("Nazrul")==0) || event.body.indexOf("নজরুল")==0 ||
event.body.indexOf("এডমিন")==0 ||
event.body.indexOf("@Nazrul\______")==0 ||
event.body.indexOf("owner ke re")==0 ||
event.body.indexOf("ai group er admin ke")==0 ||
event.body.indexOf("boss")==0 ||
event.body.indexOf("Boss")==0|| event.body.indexOf("Owner")==0 || event.body.indexOf("NAZRUL")==0 || event.body.indexOf("100049220893428")==0 ||  event.body.indexOf("Owner koi re")==0 ||
event.body.indexOf("Nozrul")==0|| event.body.indexOf("Admin")==0 ||
event.body.indexOf("admin")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/aqAxSVe.jpg",

      
"https://i.imgur.com/EVn8OF3.jpg",

      
"https://i.imgur.com/0rb0VBu.jpg",
      
      
"https://i.imgur.com/WiA7BEy.jpg"];
     var callback = () => api.sendMessage({body:`\n•┄┅════❁🌺❁════┅┄•\n\n আসসালামু আলাইকুম-!!🖤💫\n•—»✨𝐎𝐰𝐧𝐞𝐫 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧✨🌺\n 𝗡𝗮𝗺𝗲 𝗠𝗢𝗛𝗔𝗠𝗠𝗔𝗗 𝗡𝗔𝗭𝗥𝗨𝗟 \n 𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻 : 𝗜𝘀𝗹𝗮𝗺 \n 𝗼𝘄𝗻𝗲𝗿 𝗮𝗴𝗲 : 18+ \n 𝗼𝘄𝗻𝗲𝗿 𝗹𝗼𝗰𝗮𝘁𝗶𝗼𝗻 : TANGAIL \n\n•┄┅════❁🌺❁════┅┄•\n`,attachment: fs.createReadStream(__dirname + "/cache/Snapchat-1850578295.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/Snapchat-1850578295.jpg"), event.messageID);
  const timeStart = Date.now();
  const dcm = process.uptime(); 
 var anh = Math.floor(dcm / (60 * 60));
	var la = Math.floor((dcm % (60 * 60)) / 60);
	var vt = Math.floor(dcm % 60);
const res = await
axios.get(`https://shaon-all-api-07mo.onrender.com/text`);
var thinh = res.data.url;
let ext = res.data.data.substring(res.data.url.lastIndexOf(".") + 1);
      const PREFIX = config.PREFIX;
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/Snapchat-1850578295.jpg")).on("close",() => callback());
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
	if (typeof data["owner"] == "undefined" || data["owner"] == true) data["owner"] = false;
	else data["owner"] = true;
	await Threads.setData(threadID, {
		data
	});
	global.data.threadData.set(threadID, data);
api.sendMessage(`${(data["owner"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}      




  
    }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };