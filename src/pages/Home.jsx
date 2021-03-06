import Header from "../components/Header";
import Head from "../components/Head";
import Footer from '../components/Footer';
import PhotoGrid from "../components/PhotoGrid";
import { about } from "../assets/text.js";
import { GrInstagram } from 'react-icons/gr';
import { FaTiktok } from 'react-icons/fa';
import WppButton from "../components/wppButton";

export default function Home() {
  return (
    <div className="h-full bg-light-grey">
      <WppButton />
      <Header />
      <Head />
      {/* about section */}
      <section className="bg-white p-7 m-4">
        <h3 className="text-2xl font-bold text-[#F53B00]">LARA BERTELLI</h3>
        <p className="text-justify mt-5">{ about }</p>
        <section className="flex place-content-evenly pt-8">
          <GrInstagram color="#F53B00" size="50px" />
          <FaTiktok color="#F53B00" size="50px" />
        </section>
      </section>
      {/* previous jobs - carousel */}
      <section>
        { <PhotoGrid /> }
      </section>
      <Footer />
    </div>
  );
}
