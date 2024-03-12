let x = 3

try {

    console.log(`Value of x is ${x}`)
}
catch(error) {
    console.log(error.message, ", Error")
}
finally {
    console.log("statement executed successfully!")
}

let n = 0

let otps = []

while (n < 1) {
    let otp = String(Math.floor(Math.random() * 10000))

    if (otp.length === 4) {
        console.log(Number(otp))
        n = 1
    }
}