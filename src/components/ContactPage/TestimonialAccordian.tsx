import { CONTACT_TESTIMONIALS } from "@/prototypes/contact_page";
import { TestimonialCard } from ".";

const TestimonialAccordian = () => {
  return CONTACT_TESTIMONIALS.map(
    ({ title, profile, name, testimonial }, index) => (
      <TestimonialCard
        key={index}
        title={title}
        profile={profile}
        name={name}
        testimonial={testimonial}
      />
    )
  );
};

export default TestimonialAccordian;
