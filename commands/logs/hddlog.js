const Discord = require('discord.js')
const db = require('quick.db')
const { MessageEmbed } = require('discord.js')
const antihdd = new db.table("antihdd")
const cl = new db.table("Color")
module.exports = {
    name: 'hddlog',
    aliases: [],

    run: async (client, message, args, prefix) => {
           let color = cl.fetch(`color_${message.guild.id}`)
        if (color == null) color = client.config.color
        if (!message.member.permissions.has(`MANAGE_CHANNELS`)) return message.channel.send({ content: `Vous n\'avez pas les permissions \`MANAGE_GUILD\` ou \`MANAGE_CHANNELS\`.` });  
 
            let ss = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
       

        const newChannel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0] || message.channelId);
            if (args[0] == undefined) args[0] = `<#${message.channel.id}>`
            if (!newChannel) return message.channel.send({ content: "Aucun salon trouvé !" })
            if (antihdd.get(`${message.guild.id}.hddlog`) === newChannel) return message.channel.send(`Le Salon Des Logs anti HDD est maintenant défini sur \`${antihdd.get(`${message.guild.id}.hddlog`)}\``)
            else {

           antihdd.set(`${message.guild.id}.hddlog`, newChannel.id)
           message.channel.send(`Nouveau salon des logs anti HDD : ${args[0]}`)

           const guild = message.guild;


           const logs = guild.channels.cache.get(antihdd.get(`${message.guild.id}.hddlog`))

           const embed = new Discord.MessageEmbed()
               .setColor(color)
               .setTitle(`${message.author.tag} à défini ce salon comme salon des logs anti HDD`)
               .setDescription(`Ce salon est désormais utilisé pour toutes les **logs anti HDD** du serveur\n Executeur : <@${message.author.id}>`)
               .setTimestamp()
               .setFooter({ text: `Anti HDD By : 𝕯.Registre` })
           logs.send({ embeds: [embed] })
            }  if(args[0] === "off") {
                antihdd.set(`${message.guild.id}.hddlog`, null)
                message.channel.send("Logs anti HDD reset avec succès")
            }
     
   
           
    
    
    }
    }
  