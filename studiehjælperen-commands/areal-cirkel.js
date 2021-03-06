import { commands } from '../index.js'
import { MessageEmbed } from 'discord.js'

    export function arealCirkel(){
    if(isNaN(commands[2])){
        const arealCirkelHelpEmbed = new MessageEmbed()
              .setColor('#ff0000')
              .setTitle("Areal af en cirkel")
              .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/areal/cirkel')
              .setAuthor({ name: 'Studiehjælperen: Udregning af areal for en cirkel'})
              .setDescription('Formel: pi * r')
              .addFields(
                  { name: 'For at udregne areal af en cirkel , skriv:', value: "/areal cirkel <r>"},
              )
              .setTimestamp()
        return { embeds: [arealCirkelHelpEmbed] };
    
        }else{

        let arealCirkel = (Math.PI * (commands[2]))^2
  
        const arealCirkelEmbed = new MessageEmbed()
              .setColor('#00ff00')
              .setTitle("Areal af en cirkel")
              .setURL('https://www.webmatematik.dk/lektioner/7-9-klasse/areal/cirkel')
              .setAuthor({ name: 'Studiehjælperen: Udregning af areal for en cirkel'})
              .setDescription('Formel: pi * r')
              .addFields(
              { name: 'Areal for en cirkel udregnet:', value: "Svar: " + arealCirkel},
              )
              .setTimestamp()
  
        return { embeds: [arealCirkelEmbed] };
        }
    }