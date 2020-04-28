// Ecrivez une version curryfiée de la fonction suivante
// à l'aide de fonctions lambda 

/*function format_message(from, to, message){
    return "From: " + from + ", To: " + to + "Msg: " + message;
}*/

let format_message = separator => from => to => message => console.log("From"+ separator + from + ", To"+ separator + to + "- Msg"+ separator + message);
let separatorMessage= format_message(": ");
let fromMessage= separatorMessage("Cyril");
let toMessage = fromMessage("CNAM");
let my_format_message = toMessage("Demande de bonne note: ")