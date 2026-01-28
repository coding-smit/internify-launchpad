import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Apply from "./pages/Apply";
import NotFound from "./pages/NotFound";

// Intern pages
import InternLogin from "./pages/intern/InternLogin";
import InternDashboard from "./pages/intern/InternDashboard";
import InternInternship from "./pages/intern/InternInternship";
import InternTasks from "./pages/intern/InternTasks";
import InternSubmit from "./pages/intern/InternSubmit";
import InternPayments from "./pages/intern/InternPayments";
import InternCertificate from "./pages/intern/InternCertificate";
import InternProfile from "./pages/intern/InternProfile";

// Admin pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminApplications from "./pages/admin/AdminApplications";
import AdminInterns from "./pages/admin/AdminInterns";
import AdminTasks from "./pages/admin/AdminTasks";
import AdminPayments from "./pages/admin/AdminPayments";
import AdminCertificates from "./pages/admin/AdminCertificates";
import AdminAnalytics from "./pages/admin/AdminAnalytics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/apply" element={<Apply />} />
          
          {/* Intern routes */}
          <Route path="/intern/login" element={<InternLogin />} />
          <Route path="/intern/dashboard" element={<InternDashboard />} />
          <Route path="/intern/internship" element={<InternInternship />} />
          <Route path="/intern/tasks" element={<InternTasks />} />
          <Route path="/intern/submit" element={<InternSubmit />} />
          <Route path="/intern/payments" element={<InternPayments />} />
          <Route path="/intern/certificate" element={<InternCertificate />} />
          <Route path="/intern/profile" element={<InternProfile />} />
          
          {/* Admin routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/applications" element={<AdminApplications />} />
          <Route path="/admin/interns" element={<AdminInterns />} />
          <Route path="/admin/tasks" element={<AdminTasks />} />
          <Route path="/admin/payments" element={<AdminPayments />} />
          <Route path="/admin/certificates" element={<AdminCertificates />} />
          <Route path="/admin/analytics" element={<AdminAnalytics />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
