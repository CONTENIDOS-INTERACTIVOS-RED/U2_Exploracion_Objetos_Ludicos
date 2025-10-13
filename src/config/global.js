export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Desarrollo de la capacidad creadora',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'La imaginación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'El valor de la imaginación en la infancia',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Imaginación, pensamiento simbólico y juego libre',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Estimulación de la creatividad a través de narrativas orales',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Recursos pedagógicos para activar la imaginación infantil',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Juegos mímicos con títeres',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'La expresión corporal como lenguaje en la primera infancia',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: '¿Qué es el juego mímico? Elementos y beneficios',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Diseño y elaboración de títeres con materiales reutilizables',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Técnicas para animar títeres sin palabras',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Planeación de experiencias pedagógicas con juegos mímicos',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo:
              'Propuesta creativa: juego mímico con títeres para la educación inicial',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Juegos de sombras',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Introducción al juego de sombras: luz, forma y movimiento',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Creación de escenarios y personajes para juegos de sombras',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Juego dramático a partir de siluetas: contar con el cuerpo y la luz',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo:
              'Juegos de sombras en contextos vulnerables: experiencias significativas',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Propuesta artística con juegos de sombras y roles',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Morosini, P. (2010). Las siete llaves de la imaginación: (1 ed.). LID Editorial España.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/271190',
    },
    {
      referencia:
        'Ibarrola, B. (2014). Aprendizaje emocionante: neurociencia para el aula (Vol. 5). Ediciones SM España.  ',
      link:
        'https://cife.edu.mx/recursos/wp-content/uploads/2022/08/APRENDIZAJE-EMOCIONANTE-Ibarrola.pdf',
    },
    {
      referencia:
        'Amorín, D. (2008). Apuntes para una posible psicología evolutiva. Montevideo: Psicolibros/Waslala.   ',
      link:
        'https://www.academia.edu/34516842/APUNTES_PARA_UNA_POSIBLE_PSICOLOG%C3%8DA_EVOLUTIVA',
    },
    {
      referencia:
        'Piaget, J. (1951). Play, dreams and imitation in childhood. W. W. Norton.  ',
      link:
        'https://www.scirp.org/reference/referencespapers?referenceid=2598255',
    },
    {
      referencia:
        'UNESCO. (2024, 21 de febrero). Lo que hay que saber sobre cultura y educación artística. Recuperado de ',
      link:
        'https://www.unesco.org/es/articles/lo-que-hay-que-saber-sobre-cultura-y-educacion-artistica ',
    },
    {
      referencia:
        'Bausela Herreras, E. (2014). Funciones ejecutivas: nociones del desarrollo desde una perspectiva neuropsicológica. Acción psicológica, 11(1), 21-34.  ',
      link:
        'https://scielo.isciii.es/scielo.php?script=sci_arttext&pid=S1578-908X2014000100003',
    },
    {
      referencia:
        'Mas, J. S. (2008). Los cuentos vivenciados: imaginación y movimiento. RIFOP: Revista interuniversitaria de formación del profesorado: continuación de la antigua Revista de Escuelas Normales, (62), 61-78.  ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=2707396',
    },
    {
      referencia:
        'Santa Cruz, E. & García Labandal, L. (2013). Títeres y resiliencia en el Nivel Inicial: ( ed.). Homo Sapiens Ediciones.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/123831',
    },
    {
      referencia:
        'Jaritonsky, P. (2021). El lenguaje corporal del niño preescolar: (1 ed.). Melos.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/226245',
    },
    {
      referencia:
        'Usmer, B. & Rollet, M. (2015). Juegos de expresión corporal: de 4 a 10 años: ( ed.). Editorial Stadium.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/191451',
    },
    {
      referencia:
        'Muñoz Molina, M. B., & Catagña Quishpi, M. R. (2017). Estimulación Temprana en el Desarrollo de la Inteligencia Kinestésica de los niños de tres a cuatro años de la Escuela Particular Nuestro Mundo “Ecorio” de la Ciudad de Riobamba, provincia de Chimborazo, año lectivo 2015-2016 (Bachelor´s thesis, Rbba. Unach. 2017). ',
      link: 'http://dspace.unach.edu.ec/handle/51000/3658',
    },
    {
      referencia:
        'Medina, A. (1990). La tradición oral como vehículo literario infantil. Sus valores educativos. P. Cedrillo y J. García Padrino. J.(eds.), Literatura Infantil, 37-65.  ',
      link:
        'http://asignaturas2.uca.es/wuca_fichasig0607_asignatura539e.html?titul=1113&asign=1113032&dpto=C109',
    },
    {
      referencia:
        'Casco, T. Y. B., Cueva, J. M. A., Fernán, I. S., & García, J. P. M. (2023). El juego mímico en el desarrollo de habilidades sociales en la primera infancia. REVISTA MULTIDISCIPLINARIA DE DESARROLLO AGROPECUARIO, TECNOLÓGICO, EMPRESARIAL Y HUMANISTA., 5(3), 6-6.  ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=9181033',
    },
    {
      referencia:
        'Del Castillo Vega, C. A. (2018). Elaboración de títeres con material reciclable para el cuidado del medio ambiente en niños de 5 años de la IEI 503 Virgen del Carmen-Manzanares.  ',
      link: 'https://repositorio.unjfsc.edu.pe/handle/20.500.14067/4185',
    },
    {
      referencia:
        'Tejada Ccayahuillca, N. Z. (2019). Uso didáctico de los títeres para desarrollar la inteligencia emocional en preescolar. ',
      link:
        'https://tesis.pucp.edu.pe/bitstreams/2b3a6866-8ec5-448d-b29d-e5a14b4a6a48/download ',
    },
    {
      referencia:
        'Pérez Pueyo, Á. (2010). La expresión corporal a la luz de la sombra: una propuesta diferente del teatro de sombras en el marco del estilo actitudinal: ( ed.). Editorial CEP, S.L.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/50625',
    },
    {
      referencia:
        'Sarlé, P. M. & Rosemberg, C. R. (2015). Dale que… El juego dramático y el desarrollo del lenguaje en los niños pequeños: ( ed.). Homo Sapiens Ediciones.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/67112',
    },
    {
      referencia:
        'UNICEF & Fundación LEGO. (2018, octubre). Aprendizaje a través del juego: Reforzar el aprendizaje a través del juego en los programas de educación en la primera infancia.  ',
      link:
        'https://www.unicef.org/sites/default/files/2019-01/UNICEF-Lego-Foundation-Aprendizaje-a-traves-del-juego.pdf',
    },
    {
      referencia:
        'Vicente López-Trompo, D. (2016). Diseño de un área de juego polivalente válida como zona de escalada y como teatro de sombras para niños de 3 a 12 años. ',
      link: 'https://oa.upm.es/45268/ ',
    },
    {
      referencia:
        'Ferradás, D. M., & Andersson, A. (2020). Del juego dramático al teatro con niños: Proyectos con máscaras, sombras, papel y títeres. Textos para representar y crear (Vol. 102). Noveduc.  ',
      link:
        'https://www.noveduc.com/productos/del-juego-dramatico-al-teatro-con-ninos/?srsltid=AfmBOooVlNdDnz7GBv3NQ_Qw5QxIXy9S2VCM05fnrNpKYhnXdvRgwCEi',
    },
  ],
  glosario: [
    {
      termino: 'Capacidad creadora',
      significado:
        'Habilidad para generar ideas nuevas, originales y útiles, y para expresar la creatividad de manera artística o práctica.',
    },
    {
      termino: 'Dramatización',
      significado:
        'Técnica teatral que consiste en representar situaciones mediante la actuación, el cuerpo y la voz.',
    },
    {
      termino: 'Expresión artística',
      significado:
        'Manifestación de ideas, emociones y pensamientos a través de diferentes lenguajes como la pintura, la música, el teatro y el juego.',
    },
    {
      termino: 'Imaginació',
      significado:
        'Facultad mental que permite crear imágenes, ideas o situaciones nuevas a partir de experiencias previas o inventadas.',
    },
    {
      termino: 'Juegos de sombras',
      significado:
        'Actividades lúdicas que utilizan la luz y las siluetas para crear imágenes y narrativas visuales.',
    },
    {
      termino: 'Juegos mímicos',
      significado:
        'Juegos que emplean el lenguaje corporal y gestual para comunicar y representar sin usar palabras.',
    },
    {
      termino: 'Juego libre',
      significado:
        'Actividad espontánea y voluntaria donde el niño decide cómo jugar, favoreciendo su desarrollo integral.',
    },
    {
      termino: 'Narrativas orales:',
      significado:
        'Relatos contados de forma verbal que estimulan la imaginación y la comprensión en los niños.',
    },
    {
      termino: 'simbólico',
      significado:
        'Capacidad de utilizar símbolos, signos o imágenes para representar objetos o ideas, base del lenguaje y la creatividad.',
    },
    {
      termino: 'Propuesta pedagógica:',
      significado:
        'Plan o diseño educativo que organiza actividades y estrategias para alcanzar objetivos de aprendizaje.',
    },
    {
      termino: 'Reutilizables',
      significado:
        'Materiales que pueden usarse varias veces, promoviendo el cuidado del medio ambiente en la educación.',
    },
    {
      termino: 'Roles',
      significado:
        'Papeles o personajes que se asumen en juegos o dramatizaciones para representar diferentes situaciones.',
    },
    {
      termino: 'Siluetas',
      significado:
        'Contornos o sombras que representan figuras o personajes en juegos de sombras.',
    },
    {
      termino: 'Teatro de títeres',
      significado:
        'Técnica teatral que utiliza muñecos manipulados para contar historias y estimular la creatividad.',
    },
    {
      termino: 'Vínculo afectivo',
      significado:
        'Relación emocional positiva que favorece el desarrollo social y emocional en la infancia.',
    },
  ],
}
