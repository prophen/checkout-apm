const fundingSources = ["paypal", "card", "paylater"];
fundingSources.forEach((fundingSource) => {
  // Render the PayPal Marks
  paypal
    .Marks({ fundingSource: fundingSource })
    .render(`#${fundingSource}-mark-container`);
  // Render PayPal Buttons
  paypal
    .Buttons({
      fundingSource: fundingSource,
      // Sets up the transaction when a payment button is clicked
      createOrder: function () {
        return fetch("/my-server/create-paypal-order", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          // use the "body" param to optionally pass additional order information
          // like product skus and quantities
          body: JSON.stringify({
            cart: [
              {
                sku: "YOUR_PRODUCT_STOCK_KEEPING_UNIT",
                quantity: "YOUR_PRODUCT_QUANTITY",
              },
            ],
          }),
        })
          .then((response) => response.json())
          .then((order) => order.id);
      },
      // Finalize the transaction after payer approval
      onApprove: function (data) {
        return fetch("/my-server/capture-paypal-order", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orderID: data.orderID,
          }),
        })
          .then((response) => response.json())
          .then((orderData) => {
            // Successful capture! For dev/demo purposes:
            console.log(
              "Capture result",
              orderData,
              JSON.stringify(orderData, null, 2)
            );
            const transaction =
              orderData.purchase_units[0].payments.captures[0];
            alert(
              "Transaction " +
                transaction.status +
                ": " +
                transaction.id +
                "\n\nSee console for all available details"
            );
            // When ready to go live, remove the alert and show a success message within this page. For example:
            // var element = document.getElementById('paypal-button-container');
            // element.innerHTML = '<h3>Thank you for your payment!</h3>';
            // Or go to another URL:  actions.redirect('thank_you.html');
          });
      },
    })
    .render(`#${fundingSource}-button-container`);
});

// Listen for changes to the radio buttons
document.querySelectorAll("input[name=payment-option]").forEach(function (el) {
  el.addEventListener("change", function (event) {
    // If PayPal is selected, show the PayPal button
    if (event.target.value === "paypal") {
      document.body.querySelector(
        "#alternative-button-container"
      ).style.display = "none";
      document.body.querySelector("#paypal-button-container").style.display =
        "block";
      document.body.querySelector("#card-button-container").style.display =
        "none";
      document.body.querySelector("#paylater-button-container").style.display =
        "none";
    }
    if (event.target.value === "card") {
      document.body.querySelector(
        "#alternative-button-container"
      ).style.display = "none";
      document.body.querySelector("#card-button-container").style.display =
        "block";
      document.body.querySelector("#paypal-button-container").style.display =
        "none";
      document.body.querySelector("#paylater-button-container").style.display =
        "none";
    }
    if (event.target.value === "paylater") {
      document.body.querySelector(
        "#alternative-button-container"
      ).style.display = "none";
      document.body.querySelector("#card-button-container").style.display =
        "none";
      document.body.querySelector("#paypal-button-container").style.display =
        "none";
      document.body.querySelector("#paylater-button-container").style.display =
        "block";
    }
    // If alternative funding is selected, show a different button
    if (event.target.value === "alternative") {
      document.body.querySelector(
        "#alternative-button-container"
      ).style.display = "block";
      document.body.querySelector("#paypal-button-container").style.display =
        "none";
      document.body.querySelector("#paylater-button-container").style.display =
        "none";
      document.body.querySelector("#card-button-container").style.display =
        "none";
    }
  });
});

// Hide non-PayPal button by default
document.body.querySelector("#alternative-button-container").style.display =
  "none";
document.body.querySelector("#card-button-container").style.display = "none";
document.body.querySelector("#paylater-button-container").style.display =
  "none";
