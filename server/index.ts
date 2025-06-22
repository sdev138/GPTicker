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
            price: 'credits_100', // the value in the quotation marks is the price id '{{PRICE_ID}}'
            quantity: 1,
        }
    ],
    mode: 'payment',
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