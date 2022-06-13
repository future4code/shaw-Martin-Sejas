const MensagemAssincorona = () => {
    return new Promise( (resolve, reject) => {
       setInterval( ()=>{}, 5000);
       resolve(console.log("Oi"))

    })
}


let main = async () => {
    MensagemAssincorona()
}

