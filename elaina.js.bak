// Sc ori by DikaArdnt https://github.com/DikaArdnt/Hisoka-Morou
// thanks to tahaluindo for gif & rpg menu

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const qs = require("qs")
const hx = require('hxz-api')
const xa = require('xfarr-api')
const request = require('request')
const moment = require('moment-timezone')
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction")
const speedofbot = require("performance-now")
// ./database
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))

// database reader
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    chats: {},
    ...(global.db || {})
}
//AutosetBio

	
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []
let klarifikasi = `fitur ini tidak bermaksud menyinggung, jika anda merasa terganggu, blok/kick saja bot ini ~skylarkaf`
	
module.exports = elaina = async (elaina, m, chatUpdate, store) => {

    try {
        const from = m.key.remoteJid
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (m.xtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.xtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.xtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.xtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        var prefix = /^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*@,;]/.test(budy) ? budy.match(/^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*,;]/gi) : '#'
        const isCmd = body.startsWith(prefix)
        const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await elaina.decodeJid(elaina.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const groupMetadata = m.isGroup ? await elaina.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
     	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
//════════[runtime]═════════//
const runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}	
//[target]\\
	const reply = (teks) => {
            elaina.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${global.botnma}`,"body": ` Join Bot's Official`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./Media/elaina.jpg`),"sourceUrl": "https://chat.whatsapp.com/KGScA25PeRC9Z8qSnqLXdy"}}}, { quoted: m})
        }
        
        const replay = (teks) => {
            elaina.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${global.botnma}`,"body": `Website`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./Media/reply.jpg`),"sourceUrl": "https://skylarkaf.github.io/"}}}, { quoted: m})
        }
try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.users[m.sender]
            if (typeof user !== 'object') global.db.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            let chats = global.db.chats[m.chat]
                if (typeof chats !== 'object') global.db.chats[m.chat] = {}
                if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('wame' in chats)) chats.wame = false
             } else global.db.chats[m.chat] = {
                mute: false,
                wame: false,
        }
        } catch (err) {
            console.error(err)
        }

//[public/self]\\
        if (!elaina.public) {
            if (!m.key.fromMe) return
        }
        
if (m.message) {
            elaina.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgYellow('[ MSG 🐧 ]')), chalk.black(chalk.bgWhite(budy || m.mtype)) + '\n' + chalk.blue('>'), chalk.green(m.isGroup ? pushname : 'Private', m.chat))
        }



//[level(incomplete, still in devment)]\\
const levelRole = getLevelingLevel(m.sender)
	  var role = 'citizen'
	  if (levelRole <= 3) {
	role = 'noble'
	  } else if (levelRole <= 5) {
	role = 'merchant'
	  } else if (levelRole <= 7) {
	role = 'assasin'
	  } else if (levelRole <= 10) {
	role = 'knight'
	  } else if (levelRole <= 12) {
	role = 'magic knight'
	  } else if (levelRole <= 15) {
	role = 'secretory'
	  } else if (levelRole <= 18) {
	role = 'commander'
	  } else if (levelRole <= 25) {
	role = 'Demon Lord'
	  } else if (levelRole <= 45) {
	role = 'Supreme  being'
	  }
	
//[Antilink]\\
	/*if (isAntiLink) 
if (budy.includes('https://chat.whatsapp.com/')) {
               if (!m.key.fromMe) {
               reply('*LINK DETECTED*\nWow, how naughty, this group has been installed with Antilink, OK?..,\nGood Bye To You..👋🏻')
               let sianj = m.sender
               await elaina.groupParticipantsUpdate(m.chat, [sianj], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
               }
	  }
	if (db.chats[m.chat].wame) {
        if (budy.match(`wa.me/`)) {
        m.reply(`「 WA.ME DETECTED 」\n\nYou have been detected sending a wa.me link, sorry you will be kicked !`)
          if (!isBotAdmins) return m.reply(`Bot must be admin first`)
        let gclink = (`https://wa.me/`)
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Eh sorry it didn't happen, because you sent this wa.me link`)
        if (isAdmins) return m.reply(`Ehh sorry you admin`)
        if (isCreator) return m.reply(`Ehh sorry you are the owner of me`)
        elaina.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }*/
