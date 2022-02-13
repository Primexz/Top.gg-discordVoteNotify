export function constructEmbed(bot, voter) {
    return {
        content: `<@${bot.id}>`,
        embeds: [
            {
                color: 11730954,
                title: '<:topgg:918280202398875758> Top.gg | Discord Bot List',

                description: 'description',

                timestamp: new Date()
            },
        ],

    }
}