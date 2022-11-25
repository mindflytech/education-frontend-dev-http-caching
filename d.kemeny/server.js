const express = require("express");
const path = require("path");
const app = express();

app.get("/",(request, res)=>{
    res.set("Cache-Control", "no-cache, no-store, max-age=0, must-revalidate");
    res.sendFile(path.resolve(__dirname, "client", "index.html"));
})

app.use(express.static("./client",{
    etag:false,
    lastModified:false,
    maxAge:300000000,
}))

app.listen(4000,()=>{
    console.log("server started on port: 4000")
})
