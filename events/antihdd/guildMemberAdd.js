const Discord = require('discord.js')
const moment = require('moment');
const db = require("quick.db")
const cl = new db.table("Color")
const owner = new db.table("Owner")
const antihdd = new db.table("antihdd")

module.exports = async(client, member) => {

  
    if(member.user.username.includes("HDD" || "hdd" || "H.H.D" || "𝒽𝒹𝒹" || "нdd" || "𝐇𝐃𝐃" || "𝙷𝙳𝙳" || "𝕳𝕯𝕯" || "ℍ𝔻𝔻" || "𝗛𝗗𝗗" || "𝐻𝐷𝐷" || "𝘏𝘋𝘋" || "𝑯𝑫𝑫" || "𝙃𝘿𝘿" || "𝐻𝒟𝒟" || "ℋ𝓓𝓓" || "ＨＤＤ" || "𝓗𝔇𝔇" || "ᴴᴰᴰ" || "нDD" || "нƊƊ" || "нƊƊ" || "ĤÐĎ" || "ḦD̈D̈" || "ɧđđ" || "Һძძ" || "нÐÐ" || "んÐÐ" || "ɦɖɖ" || "ɧԺԺ" || "Ƕժժ" || "ԋԃԃ" || "ђ๔๔" || "ᴅᴅʜ" || "ppɥ" || "bbн" || "ӇƊƊ" || "ʜᴅᴅ" || "ĤDD" || "ĤDD" || "нɔɔ" || "ħđđ" || "հძძ" || "hδδ" || "հժժ" || "нDD" || "ἬƉƉ" || "h໓໓" || "HDD" || "ɦɗɗ" || "ĦÐÐ" || "ɦƊƊ" || "ħɖɖ" || "HÐÐ" || "HÐÐ" || "ɧÞÞ" || "৸DD" || "ĦÐÐ" || "|̶ ̶ ̶ ̶||͇̿ ͇̿ ͇̿ ͇̿)|͇̿ ͇̿ ͇̿ ͇̿)" || "HDD")) {
        member.guild.members.ban(member.id, { reason: `Anti HDD By : 𝕯.Registre` })
        console.log(`🧑‍💻 HDD détecté il a été ban\n
        🤠 Tag: ${member.user.tag}\n
        🤖 ID : ${member.id}\n
        👁️ Crée le: ${member.user.createdAt}`)
        const embed = new Discord.MessageEmbed()
        .setDescription(` 🧑‍💻 HDD détecté il a été ban\n
        🤠 Tag: ${member.user.tag}\n
        🤖 ID : ${member.id}\n
        👁️ Crée le: ${member.user.createdAt}`)
        .setFooter({text: "Anti HDD By : 𝕯.Registre"})
        client.channels.cache.get(antihdd.fetch(`${member.guild.id}.hddlog`)).send({ embeds: [embed] }).catch(console.error)



}

}