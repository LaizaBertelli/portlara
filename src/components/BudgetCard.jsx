export default function BudgetCard({ image, text, title }) {
  
  return (
    <div>
      <img src={ image } alt="lara em um de seus trabalhos como modelo" />
      <h1>{ title }</h1>
      <p>{ text }</p>
    </div>
  );
}