//[mute chat]\\
      if (db.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
//[write database every 1min]\\
	setInterval(() => {
            fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
        }, 60 * 1000)

//[reset limit every 12hrs]\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
	    
//[respond budy with media]\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: elaina.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, elaina.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        elaina.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer the following questions :\n${room.soal}\n\n\nThere is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Give up!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            elaina.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await elaina.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Guess The Music' }, type: 1 }], `🎮 Guess The Song 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, elaina.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Wrong answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz  🎮\n\nCorrect answer 🎉\n\nWant to play again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await elaina.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, elaina.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await elaina.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, elaina.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await elaina.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Guess Lontong' }, type: 1 }], `🎮 Guess Lontong 🎮\n\nCorrect answer 🎉\n*${deskripsi}*\n\nWant to play again? press the button below`, elaina.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await elaina.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, elaina.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await elaina.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, elaina.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await elaina.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Riddles' }, type: 1 }], `🎮 Riddles 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, elaina.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
        
//[tictactoe]\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game has ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Win!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *give up* to surrender and admit defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await elaina.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await elaina.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

//[suit]\\
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|sure|oke?|reject|dont|later|yes|can|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|dont|later|n|no|can)/i.test(m.text)) {
	    elaina.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} reject the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    elaina.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) elaina.sendText(roof.p, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) elaina.sendText(roof.p2, `Please select \n\nRock🗿\nPaper📄\nScissor✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) elaina.sendText(m.chat, `Both players don't want to play,\nSuit canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    elaina.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} didn't choose suit, game over`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) elaina.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) elaina.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    elaina.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Don't tag him!
He's/She's in Offline/AFK, ${reason ? 'with reason : ' + reason : 'no reason'}
Its been ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.users[m.sender].afkTime > -1) {
            let user = global.db.users[m.sender]
            reply(`
You came back online from AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
	    case 'afk': {
                let user = global.db.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Now Afk${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'You are still in the game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply('Partner found!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Type *give up* to surrender and admit defeat`
            if (room.x !== room.o) await elaina.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await elaina.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('Waiting for partner' + (text ? ` type the command below ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            elaina.sendText(m.chat, `Successfully delete the TicTacToe session`, m)
            } else if (!this.game) {
            reply(`TicTacToe Session🎮 there is not any`)
            } else throw '?'
            } catch (e) {
            reply('error')
            }
            }
            break
            
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Complete your previous suit`)
	    if (m.mentionedJid[0] === m.sender) return reply(`Can't play with myself !`)
            if (!m.mentionedJid[0]) return reply(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `The person you are challenging is playing suit with someone else :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} challenging @${m.mentionedJid[0].split`@`[0]} to play suit

Please @${m.mentionedJid[0].split`@`[0]} to type accept/reject`
            this.suit[id] = {
            chat: await elaina.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) elaina.sendText(m.chat, `_Suit time out_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break	              
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    elaina.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    elaina.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    elaina.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    elaina.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    elaina.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    elaina.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    elaina.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': { //this is in indonesian so if u want to activate u can but will be in indonesian
                if ('family100'+m.chat in _family100) {
                    reply('There are still unfinished sessions!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Answer the following questions :*\n${random.soal}\n\nThere is *${random.jawaban.length}* Answer ${random.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await elaina.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halahkdkdkd': case 'hilihdkksls': case 'huluhkdksls': case 'helehkdkdkd': case 'holohkdkskks': //this is in indonesian so if u want to activate u can but will be in indonesian (thanks to respected creator of this case)
            if (!m.quoted && !text) throw `Send/reply text with caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebakjxkzkossihdhdidii': { //this is in indonesian so if u want to activate u can but will be in indonesian (thanks to respected creator of this case)
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. music\n2. picture\n3. word\n4. sentence\n5. lyrics\n6.rice cake`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await elaina.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    elaina.sendText(m.chat, `The song is a song from?\n\nArtist : ${result.artist}\nTime : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    elaina.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Time Out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, elaina.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    elaina.sendImage(m.chat, result.img, `Please answer the questions above\n\nDescription : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    elaina.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Time has run out\Answer:  ${tebakgambar[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, elaina.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    elaina.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nTime : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    elaina.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Time has run out\nAnswer:  ${tebakkata[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, elaina.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    elaina.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nTime : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    elaina.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, elaina.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    elaina.sendText(m.chat, `These are the lyrics of the song? : *${result.soal}*?\nTime : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    elaina.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, elaina.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    elaina.sendText(m.chat, `*Answer the following questions :*\n${result.soal}*\nTime : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    elaina.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, elaina.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
		
                    }
                }
            }
            break
            
// ==================[case funmenu

            case 'mathquiz': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nExample: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                elaina.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} seconds`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    reply("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫 Pasanganmu Adalah...

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await elaina.sendButtonText(m.chat, buttons, jawab, klarifikasi, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Ciee 💖👀`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: '❤', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await elaina.sendButtonText(m.chat, buttons, jawab, klarifikasi, m, {mentions: menst})
            }
            break
case 'gay':{
 if (!m.isGroup) throw mess.group
    let member = participants.map(u => u.id)
       let fun = m.sender
          let games = member[Math.floor(Math.random() * member.length)]
            let mty = `Shootiing in my Asss~ MMMMMN @${games.split('@')[0]}`
            let ments = [fun, games]
            let buttons = [
                        { buttonId: '#gay', buttonText: { displayText: 'NEXT' }, type: 1 }
                    ]
                     elaina.sendButtonText(m.chat, buttons, mty, klarifikasi, m, {mentions: ments})
}
break
case 'lesbian':{
 if (!m.isGroup) throw mess.group
    let member = participants.map(u => u.id)
       let fun = m.sender
          let games = member[Math.floor(Math.random() * member.length)]
            let mty = `Shessssss COOL A F 🥵👍 @${games.split('@')[0]}`
            let ments = [fun, games]
            let buttons = [
                        { buttonId: '#lesbian', buttonText: { displayText: 'NEXT' }, type: 1 }
                    ]
                     elaina.sendButtonText(m.chat, buttons, mty, klarifikasi, m, {mentions: ments})
}
break
case 'niga':{
 if (!m.isGroup) throw mess.group
    let member = participants.map(u => u.id)
       let fun = m.sender
          let games = member[Math.floor(Math.random() * member.length)]
            let mty = `Tentara Itu Harus HITAM! Biar Sangar! @${games.split('@')[0]}`
            let ments = [fun, games]
            let buttons = [
                        { buttonId: '#niga', buttonText: { displayText: 'NEXT' }, type: 1 }
                    ]
                     elaina.sendButtonText(m.chat, buttons, mty, klarifikasi, m, {mentions: ments})
}
break
case 'china':{
 if (!m.isGroup) throw mess.group
    let member = participants.map(u => u.id)
       let fun = m.sender
          let games = member[Math.floor(Math.random() * member.length)]
            let mty = `你的眼睛是斜的嗎？ @${games.split('@')[0]}`
            let ments = [fun, games]
            let buttons = [
                        { buttonId: '#china', buttonText: { displayText: 'NEXT' }, type: 1 }
                    ]
                     elaina.sendButtonText(m.chat, buttons, mty, klarifikasi, m, {mentions: ments})
}
break
case 'wibu':{
 if (!m.isGroup) throw mess.group
    let member = participants.map(u => u.id)
       let fun = m.sender
          let games = member[Math.floor(Math.random() * member.length)]
            let mty = `Sange ko Sama kartun deck? @${games.split('@')[0]}`
            let ments = [fun, games]
            let buttons = [
                        { buttonId: '#wibu', buttonText: { displayText: 'NEXT' }, type: 1 }
                    ]
                     elaina.sendButtonText(m.chat, buttons, mty, klarifikasi, m, {mentions: ments})
}
break
case 'jomblo':{
 if (!m.isGroup) throw mess.group
    let member = participants.map(u => u.id)
       let fun = m.sender
          let games = member[Math.floor(Math.random() * member.length)]
            let mty = `Cieee Gk punya ayang 🤭 @${games.split('@')[0]}`
            let ments = [fun, games]
            let buttons = [
                        { buttonId: '#jomblo', buttonText: { displayText: 'NEXT' }, type: 1 }
                    ]
                     elaina.sendButtonText(m.chat, buttons, mty, klarifikasi, m, {mentions: ments})
}
break
case 'badut':{
 if (!m.isGroup) throw mess.group
    let member = participants.map(u => u.id)
       let fun = m.sender
          let games = member[Math.floor(Math.random() * member.length)]
            let mty = `Cuih! Jadi badut ko bangga dek 🤡 @${games.split('@')[0]}`
            let ments = [fun, games]
            let buttons = [
                        { buttonId: '#badut', buttonText: { displayText: 'NEXT' }, type: 1 }
                    ]
                     elaina.sendButtonText(m.chat, buttons, mty, klarifikasi, m, {mentions: ments})
}
break
case 'sadboy':{
 if (!m.isGroup) throw mess.group
    let member = participants.map(u => u.id)
       let fun = m.sender
          let games = member[Math.floor(Math.random() * member.length)]
            let mty = `Aku sendboi banget cui ️😭☝️ @${games.split('@')[0]}`
            let ments = [fun, games]
            let buttons = [
                        { buttonId: '#badut', buttonText: { displayText: 'NEXT' }, type: 1 }
                    ]
                     elaina.sendButtonText(m.chat, buttons, mty, klarifikasi, m, {mentions: ments})
}
break
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            case 'join': {
                if (!text) throw 'Enter the group link!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                replay(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await elaina.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await elaina.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await elaina.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await elaina.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await elaina.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await elaina.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await elaina.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await elaina.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await elaina.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await elaina.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setppbot': case 'setbotpp': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await elaina.downloadAndSaveMediaMessage(quoted)
                await elaina.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
           case 'setppgroup': case 'setgrouppp': case 'setgcpp': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await elaina.downloadAndSaveMediaMessage(quoted)
                await elaina.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
case 'grupinfo': case 'groupinfo':
try{
 var pic = await elaina.getProfilePicture(m.chat)
  } catch {
 var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
  }
let ingfo = `*G R O U P  I N F O*\n\n*Name :* ${groupName}\n*ID Group :* ${m.chat}\n*Made :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n*Group Owner:* @${groupMetadata.owner.split('@')[0]}\n*Number Of Admins :* ${groupAdmins.length}\n*Number Of Participants :* ${participants.length}\n*Desc :* \n${groupMetadata.desc}`
ds = await getBuffer(pic)
elaina.sendMessage(m.chat, { image: ds,caption: ingfo, mentions: [groupMetadata.owner] }, { quoted: m})
break
            case 'tagall': case 'tag': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `[ *👥 Tag All* ]
 
 *Message : ${q ? q : 'blank'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                elaina.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isAdmins) throw mess.admin
            if (!isBotAdmins) throw mess.botAdmin
            elaina.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // response when limit runs out
		db.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Enter Query text!'
                let anu = await styletext(text)
                let teks = `Entered Text:  ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`
            if (!text) throw `Enter Reason for Vote, Example: *${prefix + command} Owner is handsome*`
            reply(`Voting starts!\n\n*${prefix}upvote* - for yes\n*${prefix}devote* - for no\n*${prefix}checkvote* - to check the votes\n*${prefix}deletevote* - to delete vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}

 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}

 
└────

*${prefix}deletevote* - to delete votes`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Up-Vote 👍🏻'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'De-Vote 👎🏻'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: elaina.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            elaina.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*Type ${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You have Voted'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - to delete votes`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Up-Vote👍🏻'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'De-Vote👎🏻'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: elaina.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            elaina.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You Have Voted'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - to delete votes`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Up-Vote👍🏻'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'De-Vote👎🏻'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: elaina.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            elaina.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - to delete votes


©${elaina.user.id}
`
elaina.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case 'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - to start voting`
            delete vote[m.chat]
            reply('Successfully Deleted Vote Session In This Group')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await elaina.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Successful Closing The Group`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await elaina.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Successful Opening The Group`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await elaina.sendButtonText(m.chat, buttons, `Group Mode`, elaina.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await elaina.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await elaina.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Close Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open ⭕' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close 🚫' }, type: 1 }
                    ]
                    await elaina.sendButtonText(m.chat, buttons, `Mode Edit Info`, elaina.user.name, m)

            }
            }
            break
/*case 'antilink':
	        if (!m.isGroup) return reply(`This feature only be used in group`)
			if (!isAdmins) return reply(`This feature could be used by admin only`)
			if (!isBotAdmins) return reply(`Bot must be admin first`)
					if (args[0] === 'on') {
						if (isAntiLink) return reply('Already Activated')
						antilink.push(m.chat)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Successfully activated the antilink feature')
						elaina.sendMessage(m.chat,  {text: `ALLERT!!! This group has been installed anti-link\nIf you violate then I will kick`})
					} else if (args[0] === 'off') {
						if (!isAntiLink) return reply('already deactivated')
						var ini = antilink.indexOf(m.chat)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Successfully disabled antilink feature')
					} else if (!q){
 reply(`Pilih Antilink On / Off `)
					}
					break */
					case 'antiwame': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.chats[m.chat].wame) return m.reply(`Already Activated`)
                db.chats[m.chat].wame = true
                m.reply(`Anti Wa.me Activated!`)
                } else if (args[0] === "off") {
                if (!db.chats[m.chat].wame) return m.reply(`Already deactivated`)
                db.chats[m.chat].wame = false
                m.reply(`Anti Wa.me is not activated!`)
                } else {
                 let buttons = [
                        { buttonId: 'antiwame on', buttonText: { displayText: '⭕On⭕' }, type: 1 },
                        { buttonId: 'antiwame off', buttonText: { displayText: '❌Off❌' }, type: 1 }
                    ]
                    await elaina.sendButtonText(m.chat, buttons, `Mode Anti Wa.me`, elaina.user.name, m)
                }
             }
             break
					   case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.chats[m.chat].mute) return reply(`Already activated`)
                db.chats[m.chat].mute = true
                reply(`${elaina.user.name} has been muted in this group !`)
                } else if (args[0] === "off") {
                if (!db.chats[m.chat].mute) return reply(`Already deactivated`)
                db.chats[m.chat].mute = false
                reply(`${elaina.user.name} has been unmuted in this group!`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On ⭕' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off ❌' }, type: 1 }
                    ]
                    await elaina.sendButtonText(m.chat, buttons, `Mute Bot`, elaina.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'grouplink': case 'gclink': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await elaina.groupInviteCode(m.chat)
                elaina.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink of: ${groupMetadata.subject} Group`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Enter the enable/disable value, For Example ${prefix}ephemeral enable'
                if (args[0] === 'enable') {
                    await elaina.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await elaina.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'The message was not sent by a bot!'
                elaina.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Where is the text?\n\nExample : ${prefix + command} hello guys, am back`
                let getGroups = await elaina.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Website',
                                    url: 'https://s.id/Skylarkaf'
                                }                            
                            }]
                      fatihgans = fs.readFileSync('./Media/broadcast.jpg')
                      let txt = `「 elaina Broadcast 」\n\n${text}`
                      elaina.send5ButImg(i, txt, elaina.user.name, fatihgans, btn)
                    }
                reply(`Successful Sending Broadcast To ${anu.length} Group(s)`)
            }
            break            
            case 'chatinfo': {
                if (!m.quoted) reply('Reply to mesaage')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'The message was not sent by a bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Read' : 'Unread'}\n\n`
                }
                elaina.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return reply('Reply Message!!')
		let wokwol = await elaina.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply('The message you replied to does not contain a reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *PERSONAL CHAT LIST*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Name :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 elaina.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await elaina.groupMetadata(i)
                     teks += `⬡ *Name :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 elaina.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'onlinelist': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    elaina.sendText(m.chat, 'Online List:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stiker': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Reply Video/Image With Caption ${prefix + command}`
            replay(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await elaina.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
                let media = await quoted.download()
                let encmedia = await elaina.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`
                }
            }
            break
            case 'ebinary': {
            if (!m.quoted.text && !text) throw `Send/reply text with caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) throw `Send/reply text with caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            reply(db)
        }
        break
            case 'emojimix': {
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await elaina.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                replay(mess.wait)
                let media = await elaina.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    elaina.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                replay(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await elaina.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await elaina.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want Audio With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
            replay(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            elaina.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`
            replay(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            elaina.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${elaina.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
            replay(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            elaina.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                replay(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await elaina.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await elaina.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                replay(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await elaina.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break           
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                elaina.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: elaina.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                elaina.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
        
        case 'tiktok': case'tiktoknowm': case 'ttdownload':{
            if (!text) throw 'No Query Link!'
            reply(mess.wait)
            hx.ttdownloader(q).then( data => {
            elaina.sendMessage(m.chat, {
            video: { url: data.nowm },
            caption: `Result from ${args[0]}`,
            buttons: [{buttonId: `${prefix}ttaudio ${args[0]} ${m.sender}`, buttonText: { displayText: "Get Audio" }, type: 1 }],
            footer: "You can change it to Audio, Click the button below to change"
            }, { quoted: m })
            })
            }
            break
            case 'ttaudio': case 'tiktokaudio': case 'tiktokmp3':
            if (!text) throw 'No Query Link!'
            reply(mess.wait)
            hx.ttdownloader(q).then( data => {
            elaina.sendMessage(m.chat, { audio: { url: data.nowm }, mimetype: 'audio/mp4' }, { quoted: m })
            })
	        break


	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} bts boy with luv`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                    ngen = `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Uploaded : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
`
message = await prepareWAMessageMedia({ image : { url: anu.thumbnail } }, { upload:   elaina.waUploadToServer })
                template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: ngen,
                            hydratedFooterText: `Playing To ${text}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Url',
                                    url: `${anu.url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Audio',
                                    id: `ytmp3 ${anu.url} 320kbps`
                                    }
                                },{quickReplyButton: {
                                    displayText: 'VIdeo',
                                    id: `ytmp4 ${anu.url} 360p`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                  elaina.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtu.be/Cv1Sc4sep9k 320kbps`
                let quality = args[1] ? args[1] : '320kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 999999) return reply('Audio size is too big '+util.format(media))
                elaina.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolution : ${args[1] || '320kbps'}`, m)
                elaina.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtu.be/Cv1Sc4sep9k 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 999999) return reply('Video size is too big '+util.format(media))
                elaina.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resololution : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return reply('Reply Message')
                if (!m.quoted.isBaileys) throw `Can only reply to messages from bots`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Maybe The Message You Replied Does Not Contain Ytsearch Results`
                let quality = args[1] ? args[1] : '320kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 999999) return reply('Audio size is too big '+util.format(media))
                elaina.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolution : ${args[1] || '320kbps'}`, m)
                elaina.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return reply('Reply To A Message That Has Been Already Sent')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Maybe the message you replied does not contain the ytsearch result`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
                elaina.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolution : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': case 'pin':{
                replay(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                elaina.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break
            case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': {
                replay(mess.wait)
                elaina.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/anime/'+command, 'apikey') }, caption: `Download From ${text}` }, { quoted: m})
            }
            break
            case 'sc': case 'script': case 'sourcecode':{
            reply('Script Base Original : https://github.com/DikaArdnt/Elaina-Morou\n\nDont Forget Give Star')
            }
            break                
            break
            
	    case 'ppcp': case 'ppcouple': {
                replay(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                elaina.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                elaina.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffee': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕Random Coffee☕`,
                    footer: elaina.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                elaina.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Enter Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: elaina.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                elaina.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Enter Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: elaina.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                elaina.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: '️Next️'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                elaina.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: '️Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                elaina.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) throw `Example : ${prefix + command} text`
                replay(mess.wait)
                elaina.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (!text) throw 'where is the text?'
                replay(mess.wait)
                elaina.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                replay(mess.wait)
                elaina.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break             
	        
	         case 'ig': case 'igdl': case 'instagram': {
                if (!text) throw 'No Query Link!'
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw 'Link yang kamu berikan tidak.valid'
                m.reply(mess.wait)
                let urlnya = text
	            hx.igdl(urlnya)
	            .then(async(result) => {
		        for(let i of result.medias){
			    if(i.url.includes('mp4')){
				let link = await getBuffer(i.url)
                elaina.sendMessage(m.chat, { video: link, }, { quoted: m })
                } else {
                    let link = await getBuffer(i.url)
                  elaina.sendMessage(m.chat, { image: link, }, { quoted: m })                  
                }
            }
            }).catch((err) => m.reply(`Server eror`))
            }		
			break

            case 'igs': case 'igstory': case 'instagramstory': {
                if (!text) throw 'Enter Username!'                
                m.reply(mess.wait)                
	            hx.igstory(text)
	            .then(async(result) => {
		        for(let i of result.medias){
			    if(i.url.includes('mp4')){
				let link = await getBuffer(i.url)
                elaina.sendMessage(m.chat, { video: link, }, { quoted: m })
                } else {
                    let link = await getBuffer(i.url)
                  elaina.sendMessage(m.chat, { image: link, }, { quoted: m })                  
                }
            }
            }).catch((err) => m.reply(`Sorry the username was not found`))
            }
            break
            case 'speedtest': {
            reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) reply(stdout)
        if (stderr.trim()) reply(stderr)
            }
            }
            break 

            case 'joox': case 'jooxdl': {
            if (!text) throw 'No Query Title'
            m.reply(mess.wait)
            let anu = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=rey2k21&query=${text}`)
            let msg = await elaina.sendImage(m.chat, anu.result.image, `⌕ Title : ${anu.result.info.song}\n⌕ Album : ${anu.result.info.album}\n⌕ Singer : ${anu.result.info.song}\n⌕ Publish : ${anu.result.info.date}\n⌕ Lirik :\n${anu.result.audio[0].link}`, m)
            elaina.sendMessage(m.chat, { audio: { url: anu.result.audio[0].link }, mimetype: 'audio/mpeg' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await elaina.sendImage(m.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                elaina.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Enter Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: 'Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                elaina.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Enter Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '🎥Video🎥'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await elaina.sendMessage(m.chat, buttonMessage, { quoted: m })
                elaina.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fb': case 'facebook': {
                if (!text) throw 'Enter Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                elaina.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: m })
            }
            break	        
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		elaina.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
        case 'spank': {
            if(!text) throw `Example : ${prefix + command} spank`
            if (!text) throw oh
            xy - await getBuffer('https://nekos.life/api/v2/img/spank')
            elaina.sendMessage(m.chat, {document: xy, mimetype: 'gif', MessageType: 'video/mp4'}, {quoted:m}).catch ((err) => reply(oh))
        }
        break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\Available IQRA : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		elaina.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		replay(mess.wait)
		elaina.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		replay(mess.wait)
		elaina.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		replay(mess.wait)
		elaina.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		replay(mess.wait)
		elaina.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		reply(`What format do you want? ? Example : ${prefix + command} pdf

Available formats : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadith': case 'hadist': {
		if (!args[0]) throw `Example:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Options available:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Which Hadith??\n\nExample:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		reply(`Hadith not found !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is surah Al-Fatihah verse 2 along with the audio, and the verse is just 1`
		if (!args[1]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is surah Al-Fatihah verse 2 along with the audio, and the verse is just 1`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		elaina.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is the interpretation of Surah Al-Fatihah verse 2`
		if (!args[1]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is the interpretation of Surah Al-Fatihah verse 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Short* : ${res.result.data.tafsir.id.short}

*Long* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		}
		break
/*case 'alkitab':  if(!text) throw `Masukan Search Yang Anda Cari`
epep = await.fetchJson(`https://melcanz.com/alkitabsearch?q=${text}&apikey=melcantik`)
break*/

		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                replay(mess.wait)
                let media = await elaina.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                elaina.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply to the audio you want to change with caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
            case 'setbudy': {
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
            case 'delbudy': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `No hashes`
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.sticker[hash]
                reply(`Done!`)
            }
            break
            case 'listbudy': {
                let teks = `
*Hash List*
Info: *bold* hash is locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                elaina.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockbudy': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.sticker)) throw 'Hash not found in database'
                global.db.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message You Want To Save In Database'
                if (!text) throw `Example : ${prefix + command} message name`
                let msgs = global.db.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of message with ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} msg name\n\nView message list with ${prefix}listmsg`
                let msgs = global.db.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' not registered in message list`
                elaina.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		reply(`Successfully deleted '${text}' from the message list`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [{
                                urlButton: {
                                    displayText: 'Report Bug',
                                    url: 'https://wa.me/6282331660134?text=hello+bro+i+found+a+bug+in+your+bot'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Start Anonymous 👻',
                                    id: 'start'
                                }
                            }]
                elaina.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await elaina.getName(m.sender)} Welcome To Anonymous Chat\n\nClick The Button Below To Find A Partner\`\`\``, elaina.user.name, m)
            }
			break
