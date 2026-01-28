import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the duration of the internship?",
    answer: "We offer two duration options: 30 days and 45 days. You can choose based on your availability and learning goals. Both programs cover comprehensive training with real-world projects.",
  },
  {
    question: "Is there any fee to apply?",
    answer: "The application and internship program are completely free. There is only a nominal ₹100 certification fee payable after successfully completing all tasks.",
  },
  {
    question: "What happens after I complete the internship?",
    answer: "After completing all weekly tasks and paying the certification fee, you'll receive a verified certificate with a unique Certificate ID and QR code that employers can verify.",
  },
  {
    question: "Can I apply for multiple internships?",
    answer: "You can apply for one internship at a time. Once you complete your current internship, you're welcome to apply for another role to expand your skillset.",
  },
  {
    question: "What kind of tasks will I work on?",
    answer: "Tasks are designed to simulate real-world scenarios. You'll work on projects, assignments, and challenges that mirror actual industry requirements in your chosen domain.",
  },
  {
    question: "Is the certificate recognized by employers?",
    answer: "Yes, our certificates are recognized and valued by employers. Each certificate includes a unique verification system, making it easy for employers to authenticate your achievement.",
  },
  {
    question: "What if I miss a task deadline?",
    answer: "We understand that life can be unpredictable. If you miss a deadline, please reach out to our support team. We evaluate requests on a case-by-case basis and try to accommodate genuine situations.",
  },
  {
    question: "Do I get any mentorship during the internship?",
    answer: "While this is primarily a self-paced program, you'll have access to detailed task guidelines, resources, and our support team for any questions or clarifications.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:shadow-card"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
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
