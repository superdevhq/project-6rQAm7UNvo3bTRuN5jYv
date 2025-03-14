
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
            <h1 className="mb-6">
              <span className="gradient-text">Streamline Your Workflow</span>{" "}
              <span className="block mt-2">with Our SaaS Solution</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Boost productivity and simplify collaboration with our all-in-one platform. 
              Join thousands of teams already saving 10+ hours every week.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-base px-8">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8">
                Watch Demo
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-gray-500 flex items-center justify-center lg:justify-start">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No credit card required • 14-day free trial • Cancel anytime
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full max-w-lg mx-auto animate-float">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur opacity-30"></div>
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Dashboard preview" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
