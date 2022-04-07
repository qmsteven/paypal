var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', (req, res, next) => {
  res.render('library', { title: 'Library' });
});

router.post('/payScoundrel', function(req, res,next) {
  const create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "http://localhost:3000/success",
        "cancel_url": "http://localhost:3000/cancel"
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "Scoundrel",
                "sku": "001",
                "price": "22.99",
                "currency": "CAD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "CAD",
            "total": "22.99"
        },
        "description": "book"
    }]
};

paypal.payment.create(create_payment_json, function (error, payment) {
  if (error) {
      throw error;
  } else {
      for(let i = 0;i < payment.links.length;i++){
        if(payment.links[i].rel === 'approval_url'){
          res.redirect(payment.links[i].href);
        }
      }
  }
});
});


router.get('/success', function(req, res,next)  {
const payerId = req.query.PayerID;
const paymentId = req.query.paymentId;

const execute_payment_json = {
  "payer_id": payerId,
  "transactions": [{
      "amount": {
          "currency": "USD",
          "total": "25.00"
      }
  }]
};

// Obtains the transaction details from paypal
paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
    //When error occurs when due to non-existent transaction, throw an error else log the transaction details in the console then send a Success string reposponse to the user.
  if (error) {
      console.log(error.response);
      throw error;
  } else {
      console.log(JSON.stringify(payment));
      res.render('success', { title: 'Transaction successful' });
    }
});
});

router.get('/cancel', function(req, res,next){
res.render('cancel', { title: 'Transaction cancelled' });

});

module.exports = router;
