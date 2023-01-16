require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SKEY);

exports.handler = async (e) => {
    try {
     
    const { amount } = JSON.parse(e.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      payment_method_types: ["card"],
      currency: "usd",
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });
    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
