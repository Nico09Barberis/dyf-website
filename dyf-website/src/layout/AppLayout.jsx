import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";


function AppLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;