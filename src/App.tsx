import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SettingsProvider } from "./context/SettingsContext";

// Primary home page
import Index from "./pages/Index";

// Lazy-loaded pages for faster initial load and optimal PageSpeed
const CitySEOPage = lazy(() => import("./pages/CitySEOPage"));
const CitySEOPage_Detail = lazy(() => import("./pages/CitySEOPage_Detail"));
const ServiceAreas = lazy(() => import("./pages/ServiceAreas"));

// Secondary page components - code split on demand
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const PostAd = lazy(() => import("./pages/PostAd"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const CreateProfile = lazy(() => import("./pages/CreateProfile"));
const Pricing = lazy(() => import("./pages/Pricing"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const InfoPage = lazy(() => import("./pages/InfoPage"));
const Reviews = lazy(() => import("./pages/Reviews"));
const Map = lazy(() => import("./pages/Map"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const Agencies = lazy(() => import("./pages/Agencies"));
const SitemapDirectory = lazy(() => import("./pages/SitemapDirectory"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SettingsProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/service-areas" element={<ServiceAreas />} />
              <Route path="/category/:category" element={<CategoryPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/post-ad" element={<PostAd />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/create-profile" element={<CreateProfile />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/sitemap-directory" element={<SitemapDirectory />} />
              <Route path="/info/:slug" element={<InfoPage />} />
              <Route path="/call-girls/:stateSlug" element={<CitySEOPage categoryType="call-girl" />} />
              <Route path="/call-girls/:stateSlug/:slug" element={<CitySEOPage_Detail categoryType="call-girl" />} />
              <Route path="/massage/:stateSlug" element={<CitySEOPage categoryType="massage" />} />
              <Route path="/massage/:stateSlug/:slug" element={<CitySEOPage_Detail categoryType="massage" />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/map" element={<Map />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/profile/:id" element={<ProfilePage />} />
              <Route path="/agencies" element={<Agencies />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </SettingsProvider>
  </QueryClientProvider>
);

export default App;
