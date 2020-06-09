// Ecrivez une version curryfiée de la fonction suivante
// à l'aide de fonctions lambda 
/*function format_message(from, to, message){
    return "From: " + from + ", To: " + to + " - Msg: " + message;
}*/
let format = from => To =>  Msg => console.log("From: " + from + ", To: " + To + " - Msg: " + Msg);
let FromMessage=format("Moi")
let To_message=FromMessage("Toi")
To_message("Objet");