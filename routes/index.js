var express = require('express');
var router = express.Router();

//added for paypal integration
const paypal = require('paypal-rest-sdk');

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AQjbDEnbhyigK_0H4wc_ehW2WEw8BR2ital2NI2bTQdNW7vrU_OLIm4-lWZhsshuaQWPVqg4Q-r9pP8C',
  'client_secret': 'EDiNkKwOE3F7NPpJkrRBKa8lGn3vXa5TyGrXNClbf7epbC4nx__hvwbcTxbmxwdBHisQYDQegCCIw817'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PayPal Integration Demo' });
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

router.post('/payWhatRealityTVSaysAboutUs', function(req, res,next) {
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
                "name": "True Story: What Reality TV Says About Us",
                "sku": "003",
                "price": "20.99",
                "currency": "CAD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "CAD",
            "total": "20.99"
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

router.post('/payTheInvisibleKingdom', function(req, res,next) {
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
                "name": "The Invisible Kingdom",
                "sku": "002",
                "price": "18.99",
                "currency": "CAD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "CAD",
            "total": "18.99"
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

router.post('/payAnthem', function(req, res,next) {
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
                "name": "Anthem",
                "sku": "004",
                "price": "19.99",
                "currency": "CAD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "CAD",
            "total": "19.99"
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

router.post('/payOlgaDiesDreaming', function(req, res,next) {
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
                "name": "Olga Dies Dreaming",
                "sku": "005",
                "price": "17.99",
                "currency": "CAD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "CAD",
            "total": "17.99"
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

router.post('/payToParadise', function(req, res,next) {
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
                "name": "To Paradise",
                "sku": "006",
                "price": "19.99",
                "currency": "CAD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "CAD",
            "total": "19.99"
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

router.post('/payHowCivilWarsStart', function(req, res,next) {
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
                "name": "How Civil Wars Start",
                "sku": "007",
                "price": "20.99",
                "currency": "CAD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "CAD",
            "total": "20.99"
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

router.post('/payHowHighWeGoInTheDark', function(req, res,next) {
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
                "name": "How High We Go in the Dark",
                "sku": "008",
                "price": "21.99",
                "currency": "CAD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "CAD",
            "total": "21.99"
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

router.post('/payNotesOnAnExecution', function(req, res,next) {
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
                "name": "Notes on an Execution",
                "sku": "009",
                "price": "17.99",
                "currency": "CAD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "CAD",
            "total": "17.99"
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

router.post('/paySouthToAmerica', function(req, res,next) {
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
                "name": "South To America",
                "sku": "010",
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

router.post('/payVladimir', function(req, res,next) {
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
                "name": "Vladimir",
                "sku": "011",
                "price": "19.99",
                "currency": "CAD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "CAD",
            "total": "19.99"
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

router.post('/payTheEmployees', function(req, res,next) {
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
                "name": "The Employees",
                "sku": "012",
                "price": "15.99",
                "currency": "CAD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "CAD",
            "total": "15.99"
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

router.post('/payThankYouMrNixon', function(req, res,next) {
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
                "name": "Thank You, Mr. Nixon",
                "sku": "013",
                "price": "24.99",
                "currency": "CAD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "CAD",
            "total": "24.99"
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

router.post('/payMoonWitchSpiderKing', function(req, res,next) {
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
                "name": "Moon Witch, Spider King",
                "sku": "014",
                "price": "23.99",
                "currency": "CAD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "CAD",
            "total": "23.99"
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

router.post('/payGroundsKeeping', function(req, res,next) {
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
                "name": "Groundskeeping",
                "sku": "015",
                "price": "17.99",
                "currency": "CAD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "CAD",
            "total": "17.99"
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

router.post('/payTrustThePlan', function(req, res,next) {
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
                "name": "Trust The Plan",
                "sku": "016",
                "price": "14.99",
                "currency": "CAD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "CAD",
            "total": "14.99"
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

router.post('/payHowToTakeOverTheWorld', function(req, res,next) {
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
                "name": "How to Take Over the World",
                "sku": "017",
                "price": "27.99",
                "currency": "CAD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "CAD",
            "total": "27.99"
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

router.post('/payAncestorTrouble', function(req, res,next) {
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
                "name": "Ancestor Trouble",
                "sku": "018",
                "price": "26.99",
                "currency": "CAD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "CAD",
            "total": "26.99"
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

router.post('/payAmericanDirt', function(req, res,next) {
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
                "name": "American Dirt",
                "sku": "019",
                "price": "13.99",
                "currency": "CAD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "CAD",
            "total": "13.99"
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

router.post('/payTheGreatAlone', function(req, res,next) {
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
                "name": "The Great Alone",
                "sku": "020",
                "price": "18.99",
                "currency": "CAD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "CAD",
            "total": "18.99"
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

router.post('/payThePaperPalace', function(req, res,next) {
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
                "name": "The Paper Palace",
                "sku": "021",
                "price": "18.99",
                "currency": "CAD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "CAD",
            "total": "18.99"
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

router.post('/payTheSilentWife', function(req, res,next) {
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
                "name": "The Silent Wife",
                "sku": "022",
                "price": "5.99",
                "currency": "CAD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "CAD",
            "total": "5.99"
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

router.post('/payTheNightingale', function(req, res,next) {
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
                "name": "The Nightingale",
                "sku": "023",
                "price": "16.99",
                "currency": "CAD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "CAD",
            "total": "16.99"
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

router.post('/payTheMaid', function(req, res,next) {
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
                "name": "The Maid",
                "sku": "024",
                "price": "16.99",
                "currency": "CAD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "CAD",
            "total": "16.99"
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

router.post('/payTheSilentPatient', function(req, res,next) {
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
                "name": "The Silent Patient",
                "sku": "025",
                "price": "12.99",
                "currency": "CAD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "CAD",
            "total": "12.99"
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

router.post('/payItEndsWithUs', function(req, res,next) {
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
                "name": "It Ends with Us",
                "sku": "026",
                "price": "14.99",
                "currency": "CAD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "CAD",
            "total": "14.99"
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

router.post('/payWeWereLiars', function(req, res,next) {
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
                "name": "We Were Liars",
                "sku": "027",
                "price": "9.99",
                "currency": "CAD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "CAD",
            "total": "9.99"
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

router.post('/payPeopleWeMeetOnVacation', function(req, res,next) {
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
                "name": "People We Meet On Vacation",
                "sku": "028",
                "price": "20.99",
                "currency": "CAD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "CAD",
            "total": "20.99"
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

router.post('/payTheSevenHusbandsOfEvelynHugo', function(req, res,next) {
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
                "name": "The Seven Husbands of Evelyn Hugo",
                "sku": "029",
                "price": "13.99",
                "currency": "CAD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "CAD",
            "total": "13.99"
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

router.post('/payBeforeWeWereYours', function(req, res,next) {
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
                "name": "Before We Were Yours",
                "sku": "030",
                "price": "14.99",
                "currency": "CAD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "CAD",
            "total": "14.99"
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

router.post('/pay', function(req, res,next) {
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
                  "name": "Nike Shoes",
                  "sku": "001",
                  "price": "25.00",
                  "currency": "USD",
                  "quantity": 1
              }]
          },
          "amount": {
              "currency": "USD",
              "total": "25.00"
          },
          "description": "shoes"
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


router.get('/success', function(req, res, next)  {
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
