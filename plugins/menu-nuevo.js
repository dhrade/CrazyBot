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
โญโใ ๐คกโก๏ธ๐คกโก๏ธ๐คกโก๏ธ๐คก ใโโฎ
 โ ึโโโโฐ ๐คก๐พ๐ง๐๐ฏ๐ฎBot๐คก โฑโโโึ
 โ ๐ *ยก๐ola! ${username}* ๐
 โ    ึโโโโโโโฐ ๐ โฑโโโโโโโึ
 โ
 โ โ๏ธ *_MENร COMPLETO_* โ๏ธ
 โโถ _${usedPrefix}menucompleto | mcompleto_
 โ
 โ ๐ *_INFORMACIรN DEL MENร_* ๐
 โโถ _${usedPrefix}menuinfobot | menuinfo_
 โ
 โ ๐ฎ *_MENร DE JUEGOS_* ๐ฎ
 โโถ _${usedPrefix}menujuego | menujuegos_
 โ 
 โ ๐ *_MENร DE DESCARGAS_* ๐
 โโถ _${usedPrefix}menudescarga | menudescargas_
 โ
 โ ๐ *_GESTIรN DE GRUPO_* ๐
 โโถ _${usedPrefix}menugrupo | menugrupos_
 โ
 โ ๐จ *_MENร DE CREACIรN_* ๐จ
 โโถ _${usedPrefix}menucreador | menucreacion_
 โ 
 โ ๐ช *_ANIME/RANDOMS_* ๐ช
 โโถ _${usedPrefix}menurandom | menuextras_
 โ
 โ ๐ *_MENร DE AUDIOS_* ๐
 โโถ _${usedPrefix}menuaudio | menuaudios_
 โ 
 โ ๐ฆ *_MENร CAJA ALMACENAMIENTO_* ๐ฆ
 โโถ _${usedPrefix}menucaja | menualmacen_
 โ
 โ ๐ค *_MENร CHAT ANรNIMO_* ๐ค
 โโถ _${usedPrefix}menuchat | menuanonimo_
 โ
 โ ๐ฎ *_MENร LOGOS PERSONALIZADO_* ๐ฎ
 โโถ _${usedPrefix}menucrearlogos | mlogos_
 โ 
โฐโใ ๐คกโก๏ธ๐คกโก๏ธ๐คกโก๏ธ๐คก ใโโฏ
HAHAHAHA`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, 'ยฉCrazyBot - HAHAHAHA', 'โ๏ธ ๐๐๐๐ ๐พ๐๐๐๐๐๐๐ โ๏ธ', `#mcompleto`, '๐จ ๐๐๐๐ ๐ฟ๐ ๐พ๐๐๐ผ๐พ๐๐๐ ๐จ', `#menucreador`, '๐ฎ ๐๐๐๐ ๐ฟ๐ ๐๐๐๐๐๐ ๐ฎ', `#menujuego`, m, false, { contextInfo: { mentionedJid }})   
await await await await await await conn.sendFile(m.chat, vn, 'menugatabot.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(menu|menรบ|memu|memรบ|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos)$/i
handler.fail = null
module.exports = handler
