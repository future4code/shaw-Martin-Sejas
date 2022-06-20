const fs = require('fs'); 


if(process.argv[2] !== undefined)
{
   
    fs.appendFile("tarefas.txt", `${process.argv[2]}\n`, (err) => {
        if(err) console.log(err); 

        else {
            console.log('\x1b[33m Tarefa adicionada com sucesso!\n \x1b[36m ');

             
                fs.readFile('./tarefas.txt', {
                        encoding: 'utf8',
                        flag: 'r'
                    },
                    function (err, data) {
                        if (err)
                            console.log(err);
                        else
                            console.table(data);
                    }
                )
           
        }
    })
} 

else {
    console.log("\x1b[31m ERRO: Por favor adicionar tarefa no terminal \x1b")
}



