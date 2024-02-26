module.exports.config = {
  'name': 'en',
  'version': "1.0.1",
  'hasPermssion': 0x0,
  'credits': "Mirai Team",
  usePrefix: false,
  'description': "Text translation",
  'commandCategory': "media",
  'usages': "[en/ko/ja/vi] [Text]",
  'cooldowns': 0x5,
  'dependencies': {
    'request': ''
  }
};
module.exports.run = async ({
  api: _0x11dbb0,
  event: _0xce1654,
  args: _0x17eb4e
}) => {
  const _0x9502a1 = global.nodemodule.request;
  var _0x36e5e5 = _0x17eb4e.join(" ");
  if (_0x36e5e5.length == 0 && _0xce1654.type != "message_reply") {
    return global.utils.throwError(this.config.name, _0xce1654.threadID, _0xce1654.messageID);
  }
  var _0x35ee56 = _0x36e5e5.slice(0, _0x36e5e5.indexOf(" ->"));
  var _0x52f459 = _0x36e5e5.substring(_0x36e5e5.indexOf(" -> ") + 4);
  if (_0xce1654.type == "message_reply") {
    _0x35ee56 = _0xce1654.messageReply.body;
    if (_0x36e5e5.indexOf("-> ") !== -1) {
      _0x52f459 = _0x36e5e5.substring(_0x36e5e5.indexOf("-> ") + 3);
    } else {
      _0x52f459 = global.config.language;
    }
  } else if (_0x36e5e5.indexOf(" -> ") == -1) {
    _0x35ee56 = _0x36e5e5.slice(0, _0x36e5e5.length);
    _0x52f459 = global.config.language;
  }
  return _0x9502a1(encodeURI("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=" + _0x35ee56), (_0x396b9e, _0x1fc8a8, _0x474404) => {
    if (_0x396b9e) {
      return _0x11dbb0.sendMessage("An error has occurred!", _0xce1654.threadID, _0xce1654.messageID);
    }
    var _0x56b69b = JSON.parse(_0x474404);
    var _0x12f26d = '';
    _0x56b69b[0].forEach(_0x56a93c => _0x56a93c[0] ? _0x12f26d += _0x56a93c[0] : '');
    _0x11dbb0.sendMessage("🍂ইংলিশ-কনভাট🌸           " + _0x12f26d + "\n\n\n🌿「 𝐍𝐀𝐙𝐑𝐔𝐋  」🌸", _0xce1654.threadID, _0xce1654.messageID);
  });
};