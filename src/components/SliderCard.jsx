export default function SliderCard({ jobType }) {
  return (
    <div className="drop-shadow-lg bg-white w-1/2 h-72 flex flex-col rounded-lg m-2 shrink-0 snap-center justify-evenly items-center">
      <p className="font-bold">{ jobType.type }</p>
      <section>
        <span className="text-xs text-left font-thin">R$
        </span>
        <p className="text-3xl text-center font-bold">{ jobType.priceRange }</p>
      </section>
      <ul className="text-sm">
        <li>{ jobType.oneTime }</li>
        <li>{ jobType.biweekly }</li>
        <li>{ jobType.weekly }</li>
      </ul>
      <p className="text-xs text-center">*Valores válidos para 10 looks</p>
    </div>
  );
}
