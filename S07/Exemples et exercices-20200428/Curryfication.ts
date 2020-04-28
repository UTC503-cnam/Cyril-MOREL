function logger(name, message){
    let separator = ": ";
    console.log(name + separator + message);
}
let my_logger = logger("UTC503","J'ai capturé name et separator !");