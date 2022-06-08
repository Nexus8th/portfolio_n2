module.exports.signUpErrors = (err) => {

    let errors = { pseudo: '', email: '', password: ''}
    if (err.message.includes('pseudo')) 
        errors.pseudo = "Incorrect pseudo or already in use"

    if (err.message.includes('email'))
        errors.email = "Incorrect mail"

    if (err.message.includes('password'))
        errors.password = "Password should be atleast 6 digits"

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('pseudo'))
        errors.pseudo = "Pseudo already taken"

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('email'))
        errors.email = "Mail already taken"

    return errors
}

module.exports.signInErrors = (err) => {
    
    let errors = { email: "", password: ""}

    if (err.message.includes("email"))
        errors.email = "Mail unknown"
        
    if (err.message.includes("password"))
        errors.password = "Incorrect password"

    return errors
}
