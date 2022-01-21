export default function alphabetical(funcionarios){
    let func = funcionarios.sort(function(a,b){
        if(a.nome < b.nome) {
            return -1;
        }else{
            return true;
        }
    });
    return func;
}