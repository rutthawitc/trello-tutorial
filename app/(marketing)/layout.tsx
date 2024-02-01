import { Footer } from './_componeents/footer';
import { Navbar } from './_componeents/navbar';

const MarketLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full bg-slate-100'>
      {/* navbar */}
      <Navbar />
      <main className='pt-40 pb-20 bg-slate-100'>{children}</main>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default MarketLayout;
