import { useEffect, useState } from "react";
import { type6 } from "../assets/jobsInfos";

import Header from "../components/Header";
import SliderCard from "../components/SliderCard";
import WppButton from "../components/wppButton";

export default function Reels() {
  let index = 0;
  const [image, setImage] = useState();
  const images = ['placeholder-img', 'profile', 'linktree-pf', 'linktree'];

  function changeBackgroundImg() {
    if ( index === images.length - 1) {
      index = 0;
    } else {
      index ++;
    }
    setImage(images[index]);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      changeBackgroundImg();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-light-grey">
      <Header />
      <main className="mt-10">
      <section className={ `bg-${image} bg-cover bg-center w-full h-64 mb-10` } />
      <h1 className="text-bold text-center text-primary text-4xl font-bold">Reels</h1>

      <p className="text-justify m-10">
      Ofereço o serviço individual para gravações de vídeos da nova ferramenta do Instagram. Serão realizados no contexto que o lojista optar ou com inspirações salvas.
      <br />
      Caso seja com peças de roupas, também serão entregues fotos.
      </p>
      <section className="flex m-10 overflow-x-scroll snap-mandatory snap-x">
        <SliderCard jobType={ type6 } />
      </section>
      </main>
      <WppButton />
    </div>
  );
}