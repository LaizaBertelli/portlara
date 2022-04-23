import Header from '../components/Header';
import WppButton from '../components/wppButton';
import { BsInfoCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export default function Budget() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <WppButton />
      <div className="grid grid-cols-2 gap-y-2 gap-x-2 mt-10 mx-2">
        <button onClick={ () => navigate('/photos') } className="bg-profile bg-cover h-60 flex w-50 flex-col-reverse">
          <div className="bg-translucentBlack flex w-full px-2 justify-between items-center">
            <p className="text-[#FFFFFF] text-bold text-xl">FOTOS</p>
            <BsInfoCircleFill color="white" />
          </div>
        </button>
        <button onClick={ () => navigate('/reels') } className="bg-profile bg-cover h-60 flex flex-col-reverse">
          <div className="bg-translucentBlack flex w-full px-2 justify-between items-center">
            <p className="text-[#FFFFFF] text-bold text-xl">REELS</p>
            <BsInfoCircleFill color="white" />
          </div>
        </button>
        <button onClick={ () => navigate('/divulgacoes') } className="bg-profile bg-cover h-60 flex flex-col-reverse">
          <div className="bg-translucentBlack flex w-full px-2 justify-between items-center">
            <p className="text-[#FFFFFF] text-bold text-xl">DIVULGAÇÕES</p>
            <BsInfoCircleFill color="white" />
          </div>
        </button>
        <button onClick={ () => navigate('/lives') } className="bg-profile bg-cover h-60 flex flex-col-reverse">
          <div className="bg-translucentBlack flex w-full px-2 justify-between items-center">
            <p className="text-[#FFFFFF] text-bold text-xl">LIVES</p>
            <BsInfoCircleFill color="white" />
          </div>
        </button>
        <button onClick={ () => navigate('/desfiles') } className="bg-profile bg-cover h-60 flex flex-col-reverse">
          <div className="bg-translucentBlack flex w-full px-2 justify-between items-center">
            <p className="text-[#FFFFFF] text-bold text-xl"> DESFILES</p>
            <BsInfoCircleFill color="white" />
          </div>
        </button>
      </div>
    </div>
  );
}