import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/home/HeroBanner";
import AccreditationStrip from "@/components/home/AccreditationStrip";
import StatsSection from "@/components/home/StatsSection";
import DepartmentsSection from "@/components/home/DepartmentsSection";
import PlacementsSection from "@/components/home/PlacementsSection";
import FacilitiesSection from "@/components/home/FacilitiesSection";
import VideoSection from "@/components/home/VideoSection";
import GallerySection from "@/components/home/GallerySection";
import NewsSection from "@/components/home/NewsSection";
import QuickLinksSection from "@/components/home/QuickLinksSection";
import { collegeInfo } from "@/data/collegeData";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>{collegeInfo.name} | {collegeInfo.tagline}</title>
        <meta 
          name="description" 
          content={`${collegeInfo.name} (${collegeInfo.shortName}) - A premier engineering institution in ${collegeInfo.location}, affiliated to ${collegeInfo.affiliatedTo}. NAAC A+ accredited, NBA approved programs.`} 
        />
        <meta name="keywords" content="GPCET, engineering college, Kurnool, Andhra Pradesh, JNTUA, B.Tech, M.Tech, CSE, ECE, EEE, Mechanical, Civil" />
        <link rel="canonical" href="https://gpcet.ac.in" />
      </Helmet>

      <HeroBanner />
      <AccreditationStrip />
      <StatsSection />
      <DepartmentsSection />
      <PlacementsSection />
      <FacilitiesSection />
      <VideoSection />
      <GallerySection />
      <NewsSection />
      <QuickLinksSection />
    </Layout>
  );
};

export default Index;
