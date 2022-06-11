let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
let vn = './media/menugatabot.mp3'
let menu =`
╭━〘 🐈⚡️🐈⚡️🐈⚡️🐈⚡️🐈 〙━╮
 ‖ ֎┉┉┉⊰ 𝙂𝙖𝙩𝙖𝘽𝙤𝙩 | Miauu ⊱┉┉┉֍
 ‖ 💖 *¡𝗛ola! ${username}* 💖
 ‖    ֎┉┉┉┉┉┉⊰ 🌟 ⊱┉┉┉┉┉┉┉֍
 ‖
 ‖ Ⓜ️ *_MENÚ COMPLETO_* Ⓜ️
 ‖⇶ _${usedPrefix}menucompleto | mcompleto_
 ‖
 ‖ 🔖 *_INFORMACIÓN DEL MENÚ_* 🔖
 ‖⇶ _${usedPrefix}menuinfobot | menuinfo_
 ‖
 ‖ 🎮 *_MENÚ DE JUEGOS_* 🎮
 ‖⇶ _${usedPrefix}menujuego | menujuegos_
 ‖ 
 ‖ 🚀 *_MENÚ DE DESCARGAS_* 🚀
 ‖⇶ _${usedPrefix}menudescarga | menudescargas_
 ‖
 ‖ 🔐 *_GESTIÓN DE GRUPO_* 🔐
 ‖⇶ _${usedPrefix}menugrupo | menugrupos_
 ‖
 ‖ 🎨 *_MENÚ DE CREACIÓN_* 🎨
 ‖⇶ _${usedPrefix}menucreador | menucreacion_
 ‖ 
 ‖ 🪅 *_ANIME/RANDOMS_* 🪅
 ‖⇶ _${usedPrefix}menurandom | menuextras_
 ‖
 ‖ 🔊 *_MENÚ DE AUDIOS_* 🔊
 ‖⇶ _${usedPrefix}menuaudio | menuaudios_
 ‖ 
 ‖ 📦 *_MENÚ CAJA ALMACENAMIENTO_* 📦
 ‖⇶ _${usedPrefix}menucaja | menualmacen_
 ‖
 ‖ 👤 *_MENÚ CHAT ANÓNIMO_* 👤
 ‖⇶ _${usedPrefix}menuchat | menuanonimo_
 ‖
 ‖ 💮 *_MENÚ LOGOS PERSONALIZADO_* 💮
 ‖⇶ _${usedPrefix}menucrearlogos | mlogos_
 ‖ 
╰━〘 🐈🌟🐈🌟🐈🌟🐈🌟🐈 〙━╯
Miaaauuu`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '©GataBot - Miaaauu', 'Ⓜ️ 𝙈𝙀𝙉𝙐 𝘾𝙊𝙈𝙋𝙇𝙀𝙏𝙊 Ⓜ️', `#mcompleto`, '🎨 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘾𝙍𝙀𝘼𝘾𝙄𝙊𝙉 🎨', `#menucreador`, '🎮 𝙈𝙀𝙉𝙐 𝘿𝙀 𝙅𝙐𝙀𝙂𝙊𝙎 🎮', `#menujuego`, m, false, { contextInfo: { mentionedJid }})   
await await await await await await conn.sendFile(m.chat, vn, 'menugatabot.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos)$/i
handler.fail = null
module.exports = handler
