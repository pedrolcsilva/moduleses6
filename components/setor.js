import funcionarios from "../app.js";

export default function birthdays(setor){
    let func = []
    funcionarios.forEach(element => {
        if(element.setor == setor){
            func.push(element)
        }
    });
    return func
}