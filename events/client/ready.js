const Discord = require("discord.js");
const db = require("quick.db")
let slash = []
module.exports = async (client) => {
    console.log(`[-] Anti HDD Conecter ${client.user.username}`)
    client.guilds.cache.map(async guild => {
        await guild.members.fetch().catch(e => { })
    })

    client.user.setActivity("Anti HDD By : Registre", {type: "COMPETING"})


    await client.application.commands.set(slash)

 
    
}
