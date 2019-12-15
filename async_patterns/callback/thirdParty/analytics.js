const tracking_calling_one_time = (data, callback) => {
  console.log("tracking order");
  callback();
};

const tracking_calling_multiple_times = (data, callback) => {
  console.log("tracking order");
  callback();
  callback();
  callback();
};

const tracking_calling_zero_time = (data, callback) => {
  console.log("tracking order");
};

module.exports.analytics = {
  trackPurchase: tracking_calling_multiple_times,
};
