const prefix = "msg#";
const botname = "MessageBOT (" + prefix + "help)";
const version = "V0.0.1";
let isPremium = false;
socket.emit("login", {
        name: botname,
        room: login_room.value,
    });
setup();

const botinfo = `Name: {NAME}\\n Color: {COLOR}\\n Version: ${version}`;

const help = `Commands:\\n` +
`${prefix}help\\n ${prefix}say\\n ${prefix}roast\\n ${prefix}messagegui\\n ${prefix}dihsk`;

const changelog = `- **^^NOTHING^^**`;

function sendMsg(msg) {
    setTimeout(() => {
        socket.emit("talk", { text: msg });
    }, 200);
}

setTimeout(() => { socket.emit("command", { list: ["name", botname] }); }, 1000);
setTimeout(() => { socket.emit("command", { list: ["color", "black"] }); }, 1000);
setTimeout(() => { socket.emit("command", { list: ["hat", "tophat"] }); }, 1050);
setTimeout(() => { sendMsg(`{NAME} is online. Type ${prefix}help to see commands.`); }, 1000);
setInterval(() => {
        socket.emit("typing", 1);
    }, 60000);
setInterval(() => {
        socket.emit("typing", 0);
    }, 60002);
setInterval(() => {
        sendMsg(`{NAME} is online. Type ${prefix}help to see commands.`)
    }, 60003);

socket.on("talk", (message) => {
    const text = message.text;

    if (text === prefix + "help") return sendMsg(help);
    if (text === prefix + "changelog") return sendMsg(changelog);
    if (text.startsWith(prefix + "say")) return sendMsg(text.substring(prefix.length + 4));

    if (text.startsWith(prefix + "roast")) {
        const user = text.substring(prefix.length + 6);
        if (!user) return sendMsg("Name Plz!\\n Example: ,roast user");
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
    if (text === prefix + "messagegui") {
        cmd(`image https://files.catbox.moe/4i1qll.jpg`);
    }
    if (text === prefix + "dihsk") {
        return sendMsg("^^**THIS GIF IS A JOKE**^^\\n It Won't Let Me Upload So Here's It\\n https://files.catbox.moe/92amgu.gif");
    }
});
