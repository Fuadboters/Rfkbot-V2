//created by Scooppt
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
    let res = await fetch('https://random.dog/woof.json')
    let json = await res.json()
    if (json.status) throw json
    let caption = `
©FuadBot
`.trim()
    conn.sendFile(m.chat, json.url, 'dog.jpg', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Error!*_'
    }
}

handler.help = ['dog']
handler.tags = ['image']
handler.command = /^dog$/i

handler.fail = null

module.exports = handler
