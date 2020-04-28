let logger = espace => separator => name => message => console.log( name + separator + espace + message);
let spaceLogger = logger(" ");
let colonLogger = spaceLogger(":");
let my_logger = colonLogger("UTC503");

// Ou aussi let my_logger = createLogger(": ")("UTC503");
my_logger("J'ai capturé name et separator !");