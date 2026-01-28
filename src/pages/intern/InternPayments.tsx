import InternLayout from "@/components/layouts/InternLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Lock, CheckCircle, IndianRupee } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const InternPayments = () => {
  const { toast } = useToast();
  const [isPaid, setIsPaid] = useState(false);
  const tasksCompleted = false; // This would come from actual data

  const handlePayment = () => {
    // Simulate payment
    setIsPaid(true);
    toast({
      title: "Payment Successful!",
      description: "Your certificate has been unlocked. You can now download it.",
    });
  };

  return (
    <InternLayout>
      <div className="space-y-6 max-w-2xl">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Payments</h1>
          <p className="text-muted-foreground">Complete your certification fee to unlock your certificate</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-primary" />
              Certification Fee
            </CardTitle>
            <CardDescription>
              A nominal fee to cover certificate generation and verification services
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isPaid ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Payment Complete!</h3>
                <p className="text-muted-foreground mb-4">
                  Your certificate has been unlocked. Visit the Certificate page to download it.
                </p>
                <Button variant="default" asChild>
                  <a href="/intern/certificate">View Certificate</a>
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="p-6 bg-secondary/30 rounded-xl text-center">
                  <div className="flex items-center justify-center gap-1 text-4xl font-bold text-foreground mb-2">
                    <IndianRupee className="w-8 h-8" />
                    <span>100</span>
                  </div>
                  <p className="text-sm text-muted-foreground">One-time certification fee</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Verified digital certificate</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Unique Certificate ID</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>QR code for verification</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Lifetime access</span>
                  </div>
                </div>

                {tasksCompleted ? (
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    onClick={handlePayment}
                  >
                    Pay ₹100
                  </Button>
                ) : (
                  <div className="space-y-3">
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="w-full"
                      disabled
                    >
                      <Lock className="w-4 h-4 mr-2" />
                      Complete All Tasks to Unlock
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      You need to complete all weekly tasks before you can pay for certification
                    </p>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </InternLayout>
  );
};

export default InternPayments;
