export default function birthdays(setor, funcionarios){
    let func = []
    funcionarios.forEach(element => {
        if(element.setor == setor){
            func.push(element)
        }
    });
    return func
}