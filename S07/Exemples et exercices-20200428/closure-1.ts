function logger(name) {
    let separator = ": ";
    function log(message){
        console.log(name + separator + message);
    }
    return log
}

let my_logger = logger("UTC503");
my_logger("J'ai capturé name et separator !");

