import dotenv from 'dotenv'
dotenv.config();
import { ChatGPTUnofficialProxyAPI } from 'chatgpt'
import express from 'express';
import { Server } from "socket.io";

const app = express();

app.get("/", (req, res) => {
    res.send("hello");
});

app.listen(process.env.PORT);


async function main() {
    try {
    } catch (error) {
        if (error.response) {
            console.log("Status:",error.response.status);
            console.log("Data:",error.response.data);
        } else {
            console.log("Message:",error.message);
        }
        console.error(error);
    }
}

main();