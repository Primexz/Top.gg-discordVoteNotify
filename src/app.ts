import express from 'express';
import * as topGG from '@top-gg/sdk'
import helmet from "helmet";
import 'dotenv/config';
import {constructEmbed} from "./modules";
import fetch from 'node-fetch';

//env variables
const apiPort: string = process.env.WEB_PORT;
const authSecret: string = process.env.WH_AUTHORIZATION;
const tggRoute: string = process.env.WH_ROUTE;
const discordWebhook = process.env.DC_WEBHOOK;

//create express web-app
const app = express();
app.use(helmet());

const tggHook = new topGG.Webhook(authSecret);

//POST route to receive topGG votes
app.post(tggRoute, tggHook.listener(vote => {
    fetch(discordWebhook, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(constructEmbed(vote.bot, vote.user))
    }).then(res => {
        console.log(res);
    })
}))

//start express
app.listen(apiPort, () => {
    console.log(`Top-GG Vote Listenener was successfully started on port: ${apiPort}!`);
})