import Counter from "../../components/common/Counter";

export default function CountersSection() {
  return (
    <section className="bg-slate-200 w-full py-20 my-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-around items-center gap-10 font-urbanist uppercase">
        {/* Contador 1 */}
        <div className="flex flex-col items-center">
          <Counter to={2500} duration={3000} />
          <p className="mt-2 text-3xl font-extrabold text-azulOscuro">Eventos realizados</p>
        </div>

        {/* Contador 2 */}
        <div className="flex flex-col items-center">
          <Counter to={2500} duration={3000} />
          <p className="mt-2 text-3xl font-extrabold text-azulOscuro">Clientes satisfechos</p>
        </div>
      </div>
    </section>
  );
}
