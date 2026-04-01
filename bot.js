const prefix = ",";
const botname = "Clanker Dask (" + prefix + "help)";
const version = "Initial Release";
let isPremium = false;

const help = `- Commands\n` +
`${prefix}help, ${prefix}echo {args}, ${prefix}joke, ${prefix}triggered, ${prefix}fact, ${prefix}color {args}, ${prefix}name {args}, ${prefix}resetcolor, ${prefix}resetname, ${prefix}ship {args:0} and {args:1}, ${prefix}roast {args}, ${prefix}camel, ${prefix}llama, ${prefix}parrot, ${prefix}source`;

const botinfo = `Version ${version}.`;

function sendMsg(msg) {
    setTimeout(() => {
        socket.emit("talk", { text: msg });
    }, 1000);
}

setTimeout(() => { socket.emit("command", { list: ["name", botname] }); }, 1000);
setTimeout(() => { socket.emit("command", { list: ["color", "red"] }); }, 2100);
setTimeout(() => { socket.emit("command", { list: ["hat", "sprout"] }); }, 2400);
setTimeout(() => { sendMsg(`Clanker Dask Here`); }, 3000);

socket.on("talk", (message) => {
    const text = message.text;

    if (text === prefix + "help") return sendMsg(help);
    if (text.startsWith(prefix + "echo")) return sendMsg(text.substring(prefix.length + 4));
    if (text === prefix + "joke") return socket.emit("command", { list: ["joke"] });
    if (text === prefix + "triggered") return socket.emit("command", { list: ["triggered"] });
    if (text === prefix + "fact") return socket.emit("command", { list: ["fact"] });
    if (text.startsWith(prefix + "color")) return socket.emit("command", { list: ["color", text.substring(prefix.length + 6)] });
    if (text.startsWith(prefix + "name")) return socket.emit("command", { list: ["name", text.substring(prefix.length + 5)] });
    if (text.startsWith(prefix + "resetname")) return socket.emit("command", { list: ["name", botname] });
    if (text.startsWith(prefix + "resetcolor")) return socket.emit("command", { list: ["color", "red"] });
    if (text.startsWith(prefix + "resethat")) return socket.emit("command", { list: ["hat", "sprout"] });

    if (text.startsWith(prefix + "roast")) {
        const user = text.substring(prefix.length + 6);
        if (!user) return sendMsg("Usage: " + prefix + "roast {args}");
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
        if (users.length !== 2) return sendMsg("Usage: " + prefix + "ship {USER1} and {USER2}");
        const percent = Math.floor(Math.random() * 101);
        return sendMsg(`${users[0]} ❤️ ${users[1]} = ${percent}% Love!`);
    }

        if (text === prefix + "camel") {
        return sendMsg("Camel");
    }
    if (text === prefix + "llama") {
        return sendMsg("Llama");
    }
    if (text === prefix + "source") {
        return sendMsg("- SOURCE\n https://log833.github.io/cd-bot-source/bot.js");
    }
    if (text === prefix + "parrot") {
        return sendMsg("Parrot");
    }
});
