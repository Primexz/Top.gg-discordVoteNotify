import {tggUser} from "./structs/tggUser";

export function constructEmbed(bot, voter: tggUser) {
    return {
        content: `<@${voter.id}>`,
        embeds: [
            {
                color: 11730954,
                title: '<:topgg:918280202398875758> Top.gg | Discord Bot List',
                description: `\`${voter.username}#${voter.discriminator}\` [voted](https://top.gg/bot/${bot}) bot: <@${bot}>`,
                thumbnail: {
                    url: `https://cdn.discordapp.com/avatars/${voter.id}/${voter.avatar}.webp`
                },
                timestamp: new Date()
            },
        ],

    }
}