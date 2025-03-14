
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "This platform has completely transformed how our team works. We've cut our project delivery time in half and improved client satisfaction.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "The analytics features alone are worth the investment. We've gained insights that have directly contributed to a 30% increase in revenue.",
    author: "Michael Chen",
    role: "CEO",
    company: "GrowthLabs",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "I was skeptical at first, but after the free trial, I was sold. The interface is intuitive, and the support team is incredibly responsive.",
    author: "Emily Rodriguez",
    role: "Product Manager",
    company: "InnovateCo",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "We've tried several similar solutions, but this one stands out for its reliability and feature set. It's become an essential part of our daily operations.",
    author: "David Park",
    role: "Operations Director",
    company: "Streamline Inc.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col">
      <div className="mb-6">
        <svg className="h-8 w-8 text-primary opacity-80" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>
      <p className="text-gray-700 mb-6 flex-grow">{testimonial.quote}</p>
      <div className="flex items-center">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.author} 
          className="h-12 w-12 rounded-full mr-4 object-cover"
        />
        <div>
          <p className="font-medium text-gray-900">{testimonial.author}</p>
          <p className="text-gray-600 text-sm">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Loved by Businesses Worldwide</h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it. Here's what our customers have to say about our platform.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static mr-2" />
              <CarouselNext className="relative static ml-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
