import Header from '../components/Header';
import WppButton from '../components/wppButton';
import BudgetCard from '../components/BudgetCard';
import placehodler from '../assets/placeholder.jpg';

const servicesTypes = ['Fotos',
'Reels',
'Divulgações', 
'Lives', 
'Desfiles',
];

export default function Budget() {
  return (
    <div>
      <Header />
      <WppButton />
      {
        servicesTypes.map((service, index) => (
        <BudgetCard key={ index } image={ placehodler } title={ service } text="akdjaksdhaksjdhaksjdh" />
        ))
      }
      {/* <BudgetCard image={ placehodler } title="PROPAGANDA" /> */}
    </div>
  );
}