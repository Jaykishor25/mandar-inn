// 📂 server/routes/payment.js
import express from 'express';
import Razorpay from 'razorpay';
import crypto from 'crypto';

const router = express.Router();

// Razorpay Instance Creator (Hamesha .env se real-time keys uthayega)
const getRazorpayInstance = () => {
  return new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
};

// 1. CREATE ORDER ENDPOINT (User jab checkout click karega)
router.post('/orders', async (req, res, next) => {
  try {
    const { amount } = req.body;
    if (!amount) return res.status(400).json({ message: "Amount parameter is required." });

    const instance = getRazorpayInstance();
    const options = {
      amount: Math.round(amount * 100), // Rupees ko Paise mein convert kiya (Razorpay standard)
      currency: "INR",
      receipt: `rcpt_prod_${Date.now()}`,
    };

    const order = await instance.orders.create(options);
    
    // Frontend ko order details ke sath Key ID bhi bhej rahe hain taaki login automatic ho
    return res.status(200).json({
      ...order,
      key_id: process.env.RAZORPAY_KEY_ID
    });
  } catch (error) {
    next(error);
  }
});

// 2. VERIFY PAYMENT SIGNATURE (Security Layer - Fake payments rokne ke liye)
router.post('/verify', async (req, res, next) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
    hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const generatedSignature = hmac.digest("hex");

    if (generatedSignature === razorpay_signature) {
      return res.status(200).json({ success: true, message: "Payment verified successfully. 🎉" });
    } else {
      return res.status(400).json({ success: false, message: "Payment signature mismatch. Unsecure request." });
    }
  } catch (error) {
    next(error);
  }
});

export default router;