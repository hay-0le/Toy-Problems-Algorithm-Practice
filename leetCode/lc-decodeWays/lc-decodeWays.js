var numDecodings = (message, count = 0, first = true) => {
    if (message[0] === "0" || message === "00") return 0;
    first = false;

    if (message.length <= 1) {
    console.log("message", message.length)
    console.log("count", count)

        return message !== "0" ? 1 : 0;
    }

    if (message[0] !== "0") {
        console.log("first message", message)
        count += numDecodings(message.slice(1), count, first)}

    if (message.slice(0, 2) <= 26 && message.slice(0, 2) >= 10) {
        console.log("second message", message)
        count += numDecodings(message.slice(2), count, first)
    }
    
    return count;
}

console.log(numDecodings("12120"))