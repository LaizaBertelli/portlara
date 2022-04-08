import { IoLogoWhatsapp } from 'react-icons/io';

const CONTACT_URL = 'https://api.whatsapp.com/send?phone=5532998382788&text=Ol%C3%A1!%20Tenho%20interesse%20em%20seu%20trabalho.';

export default function WppButton () {
  return(
    <button onClick={ () => window.open(CONTACT_URL) }>
      <div className="rounded-full fixed z-50 bottom-2 right-2 hover:fill-{#F53B00}">
        <IoLogoWhatsapp className="hover:fill-[#F53B00]" size="50" color="rgba(245, 59, 0, 0.55)" />
      </div>
    </button>
  );
}
