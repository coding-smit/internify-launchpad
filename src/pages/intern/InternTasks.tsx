import InternLayout from "@/components/layouts/InternLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Clock, CheckCircle, XCircle, Upload, Calendar, FileText } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const weeklyTasks = [
  {
    week: 1,
    title: "Week 1: Introduction & Setup",
    status: "approved",
    tasks: [
      {
        id: 1,
        title: "Set Up Development Environment",
        description: "Install VS Code, Node.js, and Git. Configure your workspace for web development.",
        deadline: "Jan 20, 2024",
        status: "approved",
        submissionDate: "Jan 19, 2024",
      },
    ],
  },
  {
    week: 2,
    title: "Week 2: HTML & CSS Fundamentals",
    status: "approved",
    tasks: [
      {
        id: 2,
        title: "Create a Static Portfolio Page",
        description: "Build a personal portfolio page using HTML5 semantic elements and CSS3 styling.",
        deadline: "Jan 27, 2024",
        status: "approved",
        submissionDate: "Jan 26, 2024",
      },
    ],
  },
  {
    week: 3,
    title: "Week 3: Responsive Design",
    status: "pending",
    tasks: [
      {
        id: 3,
        title: "Build a Responsive Landing Page",
        description: "Create a fully responsive landing page using HTML, CSS, and JavaScript with modern design principles.",
        deadline: "Feb 5, 2024",
        status: "pending",
      },
    ],
  },
  {
    week: 4,
    title: "Week 4: JavaScript Basics",
    status: "locked",
    tasks: [
      {
        id: 4,
        title: "Interactive Form Validation",
        description: "Implement form validation using vanilla JavaScript with real-time feedback.",
        deadline: "Feb 12, 2024",
        status: "locked",
      },
    ],
  },
  {
    week: 5,
    title: "Week 5: Final Project",
    status: "locked",
    tasks: [
      {
        id: 5,
        title: "Full-Stack Mini Project",
        description: "Combine all learned skills to build a complete web application.",
        deadline: "Feb 19, 2024",
        status: "locked",
      },
    ],
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "approved":
      return (
        <span className="status-badge status-approved">
          <CheckCircle className="w-3 h-3 mr-1" />
          Approved
        </span>
      );
    case "submitted":
      return (
        <span className="status-badge status-submitted">
          <Upload className="w-3 h-3 mr-1" />
          Submitted
        </span>
      );
    case "rejected":
      return (
        <span className="status-badge status-rejected">
          <XCircle className="w-3 h-3 mr-1" />
          Rejected
        </span>
      );
    case "pending":
      return (
        <span className="status-badge status-pending">
          <Clock className="w-3 h-3 mr-1" />
          Pending
        </span>
      );
    default:
      return (
        <span className="status-badge bg-muted text-muted-foreground">
          <Clock className="w-3 h-3 mr-1" />
          Locked
        </span>
      );
  }
};

const InternTasks = () => {
  const [openWeeks, setOpenWeeks] = useState<number[]>([3]);

  const toggleWeek = (week: number) => {
    setOpenWeeks((prev) =>
      prev.includes(week) ? prev.filter((w) => w !== week) : [...prev, week]
    );
  };

  return (
    <InternLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Weekly Tasks</h1>
          <p className="text-muted-foreground">Complete your weekly assignments to progress through the internship</p>
        </div>

        <div className="space-y-4">
          {weeklyTasks.map((weekData) => (
            <Collapsible
              key={weekData.week}
              open={openWeeks.includes(weekData.week)}
              onOpenChange={() => toggleWeek(weekData.week)}
            >
              <Card className={cn(
                weekData.status === "locked" && "opacity-60"
              )}>
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="flex flex-row items-center justify-between py-4 cursor-pointer hover:bg-accent/50 transition-colors rounded-t-lg">
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm",
                        weekData.status === "approved" ? "bg-success/10 text-success" :
                        weekData.status === "pending" ? "gradient-primary text-primary-foreground" :
                        "bg-muted text-muted-foreground"
                      )}>
                        W{weekData.week}
                      </div>
                      <div className="text-left">
                        <CardTitle className="text-base">{weekData.title}</CardTitle>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {getStatusBadge(weekData.status)}
                      <ChevronDown className={cn(
                        "w-5 h-5 text-muted-foreground transition-transform",
                        openWeeks.includes(weekData.week) && "rotate-180"
                      )} />
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0 space-y-4">
                    {weekData.tasks.map((task) => (
                      <div 
                        key={task.id} 
                        className="p-4 bg-secondary/30 rounded-xl border border-border/50"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h4 className="font-medium text-foreground">{task.title}</h4>
                            <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
                            <div className="flex flex-wrap items-center gap-4 mt-3">
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Calendar className="w-4 h-4" />
                                <span>Due: {task.deadline}</span>
                              </div>
                              {task.submissionDate && (
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                  <FileText className="w-4 h-4" />
                                  <span>Submitted: {task.submissionDate}</span>
                                </div>
                              )}
                              {getStatusBadge(task.status)}
                            </div>
                          </div>
                          {task.status === "pending" && (
                            <Button size="sm">
                              <Upload className="w-4 h-4 mr-1" />
                              Submit
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          ))}
        </div>
      </div>
    </InternLayout>
  );
};

export default InternTasks;
