let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
let res = await fetch('https://api.xteam.xyz/randomimage/ppcouple?APIKEY=29d4b59a4aa687ca')
if (res.status != 200) throw await res.text()
let json = await res.json()
if (!json.status) throw json
conn.sendButtonImg(m.chat, json.result.female,  'Chica ðââï¸', 'ð¤¡ð¾ð§ðð¯ð®Botð¤¡', 'Siguiente ð', '.compartirfoto', m)
conn.sendButtonImg(m.chat, json.result.male, 'Chico ðââï¸', 'ð¤¡ð¾ð§ðð¯ð®Botð¤¡', 'Siguiente ð', '.compartirfoto', m)}
handler.command = /^compartirfoto$/i
module.exports = handler
