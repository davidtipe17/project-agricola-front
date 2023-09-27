const HomePage = () => {
  return (
    <>
      {/* Seccion hero */}
      <section className="flex flex-row bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen  px-10">
        <div className="w-1/2 flex flex-col justify-center">
          <div className="w-4/5 m-auto ">
            <h1 className="text-6xl">
              Invierta en <span className="text-teal-300">fundadores que</span><span className="text-rose-800"> construyen el futuro</span>
            </h1>
            <h2 className="my-5 text-xl">
              Consigue capital y asientos en primera fila paralas startups y pequeñas empresas que te gustan ⁠por tan sólo 100 $.
            </h2>
            <div className="">
              <button className="mr-3  p-3 bg-sky-500 text-white rounded-lg text-base"> Unete a Wefunder</button>
              <button className="border-solid border-2 border-zinc-950 p-3 bg-inherit rounded-lg text-base">Explorar proyectos</button>
            </div>
          </div>
        </div>
        <div className="">
          <img className="w-10" src="https://img.freepik.com/foto-gratis/fondo-textura-hoja-verde_501050-120.jpg?w=1060&t=st=1695851753~exp=1695852353~hmac=a0f378d4e756d5767086d08bb410552b2df2ff13d6790d232624431b99924ec7" alt="" />
        </div>
      </section>
      {/* seccion data de inversion media fundadores y recaudaciones */}
      <section className="bg-cyan-50">
        <h3 className="text-center pt-10 text-base">ÚNASE A MÁS DE 500.000 INVERSORES ÁNGELES</h3>
        <div className="flex justify-around my-10">
          <div className="text-8xl">
            250 $
            <div className="text-2xl text-center">inversión media</div>
          </div>
          <div className="text-8xl">
            3.073<br/>
            <div className="text-2xl text-center">fundadores financiados</div>
          </div>
          <div className="text-8xl text-sky-500">
            658 M$<br/>
            <div className="text-2xl text-center text-black">recaudados en Wefunder</div>
          </div>
        </div>
        <div>
          "carrusel de tags de proyectos"
        </div>
      </section>
      {/* seccion proyectos */}
      <section>
        <h3>
          Explorar los poryectos que están recaudando ahora
        </h3>
        <span>
          Respaldad por importantes inversores y ángeles
        </span>
        <div>
          <div>
            <button>flecha izquierda</button>
            <button>flecha derecha</button>
          </div>
          <div>
            {/* cards de proyectos */}
            <div></div>
          </div>
          <button>Explorar proyectos</button>
        </div>
      </section>

      {/* seccion tabla de financiacion */}
      <section>
        <h3>Coinvierta con sociedades de capital riesgo y ángeles profesionales</h3>
        <span>en las mismas condiciones y con las mismas herramientas.</span>
        <div>
          <div>
            Tabla de Financiación
            <div>
              {/* aportantes */}
            </div>
            <div>
              {/* aportantes */}
            </div>
            <div>
              {/* aportantes */}
              +6.688 Wefunder inversores
            </div>
          </div>
        </div>
      </section>

    </>
  );
};
export default HomePage;
