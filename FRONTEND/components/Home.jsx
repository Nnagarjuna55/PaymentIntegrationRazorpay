// Home.js
import React from "react";
import axios from "axios";
import Card from "./Card";
import product1 from "../components/Images/Camera.jpg";
import product2 from "../components/Images/Camera2.jpg";
import product3 from "../components/Images/Laptop.jpg";
import product4 from "../components/Images/Mobile.jpg";

const Home = () => {
  const checkoutHandler = async (amount) => {
    try {
      // Fetch the API key
      const {
        data: { key },
      } = await axios.get("http://localhost:4000/api/getkey");

      // Create the order
      const {
        data: { order },
      } = await axios.post("http://localhost:4000/api/checkout", { amount });

      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "Programmer",
        description: "RazorPay",
        image: "",
        order_id: order.id,
        callback_url: "http://localhost:4000/api/paymentverification",
        prefill: {
          name: "Nagarjuna",
          email: "nagarjuna577@gmail.com.com",
          contact: "9390050817",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#121212",
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error(
        "Checkout handler error:",
        error.response ? error.response.data : error.message
      );
      alert(
        "There was an issue processing your payment. Please try again later."
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-screen-lg">
        <Card
          amount={5000}
          img={product1} // Using imported image product1
          checkoutHandler={checkoutHandler}
        />
        <Card
          amount={3000}
          img={product2} // Using imported image product2
          checkoutHandler={checkoutHandler}
        />
        <Card
          amount={8000}
          img={product3} // Using imported image product3
          checkoutHandler={checkoutHandler}
        />
        <Card
          amount={7000}
          img={product4} // Using imported image product4
          checkoutHandler={checkoutHandler}
        />
      </div>
    </div>
  );
};

export default Home;
