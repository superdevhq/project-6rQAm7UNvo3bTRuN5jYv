
import { 
  BarChart3, 
  Clock, 
  Zap, 
  Shield, 
  Users, 
  Smartphone 
} from "lucide-react";

const features = [
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "Advanced Analytics",
    description: "Gain valuable insights with our comprehensive analytics dashboard. Track performance and make data-driven decisions."
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Time-Saving Automation",
    description: "Automate repetitive tasks and workflows to save hours every week. Focus on what matters most to your business."
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Lightning Fast Performance",
    description: "Experience blazing fast load times and responsive interactions. Our platform is optimized for speed and efficiency."
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Enterprise-Grade Security",
    description: "Rest easy knowing your data is protected with state-of-the-art security measures and regular backups."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Team Collaboration",
    description: "Work seamlessly with your team in real-time. Share, comment, and collaborate on projects with ease."
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Mobile Optimized",
    description: "Access your dashboard and tools from anywhere. Our responsive design works perfectly on all devices."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Powerful Features for Modern Teams</h2>
          <p className="text-xl text-gray-600">
            Everything you need to streamline your workflow, boost productivity, and grow your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
