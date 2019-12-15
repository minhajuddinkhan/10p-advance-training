const { analytics } = require("./thirdParty/analytics");

const purchaseData = {
  productId: 1,
  productCategory: 'Electronics',
}

const chargeCreditCard = () => {
  console.log('charging credit card');
}

const displayThankyouPage = () => {
  console.log('displaying thank you page');
}

/*
* Call the callback too early
* Call the callback too late (or never)
* Call the callback too few or too many times
* Fail to pass along any necessary environment/parameters
* Swallow any errors/exceptions that may happen
*/
analytics.trackPurchase(purchaseData, function() {
  chargeCreditCard();
  displayThankyouPage();
});
