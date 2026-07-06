<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Juegos mímicos con títeres'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.p-5.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿De qué manera los títeres pueden convertirse en protagonistas del aprendizaje y la creatividad en la primera infancia? Se invita a descubrir cómo los juegos mímicos con títeres son una estrategia didáctica que estimula la expresión corporal, la imaginación y la comunicación. 
        p(data-aos="fade-left") A través de esta experiencia lúdica, se potencia el desarrollo emocional y social, facilitando ambientes de aprendizaje donde los niños y las niñas exploran, experimentan y crean.
    
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] La expresión corporal como lenguaje en la primera infancia
    
    p.mb-5 La expresión corporal constituye una de las formas más primarias y poderosas de comunicación en la primera infancia, ya que permite a los niños manifestar sus emociones, pensamientos y necesidades antes incluso de adquirir el lenguaje verbal.

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") La expresión corporal como lenguaje en la primera infancia
            p.mb-4(data-aos="fade-right") En el PDF <b>La expresión corporal como lenguaje en la primera infancia</b>, se analiza cómo el cuerpo se convierte en un medio esencial para el desarrollo cognitivo, emocional y social, promoviendo vínculos afectivos, creatividad y autoconocimiento. Este enfoque invita a los docentes a diseñar experiencias pedagógicas basadas en el movimiento y la expresión no verbal, reconociendo el cuerpo como un lenguaje fundamental en el proceso educativo.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> La expresión corporal como lenguaje en la primera infancia.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/3.png', alt='')
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] ¿Qué es el juego mímico? Elementos y beneficios

    .bg-full-width.bg-color-7
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p ¿Cómo puede el juego mímico transformar el aprendizaje y el desarrollo integral de los niños y las niñas en la primera infancia?
            .bg-color-9.p-5.mb-3(data-aos="fade-left")
              p.mb-0 Esta pregunta invita a explorar una forma de comunicación única y poderosa que va más allá de las palabras: el juego mímico. Esta modalidad de juego, basada en la expresión a través de gestos, movimientos y posturas sin el uso del lenguaje verbal, constituye un auténtico lenguaje corporal que estimula la creatividad, la comunicación no verbal y la inteligencia emocional desde los primeros años de vida (Usmer y Rollet, 2015).
            p(data-aos="fade-left") Para comprender plenamente el juego mímico, es fundamental identificar sus elementos esenciales:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/5.svg" alt="" style="width: 90px")
              h5.text-center Cuerpo 
              p.mb-0.text-center El cuerpo se convierte en el instrumento principal para expresar ideas, emociones y experiencias. Cada gesto y movimiento funciona como un mensaje simbólico, que ayuda a los niños a interpretar y dar sentido a su entorno de manera activa y significativa.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/6.svg" alt="" style="width: 90px")
              h5.text-center Imaginación
              p.mb-0.text-center La imaginación juega un papel crucial, pues permite crear personajes, historias y escenarios que enriquecen la experiencia lúdica, haciendo que el juego sea un espacio de invención y exploración sin límites.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/7.svg" alt="" style="width: 90px")
              h5.text-center Componente social
              p.mb-0.text-center El componente social es vital: el juego mímico favorece la interacción entre pares, promoviendo habilidades esenciales como la observación atenta, la empatía y la colaboración, que son la base para las relaciones saludables y el aprendizaje social (Casco, Cueva, Fernán y García, 2023).
    
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/8.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") Los beneficios del juego mímico están ampliamente respaldados por la investigación contemporánea. En el ámbito cognitivo, este tipo de juego mejora la memoria de trabajo, la atención selectiva y la capacidad para resolver problemas, al estimular el pensamiento simbólico y abstracto (Medina,1990). En el plano emocional, el juego mímico ofrece un espacio seguro para la expresión y regulación de sentimientos, contribuyendo así a la construcción de la autoestima y la seguridad emocional. Socialmente, potencia la empatía y la comunicación efectiva, facilitando la comprensión de señales no verbales y fortaleciendo vínculos afectivos sólidos.
        
            .bg-color-1.p-5(data-aos="fade-left")
              p.mb-0 En un contexto actual marcado por la diversidad y la inclusión, el juego mímico se posiciona como una herramienta pedagógica adaptable y accesible. Es especialmente valioso para niños con dificultades en el lenguaje verbal, discapacidades sensoriales o que se encuentran en contextos vulnerables, pues facilita la comunicación y el vínculo afectivo a través de canales expresivos alternativos.

        p(data-aos="fade-left") Desde la perspectiva educativa, incorporar el juego mímico en las prácticas pedagógicas permite crear ambientes de aprendizaje activos, dinámicos y estimulantes. Los educadores pueden diseñar actividades que promuevan la espontaneidad, la experimentación corporal y la expresión artística, favoreciendo no solo la creatividad, sino también la autonomía y el desarrollo integral de los estudiantes en la primera infancia.

        .row.justify-content-center.align-items-stretch
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-2.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 01
                  h5.mb-0 ¿De qué manera el juego mímico puede transformar el enfoque pedagógico en la educación infantil para atender la diversidad y promover un desarrollo integral?



          .col-lg-6.mb-3.mb-lg-0
            .bg-color-2.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 02
                  h5.mb-0 ¿Cómo se pueden innovar las prácticas educativas para aprovechar al máximo el poder expresivo y formativo del lenguaje corporal?
    
    p.mb-5 Estas preguntas invitan a abrir nuevas perspectivas para enriquecer el proceso educativo con creatividad, inclusión y sensibilidad emocional, potenciando así un aprendizaje verdaderamente significativo.

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Diseño y elaboración de títeres con materiales reutilizables
    
    p.mb-5 El diseño y elaboración de títeres con materiales reutilizables representa una estrategia educativa que integra arte, conciencia ecológica y desarrollo infantil.

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Diseño y elaboración de títeres con materiales reutilizables
            p.mb-4(data-aos="fade-right") En el PDF <b>Diseño y elaboración de títeres con materiales reutilizables</b>, se explora cómo esta práctica no solo estimula la creatividad, la motricidad fina y la expresión emocional, sino que también fortalece el pensamiento crítico y la responsabilidad ambiental desde los primeros años de vida. Esta propuesta invita a revalorizar los objetos cotidianos como medios pedagógicos significativos, promoviendo una educación inicial comprometida con la sostenibilidad y la formación integral del niño.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Diseño y elaboración de títeres con materiales reutilizables.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/11.png', alt='')
    
    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Técnicas para animar títeres sin palabras
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/12.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-9.p-5.mb-3(data-aos="fade-left")
          p.mb-0 ¿Cuál es el impacto real y profundo que tiene la comunicación no verbal en el desarrollo integral de la primera infancia?
        p(data-aos="fade-left") Esta pregunta invita a explorar el lenguaje del cuerpo y del movimiento como una forma esencial de expresión y aprendizaje. La animación de títeres sin palabras es una herramienta pedagógica innovadora y poderosa que potencia la creatividad y la expresión artística en la infancia. Pero va mucho más allá: también favorece las competencias emocionales, cognitivas y sociales fundamentales para un desarrollo pleno.
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/13.png")
            .col-lg-7
              p Las investigaciones actuales en neurociencia y psicología del desarrollo confirman que, antes de dominar el lenguaje verbal, los niños se comunican a través del cuerpo, los gestos y las expresiones (Tejada, 2019). Por eso, la animación silenciosa de títeres se convierte en un canal auténtico para que los niños y las niñas exploren y expresen emociones, cuenten historias y compartan experiencias, utilizando el movimiento como vehículo de sentido. A través de técnicas específicas, como el control de la velocidad, la dirección y la calidad del movimiento, la postura corporal y la gestualidad precisa, es posible transmitir una amplia gama de sentimientos y situaciones complejas, favoreciendo la comprensión, la empatía y la conexión emocional sin necesidad de palabras.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/14.png")
            .col-lg-7
              p Además, el juego con títeres sin diálogo estimula la imaginación activa tanto en quien anima como en quien observa, promoviendo el pensamiento simbólico y la interpretación creativa. La ausencia de lenguaje verbal amplía las posibilidades de inclusión, pues facilita la participación de niños con diversidad comunicativa, discapacidades auditivas o dificultades en el lenguaje, generando un ambiente pedagógico inclusivo y rico en diversidad expresiva.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/15.png")
            .col-lg-7
              p Desde el punto de vista motriz, animar títeres sin palabras exige precisión en la motricidad fina, coordinación ojo-mano y control postural, habilidades que fortalecen la concentración y la destreza corporal. Al mismo tiempo, esta práctica genera un ambiente lúdico que favorece el desarrollo socioemocional, incrementando la autoestima, la autonomía y la capacidad para resolver problemas en contextos creativos.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/16.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Para el educador, integrar estas técnicas implica adoptar un enfoque pedagógico integral que conecta arte, emoción y cognición, facilitando experiencias de aprendizaje significativas y transformadoras que trascienden el aula. Además, la utilización de materiales reciclados para la creación de títeres aporta un valor adicional, promoviendo la sostenibilidad ambiental y el cuidado del planeta desde la educación inicial.
    
        .bg-color-1.p-5.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/17.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 ¿De qué manera la comunicación no verbal a través de la animación de títeres puede transformar la forma en que los niños experimentan y comprenden sus emociones y relaciones?
              h5 ¿En qué sentido esta estrategia pedagógica puede fortalecer un entorno inclusivo, creativo y sensible a la diversidad en la primera infancia?
        p Profundizar en estas preguntas abre la puerta a valorar el poder transformador del silencio y el movimiento en la educación artística y emocional, recordando que a veces lo que no se dice con palabras es lo que más comunica.
    
    #t_2_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.5] Planeación de experiencias pedagógicas con juegos mímicos
    
    p.mb-5 Para conocer sobre esta temática, lo invitamos a ver el siguiente video.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/qBDhc4zjKk0?si=hHvYbE_qST03vb5Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    #t_2_6.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.6] Propuesta creativa: juego mímico con títeres para la educación inicial
    
    p.mb-5 El desarrollo de la expresión no verbal en la primera infancia constituye una base fundamental para la comunicación, el juego y el aprendizaje integral.

    .bg-full-width.bg-color-6
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Propuesta creativa: juego mímico con títeres para la educación inicial
            p.mb-4(data-aos="fade-right") En el PDF <b>Propuesta creativa, se aborda una estrategia pedagógica innovadora que combina el lenguaje corporal</b>, la narrativa simbólica y la creación artística para favorecer el desarrollo socioemocional, la imaginación y la comunicación alternativa. Esta propuesta no solo responde a los principios del aprendizaje activo y significativo, sino que también ofrece herramientas para fomentar la creatividad, la empatía y la participación de los niños y niñas desde una perspectiva lúdica, inclusiva y transformadora.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Propuesta creativa: juego mímico con títeres para la educación inicial.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/18.png', alt='')
    
    .bg-full-width.bg-color-8.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/19.svg", style="max-width: 90px").mx-auto
          .col-lg
            p Después de explorar el poder expresivo del cuerpo y los títeres sin palabras, se abre una nueva ventana a la imaginación: las sombras.
            p.mb-0 Ahora, se invita a descubrir cómo el juego con luces y formas puede transformar una pared en un escenario mágico lleno de historias silenciosas.





    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/111348" target="_blank" rel="noopener noreferrer") Ridocci, M. (2014). Expresión corporal arte del movimiento: las bases prácticas del lenguaje expresivo: ( ed.). Biblioteca Nueva.  





            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/67082" target="_blank" rel="noopener noreferrer") Porstein, A. M. (2016). Cuerpo, juego y movimiento en el Nivel Inicial: propuestas de educación física y expresión corporal: ( ed.). Homo Sapiens Ediciones.  




            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://repository.udistrital.edu.co/items/25fbfbdf-2f55-44bc-b48b-5ab70d77dad9 " target="_blank" rel="noopener noreferrer") Portilla Ortega, J. A. Sr. Títere, caja de herramientas didácticas y educativas para crear narrativas entre maestros y estudiantes por medio del teatro de títeres. 




            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.academia.edu/88079227/Gu%C3%ADa_metodol%C3%B3gica_para_el_manejo_adecuado_de_t%C3%ADteres_en_el_aula_taller_de_la_carrera_de_educaci%C3%B3n_parvularia_de_la_universidad_t%C3%A9cnica_de_Cotopaxi_de_la_parroquia_Eloy_Alfaro_del_cant%C3%B3n_Latacunga_en_la_Provincia_de_Cotopaxi_durante_el_per%C3%ADodo_2011_2012 " target="_blank" rel="noopener noreferrer") Cofre Casillas, B. (2013). Guía metodológica para el manejo adecuado de títeres en el aula taller de la carrera de educación parvularia de la universidad técnica de Cotopaxi de la parroquia Eloy Alfaro del cantón Latacunga, en la Provincia de Cotopaxi durante el período 2011-2012. 




            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.psychologytoday.com/mx/blog/el-uso-de-marionetas-impulsa-el-aprendizaje-de-los-ninos " target="_blank" rel="noopener noreferrer") El uso de marionetas impulsa el aprendizaje de los niños. (s.f.). Psychology Today. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href=" https://unisimon.edu.co/blog/eventos-y-actividades-juego-de-mimica-o-emociones/2061 " target="_blank" rel="noopener noreferrer") Eventos y actividades: juego de mímica o emociones. (s.f.). Universidad Simón Bolivar - USB.







            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=ukDJcf65rkY" target="_blank" rel="noopener noreferrer") Ministerio de Educación Nacional. (2020, 21 de agosto). 'Títeres y objetos lúdicos para anidar encuentros’ [Video]. YouTube.  




            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=cT0i-EbnJi0" target="_blank" rel="noopener noreferrer") universidadurjc. (2018, 11 de enero). Expresión corporal. Grado en Educación Infantil [Video]. YouTube.  

  


           


          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
