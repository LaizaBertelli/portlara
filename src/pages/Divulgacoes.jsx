import { useEffect, useState } from "react";
import { type9, type10, type11 } from "../assets/jobsInfos";

import Header from "../components/Header";
import SliderCard from "../components/SliderCard";
import WppButton from "../components/wppButton";

export default function Divulgacoes() {
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
      <h1 className="text-bold text-center text-primary text-4xl font-bold">Divulgações</h1>

      <p className="text-justify m-10">
      São propagandas elaboradas, com informações importantes sobre a marca/produto. Nesse pacote, são inclusos além dos stores completos, foto no feed ou reels, adquirindo um alcance melhor da divulgação com os meus seguidores.
      </p>
      <section className="flex m-10 overflow-x-scroll snap-mandatory snap-x">
        <SliderCard jobType={ type9 } />
        <SliderCard jobType={ type10 } />
        <SliderCard jobType={ type11 } />
      </section>
      </main>
      <WppButton />
    </div>
  );
}