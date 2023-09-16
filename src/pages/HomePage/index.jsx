const HomePage = () => {
  return (
    <>
      {/* Seccion hero */}
      <div>
        <h1>
          Invierta en fundadores que cosntruyen el futuro
        </h1>
        <h2>
          Consigue capital y asientos en primera fila paralas startups y pequeñas empresas que te gustan—⁠por tan sólo 100 $.
        </h2>
        <div>
          <button className=""> Unete a Wefunder</button>
          <button className="" >Explorar proyectos</button>
        </div>
      </div>
      {/* seccion data de inversion media fundadores y recaudaciones */}
      <section>
        <h3>ÚNASE A MÁS DE 500.000 INVERSORES ÁNGELES</h3>
        <div>
          <div>
            250 $
            <span>inversión media</span>
          </div>
          <div>
            3.073
            <span>fundadores financiados</span>
          </div>
          <div>
            658 M$
            <span>recaudados en Wefunder</span>
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
