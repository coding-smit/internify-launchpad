import InternLayout from "@/components/layouts/InternLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Link as LinkIcon, FileText, CheckCircle, Github, ExternalLink, Clock, Calendar } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

const InternSubmit = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    week: "",
    projectTitle: "",
    githubLink: "",
    liveLink: "",
    description: "",
  });

  // Previous submissions
  const previousSubmissions = [
    {
      week: 1,
      title: "Portfolio Website",
      githubLink: "https://github.com/intern/portfolio",
      liveLink: "https://portfolio.vercel.app",
      status: "approved",
      submittedAt: "2024-01-08",
      feedback: "Great work! Clean design and responsive layout.",
    },
    {
      week: 2,
      title: "Todo App with React",
      githubLink: "https://github.com/intern/todo-app",
      liveLink: "https://todo-app.vercel.app",
      status: "approved",
      submittedAt: "2024-01-15",
      feedback: "Excellent state management implementation.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.githubLink) {
      toast({
        title: "GitHub Link Required",
        description: "Please provide your GitHub repository link.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitted(true);
    toast({
      title: "Project Submitted!",
      description: "Your project is under review. You'll be notified once it's approved.",
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-success/10 text-success border-success/20">Approved</Badge>;
      case "pending":
        return <Badge className="bg-warning/10 text-warning border-warning/20">Under Review</Badge>;
      case "rejected":
        return <Badge className="bg-destructive/10 text-destructive border-destructive/20">Needs Revision</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  if (isSubmitted) {
    return (
      <InternLayout>
        <Card className="max-w-md mx-auto">
          <CardContent className="pt-10 pb-8 text-center">
            <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-success" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Project Submitted!</h2>
            <p className="text-muted-foreground mb-6">
              Your project has been submitted successfully. Our team will review your GitHub repository and provide feedback.
            </p>
            <Button onClick={() => setIsSubmitted(false)}>
              Submit Another Project
            </Button>
          </CardContent>
        </Card>
      </InternLayout>
    );
  }

  return (
    <InternLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Submit Project</h1>
          <p className="text-muted-foreground">Upload your completed project with GitHub repository link</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Submission Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  New Project Submission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="week">Select Week *</Label>
                    <Select
                      value={formData.week}
                      onValueChange={(value) => setFormData({ ...formData, week: value })}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Choose the week" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1" disabled>Week 1 - Completed ✓</SelectItem>
                        <SelectItem value="2" disabled>Week 2 - Completed ✓</SelectItem>
                        <SelectItem value="3">Week 3 - Responsive Design</SelectItem>
                        <SelectItem value="4" disabled>Week 4 - Locked 🔒</SelectItem>
                        <SelectItem value="5" disabled>Week 5 - Locked 🔒</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectTitle">Project Title *</Label>
                    <Input
                      id="projectTitle"
                      placeholder="e.g., E-commerce Landing Page"
                      value={formData.projectTitle}
                      onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="githubLink" className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      GitHub Repository Link *
                    </Label>
                    <div className="relative">
                      <Github className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="githubLink"
                        type="url"
                        placeholder="https://github.com/username/project-name"
                        value={formData.githubLink}
                        onChange={(e) => setFormData({ ...formData, githubLink: e.target.value })}
                        className="pl-10"
                        required
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Make sure your repository is public so reviewers can access it
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="liveLink" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo Link (Optional)
                    </Label>
                    <div className="relative">
                      <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="liveLink"
                        type="url"
                        placeholder="https://your-project.vercel.app"
                        value={formData.liveLink}
                        onChange={(e) => setFormData({ ...formData, liveLink: e.target.value })}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Project Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Briefly describe your project, technologies used, and any challenges you faced..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      rows={4}
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Github className="w-4 h-4 mr-2" />
                    Submit Project
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Submission Guidelines */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Submission Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Public Repository</p>
                    <p className="text-xs text-muted-foreground">Ensure your GitHub repo is set to public</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">README File</p>
                    <p className="text-xs text-muted-foreground">Include project setup instructions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Clean Code</p>
                    <p className="text-xs text-muted-foreground">Follow best practices and add comments</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">4</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Live Demo (Bonus)</p>
                    <p className="text-xs text-muted-foreground">Deploy on Vercel, Netlify, or GitHub Pages</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Review Timeline</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Reviews within 24-48 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Feedback via email notification</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Previous Submissions */}
        <Card>
          <CardHeader>
            <CardTitle>Previous Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {previousSubmissions.map((submission, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border bg-card gap-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">Week {submission.week}:</span>
                      <span className="text-foreground">{submission.title}</span>
                      {getStatusBadge(submission.status)}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{submission.feedback}</p>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href={submission.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                      >
                        <Github className="w-3 h-3" />
                        GitHub Repo
                      </a>
                      {submission.liveLink && (
                        <a
                          href={submission.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {submission.submittedAt}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </InternLayout>
  );
};

export default InternSubmit;
