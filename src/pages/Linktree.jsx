import { useNavigate } from "react-router-dom";

const CONTACT_URL = 'https://api.whatsapp.com/send?phone=5532998382788&text=Ol%C3%A1!%20Tenho%20interesse%20em%20seu%20trabalho.';
const GALMBOX_URL = 'https://sua.glambox.com.br/convite/?c=LARI010072';
const THENEWS_URL = 'https://thenewscc.com.br/indicacao/?grsf=zsfrqq';

export default function Linktree () {
  const navigate = useNavigate();
  return (
    <div className="bg-linktree h-screen w-screen flex-col flex justify-around items-center">
      <div className="bg-linktree-pf bg-cover w-52 h-52 rounded-full"></div>
      <button className="bg-[#F53B00] text-white h-10 w-4/5 text-xl text-bold" onClick={ () => window.open(CONTACT_URL) }>CONTATO</button>
      <button className="bg-[#F53B00] text-white h-10 w-4/5 text-xl text-bold" onClick={ () => navigate('/home') }>MIDIA KIT</button>
      <button className="bg-[#F53B00] text-white h-10 w-4/5 text-xl text-bold" onClick={ () => window.open(GALMBOX_URL) }>GLAMBOX</button>
      <button className="bg-[#F53B00] text-white h-10 w-4/5 text-xl text-bold" onClick={ () => window.open(THENEWS_URL) }>THE NEWS</button>
    </div>
  );
}
