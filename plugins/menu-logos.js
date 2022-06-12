//let vn = './media/mariana.mp3'
//NO MODIFIQUES EL NÚMERO DE LA CREADORA NI EL NOMBRE.. SOLO AGREGA LA INFORMACIÓN QUE TU QUIERAS O EDITALO A TU MANERA PERO DEJANDO LOS CREDITOS
//PUEDES AGREGAR OTRA FILAS DE PAYPAL, GRUPOS, PERO DEJA ALGUNOS CREDITOS, YA QUE ES LA UNICA MANERA DE INGRESOS DEL BOT

//SI VAS A MODIFICAR TODO Y HACER PASAR COMO SI FUERA TU BOT (CREADO POR TI) SOLO TE PIDO QUE SI ESTA EN TUS POSIBILIDADES DONES UN POCO
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
╭━〘 🤡⚡️🤡⚡️🤡⚡️🤡 〙━╮
 ‖ ֎┉┉┉⊰ 🤡𝘾𝙧𝙖𝙯𝙮Bot🤡 ⊱┉┉┉֍
 ‖ 💖 *¡𝗛ola! ${username}* 💖
 ‖    ֎┉┉┉┉┉┉⊰ 🌟 ⊱┉┉┉┉┉┉┉֍
 ‖
 ‖⇛ 🔮 _${usedPrefix}logos_ *(lista)*
 ‖⇛ 💮 _${usedPrefix}cementerio | logocementerio_
 ‖⇛ 💮 _${usedPrefix}cesped | logocesped_
 ‖⇛ 💮 _${usedPrefix}coffe | logocoffe_
 ‖⇛ 💮 _${usedPrefix}fire | logofire_
 ‖⇛ 💮 _${usedPrefix}flaming | logoflaming_
 ‖⇛ 💮 _${usedPrefix}lovemessages | lovemensajes_
 ‖⇛ 💮 _${usedPrefix}playa | logoplaya_
 ‖⇛ 💮 _${usedPrefix}logorandom_
 ‖⇛ 💮 _${usedPrefix}romanticdouble | romantico2_
 ‖⇛ 💮 _${usedPrefix}romanticmessages | romanticms_
 ‖⇛ 💮 _${usedPrefix}logosky_
 ‖⇛ 💮 _${usedPrefix}taza | logotaza_
 ‖⇛ 💮 _${usedPrefix}taza2 | logotaza2_
 ‖⇛ 💮 _${usedPrefix}technology | tecnologia_
 ‖⇛ 💮 _${usedPrefix}coff_
 ‖⇛ 💮 _${usedPrefix}lolice_
 ‖⇛ 💮 _${usedPrefix}simpcard_
 ‖⇛ 💮 _${usedPrefix}hornycard_ 
 ‖⇛ 💮 _${usedPrefix}lblackpink_
 ‖⇛ 💮 _${usedPrefix}logocorazon_
 ‖⇛ 💮 _${usedPrefix}tahta *texto*_
 ‖⇛ 💮 _${usedPrefix}nulis | notas *texto*_
 ‖⇛ 💮 _${usedPrefix}nulis2 | notas2 *texto*_
 ‖⇛ 💮 _${usedPrefix}lolice *@tag*_
 ‖⇛ 💮 _${usedPrefix}simpcard *@tag*_
 ‖ ➥ ⧼ *_MENÚ LOGOS PERSONALIZADO_* ⧽ 
╰━〘 🐈🌟🐈🌟🐈🌟🐈🌟🐈 〙━╯
𝘾𝙧𝙖𝙯𝙮Bot`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '©CrazyBot', '📦 𝙈𝙀𝙉𝙐 𝘾𝘼𝙅𝘼 𝘼𝙇𝙈𝘼𝘾𝙀𝙉 📦', `#menucaja`, '👤 𝙈𝙀𝙉𝙐 𝘾𝙃𝘼𝙏 𝘼𝙉𝙊𝙉𝙄𝙈𝙊 👤', `#menuchat`, '💎 𝙈𝙀𝙉𝙐 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊/𝘼 💎', `#menupropietaria`, m, false, { contextInfo: { mentionedJid }})}
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(menulogos|menulogos|menucrearlogos|mlogos|Menucrearlogos|Mlogos|menúcrearlogos|menucrearlogo|mlogo)$/i
handler.fail = null
module.exports = handler
