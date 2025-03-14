
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the 14-day free trial work?",
    answer: "Our 14-day free trial gives you full access to all features of the platform with no credit card required. At the end of the trial, you can choose to subscribe to one of our plans or your account will automatically switch to a limited free version."
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time. If you upgrade, the new rate will be prorated for the remainder of your billing cycle. If you downgrade, the new rate will take effect at the start of your next billing cycle."
  },
  {
    question: "Is there a limit to how many team members I can add?",
    answer: "The number of team members you can add depends on your plan. The Starter plan allows up to 5 team members, the Professional plan allows up to 20, and the Enterprise plan has no limit on team members."
  },
  {
    question: "Do you offer discounts for nonprofits or educational institutions?",
    answer: "Yes, we offer special pricing for nonprofits, educational institutions, and open-source projects. Please contact our sales team for more information."
  },
  {
    question: "How secure is my data on your platform?",
    answer: "We take security very seriously. All data is encrypted both in transit and at rest. We use industry-standard security practices, regular security audits, and maintain compliance with SOC 2, GDPR, and other relevant standards."
  },
  {
    question: "Can I export my data if I decide to leave?",
    answer: "Absolutely. We believe your data belongs to you. You can export all your data at any time in standard formats like CSV, JSON, or PDF, making it easy to migrate if needed."
  },
  {
    question: "What kind of support do you offer?",
    answer: "All plans include email support with response times varying by plan. The Professional and Enterprise plans include priority support, and Enterprise customers get a dedicated account manager. We also have an extensive knowledge base and regular webinars."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Have questions? We've got answers. If you can't find what you're looking for, feel free to contact our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
