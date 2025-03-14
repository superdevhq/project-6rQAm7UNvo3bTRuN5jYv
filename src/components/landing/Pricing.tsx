
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small teams and startups",
    features: [
      "Up to 5 team members",
      "Basic analytics",
      "10 projects",
      "24-hour support response time",
      "1GB storage"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional",
    price: "$79",
    description: "Ideal for growing businesses",
    features: [
      "Up to 20 team members",
      "Advanced analytics",
      "Unlimited projects",
      "6-hour support response time",
      "10GB storage",
      "Custom integrations",
      "Priority support"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "$199",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited team members",
      "Enterprise-grade analytics",
      "Unlimited projects",
      "1-hour support response time",
      "Unlimited storage",
      "Custom integrations",
      "Dedicated account manager",
      "Custom security controls",
      "SLA guarantees"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">
            Choose the plan that's right for your team. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden border ${
                plan.popular 
                  ? "border-primary shadow-lg relative" 
                  : "border-gray-200 shadow-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <Button 
                  className={`w-full ${plan.popular ? "" : "bg-gray-800 hover:bg-gray-700"}`}
                >
                  {plan.cta}
                </Button>
              </div>
              <div className="bg-gray-50 p-8">
                <p className="font-medium mb-4">What's included:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
