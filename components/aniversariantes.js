export default function birthdays(month, funcionarios){
    let func = []
    funcionarios.forEach(element => {
        if(element.dataN.getMonth() + 1 == month){
            func.push(element)
        }
    });
    return func
}