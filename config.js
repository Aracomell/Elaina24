const fs = require('fs')
const chalk = require('chalk')
global.APIs = {
	zenz: 'https://zenzapis.xyz', //credit zenz, ty so much :)
}

global.APIKeys = {
	'https://zenzapi.xyz': 'your api',
}

global.gifmp4 = "https://uploader.caliph.my.id/file/BrHI7RTQI2.mp4"
global.menuimg = "https://uploader.caliph.my.id/file/mNV5rMkeoE.jpg"
global.owner = ['6289510598381'] 
global.pemilik = ['6289510598381'] //another owner number
global.premium = ['6289510598381']
global.pengguna = 'YogzFX'
global.botnma = '𝒁𝒆𝒏𝒏𝑺𝒌𝒚-𝑩𝒐𝒕𝒛'
global.ownernma = 'YogzFX'
global.packname = '' 
global.author = '⫹⫺ Created By : 𝒁𝒆𝒏𝒏𝑺𝒌𝒚-𝑩𝒐𝒕𝒛\n⫹⫺ Owner : YogzFX\n⫹⫺ Instagram : @karfuanyogich'
global.sessionName = 'session'
global.prefa = ['#','.'] 
global.prefix = ['#','!','/','.'] 
global.sp = '>' //design
global.mess = {
    success: 'Success ✓',
    admin: 'This Command Is Only Can Be Used By Admin',
    botAdmin: 'Make An Admin Bot First',
    owner: "Sorry But you're Not My Owner!",
    group: 'Use This Feature In Groub!',
    private: 'Only for Private Chat',
    bot: 'This feature in only for the bot number',
    wait: 'Process...',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 7777777,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

