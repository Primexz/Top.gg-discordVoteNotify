import express from 'express';
import * as topGG from '@top-gg/sdk'
import helmet from "helmet";
import 'dotenv/config';

//env variables
const apiPort: string = process.env.WEB_PORT;
const authSecret: string = process.env.WH_AUTHORIZATION;
const tggRoute: string = process.env.WH_ROUTE;

//create express web-app
const app = express();
app.use(helmet());

const tggHook = new topGG.Webhook(authSecret)

//route to receive topGG votes
app.post(tggRoute, tggHook.listener(vote => {

}))

//start express
app.listen(apiPort, () => {
    console.log(`Top-GG Vote Listenener was successfully started on port: ${apiPort}!`);
})


