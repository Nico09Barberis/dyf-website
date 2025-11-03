import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton";
import ScrollToTopButton from "../components/common/ScrollTopButton";


function AppLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <ScrollToTopButton />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default AppLayout;