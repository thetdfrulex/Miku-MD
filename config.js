const fs = require("fs")
const chalk = require("chalk")

global.available = true
global.autoReadGc = true
global.autoReadAll = false
global.antitags = true


global.Owner = ['+919140867024']
global.OwnerNumber = ['919140767024']
global.ownertag = ['919140867024']
global.BotName = "The Prabhat Tripthi Bot"
global.packname = "Prabhat bot"
global.author = "By: Prabhat Triptahi"
global.OwnerName = "Prabhat"
global.BotSourceCode = "https://wa.me/+919140867024"
global.SupportGroupLink = "https://wa.me/+919140867024"
global.sessionName = "session"



global.prefa = ['*'] // Prefix ---  change it to anythong you want except @//


global.location = "Kanpur, India"
global.reactmoji = "❤️"
global.themeemoji = "💖"
global.vidmenu = { url: 'https://c.tenor.com/YGuLegQWubwAAAPo/miku-nakano-gotoubun-no-hanayome.mp4' }
global.websitex = "https://wa.me/+919140867024"
global.lolhuman = "Hoomans hehe"


global.BotLogo = fs.readFileSync("./Assets/pic1.jpg")
global.Thumb = fs.readFileSync("./Assets/pic9.jpg")
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg")
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg")


global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.mess = {
    jobdone: 'Hogya vro/vroni apka kaam huehue...',
    useradmin: 'Sorry, group ka admin jo bana betha hai use bol sirf vahi isko access kr skta hai',
    botadmin: 'Sorry, admin ko bula uske pass access hai *bot made by prabhat tripathi*',
    botowner: 'Only the script writer *Prabhat Tripathi* can use this command',
    grouponly: 'Groups ke lie hai only',
    privateonly: 'Personal/private chat me use kr akal mand insan*, huehue <3',
    botonly: 'Only owner *Prabhat* can execute it via main heroku or replit server',
    waiting: 'Wait kar rha hun darling.....',
    nolink: 'bhai/bhen/aunty/chachi link attach kardo apki mahan kripa hogi',
    error: 'Error hai yar recheck kar le',
    banned: 'Apko ban kardia gaya hai for some reasons for using the bot commands contact the bot and script owner Prabhat',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'O bhai is group ko NSFW enable krle phle nahi hai'
    
}


global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}


global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': '5d1197db351b',
}


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
