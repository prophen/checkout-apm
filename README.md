# PayPal Standard Checkout with Alternative Payment Methods

This folder contains example code for a standard PayPal integration using both the JS SDK and node.js to complete transactions with the PayPal REST API.

## Instructions

1. [Create an application](https://developer.paypal.com/dashboard/applications/sandbox/create)
3. Rename `.env.example` to `.env` and update `CLIENT_ID` and `APP_SECRET`
2. Replace `test` in `public/index.html` with your app's client-id
4. Run `npm install`
5. Run `npm start`
6. Open http://localhost:8888
7. Click "PayPal" and log in with one of your [Sandbox test accounts](https://developer.paypal.com/dashboard/accounts)


![User interface for checkout with four payment options and a corresponding payment button for each option upon selection. The choices are pay with PayPal, debit/credit card, Pay Later, and (fictional) Monkey Cash for example of an PayPal alternative method.](https://user-images.githubusercontent.com/3941856/222966705-9c27076b-997d-4681-ae7c-46bc84136ca3.png)

