import express from 'express';
import topGG from '@top-gg/sdk';
import helmet from "helmet";
import 'dotenv/config';

const apiPort = process.env.WEB_PORT;

//create express web-app
const app = express();
app.use(helmet());



//start express
app.listen(apiPort, () => {
    console.log(`Top-GG Vote Listenener was successfully started on port: ${apiPort}!`);
})


