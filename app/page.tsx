import Navbar from "./_components/Navbar";
import Hero from "./_components/homepage/Hero";
import Services from "./_components/homepage/Services";

// import Footer from "#";

export default function Home() {
  return (
    <>  <main data-theme="frozen" className="bg-black" >
      
    
      <Navbar />
      <Hero />
      <Services />
    </main>
  
      {/* <Footer /> */}
    </>
  );
}