//let vn = './media/mariana.mp3'
//NO MODIFIQUES EL NÚMERO DE LA CREADORA NI EL NOMBRE.. SOLO AGREGA LA INFORMACIÓN QUE TU QUIERAS O EDITALO A TU MANERA PERO DEJANDO LOS CREDITOS
//PUEDES AGREGAR OTRA FILAS DE PAYPAL, GRUPOS, PERO DEJA ALGUNOS CREDITOS, YA QUE ES LA UNICA MANERA DE INGRESOS DEL BOT
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
 ‖⇛ 🔐 _${usedPrefix}admins *texto*_ 
 ‖⇛ 🔐 _${usedPrefix}añadir *numero*_ (desactivado)
 ‖⇛ 🔐 _${usedPrefix}sacar @tag_ (desactivado)
 ‖⇛ 🔐 _${usedPrefix}save *@tag + nombre de contacto*_
 ‖⇛ 🔐 _${usedPrefix}daradmin | darpoder *@tag*_
 ‖⇛ 🔐 _${usedPrefix}quitaradmin | quitarpoder *@tag*_
 ‖⇛ 🔐 _${usedPrefix}grupo *abierto / cerrado*_
 ‖⇛ 🔐 _${usedPrefix}enable welcome_
 ‖⇛ 🔐 _${usedPrefix}disable welcome_
 ‖⇛ 🔐 _${usedPrefix}enable antilink_ *(WhatsApp)*
 ‖⇛ 🔐 _${usedPrefix}disable antilink_ 
 ‖⇛ 🔐 _${usedPrefix}enable antilink2_ *(https:)*
 ‖⇛ 🔐 _${usedPrefix}disable antilink2_
 ‖⇛ 🔐 _${usedPrefix}enable delete_
 ‖⇛ 🔐 _${usedPrefix}disable  delete_ 
 ‖⇛ 🔐 _${usedPrefix}link_
 ‖⇛ 🔐 _${usedPrefix}notificar | hidetag *texto*_
 ‖⇛ 🔐 _${usedPrefix}setname *Nuevo nombre del grupo*_
 ‖⇛ 🔐 _${usedPrefix}setdesc *Nueva descripción grupo*_
 ‖⇛ 🔐 _${usedPrefix}infogrupo_
 ‖⇛ 🔐 _${usedPrefix}invocar *texto*_
 ‖⇛ 🔐 _${usedPrefix}del *responder a un mensaje del bot*_
 ‖⇛ 🔐 _${usedPrefix}fantasmas_
 ‖⇛ 🔐 _${usedPrefix}banchat_
 ‖⇛ 🔐 _${usedPrefix}unbanchat_
 ‖ ➥ ⧼ *_MENÚ GESTIÓN DE GRUPOS_* ⧽ 
╰━〘 🐈🌟🐈🌟🐈🌟🐈🌟🐈 〙━╯
𝙂𝙖𝙩𝙖Bot`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '©GataBot', '🎨 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘾𝙍𝙀𝘼𝘾𝙄𝙊𝙉 🎨', `#menucreador`, '💥 𝘼𝙉𝙄𝙈𝙀/𝙍𝘼𝙉𝘿𝙊𝙈 💥', `#menurandom`, '💮 𝙈𝙀𝙉𝙐 𝘿𝙀 𝙇𝙊𝙂𝙊𝙎 💮', `#menucrearlogos`, m, false, { contextInfo: { mentionedJid }})}
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(menugrupo|menugrupos|menúgrupo|menúgrupos|Menúgrupo|Menúgrupos)$/i
handler.fail = null
module.exports = handler
