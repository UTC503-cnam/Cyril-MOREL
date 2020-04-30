let logger = separator => name => message => console.log(name + separator + message);
let colonLogger = logger(": ");
let spaceLogger = logger(" ");
let my_logger = colonLogger("UTC503");
// Ou aussi let my_logger = createLogger(": ")("UTC503");
my_logger("J'ai capturé name et separator !");