<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Juegos de sombras'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-5.p-5.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Se abre un espacio para descubrir cómo la luz y la oscuridad pueden convertirse en herramientas poderosas para la expresión y la imaginación infantil. Los juegos de sombras invitan a crear mundos mágicos con las manos, los objetos y la proyección de figuras, favoreciendo no solo el desarrollo de la creatividad, sino también la atención, la narración y la percepción visual.
        p(data-aos="fade-left") A través de esta experiencia se aprenderá a diseñar actividades significativas que estimulan el pensamiento simbólico y fortalecen la comunicación no verbal en la primera infancia. ¡Preparémonos para jugar con la luz y dejar que la sombra hable por sí sola!
    
    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Introducción al juego de sombras: luz, forma y movimiento
    
    p.mb-5 El juego de sombras ofrece una posibilidad educativa poderosa y accesible para estimular la creatividad, la expresión y la exploración científica en la primera infancia.

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Introducción al juego de sombras: luz, forma y movimiento
            p.mb-4(data-aos="fade-right") En el PDF <b>Introducción al juego de sombras</b>, se presenta cómo esta práctica lúdica permite a niños y niñas construir relatos visuales, experimentar con fenómenos físicos como la luz y la opacidad, y desarrollar habilidades motrices, emocionales y sociales. A través del uso de materiales simples, como una fuente de luz y objetos cotidianos, se genera un espacio donde la imaginación cobra vida, favoreciendo una educación integral que articula arte, ciencia y juego desde una mirada pedagógica sensible y transformadora.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_6.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Introducción al juego de sombras: luz, forma y movimiento.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/3.png', alt='')
    
    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Creación de escenarios y personajes para juegos de sombras
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-5.mb-3(data-aos="fade-left")
          h5 ¿Qué historias podrían contarse si solo se tuvieran luz, manos y cartulina?
          p Esa es una pregunta provocadora que lleva a mirar con otros ojos una de las expresiones artísticas más antiguas y significativas: el teatro de sombras. Este arte milenario, originario de Asia, con registros en China e India desde hace más de dos mil años, sigue vivo y vigente como una herramienta de expresión, creación y aprendizaje en contextos educativos contemporáneos.
          h5 ¿Por qué? Porque el juego de sombras no solo entretiene: comunica, transforma, educa.
        p(data-aos="fade-left") A continuación, se profundizara en cómo diseñar y construir escenarios y personajes para juegos de sombras desde un enfoque pedagógico, artístico y lúdico. Comprender esta construcción es fundamental para llevar a la infancia experiencias significativas que desarrollen la capacidad creadora a través de la expresión artística.

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Cuando se crean personajes y escenarios para el juego de sombras, se construyen también mundos simbólicos donde las niñas y los niños interpretan, imaginan, representan y narran. En la infancia, estos elementos son esenciales porque canalizan emociones, estimulan el lenguaje, promueven el pensamiento abstracto y favorecen la socialización.
        h5 En términos educativos, el juego de sombras:
    
        .bg-color-9.p-5.mb-3(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Potencia la expresión oral y corporal.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Fortalece la creatividad y el pensamiento visual.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Desarrolla la motricidad fina.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Fomenta la cooperación cuando se realiza en grupo.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Permite que cada niño y niña asuma un rol activo en la creación de sus propios relatos.
        p Los escenarios y personajes funcionan como puentes entre el mundo interno y externo del niño. A través de ellos, se narra la cotidianidad, se recrean sueños y se transforma la realidad.
        h5 Gracias al acceso a nuevos materiales y recursos didácticos, hoy se pueden combinar técnicas tradicionales con elementos contemporáneos. Se recomienda trabajar con:
    
    .bg-full-width.bg-color-7
      .p-4.p-md-5
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Cartulina negra, acetato o foam
                p.text-center Para crear siluetas resistentes.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Palillos de brocheta, pajillas reutilizables o lápices reciclados
                p.text-center Para sujetar las figuras.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Papel de colores translúcidos (papel celofán o papel vegetal)
                p.text-center Para agregar detalles de color.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Fuentes de luz LED recargables o linternas pequeñas
                p.text-center Seguras y manejables por los niños.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Pantallas de tela blanca (pueden ser una sábana o marco con papel mantequilla)
                p.text-center Que permitan una buena proyección.
    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/6.png', alt='')

        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/12.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-1.p-5(data-aos="fade-left").mb-3
              p.mb-0 Además, se puede integrar tecnología básica para grabar la obra o proyectarla en ambientes virtuales, lo cual amplía las posibilidades en contextos educativos híbridos o en casa.
            p(data-aos="fade-left")  Crear un personaje para el teatro de sombras es dar vida a una intención. Aunque se trabaja con siluetas, se busca transmitir emociones y acciones a través del movimiento y la forma. Algunas claves importantes son:
        
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/13.svg" alt="" style="width: 90px")
              h5.text-center Claridad en el contorno 
              p.mb-0.text-center Cuanto más definida sea la figura, más fácil será identificarla en la sombra.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/14.svg" alt="" style="width: 90px")
              h5.text-center Posturas expresivas
              p.mb-0.text-center Brazos levantados, cabeza inclinada, piernas flexionadas.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/15.svg" alt="" style="width: 90px")
              h5.text-center Elementos móviles
              p.mb-0.text-center Alas, extremidades articuladas, bocas que se abren (usando sujetadores de papel o remaches).
        
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/16.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") En el aula o desde el hogar, el proceso de diseño puede comenzar con dibujos simples, inspirados en cuentos, animales, profesiones o personajes imaginarios. La pregunta “¿quién quiero que aparezca en mi historia?” puede ser una excelente puerta de entrada para que los niños inventen y elaboren sus propios protagonistas.
        p Los escenarios no solo ambientan; orientan la narrativa. Pueden representar un bosque encantado, una ciudad flotante, una playa solitaria o el interior de una casa. En el juego de sombras, los escenarios se pueden:
    
        .bg-color-9.p-4(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Crear como fondos estáticos con papel translúcido pintado o recortado.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Elaborar como capas móviles que se superponen para dar profundidad.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Diseñar con elementos móviles, como puertas que se abren o árboles que se mecen.

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/17.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-8.p-5.mb-3(data-aos="fade-left")
          p.mb-0 El uso del color puede lograrse añadiendo filtros de celofán sobre las fuentes de luz o en el papel de fondo. Además, la música ambiental o los efectos sonoros (grabados o producidos con objetos caseros) aportan dimensión sensorial a la puesta en escena.
        p(data-aos="fade-left") Una de las claves para el éxito del juego de sombras en educación inicial es permitir que los niños sean parte activa del proceso. Algunas estrategias recomendadas son:
    
    .bg-full-width.bg-color-7
      .p-4.p-md-5
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/18.svg" alt="" style="width: 90px")
              h5.text-center Taller de creación colectiva
              p.mb-0.text-center En donde se construya un escenario común y cada niño diseñe su personaje.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/19.svg" alt="" style="width: 90px")
              h5.text-center Narrativas abiertas
              p.mb-0.text-center Se plantea un inicio de historia y los estudiantes crean su desarrollo y final con sombras.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/20.svg" alt="" style="width: 90px")
              h5.text-center Exploración libre
              p.mb-0.text-center Ofrecer materiales variados para que exploren formas, luz y movimiento sin una consigna cerrada.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/21.svg" alt="" style="width: 90px")
              h5.text-center Obras por ciclos
              p.mb-0.text-center Realizar pequeñas representaciones al finalizar cada unidad pedagógica, conectando los aprendizajes.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/22.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Numerosos estudios recientes, como los recopilados por la UNESCO (2024) y el informe Marco de la UNESCO para la Cultura y la Educación Artística, demuestran que las actividades artísticas como el teatro de sombras:
    
        .bg-color-9.p-4.mb-3(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-2.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Aumentan la capacidad de atención sostenida.
            li.mb-2.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Mejoran la comprensión narrativa.
            li.mb-2.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Estimulan el desarrollo emocional a través del juego simbólico.
            li.mb-2.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Fomentan la resolución creativa de conflictos al representar situaciones cotidianas.
        p Por tanto, su implementación no es un mero recurso de entretenimiento, sino una experiencia formativa completa.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/23.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") ¿Se ha pensado alguna vez que con tan solo una figura recortada y una fuente de luz se puede enseñar sobre empatía, secuencia narrativa, creatividad y trabajo colaborativo?
    
        .bg-color-5.p-5(data-aos="fade-left").mb-3
          p.mb-0 El teatro de sombras, y en particular la creación de sus personajes y escenarios, abre un espacio didáctico donde convergen el arte, el juego y la pedagogía. Invita a detenerse, imaginar, construir y compartir. Al integrar esta técnica en la educación inicial, se ofrece a los niños y las niñas no solo un pasatiempo, sino una forma de expresarse, de interpretar el mundo y de construir identidad.
        p En cada figura creada con las manos hay una historia que merece ser contada. Y en cada sombra proyectada, hay una oportunidad para aprender desde el asombro.

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Juego dramático a partir de siluetas: contar con el cuerpo y la luz
    
    p.mb-5 El juego dramático a partir de siluetas constituye una estrategia pedagógica poderosa que permite a los niños y niñas explorar el lenguaje del cuerpo, la luz y el movimiento como formas de expresión y creación narrativa.

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Juego dramático a partir de siluetas: contar con el cuerpo y la luz
            p.mb-4(data-aos="fade-right") En el PDF <b>Juego dramático a partir de siluetas</b>, se analiza cómo esta práctica integra lo estético, lo emocional y lo cognitivo, generando experiencias inclusivas que estimulan la imaginación, la empatía y la comunicación no verbal desde la primera infancia. A través de propuestas didácticas accesibles, se promueve una educación sensible, creativa y centrada en el desarrollo integral del niño.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_7.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Juego dramático a partir de siluetas: contar con el cuerpo y la luz.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/24.png', alt='')
    
    #t_3_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.4] Juegos de sombras en contextos vulnerables: experiencias significativas
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/25.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-5.mb-3(data-aos="fade-left")
          h5 ¿Cómo puede una sombra convertirse en una herramienta de transformación emocional y educativa?
          p En territorios atravesados por la desigualdad, la violencia o la carencia de recursos básicos, los niños y las niñas siguen teniendo una poderosa necesidad: jugar. A pesar de las adversidades, el juego se convierte en una forma de resistir, de afirmarse, de narrarse a sí mismos. Y entre los recursos más accesibles y mágicos, se encuentra el juego de sombras.
          p.mb-0 Esta técnica, basada en la proyección de formas mediante la luz, no solo despierta la curiosidad y la imaginación, sino que se presenta como una estrategia de intervención psicoeducativa altamente efectiva en contextos de vulnerabilidad.
        p(data-aos="fade-left") Es posible trabajar con muy pocos materiales, una tela blanca, una linterna y figuras de cartón, y, sin embargo, lograr grandes impactos en el desarrollo emocional, social y creativo de la infancia.

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/26.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-5.p-5(data-aos="fade-left").mb-3
          p.mb-0 En zonas rurales, barrios marginales, campamentos humanitarios o instituciones de protección, es frecuente encontrar condiciones que dificultan el acceso a experiencias culturales y expresivas. Sin embargo, las investigaciones recientes subrayan que el arte y el juego son factores protectores claves en la infancia vulnerable.
        p Según el informe de UNICEF (2023), los programas basados en el juego creativo, como el teatro de sombras, ayudan a fortalecer la resiliencia infantil, mejorar la comunicación emocional y reconstruir vínculos de confianza entre pares y adultos significativos.
        p Además, estos juegos permiten trabajar con el cuerpo, el espacio, la luz y la narrativa, sin necesidad de tecnologías complejas. A partir de este enfoque, se facilita la inclusión de niños y niñas con diferentes niveles de alfabetización, culturas y realidades emocionales.
        p A lo largo de la última década, se han desarrollado múltiples iniciativas que demuestran el impacto positivo del juego de sombras en comunidades vulnerables. Algunas de las más destacadas son:

    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Palestina" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Palestina
            p En los campos de refugiados de Gaza, el proyecto “Luz para sanar” implementado por la UNESCO utiliza teatro de sombras con niños que han vivido bombardeos. A través de cuentos simbólicos proyectados en tela, los participantes logran representar sus miedos, duelos y esperanzas.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/27.svg', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Colombia" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Colombia
            p En zonas rurales del Chocó y la Guajira, el Ministerio de Cultura ha apoyado programas donde las sombras sirven para rescatar mitos y leyendas ancestrales, conectando a los niños con su identidad cultural y promoviendo el respeto por la diversidad.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/28.svg', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Brasil" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Brasil
            p En las favelas de Río de Janeiro, se han creado espacios seguros donde el juego de sombras es empleado por educadores sociales para trabajar la prevención del reclutamiento juvenil y la violencia doméstica, estimulando alternativas pacíficas de convivencia.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/29.svg', alt='', style="width: 100%;")
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="México" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 México
            p En comunidades afectadas por la migración forzada, las aulas móviles de Save the Children incorporan el teatro de sombras para que niñas y niños narren sus travesías y refuercen su sentido de pertenencia.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/30.svg', alt='', style="width: 100%;")
    
    .bg-full-width.bg-color-10.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/31.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Estos ejemplos inspiran y confirman que, con creatividad, es posible hacer del juego una herramienta educativa transformadora, incluso en los entornos más difíciles.
    
    h2(data-aos="fade-left").mb-5 Propuesta pedagógica: “Sombras que cuentan y acompañan”

    .row.mb-5.align-items-center
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/32.svg", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        p(data-aos="fade-left") <b>Propósito</b>. Fomentar la expresión emocional, la creatividad y el sentido de pertenencia en niños y niñas en contextos vulnerables, a través del diseño e implementación de juegos de sombras.
        p Etapas para desarrollar la experiencia:
    
    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/33.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Observación y exploración libre")
            p Invitar a explorar cómo se proyecta el cuerpo o las manos con una fuente de luz. ¿Qué formas se generan? ¿Qué emociones surgen al jugar con ellas?
    
          .div(titulo="Creación de siluetas")
            p Usar cartón reciclado, bolsas negras o materiales disponibles para construir personajes, animales o símbolos que representen situaciones vividas o deseadas.
    
          .div(titulo="Narración colectiva")
            p A través de las sombras, dar vida a cuentos propios o colectivos que hablen de los sueños, temores o vivencias de los participantes.
    
          .div(titulo="Reflexión compartida")
            p Facilitar una conversación donde los niños puedan hablar sobre lo que representaron. ¿Por qué eligieron ese personaje? ¿Qué mensaje quisieron transmitir?
          .div(titulo="Documentación visual")
            p Registrar la actividad mediante fotos o dibujos para construir una memoria colectiva que reafirme el valor de cada historia compartida.
    
    .bg-full-width.bg-color-10.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/31.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Este proceso promueve la escucha activa, la empatía y la autorregulación emocional, dimensiones esenciales en contextos donde la infancia ha sido vulnerada.
    
    h2(data-aos="fade-left") Impacto en el desarrollo integral infantil
    p.mb-5 El juego de sombras impacta positivamente en distintas dimensiones del desarrollo:

    .bg-full-width.bg-color-7
      .p-4.p-md-5
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/33.svg" alt="" style="width: 90px")
              h5.text-center Afectivo-emocional
              p.mb-0.text-center Permite reconocer, expresar y transformar emociones complejas, facilitando la elaboración de vivencias difíciles.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/34.svg" alt="" style="width: 90px")
              h5.text-center Cognitivo-creativo
              p.mb-0.text-center Estimula la planificación, la toma de decisiones, la narración y la imaginación visual.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/35.svg" alt="" style="width: 90px")
              h5.text-center Social y comunicativo
              p.mb-0.text-center Favorece el trabajo colaborativo, la empatía y la expresión oral.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/36.svg" alt="" style="width: 90px")
              h5.text-center Identitario y cultural
              p.mb-0.text-center Refuerza el sentido de pertenencia, visibiliza saberes comunitarios y rescata relatos propios.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/37.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Como recurso educativo, permite articular el arte, el juego y la pedagogía de manera coherente con las necesidades de la primera infancia en riesgo.
        .bg-color-1.p-5.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/38.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 ¿Es posible transformar el dolor en juego? 
              h5 ¿Puede una linterna y una pared blanca convertirse en un puente para sanar?
        p(data-aos="fade-left") Cuando se habita la educación desde el arte, se abre la posibilidad de ver lo invisible y escuchar lo que no ha sido dicho. En contextos vulnerables, el juego de sombras no es solo una técnica artística, sino un acto de ternura y dignidad.
        p Por eso, al diseñar tus estrategias pedagógicas, vale la pena preguntarse:

        .bg-color-9.p-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/39.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 ¿Cómo invitar a los niños y las niñas a narrarse desde la luz de sus sombras?
              h5 ¿Qué papel puede desempeñar tu labor docente en esa construcción de sentido?
    
    #t_3_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.5] Propuesta artística con juegos de sombras y roles
    
    p.mb-5 La integración del arte en la educación infantil no requiere de grandes recursos, sino de sensibilidad, creatividad y propuestas que inviten a los niños a expresarse desde múltiples lenguajes.

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Propuesta artística con juegos de sombras y roles
            p.mb-4(data-aos="fade-right") En el PDF <b>Propuesta artística con juegos de sombras y roles</b>, se explora cómo el uso de la luz, las siluetas y la interpretación de personajes puede convertirse en una experiencia educativa transformadora. A través de diversas etapas —exploración, creación, escenificación y reflexión—, esta propuesta promueve la expresión emocional, la comunicación, el pensamiento simbólico y el trabajo colaborativo, ofreciendo un camino lúdico y significativo para fortalecer el desarrollo integral desde la primera infancia.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_8.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Propuesta artística con juegos de sombras y roles.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/40.png', alt='')

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

             p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/177006 " target="_blank" rel="noopener noreferrer") Cariello, G. (2018). ¡Arriba el telón! Juegos de teatro para niños: ( ed.). Homo Sapiens Ediciones. 







            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://repositorio.une.edu.pe/entities/publication/f1a45b0d-b63b-42b1-9263-752b48a58c56 " target="_blank" rel="noopener noreferrer") Tovalino Arce, L. N. (2018). El juego dramático y el desarrollo de las habilidades sociales en niños de 4 años.  

  




            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://reunir.unir.net/handle/123456789/1886  " target="_blank" rel="noopener noreferrer") Rivero-García, L. M. (2013). La expresión dramática en Educación infantil: desarrollo de las capacidades comunicativas a través del juego dramático (Bachelor's thesis). 






            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://salaamarilla2009.blogspot.com/2014/01/experiencias-con-la-luz-y-la-sombra.html " target="_blank" rel="noopener noreferrer") Experiencias con luces y sombras. (s.f.). Mi Sala Amarilla. 






            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://kinuma.com/es/blog/los-beneficios-del-teatro-de-sombras.html " target="_blank" rel="noopener noreferrer") (s.f.). Kinuma. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=4I6-CsCeirA " target="_blank" rel="noopener noreferrer") Arte y Parte. (2015, 29 de junio). Arte y Parte: Sombra sombrita [Video]. YouTube. 

 




            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=UYKj4bbnw84 " target="_blank" rel="noopener noreferrer") CCETegucigalpa. (2020, 5 de septiembre). Taller Teatro de sombras [Video]. YouTube. 

  


          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes opciones describe mejor el papel de la imaginación en el desarrollo infantil?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Una habilidad que distrae a los niños de su entorno real.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Un recurso que debe limitarse para que no interfiera con el aprendizaje estructurado.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Un proceso mental que fortalece la creatividad, el juego simbólico y la expresión emocional.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'Una característica que aparece solo en contextos escolares estructurados.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál es un beneficio pedagógico clave de los juegos mímicos con títeres en la educación inicial?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Disciplinar a los niños de manera indirecta.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Favorecer la repetición mecánica de contenidos.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Reemplazar al docente como mediador del aprendizaje.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Estimular la expresión corporal y emocional.',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué competencia se potencia principalmente al trabajar juegos de sombras con niños y niñas en contextos vulnerables?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Desarrollo de la memoria visual a corto plazo.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Creatividad e imaginación a través de la proyección de historias.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Coordinación motora fina.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Lectura de textos informativos.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cuál es un aspecto clave al diseñar una propuesta de juego mímico con títeres en la educación inicial?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Que se permita la improvisación y expresión de emociones.  ',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Que los títeres se parezcan a personajes de moda.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Que los niños no participen directamente.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Que se use lenguaje técnico y formal durante la actividad.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Por qué son importantes los juegos de roles en contextos vulnerables?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Porque compensan las deficiencias académicas mediante tareas repetitivas.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Porque permiten revivir situaciones de conflicto para analizarlas críticamente.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Porque reducen el tiempo libre de los niños.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Porque sirven solo como actividad recreativa sin objetivos pedagógicos.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
