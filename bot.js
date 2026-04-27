const prefix = ",";
const botname = "Clanker Dask (" + prefix + "help)";
const version = "V1.0.7";
let isPremium = false;

const help = `- ^^COMMANDS:^^ \n` +
`${prefix}help, ${prefix}help2, ${prefix}echo {args}, ${prefix}joke, ${prefix}triggered, ${prefix}fact, ${prefix}hat {args}, ${prefix}color {args}, ${prefix}name {args}, ${prefix}resethat, ${prefix}resetcolor, ${prefix}resetname, ${prefix}ship {arg:0} and {arg:1}, ${prefix}roast {args}, ${prefix}camel, ${prefix}llama, ${prefix}parrot, ${prefix}source, ${prefix}changelog, ${prefix}france, ${prefix}asshole, ${prefix}lumi, ${prefix}gokid {args}`;

const help2 = `- ^^COMMANDS:^^ \n` +
`${prefix}pp`;

function sendMsg(msg) {
    setTimeout(() => {
        socket.emit("talk", { text: msg });
    }, 200);
}

setTimeout(() => { socket.emit("command", { list: ["name", botname] }); }, 1000);
setTimeout(() => { socket.emit("command", { list: ["color", "red"] }); }, 1000);
setTimeout(() => { socket.emit("command", { list: ["hat", "sprout"] }); }, 1000);
setTimeout(() => { sendMsg(`Clanker Dask Here. Type ,help To See Commands. Created By DPH.`); }, 1000);

socket.on("talk", (message) => {
    const text = message.text;

    if (text === prefix + "help") return sendMsg(help);
    if (text === prefix + "help2") return sendMsg(help2);
    if (text.startsWith(prefix + "echo")) return sendMsg(text.substring(prefix.length + 5));
    if (text.startsWith(prefix + "say")) return sendMsg(text.substring(prefix.length + 4));
    if (text === prefix + "joke") return socket.emit("command", { list: ["joke"] });
    if (text === prefix + "triggered") return socket.emit("command", { list: ["triggered"] });
    if (text === prefix + "fact") return socket.emit("command", { list: ["fact"] });
    if (text === prefix + "france") return socket.emit("command", { list: ["france"] });
    if (text.startsWith(prefix + "hat")) return socket.emit("command", { list: ["hat", text.substring(prefix.length + 4)] });
    if (text.startsWith(prefix + "color")) return socket.emit("command", { list: ["color", text.substring(prefix.length + 6)] });
    if (text.startsWith(prefix + "name")) return socket.emit("command", { list: ["name", text.substring(prefix.length + 5)] });
    if (text.startsWith(prefix + "asshole")) return socket.emit("command", { list: ["asshole", text.substring(prefix.length + 7)] });
    if (text.startsWith(prefix + "resetname")) return socket.emit("command", { list: ["name", botname] });
    if (text.startsWith(prefix + "resetcolor")) return socket.emit("command", { list: ["color", "red"] });
    if (text.startsWith(prefix + "resethat")) return socket.emit("command", { list: ["hat", "sprout"] });

    if (text.startsWith(prefix + "roast")) {
        const user = text.substring(prefix.length + 6);
        if (!user) return sendMsg("Name Plz!");
        const roasts = [
            `${user}, I'd agree with you, but then we'd both be wrong.`,
            `${user}, if laughter is the best medicine, your face must cure the world.`,
            `${user}, you bring everyone so much joy... when you leave the room.`,
            `${user}, you're proof evolution can go in reverse.`,
            `${user}, if I wanted to kill myself, I'd climb your ego and jump to your IQ.`
        ];
        const roast = roasts[Math.floor(Math.random() * roasts.length)];
        return sendMsg(roast);
    }

    if (text.startsWith(prefix + "ship")) {
        const users = text.substring(prefix.length + 5).split(" and ");
        if (users.length !== 2) return sendMsg("Names Plz!");
        const percent = Math.floor(Math.random() * 101);
        return sendMsg(`${users[0]} ❤️ ${users[1]} = ${percent}% Love!`);
    }

        if (text === prefix + "camel") {
        return sendMsg("- ^^**U GOT THE CAMEL**^^");
    }
    if (text === prefix + "llama") {
        return sendMsg("- ^^**U GOT THE LLAMA**^^");
    }
    if (text === prefix + "source") {
        return sendMsg("- ^^**SOURCE:**^^ \n https://log833.github.io/cd-bot-source/bot.js");
    }
    if (text === prefix + "parrot") {
        return sendMsg("- ^^**U GOT THE PARROT**^^");
    }
    if (text === prefix + "cow") {
        return sendMsg("- ^^**U GOT THE COW**^^");
    }
    if (text === prefix + "lumi") {
        return sendMsg("- ^^**https://log833.github.io/cd-bot-source/lumi.png**^^");
    }
    if (text === prefix + "changelog") {
        return sendMsg("- ^^**V1.0.7**^^ \n Added ,hat \n Added ,cow \n Added ,france \n Added ,asshole \n Added ,lumi \n Added ,gokid \n Added ,help2 \n Added ,pp");
    }
    if (text.startsWith(prefix + "gokid")) {
    const userxd = text.substring(prefix.length + 6);
    const gokids = [
            `${userxd}, your a gokid!`,
            `${userxd}, your a fucking gokid!`
        ];
        const gokid = gokids[Math.floor(Math.random() * gokids.length)];
        return sendMsg(gokid);
    }
    if (text.startsWith(prefix + "pp")) {
    const name = text.substring(prefix.length + 6);
    const pps = [
            `This is ${name}'s PP: 8=Đ`,
            `This is ${name}'s PP: 8==Đ`,
            `This is ${name}'s PP: 8===Đ`,
            `This is ${name}'s PP: 8====Đ`,
            `This is ${name}'s PP: 8=====Đ`,
            `This is ${name}'s PP: 8======Đ`
        ];
        const pp = pps[Math.floor(Math.random() * pps.length)];
        return sendMsg(pp);
    }
});
