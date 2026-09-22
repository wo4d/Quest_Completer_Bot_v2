const ALLOWED_GUILD_ID = '1020369849622470686';

export default {
    name: 'guildCreate',
    once: false,

    async execute(guild) {
        if (guild.id === ALLOWED_GUILD_ID) return;

        console.log(
            `Leaving unauthorized guild: ${guild.name} (${guild.id})`
        );

        await guild.leave().catch(err => {
            console.error(
                `Failed to leave unauthorized guild ${guild.name}:`,
                err.message
            );
        });
    },
};
