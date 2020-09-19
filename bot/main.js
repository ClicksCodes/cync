import * as config from './config.json';
import * as Discord from 'discord.js';
const client = new Discord.Client();

client.once('ready', () => {
    console.log(`Up at ${new Date}`);
});

client.on('guildMemberAdd', async (member) => {
    await member.user.send({embed: {
        title: `Welcome to CMP`,
        color: ``,
        description: `
        Hello there! I'm Cync, used for user creation and management on the CMP database. 
        If you don't have an account you can sign up [here](https://clicksminuteper.net/login).
        If you want to do this later just run \`c!signup\`
        To view your account, run \`c!profile\`. 
        To edit your account you will have to link it to this bot
        You can generate a link code you can run \`c!link\`.
        `,
        footer: `To see this message again just run \`c!welcome\``
    }});

});


client.on('message', async (message) => {
    if(message.author.bot) return;

    if(message.content.startsWith(config.prefix)) {
        const Args = message.content.slice(prefix.length).trim().split(/ +/);
        const Command = Args.shift().toLowerCase();

        switch (Command) {

            case 'signup':
                await message.author.send({embed:{
                    title: `Sign Up`,
                    color: ``,
                    description: `
                    Click [here](https://clicksminuteper.net/login) to sign up.
                    If you want to link your account just type \`c!link\`.
                    After linking your account you can edit your account with \`c!edit\` or \`c!profile\`
                    `
                }});
                break;
            case 'profile':
                const p = await mes;
                p.then(r => {
                    const msg = await message.channel.send({embed:{
                        title: `Showing [${r.username}'s profile](https://clicksminuteper.net/profile/${r.id})`,
                        color: ``,
                        author: {
                            name: `${message.author.username}`,
                            icon_url: `${message.author.avatar}`
                        },
                        image: `${r.avatar}`,
                        fields: [
                            {name:``, value:``}
                        ]
                    }});
                    msg.react()
                    msg.react()
                    msg.react()
                    const f = message.author
                    const r = await msg.awaitReactions(f)

                });
                break;


        }

    }
});

client.login(config.token);