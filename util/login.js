const { readdirSync} = require('fs');
const getNow = () => { return { time: new Date().toLocaleString("en-GB", { timeZone: "Europe/Paris", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }), }; }
const login = (client) => {
const Discord = require("discord.js")
const db = require("quick.db")
const cl = new db.table("Color")

const { MessageButton , MessageActionRow } = require("discord.js")
client.config = require("../config.json")

client.cooldown = new Array();
client.interaction = {}
client.guildInvites = new Map();
client.queue = new Map();
client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
client.slashCommands = new Discord.Collection();
client.snipes = new Map()
client.inter = new Array()



client.login(client.config.token)




















}


  

module.exports = {

    login
}