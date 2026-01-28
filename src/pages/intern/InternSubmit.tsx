import InternLayout from "@/components/layouts/InternLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Link as LinkIcon, FileText, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const InternSubmit = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    week: "",
    submissionType: "",
    link: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "Task Submitted!",
      description: "Your submission is under review. You'll be notified once it's approved.",
    });
  };

  if (isSubmitted) {
    return (
      <InternLayout>
        <Card className="max-w-md mx-auto">
          <CardContent className="pt-10 pb-8 text-center">
            <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-success" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Submission Received!</h2>
            <p className="text-muted-foreground mb-6">
              Your task has been submitted successfully. Our team will review it shortly.
            </p>
            <Button onClick={() => setIsSubmitted(false)}>
              Submit Another Task
            </Button>
          </CardContent>
        </Card>
      </InternLayout>
    );
  }

  return (
    <InternLayout>
      <div className="space-y-6 max-w-2xl">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Submit Task</h1>
          <p className="text-muted-foreground">Upload your completed work for review</p>
        </div>

        <Card>
          <CardContent className="pt-6">
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
                    <SelectItem value="1" disabled>Week 1 - Completed</SelectItem>
                    <SelectItem value="2" disabled>Week 2 - Completed</SelectItem>
                    <SelectItem value="3">Week 3 - Responsive Design</SelectItem>
                    <SelectItem value="4" disabled>Week 4 - Locked</SelectItem>
                    <SelectItem value="5" disabled>Week 5 - Locked</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="submissionType">Submission Type *</Label>
                <Select
                  value={formData.submissionType}
                  onValueChange={(value) => setFormData({ ...formData, submissionType: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="How would you like to submit?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="link">GitHub/Drive Link</SelectItem>
                    <SelectItem value="file">Upload File</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {formData.submissionType === "link" && (
                <div className="space-y-2">
                  <Label htmlFor="link">Submission Link *</Label>
                  <div className="relative">
                    <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="link"
                      type="url"
                      placeholder="https://github.com/your-repo or https://drive.google.com/..."
                      value={formData.link}
                      onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              )}

              {formData.submissionType === "file" && (
                <div className="space-y-2">
                  <Label>Upload File *</Label>
                  <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      ZIP, PDF, or images up to 10MB
                    </p>
                    <Input type="file" className="hidden" />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Textarea
                  id="description"
                  placeholder="Briefly describe your submission or add any notes for the reviewer..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Upload className="w-4 h-4 mr-2" />
                Submit Task
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </InternLayout>
  );
};

export default InternSubmit;
