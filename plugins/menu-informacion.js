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
╭━〘 🐈⚡️🐈⚡️🐈⚡️🐈⚡️🐈 〙━╮
 ‖ ֎┉┉┉⊰ 𝙂𝙖𝙩𝙖𝘽𝙤𝙩 | MIAUU ⊱┉┉┉֍
 ‖ 💖 *¡𝗛ola! ${username}* 💖
 ‖    ֎┉┉┉┉┉┉⊰ 🌟 ⊱┉┉┉┉┉┉┉֍
 ‖
 ‖⇛ 🔖 _${usedPrefix}reglas_
 ‖⇛ 🔖 _${usedPrefix}grupos_
 ‖⇛ 🔖 _${usedPrefix}estado_
 ‖⇛ 🔖 _${usedPrefix}menusimple_
 ‖⇛ 🔖 _${usedPrefix}menuaudios_
 ‖⇛ 🔖 _${usedPrefix}stop_
 ‖⇛ 🔖 _${usedPrefix}getcode_
 ‖⇛ 🔖 _¿Qué es un Bot?_
 ‖⇛ 🔖 _Codigos para audios_
 //‖⇛ 🔖 _Términos y condiciones_
 ‖ ➥ ⧼ *_INFORMACIÓN DEL MENÚ_* ⧽ 
╰━〘 🐈🌟🐈🌟🐈🌟🐈🌟🐈 〙━╯
𝙂𝙖𝙩𝙖Bot`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '©GataBot', '🎮 𝙈𝙀𝙉𝙐 𝘿𝙀 𝙅𝙐𝙀𝙂𝙊𝙎 🎮', `#menujuego`, '🚀 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 🚀', `#menudescarga`, '🔐 𝙂𝙀𝙎𝙏𝙄𝙊𝙉 𝘿𝙀 𝙂𝙍𝙐𝙋𝙊 🔐', `#menugrupo`, m, false, { contextInfo: { mentionedJid }})
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(menuinfobot|menuinfo|infomenu|menúinfobot|menúinfo)$/i
handler.fail = null
module.exports = handler
