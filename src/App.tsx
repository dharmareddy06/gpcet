import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Departments from "./pages/Departments";
import Placements from "./pages/Placements";
import Research from "./pages/Research";
import Innovation from "./pages/Innovation";
import CampusLife from "./pages/CampusLife";
import StudentServices from "./pages/StudentServices";
import StudentLogin from "./pages/StudentLogin";
import FacultyLogin from "./pages/FacultyLogin";
import Admissions from "./pages/Admissions";
import AcademicCalendar from "./pages/AcademicCalendar";
import ExaminationResults from "./pages/ExaminationResults";
import DepartmentCSE from "./pages/DepartmentCSE";
import DepartmentCAI from "./pages/DepartmentCAI";
import DepartmentECE from "./pages/DepartmentECE";
import DepartmentEEE from "./pages/DepartmentEEE";
import DepartmentME from "./pages/DepartmentME";
import DepartmentCE from "./pages/DepartmentCE";
import DepartmentMBA from "./pages/DepartmentMBA";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import WelcomePopup from "./components/common/WelcomePopup";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <WelcomePopup />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/departments/cse" element={<DepartmentCSE />} />
            <Route path="/departments/cai" element={<DepartmentCAI />} />
            <Route path="/departments/ece" element={<DepartmentECE />} />
            <Route path="/departments/eee" element={<DepartmentEEE />} />
            <Route path="/departments/mech" element={<DepartmentME />} />
            <Route path="/departments/civil" element={<DepartmentCE />} />
            <Route path="/departments/mba-finance" element={<DepartmentMBA />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/academic-calendar" element={<AcademicCalendar />} />
            <Route path="/results" element={<ExaminationResults />} />
            <Route path="/research" element={<Research />} />
            <Route path="/innovation" element={<Innovation />} />
            <Route path="/campus-life" element={<CampusLife />} />
            <Route path="/student-services" element={<StudentServices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/student-login" element={<StudentLogin />} />
            <Route path="/faculty-login" element={<FacultyLogin />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
