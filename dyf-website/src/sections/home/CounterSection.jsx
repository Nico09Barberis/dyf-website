import Counter from "../../components/common/Counter";

export default function CountersSection() {
  return (
    <section className="bg-[#BBDCE5] w-full py-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-around items-center gap-10 font-urbanist uppercase">
        
        {/* Contador 1 */}
        <div className="flex flex-col items-center">
          <Counter to={2500} duration={3000} />
          <p className="mt-2 text-3xl font-extrabold text-azulOscuro">
            Más de 2500 eventos realizados
          </p>
        </div>

        {/* Contador 2 */}
        <div className="flex flex-col items-center">
          <Counter to={8} duration={2000} />
          <p className="mt-2 text-3xl font-extrabold text-azulOscuro">
            Más de 8 años de experiencia
          </p>
        </div>

      </div>
    </section>
  );
}
