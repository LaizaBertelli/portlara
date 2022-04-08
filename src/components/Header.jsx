import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="h-10 w-screen p-1 bg-[#E5E5E5] fixed top-0">
      <button onClick={ () => navigate('/home') }>
        <h1 className="text-lg text-[#F53B00] font-bold">@LARABERTELLI_</h1>
      </button>
    </div>
  );
}
