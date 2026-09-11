import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Lite',
      price: isYearly ? '399' : '40',
      period: isYearly ? '/year' : '/mo',
      description: 'Perfect for using in a personal website or a client project.',
      buttonText: 'Buy Lite',
      features: [
        { name: 'All UI Components', included: true },
        { name: 'Use with Unlimited Projects', included: true },
        { name: 'Commercial Use', included: true },
        { name: 'Email Support', included: true },
        { name: 'Lifetime Access', included: false },
        { name: 'Free Lifetime Updates', included: false },
      ],
    },
    {
      name: 'Basic',
      price: isYearly ? '789' : '399',
      period: isYearly ? '/year' : '/mo',
      description: 'Perfect for using in a personal website or a client project.',
      buttonText: 'Buy Basic',
      features: [
        { name: 'All UI Components', included: true },
        { name: 'Use with Unlimited Projects', included: true },
        { name: 'Commercial Use', included: true },
        { name: 'Email Support', included: true },
        { name: 'Lifetime Access', included: true },
        { name: 'Free Lifetime Updates', included: false },
      ],
    },
    {
      name: 'Plus',
      price: isYearly ? '999' : '589',
      period: isYearly ? '/year' : '/mo',
      description: 'Perfect for using in a personal website or a client project.',
      buttonText: 'Buy Plus',
      features: [
        { name: 'All UI Components', included: true },
        { name: 'Use with Unlimited Projects', included: true },
        { name: 'Commercial Use', included: true },
        { name: 'Email Support', included: true },
        { name: 'Lifetime Access', included: true },
        { name: 'Free Lifetime Updates', included: true },
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Simple and Affordable Pricing
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-sm font-semibold ${!isYearly ? 'text-white' : 'text-gray-400'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="w-14 h-8 bg-blue-600 rounded-full p-1 transition-colors relative"
            aria-label="Toggle pricing period"
          >
            <div
              className={`w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
                isYearly ? 'translate-x-6' : 'translate-x-0'
              }`}
            ></div>
          </button>
          <span className={`text-sm font-semibold ${isYearly ? 'text-white' : 'text-gray-400'}`}>
            Yearly
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#12173e] border border-white/5 p-8 sm:p-10 rounded-2xl shadow-xl flex flex-col justify-between hover:border-blue-500/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-baseline justify-between mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white">
                      ${plan.price}
                    </span>
                    <span className="text-gray-400 text-sm font-medium">
                      {plan.period}
                    </span>
                  </div>
                  <span className="text-lg font-bold text-blue-500">
                    {plan.name}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                  {plan.description}
                </p>

                <button className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-lg shadow-blue-600/20 transition mb-8">
                  {plan.buttonText}
                </button>

                <div className="pt-8 border-t border-white/10 space-y-4">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3">
                      {feature.included ? (
                        <div className="w-5 h-5 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-white/5 text-gray-500 flex items-center justify-center flex-shrink-0">
                          <X className="w-3.5 h-3.5" />
                        </div>
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? 'text-gray-300' : 'text-gray-500'
                        }`}
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
