let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
//let vn = './media/mariana.mp3'
let menu =`
โญโใ ๐คกโก๏ธ๐คกโก๏ธ๐คกโก๏ธ๐คก ใโโฎ
 โ ึโโโโฐ ๐คก๐พ๐ง๐๐ฏ๐ฎBot๐คก โฑโโโึ
 โ ๐ *ยก๐ola! ${username}* ๐
 โ    ึโโโโโโโฐ ๐ โฑโโโโโโโึ
 โ
 โโ ๐ _${usedPrefix}reglas_
 โโ ๐ _${usedPrefix}grupos_
 โโ ๐ _${usedPrefix}estado_
 โโ ๐ _${usedPrefix}menusimple_
 โโ ๐ _${usedPrefix}menuaudios_
 โโ ๐ _${usedPrefix}stop_
 โโ ๐ _${usedPrefix}getcode_
 โโ ๐ _ยฟQuรฉ es un Bot?_
 โโ ๐ _Codigos para audios_
 //โโ ๐ _Tรฉrminos y condiciones_
 โ โฅ โงผ *_INFORMACIรN DEL MENร_* โงฝ 
โฐโใ ๐คกโก๏ธ๐คกโก๏ธ๐คกโก๏ธ๐คก ใโโฏ
๐พ๐ง๐๐ฏ๐ฎBot`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, 'ยฉCrazyBot', '๐ฎ ๐๐๐๐ ๐ฟ๐ ๐๐๐๐๐๐ ๐ฎ', `#menujuego`, '๐ ๐๐๐๐ ๐ฟ๐ ๐ฟ๐๐๐พ๐ผ๐๐๐ผ๐ ๐', `#menudescarga`, '๐ ๐๐๐๐๐๐๐ ๐ฟ๐ ๐๐๐๐๐ ๐', `#menugrupo`, m, false, { contextInfo: { mentionedJid }})
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(menuinfobot|menuinfo|infomenu|menรบinfobot|menรบinfo)$/i
handler.fail = null
module.exports = handler
