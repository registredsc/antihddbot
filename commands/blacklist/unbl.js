const Discord = require("discord.js")
const db = require("quick.db")
const owner = new db.table("Owner")
const cl = new db.table("Color")

module.exports = {
    name: "unbl",
    run: async(client, message, args, prefix) => {
        if(client.config.owner.includes(message.author.id) || owner.get(`ownermd.${message.author.id}`) ) {
             let color = cl.fetch(`color_${message.guild.id}`)
            if (color == null) color = client.config.color
            if (args[0]) {
                let member = client.users.cache.get(message.author.id);
                if (args[0]) {
                    member = client.users.cache.get(args[0]);
                } else {
                    return message.channel.send(`Aucun membre trouvé pour \`${args[0] || "rien"}\``)

                }
                if (message.mentions.members.first()) {
                    member = client.users.cache.get(message.mentions.members.first().id);
                }
                if (!member) return message.channel.send(`Aucun membre trouvé pour \`${args[0] || "rien"}\``)
                
                let nobl = new Discord.MessageEmbed()
                nobl.setColor(color)
                nobl.setDescription(`**${member.username}** n'est pas blacklist`)
                nobl.setFooter({text: "Anti HDD By : 𝕯.Registre"})
          
                if (db.get(`blacklist.${member.id}`) === null) { return message.channel.send({embeds: [nobl]})}
                db.set(`${client.user.id}.blacklist`, db.get(`${client.user.id}.blacklist`).filter(s => s !== member.id))
                db.delete(`blacklist.${member.id}`, member.id)

                let unbl = new Discord.MessageEmbed()
                unbl.setColor(color)
                unbl.setDescription(`**${member.username}** est maintenant unblacklist`)
                unbl.setFooter({text: "Anti HDD By : 𝕯.Registre"})
              message.channel.send({embeds: [unbl]})

            } else if (!args[0]) {
                return
            }
        } else { }  
        }
    }
