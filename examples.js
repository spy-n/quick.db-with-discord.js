//I want to clarify that I am not a great master of programming or anything like that I only do this to teach how I learned it
const Discord = require('discord.js')
const db = require('quick.db')
const args = message.content.slice(prefix.length).trim().split(/ +/g); //we define arguments

//first the command to add the money to MYSELF
var money = args[0]//if you are in command handler put args[0] if you do everything in an index put args[1]
if(!money) return message.channel.send('you dont put a amount')
//and we finish with the variables and etc if you want you can add permissions or more things that is to your liking
db.add(message.guild.id+'_'+message.author.id, money)
//Here we use the add method and add to the user id of the server id the amount that was put with the money variable

//first the command to add the money to OTHER USER
var money = args[0]//if you are in command handler put args[0] if you do everything in an index put args[1]
if(!money) return message.channel.send('you dont put a amount')
var user = message.mentions.members.first() 
if(!user) return message.channel.send(`you have to mention someone to give money`)
//and we finish with the variables and etc if you want you can add permissions or more things that is to your liking
db.add(message.guild.id+'_'+user.id, dinero2)
//Here we use the add method again to give money to the id of the user mentioned within the id of the server in which the command was placed, within the server it is so that it does not have the same money on all servers

//now the command to take money from MYSELF
var money = args[0]//if you are in command handler put args[0] if you do everything in an index put args[1]
if(!money) return message.channel.send('you dont put a amount')
//and we finish with the variables and etc if you want you can add permissions or more things that is to your liking :v
db.subtract(message.guild.id+'_'+message.author.id, money)
//Here we use a method that some may not know exists since it is not on the official npm page but rather in the quick.db documentation
//and we make them take the money from the user id inside the server id

//now the command to take money to OTHER USER
var money = args[0]//if you are in command handler put args[0] if you do everything in an index put args[1]
if(!money) return message.channel.send('you dont put a amount')
var user = message.mentions.members.first() 
if(!user) return message.channel.send(`you have to mention someone to quit money`)
//and we finish with the variables and etc if you want you can add permissions or more things that is to your liking
db.subtract(message.guild.id+'_'+user.id, money)
//and well here we use the same thing that we use in the other commands only that instead of adding we are removing
//AND THE LAST ONE, HOW TO SHOW THE MONEY I HAVE
var user = message.author
var money = db.fetch(message.guild.id+'_'+user.id, money) //we use a fetch
if(!money) return message.channel.send('You dont have money')    
var embed = new Discord.MessageEmbed() //i do a embed 👍
.setAuthor(user.tag, message.author.avatarURL()) //optional
.addField('Cash:', `💰${money}$`, true) //show the mony with var money
.setColor('GREEN')
message.channel.send(embed)


//I hope it has served you 👍, any questions join here https://discord.gg/waddj7dPx5
