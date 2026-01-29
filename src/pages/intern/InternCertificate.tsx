import InternLayout from "@/components/layouts/InternLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Download, Lock, QrCode, Share2, Copy, CheckCircle, ExternalLink, Calendar, Clock, Briefcase } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

const InternCertificate = () => {
  const { toast } = useToast();
  const [isSharing, setIsSharing] = useState(false);
  
  // This would come from actual data
  const isPaid = false;
  const tasksCompleted: number = 2;
  const totalTasks: number = 5;
  const completionPercent = (tasksCompleted / totalTasks) * 100;
  
  const certificateData = {
    id: "CERT-2024-WD-001234",
    name: "John Doe",
    role: "Web Development",
    duration: "30 Days",
    totalHours: 78,
    completionDate: "February 19, 2024",
    issueDate: "February 20, 2024",
    verificationUrl: "https://internify.com/verify/CERT-2024-WD-001234",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Git"],
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(certificateData.verificationUrl);
    toast({
      title: "Link Copied!",
      description: "Certificate verification link copied to clipboard.",
    });
  };

  const handleShare = async () => {
    setIsSharing(true);
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${certificateData.name} - ${certificateData.role} Certificate`,
          text: `I have successfully completed the ${certificateData.duration} ${certificateData.role} Internship at Internify!`,
          url: certificateData.verificationUrl,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      handleCopyLink();
    }
    setIsSharing(false);
  };

  const handleDownload = () => {
    toast({
      title: "Downloading Certificate",
      description: "Your certificate PDF is being generated...",
    });
    // In a real app, this would trigger PDF generation
  };

  return (
    <InternLayout>
      <div className="space-y-6 max-w-4xl">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Certificate</h1>
          <p className="text-muted-foreground">Your verified internship completion certificate</p>
        </div>

        {isPaid ? (
          <div className="space-y-6">
            {/* Certificate Preview */}
            <Card>
              <CardContent className="p-8">
                <div className="border-8 border-primary/10 rounded-xl p-8 bg-gradient-to-br from-card to-secondary/20 mb-6 relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                  
                  <div className="text-center space-y-6 relative">
                    <div className="w-20 h-20 mx-auto gradient-primary rounded-full flex items-center justify-center shadow-lg">
                      <Award className="w-10 h-10 text-primary-foreground" />
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-widest font-medium">Certificate of Completion</p>
                      <h2 className="text-3xl font-bold text-foreground mt-2">{certificateData.role} Internship</h2>
                      <p className="text-primary font-medium mt-1">{certificateData.duration} Program</p>
                    </div>

                    <div className="py-6">
                      <p className="text-muted-foreground">This is to certify that</p>
                      <p className="text-3xl font-bold text-foreground mt-2">{certificateData.name}</p>
                      <p className="text-muted-foreground mt-3 max-w-md mx-auto">
                        has successfully completed the {certificateData.duration} {certificateData.role} Internship Program
                        with a total of <span className="font-semibold text-foreground">{certificateData.totalHours} hours</span> of practical training.
                      </p>
                    </div>

                    {/* Skills Earned */}
                    <div className="py-4">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Skills Acquired</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {certificateData.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center items-center gap-8 pt-6 border-t border-border">
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">Completion Date</p>
                        <p className="font-medium">{certificateData.completionDate}</p>
                      </div>
                      <div className="w-24 h-24 bg-card rounded-xl flex items-center justify-center border-2 border-border shadow-sm">
                        <QrCode className="w-16 h-16 text-foreground" />
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">Certificate ID</p>
                        <p className="font-medium text-sm font-mono">{certificateData.id}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" className="flex-1" onClick={handleDownload}>
                    <Download className="w-5 h-5 mr-2" />
                    Download PDF
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1" onClick={handleShare} disabled={isSharing}>
                    <Share2 className="w-5 h-5 mr-2" />
                    Share Certificate
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Verification Section */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  Certificate Verification
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Share this verification link with employers to verify your certificate authenticity.
                </p>
                <div className="flex gap-2">
                  <div className="flex-1 p-3 bg-secondary/50 rounded-lg font-mono text-sm truncate">
                    {certificateData.verificationUrl}
                  </div>
                  <Button variant="outline" size="icon" onClick={handleCopyLink}>
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href={certificateData.verificationUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Certificate Details */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-4">Certificate Details</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Briefcase className="w-4 h-4" />
                      <span className="text-sm">Internship Role</span>
                    </div>
                    <p className="font-medium">{certificateData.role}</p>
                  </div>
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">Duration</span>
                    </div>
                    <p className="font-medium">{certificateData.duration}</p>
                  </div>
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">Total Hours</span>
                    </div>
                    <p className="font-medium">{certificateData.totalHours} hours</p>
                  </div>
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Award className="w-4 h-4" />
                      <span className="text-sm">Issue Date</span>
                    </div>
                    <p className="font-medium">{certificateData.issueDate}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Progress to Certificate */}
            <Card>
              <CardContent className="py-8">
                <div className="max-w-md mx-auto text-center">
                  <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                    <Lock className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Certificate Locked</h3>
                  <p className="text-muted-foreground mb-6">
                    Complete all your weekly tasks and pay the certification fee to unlock your verified certificate.
                  </p>

                  {/* Progress */}
                  <div className="text-left mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Task Completion</span>
                      <span className="font-medium">{tasksCompleted}/{totalTasks} weeks</span>
                    </div>
                    <Progress value={completionPercent} className="h-3 mb-4" />
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        {tasksCompleted === totalTasks ? (
                          <CheckCircle className="w-4 h-4 text-success" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border-2 border-muted-foreground" />
                        )}
                        <span className={tasksCompleted === totalTasks ? "text-success" : "text-muted-foreground"}>
                          Complete all weekly tasks ({tasksCompleted}/{totalTasks})
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-4 h-4 rounded-full border-2 border-muted-foreground" />
                        <span className="text-muted-foreground">Pay ₹100 certification fee</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" className="flex-1" asChild>
                      <Link to="/intern/tasks">View Tasks</Link>
                    </Button>
                    <Button variant="default" className="flex-1" asChild>
                      <Link to="/intern/payments">Go to Payments</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What You'll Get */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-4">What You'll Get</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Verified Certificate</p>
                      <p className="text-xs text-muted-foreground">Official certificate with your name and internship details</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <QrCode className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">QR Verification</p>
                      <p className="text-xs text-muted-foreground">Scannable QR code for instant verification</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Download className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">PDF Download</p>
                      <p className="text-xs text-muted-foreground">High-quality PDF for printing and sharing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Share2 className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Easy Sharing</p>
                      <p className="text-xs text-muted-foreground">Share on LinkedIn and with employers</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </InternLayout>
  );
};

export default InternCertificate;
