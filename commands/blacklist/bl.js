const Discord = require("discord.js")
const db = require("quick.db")
const owner = new db.table("Owner")
const cl = new db.table("Color")

module.exports = {
    name: "bl",
    run: async(client, message, args, prefix) => {
        if(client.config.owner.includes(message.author.id) || owner.get(`ownermd.${message.author.id}`) ) {
             let color = cl.fetch(`color_${message.guild.id}`)
        if (color == null) color = client.config.color
            if (args[0]) {
                const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

                if (!member) return message.channel.send(`Aucun membre trouvé pour \`${args[0] || "rien"}\``)

                if (!member.user.username.includes("HDD")) {
                    let embed = new Discord.MessageEmbed()
                        .setTitle("Blacklist")
                        .setColor(color)
                        .setDescription(`Vous ne pouvez pas bl ${member} car il n'est pas HDD`)
                        .setFooter({ text: `Anti HDD By : 𝕯.Registre` })
                        return message.channel.send({ embeds: [embed] })
                    };
                    
    
                    if (!member.user.username.includes("H.H.D")){
                        let embed = new Discord.MessageEmbed()
                        .setTitle("Blacklist")
                        .setColor(color)
                        .setDescription(`Vous ne pouvez pas bl ${member} car il n'est pas HDD`)
                        .setFooter({ text: `Anti HDD By : 𝕯.Registre` })
                        return message.channel.send({ embeds: [embed] })
    
                    };
    
                    if ((!member.user.username.includes("hdd"))) {
                        let embed = new Discord.MessageEmbed()
                        .setTitle("Blacklist")
                        .setColor(color)
                        .setDescription(`Vous ne pouvez pas bl ${member} car il n'est pas HDD`)
                        .setFooter({ text: `Anti HDD By : 𝕯.Registre` })
                        return message.channel.send({ embeds: [embed] })
    
                    };
    
               
                if (db.get(`blacklist.${member.id}`) === member.id) { return message.channel.send(`${member.username} est déjà blacklist`) }
                db.push(`${client.user.id}.blacklist`, member.id)
                db.set(`blacklist.${member.id}`, member.id)
                let bl = new Discord.MessageEmbed()
                bl.setColor(color)
                bl.setDescription(`<@${member.id}> est maintenant blacklist\nBanni de **${client.guilds.cache.size}** serveur(s).`)
                bl.setFooter({text: `Anti HDD By : 𝕯.Registre`})
                client.guilds.cache.forEach(async g => {
                    g.members.ban(member, { days: 7, reason: 'Anti HDD By : 𝕯.Registre' }).catch(err => { return })
                })
                message.channel.send({embeds: [bl]})
            

            } else if (!args[0]) {

                let own = db.get(`${client.user.id}.blacklist`)
                let p0 = 0;
                let p1 = 30;
                let page = 1;

                let embed = new Discord.MessageEmbed()
                    .setTitle("Blacklist")
                    .setColor(color)
                    .setDescription(!own ? "Aucun" : own.map((user, i) => `<@${user}>`).slice(0, 30).join("\n"))
                    .setFooter({ text: `Anti HDD By : 𝕯.Registre` })
                message.channel.send({ embeds: [embed] })


            }
        }
        }
    }
