const Discord = require('discord.js')
const moment = require('moment');
const db = require("quick.db")
const cl = new db.table("Color")
const owner = new db.table("Owner")
const antihdd = new db.table("antihdd")

module.exports = async(client, member) => {
    const color = cl.fetch(`color_${member.guild.id}`)

    if (db.get(`blacklist.${member.id}`)) {

        member.send({ content: `Vous êtes blacklist de **${member.guild.name}** vous ne pouvez pas rejoindre le serveur` })
        member.guild.members.ban(member.id, { reason: `Blacklist` })
        const embed = new Discord.MessageEmbed()
            .setColor(color)
            .setDescription(`${member} a rejoit en étant Bl , il à été **ban**`)
            .setFooter({text: "Anti HDD By : 𝕯.Registre"})
        client.channels.cache.get(antihdd.fetch(`${member.guild.id}.hddlog`)).send({ embeds: [embed] }).catch(console.error)
    }
}