case 'sendkontak': case 'sendcontact': {
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await elaina.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
                    throw false
                }
                let profile = await elaina.profilePictureUrl(room.b)
                let status = await elaina.fetchStatus(room.b)
                let msg = await elaina.sendImage(room.a, profile, `Name : ${await elaina.getName(room.b)}\nBio : ${status.status}\nUser : @${room.b.split("@")[0]}`, m, { mentions: [room.b] })
                elaina.sendContact(room.a, [room.b.split("@")[0]], msg)
            }
            break
            case 'keluar': case 'leave': {
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await elaina.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
                    throw false
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await elaina.sendText(other, `_Partner Has Left Anonymous Session_`, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'stop', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await elaina.sendButtonText(m.chat, buttons, `_You Are Still In Anonymous Session, Press The Button Below To Terminate Your Anonymous Session_`, elaina.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'stop', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await elaina.sendButtonText(room.a, buttons, `_Successfully Found Partner, Now You Can Send Messages_`, elaina.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await elaina.sendButtonText(room.b, buttons, `_Successfully Found Partner, Now You Can Send Messages_`, elaina.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await elaina.sendButtonText(m.chat, buttons, `_Please Wait, Looking For A Partner_`, elaina.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return reply('This Feature Cannot Be Used In Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await elaina.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In Anonymous Session, Press The Button To Find A Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await elaina.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await elaina.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, elaina.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await elaina.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, elaina.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await elaina.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, elaina.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                elaina.public = true
                reply('Successfully Changed To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                elaina.public = false
                reply('Successfully Changed To Self Usage')
            }
            break
            case 'ping': case 'speed': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

NodeJS Memory Usaage
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
            break
            case 'owner': case 'creator': {
            elaina.sendContact(m.chat, global.pemilik, m)
           const devsound = fs.readFileSync('./Media/botdev.mp3') //u can change the music in Media folder
           elaina.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
            }
            break
                    case 'bug': case 'report': {
                    	if(!text) throw `Enter The Bug Example ${command} Menu Error `
                    	elaina.sendMessage(`6282331660134@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })
reply(`Successfully Reported To The Owner\n\nPlease Make Sure The Bug Is Valid, If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`)
                    }
                    break 
          case 'exe':{
            reply(`bajigur`)
            }
            break
case 'tes': case 'test': case 'statusbot': case 'bot': case 'status':{
                anu = `\n*Status Bot : Online*`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./media/menu.jpg')}, { upload: elaina.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: anu,
           hydratedFooterText: ` ⫹⫺ HostName: ${os.hostname()}\n ⫹⫺ Platform : ${os.platform()}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Website',
                                    url: 'https://s.id/Skylarkaf'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu',
                                    id: `${prefix}menu`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                elaina.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
                var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
                    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
                    return new (P || (P = Promise))(function (resolve, reject) {
                        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
                        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
                        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                };
                var __generator = (this && this.__generator) || function (thisArg, body) {
                    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
                    function verb(n) { return function (v) { return step([n, v]); }; }
                    function step(op) {
                        if (f) throw new TypeError("Generator is already executing.");
                        while (_) try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                            if (y = 0, t) op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0: case 1: t = op; break;
                                case 4: _.label++; return { value: op[1], done: false };
                                case 5: _.label++; y = op[1]; op = [0]; continue;
                                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                                    if (t[2]) _.ops.pop();
                                    _.trys.pop(); continue;
                            }
                            op = body.call(thisArg, _);
                        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
                        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
                    }
                };
                var _this = this;
                run = function (M, _a) {
                    var joined = _a.joined;
                    return __awaiter(_this, void 0, void 0, function () {
                        var term, images;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (!!joined) return [3 /*break*/, 2];
                                    return [4 /*yield*/, M.reply("Please provide the Broadcast Message.")];
                                case 1: return [2 /*return*/, void (_b.sent())];
                                case 2:
                                    term = joined.trim();
                                    images = [
                                        "https://c.tenor.com/IhiRfFF2eO8AAAPo/anime-kurumi.mp4",
                                        "https://c.tenor.com/xtUvNrfMOScAAAPo/kurumi-tokisaki-anime.mp4",
                                        "https://c.tenor.com/4Z5XJh3m3S0AAAPo/100.mp4",
                                        "https://c.tenor.com/Yoitobm0iaQAAAPo/date-a-live-kurumi.mp4",
                                        "https://c.tenor.com/v3WTdkIo1kkAAAPo/kurumi.mp4",
                                        "https://c.tenor.com/aflCuh8Hk_EAAAPo/kurumi-wedding-dress.mp4",
                                        "https://c.tenor.com/npZTSqG9iwMAAAPo/kurumi.mp4",
                                    ];
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                
break

case 'menu': case 'help':{
    timestampe = speed();
         latensie = speed() - timestampe
                anu = `╭─⭓「 WhatsApp Bot 」                
│• Botname: ${global.botnma}
│• AuthorBase: DikaArdnt
│• Rewriter: ${global.ownernma}
├───⭓「 About 」
│ ⫹⫺ Library: Baileys-Md
│ ⫹⫺ Language : Javascript
│ ⫹⫺ HostName: ${os.hostname()}
│ ⫹⫺ Platform : ${os.platform()}
│ ⫹⫺ Speed: ${latensie.toFixed(4)} miliseconds
╰──────⭓`
let message = await prepareWAMessageMedia({ video: await getBuffer(global.gifmp4), gifPlayback: true }, { upload: elaina.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: text.trim(),
               hydratedFooterText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Website',
                                    url: 'https://s.id/Skylarkaf'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Source Code',
                                    url: 'https://github.com/koleksibot/whitehatbot-md'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'All Menu',
                                    id: `${prefix}allmenu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'List Menu',
                                    id: `${prefix}command`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Credits',
                                    id: `${prefix}tqtt`
                                },
                                
                            }]
                        }
                    }
                }), { userJid: m.chat })
                elaina.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
break

case 'command': case 'listmenu':{
    timestampe = speed();
         latensie = speed() - timestampe
let sks = `
*┌───「 Status 」*
*│* • HostName: ${os.hostname()}
*│* • Platform: ${os.platform()}
*│* • Speed: ${latensie.toFixed(4)} miliseconds
*│* • Runtime: ${runtime(process.uptime())}
*├──「 TimeZone 」*
*│* • Wit: ${wit}
*│* • Wita: ${wita}
*│* • Wib: ${wib}
*│* • ServerTime: ${time}
*└───────⭓*\n`
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
   listMessage :{
     title: ` *List Menu ${global.botnma}*`,

                    description: sks,
                    buttonText: "MENU",
                    footerText: "@skylarkaf",
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "All Features Bot",
								"rows": [
									{
										"title": "All Menu",
										"description": "Displays The List Of All The Features!",
										"rowId": `${prefix}allmenu`
									}
								]
							},
							{
								"title": "Bot Features",
								"rows": [
									
									{
										"title": "Group Menu",
										"description": "Displays The List Of Group Features",
										"rowId": `${prefix}grupmenu`
									},
									{
										"title": "Download Menu",
										"description": "Displays The List Of Download Features",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "Search Menu",
										"description": "Displays The List Of Searching Features",
										"rowId": `${prefix}searchmenu`
									},										
										{
											"title": "Fun Menu",
										"description": "Displays The List Of Fun Features",
										"rowId": `${prefix}funmenu`
										},
										{
											"title": "Convert Menu",
										"description": "Displays The List Of Convert Features",
										"rowId": `${prefix}convertmenu`
										},									
										{
											"title": "Database Menu",
										"description": "Displays The List Of Database Features",
										"rowId": `${prefix}databasemenu`
										},									
										{
											"title": "About Bot Menu",
										"description": "Displays The List Of About Bot Features",
										"rowId": `${prefix}aboutbotmenu`
										}
								]
							},
							{
								"title": "Chat with fellow users",
								"rows": [
									{
										"title": "Anonymous Chat Menu",
										"description": "Displays The List Of Anonymous Chat Features",
										"rowId": `${prefix}anonymouschatmenu`
									}
								]
							},
							{
								"title": "Group Option",
								"rows": [
									{
										"title": "Option Menu",
										"description": "Displays The List Of Group Option Features",
										"rowId": `${prefix}sistemmenu`
									}
								]
							},
							{
								"title": "Owner",
								"rows": [
									{
										"title": "Owner Menu",
										"description": "Displays The List Of Owner Features",
										"rowId": `${prefix}ownermenu`
									}
								]
							},
							{
								"title": "Credit",
								"rows": [
									{
										"title": "Thanks To All Contributor",
										"description": "Displays The List Of Credit Bot !!",
										"rowId": `${prefix}tqtt`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            elaina.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'grupmenu': case 'groubmenu': {
	            anu = `
  *( 📍 )  Groub Menu*  
  > ${prefix}grouplink
  > ${prefix}ephemeral [option]
  > ${prefix}setgrouppp
  > ${prefix}setname [text]
  > ${prefix}group [option]
  > ${prefix}editinfo [option]
  > ${prefix}grupinfo
  > ${prefix}add @user
  > ${prefix}kick @user
  > ${prefix}promote @user
  > ${prefix}demote @user
  `
let message = await prepareWAMessageMedia({ video: await getBuffer(global.gifmp4), gifPlayback: true }, { upload: elaina.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
               hydratedFooterText: `if you find bug pls report it to owner`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Website',
                                    url: 'https://s.id/Skylarkaf'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner Bot',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                elaina.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'downloadmenu': {
	okemenu = `
  *( 📥 )  Downloader*  
  > ${prefix}tiktok [url]
  > ${prefix}tiktokmp3 [url]
  > ${prefix}instagram [url]
  > ${prefix}igs [url]
  > ${prefix}twitter [url]
  > ${prefix}twittermp3 [url]
  > ${prefix}ytmp3 [url]
  > ${prefix}ytmp4 [url]
  > ${prefix}getmusic [query]
  > ${prefix}getvideo [query
  `
let message = await prepareWAMessageMedia({ video: await getBuffer(global.gifmp4), gifPlayback: true }, { upload: elaina.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: okemenu,
               hydratedFooterText: `if you find bug pls report it to owner`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Website',
                                    url: 'https://s.id/Skylarkaf'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner Bot',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                elaina.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break 
            case 'searchmenu': {
            	anu = `
  *( 🔎 )  Searching*  
  > ${prefix}play [query]
  > ${prefix}yts [query]
  > ${prefix}google [query]
  > ${prefix}gimage [query]
  > ${prefix}pinterest [query]
  > ${prefix}wallpaper [query]
  > ${prefix}wikimedia [query]
  > ${prefix}ytsearch [query]
  `
let message = await prepareWAMessageMedia({ video: await getBuffer(global.gifmp4), gifPlayback: true }, { upload: elaina.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
               hydratedFooterText: `if you find bug pls report it to owner`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Website',
                                    url: 'https://s.id/Skylarkaf'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner Bot',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                elaina.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'randommenu': {
	anu = `
  *( 🥎 )  Random* 
  > ${prefix}coffee
  > ${prefix}ppcp
  > ${prefix}quoteanime
  `
let message = await prepareWAMessageMedia({ video: await getBuffer(global.gifmp4), gifPlayback: true }, { upload: elaina.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
               hydratedFooterText: `if you find bug pls report it to owner`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Website',
                                    url: 'https://s.id/Skylarkaf'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner Bot',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                elaina.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'funmenu': {
	anu = `
  *( 🎲 )  Fun Menu*  
  > ${prefix}family100
  > ${prefix}math [mode] 
  > ${prefix}jadian
  > ${prefix}jodohku
  > ${prefix}gay
  > ${prefix}lesbian
  > ${prefix}niga
  > ${prefix}china
  > ${prefix}wibu
  > ${prefix}jomblo
  > ${prefix}badut
  > ${prefix}sadboy
  `
let message = await prepareWAMessageMedia({ video: await getBuffer(global.gifmp4), gifPlayback: true }, { upload: elaina.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
               hydratedFooterText: `if you find bug pls report it to owner`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Website',
                                    url: 'https://s.id/Skylarkaf'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner Bot',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                elaina.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'religionmenukdksoejdjj': {
	anu = `
  *( 🛐 )  Religion*

  > ${prefix}iqra
  > ${prefix}hadith
  > ${prefix}alquran
  > ${prefix}juzamma
  > ${prefix}tafsirsurah
`  
let message = await prepareWAMessageMedia({ video: await getBuffer(global.gifmp4), gifPlayback: true }, { upload: elaina.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
               hydratedFooterText: `if you find bug pls report it to owner`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Website',
                                    url: 'https://s.id/Skylarkaf'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner Bot',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                elaina.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'convertmenu': {
	anu = `
  *( ♻️ )  Converter*  
  > ${prefix}toimage
  > ${prefix}sticker
  > ${prefix}emojimix
  > ${prefix}tovideo
  > ${prefix}togif
  > ${prefix}tourl
  > ${prefix}ebinary
  > ${prefix}dbinary
  > ${prefix}bass
  > ${prefix}blown
  > ${prefix}deep
  > ${prefix}earrape
  > ${prefix}fast
  > ${prefix}fat
  > ${prefix}nightcore
  > ${prefix}reverse
  > ${prefix}robot
  > ${prefix}slow
  > ${prefix}squirrel
  `
let message = await prepareWAMessageMedia({ video: await getBuffer(global.gifmp4), gifPlayback: true }, { upload: elaina.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
               hydratedFooterText: `if you find bug pls report it to owner`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Website',
                                    url: 'https://s.id/Skylarkaf'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner Bot',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                elaina.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'aboutbotmenu': {
	anu = `
  *( 📌 )  About Bot*
  > ${prefix}ping
  > ${prefix}owner
  > ${prefix}donate
  > ${prefix}menu / ${prefix}help / ${prefix}?
  > ${prefix}delete
  > ${prefix}chatinfo
  > ${prefix}quoted
  > ${prefix}listpc
  > ${prefix}listgc
  > ${prefix}listonline
  > ${prefix}report (report bug to owner)
  `
let message = await prepareWAMessageMedia({ video: await getBuffer(global.gifmp4), gifPlayback: true }, { upload: elaina.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
               hydratedFooterText: `if you find bug pls report it to owner`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Website',
                                    url: 'https://s.id/Skylarkaf'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner Bot',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                elaina.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'databasemenu': {
	anu = `
 *( 🖇 )  Database*  
  > ${prefix}setbudy
  > ${prefix}listbudy
  > ${prefix}delbudy
  > ${prefix}lockbudy
  > ${prefix}addmsg
  > ${prefix}listmsg
  > ${prefix}getmsg
  > ${prefix}delmsg
  `
  let message = await prepareWAMessageMedia({ video: await getBuffer(global.gifmp4), gifPlayback: true }, { upload: elaina.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
               hydratedFooterText: `if you find bug pls report it to owner`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Website',
                                    url: 'https://s.id/Skylarkaf'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner Bot',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                elaina.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'anonymouschatmenu': {
	anu = `
  *( 👻 )  Main Menu*	
  > ${prefix}start ( Start Chat )
  > ${prefix}next ( Next user )
  > ${prefix}stop ( stop Anonymous chat )
	`
let message = await prepareWAMessageMedia({ video: await getBuffer(global.gifmp4), gifPlayback: true }, { upload: elaina.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
               hydratedFooterText: `if you find bug pls report it to owner`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Website',
                                    url: 'https://s.id/Skylarkaf'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner Bot',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                elaina.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'sistemmenu': {
	anu = `
  *( 🎯 )  Option*	
  > ${prefix}mute On/Off
  > ${prefix}antiwame On/Off
`
let message = await prepareWAMessageMedia({ video: await getBuffer(global.gifmp4), gifPlayback: true }, { upload: elaina.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
               hydratedFooterText: `if you find bug pls report it to owner`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Website',
                                    url: 'https://s.id/Skylarkaf'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner Bot',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                elaina.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
  case 'ownermenu': {
  	anu = `
  *( 👑 )  Owner Menu*  
  > ${prefix}chat [option]
  > ${prefix}join [link]
  > ${prefix}leave
  > ${prefix}setbotpp
  > ${prefix}block @user
  > ${prefix}unblock @user
  > ${prefix}bcgroup
  > ${prefix}bcall
  `
    let message = await prepareWAMessageMedia({ video: await getBuffer(global.gifmp4), gifPlayback: true }, { upload: elaina.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
               hydratedFooterText: `if you find bug pls report it to owner`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Website',
                                    url: 'https://s.id/Skylarkaf'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner Bot',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                elaina.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
  case 'allmenu': {
  	anu = `
  *All Menu*
  
  *( 📍 )  Groub Menu*  
  > ${prefix}grouplink
  > ${prefix}ephemeral [option]
  > ${prefix}setgrouppp
  > ${prefix}setname [text]
  > ${prefix}group [option]
  > ${prefix}editinfo [option]
  > ${prefix}grupinfo
  > ${prefix}add @user
  > ${prefix}kick @user
  > ${prefix}promote @user
  > ${prefix}demote @user
  
  *( 📥 )  Downloader*  
  > ${prefix}tiktok [url]
  > ${prefix}tiktokmp3 [url]
  > ${prefix}instagram [url]
  > ${prefix}ig2 [url]
  > ${prefix}igreels [url]
  > ${prefix}igtv [url]
  > ${prefix}twitter [url]
  > ${prefix}twittermp3 [url]
  > ${prefix}ytmp3 [url]
  > ${prefix}ytmp4 [url]
  > ${prefix}getmusic [query]
  > ${prefix}getvideo [query
  
  *( 🔎 )  Searching*  
  > ${prefix}play [query]
  > ${prefix}yts [query]
  > ${prefix}google [query]
  > ${prefix}gimage [query]
  > ${prefix}pinterest [query]
  > ${prefix}wallpaper [query]
  > ${prefix}wikimedia [query]
  > ${prefix}ytsearch [query]
  
  *( 🥎 )  Random* 
  > ${prefix}coffee
  > ${prefix}ppcp
  > ${prefix}quoteanime
  
  *( 🎲 )  Fun Menu*  
> ${prefix}family100
  > ${prefix}math [mode] 
  > ${prefix}jadian
  > ${prefix}jodohku
  > ${prefix}gay
  > ${prefix}lesbian
  > ${prefix}niga
  > ${prefix}china
  > ${prefix}wibu
  > ${prefix}jomblo
  > ${prefix}badut
  > ${prefix}sadboy
  
  *( ♻️ )  Converter*  
  > ${prefix}toimage
  > ${prefix}sticker
  > ${prefix}emojimix
  > ${prefix}tovideo
  > ${prefix}togif
  > ${prefix}tourl
  > ${prefix}ebinary
  > ${prefix}dbinary
  > ${prefix}bass
  > ${prefix}blown
  > ${prefix}deep
  > ${prefix}earrape
  > ${prefix}fast
  > ${prefix}fat
  > ${prefix}nightcore
  > ${prefix}reverse
  > ${prefix}robot
  > ${prefix}slow
  > ${prefix}squirrel
  
  *( 📌 )  About Bot*
  > ${prefix}ping
  > ${prefix}owner
  > ${prefix}donate
  > ${prefix}menu / ${prefix}help / ${prefix}?
  > ${prefix}delete
  > ${prefix}chatinfo
  > ${prefix}quoted
  > ${prefix}listpc
  > ${prefix}listgc
  > ${prefix}listonline
  > ${prefix}report (report bug to owner)
  
 *( 🖇 )  Database*  
  > ${prefix}setbudy
  > ${prefix}listbudy
  > ${prefix}delbudy
  > ${prefix}lockbudy
  > ${prefix}addmsg
  > ${prefix}listmsg
  > ${prefix}getmsg
  > ${prefix}delmsg
  
  *( 👻 )  Main Menu*	
  > ${prefix}start ( Start Chat )
  > ${prefix}next ( Next user )
  > ${prefix}stop ( stop Anonymous chat )
  
  *( 🎯 )  Option*	
  > ${prefix}mute On/Off
  > ${prefix}antiwame On/Off
  
  *( 👑 )  Owner Menu*  
  > ${prefix}chat [option]
  > ${prefix}join [link]
  > ${prefix}leave
  > ${prefix}setbotpp
  > ${prefix}block @user
  > ${prefix}unblock @user
  > ${prefix}bcgroup
  > ${prefix}bcall
`
let message = await prepareWAMessageMedia({ video: await getBuffer(global.gifmp4), gifPlayback: true }, { upload: elaina.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: anu,
               hydratedFooterText: `if you find bug pls report it to owner`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Website',
                                    url: 'https://s.id/Skylarkaf'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner Bot',
                                    id: `${prefix}owner`
                                    }
                                }, 
                                {
                                quickReplyButton: {
                                    displayText: 'List Menu',
                                    id: `${prefix}listmenu`
                                }
                               
                            }]
                        }
                    }
                }), { userJid: m.chat })
                elaina.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'tqtt': case 'tqtq':
reply(`Big Thanks to :

• DikaArdnt
https://github.com/DikaArdnt

• SkylarKaf
https://github.com/SkylarKaf

• nexusNw
https://github.com/nexusNw

• tahaluindo
https://github.com/tahaluindo

And Thanks to some case and function provider !!!`)
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.database
		    if (!(budy.toLowerCase() in msgs)) return
		    elaina.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
