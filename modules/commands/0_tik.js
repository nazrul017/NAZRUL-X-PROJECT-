const fs = require('fs-extra');
const axios = require('axios');

module.exports.config = {
  name: "tiktok",
  version: "1.0.",
  hasPermssion: 0,
  credits: "nazrul",
  usePrefix: true,
  description: "TikTok Video Downloader",
  commandCategory: "video downloader",
  usages: "[tiktok video link]",
  cooldowns: 2
};

module.exports. run = async function ({ api, event, args }) {
  let link = args.join(" ");

  if (!link) {
    api.sendMessage("Please put a valid TikTok video link", event.threadID, event.messageID);
    return;
  }

  api.sendMessage("একটু w8 কর ডাউনলোড করতাছি", event.threadID, event.messageID);

  try {
   let path = __dirname + `/cache/`;
    const aa = await axios.get(`https://d1pt0-all.onrender.com/xnxx?url=${encodeURI(nazrul)}`);
    await fs.ensureDir(path);
   path += 'tik_dip.mp4';
    const data = res.data.data;
    const vid = (await axios.get(data.play, { responseType: "arraybuffer" })).data;
    fs.writeFileSync(path, Buffer.from(vid, 'stream'));
    api.sendMessage({
      body: `✅Title:${data.title}.\n✅Play Count: ${data.play_count}.\n✅Comment Count: ${data.comment_count}.\n✅Share Count: ${data.share_count}.\n✅Download Count: ${data.download_count}`, attachment: fs.createReadStream(path)
    }, event.threadID, () => fs.unlinkSync(path), event.messageID);

  } catch (e) {
    api.sendMessage(`${e}`, event.threadID, event.messageID);
  };
};