const prefix = "sh%";
const botname = "Shrimpo Minibot (" + prefix + "say)";
const version = "V0.0.1";
let isPremium = false;
socket.emit("login", {
        name: botname,
        room: login_room.value,
    });
setup();

function sendMsg(msg) {
    setTimeout(() => {
        socket.emit("talk", { text: msg });
    }, 200);
}

setTimeout(() => { cmd(`name ${botname}`); }, 1000);
setTimeout(() => { cmd(`color orange`); }, 1000);
setTimeout(() => { cmd(`hat headphones`); }, 1000);
setTimeout(() => { sendMsg(`${botname} is online. Type ${prefix}say to say anything. Version ${version}.`); }, 1100);
setInterval(() => {
        socket.emit("typing", 1);
    }, 60000);
setInterval(() => {
        socket.emit("typing", 0);
    }, 60002);
setInterval(() => {
        sendMsg(`${botname} is online. Type ${prefix}say to say anything. Version ${version}`)
    }, 60003);

socket.on("talk", (message) => {
    const text = message.text;

    if (text.startsWith(prefix + "echo")) return sendMsg(text.substring(prefix.length + 5));
    if (text.startsWith(prefix + "say")) return sendMsg(text.substring(prefix.length + 4));
});
