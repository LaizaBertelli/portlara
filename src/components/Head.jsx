import { useNavigate } from "react-router-dom";

export default function Head() {
  const navigate = useNavigate();
  return (
    <div className="mt-10 w-full flex justify-around bg-white h-60">
      <section className="flex basis-2/4 flex-col justify-center p-4">
        <p className="text-sm font-thin">DIGITAL INFLUENCER E MODELO</p>
        <h2 className="mx-auto text-2xl font-semibold">Melhore suas vendas com propagandas</h2>
      </section>
      <section className="flex basis-2/4 flex-col h-full place-content-evenly">
        <div className="m-auto bg-profile bg-cover w-28 h-28 rounded-full"></div>
        <button className="bg-[#F53B00] text-white text-lg p-2 w-3/5 m-auto rounded-full" onClick={ () => navigate('/budget') }>CONTRATE</button>
      </section>
    </div>
  );
}
