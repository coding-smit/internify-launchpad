import AdminLayout from "@/components/layouts/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { IndianRupee, TrendingUp, CreditCard, CheckCircle } from "lucide-react";

const paymentsData = [
  { id: 1, intern: "Anita Patel", email: "anita@example.com", amount: 100, date: "Jan 28, 2024", status: "completed", transactionId: "TXN001234" },
  { id: 2, intern: "Arjun Reddy", email: "arjun@example.com", amount: 100, date: "Jan 27, 2024", status: "completed", transactionId: "TXN001233" },
  { id: 3, intern: "Kavitha Menon", email: "kavitha@example.com", amount: 100, date: "Jan 26, 2024", status: "completed", transactionId: "TXN001232" },
  { id: 4, intern: "Sneha Gupta", email: "sneha@example.com", amount: 100, date: "Jan 25, 2024", status: "completed", transactionId: "TXN001231" },
  { id: 5, intern: "Rohit Sharma", email: "rohit@example.com", amount: 100, date: "Jan 24, 2024", status: "completed", transactionId: "TXN001230" },
];

const AdminPayments = () => {
  const totalRevenue = paymentsData.reduce((sum, p) => sum + p.amount, 0);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Payments</h1>
          <p className="text-muted-foreground">Track certification fee payments</p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-4">
          <Card className="hover-lift">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Revenue</p>
                  <div className="flex items-center gap-1 text-2xl font-bold mt-1">
                    <IndianRupee className="w-5 h-5" />
                    <span>{totalRevenue.toLocaleString()}</span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Transactions</p>
                  <p className="text-2xl font-bold mt-1">{paymentsData.length}</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                  <p className="text-2xl font-bold mt-1">100%</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payments Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Payment History</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Intern</TableHead>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paymentsData.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{payment.intern}</p>
                          <p className="text-sm text-muted-foreground">{payment.email}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <code className="text-sm bg-muted px-2 py-1 rounded">{payment.transactionId}</code>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-0.5 font-medium">
                          <IndianRupee className="w-3 h-3" />
                          {payment.amount}
                        </div>
                      </TableCell>
                      <TableCell>{payment.date}</TableCell>
                      <TableCell>
                        <span className="status-badge status-approved">Completed</span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminPayments;
