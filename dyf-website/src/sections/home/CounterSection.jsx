import Counter from "../../components/common/Counter";

export default function CountersSection() {
  return (
    <section className="bg-slate-200 w-full py-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-around items-center gap-10">
        {/* Contador 1 */}
        <div className="flex flex-col items-center">
          <Counter to={2500} duration={3000} />
          <p className="mt-2 text-3xl font-medium">Eventos realizados</p>
        </div>

        {/* Contador 2 */}
        <div className="flex flex-col items-center">
          <Counter to={2500} duration={3000} />
          <p className="mt-2 text-3xl font-medium">Clientes satisfechos</p>
        </div>
      </div>
    </section>
  );
}
