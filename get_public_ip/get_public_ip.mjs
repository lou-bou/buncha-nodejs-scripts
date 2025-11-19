const IP_API_URL = "https://api.ipify.org?format=json"

function genIpInfoUrl(ip) {
    return `https://ipinfo.io/${ip}/geo`;
}

async function getIP() {
    try {
        console.log("Fetching IP...");
        const res = await fetch(IP_API_URL);
        const data = await res.json();
        console.log(`Your current public IP is: ${data.ip}`);
        try { // ignored if fails
            console.log("");
            console.log("Fetching IP info...");
            const res2 = await fetch(genIpInfoUrl(data.ip));
            const data2 = await res2.json();
            console.log("-------IP INFO-------");
            console.log(data2);
        } catch (err2) {
            console.log(err2);
        }
    } catch (err) {
        console.log(err);
    }
    console.log("");
    console.log("TERMINATED.");
}

getIP();