import express from "express";
import dotenv from "dotenv";
const app = express()
const port = 3000
dotenv.config();

const stripeSecretKey = process.env.SECRET_KEY;
const stripe = require('stripe')()

const session = await stripe.checkout.sessions.create({
    line_items: [
        {
            price: 'credits_100', 
            quantity: 1,
        },
        {
            price: 'credits_50',
            quantity: 1,
        },
        {
            price: 'credits_10',
            quantity: 1,
        },
        {
            price: 'credits_20',
            quantity: 1,
        },
        {
            price: 'credits_150',
            quantity: 1,
        }
    ],
    mode: 'payment',
    // put the domain here once verification is approved
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
});
res.redirect(303, session.url);

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.length("/api/gpus", (req, res) => {
    // returning the gpu data here
    res.json([]);
});

app.listen(3001, () = console.log("API running on port 3000"));