module.exports.signUpErrors = (err) => {

    let errors = { pseudo: '', mail: '', password: ''}
    if (err.message.includes('pseudo')) 
        errors.pseudo = "Incorrect pseudo or already in use"

    if (err.message.includes('mail'))
        errors.email = "Incorrect mail"

    if (err.message.includes('password'))
        errors.password = "Password should be atleast 6 digits"

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('pseudo'))
        errors.pseudo = "Pseudo already taken"

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('mail'))
        errors.email = "Mail already taken"

    return errors
}

module.exports.signInErrors = (err) => {
    
    let errors = { mail: "", password: ""}

    if (err.message.includes("mail"))
        errors.mail = "Mail unknown"
        
    if (err.message.includes("password"))
        errors.password = "Incorrect password"

    return errors
}
