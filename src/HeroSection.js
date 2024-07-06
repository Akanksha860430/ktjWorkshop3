import React from 'react';
import wallet from './wallet.jpg';

export default function HeroSection() {
  return (
    <div>
        <div className="HeroSection">
      <div className="left">
      <h2>Your Wallet, Your Wealth</h2>
      <h4>"Track Your Spending, Count Your Savings, and Watch Your Wealth Grow."</h4>
      </div>
      <div className="right">
        <img src={wallet} alt="wallet" />
      </div>
    </div>
    </div>
  );
}
