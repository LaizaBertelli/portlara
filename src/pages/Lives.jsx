import { useEffect, useState } from "react";
import { type7, type8 } from "../assets/jobsInfos";
import Header from "../components/Header";
import SliderCard from "../components/SliderCard";
import WppButton from "../components/wppButton";

export default function Lives() {
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
      <section className={ `bg-${image} bg-cover bg-center w-full h-64 mb-10` }>

      </section>
      <h1 className="text-bold text-center text-primary text-4xl font-bold">Fotos</h1>
      <p className="text-justify m-10">
      Trabalho com os mais diversificados comércios em live. Podendo ser roupas, cosméticos, calçados e etc.
      <br/>
      Durante a live desenvolvo toda a apresentação e direcionamento. Além de divulgar um dia antes nos stories com a data, horário e perfil a ser realizado, convidando  todos meus seguidores.
      </p>
      <section className="flex m-10 overflow-x-scroll snap-mandatory snap-x">
        <SliderCard jobType={ type7 } />
        <SliderCard jobType={ type8 } />
      </section>
    </main>
      <Header />
      <WppButton />
    </div>
  );
}