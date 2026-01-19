console.log(process.cwd());

console.log(process.pid);

console.log(process.version);

console.log(process.memoryUsage());

if(process.memoryUsage() > 61261651) process.exit(1)

process.exit(9)

console.log('hola');
