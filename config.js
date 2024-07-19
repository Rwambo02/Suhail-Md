const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://https://telegra.ph/file/04fb0aa5493986fb8ae07.jpg";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255775586427";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_25_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDM5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODAsXG4gICAgICAgIDE5LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTcxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3LFxuICAgICAgICA1MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDgxLFxuICAgICAgICAwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDcyLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDksXG4gICAgICAgIDcwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgODQsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICAxODYsXG4gICAgICAgIDg4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDgxLFxuICAgICAgICAxNSxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjMyLFxuICAgICAgICA3NixcbiAgICAgICAgODgsXG4gICAgICAgIDMxLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDgxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgODYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTM5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDk0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDkyLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwLFxuICAgICAgICA4LFxuICAgICAgICAzLFxuICAgICAgICAxMjksXG4gICAgICAgIDkzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjksXG4gICAgICAgIDk4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwLFxuICAgICAgICAzNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkVRWVpZNDh3cnRuNm92VmQ1MUNuQXBSSlZJUnQ4bGZYcDdQR3Q0a1dLT3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImc1eUhfYTFmVHJPZUdybEVwQmJqZVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2Q4ZGNjNGUtM2U3YS00MmNlLThmMDctZWY3MWU2MTJjMTYwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMCxcbiAgICAgIDIxLFxuICAgICAgNjksXG4gICAgICAxMTcsXG4gICAgICAxNDUsXG4gICAgICAyMzQsXG4gICAgICA4NSxcbiAgICAgIDIwOSxcbiAgICAgIDEyMCxcbiAgICAgIDIxMCxcbiAgICAgIDE1NixcbiAgICAgIDc1LFxuICAgICAgOTgsXG4gICAgICAxNTQsXG4gICAgICAyNDAsXG4gICAgICAxODIsXG4gICAgICA5LFxuICAgICAgMTQ1LFxuICAgICAgMTcxLFxuICAgICAgMTQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNCxcbiAgICAgIDE0MixcbiAgICAgIDQzLFxuICAgICAgOTQsXG4gICAgICA0MSxcbiAgICAgIDc5LFxuICAgICAgMjI2LFxuICAgICAgMTg1LFxuICAgICAgODksXG4gICAgICAyMixcbiAgICAgIDk2LFxuICAgICAgMjI4LFxuICAgICAgMzIsXG4gICAgICAxNDUsXG4gICAgICAxMTcsXG4gICAgICAxNTUsXG4gICAgICA1OSxcbiAgICAgIDIzMSxcbiAgICAgIDUsXG4gICAgICA2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxU0oxMzE4R1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1Nzc1NTg2NDI3OjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4ouGzaXii4bNo+KLhs2rIE3Noc2c8J2XpSBZzLZPzLZVzLYg4oKt4oKmw5jigqkgTcy2yYYg4oKhwqXguL/OnsamXCIsXG4gICAgXCJsaWRcIjogXCI0NTg1Nzc4NTI4Njg2NzozNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOcUQ2UElHRU9mUDY3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlRub0NZYmhtNm0rUFZHOE5wV2xHaURVM3dxRHBwVTZBL0pvRnlpUGcybUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiK1hkaG5rWnZIM2N3ZXB3ZmVaeERYaGFaSmZCWW9LNEtIbXBKQTNBRXllS1hReTdpQUtYNWRPdkR0cndGVld1SFArcXMvWHcyS3ZOKzZPT2JVYjhNQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUUhzUVNmTDJzZ3MwMENlQ3RZajJMVGpuVCtyb0tFTGV6ZVQ3dHh2Y2FqWkYvdFhtVktxTTI0Ym90S0VKQ0pBaUYrTjhSeFJiTGtpNWl3emtET3YyQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1Nzc1NTg2NDI3OjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQyNzk0OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUF0alwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQXRqLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQkxKSzNEY1BpK0lvWEZLVnlnNWIwOFhHeDRiNzdQQ25pMzBCZC9XZ29qST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODUxMzkyNDYzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Youknowme",
  packname: process.env.PACK_NAME || "youknowme",
  botname : process.env.BOT_NAME  || "YYOU KNOW ME CYBER",
  ownername:process.env.OWNER_NAME|| "YOU KNOW ME CYBER",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
