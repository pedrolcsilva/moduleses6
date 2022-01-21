import funcionarios from "../app.js";

export default function alphabetical(req, res){
    let func = funcionarios.sort(function(a,b){
        if(a.nome < b.nome) {
            return -1;
        }else{
            return true;
        }
    });
    res.send(func)
}