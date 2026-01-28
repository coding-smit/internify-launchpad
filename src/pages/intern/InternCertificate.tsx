import InternLayout from "@/components/layouts/InternLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Download, Lock, QrCode, Calendar, User } from "lucide-react";

const InternCertificate = () => {
  const isPaid = false; // This would come from actual data
  const certificateData = {
    id: "CERT-2024-WD-001234",
    name: "John Doe",
    role: "Web Development",
    duration: "30 Days",
    completionDate: "February 19, 2024",
    issueDate: "February 20, 2024",
  };

  return (
    <InternLayout>
      <div className="space-y-6 max-w-3xl">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Certificate</h1>
          <p className="text-muted-foreground">Download your verified internship completion certificate</p>
        </div>

        {isPaid ? (
          <Card>
            <CardContent className="p-8">
              {/* Certificate Preview */}
              <div className="border-8 border-primary/10 rounded-xl p-8 bg-card mb-6">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 mx-auto gradient-primary rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-widest">Certificate of Completion</p>
                    <h2 className="text-3xl font-bold text-foreground mt-2">{certificateData.role} Internship</h2>
                  </div>

                  <div className="py-4">
                    <p className="text-muted-foreground">This is to certify that</p>
                    <p className="text-2xl font-semibold text-foreground mt-1">{certificateData.name}</p>
                    <p className="text-muted-foreground mt-2">
                      has successfully completed the {certificateData.duration} {certificateData.role} Internship Program
                    </p>
                  </div>

                  <div className="flex justify-center items-center gap-8 pt-4 border-t border-border">
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">Completion Date</p>
                      <p className="font-medium">{certificateData.completionDate}</p>
                    </div>
                    <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
                      <QrCode className="w-12 h-12 text-muted-foreground" />
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">Certificate ID</p>
                      <p className="font-medium text-sm">{certificateData.id}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="flex-1">
                  <Download className="w-5 h-5 mr-2" />
                  Download PDF
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  Share Certificate
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="py-16 text-center">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                <Lock className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Certificate Locked</h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-6">
                Complete all your weekly tasks and pay the certification fee to unlock your verified certificate.
              </p>
              <Button variant="default" asChild>
                <a href="/intern/payments">Go to Payments</a>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </InternLayout>
  );
};

export default InternCertificate;
