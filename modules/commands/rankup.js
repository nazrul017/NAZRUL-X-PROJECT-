module.exports.config = {
  'name': "rankup",
  'version': "1.0.1",
  'hasPermssion': 0x1,
  'credits': "「 𝐍𝐀𝐙𝐑𝐔𝐋  」",
   usePrefix: true,
  'description': "Thông báo rankup cho từng nhóm, người dùng",
  'commandCategory': "Edit-IMG",
  'cooldowns': 0x2,
  'dependencies': {
    'fs-extra': ''
  }
};
module.exports.handleEvent = async function ({
  api: _0x176baa,
  event: _0x72958c,
  Currencies: _0x4fe55b,
  Users: _0x556dad,
  getText: _0x26356a
}) {
  var {
    threadID: _0x401429,
    senderID: _0x5e1f44
  } = _0x72958c;
  const {
    createReadStream: _0x126d50,
    existsSync: _0x3bc71a,
    mkdirSync: _0x53c11a
  } = global.nodemodule["fs-extra"];
  _0x401429 = String(_0x401429);
  _0x5e1f44 = String(_0x5e1f44);
  const _0x2498fa = global.data.threadData.get(_0x401429) || {};
  let _0x71e73b = (await _0x4fe55b.getData(_0x5e1f44)).exp;
  _0x71e73b = _0x71e73b += 1;
  if (isNaN(_0x71e73b)) {
    return;
  }
  if (typeof _0x2498fa.rankup != "undefined" && _0x2498fa.rankup == false) {
    await _0x4fe55b.setData(_0x5e1f44, {
      'exp': _0x71e73b
    });
    return;
  }
  ;
  const _0x5f19ec = Math.floor(Math.sqrt(1 + 4 * _0x71e73b / 3 + 1) / 2);
  const _0xe998c1 = Math.floor(Math.sqrt(1 + 4 * (_0x71e73b + 1) / 3 + 1) / 2);
  if (_0xe998c1 > _0x5f19ec && _0xe998c1 != 1) {
    const _0x23f4fb = global.data.userName.get(_0x5e1f44) || (await _0x556dad.getNameUser(_0x5e1f44));
    var _0x246c28 = typeof _0x2498fa.customRankup == "undefined" ? msg = _0x26356a("levelup") : msg = _0x2498fa.customRankup;
    var _0xff963d;
    _0x246c28 = _0x246c28.replace(/\{name}/g, _0x23f4fb).replace(/\{level}/g, _0xe998c1);
    if (_0x3bc71a(__dirname + "/Shaon/rankup/")) {
      _0x53c11a(__dirname + "/Shaon/rankup/", {
        'recursive': true
      });
    }
    if (_0x3bc71a(__dirname + "/Shaon/rankup/Nazrul.gif")) {
      _0xff963d = {
        'body': _0x246c28,
        'attachment': _0x126d50(__dirname + "/Shaon/rankup/Nazrul.gif"),
        'mentions': [{
          'tag': _0x23f4fb,
          'id': _0x5e1f44
        }]
      };
    } else {
      _0xff963d = {
        'body': _0x246c28,
        'mentions': [{
          'tag': _0x23f4fb,
          'id': _0x5e1f44
        }]
      };
    }
    const _0x384c5e = this.config.name;
    _0x176baa.sendMessage(_0xff963d, _0x401429, async function (_0x43eef9, _0x515041) {
      if (global.configModule[_0x384c5e].autoUnsend) {
        await new Promise(_0xd10b10 => setTimeout(_0xd10b10, global.configModule[_0x384c5e].unsendMessageAfter * 1000));
        return _0x176baa.unsendMessage(_0x515041.messageID);
      } else {
        return;
      }
    });
  }
  await _0x4fe55b.setData(_0x5e1f44, {
    'exp': _0x71e73b
  });
  return;
};
module.exports.languages = {
  'vi': {
    'off': "𝗧𝗮̆́𝘁",
    'on': "𝗕𝗮̣̂𝘁",
    'successText': "𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐭𝐡𝐨̂𝐧𝐠 𝐛𝐚́𝐨 𝐫𝐚𝐧𝐤𝐮𝐩 ✨",
    'levelup': "🌸 𝗞𝗶̃ 𝗻𝗮̆𝗻𝗴 𝘅𝗮̣𝗼 𝗹𝗼̂̀𝗻𝗻 𝗼̛̉ 𝗺𝗼̂𝗻 𝗽𝗵𝗮́𝗽 𝗵𝗮̂́𝗽 𝗱𝗶𝗲̂𝗺 𝗰𝘂̉𝗮 {name} 𝘃𝘂̛̀𝗮 𝗹𝗲̂𝗻 𝘁𝗼̛́𝗶 𝗹𝗲𝘃𝗲𝗹 {level} 🌸"
  },
  'en': {
    'on': 'on',
    'off': "off",
    'successText': "success notification rankup!",
    'levelup': "𝗖𝗼𝗻𝗴𝗿𝗮𝘁𝘂𝗹𝗮𝘁𝗶𝗼𝗻𝘀 {name},🥰\n\n𝘆𝗼𝘂 𝗵𝗮𝘃𝗲 𝗿𝗲𝗮𝗰𝗵𝗲𝗱 𝘁𝗵𝗲 𝗸𝗲𝘆𝗯𝗼𝗮𝗿𝗱 𝗹𝗲𝘃𝗲𝗹 {level}"
  }
};
module.exports.run = async function ({
  api: _0x76fbe4,
  event: _0x52213c,
  Threads: _0x24c8e8,
  getText: _0x30d2ab
}) {
  const {
    threadID: _0x3cc497,
    messageID: _0x110ba4
  } = _0x52213c;
  let _0x1f239e = (await _0x24c8e8.getData(_0x3cc497)).data;
  if (typeof _0x1f239e.rankup == "undefined" || _0x1f239e.rankup == false) {
    _0x1f239e.rankup = true;
  } else {
    _0x1f239e.rankup = false;
  }
  await _0x24c8e8.setData(_0x3cc497, {
    'data': _0x1f239e
  });
  global.data.threadData.set(_0x3cc497, _0x1f239e);
  return _0x76fbe4.sendMessage((_0x1f239e.rankup == true ? _0x30d2ab('on') : _0x30d2ab("off")) + " " + _0x30d2ab("successText"), _0x3cc497, _0x110ba4);
};