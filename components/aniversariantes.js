import funcionarios from "../app.js";

export default function birthdays(month){
    let func = []
    funcionarios.forEach(element => {
        if(element.dataN.getMonth() + 1 == month){
            func.push(element)
        }
    });
    return func
}