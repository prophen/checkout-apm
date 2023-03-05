# PayPal Standard Checkout with Alternative Payment Methods

This repo contains example code for a standard PayPal integration using both the JS SDK and node.js to complete transactions with the PayPal REST API. 

## Instructions

1. [Create an application](https://developer.paypal.com/dashboard/applications/sandbox/create)
3. Rename `.env.example` to `.env` and update `CLIENT_ID` and `APP_SECRET`
2. Replace `test` in `public/index.html` with your app's client-id
4. Run `npm install`
5. Run `npm start`
6. Open http://localhost:8888
7. Click "PayPal" and log in with one of your [Sandbox test accounts](https://developer.paypal.com/dashboard/accounts)

## Demo

The GIF below shows a user interface for checkout with four payment options and a corresponding payment button for each option upon selection. The choices are pay with PayPal, debit/credit card, Pay Later, and (fictional) Monkey Cash for an example of a PayPal alternative payment method.
![User interface for checkout with four payment options and a corresponding payment button for each option upon selection. The choices are pay with PayPal, debit/credit card, Pay Later, and (fictional) Monkey Cash for example of a PayPal alternative method.](https://user-images.githubusercontent.com/3941856/222966829-e597b931-09ff-45d2-8718-2ee65e18a8eb.gif)
