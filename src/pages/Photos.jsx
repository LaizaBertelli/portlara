import { useEffect, useState } from "react";
import { type1, type2, type3, type4, type5 } from "../assets/jobsInfos";
import Header from "../components/Header";
import SliderCard from "../components/SliderCard";
import WppButton from "../components/wppButton";

export default function Photos() {
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
      <p className="text-justify m-10"> {
        `As fotos seguidas de provadores são os serviços mais utilizados por lojas de roupas, acessórios e calçados que desejam uma divulgação completa de seus produtos. 
        Quando contratada são entregues inúmeras fotos (sem mínimo), vídeos de provadores postados nos stories e uma postagem no feed/ ou reels. Trabalho por quantidade de looks, sendo no mínimo 10 peças, conforme varia a quantidade o valor será aumentado com uma taxa fixa. 
        Para fotos de acessórios são seguidas as mesmas regras, porém não são contabilizadas as peças e sim o número de conjuntos com colares, pulseiras, anéis e etc. 
        Todas as fotos são enviadas por um link do Google Drive, garantindo a qualidade e fácil acesso ao lojista.`
      } </p>

      <section className="flex m-10 overflow-x-scroll snap-mandatory snap-x">
        <SliderCard jobType={ type1 } />
        <SliderCard jobType={ type2 } />
        <SliderCard jobType={ type3 } />
        <SliderCard jobType={ type4 } />
        <SliderCard jobType={ type5 } />
      </section>
    </main>
    <WppButton /> 
    </div>
  );
}