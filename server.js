const app =  require("./app");
const config = require("./app/config");

//start server
const PORT = config.app.port;
app.listenerCount(PORT, () => {
    console.log(`Server is runnning on port ${PORT}.`);
});