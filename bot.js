const prefix = ",";
const botname = "Clanker Dask (" + prefix + "help)";
const version = "V1.2.3";
const startTime = Date.now();
let isPremium = false;
socket.emit("login", {
        name: botname,
        room: login_room.value,
    });
setup();

const help = `- %%^^COMMANDS:^^%% \n` +
`${prefix}help1\\n ${prefix}help2`;

const help1 = `- %%^^COMMANDS:^^%% \n` +
`${prefix}help1\\n ${prefix}echo\\n ${prefix}joke\\n ${prefix}triggered\\n ${prefix}fact\\n ${prefix}hat\\n ${prefix}color\\n ${prefix}name\\n ${prefix}resethat\\n ${prefix}resetcolor\\n ${prefix}resetname\\n ${prefix}ship\\n ${prefix}roast\\n ${prefix}cow\\n ${prefix}llama\\n ${prefix}parrot\\n ${prefix}source\\n ${prefix}changelog\\n ${prefix}france\\n ${prefix}asshole\\n ${prefix}lumi\\n ${prefix}gokid`;

const help2 = `- %%^^COMMANDS:^^%% \n` +
`${prefix}help2\\n ${prefix}pp\\n ${prefix}aplle\\n ${prefix}stfu\\n ${prefix}fuk\\n ${prefix}version\\n ${prefix}coinflip\\n ${prefix}restore\\n ${prefix}repeat\\n ${prefix}apllefy\\n ${prefix}8ball\\n ${prefix}uptime\\n ${prefix}freepope\\n ${prefix}poll`;

const changelog = `- https://log833.github.io/cd-bot-source/changelog.html`;

function sendMsg(msg) {
    setTimeout(() => {
        socket.emit("talk", { text: msg });
    }, 200);
}

setTimeout(() => { cmd(`name ${botname}`); }, 1000);
setTimeout(() => { cmd(`color red`); }, 1000);
setTimeout(() => { cmd(`hat sprout`); }, 1000);
setTimeout(() => { sendMsg(`Clanker Dask Is Fucking Here. Type ${prefix}help To See Commands. Created By DPH.`); }, 1100);
setInterval(() => {
        socket.emit("typing", 1);
    }, 60000);
setInterval(() => {
        socket.emit("typing", 0);
    }, 60002);
setInterval(() => {
        sendMsg(`Clanker Dask Is Still Here. Type ${prefix}help To See Commands. Fuck Yeah.`)
    }, 60003);

