try {

    console.log(`Value of x is ${x}`)
}
catch(error) {
    console.log(error.message, ", Error")
}
finally {
    console.log("statement executed successfully!")
}

console.log()