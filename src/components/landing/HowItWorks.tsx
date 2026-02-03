import { FileText, UserCheck, ClipboardList, CreditCard, Award } from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Apply for Internship",
    description: "Choose your preferred role and submit your application with basic details.",
    icon: FileText,
  },
  {
    step: 2,
    title: "Get Selected",
    description: "Our team reviews your application and assigns you to the internship program.",
    icon: UserCheck,
  },
  {
    step: 3,
    title: "Complete Weekly Tasks",
    description: "Work on real-world assignments and submit your tasks for review each week.",
    icon: ClipboardList,
  },
  {
    step: 4,
    title: "Free Internship with Certification",
    description: "Complete all assigned tasks successfully to receive your internship completion certificate at no cost.",
    icon: CreditCard,
  },
  {
    step: 5,
    title: "Download Certificate",
    description: "Receive your verified certificate with a unique ID and QR code.",
    icon: Award,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Your journey from application to certification in 5 simple steps
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {steps.map((item, index) => (
                <div 
                  key={item.step} 
                  className="relative flex gap-6 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Step number */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-lg">
                      <item.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card rounded-xl p-6 shadow-card border border-border/50">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                        Step {item.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