socket.on("talk", (message) => {
    const text = message.text;

    if (text === prefix + "help") return sendMsg(help);       
    if (text === prefix + "help1") return sendMsg(help1);
    if (text === prefix + "help2") return sendMsg(help2);
    if (text === prefix + "changelog") return sendMsg(changelog);
    if (text === prefix + "version") return sendMsg(version);
    if (text.startsWith(prefix + "echo")) return sendMsg(text.substring(prefix.length + 5));
    if (text.startsWith(prefix + "say")) return sendMsg(text.substring(prefix.length + 4));
    if (text === prefix + "backflip") return cmd(`backflip`);
    if (text === prefix + "joke") return cmd(`joke`);
    if (text === prefix + "triggered") return cmd(`triggered`);
    if (text === prefix + "fact") return cmd(`fact`);
    if (text === prefix + "france") return cmd(`france`);
    if (text.startsWith(prefix + "poll")) return cmd(`poll ${text.substring(prefix.length + 5)}`);
    if (text.startsWith(prefix + "hat")) return cmd(`hat ${text.substring(prefix.length + 4)}`);
    if (text.startsWith(prefix + "color")) return cmd(`color ${text.substring(prefix.length + 6)}`);
    if (text.startsWith(prefix + "name")) return cmd(`name ${text.substring(prefix.length + 5)}`);
    if (text.startsWith(prefix + "asshole")) return cmd(`asshole ${text.substring(prefix.length + 7)}`);
    if (text.startsWith(prefix + "resetname")) return cmd(`name ${botname}`);
    if (text.startsWith(prefix + "resetcolor")) return cmd(`color red`);
    if (text.startsWith(prefix + "resethat")) return cmd(`hat sprout`);
    if (text === prefix + "restore") {
        cmd(`color red`);
        cmd(`hat sprout`);
        cmd(`name ${botname}`)
    }   
        
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

    if (text.startsWith(prefix + "ship")) {
        const users = text.substring(prefix.length + 5).split(" and ");
        if (users.length !== 2) return sendMsg("Names Plz!\\n Example: ,ship he and she");
        const percent = Math.floor(Math.random() * 101);
        return sendMsg(`${users[0]} ❤️ ${users[1]} = ${percent}% Love!`);
    } 
    if (text === prefix + "llama") {
        return sendMsg("- ^^**U GOT THE LLAMA**^^");
    }
    if (text === prefix + "source") {
        return sendMsg("- ^^**SOURCE CODE:**^^\\n https://log833.github.io/cd-bot-source/bot.js");
    }
    if (text === prefix + "parrot") {
        return sendMsg("- ^^**U GOT THE PARROT**^^");
    }
    if (text === prefix + "cow") {
        return sendMsg("- ^^**U GOT THE COW**^^");
    }
    if (text === prefix + "lumi") {
        cmd(`image https://files.catbox.moe/mc9mdo.png`);
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
    const name = text.substring(prefix.length + 2);
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
    if (text === prefix + "aplle") {
        return sendMsg("- ^^**U GOT THE APLLE**^^");
    }
    if (text.startsWith(prefix + "stfu")) {
    const userxd2 = text.substring(prefix.length + 4);
    const stfus = [
            `${userxd2} shut the fuck up, NOW!`,
            `${userxd2} shut the fuck up, because I'm tired of your bullshit`
        ];
        const stfu = stfus[Math.floor(Math.random() * stfus.length)];
        return sendMsg(stfu);
    }
    if (text.startsWith(prefix + "fuk")) {
        const thingxd = text.substring(prefix.length + 3).trim();
    setTimeout(function(){
        sendMsg(`Guess The ${thingxd}`);
    }, 200);
    setTimeout(function(){
        sendMsg("IT'S A FUCKING [[fVk]]");
    }, 1000);
 }
 if (text.startsWith(prefix + "coinflip")) {
        const coinflips = [
            `- 🪙Landed On, ^^HEADS^^`,
            `- 🪙Landed On, ^^TAILS^^`
        ];
        const coinflip = coinflips[Math.floor(Math.random() * coinflips.length)];
        return sendMsg(coinflip);
 }
 if (text.startsWith(prefix + "repeat")) {
    const args = text.substring(prefix.length + 7).trim().split(" ");

    const count = parseInt(args[args.length - 1], 10);

    if (isNaN(count) || count < 1 || count > 20) {
        return sendMsg("Text Plz!\\n Example: ,repeat Example 5");
    }

    const msg = args.slice(0, -1).join(" ");

    if (!msg) {
        return sendMsg("Text Plz!\\n Example: ,repeat Example 5");
    }

    return sendMsg(Array(count).fill(msg).join(" "));
 }
 if (text === prefix + "apllefy") {
        cmd(`color red`);
        cmd(`hat sprout`);
        cmd(`name Aplle`);
        sendMsg(`**^^MY APLLES!^^**`)
 }
 if (text.startsWith(prefix + "8ball")) {
    const question = text.substring(prefix.length + 6).trim();

    if (!question) {
        return sendMsg("Question Plz!\\n Example: ,8ball Example");
    }

    const answers = [
        "Yes, Definitely",
        "No Way",
        "Maybe",
        "Ask Again Later",
        "The Bonzis Says Yes",
        "IDFK",
        "100% Confirmed",
        "Probably Not",
        "Never"
    ];

    const answer = answers[Math.floor(Math.random() * answers.length)];

    return sendMsg(`${answer}`);
 }
 if (text === prefix + "uptime") {
    const seconds = Math.floor((Date.now() - startTime) / 1000);

    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    return sendMsg(
        `Clanker Dask Uptime:\n${hours}h ${minutes % 60}m ${seconds % 60}s`
    );
 }
  if (text === prefix + "freepope") {
      cmd(`freepope`);
      sendMsg(`Dats It, Bēnned`)
 }
});
