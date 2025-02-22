import { Chapter, Prologue } from "@/types";

export const prologue: Prologue = {
  title: "PRÓLOGO",
  subTitle: "Acerca de la Confesión de Fe Bautista de Filadelfia 1742",
  paragraphs: [
    {
      text: "En el año 1644 los bautistas ingleses, de convicciones separatistas y puritanas, redactan la Primera Confesión de Fe Bautista en Londres, encaminada a distinguir entre los bautistas generales (arminianos) y los bautistas particulares (calvinistas). Se reunieron siete iglesias bautistas particulares (reformadas) y elaboraron esta confesión de fe para refutar los errores y distinguirse de los anabaptistas.",
    },
    {
      text: "Estos bautistas particulares provenían de los separatistas ingleses, sin ningún vínculo orgánico ni con los anabaptistas continentales ni con los bautistas generales anteriores. Estas siete iglesias bautistas particulares de Londres, acordaron enarbolar su fe en Inglaterra y en el mundo; y además, poner en claro el error de asociarlos con cualquier grupo de anabaptistas, ya sea en Londres o en Holanda, y también, encaminaron su confesión para distinguirse de los otros grupos arminianos.",
    },
    {
      text: "En el año 1677 elaboran una Segunda Confesión de Fe Bautista usando como base tanto la de Londres de 1644, como la Confesión de Fe de Westminster, y la Declaración de Saboya. Esta Confesión no fue muy publicada ni promovida debido a la gran persecución que estaban sufriendo las iglesias reformadas en la Inglaterra de ese tiempo. Sin embargo, en 1689 sale oficialmente la Segunda Confesión de Fe Bautista, que es la misma de 1677, pero su oficialidad en 1689 fue después de la Asamblea General de Londres donde las iglesias particulares la adoptaron oficialmente como su Confesión de Fe.",
    },
    {
      text: 'Por ese mismo tiempo, desde 1684, 1687 y 1689; muchas iglesias bautistas fueron formadas en el área de los alrededores de Filadelfia, en Pensilvania, EE.UU. Todas serían parte de Filadelfia en el tiempo actual; sin embargo, en aquel entonces, serían pueblos ubicados en las afueras de Filadelfia. Algunas de ellas no sobrevivirían, pero una de ellas, plantada en un área llamada Pennepek en el año 1687, fue fundada y ha sido una iglesia que permanece hasta hoy, y resulta ser la iglesia más antigua fundada en Pensilvania. Cuando finalmente se organiza y funda la Asociación Bautista de Filadelfia, se constituye la asociación oficial primera y más antigua en América. Ésta, fue la madre de todas las asociaciones bautistas posteriores en América. Incluía iglesias bautistas de todas las colonias y no sólo iglesias de Pensilvania. Estas iglesias eran fuertemente calvinistas en su teología y eran muy confesionales, es decir, muy dedicadas a usar y a promover el uso de las confesiones de fe. De hecho, cuando se mira sus actas, existe un registro indicando que las iglesias de la asociación poseían y utilizaban la Segunda Confesión de Londres de 1689, sobre todo para saldar los asuntos y cuestiones doctrinales. Esa era su forma de decir: -"Nosotros confirmamos y afirmamos la Segunda Confesión de Londres".',
    },
    {
      text: "Sin embargo, decidieron dar un paso más definitivo en esto, y en el 25 de septiembre del año 1742, la Asociación hizo formalmente un borrador de la Confesión de Fe de Filadelfia, y aceptó ésta como su confesión, basándose en la Segunda Confesión de Fe de Londres de 1689 y añadiéndole dos artículos breves (el 23 y el 31) sobre la forma de cantar los salmos y la imposición de manos. Esta confesión fue impresa por Benjamín Franklin.",
    },
  ],
};

export const chapters: Chapter[] = [
  // Chapter 1: De las Santas Escrituras
  {
    id: 1,
    title: "De las Santas Escrituras",
    paragraphs: [
      // Paragraph 1
      {
        number: 1,
        segments: [
          {
            text: "La Sagrada Escritura es la única suficiente, cierta regla, e infalible de todo conocimiento, la fe y la obediencia salvadores.",
            referenceId: "1a",
          },
          {
            text: "Aunque a la luz de la naturaleza, y las obras de la creación y la providencia hasta el momento nos ponen de manifiesto la bondad, la sabiduría y el poder de Dios, como para dejar a los hombres inexcusable,",
            referenceId: "1b",
          },
          {
            text: "sin embargo no son suficientes para dar aquel conocimiento de Dios y de su voluntad que es necesario para la salvación.",
            referenceId: "1c",
          },
          {
            text: "Por lo tanto, agradó al Señor muchas veces y de diversas maneras revelarse a sí mismo, y declaró su voluntad a su Iglesia,",
            referenceId: "1d",
          },
          {
            text: "y después, para la preservación y la propagación mejor de la verdad y para un establecimiento y consuelo más seguros de la iglesia contra la corrupción de la carne y la malicia de Satanás y el mundo, le plació poner por escrito esa revelación en su totalidad, lo que hace a las Escrituras ser más necesarias,",
            referenceId: "1e",
          },
          {
            text: "habiendo cesado los antiguos caminos en que Dios revelaba su voluntad a su pueblo.",
            referenceId: "1f",
          },
        ],
        references: [
          {
            id: "1a",
            citations: [
              {
                citation: "2 Timoteo 3:15-17",
                text: "y que desde la niñez has sabido las Sagradas Escrituras, las cuales te pueden hacer sabio para la salvación por la fe que es en Cristo Jesús. Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia, a fin de que el hombre de Dios sea perfecto, enteramente preparado para toda buena obra.",
              },
              {
                citation: "Isaías 8:20",
                text: "¡A la ley y al testimonio! Si no dijeren conforme a esto, es porque no les ha amanecido.",
              },
              {
                citation: "Lucas 16:29, 31",
                text: "Abraham le dijo: A Moisés y a los profetas tienen; óiganlos. [...] Y Abraham le dijo: Si no oyen a Moisés y a los profetas, tampoco se persuadirán aunque alguno se levantare de los muertos.",
              },
              {
                citation: "Efesios 2:20",
                text: "edificados sobre el fundamento de los apóstoles y profetas, siendo la principal piedra del ángulo Jesucristo mismo",
              },
            ],
          },
          {
            id: "1b",
            citations: [
              {
                citation: "Romanos 1:19-21, 32",
                text: "porque lo que de Dios se conoce les es manifiesto, pues Dios se lo manifestó. Porque las cosas invisibles de él, su eterno poder y deidad, se hacen claramente visibles desde la creación del mundo, siendo entendidas por medio de las cosas hechas, de modo que no tienen excusa. Pues habiendo conocido a Dios, no le glorificaron como a Dios, ni le dieron gracias, sino que se envanecieron en sus razonamientos, y su necio corazón fue entenebrecido. [...] quienes habiendo entendido el juicio de Dios, que los que practican tales cosas son dignos de muerte, no sólo las hacen, sino que también se complacen con los que las practican.",
              },
              {
                citation: "Romanos 2:12a, 14-15",
                text: "Porque todos los que sin ley han pecado, sin ley también perecerán [...] Porque cuando los gentiles que no tienen ley, hacen por naturaleza lo que es de la ley, éstos, aunque no tengan ley, son ley para sí mismos, mostrando la obra de la ley escrita en sus corazones, dando testimonio su conciencia, y acusándoles o defendiéndoles sus razonamientos.",
              },
              {
                citation: "Salmo 19:1-3",
                text: "Los cielos cuentan la gloria de Dios, Y el firmamento anuncia la obra de sus manos. Un día emite palabra a otro día, Y una noche a otra noche declara sabiduría. No hay lenguaje, ni palabras, Ni es oída su voz.",
              },
            ],
          },
          {
            id: "1c",
            citations: [
              {
                citation: "Salmo 19:1-3",
                text: "Los cielos cuentan la gloria de Dios, Y el firmamento anuncia la obra de sus manos. Un día emite palabra a otro día, Y una noche a otra noche declara sabiduría. No hay lenguaje, ni palabras, Ni es oída su voz.",
              },
            ],
          },
          {
            id: "1d",
            citations: [
              {
                citation: "Hebreos 1:1",
                text: "Dios, habiendo hablado muchas veces y de muchas maneras en otro tiempo a los padres por los profetas",
              },
            ],
          },
          {
            id: "1e",
            citations: [
              {
                citation: "Proverbios 22:19-21",
                text: "Para que tu confianza sea en Jehová, Te las he hecho saber hoy a ti también. ¿No te he escrito tres veces En consejos y en ciencia, Para hacerte saber la certidumbre de las palabras de verdad, A fin de que vuelvas a llevar palabras de verdad a los que te enviaron?",
              },
              {
                citation: "Romanos 15:4",
                text: "Porque las cosas que se escribieron antes, para nuestra enseñanza se escribieron, a fin de que por la paciencia y la consolación de las Escrituras, tengamos esperanza.",
              },
              {
                citation: "2 Pedro 1:19-20",
                text: "Tenemos también la palabra profética más segura, a la cual hacéis bien en estar atentos como a una antorcha que alumbra en lugar oscuro, hasta que el día esclarezca y el lucero de la mañana salga en vuestros corazones; entendiendo primero esto, que ninguna profecía de la Escritura es de interpretación privada",
              },
            ],
          },
          {
            id: "1f",
            citations: [
              {
                citation: "Hebreos 1:1-2a",
                text: "Dios, habiendo hablado muchas veces y de muchas maneras en otro tiempo a los padres por los profetas, en estos postreros días nos ha hablado por el Hijo",
              },
            ],
          },
        ],
      },
      // Paragraph 2
      {
        number: 2,
        segments: [
          {
            text: "Bajo el nombre de la Sagrada Escritura, o la Palabra de Dios escrita, ahora se contiene todos los libros del Antiguo y Nuevo Testamento, que son los siguientes: DEL ANTIGUO TESTAMENTO: Génesis, Éxodo, Levítico, Números, Deuteronomio, Josué, Jueces, Rut, 1 Samuel, 2 Samuel, 1 Reyes, 2 Reyes, 1 Crónicas, 2 Crónicas, Esdras, Nehemías, Ester, Job, Salmos, Proverbios, Eclesiastés, El Cantar de Salomón, Isaías, Jeremías, Lamentaciones, Ezequiel, Daniel, Oseas, Joel, Amós, Abdías, Jonás, Miqueas, Nahúm, Habacuc, Sofonías, Ageo, Zacarías, Malaquías",
          },
          {
            text: "DEL NUEVO TESTAMENTO: Mateo, Marcos, Lucas, Juan, Los Hechos de los Apóstoles, la epístola de Pablo a los Romanos, 1 Corintios, 2 Corintios, Gálatas, Efesios, Filipenses, Colosenses, 1 Tesalonicenses, 2 Tesalonicenses, 1 Timoteo; 2 Timoteo, a Tito, a Filemón, La Epístola a los Hebreos, la Epístola de Santiago, Las Epístolas primera y segunda de Pedro, Las Epístolas primera, segunda y tercera de Juan, la Epístola de Judas, El Apocalipsis",
          },
          {
            text: "Todo lo cual están dadas por la inspiración de Dios, a ser la regla de la fe y la vida.",
            referenceId: "2b",
          },
        ],
        references: [
          {
            id: "2b",
            citations: [
              {
                citation: "2 Timoteo 3:16",
                text: "Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia",
              },
            ],
          },
        ],
      },
      // Paragraph 3
      {
        number: 3,
        segments: [
          {
            text: "Los libros comúnmente llamados Apócrifos, por no ser de inspiración divina, no son parte del canon o regla de la Escritura, y, por tanto, no son de autoridad a la iglesia de Dios, ni deben usarse ni aprobarse sino de la manera que otros escritos humanos.",
            referenceId: "3a",
          },
        ],
        references: [
          {
            id: "3a",
            citations: [
              {
                citation: "Lucas 24:27, 44",
                text: "Y comenzando desde Moisés, y siguiendo por todos los profetas, les declaraba en todas las Escrituras lo que de él decían. [...] Y les dijo: Estas son las palabras que os hablé, estando aún con vosotros: que era necesario que se cumpliese todo lo que está escrito de mí en la ley de Moisés, en los profetas y en los salmos.",
              },
              {
                citation: "Romanos 3:2",
                text: "Mucho, en todas maneras. Primero, ciertamente, que les ha sido confiada la palabra de Dios.",
              },
            ],
          },
        ],
      },
      // Paragraph 4
      {
        number: 4,
        segments: [
          {
            text: "La autoridad de la Sagrada Escritura, por lo cual debe ser creída, no dependen del testimonio de ningún hombre o iglesia,",
            referenceId: "4a",
          },
          {
            text: "sino enteramente de Dios (quien es la verdad misma), el autor de la misma, por lo que se debe recibir porque es la Palabra de Dios.",
            referenceId: "4b",
          },
        ],
        references: [
          {
            id: "4a",
            citations: [
              {
                citation: "2 Pedro 1:19-21",
                text: "Tenemos también la palabra profética más segura, a la cual hacéis bien en estar atentos como a una antorcha que alumbra en lugar oscuro, hasta que el día esclarezca y el lucero de la mañana salga en vuestros corazones; entendiendo primero esto, que ninguna profecía de la Escritura es de interpretación privada, porque nunca la profecía fue traída por voluntad humana, sino que los santos hombres de Dios hablaron siendo inspirados por el Espíritu Santo.",
              },
            ],
          },
          {
            id: "4b",
            citations: [
              {
                citation: "2 Timoteo 3:16",
                text: "Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia",
              },
              {
                citation: "2 Tesalonicenses 2:13",
                text: "Pero nosotros debemos dar siempre gracias a Dios respecto a vosotros, hermanos amados por el Señor, de que Dios os haya escogido desde el principio para salvación, mediante la santificación por el Espíritu y la fe en la verdad",
              },
              {
                citation: "1 Juan 5:9",
                text: "Si recibimos el testimonio de los hombres, mayor es el testimonio de Dios; porque este es el testimonio con que Dios ha testificado acerca de su Hijo.",
              },
            ],
          },
        ],
      },
      // Paragraph 5
      {
        number: 5,
        segments: [
          {
            text: "Podemos ser movido e inducido por el testimonio de la iglesia de Dios a una alta estima y reverente por las Santas Escrituras, y el carácter celestial de la materia, la eficacia de la doctrina, y la majestad de su estilo, el consentimiento de todas las partes, el alcance de la totalidad (que es dar toda la gloria a Dios), el pleno descubrimiento que hace de la única forma de salvación del hombre, y muchas otras excelencias incomparables y toda la perfección de las mismas, son argumentos con los que en abundancia dan pruebas en sí que es la Palabra de Dios,",
          },
          {
            text: "sin embargo, no obstante, nuestra persuasión y completa seguridad de la verdad infalible y la misma autoridad divina es de la obra interna del Espíritu Santo, que por y con la Palabra da testimonio en nuestros corazones.",
            referenceId: "5a",
          },
        ],
        references: [
          {
            id: "5a",
            citations: [
              {
                citation: "Juan 16:13, 14",
                text: "Pero cuando venga el Espíritu de verdad, él os guiará a toda la verdad; porque no hablará por su propia cuenta, sino que hablará todo lo que oyere, y os hará saber las cosas que habrán de venir. El me glorificará; porque tomará de lo mío, y os lo hará saber.",
              },
              {
                citation: "1 Corintios 2:10-12",
                text: "Pero Dios nos las reveló a nosotros por el Espíritu; porque el Espíritu todo lo escudriña, aun lo profundo de Dios. Porque ¿quién de los hombres sabe las cosas del hombre, sino el espíritu del hombre que está en él? Así tampoco nadie conoció las cosas de Dios, sino el Espíritu de Dios. Y nosotros no hemos recibido el espíritu del mundo, sino el Espíritu que proviene de Dios, para que sepamos lo que Dios nos ha concedido",
              },
              {
                citation: "1 Juan 2:20, 27",
                text: "Pero vosotros tenéis la unción del Santo, y conocéis todas las cosas. [...] Pero la unción que vosotros recibisteis de él permanece en vosotros, y no tenéis necesidad de que nadie os enseñe; así como la unción misma os enseña todas las cosas, y es verdadera, y no es mentira, según ella os ha enseñado, permaneced en él.",
              },
            ],
          },
        ],
      },
      // Paragraph 6
      {
        number: 6,
        segments: [
          {
            text: "El consejo de Dios sobre todas las cosas necesarias para su propia gloria, la salvación del hombre, la fe y la vida, está expresamente expuesto o necesariamente contenido en la Sagrada Escritura: a la cual nada, en cualquier momento se va a agregar, ya sea por nueva revelación del Espíritu, o las tradiciones de los hombres.",
            referenceId: "6a",
          },
          {
            text: "No obstante, reconocemos que la iluminación interna del Espíritu de Dios es necesaria para la comprensión salvadora de las cosas como están revelados en la Palabra,",
            referenceId: "6b",
          },
          {
            text: "y que hay algunas circunstancias relativas a la adoración de Dios, y el gobierno de la iglesia, comunes a las acciones y sociedades humanas, que han de ser ordenadas por la luz de la naturaleza y la prudencia cristiana, que siempre deben ser observados de acuerdo con las normas generales de la Palabra.",
            referenceId: "6c",
          },
        ],
        references: [
          {
            id: "6a",
            citations: [
              {
                citation: "2 Timoteo 3:15-17",
                text: "y que desde la niñez has sabido las Sagradas Escrituras, las cuales te pueden hacer sabio para la salvación por la fe que es en Cristo Jesús. Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia, a fin de que el hombre de Dios sea perfecto, enteramente preparado para toda buena obra.",
              },
              {
                citation: "Gálatas 1:8-9",
                text: "Mas si aun nosotros, o un ángel del cielo, os anunciare otro evangelio diferente del que os hemos anunciado, sea anatema. Como antes hemos dicho, también ahora lo repito: Si alguno os predica diferente evangelio del que habéis recibido, sea anatema.",
              },
            ],
          },
          {
            id: "6b",
            citations: [
              {
                citation: "Juan 6:45",
                text: "Escrito está en los profetas: Y serán todos enseñados por Dios. Así que, todo aquel que oyó al Padre, y aprendió de él, viene a mí.",
              },
              {
                citation: "1 Corintios 2:9-12",
                text: "Antes bien, como está escrito: Cosas que ojo no vio, ni oído oyó, Ni han subido en corazón de hombre, Son las que Dios ha preparado para los que le aman. Pero Dios nos las reveló a nosotros por el Espíritu; porque el Espíritu todo lo escudriña, aun lo profundo de Dios. Porque ¿quién de los hombres sabe las cosas del hombre, sino el espíritu del hombre que está en él? Así tampoco nadie conoció las cosas de Dios, sino el Espíritu de Dios. Y nosotros no hemos recibido el espíritu del mundo, sino el Espíritu que proviene de Dios, para que sepamos lo que Dios nos ha concedido",
              },
            ],
          },
          {
            id: "6c",
            citations: [
              {
                citation: "1 Corintios 11:13, 14",
                text: "Juzgad vosotros mismos: ¿Es propio que la mujer ore a Dios sin cubrirse la cabeza? La naturaleza misma ¿no os enseña que al varón le es deshonroso dejarse crecer el cabello?",
              },
              {
                citation: "1 Corintios 14:26, 40",
                text: "¿Qué hay, pues, hermanos? Cuando os reunís, cada uno de vosotros tiene salmo, tiene doctrina, tiene lengua, tiene revelación, tiene interpretación. Hágase todo para edificación. [...] pero hágase todo decentemente y con orden.",
              },
            ],
          },
        ],
      },
      // Paragraph 7
      {
        number: 7,
        segments: [
          {
            text: "Todas las cosas en las Escrituras no son iguales de claras en sí mismas, ni por igual a todos clara,",
            referenceId: "7a",
          },
          {
            text: "y sin embargo esas cosas que son necesarias para ser conocidas, creídas y observadas para la salvación, son tan claramente propuestas y se abre en algún lugar u otro de las Escrituras, que no sólo los sabios, sino aún los ignorantes, en un uso debido de los medios ordinarios, pueden alcanzar una comprensión suficiente de ellos.",
            referenceId: "7b",
          },
        ],
        references: [
          {
            id: "7a",
            citations: [
              {
                citation: "2 Pedro 3:16",
                text: "casi en todas sus epístolas, hablando en ellas de estas cosas; entre las cuales hay algunas difíciles de entender, las cuales los indoctos e inconstantes tuercen, como también las otras Escrituras, para su propia perdición.",
              },
            ],
          },
          {
            id: "7b",
            citations: [
              {
                citation: "Salmo 19:7",
                text: "La ley de Jehová es perfecta, que convierte el alma; El testimonio de Jehová es fiel, que hace sabio al sencillo.",
              },
              {
                citation: "Salmo 119:130",
                text: "La exposición de tus palabras alumbra; Hace entender a los simples.",
              },
            ],
          },
        ],
      },
      // Paragraph 8
      {
        number: 8,
        segments: [
          {
            text: "El Antiguo Testamento en hebreo (que era el idioma nativo del pueblo de Dios de la edad), y el Nuevo Testamento en griego (que en el momento que fue escrito era el idioma más conocido generalmente a las naciones), están inspirados directamente por Dios, y por su singular cuidado y providencia mantenidos puros en todas las edades, por lo tanto, son auténticos, así como en todas las controversias de religión, la iglesia es finalmente a recurrir a ellos.",
            referenceId: "8a",
          },
          {
            text: "Sin embargo, debido a que estas lenguas originales no se conocen a todo el pueblo de Dios, y que tienen el derecho de poseerlas, y el interés en las Escrituras, y se ordenó en el temor de Dios a leer y buscar en ellos,",
            referenceId: "8b",
          },
          {
            text: "por lo que se traduce en el vulgar idioma de cada nación a la que vienen,",
            referenceId: "8c",
          },
          {
            text: "para que la Palabra de Dios morando en abundancia en todos, puedan adorarle de una manera aceptable, y por la paciencia y la consolación de las Escrituras tengan esperanza.",
            referenceId: "8d",
          },
        ],
        references: [
          {
            id: "8a",
            citations: [
              {
                citation: "Romanos 3:2",
                text: "Mucho, en todas maneras. Primero, ciertamente, que les ha sido confiada la palabra de Dios.",
              },
              {
                citation: "Isaías 8:20",
                text: "¡A la ley y al testimonio! Si no dijeren conforme a esto, es porque no les ha amanecido.",
              },
            ],
          },
          {
            id: "8b",
            citations: [
              {
                citation: "Hechos 15:15",
                text: "Y con esto concuerdan las palabras de los profetas, como está escrito",
              },
              {
                citation: "Juan 5:39",
                text: "Escudriñad las Escrituras; porque a vosotros os parece que en ellas tenéis la vida eterna; y ellas son las que dan testimonio de mí",
              },
            ],
          },
          {
            id: "8c",
            citations: [
              {
                citation: "1 Corintios 14:6, 9, 11, 12, 24, 28",
                text: "Ahora pues, hermanos, si yo voy a vosotros hablando en lenguas, ¿qué os aprovechará, si no os hablare con revelación, o con ciencia, o con profecía, o con doctrina? [...] Así también vosotros, si por la lengua no diereis palabra bien comprensible, ¿cómo se entenderá lo que decís? Porque hablaréis al aire. [...] Pero si yo ignoro el valor de las palabras, seré como extranjero para el que habla, y el que habla será como extranjero para mí. Así también vosotros; pues que anheláis dones espirituales, procurad abundar en ellos para edificación de la iglesia. [...] Pero si todos profetizan, y entra algún incrédulo o indocto, por todos es convencido, por todos es juzgado [...] Y si no hay intérprete, calle en la iglesia, y hable para sí mismo y para Dios.",
              },
            ],
          },
          {
            id: "8d",
            citations: [
              {
                citation: "Colosenses 3:16",
                text: "La palabra de Cristo more en abundancia en vosotros, enseñándoos y exhortándoos unos a otros en toda sabiduría, cantando con gracia en vuestros corazones al Señor con salmos e himnos y cánticos espirituales.",
              },
            ],
          },
        ],
      },
      // Paragraph 9
      {
        number: 9,
        segments: [
          {
            text: "La regla infalible para interpretar la Biblia es la Biblia misma, y por lo tanto, cuando hay una pregunta sobre el sentido verdadero y pleno de toda la Escritura (que no es múltiple, sino uno), debe ser buscado por otros lugares que hablan con más claridad.",
            referenceId: "9a",
          },
        ],
        references: [
          {
            id: "9a",
            citations: [
              {
                citation: "2 Pedro 1:20, 21",
                text: "entendiendo primero esto, que ninguna profecía de la Escritura es de interpretación privada, porque nunca la profecía fue traída por voluntad humana, sino que los santos hombres de Dios hablaron siendo inspirados por el Espíritu Santo.",
              },
              {
                citation: "Hechos 15:15, 16",
                text: "Y con esto concuerdan las palabras de los profetas, como está escrito: Después de esto volveré Y reedificaré el tabernáculo de David, que está caído; Y repararé sus ruinas, Y lo volveré a levantar.",
              },
            ],
          },
        ],
      },
      // Paragraph 10
      {
        number: 10,
        segments: [
          {
            text: "El juez supremo, por el cual todas las controversias de religión deben ser determinadas, y todos los decretos de los concilios, las opiniones de los escritores antiguos, las doctrinas de los hombres y los espíritus privados han de ser examinados, y en cuya sentencia debemos descansar, no puede ser otro mas que las Sagradas Escrituras entregadas por el Espíritu. Es en la Escritura así entregada, donde finalmente nuestra fe es resuelta.",
            referenceId: "10a",
          },
        ],
        references: [
          {
            id: "10a",
            citations: [
              {
                citation: "Mateo 22:29, 31, 32",
                text: "Entonces respondiendo Jesús, les dijo: Erráis, ignorando las Escrituras y el poder de Dios. [...] Pero respecto a la resurrección de los muertos, ¿no habéis leído lo que os fue dicho por Dios, cuando dijo: Yo soy el Dios de Abraham, el Dios de Isaac y el Dios de Jacob? Dios no es Dios de muertos, sino de vivos.",
              },
              {
                citation: "Efesios 2:20",
                text: "edificados sobre el fundamento de los apóstoles y profetas, siendo la principal piedra del ángulo Jesucristo mismo",
              },
              {
                citation: "Hechos 28:23",
                text: "Y habiéndole señalado un día, vinieron a él muchos a la posada, a los cuales les declaraba y les testificaba el reino de Dios desde la mañana hasta la tarde, persuadiéndoles acerca de Jesús, tanto por la ley de Moisés como por los profetas.",
              },
            ],
          },
        ],
      },
    ],
  },
  // Chapter 2: De Dios y de la Santísima Trinidad
  {
    id: 2,
    title: "De Dios y de la Santísima Trinidad",
    paragraphs: [
      // Paragraph 1
      {
        number: 1,
        segments: [
          {
            text: "El Señor, nuestro Dios no es más que un solo Dios vivo y verdadero,",
            referenceId: "1a",
          },
          {
            text: "cuya subsistencia está en y de sí mismo,",
            referenceId: "1b",
          },
          {
            text: "infinito en su ser y perfección; cuya esencia no puede ser comprendida por nadie sino a sí mismo,",
            referenceId: "1c",
          },
          {
            text: "un espíritu purísimo,",
            referenceId: "1d",
          },
          {
            text: "invisible, sin cuerpo, partes o pasiones, el único que tiene inmortalidad, que habita en la luz que ningún hombre puede acercarse;",
            referenceId: "1e",
          },
          {
            text: "que es inmutable,",
            referenceId: "1f",
          },
          {
            text: "inmenso,",
            referenceId: "1g",
          },
          {
            text: "eterno,",
            referenceId: "1h",
          },
          {
            text: "todopoderoso, incomprensible,",
            referenceId: "1i",
          },
          {
            text: "infinito en todos los sentidos, santísimo,",
            referenceId: "1j",
          },
          {
            text: "sapientísimo, libérrimo, absoluto; trabajando todas las cosas de acuerdo al consejo de su propia voluntad inmutable y justísima,",
            referenceId: "1k",
          },
          {
            text: "para su propia gloria;",
            referenceId: "1l",
          },
          {
            text: "amantísimo, misericordioso, compasivo, paciente, abundante en misericordia y verdad, perdonando la iniquidad, la transgresión y el pecado; galardonador de todos los que le buscan con diligencia,",
            referenceId: "1m",
          },
          {
            text: "y con todo muy justo y terrible en sus juicios,",
            referenceId: "1n",
          },
          {
            text: "que odia todo pecado,",
            referenceId: "1o",
          },
          {
            text: "y que de ninguna manera dará por inocente al culpable.",
            referenceId: "1p",
          },
        ],
        references: [
          {
            id: "1a",
            citations: [
              {
                citation: "1 Corintios 8:4, 6",
                text: "Acerca, pues, de las viandas que se sacrifican a los ídolos, sabemos que un ídolo nada es en el mundo, y que no hay más que un Dios. [...] para nosotros, sin embargo, sólo hay un Dios, el Padre, del cual proceden todas las cosas, y nosotros somos para él; y un Señor, Jesucristo, por medio del cual son todas las cosas, y nosotros por medio de él.",
              },
              {
                citation: "Deuteronomio 6:4",
                text: "Oye, Israel: Jehová nuestro Dios, Jehová uno es.",
              },
            ],
          },
          {
            id: "1b",
            citations: [
              {
                citation: "Jeremías 10:10",
                text: "Mas Jehová es el Dios verdadero; él es Dios vivo y Rey eterno; a su ira tiembla la tierra, y las naciones no pueden sufrir su indignación.",
              },
              {
                citation: "Isaías 48:12",
                text: "Óyeme, Jacob, y tú, Israel, llamado mío: Yo mismo, yo el primero, yo también el postrero.",
              },
            ],
          },
          {
            id: "1c",
            citations: [
              {
                citation: "Éxodo 3:14",
                text: "Y respondió Dios a Moisés: YO SOY EL QUE SOY. Y dijo: Así dirás a los hijos de Israel: YO SOY me envió a vosotros.",
              },
            ],
          },
          {
            id: "1d",
            citations: [
              {
                citation: "Juan 4:24",
                text: "Dios es Espíritu; y los que le adoran, en espíritu y en verdad es necesario que adoren.",
              },
            ],
          },
          {
            id: "1e",
            citations: [
              {
                citation: "1 Timoteo 1:17",
                text: "Por tanto, al Rey de los siglos, inmortal, invisible, al único y sabio Dios, sea honor y gloria por los siglos de los siglos. Amén.",
              },
              {
                citation: "Deuteronomio 4:15-16",
                text: "Guardad, pues, mucho vuestras almas; pues ninguna figura visteis el día que Jehová habló con vosotros de en medio del fuego; para que no os corrompáis y hagáis para vosotros escultura, imagen de figura alguna, efigie de varón o hembra.",
              },
            ],
          },
          {
            id: "1f",
            citations: [
              {
                citation: "Malaquías 3:6",
                text: "Porque yo Jehová no cambio; por esto, hijos de Jacob, no habéis sido consumidos.",
              },
            ],
          },
          {
            id: "1g",
            citations: [
              {
                citation: "1 Reyes 8:27",
                text: "Pero ¿es verdad que Dios morará sobre la tierra? He aquí que los cielos, los cielos de los cielos, no te pueden contener; ¿cuánto menos esta casa que yo he edificado?",
              },
              {
                citation: "Jeremías 23:23",
                text: "¿Soy yo Dios de cerca solamente, dice Jehová, y no Dios desde muy lejos?",
              },
            ],
          },
          {
            id: "1h",
            citations: [
              {
                citation: "Salmo 90:2",
                text: "Antes que naciesen los montes Y formases la tierra y el mundo, Desde el siglo y hasta el siglo, tú eres Dios.",
              },
            ],
          },
          {
            id: "1i",
            citations: [
              {
                citation: "Génesis 17:1",
                text: "Era Abram de edad de noventa y nueve años, cuando le apareció Jehová y le dijo: Yo soy el Dios Todopoderoso; anda delante de mí y sé perfecto.",
              },
            ],
          },
          {
            id: "1j",
            citations: [
              {
                citation: "Isaías 6:3",
                text: "Y el uno al otro daba voces, diciendo: Santo, santo, santo, Jehová de los ejércitos; toda la tierra está llena de su gloria.",
              },
            ],
          },
          {
            id: "1k",
            citations: [
              {
                citation: "Salmo 115:3",
                text: "Nuestro Dios está en los cielos; Todo lo que quiso ha hecho.",
              },
              {
                citation: "Isaías 46:10",
                text: "que anuncio lo por venir desde el principio, y desde la antigüedad lo que aún no era hecho; que digo: Mi consejo permanecerá, y haré todo lo que quiero.",
              },
            ],
          },
          {
            id: "1l",
            citations: [
              {
                citation: "Proverbios 16:4",
                text: "Todas las cosas ha hecho Jehová para sí mismo, Y aun al impío para el día malo.",
              },
              {
                citation: "Romanos 11:36",
                text: "Porque de él, y por él, y para él, son todas las cosas. A él sea la gloria por los siglos. Amén.",
              },
            ],
          },
          {
            id: "1m",
            citations: [
              {
                citation: "Éxodo 34:6-7",
                text: "Y pasando Jehová por delante de él, proclamó: ¡Jehová! ¡Jehová! fuerte, misericordioso y piadoso; tardo para la ira, y grande en misericordia y verdad; que guarda misericordia a millares, que perdona la iniquidad, la rebelión y el pecado.",
              },
              {
                citation: "Hebreos 11:6",
                text: "Pero sin fe es imposible agradar a Dios; porque es necesario que el que se acerca a Dios crea que le hay, y que es galardonador de los que le buscan.",
              },
            ],
          },
          {
            id: "1n",
            citations: [
              {
                citation: "Nehemías 9:32-33",
                text: "Ahora pues, Dios nuestro, Dios grande, fuerte, temible, que guardas el pacto y la misericordia, no sea tenido en poco delante de ti todo el sufrimiento que ha alcanzado a nuestros reyes, a nuestros príncipes, a nuestros sacerdotes, a nuestros profetas, a nuestros padres y a todo tu pueblo, desde los días de los reyes de Asiria hasta este día. Pero tú eres justo en todo lo que ha venido sobre nosotros; porque rectamente has hecho, mas nosotros hemos hecho lo malo.",
              },
            ],
          },
          {
            id: "1o",
            citations: [
              {
                citation: "Salmo 5:5-6",
                text: "Los insensatos no estarán delante de tus ojos; Aborreces a todos los que hacen iniquidad. Destruirás a los que hablan mentira; Al hombre sanguinario y engañador abominará Jehová.",
              },
            ],
          },
          {
            id: "1p",
            citations: [
              {
                citation: "Éxodo 34:7",
                text: "que guarda misericordia a millares, que perdona la iniquidad, la rebelión y el pecado, y que de ningún modo tendrá por inocente al malvado.",
              },
              {
                citation: "Nahúm 1:2-3",
                text: "Jehová es Dios celoso y vengador; Jehová es vengador y lleno de indignación; se venga de sus adversarios, y guarda enojo para sus enemigos. Jehová es tardo para la ira y grande en poder, y no tendrá por inocente al culpable.",
              },
            ],
          },
        ],
      },
      {
        number: 2,
        segments: [
          {
            text: "Dios, teniendo toda la vida,",
            referenceId: "2a",
          },
          {
            text: "la gloria,",
            referenceId: "2b",
          },
          {
            text: "la bondad,",
            referenceId: "2c",
          },
          {
            text: "y bienaventuranza, en y de sí mismo, es el único en sí mismo y más que suficiente, no teniendo necesidad de ninguna criatura que él ha hecho, ni derivando ninguna gloria de ellas, sino que solamente manifiesta su gloria en, por, a, y sobre ellos; él es la sola fuente de todo ser, de los cuales, a través del cual, y para quien son todas las cosas,",
            referenceId: "2d",
          },
          {
            text: "y él se enseñorea más soberano sobre todas las criaturas, para hacer mediante ellos, por ellos, o sobre ellos, cualquier cosa que agrada a sí mismo;",
            referenceId: "2e",
          },
          {
            text: "delante de él todas las cosas están abiertas y manifiestas,",
            referenceId: "2f",
          },
          {
            text: "su conocimiento es infinito, infalible, e independiente a la criatura, de modo que no hay nada que lo contingente o incierta;",
            referenceId: "2g",
          },
          {
            text: "sino que es santísimo en todos sus consejos, en todas sus obras,",
            referenceId: "2h",
          },
          {
            text: "y en todas sus órdenes; le es debido de los ángeles y los hombres, que sea el culto, servicio, o la obediencia, como criaturas que deben a que el Creador, y todo lo que está más contento que requieren de ellos.",
            referenceId: "2i",
          },
        ],
        references: [
          {
            id: "2a",
            citations: [
              {
                citation: "Juan 5:26",
                text: "Porque como el Padre tiene vida en sí mismo, así también ha dado al Hijo el tener vida en sí mismo;",
              },
            ],
          },
          {
            id: "2b",
            citations: [
              {
                citation: "Salmo 148:13",
                text: "Alaben el nombre de Jehová, Porque sólo su nombre es enaltecido. Su gloria es sobre tierra y cielos.",
              },
            ],
          },
          {
            id: "2c",
            citations: [
              {
                citation: "Salmo 119:68",
                text: "Bueno eres tú, y bienhechor; Enséñame tus estatutos.",
              },
            ],
          },
          {
            id: "2d",
            citations: [
              {
                citation: "Job 22:2-3",
                text: "¿Traerá el hombre provecho a Dios? Al contrario, para sí mismo es provechoso el hombre sabio. ¿Tiene contentamiento el Omnipotente en que tú seas justo, O provecho de que tú hagas perfectos tus caminos?",
              },
            ],
          },
          {
            id: "2e",
            citations: [
              {
                citation: "Romanos 11:34-36",
                text: "Porque ¿quién entendió la mente del Señor? ¿O quién fue su consejero? ¿O quién le dio a él primero, para que le fuese recompensado? Porque de él, y por él, y para él, son todas las cosas. A él sea la gloria por los siglos. Amén.",
              },
              {
                citation: "Daniel 4:25, 34-35",
                text: "Que te echarán de entre los hombres, y con las bestias del campo será tu morada, y con hierba del campo te apacentarán como a los bueyes, y con el rocío del cielo serás bañado; y siete tiempos pasarán sobre ti, hasta que conozcas que el Altísimo tiene dominio en el reino de los hombres, y que lo da a quien él quiere. [...] Mas al fin del tiempo yo Nabucodonosor alcé mis ojos al cielo, y mi razón me fue devuelta; y bendije al Altísimo, y alabé y glorifiqué al que vive para siempre, cuyo dominio es sempiterno, y su reino por todas las edades. Todos los habitantes de la tierra son considerados como nada; y él hace según su voluntad en el ejército del cielo, y en los habitantes de la tierra, y no hay quien detenga su mano, y le diga: ¿Qué haces?",
              },
            ],
          },
          {
            id: "2f",
            citations: [
              {
                citation: "Hebreos 4:13",
                text: "Y no hay cosa creada que no sea manifiesta en su presencia; antes bien todas las cosas están desnudas y abiertas a los ojos de aquel a quien tenemos que dar cuenta.",
              },
            ],
          },
          {
            id: "2g",
            citations: [
              {
                citation: "Ezequiel 11:5",
                text: "Y vino sobre mí el Espíritu de Jehová, y me dijo: Di: Así ha dicho Jehová: Así habéis hablado, oh casa de Israel, y las cosas que suben a vuestro espíritu, yo las he entendido.",
              },
              {
                citation: "Hechos 15:18",
                text: "Dice el Señor, que hace conocer todo esto desde tiempos antiguos.",
              },
            ],
          },
          {
            id: "2h",
            citations: [
              {
                citation: "Salmo 145:17",
                text: "Justo es Jehová en todos sus caminos, Y misericordioso en todas sus obras.",
              },
            ],
          },
          {
            id: "2i",
            citations: [
              {
                citation: "Apocalipsis 5:12-14",
                text: "que decían a gran voz: El Cordero que fue inmolado es digno de tomar el poder, las riquezas, la sabiduría, la fortaleza, la honra, la gloria y la alabanza. Y a todo lo creado que está en el cielo, y sobre la tierra, y debajo de la tierra, y en el mar, y a todas las cosas que en ellos hay, oí decir: Al que está sentado en el trono, y al Cordero, sea la alabanza, la honra, la gloria y el poder, por los siglos de los siglos. Los cuatro seres vivientes decían: Amén; y los veinticuatro ancianos se postraron sobre sus rostros y adoraron al que vive por los siglos de los siglos.",
              },
            ],
          },
        ],
      },
      {
        number: 3,
        segments: [
          {
            text: "En este Ser divino e infinito hay tres subsistencias, el Padre, el Verbo o el Hijo y el Espíritu Santo,",
            referenceId: "3a",
          },
          {
            text: "de una sustancia, poder y eternidad, cada uno con la esencia divina, y sin embargo toda la esencia indivisible:",
            referenceId: "3b",
          },
          {
            text: "el Padre no es de nadie, ni engendrado ni procedente; el Hijo es engendrado eternamente del Padre;",
            referenceId: "3c",
          },
          {
            text: "el Espíritu Santo procede del Padre y del Hijo;",
            referenceId: "3d",
          },
          {
            text: "todo infinito, sin principio, por lo tanto, un solo Dios, que no debe ser dividido en la naturaleza y el ser, pero se distingue en relación a sus varias propiedades peculiares y a las relaciones personales; de la doctrina de la Trinidad es el fundamento de toda nuestra comunión con Dios, y la dependencia a gusto en él.",
            referenceId: "3d",
          },
        ],
        references: [
          {
            id: "3a",
            citations: [
              {
                citation: "1 Juan 5:7",
                text: "Porque tres son los que dan testimonio en el cielo: el Padre, el Verbo y el Espíritu Santo; y estos tres son uno.",
              },
              {
                citation: "Mateo 28:19",
                text: "Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo;",
              },
              {
                citation: "2 Corintios 13:14",
                text: "La gracia del Señor Jesucristo, el amor de Dios, y la comunión del Espíritu Santo sean con todos vosotros. Amén.",
              },
            ],
          },
          {
            id: "3b",
            citations: [
              {
                citation: "Éxodo 3:14",
                text: "Y respondió Dios a Moisés: YO SOY EL QUE SOY. Y dijo: Así dirás a los hijos de Israel: YO SOY me envió a vosotros.",
              },
              {
                citation: "Juan 14:11",
                text: "Creedme que yo soy en el Padre, y el Padre en mí; de otra manera, creedme por las mismas obras.",
              },
              {
                citation: "1 Corintios 8:6",
                text: "para nosotros, sin embargo, sólo hay un Dios, el Padre, del cual proceden todas las cosas, y nosotros somos para él; y un Señor, Jesucristo, por medio del cual son todas las cosas, y nosotros por medio de él.",
              },
            ],
          },
          {
            id: "3c",
            citations: [
              {
                citation: "Juan 1:14,18",
                text: "Y el Verbo se hizo carne, y habitó entre nosotros (y vimos su gloria, gloria como del unigénito del Padre), lleno de gracia y de verdad. [...] A Dios nadie le vio jamás; el unigénito Hijo, que está en el seno del Padre, él le ha dado a conocer.",
              },
            ],
          },
          {
            id: "3d",
            citations: [
              {
                citation: "Juan 15:26",
                text: "Pero cuando venga el Consolador, a quien yo os enviaré del Padre, el Espíritu de verdad, el cual procede del Padre, él dará testimonio acerca de mí.",
              },
              {
                citation: "Gálatas 4:6",
                text: "Y por cuanto sois hijos, Dios envió a vuestros corazones el Espíritu de su Hijo, el cual clama: ¡Abba, Padre!",
              },
            ],
          },
        ],
      },
    ],
  },
  // Chapter 3: Del Decreto de Dios
  {
    id: 3,
    title: "Del Decreto de Dios",
    paragraphs: [
      {
        number: 1,
        segments: [
          {
            text: "Dios ha decretado en sí mismo, desde toda la eternidad, por el consejo más sabio y santo de su propia voluntad, libre e inmutablemente, todas las cosas, todo lo que sucede,",
            referenceId: "1a",
          },
          {
            text: "aunque así como lo que es Dios ni él es autor del pecado ni tiene comunión con cualquiera en ello,",
            referenceId: "1b",
          },
          {
            text: "ni hace violencia a la voluntad de la criatura, ni tampoco quita la libertad o contingencia de las causas segundas, pero más bien las establece,",
            referenceId: "1c",
          },
          {
            text: "en el que aparece su sabiduría en disponer todas las cosas, y el poder y la fidelidad en el cumplimiento de su decreto.",
            referenceId: "1d",
          },
        ],
        references: [
          {
            id: "1a",
            citations: [
              {
                citation: "Isaías 46:10",
                text: "que anuncio lo por venir desde el principio, y desde la antigüedad lo que aún no era hecho; que digo: Mi consejo permanecerá, y haré todo lo que quiero.",
              },
              {
                citation: "Efesios 1:11",
                text: "En él asimismo tuvimos herencia, habiendo sido predestinados conforme al propósito del que hace todas las cosas según el designio de su voluntad,",
              },
              {
                citation: "Hebreos 6:17",
                text: "Por lo cual, queriendo Dios mostrar más abundantemente a los herederos de la promesa la inmutabilidad de su consejo, interpuso juramento;",
              },
              {
                citation: "Romanos 9:15, 18",
                text: "Pues a Moisés dice: Tendré misericordia del que yo tenga misericordia, y me compadeceré del que yo me compadezca. [...] De manera que de quien quiere, tiene misericordia, y al que quiere endurecer, endurece.",
              },
            ],
          },
          {
            id: "1b",
            citations: [
              {
                citation: "Santiago 1:13",
                text: "Cuando alguno es tentado, no diga que es tentado de parte de Dios; porque Dios no puede ser tentado por el mal, ni él tienta a nadie;",
              },
              {
                citation: "1 Juan 1:5",
                text: "Este es el mensaje que hemos oído de él, y os anunciamos: Dios es luz, y no hay ningunas tinieblas en él.",
              },
            ],
          },
          {
            id: "1c",
            citations: [
              {
                citation: "Hechos 4:27, 28",
                text: "Porque verdaderamente se unieron en esta ciudad contra tu santo Hijo Jesús, a quien ungiste, Herodes y Poncio Pilato, con los gentiles y el pueblo de Israel, para hacer cuanto tu mano y tu consejo habían antes determinado que sucediera.",
              },
              {
                citation: "Juan 19:11",
                text: "Respondió Jesús: Ninguna autoridad tendrías contra mí, si no te fuese dada de arriba; por tanto, el que a ti me ha entregado, mayor pecado tiene.",
              },
            ],
          },
          {
            id: "1d",
            citations: [
              {
                citation: "Números 23:19",
                text: "Dios no es hombre, para que mienta, Ni hijo de hombre para que se arrepienta. El dijo, ¿y no hará? Habló, ¿y no lo ejecutará?",
              },
              {
                citation: "Efesios 1:3-5",
                text: "Bendito sea el Dios y Padre de nuestro Señor Jesucristo, que nos bendijo con toda bendición espiritual en los lugares celestiales en Cristo, según nos escogió en él antes de la fundación del mundo, para que fuésemos santos y sin mancha delante de él, en amor habiéndonos predestinado para ser adoptados hijos suyos por medio de Jesucristo, según el puro afecto de su voluntad,",
              },
            ],
          },
        ],
      },
      {
        number: 2,
        segments: [
          {
            text: "Aunque conoce Dios todo lo pudiera o puede llegar a pasar, en todas las condiciones supuestas,",
            referenceId: "2a",
          },
          {
            text: "sin embargo no tiene nada decretado porque lo preveía como futuro, o como lo que vendría a pasar en esas condiciones.",
            referenceId: "2b",
          },
        ],
        references: [
          {
            id: "2a",
            citations: [
              {
                citation: "Hechos 15:18",
                text: "Dice el Señor, que hace conocer todo esto desde tiempos antiguos.",
              },
            ],
          },
          {
            id: "2b",
            citations: [
              {
                citation: "Romanos 9:11, 13, 16, 18",
                text: "(pues no habían aún nacido, ni habían hecho aún ni bien ni mal, para que el propósito de Dios conforme a la elección permaneciese, no por las obras sino por el que llama), [...] Como está escrito: A Jacob amé, mas a Esaú aborrecí. [...] Así que no depende del que quiere, ni del que corre, sino de Dios que tiene misericordia. [...] De manera que de quien quiere, tiene misericordia, y al que quiere endurecer, endurece.",
              },
            ],
          },
        ],
      },
      {
        number: 3,
        segments: [
          {
            text: "Por el decreto de Dios, para la manifestación de su gloria, algunos hombres y ángeles son predestinados o preordenados para vida eterna mediante Jesucristo,",
            referenceId: "3a",
          },
          {
            text: "para alabanza de su gloriosa gracia,",
            referenceId: "3b",
          },
          {
            text: "otros se les deja actuar en su pecado para su justa condenación, para alabanza de su gloriosa justicia.",
            referenceId: "3c",
          },
        ],
        references: [
          {
            id: "3a",
            citations: [
              {
                citation: "1 Timoteo 5:21",
                text: "Te encarezco delante de Dios y del Señor Jesucristo, y de sus ángeles escogidos, que guardes estas cosas sin prejuicios, no haciendo nada con parcialidad.",
              },
              {
                citation: "Mateo 25:34",
                text: "Entonces el Rey dirá a los de su derecha: Venid, benditos de mi Padre, heredad el reino preparado para vosotros desde la fundación del mundo.",
              },
            ],
          },
          {
            id: "3b",
            citations: [
              {
                citation: "Efesios 1:5, 6",
                text: "en amor habiéndonos predestinado para ser adoptados hijos suyos por medio de Jesucristo, según el puro afecto de su voluntad, para alabanza de la gloria de su gracia, con la cual nos hizo aceptos en el Amado,",
              },
            ],
          },
          {
            id: "3c",
            citations: [
              {
                citation: "Romanos 9:22, 23",
                text: "¿Y qué, si Dios, queriendo mostrar su ira y hacer notorio su poder, soportó con mucha paciencia los vasos de ira preparados para destrucción, y para hacer notorias las riquezas de su gloria, las mostró para con los vasos de misericordia que él preparó de antemano para gloria,",
              },
              {
                citation: "Judas 4",
                text: "Porque algunos hombres han entrado encubiertamente, los que desde antes habían sido destinados para esta condenación, hombres impíos, que convierten en libertinaje la gracia de nuestro Dios, y niegan a Dios el único soberano, y a nuestro Señor Jesucristo.",
              },
            ],
          },
        ],
      },
      {
        number: 4,
        segments: [
          {
            text: "Estos ángeles y los hombres así predestinados y preordenados, están designados particular e inalterablemente, y su número es tan cierto y definido, que no puede ser aumentado o disminuido.",
            referenceId: "4a",
          },
        ],
        references: [
          {
            id: "4a",
            citations: [
              {
                citation: "2 Timoteo 2:19",
                text: "Pero el fundamento de Dios está firme, teniendo este sello: Conoce el Señor a los que son suyos; y: Apártese de iniquidad todo aquel que invoca el nombre de Cristo.",
              },
              {
                citation: "Juan 13:18",
                text: "No hablo de todos vosotros; yo sé a quienes he elegido; mas para que se cumpla la Escritura: El que come pan conmigo, levantó contra mí su calcañar.",
              },
            ],
          },
        ],
      },
      {
        number: 5,
        segments: [
          {
            text: "Los de la humanidad que están predestinados a la vida, Dios, antes de la fundación del mundo, conforme a su propósito eterno e inmutable, y el consejo secreto y beneplácito de su voluntad, ha escogido en Cristo para la gloria eterna, meramente por su gracia gratuita y el amor,",
            referenceId: "5a",
          },
          {
            text: "sin ninguna otra cosa en la criatura como condición o causa que le moviera a hacerlo.",
            referenceId: "5b",
          },
        ],
        references: [
          {
            id: "5a",
            citations: [
              {
                citation: "Efesios 1:4, 9, 11",
                text: "según nos escogió en él antes de la fundación del mundo, para que fuésemos santos y sin mancha delante de él, [...] dándonos a conocer el misterio de su voluntad, según su beneplácito, el cual se había propuesto en sí mismo, [...] En él asimismo tuvimos herencia, habiendo sido predestinados conforme al propósito del que hace todas las cosas según el designio de su voluntad,",
              },
              {
                citation: "Romanos 8:30",
                text: "Y a los que predestinó, a éstos también llamó; y a los que llamó, a éstos también justificó; y a los que justificó, a éstos también glorificó.",
              },
              {
                citation: "2 Timoteo 1:9",
                text: "quien nos salvó y llamó con llamamiento santo, no conforme a nuestras obras, sino según el propósito suyo y la gracia que nos fue dada en Cristo Jesús antes de los tiempos de los siglos,",
              },
              {
                citation: "1 Tesalonicenses 5:9",
                text: "Porque no nos ha puesto Dios para ira, sino para alcanzar salvación por medio de nuestro Señor Jesucristo,",
              },
            ],
          },
          {
            id: "5b",
            citations: [
              {
                citation: "Romanos 9:13, 16",
                text: "Como está escrito: A Jacob amé, mas a Esaú aborrecí. [...] Así que no depende del que quiere, ni del que corre, sino de Dios que tiene misericordia.",
              },
              {
                citation: "Efesios 2:5, 12",
                text: "aun estando nosotros muertos en pecados, nos dio vida juntamente con Cristo (por gracia sois salvos), [...] En aquel tiempo estabais sin Cristo, alejados de la ciudadanía de Israel y ajenos a los pactos de la promesa, sin esperanza y sin Dios en el mundo.",
              },
            ],
          },
        ],
      },
      {
        number: 6,
        segments: [
          {
            text: "Así como Dios ha designado a los elegidos para la gloria, por lo mismo, por el propósito libre y eterno de su voluntad, ha preordenado todos los medios para ello;",
            referenceId: "6a",
          },
          {
            text: "por lo cual los que son elegidos, siendo caídos en Adán, son redimidos por Cristo,",
            referenceId: "6b",
          },
          {
            text: "son eficazmente llamados a la fe en Cristo, por su Espíritu que obra en su tiempo, son justificados, adoptados, santificados",
            referenceId: "6c",
          },
          {
            text: "y guardados por su poder a través de la fe para la salvación;",
            referenceId: "6d",
          },
          {
            text: "ni ningún otro es redimido por Cristo, o eficazmente llamado, justificado, adoptado, santificado y salvado, sino los elegidos solamente.",
            referenceId: "6e",
          },
        ],
        references: [
          {
            id: "6a",
            citations: [
              {
                citation: "1 Pedro 1:2",
                text: "elegidos según la presciencia de Dios Padre en santificación del Espíritu, para obedecer y ser rociados con la sangre de Jesucristo: Gracia y paz os sean multiplicadas.",
              },
              {
                citation: "2 Tesalonicenses 2:13",
                text: "Pero nosotros debemos dar siempre gracias a Dios respecto a vosotros, hermanos amados por el Señor, de que Dios os haya escogido desde el principio para salvación, mediante la santificación por el Espíritu y la fe en la verdad,",
              },
            ],
          },
          {
            id: "6b",
            citations: [
              {
                citation: "1 Tesalonicenses 5:9, 10",
                text: "Porque no nos ha puesto Dios para ira, sino para alcanzar salvación por medio de nuestro Señor Jesucristo, quien murió por nosotros para que ya sea que velemos, o que durmamos, vivamos juntamente con él.",
              },
            ],
          },
          {
            id: "6c",
            citations: [
              {
                citation: "Romanos 8:30",
                text: "Y a los que predestinó, a éstos también llamó; y a los que llamó, a éstos también justificó; y a los que justificó, a éstos también glorificó.",
              },
              {
                citation: "2 Tesalonicenses 2:13",
                text: "Pero nosotros debemos dar siempre gracias a Dios respecto a vosotros, hermanos amados por el Señor, de que Dios os haya escogido desde el principio para salvación, mediante la santificación por el Espíritu y la fe en la verdad,",
              },
            ],
          },
          {
            id: "6d",
            citations: [
              {
                citation: "1 Pedro 1:5",
                text: "que sois guardados por el poder de Dios mediante la fe, para alcanzar la salvación que está preparada para ser manifestada en el tiempo postrero.",
              },
            ],
          },
          {
            id: "6e",
            citations: [
              {
                citation: "Juan 10:26",
                text: "pero vosotros no creéis, porque no sois de mis ovejas, como os he dicho.",
              },
              {
                citation: "Juan 17:9",
                text: "Yo ruego por ellos; no ruego por el mundo, sino por los que me diste; porque tuyos son,",
              },
              {
                citation: "Juan 6:64",
                text: "Pero hay algunos de vosotros que no creen. Porque Jesús sabía desde el principio quiénes eran los que no creían, y quién le había de entregar.",
              },
            ],
          },
        ],
      },
      {
        number: 7,
        segments: [
          {
            text: "La doctrina de este alto misterio de la predestinación debe tratarse con especial prudencia y cuidado, para que los hombres que atienden a la voluntad de Dios revelada en su Palabra, y al obedecerla a ella, puedan de la certeza de su vocación eficaz, estar seguros de su eterna elección,",
            referenceId: "7a",
          },
          {
            text: "de modo que esta doctrina proporcionará motivos de alabanza,",
            referenceId: "7b",
          },
          {
            text: "reverencia y admiración de Dios, y de humildad,",
            referenceId: "7c",
          },
          {
            text: "diligencia y abundante consuelo a todos los que sinceramente obedecen al evangelio.",
            referenceId: "7d",
          },
        ],
        references: [
          {
            id: "7a",
            citations: [
              {
                citation: "1 Tesalonicenses 1:4, 5",
                text: "Porque conocemos, hermanos amados de Dios, vuestra elección; pues nuestro evangelio no llegó a vosotros en palabras solamente, sino también en poder, en el Espíritu Santo y en plena certidumbre, como bien sabéis cuáles fuimos entre vosotros por amor de vosotros.",
              },
              {
                citation: "2 Pedro 1:10",
                text: "Por lo cual, hermanos, tanto más procurad hacer firme vuestra vocación y elección; porque haciendo estas cosas, no caeréis jamás.",
              },
            ],
          },
          {
            id: "7b",
            citations: [
              {
                citation: "Efesios 1:6",
                text: "para alabanza de la gloria de su gracia, con la cual nos hizo aceptos en el Amado,",
              },
              {
                citation: "Romanos 11:33",
                text: "¡Oh profundidad de las riquezas de la sabiduría y de la ciencia de Dios! ¡Cuán insondables son sus juicios, e inescrutables sus caminos!",
              },
            ],
          },
          {
            id: "7c",
            citations: [
              {
                citation: "Romanos 11:5, 6, 20",
                text: "Así también aun en este tiempo ha quedado un remanente escogido por gracia. Y si por gracia, ya no es por obras; de otra manera la gracia ya no es gracia. Y si por obras, ya no es gracia; de otra manera la obra ya no es obra. [...] Bien; por su incredulidad fueron desgajadas, pero tú por la fe estás en pie. No te ensoberbezcas, sino teme.",
              },
            ],
          },
          {
            id: "7d",
            citations: [
              {
                citation: "Lucas 10:20",
                text: "Pero no os regocijéis de que los espíritus se os sujetan, sino regocijaos de que vuestros nombres están escritos en los cielos.",
              },
            ],
          },
        ],
      },
    ],
  },
  // Chapter 4: De la Creación
  {
    id: 4,
    title: "De la Creación",
    paragraphs: [
      {
        number: 1,
        segments: [
          {
            text: "En el principio agradó a Dios el Padre, Hijo y Espíritu Santo,",
            referenceId: "1a",
          },
          {
            text: "para la manifestación de la gloria de su eterno poder,",
            referenceId: "1b",
          },
          {
            text: "sabiduría y bondad, el crear o hacer el mundo, y todas las cosas que en él están, ya sea visibles o invisibles, en el espacio de seis días, y todas muy buenas.",
            referenceId: "1c",
          },
        ],
        references: [
          {
            id: "1a",
            citations: [
              {
                citation: "Juan 1:2, 3",
                text: "Este era en el principio con Dios. Todas las cosas por él fueron hechas, y sin él nada de lo que ha sido hecho, fue hecho.",
              },
              {
                citation: "Hebreos 1:2",
                text: "en estos postreros días nos ha hablado por el Hijo, a quien constituyó heredero de todo, y por quien asimismo hizo el universo;",
              },
              {
                citation: "Job 26:13",
                text: "Su espíritu adornó los cielos; Su mano creó la serpiente tortuosa.",
              },
            ],
          },
          {
            id: "1b",
            citations: [
              {
                citation: "Romanos 1:20",
                text: "Porque las cosas invisibles de él, su eterno poder y deidad, se hacen claramente visibles desde la creación del mundo, siendo entendidas por medio de las cosas hechas, de modo que no tienen excusa.",
              },
            ],
          },
          {
            id: "1c",
            citations: [
              {
                citation: "Colosenses 1:16",
                text: "Porque en él fueron creadas todas las cosas, las que hay en los cielos y las que hay en la tierra, visibles e invisibles; sean tronos, sean dominios, sean principados, sean potestades; todo fue creado por medio de él y para él.",
              },
              {
                citation: "Génesis 1:31",
                text: "Y vio Dios todo lo que había hecho, y he aquí que era bueno en gran manera. Y fue la tarde y la mañana el día sexto.",
              },
            ],
          },
        ],
      },

      {
        number: 2,
        segments: [
          {
            text: "Después de que Dios había hecho todas las demás criaturas, creó al hombre, varón y hembra,",
            referenceId: "2a",
          },
          {
            text: "con almas racionales e inmortal,",
            referenceId: "2b",
          },
          {
            text: "lo que hace que encajen a la vida para con Dios por el cual fueron creados; fueron hechos a la imagen de Dios, en conocimiento, justicia y santidad de la verdad;",
            referenceId: "2c",
          },
          {
            text: "teniendo la ley de Dios escrita en sus corazones,",
            referenceId: "2d",
          },
          {
            text: "y el poder para cumplirla, y sin embargo, en virtud de la posibilidad de transgredir, fueron dejados a la libertad de su propia voluntad, que estaba sujeta a cambios.",
            referenceId: "2e",
          },
        ],
        references: [
          {
            id: "2a",
            citations: [
              {
                citation: "Génesis 1:27",
                text: "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó.",
              },
            ],
          },
          {
            id: "2b",
            citations: [
              {
                citation: "Génesis 2:7",
                text: "Entonces Jehová Dios formó al hombre del polvo de la tierra, y sopló en su nariz aliento de vida, y fue el hombre un ser viviente.",
              },
            ],
          },
          {
            id: "2c",
            citations: [
              {
                citation: "Eclesiastés 7:29",
                text: "He aquí, solamente esto he hallado: que Dios hizo al hombre recto, pero ellos buscaron muchas perversiones.",
              },
              {
                citation: "Génesis 1:26",
                text: "Entonces dijo Dios: Hagamos al hombre a nuestra imagen, conforme a nuestra semejanza; y señoree en los peces del mar, en las aves de los cielos, en las bestias, en toda la tierra, y en todo animal que se arrastra sobre la tierra.",
              },
            ],
          },
          {
            id: "2d",
            citations: [
              {
                citation: "Romanos 2:14, 15",
                text: "Porque cuando los gentiles que no tienen ley, hacen por naturaleza lo que es de la ley, éstos, aunque no tengan ley, son ley para sí mismos, mostrando la obra de la ley escrita en sus corazones, dando testimonio su conciencia, y acusándoles o defendiéndoles sus razonamientos,",
              },
            ],
          },
          {
            id: "2e",
            citations: [
              {
                citation: "Génesis 3:6",
                text: "Y vio la mujer que el árbol era bueno para comer, y que era agradable a los ojos, y árbol codiciable para alcanzar la sabiduría; y tomó de su fruto, y comió; y dio también a su marido, el cual comió así como ella.",
              },
            ],
          },
        ],
      },
      {
        number: 3,
        segments: [
          {
            text: "Además de la ley escrita en sus corazones, recibieron una orden de no comer del árbol del conocimiento del bien y del mal,",
            referenceId: "3a",
          },
          {
            text: "que mientras lo guardaron, eran felices en su comunión con Dios, y tenían el dominio sobre las criaturas.",
            referenceId: "3b",
          },
        ],
        references: [
          {
            id: "3a",
            citations: [
              {
                citation: "Génesis 2:17",
                text: "mas del árbol de la ciencia del bien y del mal no comerás; porque el día que de él comieres, ciertamente morirás.",
              },
            ],
          },
          {
            id: "3b",
            citations: [
              {
                citation: "Génesis 1:26, 28",
                text: "Entonces dijo Dios: Hagamos al hombre a nuestra imagen, conforme a nuestra semejanza; y señoree en los peces del mar, en las aves de los cielos, en las bestias, en toda la tierra, y en todo animal que se arrastra sobre la tierra. [...] Y los bendijo Dios, y les dijo: Fructificad y multiplicaos; llenad la tierra, y sojuzgadla, y señoread en los peces del mar, en las aves de los cielos, y en todas las bestias que se mueven sobre la tierra.",
              },
            ],
          },
        ],
      },
    ],
  },
  // Chapter 5: De la Divina Providencia
  {
    id: 5,
    title: "De la Divina Providencia",
    paragraphs: [
      {
        number: 1,
        segments: [
          {
            text: "Dios el buen Creador de todas las cosas, en su infinito poder y sabiduría sostiene, dirige, dispone y gobierna todas las criaturas y las cosas,",
            referenceId: "1a",
          },
          {
            text: "desde la mayor hasta la menor,",
            referenceId: "1b",
          },
          {
            text: "por su sabia y santa providencia, hasta el fin para el que que fueron creados, de acuerdo a su conocimiento infalible, y el libre e inmutable consejo de su propia voluntad, para alabanza de la gloria de su sabiduría, poder, justicia, bondad infinita, y su misericordia.",
            referenceId: "1c",
          },
        ],
        references: [
          {
            id: "1a",
            citations: [
              {
                citation: "Hebreos 1:3",
                text: "el cual, siendo el resplandor de su gloria, y la imagen misma de su sustancia, y quien sustenta todas las cosas con la palabra de su poder, habiendo efectuado la purificación de nuestros pecados por medio de sí mismo, se sentó a la diestra de la Majestad en las alturas,",
              },
              {
                citation: "Job 38:11",
                text: "Y dije: Hasta aquí llegarás, y no pasarás adelante, Y ahí parará el orgullo de tus olas?",
              },
              {
                citation: "Isaías 46:10-11",
                text: "que anuncio lo por venir desde el principio, y desde la antigüedad lo que aún no era hecho; que digo: Mi consejo permanecerá, y haré todo lo que quiero; que llamo desde el oriente al ave, y de tierra lejana al varón de mi consejo. Yo hablé, y lo haré venir; lo he pensado, y también lo haré.",
              },
              {
                citation: "Salmos 135:6",
                text: "Todo lo que Jehová quiere, lo hace, En los cielos y en la tierra, en los mares y en todos los abismos.",
              },
            ],
          },
          {
            id: "1b",
            citations: [
              {
                citation: "Mateo 10:29-31",
                text: "¿No se venden dos pajarillos por un cuarto? Con todo, ni uno de ellos cae a tierra sin vuestro Padre. Pues aun vuestros cabellos están todos contados. Así que, no temáis; más valéis vosotros que muchos pajarillos.",
              },
            ],
          },
          {
            id: "1c",
            citations: [
              {
                citation: "Efesios 1:11",
                text: "En él asimismo tuvimos herencia, habiendo sido predestinados conforme al propósito del que hace todas las cosas según el designio de su voluntad,",
              },
            ],
          },
        ],
      },

      {
        number: 2,
        segments: [
          {
            text: "Aunque en relación a la presciencia y decreto de Dios, la causa primera, todas las cosas llegan a pasar inmutable e infaliblemente;",
            referenceId: "2a",
          },
          {
            text: "de modo que no hay nada que acontece por casualidad alguna, o sin su providencia;",
            referenceId: "2b",
          },
          {
            text: "sin embargo por la misma providencia Él lo ha ordenado de tal manera que sucederá de acuerdo con la naturaleza de las causas secundarias, ya sea necesaria, libre o contingentemente.",
            referenceId: "2c",
          },
        ],
        references: [
          {
            id: "2a",
            citations: [
              {
                citation: "Hechos 2:23",
                text: "a éste, entregado por el determinado consejo y anticipado conocimiento de Dios, prendisteis y matasteis por manos de inicuos, crucificándole;",
              },
            ],
          },
          {
            id: "2b",
            citations: [
              {
                citation: "Proverbios 16:33",
                text: "La suerte se echa en el regazo; Mas de Jehová es la decisión de ella.",
              },
            ],
          },
          {
            id: "2c",
            citations: [
              {
                citation: "Génesis 8:22",
                text: "Mientras la tierra permanezca, no cesarán la sementera y la siega, el frío y el calor, el verano y el invierno, y el día y la noche.",
              },
            ],
          },
        ],
      },

      {
        number: 3,
        segments: [
          {
            text: "Dios, en su providencia ordinaria hace uso de los medios,",
            referenceId: "3a",
          },
          {
            text: "sin embargo es libre para obrar sin ellos,",
            referenceId: "3b",
          },
          {
            text: "más arriba de ellos,",
            referenceId: "3c",
          },
          {
            text: "y en contra de ellos a su antojo.",
            referenceId: "3d",
          },
        ],
        references: [
          {
            id: "3a",
            citations: [
              {
                citation: "Hechos 27:31, 44",
                text: "Pablo dijo al centurión y a los soldados: Si éstos no permanecen en la nave, vosotros no podéis salvaros. [...] y así aconteció que todos se salvaron saliendo a tierra.",
              },
              {
                citation: "Isaías 55:10, 11",
                text: "Porque como desciende de los cielos la lluvia y la nieve, y no vuelve allá, sino que riega la tierra, y la hace germinar y producir, y da semilla al que siembra, y pan al que come, así será mi palabra que sale de mi boca; no volverá a mí vacía, sino que hará lo que yo quiero, y será prosperada en aquello para que la envié.",
              },
            ],
          },
          {
            id: "3b",
            citations: [
              {
                citation: "Oseas 1:7",
                text: "Mas de la casa de Judá tendré misericordia, y los salvaré por Jehová su Dios; y no los salvaré con arco, ni con espada, ni con batalla, ni con caballos ni jinetes.",
              },
            ],
          },
          {
            id: "3c",
            citations: [
              {
                citation: "Romanos 4:19-21",
                text: "Y no se debilitó en la fe al considerar su cuerpo, que estaba ya como muerto (siendo de casi cien años), o la esterilidad de la matriz de Sara. Tampoco dudó, por incredulidad, de la promesa de Dios, sino que se fortaleció en fe, dando gloria a Dios, plenamente convencido de que era también poderoso para hacer todo lo que había prometido;",
              },
            ],
          },
          {
            id: "3d",
            citations: [
              {
                citation: "Daniel 3:27",
                text: "Y se juntaron los sátrapas, los gobernadores, los capitanes y los consejeros del rey, para mirar a estos varones, cómo el fuego no había tenido poder alguno sobre sus cuerpos, ni aun el cabello de sus cabezas se había quemado; sus ropas estaban intactas, y ni siquiera olor de fuego tenían.",
              },
            ],
          },
        ],
      },

      {
        number: 4,
        segments: [
          {
            text: "La omnipotencia, la sabiduría inescrutable, y la bondad infinita de Dios, hasta el momento se manifiestan en su providencia, que su determinado consejo se extiende en sí incluso hasta la primera caída, y todas las otras acciones pecaminosas, tanto de los ángeles y de los hombres,",
            referenceId: "4a",
          },
          {
            text: "y esto no por un mero permiso, el cual también sapientísima y poderosamente limita, y de otra manera ordena y gobierna,",
            referenceId: "4b",
          },
          {
            text: "en una dispensación múltiple para sus fines más sagrados;",
            referenceId: "4c",
          },
          {
            text: "de tal manera, que la maldad de los actos proceden únicamente de sus criaturas, y no de Dios, que, siendo santísimo y justísimo, no es ni puede ser el autor o aprobador del pecado.",
            referenceId: "4d",
          },
        ],
        references: [
          {
            id: "4a",
            citations: [
              {
                citation: "Romanos 11:32-34",
                text: "Porque Dios sujetó a todos en desobediencia, para tener misericordia de todos. ¡Oh profundidad de las riquezas de la sabiduría y de la ciencia de Dios! ¡Cuán insondables son sus juicios, e inescrutables sus caminos! Porque ¿quién entendió la mente del Señor? ¿O quién fue su consejero?",
              },
              {
                citation: "2 Samuel 24:1",
                text: "Volvió a encenderse la ira de Jehová contra Israel, e incitó a David contra ellos a que dijese: Ve, haz un censo de Israel y de Judá.",
              },
              {
                citation: "1 Crónicas 21:1",
                text: "Pero Satanás se levantó contra Israel, e incitó a David a que hiciese censo de Israel.",
              },
            ],
          },
          {
            id: "4b",
            citations: [
              {
                citation: "2 Reyes 19:28",
                text: "Por cuanto te has airado contra mí, por cuanto tu arrogancia ha subido a mis oídos, yo pondré mi garfio en tu nariz, y mi freno en tus labios, y te haré volver por el camino por donde viniste.",
              },
              {
                citation: "Salmos 76:10",
                text: "Ciertamente la ira del hombre te alabará; Tú reprimirás el resto de las iras.",
              },
            ],
          },
          {
            id: "4c",
            citations: [
              {
                citation: "Génesis 50:20",
                text: "Vosotros pensasteis mal contra mí, mas Dios lo encaminó a bien, para hacer lo que vemos hoy, para mantener en vida a mucho pueblo.",
              },
              {
                citation: "Isaías 10:6, 7, 12",
                text: "Lo enviaré contra una nación pérfida, y sobre el pueblo de mi ira le mandaré, para que quite despojos, y arrebate presa, y lo ponga para ser hollado como lodo de las calles. Aunque él no lo pensará así, ni su corazón lo imaginará de esta manera, sino que su pensamiento será desarraigar y cortar naciones no pocas. [...] Pero acontecerá que después que el Señor haya acabado toda su obra en el monte de Sion y en Jerusalén, castigará el fruto de la soberbia del corazón del rey de Asiria, y la gloria de la altivez de sus ojos.",
              },
              {
                citation: "Efesios 1:10",
                text: "de reunir todas las cosas en Cristo, en la dispensación del cumplimiento de los tiempos, así las que están en los cielos, como las que están en la tierra.",
              },
            ],
          },
          {
            id: "4d",
            citations: [
              {
                citation: "Salmos 50:21",
                text: "Estas cosas hiciste, y yo he callado; Pensabas que de cierto sería yo como tú; Pero te reprenderé, y las pondré delante de tus ojos.",
              },
              {
                citation: "1 Juan 2:16",
                text: "Porque todo lo que hay en el mundo, los deseos de la carne, los deseos de los ojos, y la vanagloria de la vida, no proviene del Padre, sino del mundo.",
              },
            ],
          },
        ],
      },

      {
        number: 5,
        segments: [
          {
            text: "El más sabio, justo y benigno Dios a menudo deja por algún tiempo a sus propios hijos a múltiples tentaciones y en la corrupción de sus propios corazones, a fin de corregirlos por sus pecados anteriores, o para descubrirles a ellos la fuerza oculta de la corrupción y el engaño de sus corazones, para que puedan ser humillados; y elevarlos a una dependencia más estrecha y constante de él para su apoyo; y para que sean más vigilantes contra todas las ocasiones futuras del pecado, y para otros fines justos y santos.",
            referenceId: "5a",
          },
          {
            text: "Así que todo lo que acontece a cualquiera de sus elegidos es por su nombramiento, para su gloria y su bien.",
            referenceId: "5b",
          },
        ],
        references: [
          {
            id: "5a",
            citations: [
              {
                citation: "2 Crónicas 32:25, 26, 31",
                text: "Mas Ezequías no correspondió al bien que le había sido hecho, sino que se enalteció su corazón, y vino la ira contra él, y contra Judá y Jerusalén. Pero Ezequías, después de haberse enaltecido su corazón, se humilló, él y los moradores de Jerusalén; y no vino sobre ellos la ira de Jehová en los días de Ezequías. [...] Mas en lo referente a los mensajeros de los príncipes de Babilonia, que enviaron a él para saber del prodigio que había acontecido en el país, Dios lo dejó, para probarle, para hacer conocer todo lo que estaba en su corazón.",
              },
              {
                citation: "2 Corintios 12:7-9",
                text: "Y para que la grandeza de las revelaciones no me exaltase desmedidamente, me fue dado un aguijón en mi carne, un mensajero de Satanás que me abofetee, para que no me enaltezca sobremanera; respecto a lo cual tres veces he rogado al Señor, que lo quite de mí. Y me ha dicho: Bástate mi gracia; porque mi poder se perfecciona en la debilidad. Por tanto, de buena gana me gloriaré más bien en mis debilidades, para que repose sobre mí el poder de Cristo.",
              },
            ],
          },
          {
            id: "5b",
            citations: [
              {
                citation: "Romanos 8:28",
                text: "Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su propósito son llamados.",
              },
            ],
          },
        ],
      },
      {
        number: 6,
        segments: [
          {
            text: "En cuanto a aquellos hombres malvados e impíos a quienes Dios como juez justo ha cegado y endurecido a causa de sus pecados anteriores,",
            referenceId: "6a",
          },
          {
            text: "no sólo les retira su gracia por la cual podrían haber alumbrado sus entendimientos y ejercitado sus corazones,",
            referenceId: "6b",
          },
          {
            text: "sino también algunas veces les retira los dones que ya tenían,",
            referenceId: "6c",
          },
          {
            text: "y los deja expuestos a objetos que son causa de pecado debido a la corrupción humana,",
            referenceId: "6d",
          },
          {
            text: "y a la vez les entrega a sus propias concupiscencias, a las tentaciones del mundo y al poder de Satanás,",
            referenceId: "6e",
          },
          {
            text: "de donde sucede que se endurecen bajo los mismos medios que Dios emplea para ablandar a los demás.",
            referenceId: "6f",
          },
        ],
        references: [
          {
            id: "6a",
            citations: [
              {
                citation: "Romanos 1:24-26, 28",
                text: "Por lo cual también Dios los entregó a la inmundicia, en las concupiscencias de sus corazones, de modo que deshonraron entre sí sus propios cuerpos, ya que cambiaron la verdad de Dios por la mentira, honrando y dando culto a las criaturas antes que al Creador, el cual es bendito por los siglos. Amén. Por esto Dios los entregó a pasiones vergonzosas; [...] Y como ellos no aprobaron tener en cuenta a Dios, Dios los entregó a una mente reprobada, para hacer cosas que no convienen;",
              },
              {
                citation: "Romanos 11:7-8",
                text: "¿Qué pues? Lo que buscaba Israel, no lo ha alcanzado; pero los escogidos sí lo han alcanzado, y los demás fueron endurecidos; como está escrito: Dios les dio espíritu de estupor, ojos con que no vean y oídos con que no oigan, hasta el día de hoy.",
              },
            ],
          },
          {
            id: "6b",
            citations: [
              {
                citation: "Deuteronomio 29:4",
                text: "Pero hasta hoy Jehová no os ha dado corazón para entender, ni ojos para ver, ni oídos para oír.",
              },
            ],
          },
          {
            id: "6c",
            citations: [
              {
                citation: "Mateo 13:12",
                text: "Porque a cualquiera que tiene, se le dará, y tendrá más; pero al que no tiene, aun lo que tiene le será quitado.",
              },
            ],
          },
          {
            id: "6d",
            citations: [
              {
                citation: "Deuteronomio 2:30",
                text: "Mas Sehón rey de Hesbón no quiso que pasásemos por el territorio suyo; porque Jehová tu Dios había endurecido su espíritu, y obstinado su corazón para entregarlo en tu mano, como hasta hoy.",
              },
              {
                citation: "2 Reyes 8:12-13",
                text: "Y Hazael dijo: ¿Por qué llora mi señor? Y él respondió: Porque sé el mal que harás a los hijos de Israel; a sus fortalezas pegarás fuego, y a sus jóvenes matarás a espada, y estrellarás a sus niños, y abrirás a sus mujeres que estén encintas. Y Hazael dijo: Pues, ¿qué es tu siervo, este perro, para que haga tan grandes cosas? Y respondió Eliseo: Jehová me ha mostrado que tú serás rey de Siria.",
              },
            ],
          },
          {
            id: "6e",
            citations: [
              {
                citation: "Salmos 81:11-12",
                text: "Pero mi pueblo no oyó mi voz, E Israel no me quiso a mí. Los entregué, por tanto, a la dureza de su corazón; Caminaron en sus propios consejos.",
              },
              {
                citation: "2 Tesalonicenses 2:10-12",
                text: "y con todo engaño de iniquidad para los que se pierden, por cuanto no recibieron el amor de la verdad para ser salvos. Por esto Dios les envía un poder engañoso, para que crean la mentira, a fin de que sean condenados todos los que no creyeron a la verdad, sino que se complacieron en la injusticia.",
              },
            ],
          },
          {
            id: "6f",
            citations: [
              {
                citation: "Éxodo 8:15, 32",
                text: "Pero viendo Faraón que le habían dado reposo, endureció su corazón y no los escuchó, como Jehová lo había dicho. [...] Mas Faraón endureció aun esta vez su corazón, y no dejó ir al pueblo.",
              },
              {
                citation: "Isaías 6:9-10",
                text: "Y dijo: Anda, y di a este pueblo: Oíd bien, y no entendáis; ved por cierto, mas no comprendáis. Engruesa el corazón de este pueblo, y agrava sus oídos, y ciega sus ojos, para que no vea con sus ojos, ni oiga con sus oídos, ni su corazón entienda, ni se convierta, y haya para él sanidad.",
              },
              {
                citation: "1 Pedro 2:7-8",
                text: "Para vosotros, pues, los que creéis, él es precioso; pero para los que no creen, La piedra que los edificadores desecharon, Ha venido a ser la cabeza del ángulo; y: Piedra de tropiezo, y roca que hace caer, porque tropiezan en la palabra, siendo desobedientes; a lo cual fueron también destinados.",
              },
            ],
          },
        ],
      },
      {
        number: 7,
        segments: [
          {
            text: "Como la providencia de Dios alcanza en general a todas las criaturas, así también de una manera más especial cuida a su iglesia, y dispone de todas las cosas a su bien.",
            referenceId: "7a",
          },
        ],
        references: [
          {
            id: "7a",
            citations: [
              {
                citation: "1 Timoteo 4:10",
                text: "que por esto mismo trabajamos y sufrimos oprobios, porque esperamos en el Dios viviente, que es el Salvador de todos los hombres, mayormente de los que creen.",
              },
              {
                citation: "Amós 9:8-9",
                text: "He aquí los ojos de Jehová el Señor están contra el reino pecador, y yo lo asolaré de la faz de la tierra; mas no destruiré del todo la casa de Jacob, dice Jehová. Porque he aquí yo mandaré y haré que la casa de Israel sea zarandeada entre todas las naciones, como se zarandea el grano en una criba, y no cae un granito en la tierra.",
              },
              {
                citation: "Isaías 43:3-5",
                text: "Porque yo Jehová, Dios tuyo, el Santo de Israel, soy tu Salvador; a Egipto he dado por tu rescate, a Etiopía y a Seba por ti. Porque a mis ojos fuiste de gran estima, fuiste honorable, y yo te amé; daré, pues, hombres por ti, y naciones por tu vida. No temas, porque yo estoy contigo; del oriente traeré tu generación, y del occidente te recogeré.",
              },
            ],
          },
        ],
      },
    ],
  },
  // Chapter 6: De la Caída del Hombre, del Pecado, y del Castigo de Ellos
  {
    id: 6,
    title: "De la Caída del Hombre, del Pecado, y del Castigo de Ellos",
    paragraphs: [
      {
        number: 1,
        segments: [
          {
            text: "Aunque Dios creó al hombre recto y perfecto, y le dio una ley justa, que había sido a la vida habiéndola guardado, y amenazó de muerte a la violación de la misma,",
            referenceId: "1a",
          },
          {
            text: "sin embargo, no permaneció siempre en este honor; Satanás usó la sutileza de la serpiente para someter a Eva, y entonces ella sedujo a Adán, quien, sin coacción alguna, intencionalmente transgredió la ley de su creación, y la orden dada a ellos, al comer el fruto prohibido,",
            referenceId: "1b",
          },
          {
            text: "que plugo a Dios, de acuerdo con su sabio y santo consejo permitir, habiéndose propuesto ordenarlo para su propia gloria.",
            referenceId: "1c",
          },
        ],
        references: [
          {
            id: "1a",
            citations: [
              {
                citation: "Génesis 2:16-17",
                text: "Y mandó Jehová Dios al hombre, diciendo: De todo árbol del huerto podrás comer; mas del árbol de la ciencia del bien y del mal no comerás; porque el día que de él comieres, ciertamente morirás.",
              },
            ],
          },
          {
            id: "1b",
            citations: [
              {
                citation: "Génesis 3:12-13",
                text: "Y el hombre respondió: La mujer que me diste por compañera me dio del árbol, y yo comí. Entonces Jehová Dios dijo a la mujer: ¿Qué es lo que has hecho? Y dijo la mujer: La serpiente me engañó, y comí.",
              },
            ],
          },
          {
            id: "1c",
            citations: [
              {
                citation: "2 Corintios 11:3",
                text: "Pero temo que como la serpiente con su astucia engañó a Eva, vuestros sentidos sean de alguna manera extraviados de la sincera fidelidad a Cristo.",
              },
            ],
          },
        ],
      },
      {
        number: 2,
        segments: [
          {
            text: "Nuestros primeros padres, por este pecado, cayeron de su justicia original y de la comunión con Dios, y por el pecado de ellos la muerte se apoderó de todos:",
            referenceId: "2a",
          },
          {
            text: "todos estamos muertos en el pecado,",
            referenceId: "2b",
          },
          {
            text: "y totalmente corrompidos en todas las facultades y partes del alma y del cuerpo.",
            referenceId: "2c",
          },
        ],
        references: [
          {
            id: "2a",
            citations: [
              {
                citation: "Romanos 3:23",
                text: "por cuanto todos pecaron, y están destituidos de la gloria de Dios,",
              },
            ],
          },
          {
            id: "2b",
            citations: [
              {
                citation: "Romanos 5:12",
                text: "Por tanto, como el pecado entró en el mundo por un hombre, y por el pecado la muerte, así la muerte pasó a todos los hombres, por cuanto todos pecaron.",
              },
            ],
          },
          {
            id: "2c",
            citations: [
              {
                citation: "Tito 1:15",
                text: "Todas las cosas son puras para los puros, mas para los corrompidos e incrédulos nada les es puro; pues hasta su mente y su conciencia están corrompidas.",
              },
              {
                citation: "Génesis 6:5",
                text: "Y vio Jehová que la maldad de los hombres era mucha en la tierra, y que todo designio de los pensamientos del corazón de ellos era de continuo solamente el mal.",
              },
              {
                citation: "Jeremías 17:9",
                text: "Engañoso es el corazón más que todas las cosas, y perverso; ¿quién lo conocerá?",
              },
              {
                citation: "Romanos 3:10-19",
                text: "Como está escrito: No hay justo, ni aun uno; No hay quien entienda, No hay quien busque a Dios. Todos se desviaron, a una se hicieron inútiles; No hay quien haga lo bueno, no hay ni siquiera uno. Sepulcro abierto es su garganta; Con su lengua engañan. Veneno de áspides hay debajo de sus labios; Su boca está llena de maldición y de amargura. Sus pies se apresuran para derramar sangre; Quebranto y desventura hay en sus caminos; Y no conocieron camino de paz. No hay temor de Dios delante de sus ojos. Pero sabemos que todo lo que la ley dice, lo dice a los que están bajo la ley, para que toda boca se cierre y todo el mundo quede bajo el juicio de Dios;",
              },
            ],
          },
        ],
      },
      {
        number: 3,
        segments: [
          {
            text: "Siendo ellos la raíz, y por designio de Dios, estando Adán en el lugar de toda la humanidad, la culpa del pecado fue imputado, y la naturaleza corrupta transmitida, a toda su posteridad que desciende de ellos según la generación ordinaria,",
            referenceId: "3a",
          },
          {
            text: "siendo ahora concebidos en pecado,",
            referenceId: "3b",
          },
          {
            text: "y por naturaleza hijos de ira,",
            referenceId: "3c",
          },
          {
            text: "en la servidumbre del pecado, sujetos a la muerte,",
            referenceId: "3d",
          },
          {
            text: "y a todas las demás miserias, espirituales, temporales y eternos, a menos que el Señor Jesús nos libere.",
            referenceId: "3e",
          },
        ],
        references: [
          {
            id: "3a",
            citations: [
              {
                citation: "Romanos 5:12-19",
                text: "Por tanto, como el pecado entró en el mundo por un hombre, y por el pecado la muerte, así la muerte pasó a todos los hombres, por cuanto todos pecaron. [...] Así que, como por la transgresión de uno vino la condenación a todos los hombres, de la misma manera por la justicia de uno vino a todos los hombres la justificación de vida.",
              },
              {
                citation: "1 Corintios 15:21-22, 45, 49",
                text: "Porque por cuanto la muerte entró por un hombre, también por un hombre la resurrección de los muertos. Porque así como en Adán todos mueren, también en Cristo todos serán vivificados. [...] Así también está escrito: Fue hecho el primer hombre Adán alma viviente; el postrer Adán, espíritu vivificante. [...] Y así como hemos traído la imagen del terrenal, traeremos también la imagen del celestial.",
              },
            ],
          },
          {
            id: "3b",
            citations: [
              {
                citation: "Salmos 51:5",
                text: "He aquí, en maldad he sido formado, Y en pecado me concibió mi madre.",
              },
              {
                citation: "Job 14:4",
                text: "¿Quién hará limpio a lo inmundo? Nadie.",
              },
            ],
          },
          {
            id: "3c",
            citations: [
              {
                citation: "Efesios 2:3",
                text: "entre los cuales también todos nosotros vivimos en otro tiempo en los deseos de nuestra carne, haciendo la voluntad de la carne y de los pensamientos, y éramos por naturaleza hijos de ira, lo mismo que los demás.",
              },
            ],
          },
          {
            id: "3d",
            citations: [
              {
                citation: "Romanos 6:20",
                text: "Porque cuando erais esclavos del pecado, erais libres acerca de la justicia.",
              },
              {
                citation: "Romanos 5:12",
                text: "Por tanto, como el pecado entró en el mundo por un hombre, y por el pecado la muerte, así la muerte pasó a todos los hombres, por cuanto todos pecaron.",
              },
            ],
          },
          {
            id: "3e",
            citations: [
              {
                citation: "Hebreos 2:14-15",
                text: "Así que, por cuanto los hijos participaron de carne y sangre, él también participó de lo mismo, para destruir por medio de la muerte al que tenía el imperio de la muerte, esto es, al diablo, y librar a todos los que por el temor de la muerte estaban durante toda la vida sujetos a servidumbre.",
              },
              {
                citation: "1 Tesalonicenses 1:10",
                text: "y esperar de los cielos a su Hijo, al cual resucitó de los muertos, a Jesús, quien nos libra de la ira venidera.",
              },
            ],
          },
        ],
      },

      {
        number: 4,
        segments: [
          {
            text: "De esta corrupción original, por la cual estamos completamente indispuesto, discapacitados, y opuestos a todo lo bueno, y totalmente inclinados a todo mal,",
            referenceId: "4a",
          },
          {
            text: "proceden todas las transgresiones actuales.",
            referenceId: "4b",
          },
        ],
        references: [
          {
            id: "4a",
            citations: [
              {
                citation: "Romanos 8:7",
                text: "Por cuanto los designios de la carne son enemistad contra Dios; porque no se sujetan a la ley de Dios, ni tampoco pueden;",
              },
              {
                citation: "Colosenses 1:21",
                text: "Y a vosotros también, que erais en otro tiempo extraños y enemigos en vuestra mente, haciendo malas obras, ahora os ha reconciliado",
              },
            ],
          },
          {
            id: "4b",
            citations: [
              {
                citation: "Santiago 1:14-15",
                text: "sino que cada uno es tentado, cuando de su propia concupiscencia es atraído y seducido. Entonces la concupiscencia, después que ha concebido, da a luz el pecado; y el pecado, siendo consumado, da a luz la muerte.",
              },
              {
                citation: "Mateo 15:19",
                text: "Porque del corazón salen los malos pensamientos, los homicidios, los adulterios, las fornicaciones, los hurtos, los falsos testimonios, las blasfemias.",
              },
            ],
          },
        ],
      },
      {
        number: 5,
        segments: [
          {
            text: "La corrupción de la naturaleza, durante esta vida, continua en los que se regeneran;",
            referenceId: "5a",
          },
          {
            text: "y aunque sea perdonada y mortificada a través de Cristo, sin embargo, tanto por sí misma, y los efectos de ella, son verdadera y propiamente pecado.",
            referenceId: "5b",
          },
        ],
        references: [
          {
            id: "5a",
            citations: [
              {
                citation: "Romanos 7:18, 23",
                text: "Y yo sé que en mí, esto es, en mi carne, no mora el bien; porque el querer el bien está en mí, pero no el hacerlo. [...] pero veo otra ley en mis miembros, que se rebela contra la ley de mi mente, y que me lleva cautivo a la ley del pecado que está en mis miembros.",
              },
              {
                citation: "Eclesiastés 7:20",
                text: "Ciertamente no hay hombre justo en la tierra, que haga el bien y nunca peque.",
              },
              {
                citation: "1 Juan 1:8",
                text: "Si decimos que no tenemos pecado, nos engañamos a nosotros mismos, y la verdad no está en nosotros.",
              },
            ],
          },
          {
            id: "5b",
            citations: [
              {
                citation: "Romanos 7:23-25",
                text: "pero veo otra ley en mis miembros, que se rebela contra la ley de mi mente, y que me lleva cautivo a la ley del pecado que está en mis miembros. ¡Miserable de mí! ¿quién me librará de este cuerpo de muerte? Gracias doy a Dios, por Jesucristo Señor nuestro. Así que, yo mismo con la mente sirvo a la ley de Dios, mas con la carne a la ley del pecado.",
              },
              {
                citation: "Gálatas 5:17",
                text: "Porque el deseo de la carne es contra el Espíritu, y el del Espíritu es contra la carne; y éstos se oponen entre sí, para que no hagáis lo que quisiereis.",
              },
            ],
          },
        ],
      },
    ],
  },
  // Chapter 7: Del Pacto de Dios
  {
    id: 7,
    title: "Del Pacto de Dios",
    paragraphs: [
      {
        number: 1,
        segments: [
          {
            text: "La distancia entre Dios y la criatura es tan grande, que a pesar de que las criaturas racionales le deben obediencia a Él como a su creador, sin embargo, nunca podrían haber alcanzado la recompensa de la vida, a no ser por alguna condescendencia voluntaria de parte de Dios, que él ha tenido el placer de expresar por medio del pacto.",
            referenceId: "1a",
          },
        ],
        references: [
          {
            id: "1a",
            citations: [
              {
                citation: "Lucas 17:10",
                text: "Así también vosotros, cuando hayáis hecho todo lo que os ha sido ordenado, decid: Siervos inútiles somos, pues lo que debíamos hacer, hicimos.",
              },
              {
                citation: "Job 35:7-8",
                text: "Si fueres justo, ¿qué le darás a él? ¿O qué recibirá de tu mano? Al hombre como tú dañará tu impiedad, Y al hijo de hombre aprovechará tu justicia.",
              },
            ],
          },
        ],
      },
      {
        number: 2,
        segments: [
          {
            text: "Por otra parte, el hombre había traído sobre sí la maldición de la ley por su caída,",
            referenceId: "2a",
          },
          {
            text: "lo que agradó al Señor hacer un pacto de gracia, en el que se ofrece libremente a los pecadores vida y salvación por Jesucristo,",
            referenceId: "2b",
          },
          {
            text: "requiriendo de ellos fe en Él, para que sean se salvos; y la promesa de dar a todos los que son ordenados para vida eterna, su Espíritu Santo, para que sean dispuestos y capaces de creer.",
            referenceId: "2c",
          },
        ],
        references: [
          {
            id: "2a",
            citations: [
              {
                citation: "Génesis 2:17",
                text: "mas del árbol de la ciencia del bien y del mal no comerás; porque el día que de él comieres, ciertamente morirás.",
              },
              {
                citation: "Gálatas 3:10",
                text: "Porque todos los que dependen de las obras de la ley están bajo maldición, pues escrito está: Maldito todo aquel que no permaneciere en todas las cosas escritas en el libro de la ley, para hacerlas.",
              },
            ],
          },
          {
            id: "2b",
            citations: [
              {
                citation: "Romanos 3:20-21",
                text: "ya que por las obras de la ley ningún ser humano será justificado delante de él; porque por medio de la ley es el conocimiento del pecado. Pero ahora, aparte de la ley, se ha manifestado la justicia de Dios, testificada por la ley y por los profetas;",
              },
              {
                citation: "Romanos 8:3",
                text: "Porque lo que era imposible para la ley, por cuanto era débil por la carne, Dios, enviando a su Hijo en semejanza de carne de pecado y a causa del pecado, condenó al pecado en la carne;",
              },
              {
                citation: "Marcos 16:15-16",
                text: "Y les dijo: Id por todo el mundo y predicad el evangelio a toda criatura. El que creyere y fuere bautizado, será salvo; mas el que no creyere, será condenado.",
              },
              {
                citation: "Juan 3:16",
                text: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.",
              },
            ],
          },
          {
            id: "2c",
            citations: [
              {
                citation: "Ezequiel 36:26-27",
                text: "Os daré corazón nuevo, y pondré espíritu nuevo dentro de vosotros; y quitaré de vuestra carne el corazón de piedra, y os daré un corazón de carne. Y pondré dentro de vosotros mi Espíritu, y haré que andéis en mis estatutos, y guardéis mis preceptos, y los pongáis por obra.",
              },
              {
                citation: "Juan 6:44-45",
                text: "Ninguno puede venir a mí, si el Padre que me envió no le trajere; y yo le resucitaré en el día postrero. Escrito está en los profetas: Y serán todos enseñados por Dios. Así que, todo aquel que oyó al Padre, y aprendió de él, viene a mí.",
              },
              {
                citation: "Salmos 110:3",
                text: "Tu pueblo se te ofrecerá voluntariamente en el día de tu poder, En la hermosura de la santidad. Desde el seno de la aurora Tienes tú el rocío de tu juventud.",
              },
            ],
          },
        ],
      },
      {
        number: 3,
        segments: [
          {
            text: "Este pacto se revela en el evangelio; en primer lugar a Adán en la promesa de la salvación por la simiente de la mujer,",
            referenceId: "3a",
          },
          {
            text: "y después por los pasos más lejos, hasta que el descubrimiento del mismo fue terminadoen el Nuevo Testamento;",
            referenceId: "3b",
          },
          {
            text: "y se funda en esa eterna transacción del pacto que había entre el Padre y el Hijo acerca de la redención de los elegidos;",
            referenceId: "3c",
          },
          {
            text: "y es sólo por la gracia de este pacto que toda la posteridad de Adán caída que alguna vez fueron salvados han obtenido la vida y la inmortalidad bendita, pues el hombre es ahora absolutamente incapaz de la aceptación de Dios en los mismos términos en que Adán se encontraba en su estado de inocencia.",
            referenceId: "3d",
          },
        ],
        references: [
          {
            id: "3a",
            citations: [
              {
                citation: "Génesis 3:15",
                text: "Y pondré enemistad entre ti y la mujer, y entre tu simiente y la simiente suya; ésta te herirá en la cabeza, y tú le herirás en el calcañar.",
              },
            ],
          },
          {
            id: "3b",
            citations: [
              {
                citation: "Hebreos 1:1",
                text: "Dios, habiendo hablado muchas veces y de muchas maneras en otro tiempo a los padres por los profetas,",
              },
            ],
          },
          {
            id: "3c",
            citations: [
              {
                citation: "2 Timoteo 1:9",
                text: "quien nos salvó y llamó con llamamiento santo, no conforme a nuestras obras, sino según el propósito suyo y la gracia que nos fue dada en Cristo Jesús antes de los tiempos de los siglos,",
              },
              {
                citation: "Tito 1:2",
                text: "en la esperanza de la vida eterna, la cual Dios, que no miente, prometió desde antes del principio de los siglos,",
              },
            ],
          },
          {
            id: "3d",
            citations: [
              {
                citation: "Hebreos 11:6, 13",
                text: "Pero sin fe es imposible agradar a Dios; porque es necesario que el que se acerca a Dios crea que le hay, y que es galardonador de los que le buscan. [...] Conforme a la fe murieron todos éstos sin haber recibido lo prometido, sino mirándolo de lejos, y creyéndolo, y saludándolo, y confesando que eran extranjeros y peregrinos sobre la tierra.",
              },
              {
                citation: "Romanos 4:1-2",
                text: "¿Qué, pues, diremos que halló Abraham, nuestro padre según la carne? Porque si Abraham fue justificado por las obras, tiene de qué gloriarse, pero no para con Dios.",
              },
              {
                citation: "Hechos 4:12",
                text: "Y en ningún otro hay salvación; porque no hay otro nombre bajo el cielo, dado a los hombres, en que podamos ser salvos.",
              },
              {
                citation: "Juan 8:56",
                text: "Abraham vuestro padre se gozó de que había de ver mi día; y lo vio, y se gozó.",
              },
            ],
          },
        ],
      },
    ],
  },
  // Chapter 8: De Cristo el Mediador
  {
    id: 8,
    title: "De Cristo el Mediador",
    paragraphs: [
      {
        number: 1,
        segments: [
          {
            text: "Dispuso Dios en su propósito eterno, escoger y ordenar al Señor Jesús, su Hijo unigénito, de acuerdo con el pacto hecho entre los dos, para ser el mediador entre Dios y el hombre;",
            referenceId: "1a",
          },
          {
            text: "el profeta,",
            referenceId: "1b",
          },
          {
            text: "sacerdote",
            referenceId: "1c",
          },
          {
            text: "y rey;",
            referenceId: "1d",
          },
          {
            text: "cabeza y salvador de la iglesia,",
            referenceId: "1e",
          },
          {
            text: "el heredero de todas las cosas,",
            referenceId: "1f",
          },
          {
            text: "y el juez del mundo;",
            referenceId: "1g",
          },
          {
            text: "a quien él desde toda la eternidad le dio un pueblo para ser su semilla y para ser por él en el tiempo redimido, llamándolos, justificándolos, santificándolos, y glorificándolos.",
            referenceId: "1h",
          },
        ],
        references: [
          {
            id: "1a",
            citations: [
              {
                citation: "Isaías 42:1",
                text: "He aquí mi siervo, yo le sostendré; mi escogido, en quien mi alma tiene contentamiento; he puesto sobre él mi Espíritu; él traerá justicia a las naciones.",
              },
              {
                citation: "1 Pedro 1:19-20",
                text: "sino con la sangre preciosa de Cristo, como de un cordero sin mancha y sin contaminación, ya destinado desde antes de la fundación del mundo, pero manifestado en los postreros tiempos por amor de vosotros,",
              },
            ],
          },
          {
            id: "1b",
            citations: [
              {
                citation: "Hechos 3:22",
                text: "Porque Moisés dijo a los padres: El Señor vuestro Dios os levantará profeta de entre vuestros hermanos, como a mí; a él oiréis en todas las cosas que os hable;",
              },
            ],
          },
          {
            id: "1c",
            citations: [
              {
                citation: "Hebreos 5:5-6",
                text: "Así tampoco Cristo se glorificó a sí mismo haciéndose sumo sacerdote, sino el que le dijo: Tú eres mi Hijo, Yo te he engendrado hoy. Como también dice en otro lugar: Tú eres sacerdote para siempre, Según el orden de Melquisedec.",
              },
            ],
          },
          {
            id: "1d",
            citations: [
              {
                citation: "Salmos 2:6",
                text: "Pero yo he puesto mi rey Sobre Sion, mi santo monte.",
              },
              {
                citation: "Lucas 1:33",
                text: "y reinará sobre la casa de Jacob para siempre, y su reino no tendrá fin.",
              },
            ],
          },
          {
            id: "1e",
            citations: [
              {
                citation: "Efesios 1:22-23",
                text: "y sometió todas las cosas bajo sus pies, y lo dio por cabeza sobre todas las cosas a la iglesia, la cual es su cuerpo, la plenitud de Aquel que todo lo llena en todo.",
              },
            ],
          },
          {
            id: "1f",
            citations: [
              {
                citation: "Hebreos 1:2",
                text: "en estos postreros días nos ha hablado por el Hijo, a quien constituyó heredero de todo, y por quien asimismo hizo el universo;",
              },
            ],
          },
          {
            id: "1g",
            citations: [
              {
                citation: "Hechos 17:31",
                text: "por cuanto ha establecido un día en el cual juzgará al mundo con justicia, por aquel varón a quien designó, dando fe a todos con haberle levantado de los muertos.",
              },
            ],
          },
          {
            id: "1h",
            citations: [
              {
                citation: "Isaías 53:10",
                text: "Con todo eso, Jehová quiso quebrantarlo, sujetándole a padecimiento. Cuando haya puesto su vida en expiación por el pecado, verá linaje, vivirá por largos días, y la voluntad de Jehová será en su mano prosperada.",
              },
              {
                citation: "Juan 17:6",
                text: "He manifestado tu nombre a los hombres que del mundo me diste; tuyos eran, y me los diste, y han guardado tu palabra.",
              },
              {
                citation: "Romanos 8:30",
                text: "Y a los que predestinó, a éstos también llamó; y a los que llamó, a éstos también justificó; y a los que justificó, a éstos también glorificó.",
              },
            ],
          },
        ],
      },
      {
        number: 2,
        segments: [
          {
            text: "El Hijo de Dios, la segunda persona de la Santísima Trinidad, siendo verdadero y eterno Dios, el brillo de la gloria del Padre, de una sustancia e igual con él que hizo el mundo, que sostiene y gobierna todas las cosas que él ha hecho, lo hizo, cuando la plenitud de los tiempos había llegado, tomó sobre sí la naturaleza del hombre, con todas las propiedades esenciales y con sus debilidades comunes,",
            referenceId: "2a",
          },
          {
            text: "pero sin pecado;",
            referenceId: "2b",
          },
          {
            text: "siendo concebido por el Espíritu Santo en el vientre de la Virgen María, el Espíritu Santo desciende sobre ella: y el poder del Altísimo la cubrió con su sombra, y así se hizo de una mujer de la tribu de Judá, de la simiente de Abraham y David según las Escrituras;",
            referenceId: "2c",
          },
          {
            text: "de manera que dos naturalezas enteras, perfectas, y distintas se unieron inseparablemente juntos en una persona, sin necesidad de conversión, composición o confusión; que la persona es muy Dios y verdadero hombre, sin embargo, un sólo Cristo, el único mediador entre Dios y el hombre.",
            referenceId: "2d",
          },
        ],
        references: [
          {
            id: "2a",
            citations: [
              {
                citation: "Juan 1:14",
                text: "Y el Verbo se hizo carne, y habitó entre nosotros (y vimos su gloria, gloria como del unigénito del Padre), lleno de gracia y de verdad.",
              },
              {
                citation: "Gálatas 4:4",
                text: "Pero cuando vino el cumplimiento del tiempo, Dios envió a su Hijo, nacido de mujer y nacido bajo la ley,",
              },
            ],
          },
          {
            id: "2b",
            citations: [
              {
                citation: "Romanos 8:3",
                text: "Porque lo que era imposible para la ley, por cuanto era débil por la carne, Dios, enviando a su Hijo en semejanza de carne de pecado y a causa del pecado, condenó al pecado en la carne;",
              },
              {
                citation: "Hebreos 2:14, 16-17",
                text: "Así que, por cuanto los hijos participaron de carne y sangre, él también participó de lo mismo, para destruir por medio de la muerte al que tenía el imperio de la muerte, esto es, al diablo, [...] Porque ciertamente no socorrió a los ángeles, sino que socorrió a la descendencia de Abraham. Por lo cual debía ser en todo semejante a sus hermanos, para venir a ser misericordioso y fiel sumo sacerdote en lo que a Dios se refiere, para expiar los pecados del pueblo.",
              },
              {
                citation: "Hebreos 4:15",
                text: "Porque no tenemos un sumo sacerdote que no pueda compadecerse de nuestras debilidades, sino uno que fue tentado en todo según nuestra semejanza, pero sin pecado.",
              },
            ],
          },
          {
            id: "2c",
            citations: [
              {
                citation: "Mateo 1:22-23",
                text: "Todo esto aconteció para que se cumpliese lo dicho por el Señor por medio del profeta, cuando dijo: He aquí, una virgen concebirá y dará a luz un hijo, Y llamarás su nombre Emanuel, que traducido es: Dios con nosotros.",
              },
              {
                citation: "Lucas 1:27, 31, 35",
                text: "a una virgen desposada con un varón que se llamaba José, de la casa de David; y el nombre de la virgen era María. [...] Y he aquí, concebirás en tu vientre, y darás a luz un hijo, y llamarás su nombre JESÚS. [...] Respondiendo el ángel, le dijo: El Espíritu Santo vendrá sobre ti, y el poder del Altísimo te cubrirá con su sombra; por lo cual también el Santo Ser que nacerá, será llamado Hijo de Dios.",
              },
            ],
          },
          {
            id: "2d",
            citations: [
              {
                citation: "Romanos 9:5",
                text: "de quienes son los patriarcas, y de los cuales, según la carne, vino Cristo, el cual es Dios sobre todas las cosas, bendito por los siglos. Amén.",
              },
              {
                citation: "1 Timoteo 2:5",
                text: "Porque hay un solo Dios, y un solo mediador entre Dios y los hombres, Jesucristo hombre,",
              },
            ],
          },
        ],
      },
      {
        number: 3,
        segments: [
          {
            text: "El Señor Jesús, en su naturaleza humana unida así a la divina, en la persona del Hijo, fue ungido y santificado con el Espíritu Santo sin medida,",
            referenceId: "3a",
          },
          {
            text: "teniendo en él todos los tesoros de la sabiduría y el conocimiento;",
            referenceId: "3b",
          },
          {
            text: "en quien agradó al Padre que habitase toda plenitud,",
            referenceId: "3c",
          },
          {
            text: "a fin de que siendo santo, inofensivo, libre de mancha,",
            referenceId: "3d",
          },
          {
            text: "y lleno de gracia y de verdad,",
            referenceId: "3e",
          },
          {
            text: "podría ser completamente apto para desempeñar el cargo de mediador y fiador;",
            referenceId: "3f",
          },
          {
            text: "cargo que no se tomó sobre sí mismo, sino que fue llamado para el mismo por su Padre;",
            referenceId: "3g",
          },
          {
            text: "quien también puso todo el poder y el juicio en su mano, y le dio orden para ejecutar el mismo.",
            referenceId: "3h",
          },
        ],
        references: [
          {
            id: "3a",
            citations: [
              {
                citation: "Salmo 45:7",
                text: "Has amado la justicia y aborrecido la maldad; Por tanto, te ungió Dios, el Dios tuyo, Con óleo de alegría más que a tus compañeros.",
              },
              {
                citation: "Hechos 10:38",
                text: "cómo Dios ungió con el Espíritu Santo y con poder a Jesús de Nazaret, y cómo éste anduvo haciendo bienes y sanando a todos los oprimidos por el diablo, porque Dios estaba con él.",
              },
              {
                citation: "Juan 3:34",
                text: "Porque el que Dios envió, las palabras de Dios habla; pues Dios no da el Espíritu por medida.",
              },
            ],
          },
          {
            id: "3b",
            citations: [
              {
                citation: "Colosenses 2:3",
                text: "en quien están escondidos todos los tesoros de la sabiduría y del conocimiento.",
              },
            ],
          },
          {
            id: "3c",
            citations: [
              {
                citation: "Colosenses 1:19",
                text: "por cuanto agradó al Padre que en él habitase toda plenitud,",
              },
            ],
          },
          {
            id: "3d",
            citations: [
              {
                citation: "Hebreos 7:26",
                text: "Porque tal sumo sacerdote nos convenía: santo, inocente, sin mancha, apartado de los pecadores, y hecho más sublime que los cielos;",
              },
            ],
          },
          {
            id: "3e",
            citations: [
              {
                citation: "Juan 1:14",
                text: "Y el Verbo se hizo carne, y habitó entre nosotros (y vimos su gloria, gloria como del unigénito del Padre), lleno de gracia y de verdad.",
              },
            ],
          },
          {
            id: "3f",
            citations: [
              {
                citation: "Hebreos 7:22",
                text: "Por tanto, Jesús es hecho fiador de un mejor pacto.",
              },
            ],
          },
          {
            id: "3g",
            citations: [
              {
                citation: "Hebreos 5:5",
                text: "Así tampoco Cristo se glorificó a sí mismo haciéndose sumo sacerdote, sino el que le dijo: Tú eres mi Hijo, Yo te he engendrado hoy.",
              },
            ],
          },
          {
            id: "3h",
            citations: [
              {
                citation: "Juan 5:22, 27",
                text: "Porque el Padre a nadie juzga, sino que todo el juicio dio al Hijo, [...] y también le dio autoridad de hacer juicio, por cuanto es el Hijo del Hombre.",
              },
              {
                citation: "Mateo 28:18",
                text: "Y Jesús se acercó y les habló diciendo: Toda potestad me es dada en el cielo y en la tierra.",
              },
              {
                citation: "Hechos 2:36",
                text: "Sepa, pues, ciertísimamente toda la casa de Israel, que a este Jesús a quien vosotros crucificasteis, Dios le ha hecho Señor y Cristo.",
              },
            ],
          },
        ],
      },
      {
        number: 4,
        segments: [
          {
            text: "Este oficio encargado el Señor Jesús lo hizo de muy buena gana,",
            referenceId: "4a",
          },
          {
            text: "que para que pudiera cumplir con lo hecho se sometió a la ley,",
            referenceId: "4b",
          },
          {
            text: "y la cumplió perfectamente, y se le realizó el castigo debido a nosotros, que deberíamos haber tenido y sufrido,",
            referenceId: "4c",
          },
          {
            text: "hecho pecado y maldición por nosotros;",
            referenceId: "4d",
          },
          {
            text: "perdurables penas muy sufridas en su alma, y muy dolorosos sufrimientos en su cuerpo;",
            referenceId: "4e",
          },
          {
            text: "fue crucificado y murió, y permaneció en el estado de los muertos, sin embargo, no vio corrupción:",
            referenceId: "4f",
          },
          {
            text: "en el tercer día se levantó de entre los muertos",
            referenceId: "4g",
          },
          {
            text: "con el mismo cuerpo con el que sufrió,",
            referenceId: "4h",
          },
          {
            text: "con el que también ascendió al cielo,",
            referenceId: "4i",
          },
          {
            text: "y allí está sentado a la mano derecha de su Padre haciendo intercesión,",
            referenceId: "4j",
          },
          {
            text: "y deberá volver a juzgar a los hombres y los ángeles en el fin del mundo.",
            referenceId: "4k",
          },
        ],
        references: [
          {
            id: "4a",
            citations: [
              {
                citation: "Salmo 40:7-8",
                text: "Entonces dije: He aquí, vengo; En el rollo del libro está escrito de mí; El hacer tu voluntad, Dios mío, me ha agradado, Y tu ley está en medio de mi corazón.",
              },
              {
                citation: "Hebreos 10:5-10",
                text: "Por lo cual, entrando en el mundo dice: Sacrificio y ofrenda no quisiste; Mas me preparaste cuerpo. Holocaustos y expiaciones por el pecado no te agradaron. Entonces dije: He aquí que vengo, oh Dios, para hacer tu voluntad, Como en el rollo del libro está escrito de mí. Diciendo primero: Sacrificio y ofrenda y holocaustos y expiaciones por el pecado no quisiste, ni te agradaron (las cuales cosas se ofrecen según la ley), y diciendo luego: He aquí que vengo, oh Dios, para hacer tu voluntad; quita lo primero, para establecer esto último. En esa voluntad somos santificados mediante la ofrenda del cuerpo de Jesucristo hecha una vez para siempre.",
              },
              {
                citation: "Juan 5:18",
                text: "Por esto los judíos aun más procuraban matarle, porque no sólo quebrantaba el día de reposo, sino que también decía que Dios era su propio Padre, haciéndose igual a Dios.",
              },
            ],
          },
          {
            id: "4b",
            citations: [
              {
                citation: "Gálatas 4:4",
                text: "Pero cuando vino el cumplimiento del tiempo, Dios envió a su Hijo, nacido de mujer y nacido bajo la ley,",
              },
              {
                citation: "Mateo 3:15",
                text: "Pero Jesús le respondió: Deja ahora, porque así conviene que cumplamos toda justicia. Entonces le dejó.",
              },
            ],
          },
          {
            id: "4c",
            citations: [
              {
                citation: "Gálatas 3:13",
                text: "Cristo nos redimió de la maldición de la ley, hecho por nosotros maldición (porque está escrito: Maldito todo el que es colgado en un madero),",
              },
              {
                citation: "Isaías 53:6",
                text: "Todos nosotros nos descarriamos como ovejas, cada cual se apartó por su camino; mas Jehová cargó en él el pecado de todos nosotros.",
              },
              {
                citation: "1 Pedro 3:18",
                text: "Porque también Cristo padeció una sola vez por los pecados, el justo por los injustos, para llevarnos a Dios, siendo a la verdad muerto en la carne, pero vivificado en espíritu;",
              },
            ],
          },
          {
            id: "4d",
            citations: [
              {
                citation: "2 Corintios 5:21",
                text: "Al que no conoció pecado, por nosotros lo hizo pecado, para que nosotros fuésemos hechos justicia de Dios en él.",
              },
            ],
          },
          {
            id: "4e",
            citations: [
              {
                citation: "Mateo 26:37-38",
                text: "Y tomando a Pedro, y a los dos hijos de Zebedeo, comenzó a entristecerse y a angustiarse en gran manera. Entonces Jesús les dijo: Mi alma está muy triste, hasta la muerte; quedaos aquí, y velad conmigo.",
              },
              {
                citation: "Lucas 22:44",
                text: "Y estando en agonía, oraba más intensamente; y era su sudor como grandes gotas de sangre que caían hasta la tierra.",
              },
              {
                citation: "Mateo 27:46",
                text: "Cerca de la hora novena, Jesús clamó a gran voz, diciendo: Elí, Elí, ¿lama sabactani? Esto es: Dios mío, Dios mío, ¿por qué me has desamparado?",
              },
            ],
          },
          {
            id: "4f",
            citations: [
              {
                citation: "Hechos 13:37",
                text: "Mas aquel a quien Dios levantó, no vio corrupción.",
              },
            ],
          },
          {
            id: "4g",
            citations: [
              {
                citation: "1 Corintios 15:3-4",
                text: "Porque primeramente os he enseñado lo que asimismo recibí: Que Cristo murió por nuestros pecados, conforme a las Escrituras; y que fue sepultado, y que resucitó al tercer día, conforme a las Escrituras;",
              },
            ],
          },
          {
            id: "4h",
            citations: [
              {
                citation: "Juan 20:25, 27",
                text: "Le dijeron, pues, los otros discípulos: Al Señor hemos visto. El les dijo: Si no viere en sus manos la señal de los clavos, y metiere mi dedo en el lugar de los clavos, y metiere mi mano en su costado, no creeré. [...] Luego dijo a Tomás: Pon aquí tu dedo, y mira mis manos; y acerca tu mano, y métela en mi costado; y no seas incrédulo, sino creyente.",
              },
            ],
          },
          {
            id: "4i",
            citations: [
              {
                citation: "Marcos 16:19",
                text: "Y el Señor, después que les habló, fue recibido arriba en el cielo, y se sentó a la diestra de Dios.",
              },
              {
                citation: "Hechos 1:9-11",
                text: "Y habiendo dicho estas cosas, viéndolo ellos, fue alzado, y le recibió una nube que le ocultó de sus ojos. Y estando ellos con los ojos puestos en el cielo, entre tanto que él se iba, he aquí se pusieron junto a ellos dos varones con vestiduras blancas, los cuales también les dijeron: Varones galileos, ¿por qué estáis mirando al cielo? Este mismo Jesús, que ha sido tomado de vosotros al cielo, así vendrá como le habéis visto ir al cielo.",
              },
            ],
          },
          {
            id: "4j",
            citations: [
              {
                citation: "Romanos 8:34",
                text: "¿Quién es el que condenará? Cristo es el que murió; más aun, el que también resucitó, el que además está a la diestra de Dios, el que también intercede por nosotros.",
              },
              {
                citation: "Hebreos 9:24",
                text: "Porque no entró Cristo en el santuario hecho de mano, figura del verdadero, sino en el cielo mismo para presentarse ahora por nosotros ante Dios;",
              },
            ],
          },
          {
            id: "4k",
            citations: [
              {
                citation: "Hechos 10:42",
                text: "Y nos mandó que predicásemos al pueblo, y testificásemos que él es el que Dios ha puesto por Juez de vivos y muertos.",
              },
              {
                citation: "Romanos 14:9-10",
                text: "Porque Cristo para esto murió y resucitó, y volvió a vivir, para ser Señor así de los muertos como de los que viven. Pero tú, ¿por qué juzgas a tu hermano? O tú también, ¿por qué menosprecias a tu hermano? Porque todos compareceremos ante el tribunal de Cristo.",
              },
              {
                citation: "Hechos 1:11",
                text: "los cuales también les dijeron: Varones galileos, ¿por qué estáis mirando al cielo? Este mismo Jesús, que ha sido tomado de vosotros al cielo, así vendrá como le habéis visto ir al cielo.",
              },
              {
                citation: "2 Pedro 2:4",
                text: "Porque si Dios no perdonó a los ángeles que pecaron, sino que arrojándolos al infierno los entregó a prisiones de oscuridad, para ser reservados al juicio;",
              },
            ],
          },
        ],
      },
      {
        number: 5,
        segments: [
          {
            text: "El Señor Jesús, por su perfecta obediencia y el sacrificio de sí mismo, que mediante el Espíritu eterno una vez ofrecido a Dios, ha satisfecho plenamente la justicia de Dios,",
            referenceId: "5a",
          },
          {
            text: "alcanzó la reconciliación, y compró una herencia eterna en el reino de los cielos, para todos aquellos a quien el Padre ha dado a él.",
            referenceId: "5b",
          },
        ],
        references: [
          {
            id: "5a",
            citations: [
              {
                citation: "Hebreos 9:14",
                text: "¿cuánto más la sangre de Cristo, el cual mediante el Espíritu eterno se ofreció a sí mismo sin mancha a Dios, limpiará vuestras conciencias de obras muertas para que sirváis al Dios vivo?",
              },
              {
                citation: "Hebreos 10:14",
                text: "porque con una sola ofrenda hizo perfectos para siempre a los santificados.",
              },
              {
                citation: "Romanos 3:25-26",
                text: "a quien Dios puso como propiciación por medio de la fe en su sangre, para manifestar su justicia, a causa de haber pasado por alto, en su paciencia, los pecados pasados, con la mira de manifestar en este tiempo su justicia, a fin de que él sea el justo, y el que justifica al que es de la fe de Jesús.",
              },
            ],
          },
          {
            id: "5b",
            citations: [
              {
                citation: "Juan 17:2",
                text: "como le has dado potestad sobre toda carne, para que dé vida eterna a todos los que le diste.",
              },
              {
                citation: "Hebreos 9:15",
                text: "Así que, por eso es mediador de un nuevo pacto, para que interviniendo muerte para la remisión de las transgresiones que había bajo el primer pacto, los llamados reciban la promesa de la herencia eterna.",
              },
            ],
          },
        ],
      },
      {
        number: 6,
        segments: [
          {
            text: "Aunque el precio de la redención no se pagó realmente por Cristo hasta después de su encarnación, sin embargo la virtud, la eficacia, y los beneficios del mismo se comunicará a los elegidos en todas las edades, sucesivamente desde el principio del mundo, y por esas promesas, tipos, y sacrificios en los cuales fue revelado, y el significado de ser la semilla que heriría la cabeza de la serpiente;",
            referenceId: "6a",
          },
          {
            text: "y el Cordero que fue inmolado desde la fundación del mundo,",
            referenceId: "6b",
          },
          {
            text: "siendo el mismo ayer, y hoy y por siempre.",
            referenceId: "6c",
          },
        ],
        references: [
          {
            id: "6a",
            citations: [
              {
                citation: "1 Corintios 10:4",
                text: "y todos bebieron la misma bebida espiritual; porque bebían de la roca espiritual que los seguía, y la roca era Cristo.",
              },
              {
                citation: "Hebreos 4:2",
                text: "Porque también a nosotros se nos ha anunciado la buena nueva como a ellos; pero no les aprovechó el oír la palabra, por no ir acompañada de fe en los que la oyeron.",
              },
              {
                citation: "1 Pedro 1:10-11",
                text: "Los profetas que profetizaron de la gracia destinada a vosotros, inquirieron y diligentemente indagaron acerca de esta salvación, escudriñando qué persona y qué tiempo indicaba el Espíritu de Cristo que estaba en ellos, el cual anunciaba de antemano los sufrimientos de Cristo, y las glorias que vendrían tras ellos.",
              },
            ],
          },
          {
            id: "6b",
            citations: [
              {
                citation: "Apocalipsis 13:8",
                text: "Y la adoraron todos los moradores de la tierra cuyos nombres no estaban escritos en el libro de la vida del Cordero que fue inmolado desde el principio del mundo.",
              },
            ],
          },
          {
            id: "6c",
            citations: [
              {
                citation: "Hebreos 13:8",
                text: "Jesucristo es el mismo ayer, y hoy, y por los siglos.",
              },
            ],
          },
        ],
      },
      {
        number: 7,
        segments: [
          {
            text: "Cristo, en el trabajo de mediación, hecho conforme a ambas naturalezas, por cada uno de la naturaleza haciendo lo que es propio de ella, sin embargo, en razón de la unidad de la persona, lo que es propio de una naturaleza a veces en la Escritura, se atribuye a la persona denominada por la otra naturaleza.",
            referenceId: "7a",
          },
        ],
        references: [
          {
            id: "7a",
            citations: [
              {
                citation: "Juan 3:13",
                text: "Nadie subió al cielo, sino el que descendió del cielo; el Hijo del Hombre, que está en el cielo.",
              },
              {
                citation: "Hechos 20:28",
                text: "Por tanto, mirad por vosotros, y por todo el rebaño en que el Espíritu Santo os ha puesto por obispos, para apacentar la iglesia del Señor, la cual él ganó por su propia sangre.",
              },
            ],
          },
        ],
      },
      {
        number: 8,
        segments: [
          {
            text: "Para todos aquellos por quienes Cristo ha obtenido eterna redención, hace que ciertamente y eficazmente sea aplicada y comunicada la misma, haciendo intercesión por ellos,",
            referenceId: "8a",
          },
          {
            text: "uniéndolos a ellos a sí mismo por su Espíritu, revelándoles a ellos, en y por su Palabra, el misterio de la salvación, persuadiéndolos a creer y obedecer,",
            referenceId: "8b",
          },
          {
            text: "gobernando sus corazones por su Palabra y Espíritu,",
            referenceId: "8c",
          },
          {
            text: "y venciendo a todos sus enemigos por su omnipotente poder y sabiduría,",
            referenceId: "8d",
          },
          {
            text: "en la forma y manera que sean más acorde a su maravillosa e inescrutable dispensación; y todo por la libre y absoluta la gracia, sin ninguna condición prevista en ellos para adquirirlos.",
            referenceId: "8e",
          },
        ],
        references: [
          {
            id: "8a",
            citations: [
              {
                citation: "Juan 6:37",
                text: "Todo lo que el Padre me da, vendrá a mí; y al que a mí viene, no le echo fuera.",
              },
              {
                citation: "Juan 10:15-16",
                text: "así como el Padre me conoce, y yo conozco al Padre; y pongo mi vida por las ovejas. También tengo otras ovejas que no son de este redil; aquéllas también debo traer, y oirán mi voz; y habrá un rebaño, y un pastor.",
              },
              {
                citation: "Juan 17:9",
                text: "Yo ruego por ellos; no ruego por el mundo, sino por los que me diste; porque tuyos son,",
              },
              {
                citation: "Romanos 5:10",
                text: "Porque si siendo enemigos, fuimos reconciliados con Dios por la muerte de su Hijo, mucho más, estando reconciliados, seremos salvos por su vida.",
              },
            ],
          },
          {
            id: "8b",
            citations: [
              {
                citation: "Juan 17:6",
                text: "He manifestado tu nombre a los hombres que del mundo me diste; tuyos eran, y me los diste, y han guardado tu palabra.",
              },
              {
                citation: "Efesios 1:9",
                text: "dándonos a conocer el misterio de su voluntad, según su beneplácito, el cual se había propuesto en sí mismo,",
              },
              {
                citation: "1 Juan 5:20",
                text: "Pero sabemos que el Hijo de Dios ha venido, y nos ha dado entendimiento para conocer al que es verdadero; y estamos en el verdadero, en su Hijo Jesucristo. Este es el verdadero Dios, y la vida eterna.",
              },
            ],
          },
          {
            id: "8c",
            citations: [
              {
                citation: "Romanos 8:9, 14",
                text: "Mas vosotros no vivís según la carne, sino según el Espíritu, si es que el Espíritu de Dios mora en vosotros. Y si alguno no tiene el Espíritu de Cristo, no es de él. [...] Porque todos los que son guiados por el Espíritu de Dios, éstos son hijos de Dios.",
              },
            ],
          },
          {
            id: "8d",
            citations: [
              {
                citation: "Salmos 110:1",
                text: "Jehová dijo a mi Señor: Siéntate a mi diestra, Hasta que ponga a tus enemigos por estrado de tus pies.",
              },
              {
                citation: "1 Corintios 15:25-26",
                text: "Porque preciso es que él reine hasta que haya puesto a todos sus enemigos debajo de sus pies. Y el postrer enemigo que será destruido es la muerte.",
              },
            ],
          },
          {
            id: "8e",
            citations: [
              {
                citation: "Juan 3:8",
                text: "El viento sopla de donde quiere, y oyes su sonido; mas ni sabes de dónde viene, ni a dónde va; así es todo aquel que es nacido del Espíritu.",
              },
              {
                citation: "Efesios 1:8",
                text: "que hizo sobreabundar para con nosotros en toda sabiduría e inteligencia,",
              },
            ],
          },
        ],
      },
      {
        number: 9,
        segments: [
          {
            text: "Este oficio de mediador entre Dios y el hombre es adecuado sólo para Cristo, que es el profeta, sacerdote y rey de la iglesia de Dios, y no podrá ser ni en su totalidad, o parte de ella, transferido de él a cualquier otro.",
            referenceId: "9a",
          },
        ],
        references: [
          {
            id: "9a",
            citations: [
              {
                citation: "1 Timoteo 2:5",
                text: "Porque hay un solo Dios, y un solo mediador entre Dios y los hombres, Jesucristo hombre,",
              },
            ],
          },
        ],
      },
      {
        number: 10,
        segments: [
          {
            text: "Este número y el orden de los oficios es necesario; porque en el respeto de nuestra ignorancia, nosotros tenemos necesidad de su oficio profético,",
            referenceId: "10a",
          },
          {
            text: "y en el respeto de nuestra separación de Dios, y la imperfección de lo mejor de nuestros servicios, necesitamos su oficio sacerdotal para conciliarnos y presentarnos agradables a Dios;",
            referenceId: "10b",
          },
          {
            text: "y en lo que respecta a nuestra aversión e incapacidad absoluta para volver a Dios, y para nuestro rescate y la seguridad de nuestros adversarios espirituales, nosotros necesitamos su oficio real para convencernos, someternos, atraernos, defendernos y preservarnos para su reino celestial.",
            referenceId: "10c",
          },
        ],
        references: [
          {
            id: "10a",
            citations: [
              {
                citation: "Juan 1:18",
                text: "A Dios nadie le vio jamás; el unigénito Hijo, que está en el seno del Padre, él le ha dado a conocer.",
              },
            ],
          },
          {
            id: "10b",
            citations: [
              {
                citation: "Colosenses 1:21",
                text: "Y a vosotros también, que erais en otro tiempo extraños y enemigos en vuestra mente, haciendo malas obras, ahora os ha reconciliado",
              },
              {
                citation: "Gálatas 5:17",
                text: "Porque el deseo de la carne es contra el Espíritu, y el del Espíritu es contra la carne; y éstos se oponen entre sí, para que no hagáis lo que quisiereis.",
              },
            ],
          },
          {
            id: "10c",
            citations: [
              {
                citation: "Juan 16:8",
                text: "Y cuando él venga, convencerá al mundo de pecado, de justicia y de juicio.",
              },
              {
                citation: "Salmo 110:3",
                text: "Tu pueblo se te ofrecerá voluntariamente en el día de tu poder, En la hermosura de la santidad. Desde el seno de la aurora Tienes tú el rocío de tu juventud.",
              },
              {
                citation: "Lucas 1:74-75",
                text: "Que, librados de nuestros enemigos, Sin temor le serviríamos En santidad y en justicia delante de él, todos nuestros días.",
              },
            ],
          },
        ],
      },
    ],
  },
  // Chapter 9: Del Libre Albedrío
  {
    id: 9,
    title: "Del Libre Albedrío",
    paragraphs: [
      {
        number: 1,
        segments: [
          {
            text: "Dios ha dotado la voluntad del hombre con la libertad natural y el poder para actuar sobre la elección, que no es forzada, ni por ninguna necesidad de la naturaleza determinada a hacer el bien o el mal.",
            referenceId: "1a",
          },
        ],
        references: [
          {
            id: "1a",
            citations: [
              {
                citation: "Mateo 17:12",
                text: "Mas os digo que Elías ya vino, y no le conocieron, sino que hicieron con él todo lo que quisieron; así también el Hijo del Hombre padecerá de ellos.",
              },
              {
                citation: "Santiago 1:14",
                text: "sino que cada uno es tentado, cuando de su propia concupiscencia es atraído y seducido.",
              },
              {
                citation: "Deuteronomio 30:19",
                text: "A los cielos y a la tierra llamo por testigos hoy contra vosotros, que os he puesto delante la vida y la muerte, la bendición y la maldición; escoge, pues, la vida, para que vivas tú y tu descendencia;",
              },
            ],
          },
        ],
      },
      {
        number: 2,
        segments: [
          {
            text: "El hombre, en su estado de inocencia, tenía libertad y poder de voluntad y de hacer lo que era bueno y bien agradable a Dios,",
            referenceId: "2a",
          },
          {
            text: "pero aún era inestable, por lo que pudiera caerse de dicho estado.",
            referenceId: "2b",
          },
        ],
        references: [
          {
            id: "2a",
            citations: [
              {
                citation: "Eclesiastés 7:29",
                text: "He aquí, solamente esto he hallado: que Dios hizo al hombre recto, pero ellos buscaron muchas perversiones.",
              },
            ],
          },
          {
            id: "2b",
            citations: [
              {
                citation: "Génesis 3:6",
                text: "Y vio la mujer que el árbol era bueno para comer, y que era agradable a los ojos, y árbol codiciable para alcanzar la sabiduría; y tomó de su fruto, y comió; y dio también a su marido, el cual comió así como ella.",
              },
            ],
          },
        ],
      },
      {
        number: 3,
        segments: [
          {
            text: "El hombre, por su caída en un estado de pecado, ha perdido por completo toda capacidad para querer algún bien espiritual que acompañe a la salvación;",
            referenceId: "3a",
          },
          {
            text: "así que como hombre natural, que está enteramente opuesto a ese bien, y muerto en pecado,",
            referenceId: "3b",
          },
          {
            text: "no es capaz por su propia fuerza convertirse a sí mismo, o prepararse así mismo para ello.",
            referenceId: "3c",
          },
        ],
        references: [
          {
            id: "3a",
            citations: [
              {
                citation: "Romanos 5:6",
                text: "Porque Cristo, cuando aún éramos débiles, a su tiempo murió por los impíos.",
              },
              {
                citation: "Romanos 8:7",
                text: "Por cuanto los designios de la carne son enemistad contra Dios; porque no se sujetan a la ley de Dios, ni tampoco pueden;",
              },
            ],
          },
          {
            id: "3b",
            citations: [
              {
                citation: "Efesios 2:1, 5",
                text: "Y él os dio vida a vosotros, cuando estabais muertos en vuestros delitos y pecados, [...] aun estando nosotros muertos en pecados, nos dio vida juntamente con Cristo (por gracia sois salvos),",
              },
              {
                citation: "Tito 3:3",
                text: "Porque nosotros también éramos en otro tiempo insensatos, rebeldes, extraviados, esclavos de concupiscencias y deleites diversos, viviendo en malicia y envidia, aborrecibles, y aborreciéndonos unos a otros.",
              },
            ],
          },
          {
            id: "3c",
            citations: [
              {
                citation: "Tito 3:4-5",
                text: "Pero cuando se manifestó la bondad de Dios nuestro Salvador, y su amor para con los hombres, nos salvó, no por obras de justicia que nosotros hubiéramos hecho, sino por su misericordia, por el lavamiento de la regeneración y por la renovación en el Espíritu Santo,",
              },
              {
                citation: "Juan 6:37, 39, 40, 44, 45, 65",
                text: "Todo lo que el Padre me da, vendrá a mí; y al que a mí viene, no le echo fuera. [...] Y esta es la voluntad del Padre, el que me envió: Que de todo lo que me diere, no pierda yo nada, sino que lo resucite en el día postrero. Y esta es la voluntad del que me ha enviado: Que todo aquél que ve al Hijo, y cree en él, tenga vida eterna; y yo le resucitaré en el día postrero. [...] Ninguno puede venir a mí, si el Padre que me envió no le trajere; y yo le resucitaré en el día postrero. Escrito está en los profetas: Y serán todos enseñados por Dios. Así que, todo aquel que oyó al Padre, y aprendió de él, viene a mí. [...] Y dijo: Por eso os he dicho que ninguno puede venir a mí, si no le fuere dado del Padre.",
              },
            ],
          },
        ],
      },
      {
        number: 4,
        segments: [
          {
            text: "Cuando Dios convierte a un pecador, y lo traslada a él en el estado de gracia, le libra de su servidumbre natural bajo el pecado,",
            referenceId: "4a",
          },
          {
            text: "y por su gracia le permite libremente el querer como el hacer lo que es espiritualmente bueno;",
            referenceId: "4b",
          },
          {
            text: "sin embargo como por la razón de sus corrupciones restantes, no quiere ni perfectamente, ni únicamente, lo que es bueno, sino que también quiere lo que es malo.",
            referenceId: "4c",
          },
        ],
        references: [
          {
            id: "4a",
            citations: [
              {
                citation: "Colosenses 1:13",
                text: "el cual nos ha librado de la potestad de las tinieblas, y trasladado al reino de su amado Hijo,",
              },
              {
                citation: "Juan 8:36",
                text: "Así que, si el Hijo os libertare, seréis verdaderamente libres.",
              },
            ],
          },
          {
            id: "4b",
            citations: [
              {
                citation: "Filipenses 2:13",
                text: "porque Dios es el que en vosotros produce así el querer como el hacer, por su buena voluntad.",
              },
            ],
          },
          {
            id: "4c",
            citations: [
              {
                citation: "Romanos 7:15, 18-19, 21, 23",
                text: "Porque lo que hago, no lo entiendo; pues no hago lo que quiero, sino lo que aborrezco, eso hago. [...] Y yo sé que en mí, esto es, en mi carne, no mora el bien; porque el querer el bien está en mí, pero no el hacerlo. Porque no hago el bien que quiero, sino el mal que no quiero, eso hago. [...] Así que, queriendo yo hacer el bien, hallo esta ley: que el mal está en mí. [...] pero veo otra ley en mis miembros, que se rebela contra la ley de mi mente, y que me lleva cautivo a la ley del pecado que está en mis miembros.",
              },
            ],
          },
        ],
      },
      {
        number: 5,
        segments: [
          {
            text: "Esta voluntad del hombre será hecha perfecta e inmutablemente libre sólo para lo bueno en el estado de gloria solamente.",
            referenceId: "5a",
          },
        ],
        references: [
          {
            id: "5a",
            citations: [
              {
                citation: "Efesios 4:13",
                text: "hasta que todos lleguemos a la unidad de la fe y del conocimiento del Hijo de Dios, a un varón perfecto, a la medida de la estatura de la plenitud de Cristo;",
              },
              {
                citation: "Hebreos 12:23",
                text: "a la congregación de los primogénitos que están inscritos en los cielos, a Dios el Juez de todos, a los espíritus de los justos hechos perfectos,",
              },
            ],
          },
        ],
      },
    ],
  },
  // Chapter 10: Del Llamamiento Eficaz
  {
    id: 10,
    title: "Del Llamamiento Eficaz",
    paragraphs: [
      {
        number: 1,
        segments: [
          {
            text: "Aquellos a quienes Dios ha predestinado para la vida, se complace en su tiempo señalado y aceptado, eficazmente llamarlos,",
            referenceId: "1a",
          },
          {
            text: "por su Palabra y Espíritu, de ese estado de pecado y de muerte en el que están por naturaleza, a la gracia y la salvación por Jesús Cristo;",
            referenceId: "1b",
          },
          {
            text: "iluminando sus mentes espirituales y salvadoramente para que entiendan las cosas de Dios;",
            referenceId: "1c",
          },
          {
            text: "quitándoles su corazón de piedra, y dando a ellos un corazón de carne;",
            referenceId: "1d",
          },
          {
            text: "renovando sus voluntades, y por su omnipotente poder induciéndoles a lo que es bueno, y efectivamente llevarlos a Jesucristo;",
            referenceId: "1e",
          },
          {
            text: "sin embargo ellos vienen con mayor libertad, habiendo recibido por la gracia la disposición para hacerlo.",
            referenceId: "1f",
          },
        ],
        references: [
          {
            id: "1a",
            citations: [
              {
                citation: "Romanos 8:30",
                text: "Y a los que predestinó, a éstos también llamó; y a los que llamó, a éstos también justificó; y a los que justificó, a éstos también glorificó.",
              },
              {
                citation: "Romanos 11:7",
                text: "¿Qué pues? Lo que buscaba Israel, no lo ha alcanzado; pero los escogidos sí lo han alcanzado, y los demás fueron endurecidos;",
              },
              {
                citation: "Efesios 1:10-11",
                text: "de reunir todas las cosas en Cristo, en la dispensación del cumplimiento de los tiempos, así las que están en los cielos, como las que están en la tierra. En él asimismo tuvimos herencia, habiendo sido predestinados conforme al propósito del que hace todas las cosas según el designio de su voluntad,",
              },
            ],
          },
          {
            id: "1b",
            citations: [
              {
                citation: "2 Tesalonicenses 2:13-14",
                text: "Pero nosotros debemos dar siempre gracias a Dios respecto a vosotros, hermanos amados por el Señor, de que Dios os haya escogido desde el principio para salvación, mediante la santificación por el Espíritu y la fe en la verdad, a lo cual os llamó mediante nuestro evangelio, para alcanzar la gloria de nuestro Señor Jesucristo.",
              },
              {
                citation: "Efesios 2:1-6",
                text: "Y él os dio vida a vosotros, cuando estabais muertos en vuestros delitos y pecados, en los cuales anduvisteis en otro tiempo, siguiendo la corriente de este mundo, conforme al príncipe de la potestad del aire, el espíritu que ahora opera en los hijos de desobediencia, entre los cuales también todos nosotros vivimos en otro tiempo en los deseos de nuestra carne, haciendo la voluntad de la carne y de los pensamientos, y éramos por naturaleza hijos de ira, lo mismo que los demás. Pero Dios, que es rico en misericordia, por su gran amor con que nos amó, aun estando nosotros muertos en pecados, nos dio vida juntamente con Cristo (por gracia sois salvos), y juntamente con él nos resucitó, y asimismo nos hizo sentar en los lugares celestiales con Cristo Jesús,",
              },
            ],
          },
          {
            id: "1c",
            citations: [
              {
                citation: "Hechos 26:18",
                text: "para que abras sus ojos, para que se conviertan de las tinieblas a la luz, y de la potestad de Satanás a Dios; para que reciban, por la fe que es en mí, perdón de pecados y herencia entre los santificados.",
              },
              {
                citation: "Efesios 1:17-18",
                text: "para que el Dios de nuestro Señor Jesucristo, el Padre de gloria, os dé espíritu de sabiduría y de revelación en el conocimiento de él, alumbrando los ojos de vuestro entendimiento, para que sepáis cuál es la esperanza a que él os ha llamado, y cuáles las riquezas de la gloria de su herencia en los santos,",
              },
            ],
          },
          {
            id: "1d",
            citations: [
              {
                citation: "Ezequiel 36:26",
                text: "Os daré corazón nuevo, y pondré espíritu nuevo dentro de vosotros; y quitaré de vuestra carne el corazón de piedra, y os daré un corazón de carne.",
              },
            ],
          },
          {
            id: "1e",
            citations: [
              {
                citation: "Deuteronomio 30:6",
                text: "Y circuncidará Jehová tu Dios tu corazón, y el corazón de tu descendencia, para que ames a Jehová tu Dios con todo tu corazón y con toda tu alma, a fin de que vivas.",
              },
              {
                citation: "Ezequiel 36:27",
                text: "Y pondré dentro de vosotros mi Espíritu, y haré que andéis en mis estatutos, y guardéis mis preceptos, y los pongáis por obra.",
              },
              {
                citation: "Efesios 1:19",
                text: "y cuál la supereminente grandeza de su poder para con nosotros los que creemos, según la operación del poder de su fuerza,",
              },
            ],
          },
          {
            id: "1f",
            citations: [
              {
                citation: "Salmo 110:3",
                text: "Tu pueblo se te ofrecerá voluntariamente en el día de tu poder, En la hermosura de la santidad. Desde el seno de la aurora Tienes tú el rocío de tu juventud.",
              },
              {
                citation: "Cantares 1:4",
                text: "Atráeme; en pos de ti correremos. El rey me ha metido en sus cámaras; Nos gozaremos y alegraremos en ti; Nos acordaremos de tus amores más que del vino; Con razón te aman.",
              },
            ],
          },
        ],
      },
      {
        number: 2,
        segments: [
          {
            text: "Este llamamiento eficaz es libre y especial gracia de Dios solamente, no de nada en absoluto previsto en el hombre,",
            referenceId: "2a",
          },
          {
            text: "ni de cualquier poder u agencia en la criatura, al ser completamente pasiva en el mismo, estando muertos en pecados y transgresiones, hasta que siendo vivificado y renovado por el Espíritu Santo;",
            referenceId: "2b",
          },
          {
            text: "él es capacitado de este modo para responder a esta llamada, y para abrazar la gracia ofrecida y transmitida en él, y esto por ningún poder menor que el que resucitó a Cristo de entre los muertos.",
            referenceId: "2c",
          },
        ],
        references: [
          {
            id: "2a",
            citations: [
              {
                citation: "2 Timoteo 1:9",
                text: "quien nos salvó y llamó con llamamiento santo, no conforme a nuestras obras, sino según el propósito suyo y la gracia que nos fue dada en Cristo Jesús antes de los tiempos de los siglos,",
              },
              {
                citation: "Efesios 2:8",
                text: "Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios;",
              },
            ],
          },
          {
            id: "2b",
            citations: [
              {
                citation: "1 Corintios 2:14",
                text: "Pero el hombre natural no percibe las cosas que son del Espíritu de Dios, porque para él son locura, y no las puede entender, porque se han de discernir espiritualmente.",
              },
              {
                citation: "Efesios 2:5",
                text: "aun estando nosotros muertos en pecados, nos dio vida juntamente con Cristo (por gracia sois salvos),",
              },
              {
                citation: "Juan 5:25",
                text: "De cierto, de cierto os digo: Viene la hora, y ahora es, cuando los muertos oirán la voz del Hijo de Dios; y los que la oyeren vivirán.",
              },
            ],
          },
          {
            id: "2c",
            citations: [
              {
                citation: "Efesios 1:19-20",
                text: "y cuál la supereminente grandeza de su poder para con nosotros los que creemos, según la operación del poder de su fuerza, la cual operó en Cristo, resucitándole de los muertos y sentándole a su diestra en los lugares celestiales,",
              },
            ],
          },
        ],
      },
      {
        number: 3,
        segments: [
          {
            text: "Los niños elegidos que mueren en la infancia son regenerados y salvados por Cristo por medio del Espíritu;",
            referenceId: "3a",
          },
          {
            text: "quien obra cuándo, y dónde, y cómo le plazca;",
            referenceId: "3b",
          },
          {
            text: "también lo son todas las personas elegidas, que son incapaces de ser exteriormente llamados por el ministerio de la Palabra.",
          },
        ],
        references: [
          {
            id: "3a",
            citations: [
              {
                citation: "Juan 3:3, 5, 6",
                text: "Respondió Jesús y le dijo: De cierto, de cierto te digo, que el que no naciere de nuevo, no puede ver el reino de Dios. [...] Respondió Jesús: De cierto, de cierto te digo, que el que no naciere de agua y del Espíritu, no puede entrar en el reino de Dios. Lo que es nacido de la carne, carne es; y lo que es nacido del Espíritu, espíritu es.",
              },
            ],
          },
          {
            id: "3b",
            citations: [
              {
                citation: "Juan 3:8",
                text: "El viento sopla de donde quiere, y oyes su sonido; mas ni sabes de dónde viene, ni a dónde va; así es todo aquel que es nacido del Espíritu.",
              },
            ],
          },
        ],
      },
      {
        number: 4,
        segments: [
          {
            text: "Otros no elegidos, aunque pueden ser convocadas por el ministerio de la Palabra, y puede tener algunas operaciones comunes del Espíritu,",
            referenceId: "4a",
          },
          {
            text: "aún no siendo efectivamente atraído por el Padre, que no quiere ni puede realmente venir a Cristo, y por lo tanto no pueden ser salvos:",
            referenceId: "4b",
          },
          {
            text: "mucho menos pueden ser salvos los hombres que no reciben la religión cristiana; ellos nunca lo serán por diligentes que sean ajustando sus vidas de acuerdo a la luz de la naturaleza y la ley de la religión que profesen.",
            referenceId: "4c",
          },
        ],
        references: [
          {
            id: "4a",
            citations: [
              {
                citation: "Mateo 22:14",
                text: "Porque muchos son llamados, y pocos escogidos.",
              },
              {
                citation: "Mateo 13:20-21",
                text: "Y el que fue sembrado en pedregales, éste es el que oye la palabra, y al momento la recibe con gozo; pero no tiene raíz en sí, sino que es de corta duración, pues al venir la aflicción o la persecución por causa de la palabra, luego tropieza.",
              },
              {
                citation: "Hebreos 6:4-5",
                text: "Porque es imposible que los que una vez fueron iluminados y gustaron del don celestial, y fueron hechos partícipes del Espíritu Santo, y asimismo gustaron de la buena palabra de Dios y los poderes del siglo venidero,",
              },
            ],
          },
          {
            id: "4b",
            citations: [
              {
                citation: "Juan 6:44-45, 64-66",
                text: "Ninguno puede venir a mí, si el Padre que me envió no le trajere; y yo le resucitaré en el día postrero. Escrito está en los profetas: Y serán todos enseñados por Dios. Así que, todo aquel que oyó al Padre, y aprendió de él, viene a mí. [...] Pero hay algunos de vosotros que no creen. Porque Jesús sabía desde el principio quiénes eran los que no creían, y quién le había de entregar. Y dijo: Por eso os he dicho que ninguno puede venir a mí, si no le fuere dado del Padre. Desde entonces muchos de sus discípulos volvieron atrás, y ya no andaban con él.",
              },
              {
                citation: "Juan 8:24-25",
                text: "Por eso os dije que moriréis en vuestros pecados; porque si no creéis que yo soy, en vuestros pecados moriréis. Entonces le dijeron: ¿Tú quién eres? Entonces Jesús les dijo: Lo que desde el principio os he dicho.",
              },
            ],
          },
          {
            id: "4c",
            citations: [
              {
                citation: "Hechos 4:12",
                text: "Y en ningún otro hay salvación; porque no hay otro nombre bajo el cielo, dado a los hombres, en que podamos ser salvos.",
              },
              {
                citation: "Juan 4:22",
                text: "Vosotros adoráis lo que no sabéis; nosotros adoramos lo que sabemos; porque la salvación viene de los judíos.",
              },
              {
                citation: "Juan 17:3",
                text: "Y esta es la vida eterna: que te conozcas a ti, el único Dios verdadero, y a Jesucristo, a quien has enviado.",
              },
            ],
          },
        ],
      },
    ],
  },
  // Chapter 11: De la Justificación
  {
    id: 11,
    title: "De la Justificación",
    paragraphs: [
      {
        number: 1,
        segments: [
          {
            text: "Aquellos a quienes Dios eficazmente llama, también libremente justifica,",
            referenceId: "1a",
          },
          {
            text: "no por infundir justicia en ellos, sino perdonando sus pecados, y contando y aceptando sus personas como justas;",
            referenceId: "1b",
          },
          {
            text: "no por nada obrado en ellos o hecho por ellos, sino sólo por Cristo;",
            referenceId: "1c",
          },
          {
            text: "no imputándoles la fe misma, el acto de creer, o de cualquier otra obediencia evangélica a ellos, como su justicia; sino por la imputación de la obediencia activa de Cristo a toda la ley, y la obediencia pasiva en su muerte para la completa y única justicia de ellos por la fe , que no tienen esa fe de sí mismos; esta es don de Dios.",
            referenceId: "1d",
          },
        ],
        references: [
          {
            id: "1a",
            citations: [
              {
                citation: "Romanos 3:24",
                text: "siendo justificados gratuitamente por su gracia, mediante la redención que es en Cristo Jesús,",
              },
              {
                citation: "Romanos 8:30",
                text: "Y a los que predestinó, a éstos también llamó; y a los que llamó, a éstos también justificó; y a los que justificó, a éstos también glorificó.",
              },
            ],
          },
          {
            id: "1b",
            citations: [
              {
                citation: "Romanos 4:5-8",
                text: "mas al que no obra, sino cree en aquel que justifica al impío, su fe le es contada por justicia. Como también David habla de la bienaventuranza del hombre a quien Dios atribuye justicia sin obras, diciendo: Bienaventurados aquellos cuyas iniquidades son perdonadas, Y cuyos pecados son cubiertos. Bienaventurado el varón a quien el Señor no inculpa de pecado.",
              },
              {
                citation: "Efesios 1:7",
                text: "en quien tenemos redención por su sangre, el perdón de pecados según las riquezas de su gracia,",
              },
            ],
          },
          {
            id: "1c",
            citations: [
              {
                citation: "1 Corintios 1:30-31",
                text: "Mas por él estáis vosotros en Cristo Jesús, el cual nos ha sido hecho por Dios sabiduría, justificación, santificación y redención; para que, como está escrito: El que se gloría, gloríese en el Señor.",
              },
              {
                citation: "Romanos 5:17-19",
                text: "Pues si por la transgresión de uno solo reinó la muerte, mucho más reinarán en vida por uno solo, Jesucristo, los que reciben la abundancia de la gracia y del don de la justicia. Así que, como por la transgresión de uno vino la condenación a todos los hombres, de la misma manera por la justicia de uno vino a todos los hombres la justificación de vida. Porque así como por la desobediencia de un hombre los muchos fueron constituidos pecadores, así también por la obediencia de uno, los muchos serán constituidos justos.",
              },
            ],
          },
          {
            id: "1d",
            citations: [
              {
                citation: "Filipenses 3:8-9",
                text: "Y ciertamente, aun estimo todas las cosas como pérdida por la excelencia del conocimiento de Cristo Jesús, mi Señor, por amor del cual lo he perdido todo, y lo tengo por basura, para ganar a Cristo, y ser hallado en él, no teniendo mi propia justicia, que es por la ley, sino la que es por la fe de Cristo, la justicia que es de Dios por la fe;",
              },
              {
                citation: "Efesios 2:8-10",
                text: "Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios; no por obras, para que nadie se gloríe. Porque somos hechura suya, creados en Cristo Jesús para buenas obras, las cuales Dios preparó de antemano para que anduviésemos en ellas.",
              },
              {
                citation: "Juan 1:12-13",
                text: "Mas a todos los que le recibieron, a los que creen en su nombre, les dio potestad de ser hechos hijos de Dios; los cuales no son engendrados de sangre, ni de voluntad de carne, ni de voluntad de varón, sino de Dios.",
              },
              {
                citation: "Romanos 5:17",
                text: "Pues si por la transgresión de uno solo reinó la muerte, mucho más reinarán en vida por uno solo, Jesucristo, los que reciben la abundancia de la gracia y del don de la justicia.",
              },
            ],
          },
        ],
      },
      {
        number: 2,
        segments: [
          {
            text: "Así, la fe de recepción y descanso en Cristo y su justicia, es el único instrumento de justificación;",
            referenceId: "2a",
          },
          {
            text: "sin embargo, no está sola en la persona justificada, sino que está siempre acompañada de todas las otras gracias salvadoras, y no es una fe muerta, sino que obra por el amor.",
            referenceId: "2b",
          },
        ],
        references: [
          {
            id: "2a",
            citations: [
              {
                citation: "Romanos 3:28",
                text: "Concluimos, pues, que el hombre es justificado por fe sin las obras de la ley.",
              },
            ],
          },
          {
            id: "2b",
            citations: [
              {
                citation: "Gálatas 5:6",
                text: "porque en Cristo Jesús ni la circuncisión vale algo, ni la incircuncisión, sino la fe que obra por el amor.",
              },
              {
                citation: "Santiago 2:17, 22, 26",
                text: "Así también la fe, si no tiene obras, es muerta en sí misma. [...] ¿No ves que la fe actuó juntamente con sus obras, y que la fe se perfeccionó por las obras? [...] Porque como el cuerpo sin espíritu está muerto, así también la fe sin obras está muerta.",
              },
            ],
          },
        ],
      },
      {
        number: 3,
        segments: [
          {
            text: "Cristo, por su obediencia y muerte, se saldó por completo la deuda de todos aquellos que son justificados; y lo hizo, por el sacrificio de sí mismo en la sangre de su cruz, sufriendo en el lugar de ellos la retribución que merecían, hizo una verdadera, real, y plena satisfacción a la justicia de Dios en nombre de ellos;",
            referenceId: "3a",
          },
          {
            text: "sin embargo, en la medida en que fue dado por el Padre para ellos,",
            referenceId: "3b",
          },
          {
            text: "y su obediencia y satisfacción fueron aceptados en lugar de ellos,",
            referenceId: "3c",
          },
          {
            text: "y tanto gratuitamente, no por nada en ellos, su justificación es sólo por libre gracia,",
            referenceId: "3d",
          },
          {
            text: "tanto que la justicia precisa y rica gracia de Dios sea glorificado en la justificación de los pecadores.",
            referenceId: "3e",
          },
        ],
        references: [
          {
            id: "3a",
            citations: [
              {
                citation: "Hebreos 10:10, 14",
                text: "En esa voluntad somos santificados mediante la ofrenda del cuerpo de Jesucristo hecha una vez para siempre. [...] porque con una sola ofrenda hizo perfectos para siempre a los santificados.",
              },
              {
                citation: "1 Pedro 1:18-19",
                text: "sabiendo que fuisteis rescatados de vuestra vana manera de vivir, la cual recibisteis de vuestros padres, no con cosas corruptibles, como oro o plata, sino con la sangre preciosa de Cristo, como de un cordero sin mancha y sin contaminación,",
              },
              {
                citation: "Isaías 53:5-6",
                text: "Mas él herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados. Todos nosotros nos descarriamos como ovejas, cada cual se apartó por su camino; mas Jehová cargó en él el pecado de todos nosotros.",
              },
            ],
          },
          {
            id: "3b",
            citations: [
              {
                citation: "Romanos 8:32",
                text: "El que no escatimó ni a su propio Hijo, sino que lo entregó por todos nosotros, ¿cómo no nos dará también con él todas las cosas?",
              },
            ],
          },
          {
            id: "3c",
            citations: [
              {
                citation: "2 Corintios 5:21",
                text: "Al que no conoció pecado, por nosotros lo hizo pecado, para que nosotros fuésemos hechos justicia de Dios en él.",
              },
            ],
          },
          {
            id: "3d",
            citations: [
              {
                citation: "Romanos 3:24, 26",
                text: "siendo justificados gratuitamente por su gracia, mediante la redención que es en Cristo Jesús, [...] con la mira de manifestar en este tiempo su justicia, a fin de que él sea el justo, y el que justifica al que es de la fe de Jesús.",
              },
            ],
          },
          {
            id: "3e",
            citations: [
              {
                citation: "Efesios 1:6-7",
                text: "para alabanza de la gloria de su gracia, con la cual nos hizo aceptos en el Amado, en quien tenemos redención por su sangre, el perdón de pecados según las riquezas de su gracia,",
              },
              {
                citation: "Efesios 2:7",
                text: "para mostrar en los siglos venideros las abundantes riquezas de su gracia en su bondad para con nosotros en Cristo Jesús.",
              },
            ],
          },
        ],
      },
      {
        number: 4,
        segments: [
          {
            text: "Dios desde toda la eternidad decretó la justificación de todos los elegidos,",
            referenceId: "4a",
          },
          {
            text: "y en la plenitud del tiempo Cristo murió por los pecados de ellos, y resucitó para la justificación de ellos;",
            referenceId: "4b",
          },
          {
            text: "sin embargo, no se justifican personalmente, hasta que por el Espíritu Santo a su debido tiempo Cristo le es en realidad aplicado.",
            referenceId: "4c",
          },
        ],
        references: [
          {
            id: "4a",
            citations: [
              {
                citation: "Gálatas 3:8",
                text: "Y la Escritura, previendo que Dios había de justificar por la fe a los gentiles, dio de antemano la buena nueva a Abraham, diciendo: En ti serán benditas todas las naciones.",
              },
              {
                citation: "1 Pedro 1:2",
                text: "elegidos según la presciencia de Dios Padre en santificación del Espíritu, para obedecer y ser rociados con la sangre de Jesucristo: Gracia y paz os sean multiplicadas.",
              },
            ],
          },
          {
            id: "4b",
            citations: [
              {
                citation: "1 Timoteo 2:6",
                text: "el cual se dio a sí mismo en rescate por todos, de lo cual se dio testimonio a su debido tiempo.",
              },
              {
                citation: "Romanos 4:25",
                text: "el cual fue entregado por nuestras transgresiones, y resucitado para nuestra justificación.",
              },
            ],
          },
          {
            id: "4c",
            citations: [
              {
                citation: "Colosenses 1:21-22",
                text: "Y a vosotros también, que erais en otro tiempo extraños y enemigos en vuestra mente, haciendo malas obras, ahora os ha reconciliado en su cuerpo de carne, por medio de la muerte, para presentaros santos y sin mancha e irreprensibles delante de él;",
              },
              {
                citation: "Tito 3:4-7",
                text: "Pero cuando se manifestó la bondad de Dios nuestro Salvador, y su amor para con los hombres, nos salvó, no por obras de justicia que nosotros hubiéramos hecho, sino por su misericordia, por el lavamiento de la regeneración y por la renovación en el Espíritu Santo, el cual derramó en nosotros abundantemente por Jesucristo nuestro Salvador, para que justificados por su gracia, viniésemos a ser herederos conforme a la esperanza de la vida eterna.",
              },
            ],
          },
        ],
      },
      {
        number: 5,
        segments: [
          {
            text: "Dios continua perdonando los pecados de aquellos que son justificados,",
            referenceId: "5a",
          },
          {
            text: "y a pesar de que nunca pueden caer del estado de justificación,",
            referenceId: "5b",
          },
          {
            text: "sin embargo pueden, por sus pecados, caer bajo el desagrado paternal de Dios; y en esa condición no suelen tener la luz de su rostro restaurada en ellos, hasta que se humillen, confiesen sus pecados, pidan perdón y renueven su fe y el arrepentimiento.",
            referenceId: "5c",
          },
        ],
        references: [
          {
            id: "5a",
            citations: [
              {
                citation: "Mateo 6:12",
                text: "Y perdónanos nuestras deudas, como también nosotros perdonamos a nuestros deudores.",
              },
              {
                citation: "1 Juan 1:7, 9",
                text: "pero si andamos en luz, como él está en luz, tenemos comunión unos con otros, y la sangre de Jesucristo su Hijo nos limpia de todo pecado. [...] Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados, y limpiarnos de toda maldad.",
              },
            ],
          },
          {
            id: "5b",
            citations: [
              {
                citation: "Juan 10:28",
                text: "y yo les doy vida eterna; y no perecerán jamás, ni nadie las arrebatará de mi mano.",
              },
              {
                citation: "Salmo 89:31-33",
                text: "Si profanaren mis estatutos, Y no guardaren mis mandamientos, Entonces castigaré con vara su rebelión, Y con azotes sus iniquidades. Mas no quitaré de él mi misericordia, Ni falsearé mi verdad.",
              },
            ],
          },
          {
            id: "5c",
            citations: [
              {
                citation: "Salmo 32:5",
                text: "Mi pecado te declaré, y no encubrí mi iniquidad. Dije: Confesaré mis transgresiones a Jehová; Y tú perdonaste la maldad de mi pecado.",
              },
              {
                citation: "Salmo 51",
                text: "Ten piedad de mí, oh Dios, conforme a tu misericordia; Conforme a la multitud de tus piedades borra mis rebeliones...",
              },
              {
                citation: "Mateo 26:75",
                text: "Entonces Pedro se acordó de las palabras de Jesús, que le había dicho: Antes que cante el gallo, me negarás tres veces. Y saliendo fuera, lloró amargamente.",
              },
            ],
          },
        ],
      },
      {
        number: 6,
        segments: [
          {
            text: "La justificación de los creyentes bajo el Antiguo Testamento era, en todos estos aspectos, uno y la misma que la justificación de los creyentes bajo el Nuevo Testamento.",
            referenceId: "6a",
          },
        ],
        references: [
          {
            id: "6a",
            citations: [
              {
                citation: "Gálatas 3:9",
                text: "De modo que los de la fe son bendecidos con el creyente Abraham.",
              },
              {
                citation: "Romanos 4:22-24",
                text: "Por lo cual también su fe le fue contada por justicia. Y no solamente con respecto a él se escribió que le fue contada, sino también con respecto a nosotros a quienes ha de ser contada, esto es, a los que creemos en el que levantó de los muertos a Jesús, Señor nuestro,",
              },
            ],
          },
        ],
      },
    ],
  },
  // Chapter 12: De la Adopción
  {
    id: 12,
    title: "De la Adopción",
    paragraphs: [
      {
        number: 1,
        segments: [
          {
            text: "Todos los que son justificados,",
            referenceId: "1a",
          },
          {
            text: "Dios concedió,",
            referenceId: "1b",
          },
          {
            text: "en y para el bien de su único Hijo Jesucristo,",
            referenceId: "1c",
          },
          {
            text: "hacerles partícipes de la gracia de la adopción, por el que se toman en el número, y disfrutar de las libertades y privilegios de los hijos de Dios, tienen su nombre escrito sobre ellos,",
            referenceId: "1d",
          },
          {
            text: "reciben el espíritu de adopción, tienen acceso al trono de la gracia con audacia, están habilitados a gritar: ¡Abba, Padre!,",
            referenceId: "1e",
          },
          {
            text: "se les compadece, protege, provee y castiga por él como por un Padre, sin embargo nunca se les desecha, sino que son sellados para el día de la redención,",
            referenceId: "1f",
          },
          {
            text: "y heredan las promesas como herederos de la salvación eterna.",
            referenceId: "1g",
          },
        ],
        references: [
          {
            id: "1a",
            citations: [
              {
                citation: "Gálatas 3:24-26",
                text: "De manera que la ley ha sido nuestro ayo, para llevarnos a Cristo, a fin de que fuésemos justificados por la fe. Pero venida la fe, ya no estamos bajo ayo, pues todos sois hijos de Dios por la fe en Cristo Jesús;",
              },
            ],
          },
          {
            id: "1b",
            citations: [
              {
                citation: "1 Juan 3:1-3",
                text: "Mirad cuál amor nos ha dado el Padre, para que seamos llamados hijos de Dios; por esto el mundo no nos conoce, porque no le conoció a él. Amados, ahora somos hijos de Dios, y aún no se ha manifestado lo que hemos de ser; pero sabemos que cuando él se manifieste, seremos semejantes a él, porque le veremos tal como él es. Y todo aquel que tiene esta esperanza en él, se purifica a sí mismo, así como él es puro.",
              },
            ],
          },
          {
            id: "1c",
            citations: [
              {
                citation: "Efesios 1:5",
                text: "en amor habiéndonos predestinado para ser adoptados hijos suyos por medio de Jesucristo, según el puro afecto de su voluntad,",
              },
              {
                citation: "Gálatas 4:4-5",
                text: "Pero cuando vino el cumplimiento del tiempo, Dios envió a su Hijo, nacido de mujer y nacido bajo la ley, para que redimiese a los que estaban bajo la ley, a fin de que recibiésemos la adopción de hijos.",
              },
              {
                citation: "Romanos 8:17, 29",
                text: "Y si hijos, también herederos; herederos de Dios y coherederos con Cristo, si es que padecemos juntamente con él, para que juntamente con él seamos glorificados. [...] Porque a los que antes conoció, también los predestinó para que fuesen hechos conformes a la imagen de su Hijo, para que él sea el primogénito entre muchos hermanos.",
              },
            ],
          },
          {
            id: "1d",
            citations: [
              {
                citation: "Romanos 8:17",
                text: "Y si hijos, también herederos; herederos de Dios y coherederos con Cristo, si es que padecemos juntamente con él, para que juntamente con él seamos glorificados.",
              },
              {
                citation: "Juan 1:12",
                text: "Mas a todos los que le recibieron, a los que creen en su nombre, les dio potestad de ser hechos hijos de Dios;",
              },
              {
                citation: "2 Corintios 6:18",
                text: "Y seré para vosotros por Padre, Y vosotros me seréis hijos e hijas, dice el Señor Todopoderoso.",
              },
              {
                citation: "Apocalipsis 3:12",
                text: "Al que venciere, yo lo haré columna en el templo de mi Dios, y nunca más saldrá de allí; y escribiré sobre él el nombre de mi Dios, y el nombre de la ciudad de mi Dios, la nueva Jerusalén, la cual desciende del cielo, de mi Dios, y mi nombre nuevo.",
              },
            ],
          },
          {
            id: "1e",
            citations: [
              {
                citation: "Romanos 8:15",
                text: "Pues no habéis recibido el espíritu de esclavitud para estar otra vez en temor, sino que habéis recibido el espíritu de adopción, por el cual clamamos: ¡Abba, Padre!",
              },
              {
                citation: "Efesios 3:12",
                text: "en quien tenemos seguridad y acceso con confianza por medio de la fe en él;",
              },
              {
                citation: "Romanos 5:2",
                text: "por quien también tenemos entrada por la fe a esta gracia en la cual estamos firmes, y nos gloriamos en la esperanza de la gloria de Dios.",
              },
              {
                citation: "Gálatas 4:6",
                text: "Y por cuanto sois hijos, Dios envió a vuestros corazones el Espíritu de su Hijo, el cual clama: ¡Abba, Padre!",
              },
              {
                citation: "Efesios 2:18",
                text: "porque por medio de él los unos y los otros tenemos entrada por un mismo Espíritu al Padre.",
              },
            ],
          },
          {
            id: "1f",
            citations: [
              {
                citation: "Salmo 103:13",
                text: "Como el padre se compadece de los hijos, Se compadece Jehová de los que le temen.",
              },
              {
                citation: "Proverbios 14:26",
                text: "En el temor de Jehová está la fuerte confianza; Y esperanza tendrán sus hijos.",
              },
              {
                citation: "Mateo 6:30, 32",
                text: "Y si la hierba del campo que hoy es, y mañana se echa en el horno, Dios la viste así, ¿no hará mucho más a vosotros, hombres de poca fe? [...] Porque los gentiles buscan todas estas cosas; pero vuestro Padre celestial sabe que tenéis necesidad de todas estas cosas.",
              },
              {
                citation: "1 Pedro 5:7",
                text: "echando toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros.",
              },
              {
                citation: "Hebreos 12:6",
                text: "Porque el Señor al que ama, disciplina, Y azota a todo el que recibe por hijo.",
              },
              {
                citation: "Isaías 54:8-9",
                text: "Con un poco de ira escondí mi rostro de ti por un momento; pero con misericordia eterna tendré compasión de ti, dijo Jehová tu Redentor. Porque esto me será como las aguas de Noé; que juré que nunca más las aguas de Noé pasarían sobre la tierra; así he jurado que no me enojaré contra ti, ni te reñiré.",
              },
              {
                citation: "Lamentaciones 3:31",
                text: "Porque el Señor no desecha para siempre;",
              },
              {
                citation: "Efesios 4:30",
                text: "Y no contristéis al Espíritu Santo de Dios, con el cual fuisteis sellados para el día de la redención.",
              },
            ],
          },
          {
            id: "1g",
            citations: [
              {
                citation: "Romanos 8:17",
                text: "Y si hijos, también herederos; herederos de Dios y coherederos con Cristo, si es que padecemos juntamente con él, para que juntamente con él seamos glorificados.",
              },
              {
                citation: "Hebreos 1:14",
                text: "¿No son todos espíritus ministradores, enviados para servicio a favor de los que serán herederos de la salvación?",
              },
              {
                citation: "Hebreos 6:12",
                text: "a fin de que no os hagáis perezosos, sino imitadores de aquellos que por la fe y la paciencia heredan las promesas.",
              },
            ],
          },
        ],
      },
    ],
  },
  // Chapter 13: De la Santificación
  {
    id: 13,
    title: "De la Santificación",
    paragraphs: [
      {
        number: 1,
        segments: [
          {
            text: "Los que están unidos a Cristo, llamados eficazmente y regenerados, teniendo un corazón nuevo y un nuevo espíritu creado en ellos a través de la virtud de la muerte y resurrección de Cristo,",
            referenceId: "1a",
          },
          {
            text: "también son más santificados, real y personalmente,",
            referenceId: "1b",
          },
          {
            text: "a través de la misma virtud,",
            referenceId: "1c",
          },
          {
            text: "por medio de Su Palabra y el Espíritu Santo que habita en ellos,",
            referenceId: "1d",
          },
          {
            text: "el dominio de todo el cuerpo del pecado es destruido, y los diversos deseos del mismo son cada vez más debilitados y mortificados, y cada vez más acelerado y reforzado en todas las gracias salvadoras, para la práctica de la verdadera santidad,",
            referenceId: "1e",
          },
          {
            text: "sin la cual nadie verá al Señor.",
            referenceId: "1f",
          },
        ],
        references: [
          {
            id: "1a",
            citations: [
              {
                citation: "Juan 3:3-8",
                text: "Respondió Jesús y le dijo: De cierto, de cierto te digo, que el que no naciere de nuevo, no puede ver el reino de Dios. [...] El viento sopla de donde quiere, y oyes su sonido; mas ni sabes de dónde viene, ni a dónde va; así es todo aquel que es nacido del Espíritu.",
              },
              {
                citation: "1 Juan 2:29",
                text: "Si sabéis que él es justo, sabed también que todo aquel que hace justicia es nacido de él.",
              },
              {
                citation: "1 Juan 3:9-10",
                text: "Todo aquel que es nacido de Dios, no practica el pecado, porque la simiente de Dios permanece en él; y no puede pecar, porque es nacido de Dios. En esto se manifiestan los hijos de Dios, y los hijos del diablo: todo aquel que no hace justicia, y que no ama a su hermano, no es de Dios.",
              },
              {
                citation: "Romanos 1:7",
                text: "a todos los que estáis en Roma, amados de Dios, llamados a ser santos: Gracia y paz a vosotros, de Dios nuestro Padre y del Señor Jesucristo.",
              },
            ],
          },
          {
            id: "1b",
            citations: [
              {
                citation: "1 Tesalonicenses 5:23",
                text: "Y el mismo Dios de paz os santifique por completo; y todo vuestro ser, espíritu, alma y cuerpo, sea guardado irreprensible para la venida de nuestro Señor Jesucristo.",
              },
              {
                citation: "Romanos 6:19, 22",
                text: "Hablo como humano, por vuestra humana debilidad; que así como para iniquidad presentasteis vuestros miembros para servir a la inmundicia y a la iniquidad, así ahora para santificación presentad vuestros miembros para servir a la justicia. [...] Mas ahora que habéis sido libertados del pecado y hechos siervos de Dios, tenéis por vuestro fruto la santificación, y como fin, la vida eterna.",
              },
            ],
          },
          {
            id: "1c",
            citations: [
              {
                citation: "Hechos 20:32",
                text: "Y ahora, hermanos, os encomiendo a Dios, y a la palabra de su gracia, que tiene poder para sobreedificaros y daros herencia con todos los santificados.",
              },
              {
                citation: "Romanos 6:5-6",
                text: "Porque si fuimos plantados juntamente con él en la semejanza de su muerte, así también lo seremos en la de su resurrección; sabiendo esto, que nuestro viejo hombre fue crucificado juntamente con él, para que el cuerpo del pecado sea destruido, a fin de que no sirvamos más al pecado.",
              },
            ],
          },
          {
            id: "1d",
            citations: [
              {
                citation: "Juan 17:17",
                text: "Santifícalos en tu verdad; tu palabra es verdad.",
              },
              {
                citation: "Efesios 3:16-19",
                text: "para que os dé, conforme a las riquezas de su gloria, el ser fortalecidos con poder en el hombre interior por su Espíritu; para que habite Cristo por la fe en vuestros corazones, a fin de que, arraigados y cimentados en amor, seáis plenamente capaces de comprender con todos los santos cuál sea la anchura, la longitud, la profundidad y la altura, y de conocer el amor de Cristo, que excede a todo conocimiento, para que seáis llenos de toda la plenitud de Dios.",
              },
              {
                citation: "1 Tesalonicenses 5:21-23",
                text: "Examinadlo todo; retened lo bueno. Absteneos de toda especie de mal. Y el mismo Dios de paz os santifique por completo; y todo vuestro ser, espíritu, alma y cuerpo, sea guardado irreprensible para la venida de nuestro Señor Jesucristo.",
              },
            ],
          },
          {
            id: "1e",
            citations: [
              {
                citation: "Romanos 6:14",
                text: "Porque el pecado no se enseñoreará de vosotros; pues no estáis bajo la ley, sino bajo la gracia.",
              },
              {
                citation: "Gálatas 5:24",
                text: "Pero los que son de Cristo han crucificado la carne con sus pasiones y deseos.",
              },
              {
                citation: "Colosenses 1:11",
                text: "fortalecidos con todo poder, conforme a la potencia de su gloria, para toda paciencia y longanimidad;",
              },
              {
                citation: "2 Corintios 7:1",
                text: "Así que, amados, puesto que tenemos tales promesas, limpiémonos de toda contaminación de carne y de espíritu, perfeccionando la santidad en el temor de Dios.",
              },
            ],
          },
          {
            id: "1f",
            citations: [
              {
                citation: "Hebreos 12:14",
                text: "Seguid la paz con todos, y la santidad, sin la cual nadie verá al Señor.",
              },
            ],
          },
        ],
      },
      {
        number: 2,
        segments: [
          {
            text: "Esta santificación es en todo el hombre en su totalidad, aunque imperfecta en esta vida, moran aún algunos restos de la corrupción en todas partes,",
            referenceId: "2a",
          },
          {
            text: "de donde se levante una guerra continua e irreconciliable,",
            referenceId: "2b",
          },
          {
            text: "la carne lucha contra el Espíritu y el Espíritu contra la carne.",
            referenceId: "2c",
          },
        ],
        references: [
          {
            id: "2a",
            citations: [
              {
                citation: "1 Tesalonicenses 5:23",
                text: "Y el mismo Dios de paz os santifique por completo; y todo vuestro ser, espíritu, alma y cuerpo, sea guardado irreprensible para la venida de nuestro Señor Jesucristo.",
              },
              {
                citation: "Romanos 7:18, 23",
                text: "Y yo sé que en mí, esto es, en mi carne, no mora el bien; porque el querer el bien está en mí, pero no el hacerlo. [...] pero veo otra ley en mis miembros, que se rebela contra la ley de mi mente, y que me lleva cautivo a la ley del pecado que está en mis miembros.",
              },
            ],
          },
          {
            id: "2b",
            citations: [
              {
                citation: "1 Corintios 9:24-27",
                text: "¿No sabéis que los que corren en el estadio, todos a la verdad corren, pero uno solo se lleva el premio? Corred de tal manera que lo obtengáis. Todo aquel que lucha, de todo se abstiene; ellos, a la verdad, para recibir una corona corruptible, pero nosotros, una incorruptible. Así que, yo de esta manera corro, no como a la ventura; de esta manera peleo, no como quien golpea el aire, sino que golpeo mi cuerpo, y lo pongo en servidumbre, no sea que habiendo sido heraldo para otros, yo mismo venga a ser eliminado.",
              },
              {
                citation: "1 Timoteo 1:18",
                text: "Este mandamiento, hijo Timoteo, te encargo, para que conforme a las profecías que se hicieron antes en cuanto a ti, milites por ellas la buena milicia,",
              },
              {
                citation: "1 Timoteo 6:12",
                text: "Pelea la buena batalla de la fe, echa mano de la vida eterna, a la cual asimismo fuiste llamado, habiendo hecho la buena profesión delante de muchos testigos.",
              },
              {
                citation: "2 Timoteo 4:7",
                text: "He peleado la buena batalla, he acabado la carrera, he guardado la fe.",
              },
            ],
          },
          {
            id: "2c",
            citations: [
              {
                citation: "Gálatas 5:17",
                text: "Porque el deseo de la carne es contra el Espíritu, y el del Espíritu es contra la carne; y éstos se oponen entre sí, para que no hagáis lo que quisiereis.",
              },
              {
                citation: "1 Pedro 2:11",
                text: "Amados, yo os ruego como a extranjeros y peregrinos, que os abstengáis de los deseos carnales que batallan contra el alma,",
              },
            ],
          },
        ],
      },
      {
        number: 3,
        segments: [
          {
            text: "En dicha guerra, a pesar de que la corrupción que queda por un tiempo puede prevalecer mucho,",
            referenceId: "3a",
          },
          {
            text: "sin embargo, a través del suministro continuo de la fuerza del Espíritu santificador de Cristo,",
            referenceId: "3b",
          },
          {
            text: "la parte regenerada puede superar, y así los santos crecen en gracia, perfeccionando la santidad en el temor de Dios, apremiendo después a una vida celestial, en obediencia evangélica a todos los mandamientos que Cristo como Cabeza y Rey, en Su Palabra ha prescrito.",
            referenceId: "3c",
          },
        ],
        references: [
          {
            id: "3a",
            citations: [
              {
                citation: "Romanos 7:23",
                text: "pero veo otra ley en mis miembros, que se rebela contra la ley de mi mente, y que me lleva cautivo a la ley del pecado que está en mis miembros.",
              },
            ],
          },
          {
            id: "3b",
            citations: [
              {
                citation: "Romanos 6:14",
                text: "Porque el pecado no se enseñoreará de vosotros; pues no estáis bajo la ley, sino bajo la gracia.",
              },
              {
                citation: "Efesios 4:15-16",
                text: "sino que siguiendo la verdad en amor, crezcamos en todo en aquel que es la cabeza, esto es, Cristo, de quien todo el cuerpo, bien concertado y unido entre sí por todas las coyunturas que se ayudan mutuamente, según la actividad propia de cada miembro, recibe su crecimiento para ir edificándose en amor.",
              },
            ],
          },
          {
            id: "3c",
            citations: [
              {
                citation: "2 Corintios 3:18",
                text: "Por tanto, nosotros todos, mirando a cara descubierta como en un espejo la gloria del Señor, somos transformados de gloria en gloria en la misma imagen, como por el Espíritu del Señor.",
              },
              {
                citation: "2 Corintios 7:1",
                text: "Así que, amados, puesto que tenemos tales promesas, limpiémonos de toda contaminación de carne y de espíritu, perfeccionando la santidad en el temor de Dios.",
              },
            ],
          },
        ],
      },
    ],
  },
  // Chapter 14: De la Fe Salvadora
  {
    id: 14,
    title: "De la Fe Salvadora",
    paragraphs: [
      {
        number: 1,
        segments: [
          {
            text: "La gracia de la fe, mediante el cual se habilitan los elegidos para creer para la salvación de sus almas, es la obra del Espíritu de Cristo en sus corazones, y está ordinariamente causada por el ministerio de la Palabra;",
            referenceId: "1a",
          },
          {
            text: "por la cual, y por la administración del bautismo y la cena del Señor, la oración, y otros medios designados por Dios, se incrementa y fortalece.",
            referenceId: "1b",
          },
        ],
        references: [
          {
            id: "1a",
            citations: [
              {
                citation: "2 Corintios 4:13",
                text: "Pero teniendo el mismo espíritu de fe, conforme a lo que está escrito: Creí, por lo cual hablé, nosotros también creemos, por lo cual también hablamos,",
              },
              {
                citation: "Efesios 2:8",
                text: "Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios;",
              },
            ],
          },
          {
            id: "1b",
            citations: [
              {
                citation: "Romanos 10:14, 17",
                text: "¿Cómo, pues, invocarán a aquel en el cual no han creído? ¿Y cómo creerán en aquel de quien no han oído? ¿Y cómo oirán sin haber quien les predique? [...] Así que la fe es por el oír, y el oír, por la palabra de Dios.",
              },
              {
                citation: "Lucas 17:5",
                text: "Dijeron los apóstoles al Señor: Auméntanos la fe.",
              },
              {
                citation: "1 Pedro 2:2",
                text: "desead, como niños recién nacidos, la leche espiritual no adulterada, para que por ella crezcáis para salvación,",
              },
              {
                citation: "Hechos 20:32",
                text: "Y ahora, hermanos, os encomiendo a Dios, y a la palabra de su gracia, que tiene poder para sobreedificaros y daros herencia con todos los santificados.",
              },
            ],
          },
        ],
      },
      {
        number: 2,
        segments: [
          {
            text: "Por esta fe el cristiano cree que es verdad todo lo que es revelado en la Palabra por la autoridad de Dios mismo, y también percibe en ella una excelencia por encima de todos los demás escritos y todas las cosas en el mundo, ya que da a luz la gloria de Dios en sus atributos, la excelencia de Cristo en su naturaleza y de sus oficios, y el poder y la plenitud del Espíritu Santo en sus obras y operaciones: y de esta forma es cristiano es capacitado para confiar su alma a la verdad así creída;",
            referenceId: "2a",
          },
          {
            text: "y también actúa de manera diferente según sea el contenido de cada pasaje en particular; para obedecer a los mandatos,",
            referenceId: "2b",
          },
          {
            text: "temblando ante las amenazas,",
            referenceId: "2c",
          },
          {
            text: "y abrazando las promesas de Dios para esta vida y lo que está por venir;",
            referenceId: "2d",
          },
          {
            text: "pero los actos principales de la fe salvadora tienen relación inmediata con Cristo, aceptar, recibir, y que descansar sobre Él sólo para la justificación, la santificación, y la vida eterna, en virtud del pacto de gracia.",
            referenceId: "2e",
          },
        ],
        references: [
          {
            id: "2a",
            citations: [
              {
                citation: "Hechos 24:14",
                text: "Pero esto te confieso, que según el Camino que ellos llaman herejía, así sirvo al Dios de mis padres, creyendo todas las cosas que en la ley y en los profetas están escritas;",
              },
              {
                citation: "Salmo 119:72",
                text: "Mejor me es la ley de tu boca Que millares de oro y plata.",
              },
              {
                citation: "Salmo 19:7-10",
                text: "La ley de Jehová es perfecta, que convierte el alma; El testimonio de Jehová es fiel, que hace sabio al sencillo. Los mandamientos de Jehová son rectos, que alegran el corazón; El precepto de Jehová es puro, que alumbra los ojos. El temor de Jehová es limpio, que permanece para siempre; Los juicios de Jehová son verdad, todos justos. Deseables son más que el oro, y más que mucho oro afinado; Y dulces más que miel, y que la que destila del panal.",
              },
              {
                citation: "2 Timoteo 1:12",
                text: "Por lo cual asimismo padezco esto; pero no me avergüenzo, porque yo sé a quién he creído, y estoy seguro que es poderoso para guardar mi depósito para aquel día.",
              },
            ],
          },
          {
            id: "2b",
            citations: [
              {
                citation: "Juan 15:14",
                text: "Vosotros sois mis amigos, si hacéis lo que yo os mando.",
              },
            ],
          },
          {
            id: "2c",
            citations: [
              {
                citation: "Isaías 66:2",
                text: "Mi mano hizo todas estas cosas, y así todas estas cosas fueron, dice Jehová; pero miraré a aquel que es pobre y humilde de espíritu, y que tiembla a mi palabra.",
              },
            ],
          },
          {
            id: "2d",
            citations: [
              {
                citation: "1 Timoteo 4:8",
                text: "porque el ejercicio corporal para poco es provechoso, pero la piedad para todo aprovecha, pues tiene promesa de esta vida presente, y de la venidera.",
              },
              {
                citation: "Hebreos 11:13",
                text: "Conforme a la fe murieron todos éstos sin haber recibido lo prometido, sino mirándolo de lejos, y creyéndolo, y saludándolo, y confesando que eran extranjeros y peregrinos sobre la tierra.",
              },
            ],
          },
          {
            id: "2e",
            citations: [
              {
                citation: "Juan 1:12",
                text: "Mas a todos los que le recibieron, a los que creen en su nombre, les dio potestad de ser hechos hijos de Dios;",
              },
              {
                citation: "Hechos 16:31",
                text: "Ellos dijeron: Cree en el Señor Jesucristo, y serás salvo, tú y tu casa.",
              },
              {
                citation: "Gálatas 2:20",
                text: "Con Cristo estoy juntamente crucificado, y ya no vivo yo, mas vive Cristo en mí; y lo que ahora vivo en la carne, lo vivo en la fe del Hijo de Dios, el cual me amó y se entregó a sí mismo por mí.",
              },
              {
                citation: "Hechos 15:11",
                text: "Antes creemos que por la gracia del Señor Jesús seremos salvos, de igual modo que ellos.",
              },
            ],
          },
        ],
      },
      {
        number: 3,
        segments: [
          {
            text: "Esta fe, aunque sea diferente en grados, y puede ser débil o fuerte,",
            referenceId: "3a",
          },
          {
            text: "sin embargo, es en lo más mínimo de ella diferente en el tipo o naturaleza de la misma, (como lo es toda otra gracia salvadora,) de la fe y la gracia común de creyentes temporales;",
            referenceId: "3b",
          },
          {
            text: "y por lo tanto, aunque puede ser muchas veces atacada y debilitada, sin embargo obtiene la victoria,",
            referenceId: "3c",
          },
          {
            text: "que crece en muchos a la consecución de una plena seguridad a través de Cristo,",
            referenceId: "3d",
          },
          {
            text: "que es a la vez el autor y consumador de nuestra fe.",
            referenceId: "3e",
          },
        ],
        references: [
          {
            id: "3a",
            citations: [
              {
                citation: "Hebreos 5:13-14",
                text: "Y todo aquel que participa de la leche es inexperto en la palabra de justicia, porque es niño; pero el alimento sólido es para los que han alcanzado madurez, para los que por el uso tienen los sentidos ejercitados en el discernimiento del bien y del mal.",
              },
              {
                citation: "Mateo 6:30",
                text: "Y si la hierba del campo que hoy es, y mañana se echa en el horno, Dios la viste así, ¿no hará mucho más a vosotros, hombres de poca fe?",
              },
              {
                citation: "Romanos 4:19-20",
                text: "Y no se debilitó en la fe al considerar su cuerpo, que estaba ya como muerto (siendo de casi cien años), o la esterilidad de la matriz de Sara. Tampoco dudó, por incredulidad, de la promesa de Dios, sino que se fortaleció en fe, dando gloria a Dios,",
              },
            ],
          },
          {
            id: "3b",
            citations: [
              {
                citation: "2 Pedro 1:1",
                text: "Simón Pedro, siervo y apóstol de Jesucristo, a los que habéis alcanzado, por la justicia de nuestro Dios y Salvador Jesucristo, una fe igualmente preciosa que la nuestra:",
              },
            ],
          },
          {
            id: "3c",
            citations: [
              {
                citation: "Efesios 6:16",
                text: "Sobre todo, tomad el escudo de la fe, con que podáis apagar todos los dardos de fuego del maligno.",
              },
              {
                citation: "1 Juan 5:4-5",
                text: "Porque todo lo que es nacido de Dios vence al mundo; y esta es la victoria que ha vencido al mundo, nuestra fe. ¿Quién es el que vence al mundo, sino el que cree que Jesús es el Hijo de Dios?",
              },
            ],
          },
          {
            id: "3d",
            citations: [
              {
                citation: "Hebreos 6:11-12",
                text: "Pero deseamos que cada uno de vosotros muestre la misma solicitud hasta el fin, para plena certeza de la esperanza, a fin de que no os hagáis perezosos, sino imitadores de aquellos que por la fe y la paciencia heredan las promesas.",
              },
              {
                citation: "Colosenses 2:2",
                text: "para que sean consolados sus corazones, unidos en amor, hasta alcanzar todas las riquezas de pleno entendimiento, a fin de conocer el misterio de Dios el Padre, y de Cristo,",
              },
            ],
          },
          {
            id: "3e",
            citations: [
              {
                citation: "Hebreos 12:2",
                text: "puestos los ojos en Jesús, el autor y consumador de la fe, el cual por el gozo puesto delante de él sufrió la cruz, menospreciando el oprobio, y se sentó a la diestra del trono de Dios.",
              },
            ],
          },
        ],
      },
    ],
  },
  // Chapter 15: Del Arrepentimiento Para Vida y Salvación
  {
    id: 15,
    title: "Del Arrepentimiento Para Vida y Salvación",
    paragraphs: [
      {
        number: 1,
        segments: [
          {
            text: "Aquellos de los elegidos que se convierten en años más maduros, habiendo vivido por algún tiempo en el estado de la naturaleza, y en esto habiendo servido a concupiscencias y deleites diversos, Dios en su llamamiento eficaz les da arrepentimiento para vida.",
            referenceId: "1a",
          },
        ],
        references: [
          {
            id: "1a",
            citations: [
              {
                citation: "Tito 3:2-5",
                text: "Que no difamen a nadie, que no sean pendencieros, sino amables, mostrando toda mansedumbre para con todos los hombres. Porque nosotros también éramos en otro tiempo insensatos, rebeldes, extraviados, esclavos de concupiscencias y deleites diversos, viviendo en malicia y envidia, aborrecibles, y aborreciéndonos unos a otros. Pero cuando se manifestó la bondad de Dios nuestro Salvador, y su amor para con los hombres, nos salvó, no por obras de justicia que nosotros hubiéramos hecho, sino por su misericordia, por el lavamiento de la regeneración y por la renovación en el Espíritu Santo,",
              },
            ],
          },
        ],
      },
      {
        number: 2,
        segments: [
          {
            text: "Mientras que no hay ninguno que hace bien y no peque,",
            referenceId: "2a",
          },
          {
            text: "y lo mejor de los hombres puede, a través del poder y el engaño de la corrupción que habita en ellos, con la prevalencia de la tentación, caen en grandes pecados y provocaciones;",
            referenceId: "2b",
          },
          {
            text: "Dios, en el pacto de gracia, ha provisto misericordiosamente que los creyentes que pequen y caigan de esta manera sean renovados mediante el arrepentimiento para salvación.",
            referenceId: "2c",
          },
        ],
        references: [
          {
            id: "2a",
            citations: [
              {
                citation: "Eclesiastés 7:20",
                text: "Ciertamente no hay hombre justo en la tierra, que haga el bien y nunca peque.",
              },
            ],
          },
          {
            id: "2b",
            citations: [
              {
                citation: "Lucas 22:31-32",
                text: "Dijo también el Señor: Simón, Simón, he aquí Satanás os ha pedido para zarandearos como a trigo; pero yo he rogado por ti, que tu fe no falte; y tú, una vez vuelto, confirma a tus hermanos.",
              },
            ],
          },
          {
            id: "2c",
            citations: [
              {
                citation: "Lucas 22:32",
                text: "pero yo he rogado por ti, que tu fe no falte; y tú, una vez vuelto, confirma a tus hermanos.",
              },
            ],
          },
        ],
      },
      {
        number: 3,
        segments: [
          {
            text: "Este arrepentimiento salvador es una gracia evangélica,",
            referenceId: "3a",
          },
          {
            text: "por el cual una persona, a quien el Espíritu Santo hizo sensible a los múltiples males de su pecado,",
            referenceId: "3b",
          },
          {
            text: "por la fe en Cristo,",
            referenceId: "3c",
          },
          {
            text: "se humilla a sí mismo por él con tristeza que es según Dios, abominación de él, y aborrecimiento de sí mismo, orando por el perdón y la fuerza de la gracia,",
            referenceId: "3d",
          },
          {
            text: "con el propósito y esfuerzo, por el suministro del Espíritu, de andar delante de Dios para agradarle en todo.",
            referenceId: "3e",
          },
        ],
        references: [
          {
            id: "3a",
            citations: [
              {
                citation: "Zacarías 12:10",
                text: "Y derramaré sobre la casa de David, y sobre los moradores de Jerusalén, espíritu de gracia y de oración; y mirarán a mí, a quien traspasaron, y llorarán como se llora por hijo unigénito, afligiéndose por él como quien se aflige por el primogénito.",
              },
            ],
          },
          {
            id: "3b",
            citations: [
              {
                citation: "Hechos 11:18",
                text: "Entonces, oídas estas cosas, callaron, y glorificaron a Dios, diciendo: ¡De manera que también a los gentiles ha dado Dios arrepentimiento para vida!",
              },
            ],
          },
          {
            id: "3c",
            citations: [
              {
                citation: "Ezequiel 36:31",
                text: "Y os acordaréis de vuestros malos caminos, y de vuestras obras que no fueron buenas; y os avergonzaréis de vosotros mismos por vuestras iniquidades y por vuestras abominaciones.",
              },
            ],
          },
          {
            id: "3d",
            citations: [
              {
                citation: "2 Corintios 7:11",
                text: "Porque he aquí, esto mismo de que hayáis sido contristados según Dios, ¡qué solicitud produjo en vosotros, qué defensa, qué indignación, qué temor, qué ardiente afecto, qué celo, y qué vindicación! En todo os habéis mostrado limpios en el asunto.",
              },
            ],
          },
          {
            id: "3e",
            citations: [
              {
                citation: "Salmo 119:6, 128",
                text: "Entonces no sería yo avergonzado, Cuando atendiese a todos tus mandamientos. [...] Por eso estimé rectos todos tus mandamientos sobre todas las cosas, Y aborrecí todo camino de mentira.",
              },
            ],
          },
        ],
      },
      {
        number: 4,
        segments: [
          {
            text: "Como el arrepentimiento debe ser continuado a través de todo el curso de nuestras vidas, debido al cuerpo de muerte, y a sus inclinaciones, es por tanto deber de todos los hombres arrepentirse específicamente de sus pecados concretos conocidos.",
            referenceId: "4a",
          },
        ],
        references: [
          {
            id: "4a",
            citations: [
              {
                citation: "Lucas 19:8",
                text: "Entonces Zaqueo, puesto en pie, dijo al Señor: He aquí, Señor, la mitad de mis bienes doy a los pobres; y si en algo he defraudado a alguno, se lo devuelvo cuadruplicado.",
              },
              {
                citation: "1 Timoteo 1:13, 15",
                text: "habiendo yo sido antes blasfemo, perseguidor e injuriador; mas fui recibido a misericordia porque lo hice por ignorancia, en incredulidad. [...] Palabra fiel y digna de ser recibida por todos: que Cristo Jesús vino al mundo para salvar a los pecadores, de los cuales yo soy el primero.",
              },
            ],
          },
        ],
      },
      {
        number: 5,
        segments: [
          {
            text: "Tal es la provisión que Dios ha hecho por medio de Cristo en el pacto de la gracia para la preservación de los creyentes para la salvación; que aunque no hay pecado tan pequeño que no merezca condena;",
            referenceId: "5a",
          },
          {
            text: "sin embargo no hay pecado tan grande que traerá condenación sobre aquellos que se arrepienten; lo que hace que la constante predicación del arrepentimiento sea necesario.",
            referenceId: "5b",
          },
        ],
        references: [
          {
            id: "5a",
            citations: [
              {
                citation: "Romanos 6:23",
                text: "Porque la paga del pecado es muerte, mas la dádiva de Dios es vida eterna en Cristo Jesús Señor nuestro.",
              },
            ],
          },
          {
            id: "5b",
            citations: [
              {
                citation: "Isaías 1:16-18",
                text: "Lavaos y limpiaos; quitad la iniquidad de vuestras obras de delante de mis ojos; dejad de hacer lo malo; aprended a hacer el bien; buscad el juicio, restituid al agraviado, haced justicia al huérfano, amparad a la viuda. Venid luego, dice Jehová, y estemos a cuenta: si vuestros pecados fueren como la grana, como la nieve serán emblanquecidos; si fueren rojos como el carmesí, vendrán a ser como blanca lana.",
              },
              {
                citation: "Isaías 55:7",
                text: "Deje el impío su camino, y el hombre inicuo sus pensamientos, y vuélvase a Jehová, el cual tendrá de él misericordia, y al Dios nuestro, el cual será amplio en perdonar.",
              },
            ],
          },
        ],
      },
    ],
  },
  // Chapter 16: De las Buenas Obras
  {
    id: 16,
    title: "De las Buenas Obras",
    paragraphs: [
      {
        number: 1,
        segments: [
          {
            text: "Las buenas obras son solamente las que Dios ha ordenado en su Santa Palabra,",
            referenceId: "1a",
          },
          {
            text: "y no las que sin la autoridad de ésta han inventado los hombres por un fervor ciego, o sobre cualquier pretensión de buenas intenciones.",
            referenceId: "1b",
          },
        ],
        references: [
          {
            id: "1a",
            citations: [
              {
                citation: "Miqueas 6:8",
                text: "Oh hombre, él te ha declarado lo que es bueno, y qué pide Jehová de ti: solamente hacer justicia, y amar misericordia, y humillarte ante tu Dios.",
              },
              {
                citation: "Hebreos 13:21",
                text: "os haga aptos en toda obra buena para que hagáis su voluntad, haciendo él en vosotros lo que es agradable delante de él por Jesucristo; al cual sea la gloria por los siglos de los siglos. Amén.",
              },
            ],
          },
          {
            id: "1b",
            citations: [
              {
                citation: "Mateo 15:9",
                text: "Pues en vano me honran, Enseñando como doctrinas, mandamientos de hombres.",
              },
              {
                citation: "Isaías 29:13",
                text: "Dice, pues, el Señor: Porque este pueblo se acerca a mí con su boca, y con sus labios me honra, pero su corazón está lejos de mí, y su temor de mí no es más que un mandamiento de hombres que les ha sido enseñado;",
              },
            ],
          },
        ],
      },
      {
        number: 2,
        segments: [
          {
            text: "Estas buenas obras, hechas en obediencia a los mandamientos de Dios, son los frutos y evidencias de una fe viva y verdadera;",
            referenceId: "2a",
          },
          {
            text: "y por ellas los creyentes manifiestan su gratitud,",
            referenceId: "2b",
          },
          {
            text: "fortalecen su seguridad,",
            referenceId: "2c",
          },
          {
            text: "edifican a sus hermanos,",
            referenceId: "2d",
          },
          {
            text: "adornan la profesión del evangelio,",
            referenceId: "2e",
          },
          {
            text: "cierran las bocas de los adversarios,",
            referenceId: "2f",
          },
          {
            text: "y glorifican a Dios, cuya mano de obra que son, creados en Cristo Jesús para ello,",
            referenceId: "2g",
          },
          {
            text: "para que teniendo por fruto la santificación puede tener como fin la vida eterna.",
            referenceId: "2h",
          },
        ],
        references: [
          {
            id: "2a",
            citations: [
              {
                citation: "Santiago 2:18, 22",
                text: "Pero alguno dirá: Tú tienes fe, y yo tengo obras. Muéstrame tu fe sin tus obras, y yo te mostraré mi fe por mis obras. [...] ¿No ves que la fe actuó juntamente con sus obras, y que la fe se perfeccionó por las obras?",
              },
            ],
          },
          {
            id: "2b",
            citations: [
              {
                citation: "Salmo 116:12-13",
                text: "¿Qué pagaré a Jehová Por todos sus beneficios para conmigo? Tomaré la copa de la salvación, E invocaré el nombre de Jehová.",
              },
            ],
          },
          {
            id: "2c",
            citations: [
              {
                citation: "1 Juan 2:3, 5",
                text: "Y en esto sabemos que nosotros le conocemos, si guardamos sus mandamientos. [...] pero el que guarda su palabra, en éste verdaderamente el amor de Dios se ha perfeccionado; por esto sabemos que estamos en él.",
              },
              {
                citation: "2 Pedro 1:5-11",
                text: "vosotros también, poniendo toda diligencia por esto mismo, añadid a vuestra fe virtud; a la virtud, conocimiento; [...] Porque de esta manera os será otorgada amplia y generosa entrada en el reino eterno de nuestro Señor y Salvador Jesucristo.",
              },
            ],
          },
          {
            id: "2d",
            citations: [
              {
                citation: "Mateo 5:16",
                text: "Así alumbre vuestra luz delante de los hombres, para que vean vuestras buenas obras, y glorifiquen a vuestro Padre que está en los cielos.",
              },
            ],
          },
          {
            id: "2e",
            citations: [
              {
                citation: "1 Timoteo 6:1",
                text: "Todos los que están bajo el yugo de esclavitud, tengan a sus amos por dignos de todo honor, para que no sea blasfemado el nombre de Dios y la doctrina.",
              },
            ],
          },
          {
            id: "2f",
            citations: [
              {
                citation: "1 Pedro 2:15",
                text: "Porque esta es la voluntad de Dios: que haciendo bien, hagáis callar la ignorancia de los hombres insensatos;",
              },
            ],
          },
          {
            id: "2g",
            citations: [
              {
                citation: "Filipenses 1:11",
                text: "llenos de frutos de justicia que son por medio de Jesucristo, para gloria y alabanza de Dios.",
              },
              {
                citation: "Efesios 2:10",
                text: "Porque somos hechura suya, creados en Cristo Jesús para buenas obras, las cuales Dios preparó de antemano para que anduviésemos en ellas.",
              },
            ],
          },
          {
            id: "2h",
            citations: [
              {
                citation: "Romanos 6:22",
                text: "Mas ahora que habéis sido libertados del pecado y hechos siervos de Dios, tenéis por vuestro fruto la santificación, y como fin, la vida eterna.",
              },
            ],
          },
        ],
      },
      {
        number: 3,
        segments: [
          {
            text: "Su capacidad para hacer buenas obras no es en absoluto de ellos mismos, sino completamente del Espíritu de Cristo; y para que la ellos les sea posible, además de las gracias que han recibido ya, se necesita una influencia real del mismo Espíritu Santo, para trabajan en ellos el querer como el hacer por su buena voluntad;",
            referenceId: "3a",
          },
          {
            text: "sin embargo no deben volverse negligentes por ello, como si ellos no estaban obligados a desempeñar cualquier deber a menos que mediante un impulso especial del Espíritu, sino que deben ser diligentes en avivar la gracia de Dios que está en ellos.",
            referenceId: "3b",
          },
        ],
        references: [
          {
            id: "3a",
            citations: [
              {
                citation: "Juan 15:4-5",
                text: "Permaneced en mí, y yo en vosotros. Como el pámpano no puede llevar fruto por sí mismo, si no permanece en la vid, así tampoco vosotros, si no permanecéis en mí. Yo soy la vid, vosotros los pámpanos; el que permanece en mí, y yo en él, éste lleva mucho fruto; porque separados de mí nada podéis hacer.",
              },
              {
                citation: "2 Corintios 3:5",
                text: "no que seamos competentes por nosotros mismos para pensar algo como de nosotros mismos, sino que nuestra competencia proviene de Dios,",
              },
              {
                citation: "Filipenses 2:13",
                text: "porque Dios es el que en vosotros produce así el querer como el hacer, por su buena voluntad.",
              },
            ],
          },
          {
            id: "3b",
            citations: [
              {
                citation: "Filipenses 2:12",
                text: "Por tanto, amados míos, como siempre habéis obedecido, no como en mi presencia solamente, sino mucho más ahora en mi ausencia, ocupaos en vuestra salvación con temor y temblor,",
              },
              {
                citation: "Hebreos 6:11-12",
                text: "Pero deseamos que cada uno de vosotros muestre la misma solicitud hasta el fin, para plena certeza de la esperanza, a fin de que no os hagáis perezosos, sino imitadores de aquellos que por la fe y la paciencia heredan las promesas.",
              },
              {
                citation: "Isaías 64:7",
                text: "Nadie hay que invoque tu nombre, que se despierte para apoyarse en ti; por lo cual escondiste de nosotros tu rostro, y nos dejaste marchitar en poder de nuestras maldades.",
              },
            ],
          },
        ],
      },
      {
        number: 4,
        segments: [
          {
            text: "Quienes en su obediencia alcanzan el mayor grado que sea posible en esta vida, están tan lejos de llegar a un grado de supererogación, y de hacer más de lo que Dios requiere, que no llegan a mucho más que por deber están obligados a hacer.",
            referenceId: "4a",
          },
        ],
        references: [
          {
            id: "4a",
            citations: [
              {
                citation: "Job 9:2-3",
                text: "Ciertamente yo sé que es así; ¿Y cómo se justificará el hombre con Dios? Si quisiere contender con él, No le podrá responder a una cosa entre mil.",
              },
              {
                citation: "Gálatas 5:17",
                text: "Porque el deseo de la carne es contra el Espíritu, y el del Espíritu es contra la carne; y éstos se oponen entre sí, para que no hagáis lo que quisiereis.",
              },
              {
                citation: "Lucas 17:10",
                text: "Así también vosotros, cuando hayáis hecho todo lo que os ha sido ordenado, decid: Siervos inútiles somos, pues lo que debíamos hacer, hicimos.",
              },
            ],
          },
        ],
      },
      {
        number: 5,
        segments: [
          {
            text: "No podemos por nuestras mejores obras merecer el perdón del pecado o la vida eterna de la mano de Dios, en razón de la gran desproporción que existe entre ellos y la gloria por venir,",
            referenceId: "5a",
          },
          {
            text: "y la distancia infinita que hay entre nosotros y Dios, a quien no podemos beneficiar por dichas obras ni satisfacer la deuda de nuestros pecados anteriores, pero cuando hemos hecho todo lo posible, no hemos hecho más que nuestro deber y somos siervos inútiles;",
            referenceId: "5b",
          },
          {
            text: "y tanto en cuanto que son buenas proceden de su Espíritu,",
            referenceId: "5c",
          },
          {
            text: "y en cuanto son hechas por nosotros son impuras y contaminadas con tanta debilidad e imperfección, que no pueden soportar la severidad del castigo de Dios.",
            referenceId: "5d",
          },
        ],
        references: [
          {
            id: "5a",
            citations: [
              {
                citation: "Romanos 3:20",
                text: "ya que por las obras de la ley ningún ser humano será justificado delante de él; porque por medio de la ley es el conocimiento del pecado.",
              },
            ],
          },
          {
            id: "5b",
            citations: [
              {
                citation: "Efesios 2:8-9",
                text: "Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios; no por obras, para que nadie se gloríe.",
              },
              {
                citation: "Romanos 4:6",
                text: "Como también David habla de la bienaventuranza del hombre a quien Dios atribuye justicia sin obras,",
              },
            ],
          },
          {
            id: "5c",
            citations: [
              {
                citation: "Gálatas 5:22-23",
                text: "Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre, templanza; contra tales cosas no hay ley.",
              },
            ],
          },
          {
            id: "5d",
            citations: [
              {
                citation: "Isaías 64:6",
                text: "Si bien todos nosotros somos como suciedad, y todas nuestras justicias como trapo de inmundicia; y caímos todos nosotros como la hoja, y nuestras maldades nos llevaron como viento.",
              },
              {
                citation: "Salmo 143:2",
                text: "Y no entres en juicio con tu siervo; Porque no se justificará delante de ti ningún ser humano.",
              },
            ],
          },
        ],
      },
      {
        number: 6,
        segments: [
          {
            text: "Sin embargo por ser aceptadas las personas de los creyentes a través de Cristo, sus buenas obras también son aceptadas en Él;",
            referenceId: "6a",
          },
          {
            text: "no como si fueran en esta vida enteramente irreprochables e irreprensibles a la vista de Dios,",
            referenceId: "6b",
          },
          {
            text: "sino que a Él, mirándolas en su Hijo, le complace aceptar y recompensar lo que es sincero, aunque esté acompañado de muchas debilidades e imperfecciones.",
            referenceId: "6c",
          },
        ],
        references: [
          {
            id: "6a",
            citations: [
              {
                citation: "Efesios 1:6",
                text: "para alabanza de la gloria de su gracia, con la cual nos hizo aceptos en el Amado,",
              },
              {
                citation: "1 Pedro 2:5",
                text: "vosotros también, como piedras vivas, sed edificados como casa espiritual y sacerdocio santo, para ofrecer sacrificios espirituales aceptables a Dios por medio de Jesucristo.",
              },
            ],
          },
          {
            id: "6b",
            citations: [
              {
                citation: "Mateo 25:21, 23",
                text: "Y su señor le dijo: Bien, buen siervo y fiel; sobre poco has sido fiel, sobre mucho te pondré; entra en el gozo de tu señor. [...] Su señor le dijo: Bien, buen siervo y fiel; sobre poco has sido fiel, sobre mucho te pondré; entra en el gozo de tu señor.",
              },
            ],
          },
          {
            id: "6c",
            citations: [
              {
                citation: "Hebreos 6:10",
                text: "Porque Dios no es injusto para olvidar vuestra obra y el trabajo de amor que habéis mostrado hacia su nombre, habiendo servido a los santos y sirviéndoles aún.",
              },
            ],
          },
        ],
      },
      {
        number: 7,
        segments: [
          {
            text: "Las obras hechas por hombres no regenerados, a pesar de que el asunto de ellas pueden ser cosas que Dios ordena, y de utilidad tanto para ellos mismos y de los demás;",
            referenceId: "7a",
          },
          {
            text: "sin embargo, debido a que no proceden de un corazón purificado por la fe,",
            referenceId: "7b",
          },
          {
            text: "ni se hacen de una manera correcta de acuerdo a la Palabra,",
            referenceId: "7c",
          },
          {
            text: "ni para un fin correcto, la gloria de Dios,",
            referenceId: "7d",
          },
          {
            text: "son por lo tanto pecaminosas, y no pueden agradar a Dios, ni hacer a un hombre digno de recibir la gracia de Dios,",
            referenceId: "7e",
          },
          {
            text: "y sin embargo su abandono de ellas es más pecaminoso y desagradable a Dios.",
            referenceId: "7f",
          },
        ],
        references: [
          {
            id: "7a",
            citations: [
              {
                citation: "2 Reyes 10:30",
                text: "Y Jehová dijo a Jehú: Por cuanto has hecho bien ejecutando lo recto delante de mis ojos, e hiciste a la casa de Acab conforme a todo lo que estaba en mi corazón, tus hijos se sentarán sobre el trono de Israel hasta la cuarta generación.",
              },
              {
                citation: "1 Reyes 21:27, 29",
                text: "Y sucedió que cuando Acab oyó estas palabras, rasgó sus vestidos y puso cilicio sobre su carne, y ayunó, y durmió en cilicio, y anduvo humillado. [...] ¿No has visto cómo Acab se ha humillado delante de mí? Pues por cuanto se ha humillado delante de mí, no traeré el mal en sus días; en los días de su hijo traeré el mal sobre su casa.",
              },
            ],
          },
          {
            id: "7b",
            citations: [
              {
                citation: "Gálatas 4:5",
                text: "para que redimiese a los que estaban bajo la ley, a fin de que recibiésemos la adopción de hijos.",
              },
              {
                citation: "Hebreos 11:4, 6",
                text: "Por la fe Abel ofreció a Dios más excelente sacrificio que Caín, por lo cual alcanzó testimonio de que era justo, dando Dios testimonio de sus ofrendas; y muerto, aún habla por ella. [...] Pero sin fe es imposible agradar a Dios; porque es necesario que el que se acerca a Dios crea que le hay, y que es galardonador de los que le buscan.",
              },
            ],
          },
          {
            id: "7c",
            citations: [
              {
                citation: "1 Corintios 13:3",
                text: "Y si repartiese todos mis bienes para dar de comer a los pobres, y si entregase mi cuerpo para ser quemado, y no tengo amor, de nada me sirve.",
              },
            ],
          },
          {
            id: "7d",
            citations: [
              {
                citation: "Mateo 6:2, 5",
                text: "Cuando, pues, des limosna, no hagas tocar trompeta delante de ti, como hacen los hipócritas en las sinagogas y en las calles, para ser alabados por los hombres; de cierto os digo que ya tienen su recompensa. [...] Y cuando ores, no seas como los hipócritas; porque ellos aman el orar en pie en las sinagogas y en las esquinas de las calles, para ser vistos de los hombres; de cierto os digo que ya tienen su recompensa.",
              },
              {
                citation: "Amós 5:21-22",
                text: "Aborrecí, abominé vuestras solemnidades, y no me complaceré en vuestras asambleas. Y si me ofreciereis vuestros holocaustos y vuestras ofrendas, no los recibiré, ni miraré a las ofrendas de paz de vuestros animales engordados.",
              },
            ],
          },
          {
            id: "7e",
            citations: [
              {
                citation: "Romanos 9:16",
                text: "Así que no depende del que quiere, ni del que corre, sino de Dios que tiene misericordia.",
              },
              {
                citation: "Tito 3:5",
                text: "nos salvó, no por obras de justicia que nosotros hubiéramos hecho, sino por su misericordia, por el lavamiento de la regeneración y por la renovación en el Espíritu Santo,",
              },
            ],
          },
          {
            id: "7f",
            citations: [
              {
                citation: "Job 21:14-15",
                text: "Dicen, pues, a Dios: Apártate de nosotros, Porque no queremos el conocimiento de tus caminos. ¿Quién es el Todopoderoso, para que le sirvamos? ¿Y de qué nos aprovechará que oremos a él?",
              },
              {
                citation: "Mateo 25:41-43",
                text: "Entonces dirá también a los de la izquierda: Apartaos de mí, malditos, al fuego eterno preparado para el diablo y sus ángeles. Porque tuve hambre, y no me disteis de comer; tuve sed, y no me disteis de beber; fui forastero, y no me recogisteis; estuve desnudo, y no me cubristeis; enfermo, y en la cárcel, y no me visitasteis.",
              },
            ],
          },
        ],
      },
    ],
  },
  // Chapter 17: De la Perseverancia de los Santos
  {
    id: 17,
    title: "De la Perseverancia de los Santos",
    paragraphs: [
      {
        number: 1,
        segments: [
          {
            text: "Aquellos a quienes Dios ha aceptado en el amado, llamado eficazmente y santificado por su Espíritu, y ha dado la preciosa fe a sus elegidos, no pueden ni total ni finalmente caer del estado de gracia, pero sin duda perseverarán hasta el fin, y serán eternamente salvos, puesto que los dones y el llamamiento de Dios son irrevocables, de donde se engendra y sustenta todavía en ellos la fe, arrepentimiento, amor, gozo, esperanza, y todas las gracias del Espíritu para inmortalidad;",
            referenceId: "1a",
          },
          {
            text: "y aunque surjan y les azoten muchas tormentas e inundaciones, nunca podrán, sin embargo ser capaz de llevarlos fuera del fundamento y la roca a que por la fe están aferrados; no obstante, por la incredulidad y las tentaciones de Satanás, la visión sensible de la luz y el amor de Dios puede por un tiempo ser nublada y obscurecérseles,",
            referenceId: "1b",
          },
          {
            text: "sin embargo Él sigue siendo el mismo, y ellos serán guardados sin duda alguna por el poder de Dios para salvación, donde gozarán de la posesión adquirida, estando ellos grabados en la palma de sus manos, y de haber sido escrito sus nombres en el libro de la vida desde toda la eternidad.",
            referenceId: "1c",
          },
        ],
        references: [
          {
            id: "1a",
            citations: [
              {
                citation: "Juan 10:28-29",
                text: "y yo les doy vida eterna; y no perecerán jamás, ni nadie las arrebatará de mi mano. Mi Padre que me las dio, es mayor que todos, y nadie las puede arrebatar de la mano de mi Padre.",
              },
              {
                citation: "Filipenses 1:6",
                text: "estando persuadido de esto, que el que comenzó en vosotros la buena obra, la perfeccionará hasta el día de Jesucristo;",
              },
              {
                citation: "2 Timoteo 2:19",
                text: "Pero el fundamento de Dios está firme, teniendo este sello: Conoce el Señor a los que son suyos; y: Apártese de iniquidad todo aquel que invoca el nombre de Cristo.",
              },
              {
                citation: "1 Juan 2:19",
                text: "Salieron de nosotros, pero no eran de nosotros; porque si hubiesen sido de nosotros, habrían permanecido con nosotros; pero salieron para que se manifestase que no todos son de nosotros.",
              },
            ],
          },
          {
            id: "1b",
            citations: [
              {
                citation: "Salmo 89:31-32",
                text: "Si profanaren mis estatutos, Y no guardaren mis mandamientos, Entonces castigaré con vara su rebelión, Y con azotes sus iniquidades.",
              },
              {
                citation: "1 Corintios 11:32",
                text: "Mas siendo juzgados, somos castigados por el Señor, para que no seamos condenados con el mundo.",
              },
            ],
          },
          {
            id: "1c",
            citations: [
              {
                citation: "Malaquías 3:6",
                text: "Porque yo Jehová no cambio; por esto, hijos de Jacob, no habéis sido consumidos.",
              },
            ],
          },
        ],
      },
      {
        number: 2,
        segments: [
          {
            text: "Esta perseverancia de los santos no depende de su propio libre albedrío,",
            referenceId: "2a",
          },
          {
            text: "sino de la inmutabilidad del decreto de elección,",
            referenceId: "2b",
          },
          {
            text: "que fluye del amor libre e inmutable de Dios el Padre, sobre la eficacia del mérito y la intercesión de Jesucristo y la unión con Él, el juramento de Dios,",
            referenceId: "2c",
          },
          {
            text: "la morada de su Espíritu, y la semilla de Dios dentro de ellos,",
            referenceId: "2d",
          },
          {
            text: "y la naturaleza del pacto de gracia; de todo lo cual surge también la certeza y la infalibilidad de ello (perseverancia).",
            referenceId: "2e",
          },
        ],
        references: [
          {
            id: "2a",
            citations: [
              {
                citation: "Romanos 9:11",
                text: "(pues no habían aún nacido, ni habían hecho aún ni bien ni mal, para que el propósito de Dios conforme a la elección permaneciese, no por las obras sino por el que llama),",
              },
              {
                citation: "Romanos 9:16",
                text: "Así que no depende del que quiere, ni del que corre, sino de Dios que tiene misericordia.",
              },
              {
                citation: "Romanos 8:30",
                text: "Y a los que predestinó, a éstos también llamó; y a los que llamó, a éstos también justificó; y a los que justificó, a éstos también glorificó.",
              },
            ],
          },

          {
            id: "2b",
            citations: [
              {
                citation: "Romanos 5:9-10",
                text: "Pues mucho más, estando ya justificados en su sangre, por él seremos salvos de la ira. Porque si siendo enemigos, fuimos reconciliados con Dios por la muerte de su Hijo, mucho más, estando reconciliados, seremos salvos por su vida.",
              },
            ],
          },
          {
            id: "2c",
            citations: [
              {
                citation: "Hebreos 6:17-18",
                text: "Por lo cual, queriendo Dios mostrar más abundantemente a los herederos de la promesa la inmutabilidad de su consejo, interpuso juramento; para que por dos cosas inmutables, en las cuales es imposible que Dios mienta, tengamos un fortísimo consuelo los que hemos acudido para asirnos de la esperanza puesta delante de nosotros.",
              },
            ],
          },
          {
            id: "2d",
            citations: [
              {
                citation: "1 Juan 3:9",
                text: "Todo aquel que es nacido de Dios, no practica el pecado, porque la simiente de Dios permanece en él; y no puede pecar, porque es nacido de Dios.",
              },
            ],
          },
          {
            id: "2e",
            citations: [
              {
                citation: "Jeremías 32:40",
                text: "Y haré con ellos pacto eterno, que no me volveré atrás de hacerles bien, y pondré mi temor en el corazón de ellos, para que no se aparten de mí.",
              },
            ],
          },
        ],
      },
      {
        number: 3,
        segments: [
          {
            text: "Y aunque puedan, a través de la tentación de Satanás y del mundo, la prevalencia de la corrupción remanente en ellos, y el descuido de los medios de su preservación, caen en pecados graves, y por un tiempo permanezcan en ellos,",
            referenceId: "3a",
          },
          {
            text: "por el que incurrir en el desagrado de Dios y entristecen el Espíritu Santo,",
            referenceId: "3b",
          },
          {
            text: "ven que sus virtudes y su bienestar dañados,",
            referenceId: "3c",
          },
          {
            text: "se les endurece el corazón, y se les hiere la conciencia,",
            referenceId: "3d",
          },
          {
            text: "lastiman y escandalizan a los demás,",
            referenceId: "3e",
          },
          {
            text: "y se acarrean juicios temporales sobre sí mismos,",
            referenceId: "3f",
          },
          {
            text: "sin embargo renovarán su arrepentimiento y serán preservados mediante la fe en Cristo Jesús hasta el final.",
            referenceId: "3g",
          },
        ],
        references: [
          {
            id: "3a",
            citations: [
              {
                citation: "Mateo 26:70, 72, 74",
                text: "Mas él negó delante de todos, diciendo: No sé lo que dices. [...] Pero él negó otra vez con juramento: No conozco al hombre. [...] Entonces él comenzó a maldecir, y a jurar: No conozco al hombre. Y en seguida cantó el gallo.",
              },
            ],
          },
          {
            id: "3b",
            citations: [
              {
                citation: "Isaías 64:5, 9",
                text: "Saliste al encuentro del que con alegría hacía justicia, de los que se acordaban de ti en tus caminos; he aquí, tú te enojaste porque pecamos; en los pecados hemos perseverado por largo tiempo; ¿podremos acaso ser salvos? [...] No te enojes sobremanera, Jehová, ni tengas perpetua memoria de la iniquidad; he aquí, mira ahora, pueblo tuyo somos todos nosotros.",
              },
              {
                citation: "Efesios 4:30",
                text: "Y no contristéis al Espíritu Santo de Dios, con el cual fuisteis sellados para el día de la redención.",
              },
            ],
          },
          {
            id: "3c",
            citations: [
              {
                citation: "Salmo 51:10, 12",
                text: "Crea en mí, oh Dios, un corazón limpio, Y renueva un espíritu recto dentro de mí. [...] Vuélveme el gozo de tu salvación, Y espíritu noble me sustente.",
              },
            ],
          },
          {
            id: "3d",
            citations: [
              {
                citation: "Salmo 32:3-4",
                text: "Mientras callé, se envejecieron mis huesos En mi gemir todo el día. Porque de día y de noche se agravó sobre mí tu mano; Se volvió mi verdor en sequedades de verano.",
              },
            ],
          },
          {
            id: "3e",
            citations: [
              {
                citation: "2 Samuel 12:14",
                text: "Mas por cuanto con este asunto hiciste blasfemar a los enemigos de Jehová, el hijo que te ha nacido ciertamente morirá.",
              },
            ],
          },
          {
            id: "3f",
            citations: [
              {
                citation: "Génesis 19:30-38",
                text: "Pero Lot subió de Zoar y moró en el monte, y sus dos hijas con él; porque tuvo miedo de quedarse en Zoar, y habitó en una cueva él y sus dos hijas. [...] Así concibieron las dos hijas de Lot de su padre.",
              },
            ],
          },
          {
            id: "3g",
            citations: [
              {
                citation: "Lucas 22:32, 61-62",
                text: "pero yo he rogado por ti, que tu fe no falte; y tú, una vez vuelto, confirma a tus hermanos. [...] Entonces, vuelto el Señor, miró a Pedro; y Pedro se acordó de la palabra del Señor, que le había dicho: Antes que el gallo cante, me negarás tres veces. Y Pedro, saliendo fuera, lloró amargamente.",
              },
            ],
          },
        ],
      },
    ],
  },
  // Chapter 18: De la Seguridad de la Gracia y la Salvación
  {
    id: 18,
    title: "De la Seguridad de la Gracia y la Salvación",
    paragraphs: [
      {
        number: 1,
        segments: [
          {
            text: "Aunque los creyentes temporales, y otros hombres no regenerados, en vano pueden engañarse a sí mismos con falsas esperanzas y presunciones carnales de estar en el favor de Dios y en el estado de la salvación, pero la esperanza de ellos perecerá;",
            referenceId: "1a",
          },
          {
            text: "sin embargo los que verdaderamente creen en el Señor Jesús, y le aman con sinceridad, esforzándose por caminar con toda buena conciencia delante de Él, puede en esta vida estar absolutamente seguros de hallarse en el estado de gracia, y pueden regocijarse en la esperanza de la gloria de Dios, que tal esperanza nunca hará que se avergüencen.",
            referenceId: "1b",
          },
        ],
        references: [
          {
            id: "1a",
            citations: [
              {
                citation: "Job 8:13-14",
                text: "Tales son los caminos de todos los que olvidan a Dios; Y la esperanza del impío perecerá; Porque su esperanza será cortada, Y su confianza es tela de araña.",
              },
              {
                citation: "Mateo 7:22-23",
                text: "Muchos me dirán en aquel día: Señor, Señor, ¿no profetizamos en tu nombre, y en tu nombre echamos fuera demonios, y en tu nombre hicimos muchos milagros? Y entonces les declararé: Nunca os conocí; apartaos de mí, hacedores de maldad.",
              },
            ],
          },
          {
            id: "1b",
            citations: [
              {
                citation: "1 Juan 2:3",
                text: "Y en esto sabemos que nosotros le conocemos, si guardamos sus mandamientos.",
              },
              {
                citation: "1 Juan 3:14, 18-19, 21, 24",
                text: "Nosotros sabemos que hemos pasado de muerte a vida, en que amamos a los hermanos. El que no ama a su hermano, permanece en muerte. [...] Hijitos míos, no amemos de palabra ni de lengua, sino de hecho y en verdad. Y en esto conocemos que somos de la verdad, y aseguraremos nuestros corazones delante de él. [...] Amados, si nuestro corazón no nos reprende, confianza tenemos en Dios; [...] Y el que guarda sus mandamientos, permanece en Dios, y Dios en él. Y en esto sabemos que él permanece en nosotros, por el Espíritu que nos ha dado.",
              },
              {
                citation: "1 Juan 5:13",
                text: "Estas cosas os he escrito a vosotros que creéis en el nombre del Hijo de Dios, para que sepáis que tenéis vida eterna, y para que creáis en el nombre del Hijo de Dios.",
              },
              {
                citation: "Romanos 5:2, 5",
                text: "por quien también tenemos entrada por la fe a esta gracia en la cual estamos firmes, y nos gloriamos en la esperanza de la gloria de Dios. [...] y la esperanza no avergüenza; porque el amor de Dios ha sido derramado en nuestros corazones por el Espíritu Santo que nos fue dado.",
              },
            ],
          },
        ],
      },
      {
        number: 2,
        segments: [
          {
            text: "Esta seguridad no es una mera persuasión conjetural y probable fundada en una esperanza falible, sino que es una seguridad infalible de la fe",
            referenceId: "2a",
          },
          {
            text: "basada en la sangre y la justicia de Cristo reveladas en el Evangelio;",
            referenceId: "2b",
          },
          {
            text: "y también de la evidencia interna de aquellas gracias del Espíritu a las cuales se les hacen promesas,",
            referenceId: "2c",
          },
          {
            text: "y en el testimonio del Espíritu de adopción, dando testimonio a nuestro espíritu que somos hijos de Dios;",
            referenceId: "2d",
          },
          {
            text: "y, como fruto del mismo, manteniendo el corazón humilde y santo.",
            referenceId: "2e",
          },
        ],
        references: [
          {
            id: "2a",
            citations: [
              {
                citation: "Hebreos 6:11, 19",
                text: "Pero deseamos que cada uno de vosotros muestre la misma solicitud hasta el fin, para plena certeza de la esperanza, [...] La cual tenemos como segura y firme ancla del alma, y que penetra hasta dentro del velo,",
              },
            ],
          },
          {
            id: "2b",
            citations: [
              {
                citation: "Hebreos 6:17-18",
                text: "Por lo cual, queriendo Dios mostrar más abundantemente a los herederos de la promesa la inmutabilidad de su consejo, interpuso juramento; para que por dos cosas inmutables, en las cuales es imposible que Dios mienta, tengamos un fortísimo consuelo los que hemos acudido para asirnos de la esperanza puesta delante de nosotros.",
              },
            ],
          },
          {
            id: "2c",
            citations: [
              {
                citation: "2 Pedro 1:4-5, 10-11",
                text: "por medio de las cuales nos ha dado preciosas y grandísimas promesas, para que por ellas llegaseis a ser participantes de la naturaleza divina, habiendo huido de la corrupción que hay en el mundo a causa de la concupiscencia; vosotros también, poniendo toda diligencia por esto mismo, añadid a vuestra fe virtud; [...] Por lo cual, hermanos, tanto más procurad hacer firme vuestra vocación y elección; porque haciendo estas cosas, no caeréis jamás. Porque de esta manera os será otorgada amplia y generosa entrada en el reino eterno de nuestro Señor y Salvador Jesucristo.",
              },
            ],
          },
          {
            id: "2d",
            citations: [
              {
                citation: "Romanos 8:15-16",
                text: "Pues no habéis recibido el espíritu de esclavitud para estar otra vez en temor, sino que habéis recibido el espíritu de adopción, por el cual clamamos: ¡Abba, Padre! El Espíritu mismo da testimonio a nuestro espíritu, de que somos hijos de Dios.",
              },
            ],
          },
          {
            id: "2e",
            citations: [
              {
                citation: "1 Juan 3:1-3",
                text: "Mirad cuál amor nos ha dado el Padre, para que seamos llamados hijos de Dios; por esto el mundo no nos conoce, porque no le conoció a él. Amados, ahora somos hijos de Dios, y aún no se ha manifestado lo que hemos de ser; pero sabemos que cuando él se manifieste, seremos semejantes a él, porque le veremos tal como él es. Y todo aquel que tiene esta esperanza en él, se purifica a sí mismo, así como él es puro.",
              },
            ],
          },
        ],
      },
      {
        number: 3,
        segments: [
          {
            text: "Esta seguridad infalible no pertenece a la esencia de la fe, hasta tal punto que un verdadero creyente no pueda esperar mucho tiempo, y luchar con muchas dificultades antes de que él sea partícipe de ella,",
            referenceId: "3a",
          },
          {
            text: "sin embargo siendo capacitado por el Espíritu para conocer las cosas que le son dadas gratuitamente de Dios, puede, sin una revelación extraordinaria, en el uso correcto de los medios, alcanzar:",
            referenceId: "3b",
          },
          {
            text: "y por lo tanto es el deber de cada uno poner toda diligencia para hacer segura su vocación y elección, para que así su corazón puede ser ampliado en la paz y en el gozo en el Espíritu Santo, en amor y gratitud a Dios, y en la fuerza y la alegría en los deberes de la obediencia, los frutos propios de esta seguridad; - así está muy lejos esta seguridad de inclinar a los hombres a la flojedad.",
            referenceId: "3c",
          },
        ],
        references: [
          {
            id: "3a",
            citations: [
              {
                citation: "Isaías 50:10",
                text: "¿Quién hay entre vosotros que teme a Jehová, y oye la voz de su siervo? El que anda en tinieblas y carece de luz, confíe en el nombre de Jehová, y apóyese en su Dios.",
              },
              {
                citation: "Salmo 88",
                text: "Oh Jehová, Dios de mi salvación, Día y noche clamo delante de ti...",
              },
              {
                citation: "Salmo 77:1-12",
                text: "Con mi voz clamé a Dios, A Dios clamé, y él me escuchará...",
              },
            ],
          },
          {
            id: "3b",
            citations: [
              {
                citation: "1 Juan 4:13",
                text: "En esto conocemos que permanecemos en él, y él en nosotros, en que nos ha dado de su Espíritu.",
              },
              {
                citation: "Hebreos 6:11-12",
                text: "Pero deseamos que cada uno de vosotros muestre la misma solicitud hasta el fin, para plena certeza de la esperanza, a fin de que no os hagáis perezosos, sino imitadores de aquellos que por la fe y la paciencia heredan las promesas.",
              },
              {
                citation: "Romanos 5:1-2, 5",
                text: "Justificados, pues, por la fe, tenemos paz para con Dios por medio de nuestro Señor Jesucristo; por quien también tenemos entrada por la fe a esta gracia en la cual estamos firmes, y nos gloriamos en la esperanza de la gloria de Dios. [...] y la esperanza no avergüenza; porque el amor de Dios ha sido derramado en nuestros corazones por el Espíritu Santo que nos fue dado.",
              },
              {
                citation: "Romanos 14:17",
                text: "porque el reino de Dios no es comida ni bebida, sino justicia, paz y gozo en el Espíritu Santo.",
              },
            ],
          },
          {
            id: "3c",
            citations: [
              {
                citation: "Salmo 119:32",
                text: "Por el camino de tus mandamientos correré, Cuando ensanches mi corazón.",
              },
              {
                citation: "Romanos 6:1-2",
                text: "¿Qué, pues, diremos? ¿Perseveraremos en el pecado para que la gracia abunde? En ninguna manera. Porque los que hemos muerto al pecado, ¿cómo viviremos aún en él?",
              },
              {
                citation: "Tito 2:11-12, 14",
                text: "Porque la gracia de Dios se ha manifestado para salvación a todos los hombres, enseñándonos que, renunciando a la impiedad y a los deseos mundanos, vivamos en este siglo sobria, justa y piadosamente, [...] quien se dio a sí mismo por nosotros para redimirnos de toda iniquidad y purificar para sí un pueblo propio, celoso de buenas obras.",
              },
            ],
          },
        ],
      },
      {
        number: 4,
        segments: [
          {
            text: "Los verdaderos creyentes pueden tener la seguridad de su salvación de diversas formas sacudida, disminuida, o interrumpida; como por la negligencia en la preservación de la misma,",
            referenceId: "4a",
          },
          {
            text: "por caer en algún pecado especial que hiere la conciencia y aflige el Espíritu;",
            referenceId: "4b",
          },
          {
            text: "por alguna tentación repentina o vehemente,",
            referenceId: "4c",
          },
          {
            text: "por retirarles Dios la luz de su rostro, permitiendo incluso a los que le temen a caminar en la oscuridad y que no tengan luz,",
            referenceId: "4d",
          },
          {
            text: "sin embargo nunca quedan destituidos de la semilla de Dios y la vida de fe, de aquel amor de Cristo y de los hermanos, de aquella sinceridad del corazón y la conciencia del deber por los cuales, mediante la operación del Espíritu, esta seguridad puede a su debido tiempo revivida, y por los cuales, entre tanto, son preservados de la desesperación absoluta.",
            referenceId: "4e",
          },
        ],
        references: [
          {
            id: "4a",
            citations: [
              {
                citation: "Cantar de los Cantares 5:2-3, 6",
                text: "Yo dormía, pero mi corazón velaba. Es la voz de mi amado que llama: Ábreme, hermana mía, amiga mía, paloma mía, perfecta mía, Porque mi cabeza está llena de rocío, Mis cabellos de las gotas de la noche. Me he desnudado de mi ropa; ¿cómo me he de vestir? He lavado mis pies; ¿cómo los he de ensuciar? [...] Abrí yo a mi amado; Pero mi amado se había ido, había ya pasado; Y tras su hablar salió mi alma. Lo busqué, y no lo hallé; Lo llamé, y no me respondió.",
              },
            ],
          },
          {
            id: "4b",
            citations: [
              {
                citation: "Salmo 51:8, 12, 14",
                text: "Hazme oír gozo y alegría, Y se recrearán los huesos que has abatido. [...] Vuélveme el gozo de tu salvación, Y espíritu noble me sustente. [...] Líbrame de homicidios, oh Dios, Dios de mi salvación; Cantará mi lengua tu justicia.",
              },
            ],
          },
          {
            id: "4c",
            citations: [
              {
                citation: "Salmo 116:11",
                text: "Y dije en mi apresuramiento: Todo hombre es mentiroso.",
              },
              {
                citation: "Salmo 77:7-8",
                text: "¿Desechará el Señor para siempre, Y no volverá más a sernos propicio? ¿Ha cesado para siempre su misericordia? ¿Se ha acabado perpetuamente su promesa?",
              },
              {
                citation: "Salmo 31:22",
                text: "Decía yo en mi premura: Cortado soy de delante de tus ojos; Pero tú oíste la voz de mis ruegos cuando a ti clamaba.",
              },
            ],
          },
          {
            id: "4d",
            citations: [
              {
                citation: "Salmo 30:7",
                text: "Tú, oh Jehová, por tu benevolencia me afirmaste como monte fuerte. Escondiste tu rostro, fui turbado.",
              },
              {
                citation: "Isaías 50:10",
                text: "¿Quién hay entre vosotros que teme a Jehová, y oye la voz de su siervo? El que anda en tinieblas y carece de luz, confíe en el nombre de Jehová, y apóyese en su Dios.",
              },
            ],
          },
          {
            id: "4e",
            citations: [
              {
                citation: "1 Juan 3:9",
                text: "Todo aquel que es nacido de Dios, no practica el pecado, porque la simiente de Dios permanece en él; y no puede pecar, porque es nacido de Dios.",
              },
              {
                citation: "Lucas 22:32",
                text: "pero yo he rogado por ti, que tu fe no falte; y tú, una vez vuelto, confirma a tus hermanos.",
              },
              {
                citation: "Salmo 42:5, 11",
                text: "¿Por qué te abates, oh alma mía, Y te turbas dentro de mí? Espera en Dios; porque aún he de alabarle, Salvación mía y Dios mío. [...] ¿Por qué te abates, oh alma mía, Y por qué te turbas dentro de mí? Espera en Dios; porque aún he de alabarle, Salvación mía y Dios mío.",
              },
              {
                citation: "Lamentaciones 3:26-31",
                text: "Bueno es esperar en silencio la salvación de Jehová. Bueno le es al hombre llevar el yugo desde su juventud. Que se siente solo y calle, porque es Dios quien se lo impuso; Ponga su boca en el polvo, por si aún hay esperanza; Dé la mejilla al que le hiere, y sea colmado de afrentas. Porque el Señor no desecha para siempre;",
              },
            ],
          },
        ],
      },
    ],
  },
  // Chapter 19: De la Ley de Dios
  {
    id: 19,
    title: "De la Ley de Dios",
    paragraphs: [
      {
        number: 1,
        segments: [
          {
            text: "Dios dio a Adán una ley de obediencia universal escrita en su corazón,",
            referenceId: "1a",
          },
          {
            text: "y un precepto especial de no comer del fruto del árbol del conocimiento del bien y del mal,",
            referenceId: "1b",
          },
          {
            text: "por el cual obligó a él y toda su posteridad a una personal, completa, exacta y perpetua obediencia; prometió la vida por el cumplimiento, y amenazó de muerte la violación de la misma, y le dotó del poder y la capacidad para mantenerlo.",
            referenceId: "1c",
          },
        ],
        references: [
          {
            id: "1a",
            citations: [
              {
                citation: "Génesis 1:27",
                text: "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó.",
              },
            ],
          },
          {
            id: "1b",
            citations: [
              {
                citation: "Eclesiastés 7:29",
                text: "He aquí, solamente esto he hallado: que Dios hizo al hombre recto, pero ellos buscaron muchas perversiones.",
              },
            ],
          },
          {
            id: "1c",
            citations: [
              {
                citation: "Romanos 10:5",
                text: "Porque de la justicia que es por la ley Moisés escribe así: El hombre que haga estas cosas, vivirá por ellas.",
              },
              {
                citation: "Gálatas 3:10, 12",
                text: "Porque todos los que dependen de las obras de la ley están bajo maldición, pues escrito está: Maldito todo aquel que no permaneciere en todas las cosas escritas en el libro de la ley, para hacerlas. [...] Y la ley no es de fe, sino que dice: El que hiciere estas cosas vivirá por ellas.",
              },
            ],
          },
        ],
      },
      {
        number: 2,
        segments: [
          {
            text: "La misma ley que fue escrita por primera vez en el corazón del hombre continuó siendo una regla perfecta de justicia después de la caída, y fue entregada por Dios en el monte de Sinaí,",
            referenceId: "2a",
          },
          {
            text: "en los diez mandamientos, y escrita en dos tablas, los cuatro primeros contienen nuestro deber para con Dios, y los otros seis, tenemos el deber para con el hombre.",
            referenceId: "2b",
          },
        ],
        references: [
          {
            id: "2a",
            citations: [
              {
                citation: "Romanos 2:14-15",
                text: "Porque cuando los gentiles que no tienen ley, hacen por naturaleza lo que es de la ley, éstos, aunque no tengan ley, son ley para sí mismos, mostrando la obra de la ley escrita en sus corazones, dando testimonio su conciencia, y acusándoles o defendiéndoles sus razonamientos.",
              },
            ],
          },
          {
            id: "2b",
            citations: [
              {
                citation: "Deuteronomio 10:4",
                text: "Y escribió en las tablas conforme a la primera escritura, los diez mandamientos que Jehová os había hablado en el monte de en medio del fuego, el día de la asamblea; y me las dio Jehová.",
              },
            ],
          },
        ],
      },
      {
        number: 3,
        segments: [
          {
            text: "Además de esta ley, comúnmente llamada moral, Dios se complace en darle al pueblo de Israel leyes ceremoniales, que contiene varias ordenanzas típicas, en parte, de culto, que prefigura a Cristo, sus gracias, acciones, sufrimientos y beneficios;",
            referenceId: "3a",
          },
          {
            text: "y en parte proponiendo diversas instrucciones sobre los deberes morales,",
            referenceId: "3b",
          },
          {
            text: "todas aquellas leyes ceremoniales estaban prescritas sólo hasta el momento de la reformación, son, por Jesucristo el Mesías verdadero y único legislador, que fue decorado con el poder del Padre para ese fin derogadas y quitadas.",
            referenceId: "3c",
          },
        ],
        references: [
          {
            id: "3a",
            citations: [
              {
                citation: "Hebreos 10:1",
                text: "Porque la ley, teniendo la sombra de los bienes venideros, no la imagen misma de las cosas, nunca puede, por los mismos sacrificios que se ofrecen continuamente cada año, hacer perfectos a los que se acercan.",
              },
              {
                citation: "Colosenses 2:17",
                text: "todo lo cual es sombra de lo que ha de venir; pero el cuerpo es de Cristo.",
              },
            ],
          },
          {
            id: "3b",
            citations: [
              {
                citation: "1 Corintios 5:7",
                text: "Limpiaos, pues, de la vieja levadura, para que seáis nueva masa, sin levadura como sois; porque nuestra pascua, que es Cristo, ya fue sacrificada por nosotros.",
              },
            ],
          },
          {
            id: "3c",
            citations: [
              {
                citation: "Colosenses 2:14, 16-17",
                text: "anulando el acta de los decretos que había contra nosotros, que nos era contraria, quitándola de en medio y clavándola en la cruz, [...] Por tanto, nadie os juzgue en comida o en bebida, o en cuanto a días de fiesta, luna nueva o días de reposo, todo lo cual es sombra de lo que ha de venir; pero el cuerpo es de Cristo.",
              },
              {
                citation: "Efesios 2:14, 16",
                text: "Porque él es nuestra paz, que de ambos pueblos hizo uno, derribando la pared intermedia de separación, [...] y mediante la cruz reconciliar con Dios a ambos en un solo cuerpo, matando en ella las enemistades.",
              },
            ],
          },
        ],
      },
      {
        number: 4,
        segments: [
          {
            text: "A ellos también le dio diversas leyes judiciales, que expiraron juntamente con el estado de ese pueblo, que no obligan a ninguno ahora en virtud de aquella institución; solamente sus principio de equidad son de uso moderno.",
            referenceId: "4a",
          },
        ],
        references: [
          {
            id: "4a",
            citations: [
              {
                citation: "1 Corintios 9:8-10",
                text: "¿Digo esto sólo como hombre? ¿No dice esto también la ley? Porque en la ley de Moisés está escrito: No pondrás bozal al buey que trilla. ¿Tiene Dios cuidado de los bueyes, o lo dice enteramente por nosotros? Por nosotros se escribió; porque con esperanza debe arar el que ara, y el que trilla, con esperanza de recibir del fruto.",
              },
            ],
          },
        ],
      },
      {
        number: 5,
        segments: [
          {
            text: "La ley moral obliga para siempre a todos, tanto a los justificados como a los demás, a la obediencia de los mismos,",
            referenceId: "5a",
          },
          {
            text: "y esto no sólo en lo que respecta de la materia contenida en ella, sino también con respeto a la autoridad de Dios, el Creador, quien la dio;",
            referenceId: "5b",
          },
          {
            text: "tampoco Cristo en el Evangelio de ninguna manera la disuelve, sino que fortalece mucho más esta obligación.",
            referenceId: "5c",
          },
        ],
        references: [
          {
            id: "5a",
            citations: [
              {
                citation: "Romanos 13:8-10",
                text: "No debáis a nadie nada, sino el amaros unos a otros; porque el que ama al prójimo, ha cumplido la ley. Porque: No adulterarás, no matarás, no hurtarás, no dirás falso testimonio, no codiciarás, y cualquier otro mandamiento, en esta sentencia se resume: Amarás a tu prójimo como a ti mismo. El amor no hace mal al prójimo; así que el cumplimiento de la ley es el amor.",
              },
              {
                citation: "Santiago 2:8, 10-12",
                text: "Si en verdad cumplís la ley real, conforme a la Escritura: Amarás a tu prójimo como a ti mismo, bien hacéis; [...] Porque cualquiera que guardare toda la ley, pero ofendiere en un punto, se hace culpable de todos. Porque el que dijo: No cometerás adulterio, también ha dicho: No matarás. Ahora bien, si no cometes adulterio, pero matas, ya te has hecho transgresor de la ley. Así hablad, y así haced, como los que habéis de ser juzgados por la ley de la libertad.",
              },
            ],
          },
          {
            id: "5b",
            citations: [
              {
                citation: "Santiago 2:10-11",
                text: "Porque cualquiera que guardare toda la ley, pero ofendiere en un punto, se hace culpable de todos. Porque el que dijo: No cometerás adulterio, también ha dicho: No matarás. Ahora bien, si no cometes adulterio, pero matas, ya te has hecho transgresor de la ley.",
              },
            ],
          },
          {
            id: "5c",
            citations: [
              {
                citation: "Mateo 5:17-19",
                text: "No penséis que he venido para abrogar la ley o los profetas; no he venido para abrogar, sino para cumplir. Porque de cierto os digo que hasta que pasen el cielo y la tierra, ni una jota ni una tilde pasará de la ley, hasta que todo se haya cumplido. De manera que cualquiera que quebrante uno de estos mandamientos muy pequeños, y así enseñe a los hombres, muy pequeño será llamado en el reino de los cielos; mas cualquiera que los haga y los enseñe, éste será llamado grande en el reino de los cielos.",
              },
              {
                citation: "Romanos 3:31",
                text: "¿Luego por la fe invalidamos la ley? En ninguna manera, sino que confirmamos la ley.",
              },
            ],
          },
        ],
      },
      {
        number: 6,
        segments: [
          {
            text: "Aunque los verdaderos creyentes no están bajo la ley como un pacto de obras, para ser por ella justificados o condenados,",
            referenceId: "6a",
          },
          {
            text: "sin embargo, es de gran utilidad para ellos, así como a los demás como regla de vida, en que les informa de la voluntad de Dios y de su deber, les dirige y obliga a caminar en su consecuencia;",
            referenceId: "6b",
          },
          {
            text: "también les descubre las contaminaciones pecaminosas de sus naturalezas, corazones, y vidas, a fin de examinarse a sí mismos, por lo tanto pueden llegar a una mayor convicción, para su humillación, y el odio contra, el pecado; junto con una visión más clara de la necesidad que tienen de Cristo y la perfección de su obediencia;",
            referenceId: "6c",
          },
          {
            text: "también igualmente es de utilidad para los regenerados para restringir su corrupción, en cuanto que prohíbe el pecado; y sus amenazas que sirven para mostrar lo que aun sus pecados merecen, y qué aflicciones en esta vida pueden esperar de ellos, aun cuando estén libres de la maldición y el puro rigor de ella.",
            referenceId: "6d",
          },
          {
            text: "Las promesas igualmente les muestra la aprobación de Dios a su obediencia, y cuáles son las bendiciones que pueden esperar en el cumplimiento de la misma,",
            referenceId: "6e",
          },
          {
            text: "aunque no como si la ley se lo diera como pacto de obras;",
            referenceId: "6f",
          },
          {
            text: "de manera que los hombres haciendo lo bueno y absteniéndose del mal, debido a que la ley fomenta lo uno y detiene la otra parte, no es evidencia de que su ser este bajo la ley y no bajo la gracia.",
            referenceId: "6g",
          },
        ],
        references: [
          {
            id: "6a",
            citations: [
              {
                citation: "Romanos 6:14",
                text: "Porque el pecado no se enseñoreará de vosotros; pues no estáis bajo la ley, sino bajo la gracia.",
              },
              {
                citation: "Gálatas 2:16",
                text: "sabiendo que el hombre no es justificado por las obras de la ley, sino por la fe de Jesucristo, nosotros también hemos creído en Jesucristo, para ser justificados por la fe de Cristo y no por las obras de la ley, por cuanto por las obras de la ley nadie será justificado.",
              },
              {
                citation: "Romanos 8:1",
                text: "Ahora, pues, ninguna condenación hay para los que están en Cristo Jesús, los que no andan conforme a la carne, sino conforme al Espíritu.",
              },
              {
                citation: "Romanos 10:4",
                text: "porque el fin de la ley es Cristo, para justicia a todo aquel que cree.",
              },
            ],
          },
          {
            id: "6b",
            citations: [
              {
                citation: "Romanos 7:12, 22, 25",
                text: "De manera que la ley a la verdad es santa, y el mandamiento santo, justo y bueno. [...] Porque según el hombre interior, me deleito en la ley de Dios; [...] Gracias doy a Dios, por Jesucristo Señor nuestro. Así que, yo mismo con la mente sirvo a la ley de Dios, mas con la carne a la ley del pecado.",
              },
              {
                citation: "Salmo 119:4-6",
                text: "Tú encargaste Que sean muy guardados tus mandamientos. ¡Ojalá fuesen ordenados mis caminos Para guardar tus estatutos! Entonces no sería yo avergonzado, Cuando atendiese a todos tus mandamientos.",
              },
              {
                citation: "1 Corintios 7:19",
                text: "La circuncisión nada es, y la incircuncisión nada es, sino el guardar los mandamientos de Dios.",
              },
            ],
          },
          {
            id: "6c",
            citations: [
              {
                citation: "Romanos 3:20",
                text: "ya que por las obras de la ley ningún ser humano será justificado delante de él; porque por medio de la ley es el conocimiento del pecado.",
              },
              {
                citation: "Romanos 7:7",
                text: "¿Qué diremos, pues? ¿La ley es pecado? En ninguna manera. Pero yo no conocí el pecado sino por la ley; porque tampoco conociera la codicia, si la ley no dijera: No codiciarás.",
              },
            ],
          },
          {
            id: "6d",
            citations: [
              {
                citation: "Santiago 2:11",
                text: "Porque el que dijo: No cometerás adulterio, también ha dicho: No matarás. Ahora bien, si no cometes adulterio, pero matas, ya te has hecho transgresor de la ley.",
              },
              {
                citation: "Salmo 119:101, 104, 128",
                text: "De todo mal camino contuve mis pies, Para guardar tu palabra. [...] De tus mandamientos he adquirido inteligencia; Por tanto, he aborrecido todo camino de mentira. [...] Por eso estimé rectos todos tus mandamientos sobre todas las cosas, Y aborrecí todo camino de mentira.",
              },
            ],
          },
          {
            id: "6e",
            citations: [
              {
                citation: "Efesios 6:2-3",
                text: "Honra a tu padre y a tu madre, que es el primer mandamiento con promesa; para que te vaya bien, y seas de larga vida sobre la tierra.",
              },
              {
                citation: "Salmo 37:11",
                text: "Pero los mansos heredarán la tierra, Y se recrearán con abundancia de paz.",
              },
            ],
          },
          {
            id: "6f",
            citations: [
              {
                citation: "Lucas 17:10",
                text: "Así también vosotros, cuando hayáis hecho todo lo que os ha sido ordenado, decid: Siervos inútiles somos, pues lo que debíamos hacer, hicimos.",
              },
            ],
          },
          {
            id: "6g",
            citations: [
              {
                citation: "1 Pedro 3:8-13",
                text: "Finalmente, sed todos de un mismo sentir, compasivos, amándoos fraternalmente, misericordiosos, amigables; no devolviendo mal por mal, ni maldición por maldición, sino por el contrario, bendiciendo, sabiendo que fuisteis llamados para que heredaseis bendición. Porque: El que quiere amar la vida Y ver días buenos, Refrene su lengua de mal, Y sus labios no hablen engaño; Apártese del mal, y haga el bien; Busque la paz, y sígala. Porque los ojos del Señor están sobre los justos, Y sus oídos atentos a sus oraciones; Pero el rostro del Señor está contra aquellos que hacen el mal. ¿Y quién es aquel que os podrá hacer daño, si vosotros seguís el bien?",
              },
            ],
          },
        ],
      },
      {
        number: 7,
        segments: [
          {
            text: "Tampoco son los usos antes mencionados de la ley contrarios a la gracia del Evangelio, sino que concuerdan armoniosamente con él, pues el Espíritu de Cristo somete y habilita a la voluntad del hombre para hacer libre y alegremente lo que quiere la voluntad de Dios, revelada en la ley, requerida para hacer.",
            referenceId: "7a",
          },
        ],
        references: [
          {
            id: "7a",
            citations: [
              {
                citation: "Gálatas 3:21",
                text: "¿Luego la ley es contraria a las promesas de Dios? En ninguna manera; porque si la ley dada pudiera vivificar, la justicia fuera verdaderamente por la ley.",
              },
              {
                citation: "Ezequiel 36:27",
                text: "Y pondré dentro de vosotros mi Espíritu, y haré que andéis en mis estatutos, y guardéis mis preceptos, y los pongáis por obra.",
              },
            ],
          },
        ],
      },
    ],
  },
  // Chapter 20: Del Evangelio y del Alcance de su Gracia
  {
    id: 20,
    title: "Del Evangelio y del Alcance de su Gracia",
    paragraphs: [
      {
        number: 1,
        segments: [
          {
            text: "El pacto de obras que había sido quebrantado por el pecado, y habiéndose hecho inútil para dar vida, le plació a Dios dar la promesa de Cristo, la simiente de la mujer, como el medio de convocatoria de los elegidos, y engendrar en ellos la fe y el arrepentimiento, en este promesa el Evangelio, en cuanto a la sustancia de la misma, se reveló, y [es] en ella eficaz para la conversión y salvación de los pecadores.",
            referenceId: "1a",
          },
        ],
        references: [
          {
            id: "1a",
            citations: [
              {
                citation: "Génesis 3:15",
                text: "Y pondré enemistad entre ti y la mujer, y entre tu simiente y la simiente suya; ésta te herirá en la cabeza, y tú le herirás en el calcañar.",
              },
              {
                citation: "Apocalipsis 13:8",
                text: "Y la adoraron todos los moradores de la tierra cuyos nombres no estaban escritos en el libro de la vida del Cordero que fue inmolado desde el principio del mundo.",
              },
            ],
          },
        ],
      },
      {
        number: 2,
        segments: [
          {
            text: "Esta promesa de Cristo, y la salvación por medio de Él, es revelada solamente por la Palabra de Dios. Tampoco las obras de la creación o la providencia, con la luz de la naturaleza, revelan a Cristo, o la gracia que es por medio de Él, ni siquiera en forma general u obscura; mucho menos hacen que los hombres destituidos de la revelación de Él por la promesa, o evangelio, sean capacitados así para alcanzar la fe salvadora o el arrepentimiento.",
            referenceId: "2a",
          },
        ],
        references: [
          {
            id: "2a",
            citations: [
              {
                citation: "Romanos 1:17",
                text: "Porque en el evangelio la justicia de Dios se revela por fe y para fe, como está escrito: Mas el justo por la fe vivirá.",
              },
              {
                citation: "Romanos 10:14-15, 17",
                text: "¿Cómo, pues, invocarán a aquel en el cual no han creído? ¿Y cómo creerán en aquel de quien no han oído? ¿Y cómo oirán sin haber quien les predique? ¿Y cómo predicarán si no fueren enviados? Como está escrito: ¡Cuán hermosos son los pies de los que anuncian la paz, de los que anuncian buenas nuevas! [...] Así que la fe es por el oír, y el oír, por la palabra de Dios.",
              },
              {
                citation: "Proverbios 29:18",
                text: "Sin profecía el pueblo se desenfrena; Mas el que guarda la ley es bienaventurado.",
              },
              {
                citation: "Isaías 25:7",
                text: "Y destruirá en este monte la cubierta con que están cubiertos todos los pueblos, y el velo que envuelve a todas las naciones.",
              },
              {
                citation: "Isaías 60:2-3",
                text: "Porque he aquí que tinieblas cubrirán la tierra, y oscuridad las naciones; mas sobre ti amanecerá Jehová, y sobre ti será vista su gloria. Y andarán las naciones a tu luz, y los reyes al resplandor de tu nacimiento.",
              },
            ],
          },
        ],
      },
      {
        number: 3,
        segments: [
          {
            text: "La revelación del Evangelio a los pecadores, hecho en tiempos diversos y en diversas partes, con la adición de las promesas y preceptos para la obediencia requerida en el mismo, en cuanto a las naciones y personas a las que se concede, no es más que la voluntad soberana y el buen placer de Dios,",
            referenceId: "3a",
          },
          {
            text: "no apropiándosela en virtud de promesa alguna referida al buen vencimiento de las capacidades naturales del hombre, ni en virtud de la luz común recibido aparte de él, lo cual nadie jamás hizo o puede hacer,",
            referenceId: "3b",
          },
          {
            text: "y por lo tanto en todas las edades, la predicación del evangelio se ha concedido a las personas y naciones, en cuanto a su extensión o restricción de la misma, con gran variedad, de acuerdo con el consejo de la voluntad de Dios.",
          },
        ],
        references: [
          {
            id: "3a",
            citations: [
              {
                citation: "Salmo 147:20",
                text: "No ha hecho así con ninguna otra de las naciones; Y en cuanto a sus juicios, no los conocieron. Aleluya.",
              },
            ],
          },
          {
            id: "3b",
            citations: [
              {
                citation: "Hechos 16:7",
                text: "y cuando llegaron a Misia, intentaron ir a Bitinia, pero el Espíritu no se lo permitió.",
              },
              {
                citation: "Romanos 1:18-32",
                text: "Porque la ira de Dios se revela desde el cielo contra toda impiedad e injusticia de los hombres que detienen con injusticia la verdad...",
              },
            ],
          },
        ],
      },
      {
        number: 4,
        segments: [
          {
            text: "Aunque el evangelio es el único medio externo para revelar a Cristo y la gracia salvadora, y es, como tal, completamente suficiente para este fin,",
            referenceId: "4a",
          },
          {
            text: "sin embargo, para que los hombres que están muertos en sus delitos puedan nacer de nuevo, ser vivificados o regenerados, es además necesaria una obra eficaz e invencible del Espíritu Santo en toda el alma, con el fin de producir en ellos una nueva vida espiritual; sin ésta, ningún otro medio puede efectuar su conversión a Dios.",
            referenceId: "4b",
          },
        ],
        references: [
          {
            id: "4a",
            citations: [
              {
                citation: "Salmo 110:3",
                text: "Tu pueblo se te ofrecerá voluntariamente en el día de tu poder, En la hermosura de la santidad. Desde el seno de la aurora Tienes tú el rocío de tu juventud.",
              },
            ],
          },
          {
            id: "4b",
            citations: [
              {
                citation: "1 Corintios 2:14",
                text: "Pero el hombre natural no percibe las cosas que son del Espíritu de Dios, porque para él son locura, y no las puede entender, porque se han de discernir espiritualmente.",
              },
              {
                citation: "Efesios 1:19-20",
                text: "y cuál la supereminente grandeza de su poder para con nosotros los que creemos, según la operación del poder de su fuerza, la cual operó en Cristo, resucitándole de los muertos y sentándole a su diestra en los lugares celestiales,",
              },
              {
                citation: "Juan 6:44",
                text: "Ninguno puede venir a mí, si el Padre que me envió no le trajere; y yo le resucitaré en el día postrero.",
              },
              {
                citation: "2 Corintios 4:4, 6",
                text: "en los cuales el dios de este siglo cegó el entendimiento de los incrédulos, para que no les resplandezca la luz del evangelio de la gloria de Cristo, el cual es la imagen de Dios. [...] Porque Dios, que mandó que de las tinieblas resplandeciese la luz, es el que resplandeció en nuestros corazones, para iluminación del conocimiento de la gloria de Dios en la faz de Jesucristo.",
              },
            ],
          },
        ],
      },
    ],
  },
  // Chapter 21: De La Libertad Cristiana y la Libertad de Conciencia
  {
    id: 21,
    title: "De La Libertad Cristiana y la Libertad de Conciencia",
    paragraphs: [
      {
        number: 1,
        segments: [
          {
            text: "La libertad que Cristo ha comprado para los creyentes bajo el evangelio consiste en su libertad de la culpa del pecado, de la ira condenatoria de Dios y de la severidad y maldición de la ley,",
            referenceId: "1a",
          },
          {
            text: "y en ser librados de este presente siglo malo, de la servidumbre de Satanás y del dominio del pecado,",
            referenceId: "1b",
          },
          {
            text: "del mal de las aflicciones, del temor y aguijón de la muerte, de la victoria del sepulcro y de la condenación eterna,",
            referenceId: "1c",
          },
          {
            text: "y también consiste en su libre acceso a Dios, y en rendirle obediencia a Él, no por temor servil, sino con un amor filial y una mente dispuesta.",
            referenceId: "1d",
          },
          {
            text: "Todo esto era sustancialmente común también a los creyentes bajo la ley;",
            referenceId: "1e",
          },
          {
            text: "pero bajo el Nuevo Testamento la libertad de los cristianos se ensancha mucho más porque están libres del yugo de la ley ceremonial a que estaba sujeta la Iglesia judaica, y tienen ahora mayor confianza para acercarse al trono de gracia, y experiencias más plenas del libre Espíritu de Dios que aquellas de las que participaron generalmente los creyentes bajo la ley.",
            referenceId: "1f",
          },
        ],
        references: [
          {
            id: "1a",
            citations: [
              {
                citation: "Gálatas 3:13",
                text: "Cristo nos redimió de la maldición de la ley, hecho por nosotros maldición (porque está escrito: Maldito todo el que es colgado en un madero).",
              },
            ],
          },
          {
            id: "1b",
            citations: [
              {
                citation: "Gálatas 1:4",
                text: "el cual se dio a sí mismo por nuestros pecados para librarnos del presente siglo malo, conforme a la voluntad de nuestro Dios y Padre,",
              },
              {
                citation: "Hechos 26:18",
                text: "para que abras sus ojos, para que se conviertan de las tinieblas a la luz, y de la potestad de Satanás a Dios; para que reciban, por la fe que es en mí, perdón de pecados y herencia entre los santificados.",
              },
              {
                citation: "Romanos 8:3",
                text: "Porque lo que era imposible para la ley, por cuanto era débil por la carne, Dios, enviando a su Hijo en semejanza de carne de pecado y a causa del pecado, condenó al pecado en la carne;",
              },
            ],
          },
          {
            id: "1c",
            citations: [
              {
                citation: "Romanos 8:28",
                text: "Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su propósito son llamados.",
              },
              {
                citation: "1 Corintios 15:54-57",
                text: "Y cuando esto corruptible se haya vestido de incorrupción, y esto mortal se haya vestido de inmortalidad, entonces se cumplirá la palabra que está escrita: Sorbida es la muerte en victoria. ¿Dónde está, oh muerte, tu aguijón? ¿Dónde, oh sepulcro, tu victoria? ya que el aguijón de la muerte es el pecado, y el poder del pecado, la ley. Mas gracias sean dadas a Dios, que nos da la victoria por medio de nuestro Señor Jesucristo.",
              },
              {
                citation: "2 Tesalonicenses 1:10",
                text: "cuando venga en aquel día para ser glorificado en sus santos y ser admirado en todos los que creyeron (por cuanto nuestro testimonio ha sido creído entre vosotros).",
              },
            ],
          },
          {
            id: "1d",
            citations: [
              {
                citation: "Romanos 8:15",
                text: "Pues no habéis recibido el espíritu de esclavitud para estar otra vez en temor, sino que habéis recibido el espíritu de adopción, por el cual clamamos: ¡Abba, Padre!",
              },
              {
                citation: "Lucas 1:73-75",
                text: "Del juramento que hizo a Abraham nuestro padre, que nos había de conceder que, librados de nuestros enemigos, sin temor le serviríamos en santidad y en justicia delante de él, todos nuestros días.",
              },
              {
                citation: "1 Juan 4:18",
                text: "En el amor no hay temor, sino que el perfecto amor echa fuera el temor; porque el temor lleva en sí castigo. De donde el que teme, no ha sido perfeccionado en el amor.",
              },
            ],
          },
          {
            id: "1e",
            citations: [
              {
                citation: "Gálatas 3:9, 14",
                text: "De modo que los de la fe son bendecidos con el creyente Abraham. [...] para que en Cristo Jesús la bendición de Abraham alcanzase a los gentiles, a fin de que por la fe recibiésemos la promesa del Espíritu.",
              },
            ],
          },
          {
            id: "1f",
            citations: [
              {
                citation: "Juan 7:38, 39",
                text: "El que cree en mí, como dice la Escritura, de su interior correrán ríos de agua viva. Esto dijo del Espíritu que habían de recibir los que creyesen en él; pues aún no había venido el Espíritu Santo, porque Jesús no había sido aún glorificado.",
              },
              {
                citation: "Hebreos 10:19-21",
                text: "Así que, hermanos, teniendo libertad para entrar en el Lugar Santísimo por la sangre de Jesucristo, por el camino nuevo y vivo que él nos abrió a través del velo, esto es, de su carne, y teniendo un gran sacerdote sobre la casa de Dios,",
              },
            ],
          },
        ],
      },
      {
        number: 2,
        segments: [
          {
            text: "Sólo Dios es Señor de la conciencia,",
            referenceId: "2a",
          },
          {
            text: "y lo ha dejado libre de las doctrinas y mandamientos de hombres que están en cualquier cosa contraria a su palabra, o no contenido en ella.",
            referenceId: "2b",
          },
          {
            text: "Así que, creer tales doctrinas u obedecer tales mandamientos de la conciencia, es traicionar la verdadera libertad de conciencia,",
            referenceId: "2c",
          },
          {
            text: "y el requerir una fe implícita y una obediencia ciega y absoluta, es destruir la libertad de conciencia y la razón también.",
            referenceId: "2d",
          },
        ],
        references: [
          {
            id: "2a",
            citations: [
              {
                citation: "Santiago 4:12",
                text: "Uno solo es el dador de la ley, que puede salvar y perder; pero tú, ¿quién eres para que juzgues a otro?",
              },
              {
                citation: "Romanos 14:4",
                text: "¿Tú quién eres, que juzgas al criado ajeno? Para su propio señor está en pie, o cae; pero estará firme, porque poderoso es el Señor para hacerle estar firme.",
              },
            ],
          },
          {
            id: "2b",
            citations: [
              {
                citation: "Hechos 4:19, 29",
                text: "Mas Pedro y Juan respondieron diciéndoles: Juzgad si es justo delante de Dios obedecer a vosotros antes que a Dios; [...] Y ahora, Señor, mira sus amenazas, y concede a tus siervos que con todo denuedo hablen tu palabra,",
              },
              {
                citation: "1 Corintios 7:23",
                text: "Por precio fuisteis comprados; no os hagáis esclavos de los hombres.",
              },
              {
                citation: "Mateo 15:9",
                text: "Pues en vano me honran, Enseñando como doctrinas, mandamientos de hombres.",
              },
            ],
          },
          {
            id: "2c",
            citations: [
              {
                citation: "Colosenses 2:20, 22-23",
                text: "Pues si habéis muerto con Cristo en cuanto a los rudimentos del mundo, ¿por qué, como si vivieseis en el mundo, os sometéis a preceptos [...] (todos los cuales se destruyen con el uso), según mandamientos y doctrinas de hombres? Tales cosas tienen a la verdad cierta reputación de sabiduría en culto voluntario, en humildad y en duro trato del cuerpo; pero no tienen valor alguno contra los apetitos de la carne.",
              },
            ],
          },
          {
            id: "2d",
            citations: [
              {
                citation: "1 Corintios 3:5",
                text: "¿Qué, pues, es Pablo, y qué es Apolos? Servidores por medio de los cuales habéis creído; y eso según lo que a cada uno concedió el Señor.",
              },
              {
                citation: "2 Corintios 1:24",
                text: "No que nos enseñoreemos de vuestra fe, sino que colaboramos para vuestro gozo; porque por la fe estáis firmes.",
              },
            ],
          },
        ],
      },
      {
        number: 3,
        segments: [
          {
            text: "Aquellos que bajo el pretexto de la libertad cristiana practican cualquier pecado o abrigan cualquier concupiscencia, al pervertir así el propósito principal de la gracia del evangelio para su propia destrucción,",
            referenceId: "3a",
          },
          {
            text: "destruyen completamente, por tanto, el propósito de la libertad cristiana, que consiste en que, siendo librados de las manos de todos nuestros enemigos, sirvamos al Señor sin temor, en santidad y justicia delante de Él, todos los días de nuestra vida.",
            referenceId: "3b",
          },
        ],
        references: [
          {
            id: "3a",
            citations: [
              {
                citation: "Romanos 6:1-2",
                text: "¿Qué, pues, diremos? ¿Perseveraremos en el pecado para que la gracia abunde? En ninguna manera. Porque los que hemos muerto al pecado, ¿cómo viviremos aún en él?",
              },
            ],
          },
          {
            id: "3b",
            citations: [
              {
                citation: "Gálatas 5:13",
                text: "Porque vosotros, hermanos, a libertad fuisteis llamados; solamente que no uséis la libertad como ocasión para la carne, sino servíos por amor los unos a los otros.",
              },
              {
                citation: "2 Pedro 2:18, 21",
                text: "Pues hablando palabras infladas y vanas, seducen con concupiscencias de la carne y disoluciones a los que verdaderamente habían huido de los que viven en error. [...] Porque mejor les hubiera sido no haber conocido el camino de la justicia, que después de haberlo conocido, volverse atrás del santo mandamiento que les fue dado.",
              },
            ],
          },
        ],
      },
    ],
  },
  // Chapter 22: Del Culto Religioso y el Día de Reposo
  {
    id: 22,
    title: "Del Culto Religioso y el Día de Reposo",
    paragraphs: [
      {
        number: 1,
        segments: [
          {
            text: "La luz de la naturaleza hace ver que hay un Dios, quien tiene señorío y soberanía sobre todo; es justo, bueno y hace bien a todos; y por lo tanto, debe ser temido, amado, alabado, invocado, creído, y servido, con todo el corazón y con toda el alma, y con toda las fuerzas.",
            referenceId: "1a",
          },
          {
            text: "Pero el modo aceptable de adorar al Dios verdadero, está instituida por sí mismo, y por lo tanto limitado por su propia voluntad revelada, que no se puede adorar a Dios conforme a la imaginación y las invenciones de los hombres, ni las sugerencias de Satanás, bajo ninguna representación visible, o de ningún otro modo no prescrito en las Santas Escrituras.",
            referenceId: "1b",
          },
        ],
        references: [
          {
            id: "1a",
            citations: [
              {
                citation: "Jeremías 10:7",
                text: "¿Quién no te temerá, oh Rey de las naciones? Porque a ti es debido el temor; porque entre todos los sabios de las naciones y en todos sus reinos, no hay semejante a ti.",
              },
              {
                citation: "Marcos 12:33",
                text: "y el amarle con todo el corazón, con todo el entendimiento, con toda el alma, y con todas las fuerzas, y amar al prójimo como a uno mismo, es más que todos los holocaustos y sacrificios.",
              },
            ],
          },
          {
            id: "1b",
            citations: [
              {
                citation: "Deuteronomio 12:32",
                text: "Cuidarás de hacer todo lo que yo te mando; no añadirás a ello, ni de ello quitarás.",
              },
              {
                citation: "Éxodo 20:4-6",
                text: "No te harás imagen, ni ninguna semejanza de lo que esté arriba en el cielo, ni abajo en la tierra, ni en las aguas debajo de la tierra. No te inclinarás a ellas, ni las honrarás; porque yo soy Jehová tu Dios, fuerte, celoso, que visito la maldad de los padres sobre los hijos hasta la tercera y cuarta generación de los que me aborrecen, y hago misericordia a millares, a los que me aman y guardan mis mandamientos.",
              },
            ],
          },
        ],
      },
      {
        number: 2,
        segments: [
          {
            text: "La religión de culto se debe dar a Dios el Padre, Hijo y Espíritu Santo, y sólo a él;",
            referenceId: "2a",
          },
          {
            text: "no a los ángeles, santos, u otras criaturas;",
            referenceId: "2b",
          },
          {
            text: "y después de la caída, no sin un mediador, ni en la mediación de cualquier otro sino solamente Cristo.",
            referenceId: "2c",
          },
        ],
        references: [
          {
            id: "2a",
            citations: [
              {
                citation: "Mateo 4:9, 10",
                text: "y le dijo: Todo esto te daré, si postrado me adorares. Entonces Jesús le dijo: Vete, Satanás, porque escrito está: Al Señor tu Dios adorarás, y a él sólo servirás.",
              },
              {
                citation: "Juan 6:23",
                text: "Pero otras barcas habían arribado de Tiberias junto al lugar donde habían comido el pan después de haber dado gracias el Señor.",
              },
              {
                citation: "Mateo 28:19",
                text: "Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo;",
              },
            ],
          },
          {
            id: "2b",
            citations: [
              {
                citation: "Romanos 1:25",
                text: "ya que cambiaron la verdad de Dios por la mentira, honrando y dando culto a las criaturas antes que al Creador, el cual es bendito por los siglos. Amén.",
              },
              {
                citation: "Colosenses 2:18",
                text: "Nadie os prive de vuestro premio, afectando humildad y culto a los ángeles, entremetiéndose en lo que no ha visto, vanamente hinchado por su propia mente carnal,",
              },
              {
                citation: "Apocalipsis 19:10",
                text: "Yo me postré a sus pies para adorarle. Y él me dijo: Mira, no lo hagas; yo soy consiervo tuyo, y de tus hermanos que retienen el testimonio de Jesús. Adora a Dios; porque el testimonio de Jesús es el espíritu de la profecía.",
              },
            ],
          },
          {
            id: "2c",
            citations: [
              {
                citation: "Juan 14:6",
                text: "Jesús le dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí.",
              },
              {
                citation: "1 Timoteo 2:5",
                text: "Porque hay un solo Dios, y un solo mediador entre Dios y los hombres, Jesucristo hombre,",
              },
            ],
          },
        ],
      },
      {
        number: 3,
        segments: [
          {
            text: "La oración, con acción de gracias, siendo una parte de la adoración natural, la requiere Dios de todos los hombres.",
            referenceId: "3a",
          },
          {
            text: "Pero para que sea aceptada, debe ser hecha en el nombre del Hijo,",
            referenceId: "3b",
          },
          {
            text: "con la ayuda del Espíritu,",
            referenceId: "3c",
          },
          {
            text: "de acuerdo a su voluntad,",
            referenceId: "3d",
          },
          {
            text: "con comprensión, respeto, humildad, fervor, fe, amor y perseverancia,",
            referenceId: "3e",
          },
          {
            text: "y cuando (es hecha) con otros, en una lengua conocida.",
            referenceId: "3f",
          },
        ],
        references: [
          {
            id: "3a",
            citations: [
              {
                citation: "Salmo 95:1-7",
                text: "Venid, aclamemos alegremente a Jehová; Cantemos con júbilo a la roca de nuestra salvación...",
              },
              {
                citation: "Salmo 65:2",
                text: "Tú oyes la oración; A ti vendrá toda carne.",
              },
            ],
          },
          {
            id: "3b",
            citations: [
              {
                citation: "Juan 14:13, 14",
                text: "Y todo lo que pidiereis al Padre en mi nombre, lo haré, para que el Padre sea glorificado en el Hijo. Si algo pidiereis en mi nombre, yo lo haré.",
              },
            ],
          },
          {
            id: "3c",
            citations: [
              {
                citation: "Romanos 8:26",
                text: "Y de igual manera el Espíritu nos ayuda en nuestra debilidad; pues qué hemos de pedir como conviene, no lo sabemos, pero el Espíritu mismo intercede por nosotros con gemidos indecibles.",
              },
            ],
          },
          {
            id: "3d",
            citations: [
              {
                citation: "1 Juan 5:14",
                text: "Y esta es la confianza que tenemos en él, que si pedimos alguna cosa conforme a su voluntad, él nos oye.",
              },
            ],
          },
          {
            id: "3e",
            citations: [
              {
                citation: "Salmo 47:7",
                text: "Porque Dios es el Rey de toda la tierra; Cantad con inteligencia.",
              },
              {
                citation: "Eclesiastés 5:1, 2",
                text: "Cuando fueres a la casa de Dios, guarda tu pie; y acércate más para oír que para ofrecer el sacrificio de los necios; porque no saben que hacen mal. No te des prisa con tu boca, ni tu corazón se apresure a proferir palabra delante de Dios; porque Dios está en el cielo, y tú sobre la tierra; por tanto, sean pocas tus palabras.",
              },
              {
                citation: "Hebreos 12:28",
                text: "Así que, recibiendo nosotros un reino inconmovible, tengamos gratitud, y mediante ella sirvamos a Dios agradándole con temor y reverencia;",
              },
              {
                citation: "Marcos 11:24",
                text: "Por tanto, os digo que todo lo que pidiereis orando, creed que lo recibiréis, y os vendrá.",
              },
              {
                citation: "Colosenses 4:2",
                text: "Perseverad en la oración, velando en ella con acción de gracias;",
              },
              {
                citation: "Efesios 6:18",
                text: "orando en todo tiempo con toda oración y súplica en el Espíritu, y velando en ello con toda perseverancia y súplica por todos los santos;",
              },
            ],
          },
          {
            id: "3f",
            citations: [
              {
                citation: "1 Corintios 14:16, 17",
                text: "Porque si bendices sólo con el espíritu, el que ocupa lugar de simple oyente, ¿cómo dirá el Amén a tu acción de gracias? pues no sabe lo que has dicho. Porque tú, a la verdad, bien das gracias; pero el otro no es edificado.",
              },
            ],
          },
        ],
      },
      {
        number: 4,
        segments: [
          {
            text: "La oración ha de hacerse por cosas lícitas, y para toda clase de personas vivas, o que vivirá en adelante,",
            referenceId: "4a",
          },
          {
            text: "pero no por los muertos, ni de aquellos de quienes se sepa que han cometido el pecado de muerte.",
            referenceId: "4b",
          },
        ],
        references: [
          {
            id: "4a",
            citations: [
              {
                citation: "1 Timoteo 2:1, 2",
                text: "Exhorto ante todo, a que se hagan rogativas, oraciones, peticiones y acciones de gracias, por todos los hombres; por los reyes y por todos los que están en eminencia, para que vivamos quieta y reposadamente en toda piedad y honestidad.",
              },
              {
                citation: "2 Samuel 7:29",
                text: "Ten ahora a bien bendecir la casa de tu siervo, para que permanezca perpetuamente delante de ti, porque tú, Jehová Dios, lo has dicho, y con tu bendición será bendita la casa de tu siervo para siempre.",
              },
            ],
          },
          {
            id: "4b",
            citations: [
              {
                citation: "2 Samuel 12:21-23",
                text: "Y le dijeron sus siervos: ¿Qué es esto que has hecho? Por el niño, viviendo aún, ayunabas y llorabas; y muerto él, te levantaste y comiste pan. Y él respondió: Viviendo aún el niño, yo ayunaba y lloraba, diciendo: ¿Quién sabe si Dios tendrá compasión de mí, y vivirá el niño? Mas ahora que ha muerto, ¿para qué he de ayunar? ¿Podré yo hacerle volver? Yo voy a él, mas él no volverá a mí.",
              },
              {
                citation: "1 Juan 5:16",
                text: "Si alguno viere a su hermano cometer pecado que no sea de muerte, pedirá, y Dios le dará vida; esto es para los que cometen pecado que no sea de muerte. Hay pecado de muerte, por el cual yo no digo que se pida.",
              },
            ],
          },
        ],
      },
      {
        number: 5,
        segments: [
          {
            text: "La lectura de las Escrituras,",
            referenceId: "5a",
          },
          {
            text: "la predicación, y la audición de la Palabra de Dios,",
            referenceId: "5b",
          },
          {
            text: "la instrucción y la amonestación los unos a los otros por medio de salmos, himnos, y cantos espirituales, el cantar con gracia en el corazón al Señor;",
            referenceId: "5c",
          },
          {
            text: "como también la administración del bautismo",
            referenceId: "5d",
          },
          {
            text: "y la Cena del Señor,",
            referenceId: "5e",
          },
          {
            text: "todas estas cosas son parte de la adoración religiosa a Dios, que ha de realizarse en obediencia, con entendimiento, fe, reverencia, y temor piadoso; además, la humillación solemne,",
            referenceId: "5f",
          },
          {
            text: "con ayunos, y las acciones de gracia, en ocasiones especiales, debiéndose usar de una manera santa y piadosa.",
            referenceId: "5g",
          },
        ],
        references: [
          {
            id: "5a",
            citations: [
              {
                citation: "1 Timoteo 4:13",
                text: "Entre tanto que voy, ocúpate en la lectura, la exhortación y la enseñanza.",
              },
            ],
          },
          {
            id: "5b",
            citations: [
              {
                citation: "2 Timoteo 4:2",
                text: "que prediques la palabra; que instes a tiempo y fuera de tiempo; redarguye, reprende, exhorta con toda paciencia y doctrina.",
              },
              {
                citation: "Lucas 8:18",
                text: "Mirad, pues, cómo oís; porque a todo el que tiene, se le dará; y a todo el que no tiene, aun lo que piensa tener se le quitará.",
              },
            ],
          },
          {
            id: "5c",
            citations: [
              {
                citation: "Colosenses 3:16",
                text: "La palabra de Cristo more en abundancia en vosotros, enseñándoos y exhortándoos unos a otros en toda sabiduría, cantando con gracia en vuestros corazones al Señor con salmos e himnos y cánticos espirituales.",
              },
              {
                citation: "Efesios 5:19",
                text: "hablando entre vosotros con salmos, con himnos y cánticos espirituales, cantando y alabando al Señor en vuestros corazones;",
              },
            ],
          },
          {
            id: "5d",
            citations: [
              {
                citation: "Mateo 28:19-20",
                text: "Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo; enseñándoles que guarden todas las cosas que os he mandado; y he aquí yo estoy con vosotros todos los días, hasta el fin del mundo. Amén.",
              },
            ],
          },
          {
            id: "5e",
            citations: [
              {
                citation: "1 Corintios 11:26",
                text: "Así, pues, todas las veces que comiereis este pan, y bebiereis esta copa, la muerte del Señor anunciáis hasta que él venga.",
              },
            ],
          },
          {
            id: "5f",
            citations: [
              {
                citation: "Ester 4:16",
                text: "Ve y reúne a todos los judíos que se hallan en Susa, y ayunad por mí, y no comáis ni bebáis en tres días, noche y día; yo también con mis doncellas ayunaré igualmente, y entonces entraré a ver al rey, aunque no sea conforme a la ley; y si perezco, que perezca.",
              },
              {
                citation: "Joel 2:12",
                text: "Por eso pues, ahora, dice Jehová, convertíos a mí con todo vuestro corazón, con ayuno y lloro y lamento.",
              },
            ],
          },
          {
            id: "5g",
            citations: [
              {
                citation: "Éxodo 15:1-19",
                text: "Entonces cantó Moisés y los hijos de Israel este cántico a Jehová, y dijeron: Cantaré yo a Jehová, porque se ha magnificado grandemente...",
              },
              {
                citation: "Salmo 107",
                text: "Alabad a Jehová, porque él es bueno; Porque para siempre es su misericordia...",
              },
            ],
          },
        ],
      },
      {
        number: 6,
        segments: [
          {
            text: "Ni la oración ni ninguna otra parte del culto religioso, está ahora bajo el evangelio, indeciblemente limitada, o son más aceptables por cualquier lugar en el que se lleva a cabo, o hacia quien se dirige,",
            referenceId: "6a",
          },
          {
            text: "sino que Dios debe ser adorado en todas partes en espíritu y en verdad,",
            referenceId: "6b",
          },
          {
            text: "tanto en familia privada",
            referenceId: "6c",
          },
          {
            text: "diariamente,",
            referenceId: "6d",
          },
          {
            text: "como en secreto cada uno por sí mismo,",
            referenceId: "6e",
          },
          {
            text: "así como de manera más solemne en las asambleas públicas,",
            referenceId: "6f",
          },
          {
            text: "que no han de descuidarse, ni deliberadamente abandonarse o por negligencia, cuando Dios por su palabra o providencia nos llama a ellas.",
            referenceId: "6g",
          },
        ],
        references: [
          {
            id: "6a",
            citations: [
              {
                citation: "Juan 4:21",
                text: "Jesús le dijo: Mujer, créeme, que la hora viene cuando ni en este monte ni en Jerusalén adoraréis al Padre.",
              },
            ],
          },
          {
            id: "6b",
            citations: [
              {
                citation: "Malaquías 1:11",
                text: "Porque desde donde el sol nace hasta donde se pone, es grande mi nombre entre las naciones; y en todo lugar se ofrece a mi nombre incienso y ofrenda limpia, porque grande es mi nombre entre las naciones, dice Jehová de los ejércitos.",
              },
              {
                citation: "1 Timoteo 2:8",
                text: "Quiero, pues, que los hombres oren en todo lugar, levantando manos santas, sin ira ni contienda.",
              },
            ],
          },
          {
            id: "6c",
            citations: [
              {
                citation: "Hechos 10:2",
                text: "piadoso y temeroso de Dios con toda su casa, y que hacía muchas limosnas al pueblo, y oraba a Dios siempre.",
              },
            ],
          },
          {
            id: "6d",
            citations: [
              {
                citation: "Mateo 6:11",
                text: "El pan nuestro de cada día, dánoslo hoy.",
              },
              {
                citation: "Salmo 55:17",
                text: "Tarde y mañana y a mediodía oraré y clamaré, Y él oirá mi voz.",
              },
            ],
          },
          {
            id: "6e",
            citations: [
              {
                citation: "Mateo 6:6",
                text: "Mas tú, cuando ores, entra en tu aposento, y cerrada la puerta, ora a tu Padre que está en secreto; y tu Padre que ve en lo secreto te recompensará en público.",
              },
            ],
          },
          {
            id: "6f",
            citations: [
              {
                citation: "Salmo 84:1-2, 10",
                text: "¡Cuán amables son tus moradas, oh Jehová de los ejércitos! Anhela mi alma y aun ardientemente desea los atrios de Jehová; Mi corazón y mi carne cantan al Dios vivo. [...] Porque mejor es un día en tus atrios que mil fuera de ellos. Escogería antes estar a la puerta de la casa de mi Dios, Que habitar en las moradas de maldad.",
              },
              {
                citation: "Mateo 18:20",
                text: "Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos.",
              },
              {
                citation: "Efesios 2:21-22",
                text: "en quien todo el edificio, bien coordinado, va creciendo para ser un templo santo en el Señor; en quien vosotros también sois juntamente edificados para morada de Dios en el Espíritu.",
              },
            ],
          },
          {
            id: "6g",
            citations: [
              {
                citation: "Hebreos 10:25",
                text: "no dejando de congregarnos, como algunos tienen por costumbre, sino exhortándonos; y tanto más, cuanto veis que aquel día se acerca.",
              },
              {
                citation: "Hechos 2:42",
                text: "Y perseveraban en la doctrina de los apóstoles, en la comunión unos con otros, en el partimiento del pan y en las oraciones.",
              },
            ],
          },
        ],
      },
      {
        number: 7,
        segments: [
          {
            text: "Como es la ley de la naturaleza, que, en general, una proporción de tiempo, por designio de Dios, se aparte para la adoración de Dios, así también por su Palabra, en una moral positiva, y un mandamiento perpetuo, todos los hombres están obligados, en todas las épocas, Él tiene particularmente designado un día en siete para un día de reposo para que se guarde santo para Él,",
            referenceId: "7a",
          },
          {
            text: "que desde el principio del mundo hasta la resurrección de Cristo fue el último día de la semana, y desde la resurrección de Cristo fue cambiado al primer día de la semana, lo que se conoce como el día del Señor: y debe ser perpetuado hasta el fin del mundo como el día de Reposo Cristiano, siendo abolida la observación del último día de la semana.",
            referenceId: "7b",
          },
        ],
        references: [
          {
            id: "7a",
            citations: [
              {
                citation: "Éxodo 20:8",
                text: "Acuérdate del día de reposo para santificarlo.",
              },
            ],
          },
          {
            id: "7b",
            citations: [
              {
                citation: "1 Corintios 16:1-2",
                text: "En cuanto a la ofrenda para los santos, haced vosotros también de la manera que ordené en las iglesias de Galacia. Cada primer día de la semana cada uno de vosotros ponga aparte algo, según haya prosperado, guardándolo, para que cuando yo llegue no se recojan entonces ofrendas.",
              },
              {
                citation: "Hechos 20:7",
                text: "El primer día de la semana, reunidos los discípulos para partir el pan, Pablo les enseñaba, habiendo de salir al día siguiente; y alargó el discurso hasta la medianoche.",
              },
              {
                citation: "Apocalipsis 1:10",
                text: "Yo estaba en el Espíritu en el día del Señor, y oí detrás de mí una gran voz como de trompeta,",
              },
            ],
          },
        ],
      },
      {
        number: 8,
        segments: [
          {
            text: "El día de reposo se guarda santo para el Señor, cuando los hombres, después de la debida preparación de su corazón, y ordenados sus asuntos comunes con anticipación, no observan solamente un santo descanso durante todo el día, de sus propias obras, palabras y pensamientos,",
            referenceId: "8a",
          },
          {
            text: "acerca de sus ocupaciones y recreación seculares, sino que también se dedica todo el tiempo a los ejercicios públicos y privados de su culto, y a los deberes de necesidad y de misericordia.",
            referenceId: "8b",
          },
        ],
        references: [
          {
            id: "8a",
            citations: [
              {
                citation: "Isaías 58:13",
                text: "Si retrajeres del día de reposo tu pie, de hacer tu voluntad en mi día santo, y lo llamares delicia, santo, glorioso de Jehová; y lo venerares, no andando en tus propios caminos, ni buscando tu voluntad, ni hablando tus propias palabras,",
              },
              {
                citation: "Nehemías 13:15-22",
                text: "En aquellos días vi en Judá a algunos que pisaban en lagares en el día de reposo, y que acarreaban manojos, y cargaban asnos con vino, y también de uvas, de higos y toda suerte de carga, y que traían a Jerusalén en día de reposo; y los amonesté acerca del día en que vendían las provisiones...",
              },
            ],
          },
          {
            id: "8b",
            citations: [
              {
                citation: "Mateo 12:1-13",
                text: "En aquel tiempo iba Jesús por los sembrados en un día de reposo; y sus discípulos tuvieron hambre, y comenzaron a arrancar espigas y a comer...",
              },
            ],
          },
        ],
      },
    ],
  },
  // Chapter 23: Sobre el Canto a Dios
  {
    id: 23,
    title: "Sobre el Canto a Dios",
    paragraphs: [
      {
        number: 1,
        segments: [
          {
            text: "Creemos que cantar las alabanzas de Dios, es una ordenanza sagrada de Cristo, y no una parte de la religión natural, o sólo un deber moral, sino para que se someta a la institución divina, se impuso en las iglesias de Cristo el cantar salmos, himnos y cánticos espirituales, y que toda la iglesia en sus asambleas públicas, así como los cristianos particulares, deben",
            referenceId: "1a",
          },
          {
            text: "cantar las alabanzas de Dios conforme a la mejor luz que han recibido. Lo que es más, fue practicado por el gran representante de la iglesia, por",
            referenceId: "1b",
          },
          {
            text: "nuestro Señor Jesucristo con sus discípulos, después de que Él había instituido y celebrado la sagrada ordenanza de Su Santa Cena, como señal conmemorativa del amor que redime.",
            referenceId: "1c",
          },
        ],
        references: [
          {
            id: "1a",
            citations: [
              {
                citation: "Hechos 16:25",
                text: "Pero a medianoche, orando Pablo y Silas, cantaban himnos a Dios; y los presos los oían.",
              },
              {
                citation: "Efesios 5:19",
                text: "hablando entre vosotros con salmos, con himnos y cánticos espirituales, cantando y alabando al Señor en vuestros corazones;",
              },
              {
                citation: "Colosenses 3:16",
                text: "La palabra de Cristo more en abundancia en vosotros, enseñándoos y exhortándoos unos a otros en toda sabiduría, cantando con gracia en vuestros corazones al Señor con salmos e himnos y cánticos espirituales.",
              },
            ],
          },
          {
            id: "1b",
            citations: [
              {
                citation: "Hebreos 2:12",
                text: "diciendo: Anunciaré a mis hermanos tu nombre, En medio de la congregación te alabaré.",
              },
              {
                citation: "Santiago 5:13",
                text: "¿Está alguno entre vosotros afligido? Haga oración. ¿Está alguno alegre? Cante alabanzas.",
              },
            ],
          },
          {
            id: "1c",
            citations: [
              {
                citation: "Mateo 26:30",
                text: "Y cuando hubieron cantado el himno, salieron al monte de los Olivos.",
              },
              {
                citation: "Mateo 14:26",
                text: "Y los discípulos, viéndole andar sobre el mar, se turbaron, diciendo: ¡Un fantasma! Y dieron voces de miedo.",
              },
            ],
          },
        ],
      },
    ],
  },
  // Chapter 24: De los Juramentos y Votos Lícitos
  {
    id: 24,
    title: "De los Juramentos y Votos Lícitos",
    paragraphs: [
      {
        number: 1,
        segments: [
          {
            text: "Un juramento lícito es una parte del culto religioso, en el que la persona que toma posesión de juramento en la verdad, la justicia y el juicio, solemnemente llama a Dios por testigo de lo que jura,",
            referenceId: "1a",
          },
          {
            text: "y que le juzgue de acuerdo a la verdad o falsedad de sus palabras.",
            referenceId: "1b",
          },
        ],
        references: [
          {
            id: "1a",
            citations: [
              {
                citation: "Éxodo 20:7",
                text: "No tomarás el nombre de Jehová tu Dios en vano; porque no dará por inocente Jehová al que tomare su nombre en vano.",
              },
              {
                citation: "Deuteronomio 10:20",
                text: "A Jehová tu Dios temerás, a él servirás, a él seguirás, y por su nombre jurarás.",
              },
              {
                citation: "Jeremías 4:2",
                text: "y jurares: Vive Jehová, en verdad, en juicio y en justicia, entonces las naciones serán benditas en él, y en él se gloriarán.",
              },
            ],
          },
          {
            id: "1b",
            citations: [
              {
                citation: "2 Crónicas 6:22-23",
                text: "Si alguno pecare contra su prójimo, y se le exigiere juramento, y viniere a jurar ante tu altar en esta casa, tú oirás desde los cielos, y actuarás, y juzgarás a tus siervos, dando la paga al impío, haciendo recaer su proceder sobre su cabeza, y justificando al justo al darle conforme a su justicia.",
              },
            ],
          },
        ],
      },
      {
        number: 2,
        segments: [
          {
            text: "El nombre de Dios solamente es aquello por lo que los hombres deben jurar, y él se va a utilizar, con todo el santo temor y reverencia, por lo tanto al jurar vana o temerariamente por ese nombre glorioso y temible, o jurar por cualquier otra cosa, es pecaminoso, y debe aborrecerse;",
            referenceId: "2a",
          },
          {
            text: "sin embargo como en materia de peso y de momento, para la confirmación de la verdad, y poner fin a toda contienda, un juramento está justificado por la palabra de Dios;",
            referenceId: "2b",
          },
          {
            text: "un juramento legal impuesto por la autoridad legal en la materia, se deben tomar.",
            referenceId: "2c",
          },
        ],
        references: [
          {
            id: "2a",
            citations: [
              {
                citation: "Mateo 5:34, 37",
                text: "Pero yo os digo: No juréis en ninguna manera; ni por el cielo, porque es el trono de Dios; [...] Pero sea vuestro hablar: Sí, sí; no, no; porque lo que es más de esto, de mal procede.",
              },
              {
                citation: "Santiago 5:12",
                text: "Pero sobre todo, hermanos míos, no juréis, ni por el cielo, ni por la tierra, ni por ningún otro juramento; sino que vuestro sí sea sí, y vuestro no sea no, para que no caigáis en condenación.",
              },
            ],
          },
          {
            id: "2b",
            citations: [
              {
                citation: "Hebreos 6:16",
                text: "Porque los hombres ciertamente juran por uno mayor que ellos, y para ellos el fin de toda controversia es el juramento para confirmación.",
              },
              {
                citation: "2 Corintios 1:23",
                text: "Mas yo invoco a Dios por testigo sobre mi alma, que por ser indulgente con vosotros no he pasado todavía a Corinto.",
              },
            ],
          },
          {
            id: "2c",
            citations: [
              {
                citation: "Nehemías 13:25",
                text: "Y contendí con ellos, y los maldije, y herí a algunos de ellos, y les arranqué los cabellos, y les hice jurar por Dios, diciendo: No daréis vuestras hijas a sus hijos, ni tomaréis de sus hijas para vuestros hijos, ni para vosotros mismos.",
              },
            ],
          },
        ],
      },
      {
        number: 3,
        segments: [
          {
            text: "Todo el que toma el juramento de acuerdo a la Palabra de Dios, debidamente debería considerar la gravedad de un acto tan solemne, y en él a de declarar nada más que lo que él sabe que es verdad; porque por juramentos precipitados, falso y vanos, el Señor es provocado, y por ello esta tierra está de luto.",
            referenceId: "3a",
          },
        ],
        references: [
          {
            id: "3a",
            citations: [
              {
                citation: "Levítico 19:12",
                text: "Y no juraréis falsamente por mi nombre, profanando así el nombre de tu Dios. Yo Jehová.",
              },
              {
                citation: "Jeremías 23:10",
                text: "Porque la tierra está llena de adúlteros; a causa de la maldición la tierra está desierta; los pastizales del desierto se secaron; la carrera de ellos fue mala, y su valentía no es recta.",
              },
            ],
          },
        ],
      },
      {
        number: 4,
        segments: [
          {
            text: "El juramento debe ser tomado en el sentido claro y común de las palabras, sin equívocos o reservas mentales.",
            referenceId: "4a",
          },
        ],
        references: [
          {
            id: "4a",
            citations: [
              {
                citation: "Salmo 24:4",
                text: "El limpio de manos y puro de corazón; El que no ha elevado su alma a cosas vanas, Ni jurado con engaño.",
              },
            ],
          },
        ],
      },
      {
        number: 5,
        segments: [
          {
            text: "Un voto, que no se va a efectuar a ninguna criatura, sino sólo a Dios, ha de hacerse y llevarse a cabo con todo cuidado piadoso y fidelidad;",
            referenceId: "5a",
          },
          {
            text: "pero los votos monásticos papistas del celibato perpetuo,",
            referenceId: "5b",
          },
          {
            text: "pretendida pobreza,",
            referenceId: "5c",
          },
          {
            text: "y la obediencia regular, están tan lejos de ser más altos grados de perfección, que son supersticiosas y pecaminosas trampas, en las que ningún cristiano debería enredarse a sí mismo.",
            referenceId: "5d",
          },
        ],
        references: [
          {
            id: "5a",
            citations: [
              {
                citation: "Salmo 76:11",
                text: "Prometed, y pagad a Jehová vuestro Dios; Todos los que están alrededor de él, traigan ofrendas al Temible.",
              },
              {
                citation: "Génesis 28:20-22",
                text: "E hizo Jacob voto, diciendo: Si fuere Dios conmigo, y me guardare en este viaje en que voy, y me diere pan para comer y vestido para vestir, y si volviere en paz a casa de mi padre, Jehová será mi Dios. Y esta piedra que he puesto por señal, será casa de Dios; y de todo lo que me dieres, el diezmo apartaré para ti.",
              },
            ],
          },
          {
            id: "5b",
            citations: [
              {
                citation: "1 Corintios 7:2, 9",
                text: "pero a causa de las fornicaciones, cada uno tenga su propia mujer, y cada una tenga su propio marido. [...] pero si no tienen don de continencia, cásense, pues mejor es casarse que estarse quemando.",
              },
            ],
          },
          {
            id: "5c",
            citations: [
              {
                citation: "Efesios 4:28",
                text: "El que hurtaba, no hurte más, sino trabaje, haciendo con sus manos lo que es bueno, para que tenga qué compartir con el que padece necesidad.",
              },
            ],
          },
          {
            id: "5d",
            citations: [
              {
                citation: "Mateo 19:11",
                text: "Entonces él les dijo: No todos son capaces de recibir esto, sino aquellos a quienes es dado.",
              },
            ],
          },
        ],
      },
    ],
  },
  // Chapter 25: De los Magistrados Civiles
  {
    id: 25,
    title: "De los Magistrados Civiles",
    paragraphs: [
      {
        number: 1,
        segments: [
          {
            text: "Dios, el supremo Señor y Rey de todo el mundo, ha ordenado a los magistrados civiles para estar debajo de él, sobre el pueblo, para su propia gloria y el bien público, y para ello les ha armado con el poder de la espada, para la defensa y el ánimo de los que hacen bien, y para el castigo de los malhechores.",
            referenceId: "1a",
          },
        ],
        references: [
          {
            id: "1a",
            citations: [
              {
                citation: "Romanos 13:1-4",
                text: "Sométase toda persona a las autoridades superiores; porque no hay autoridad sino de parte de Dios, y las que hay, por Dios han sido establecidas. De modo que quien se opone a la autoridad, a lo establecido por Dios resiste; y los que resisten, acarrean condenación para sí mismos. Porque los magistrados no están para infundir temor al que hace el bien, sino al malo. ¿Quieres, pues, no temer la autoridad? Haz lo bueno, y tendrás alabanza de ella; porque es servidor de Dios para tu bien. Pero si haces lo malo, teme; porque no en vano lleva la espada, pues es servidor de Dios, vengador para castigar al que hace lo malo.",
              },
            ],
          },
        ],
      },
      {
        number: 2,
        segments: [
          {
            text: "Es lícito a los cristianos aceptar y desempeñar el cargo de magistrado cuando sean llamados a ello; de lo cual en el desempeño del cargo deben mantener especialmente la justicia y la paz,",
            referenceId: "2a",
          },
          {
            text: "de acuerdo con las leyes sanas de cada reino y del estado, así con este fin pueden legalmente ahora, bajo el Nuevo Testamento hacer la guerra en las ocasiones justas y necesarias.",
            referenceId: "2b",
          },
        ],
        references: [
          {
            id: "2a",
            citations: [
              {
                citation: "2 Samuel 23:3",
                text: "El Dios de Israel ha dicho, Me habló la Roca de Israel: Habrá un justo que gobierne entre los hombres, Que gobierne en el temor de Dios.",
              },
              {
                citation: "Salmo 82:3, 4",
                text: "Defended al débil y al huérfano; Haced justicia al afligido y al menesteroso. Librad al afligido y al necesitado; Libradlo de mano de los impíos.",
              },
            ],
          },
          {
            id: "2b",
            citations: [
              {
                citation: "Lucas 3:14",
                text: "También le preguntaron unos soldados, diciendo: Y nosotros, ¿qué haremos? Y les dijo: No hagáis extorsión a nadie, ni calumniéis; y contentaos con vuestro salario.",
              },
            ],
          },
        ],
      },
      {
        number: 3,
        segments: [
          {
            text: "Los magistrados civiles están establecidos por Dios para el mencionado fin; se les debe rendir sujeción en el Señor, en todas las cosas legales por ellos ordenadas, no solamente por causa de la ira, sino por motivos de la conciencia;",
            referenceId: "3a",
          },
          {
            text: "y debemos de hacer súplicas y oraciones por los reyes y por todos los que están en eminencia, para que bajo su gobierno vivamos una vida tranquila y apacible, con toda piedad y honestidad.",
            referenceId: "3b",
          },
        ],
        references: [
          {
            id: "3a",
            citations: [
              {
                citation: "Romanos 13:5-7",
                text: "Por lo cual es necesario estarle sujetos, no solamente por razón del castigo, sino también por causa de la conciencia. Pues por esto pagáis también los tributos, porque son servidores de Dios que atienden continuamente a esto mismo. Pagad a todos lo que debéis: al que tributo, tributo; al que impuesto, impuesto; al que respeto, respeto; al que honra, honra.",
              },
              {
                citation: "1 Pedro 2:17",
                text: "Honrad a todos. Amad a los hermanos. Temed a Dios. Honrad al rey.",
              },
            ],
          },
          {
            id: "3b",
            citations: [
              {
                citation: "1 Timoteo 2:1, 2",
                text: "Exhorto ante todo, a que se hagan rogativas, oraciones, peticiones y acciones de gracias, por todos los hombres; por los reyes y por todos los que están en eminencia, para que vivamos quieta y reposadamente en toda piedad y honestidad.",
              },
            ],
          },
        ],
      },
    ],
  },
  // Chapter 26: Del Matrimonio
  {
    id: 26,
    title: "Del Matrimonio",
    paragraphs: [
      {
        number: 1,
        segments: [
          {
            text: "El matrimonio debe ser entre un hombre y una mujer; ni es lícito para un hombre tener más de una esposa, ni para ninguna mujer tener más de un marido al mismo tiempo.",
            referenceId: "1a",
          },
        ],
        references: [
          {
            id: "1a",
            citations: [
              {
                citation: "Génesis 2:24",
                text: "Por tanto, dejará el hombre a su padre y a su madre, y se unirá a su mujer, y serán una sola carne.",
              },
              {
                citation: "Malaquías 2:15",
                text: "¿No hizo él uno, habiendo en él abundancia de espíritu? ¿Y por qué uno? Porque buscaba una descendencia para Dios. Guardaos, pues, en vuestro espíritu, y no seáis desleales para con la mujer de vuestra juventud.",
              },
              {
                citation: "Mateo 19:5, 6",
                text: "y dijo: Por esto el hombre dejará padre y madre, y se unirá a su mujer, y los dos serán una sola carne? Así que no son ya más dos, sino una sola carne; por tanto, lo que Dios juntó, no lo separe el hombre.",
              },
            ],
          },
        ],
      },
      {
        number: 2,
        segments: [
          {
            text: "El matrimonio fue instituido para la mutua ayuda de esposo y esposa,",
            referenceId: "2a",
          },
          {
            text: "para la multiplicación de la humanidad como un asunto legítimo, y la prevención de la impureza.",
            referenceId: "2b",
          },
        ],
        references: [
          {
            id: "2a",
            citations: [
              {
                citation: "Génesis 2:18",
                text: "Y dijo Jehová Dios: No es bueno que el hombre esté solo; le haré ayuda idónea para él.",
              },
            ],
          },
          {
            id: "2b",
            citations: [
              {
                citation: "Génesis 1:28",
                text: "Y los bendijo Dios, y les dijo: Fructificad y multiplicaos; llenad la tierra, y sojuzgadla, y señoread en los peces del mar, en las aves de los cielos, y en todas las bestias que se mueven sobre la tierra.",
              },
              {
                citation: "1 Corintios 7:2, 9",
                text: "pero a causa de las fornicaciones, cada uno tenga su propia mujer, y cada una tenga su propio marido. [...] pero si no tienen don de continencia, cásense, pues mejor es casarse que estarse quemando.",
              },
            ],
          },
        ],
      },
      {
        number: 3,
        segments: [
          {
            text: "Es lícito para toda clase de personas contraer matrimonio, que sean capaces con sano juicio de dar su consentimiento;",
            referenceId: "3a",
          },
          {
            text: "sin embargo es deber de los cristianos casarse en el Señor; y por lo tanto los que profesan la verdadera religión, no deben casarse con los incrédulos, o idólatras; ni deben como son piadosos, unirse en yugo desigual, casándose con los que son malvados en su vida, o mantienen una herejía condenable.",
            referenceId: "3b",
          },
        ],
        references: [
          {
            id: "3a",
            citations: [
              {
                citation: "Hebreos 13:4",
                text: "Honroso sea en todos el matrimonio, y el lecho sin mancilla; pero a los fornicarios y a los adúlteros los juzgará Dios.",
              },
              {
                citation: "1 Timoteo 4:3",
                text: "prohibirán casarse, y mandarán abstenerse de alimentos que Dios creó para que con acción de gracias participasen de ellos los creyentes y los que han conocido la verdad.",
              },
            ],
          },
          {
            id: "3b",
            citations: [
              {
                citation: "1 Corintios 7:39",
                text: "La mujer casada está ligada por la ley mientras su marido vive; pero si su marido muriere, libre es para casarse con quien quiera, con tal que sea en el Señor.",
              },
              {
                citation: "Nehemías 13:25-27",
                text: "Y contendí con ellos, y los maldije, y herí a algunos de ellos, y les arranqué los cabellos, y les hice jurar por Dios, diciendo: No daréis vuestras hijas a sus hijos, ni tomaréis de sus hijas para vuestros hijos, ni para vosotros mismos.",
              },
            ],
          },
        ],
      },
      {
        number: 4,
        segments: [
          {
            text: "El matrimonio no debería hacerse dentro de los grados de consanguinidad o afinidad, prohibidos en la Palabra; ni pueden tales matrimonios incestuosos legalizarse jamás, por cualquier ley del hombre o el consentimiento de las partes, de manera que esas personas puedan vivir juntos como marido y mujer.",
            referenceId: "4a",
          },
        ],
        references: [
          {
            id: "4a",
            citations: [
              {
                citation: "Levítico 18",
                text: "Ningún varón se llegue a parienta próxima alguna, para descubrir su desnudez. Yo Jehová.",
              },
              {
                citation: "Marcos 6:18",
                text: "Porque Juan decía a Herodes: No te es lícito tener la mujer de tu hermano.",
              },
              {
                citation: "1 Corintios 5:1",
                text: "De cierto se oye que hay entre vosotros fornicación, y tal fornicación cual ni aun se nombra entre los gentiles; tanto que alguno tiene la mujer de su padre.",
              },
            ],
          },
        ],
      },
    ],
  },
  // Chapter 27: De la Iglesia
  {
    id: 27,
    title: "De la Iglesia",
    paragraphs: [
      {
        number: 1,
        segments: [
          {
            text: "La iglesia católica o universal,",
            referenceId: "1a",
          },
          {
            text: "que (con respecto a la obra interna del Espíritu y verdad de la gracia) puede llamarse invisible, se compone de todo el número de los elegidos, que han sido, son o serán reunidos en uno bajo Cristo, la cabeza de la misma, y es el esposo, el cuerpo, la plenitud de Aquel que lo llena todo en todos.",
            referenceId: "1b",
          },
        ],
        references: [
          {
            id: "1a",
            citations: [
              {
                citation: "Hebreos 12:23",
                text: "a la congregación de los primogénitos que están inscritos en los cielos, a Dios el Juez de todos, a los espíritus de los justos hechos perfectos,",
              },
            ],
          },
          {
            id: "1b",
            citations: [
              {
                citation: "Colosenses 1:18",
                text: "y él es la cabeza del cuerpo que es la iglesia, él que es el principio, el primogénito de entre los muertos, para que en todo tenga la preeminencia;",
              },
              {
                citation: "Efesios 1:10, 22, 23",
                text: "de reunir todas las cosas en Cristo, en la dispensación del cumplimiento de los tiempos, así las que están en los cielos, como las que están en la tierra. [...] y sometió todas las cosas bajo sus pies, y lo dio por cabeza sobre todas las cosas a la iglesia, la cual es su cuerpo, la plenitud de Aquel que todo lo llena en todo.",
              },
              {
                citation: "Efesios 5:23, 27, 32",
                text: "porque el marido es cabeza de la mujer, así como Cristo es cabeza de la iglesia, la cual es su cuerpo, y él es su Salvador. [...] a fin de presentársela a sí mismo, una iglesia gloriosa, que no tuviese mancha ni arruga ni cosa semejante, sino que fuese santa y sin mancha. [...] Grande es este misterio; mas yo digo esto respecto de Cristo y de la iglesia.",
              },
            ],
          },
        ],
      },
      {
        number: 2,
        segments: [
          {
            text: "Todas las personas en todo el mundo, que profesan la fe del evangelio, y la obediencia a Dios por Cristo conforme al mismo, que no destruyan su propia profesión por cualquier error fundamental, o impiedad en su conversación, son y pueden ser llamados santos visibles;",
            referenceId: "2a",
          },
          {
            text: "y de los tales deben todas las congregaciones particulares ser constituidas.",
            referenceId: "2b",
          },
        ],
        references: [
          {
            id: "2a",
            citations: [
              {
                citation: "1 Corintios 1:2",
                text: "a la iglesia de Dios que está en Corinto, a los santificados en Cristo Jesús, llamados a ser santos con todos los que en cualquier lugar invocan el nombre de nuestro Señor Jesucristo, Señor de ellos y nuestro:",
              },
              {
                citation: "Hechos 11:26",
                text: "y hallándole, le trajo a Antioquía. Y se congregaron allí todo un año con la iglesia, y enseñaron a mucha gente; y a los discípulos se les llamó cristianos por primera vez en Antioquía.",
              },
              {
                citation: "Romanos 1:7",
                text: "a todos los que estáis en Roma, amados de Dios, llamados a ser santos: Gracia y paz a vosotros, de Dios nuestro Padre y del Señor Jesucristo.",
              },
            ],
          },
          {
            id: "2b",
            citations: [
              {
                citation: "Efesios 1:20-22",
                text: "la cual operó en Cristo, resucitándole de los muertos y sentándole a su diestra en los lugares celestiales, sobre todo principado y autoridad y poder y señorío, y sobre todo nombre que se nombra, no sólo en este siglo, sino también en el venidero; y sometió todas las cosas bajo sus pies, y lo dio por cabeza sobre todas las cosas a la iglesia,",
              },
            ],
          },
        ],
      },
      {
        number: 3,
        segments: [
          {
            text: "Las iglesias más puras bajo el cielo están sujetas a la mezcla y al error,",
            referenceId: "3a",
          },
          {
            text: "y algunas han degenerado tanto que se han convertido no en iglesias de Cristo, sino en sinagogas de Satanás;",
            referenceId: "3b",
          },
          {
            text: "sin embargo, Cristo siempre tiene, y siempre tendrá un reino en este mundo, hasta el final del mismo, de aquellos que creen en él, y hacen profesión de su nombre.",
            referenceId: "3c",
          },
        ],
        references: [
          {
            id: "3a",
            citations: [
              {
                citation: "1 Corintios 5",
                text: "De cierto se oye que hay entre vosotros fornicación, y tal fornicación cual ni aun se nombra entre los gentiles...",
              },
              {
                citation: "Apocalipsis 2, 3",
                text: "Pero tengo contra ti, que has dejado tu primer amor...",
              },
            ],
          },
          {
            id: "3b",
            citations: [
              {
                citation: "Apocalipsis 18:2",
                text: "Y clamó con voz potente, diciendo: Ha caído, ha caído la gran Babilonia, y se ha hecho habitación de demonios y guarida de todo espíritu inmundo, y albergue de toda ave inmunda y aborrecible.",
              },
              {
                citation: "2 Tesalonicenses 2:11, 12",
                text: "Por esto Dios les envía un poder engañoso, para que crean la mentira, a fin de que sean condenados todos los que no creyeron a la verdad, sino que se complacieron en la injusticia.",
              },
            ],
          },
          {
            id: "3c",
            citations: [
              {
                citation: "Mateo 16:18",
                text: "Y yo también te digo, que tú eres Pedro, y sobre esta roca edificaré mi iglesia; y las puertas del Hades no prevalecerán contra ella.",
              },
              {
                citation: "Salmo 72:17",
                text: "Será su nombre para siempre, Se perpetuará su nombre mientras dure el sol. Benditas serán en él todas las naciones; Lo llamarán bienaventurado.",
              },
              {
                citation: "Salmos 102:28",
                text: "Los hijos de tus siervos habitarán seguros, Y su descendencia será establecida delante de ti.",
              },
              {
                citation: "Apocalipsis 12:17",
                text: "Entonces el dragón se llenó de ira contra la mujer; y se fue a hacer guerra contra el resto de la descendencia de ella, los que guardan los mandamientos de Dios y tienen el testimonio de Jesucristo.",
              },
            ],
          },
        ],
      },
      {
        number: 4,
        segments: [
          {
            text: "El Señor Jesucristo es la Cabeza de la iglesia, en el que, por el nombramiento del Padre, todo el poder para el llamamiento, la institución, orden o gobierno de la iglesia, es investido de un modo supremo y soberano,",
            referenceId: "4a",
          },
          {
            text: "ni puede el Papa de Roma, en ningún sentido ser la cabeza de la misma, sino que él es el anticristo, el hombre de pecado, y el hijo de perdición, que se exalta asimismo en la iglesia en contra de Cristo, y todo lo que se llama Dios, a quien el Señor destruirá con el resplandor de su venida.",
            referenceId: "4b",
          },
        ],
        references: [
          {
            id: "4a",
            citations: [
              {
                citation: "Colosenses 1:18",
                text: "y él es la cabeza del cuerpo que es la iglesia, él que es el principio, el primogénito de entre los muertos, para que en todo tenga la preeminencia;",
              },
              {
                citation: "Mateo 28:18-20",
                text: "Y Jesús se acercó y les habló diciendo: Toda potestad me es dada en el cielo y en la tierra. Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo; enseñándoles que guarden todas las cosas que os he mandado; y he aquí yo estoy con vosotros todos los días, hasta el fin del mundo. Amén.",
              },
              {
                citation: "Efesios 4:11, 12",
                text: "Y él mismo constituyó a unos, apóstoles; a otros, profetas; a otros, evangelistas; a otros, pastores y maestros, a fin de perfeccionar a los santos para la obra del ministerio, para la edificación del cuerpo de Cristo,",
              },
            ],
          },
          {
            id: "4b",
            citations: [
              {
                citation: "2 Tesalonicenses 2:2-9",
                text: "que no os dejéis mover fácilmente de vuestro modo de pensar, ni os conturbéis, ni por espíritu, ni por palabra, ni por carta como si fuera nuestra, en el sentido de que el día del Señor está cerca. Nadie os engañe en ninguna manera; porque no vendrá sin que antes venga la apostasía, y se manifieste el hombre de pecado, el hijo de perdición, el cual se opone y se levanta contra todo lo que se llama Dios o es objeto de culto; tanto que se sienta en el templo de Dios como Dios, haciéndose pasar por Dios.",
              },
            ],
          },
        ],
      },
      {
        number: 5,
        segments: [
          {
            text: "En la ejecución de este poder que le ha sido confiado, el Señor Jesús llama de todo el mundo a sí mismo, a través del ministerio de su palabra, por su Espíritu, a los que son dados a él por su Padre,",
            referenceId: "5a",
          },
          {
            text: "para que anden delante de Él en todos los caminos de la obediencia, que Él prescribe a ellos en su palabra.",
            referenceId: "5b",
          },
          {
            text: "Los así llamados, Él manda a caminar juntos en sociedades concretas, o iglesias, para su edificación mutua, y el debido cumplimiento de ese culto público, que Él requiere de ellos en el mundo.",
            referenceId: "5c",
          },
        ],
        references: [
          {
            id: "5a",
            citations: [
              {
                citation: "Juan 10:16",
                text: "También tengo otras ovejas que no son de este redil; aquéllas también debo traer, y oirán mi voz; y habrá un rebaño, y un pastor.",
              },
              {
                citation: "Juan 12:32",
                text: "Y yo, si fuere levantado de la tierra, a todos atraeré a mí mismo.",
              },
            ],
          },
          {
            id: "5b",
            citations: [
              {
                citation: "Mateo 28:20",
                text: "enseñándoles que guarden todas las cosas que os he mandado; y he aquí yo estoy con vosotros todos los días, hasta el fin del mundo. Amén.",
              },
            ],
          },
          {
            id: "5c",
            citations: [
              {
                citation: "Mateo 18:15-20",
                text: "Por tanto, si tu hermano peca contra ti, ve y repréndele estando tú y él solos; si te oyere, has ganado a tu hermano.",
              },
            ],
          },
        ],
      },
      {
        number: 6,
        segments: [
          {
            text: "Los miembros de estas iglesias son santos por llamamiento, manifestando visiblemente y evidenciando (en y por su profesión y caminar) su obediencia al llamado de Cristo;",
            referenceId: "6a",
          },
          {
            text: "y voluntariamente dan su consentimiento para caminar juntos, de acuerdo al designio de Cristo; dándose a sí mismos al Señor, y uno al otro, por la voluntad de Dios, profesando sujeción a los preceptos del Evangelio.",
            referenceId: "6b",
          },
        ],
        references: [
          {
            id: "6a",
            citations: [
              {
                citation: "Romanos 1:7",
                text: "a todos los que estáis en Roma, amados de Dios, llamados a ser santos: Gracia y paz a vosotros, de Dios nuestro Padre y del Señor Jesucristo.",
              },
              {
                citation: "1 Corintios 1:2",
                text: "a la iglesia de Dios que está en Corinto, a los santificados en Cristo Jesús, llamados a ser santos con todos los que en cualquier lugar invocan el nombre de nuestro Señor Jesucristo, Señor de ellos y nuestro:",
              },
            ],
          },
          {
            id: "6b",
            citations: [
              {
                citation: "Hechos 2:41, 42",
                text: "Así que, los que recibieron su palabra fueron bautizados; y se añadieron aquel día como tres mil personas. Y perseveraban en la doctrina de los apóstoles, en la comunión unos con otros, en el partimiento del pan y en las oraciones.",
              },
              {
                citation: "Hechos 5:13, 14",
                text: "De los demás, ninguno se atrevía a juntarse con ellos; mas el pueblo los alababa grandemente. Y los que creían en el Señor aumentaban más, gran número así de hombres como de mujeres;",
              },
              {
                citation: "2 Corintios 9:13",
                text: "pues por la experiencia de esta ministración glorifican a Dios por la obediencia que profesáis al evangelio de Cristo, y por la liberalidad de vuestra contribución para ellos y para todos;",
              },
            ],
          },
        ],
      },
      {
        number: 7,
        segments: [
          {
            text: "A cada una de estas iglesias así reunidas, de acuerdo con su mente declarada en su Palabra, Él le ha dado todo el poder y la autoridad, que es en cualquier sentido necesarios para realizar ese orden en la adoración y en la disciplina, que Él ha instituido para ellos lo observen, con mandatos y reglas para el ejercicio debido y correcto, y la ejecución de ese poder.",
            referenceId: "7a",
          },
        ],
        references: [
          {
            id: "7a",
            citations: [
              {
                citation: "Mateo 18:17, 18",
                text: "Si no los oyere a ellos, dilo a la iglesia; y si no oyere a la iglesia, tenle por gentil y publicano. De cierto os digo que todo lo que atéis en la tierra, será atado en el cielo; y todo lo que desatéis en la tierra, será desatado en el cielo.",
              },
              {
                citation: "1 Corintios 5:4, 5",
                text: "En el nombre de nuestro Señor Jesucristo, reunidos vosotros y mi espíritu, con el poder de nuestro Señor Jesucristo, el tal sea entregado a Satanás para destrucción de la carne, a fin de que el espíritu sea salvo en el día del Señor Jesús.",
              },
              {
                citation: "2 Corintios 2:6-8",
                text: "Le basta a tal persona esta reprensión hecha por muchos; así que, al contrario, vosotros más bien debéis perdonarle y consolarle, para que no sea consumido de demasiada tristeza. Por lo cual os ruego que confirméis el amor para con él.",
              },
            ],
          },
        ],
      },
      {
        number: 8,
        segments: [
          {
            text: "Una iglesia local, reunida y completamente organizada de acuerdo a la mente de Cristo, está compuesta por oficiales y miembros; y los oficiales designados por Cristo para ser escogidos y apartados por la iglesia (así llamada y reunida), para la particular administración de las ordenanzas, y la ejecución del poder o la obligación que Él les confía, o al que les llama, para que continúen hasta el fin del mundo, son los obispos o ancianos, y los diáconos.",
            referenceId: "8a",
          },
        ],
        references: [
          {
            id: "8a",
            citations: [
              {
                citation: "Hechos 20:17, 28",
                text: "Enviando, pues, desde Mileto a Éfeso, hizo llamar a los ancianos de la iglesia. [...] Por tanto, mirad por vosotros, y por todo el rebaño en que el Espíritu Santo os ha puesto por obispos, para apacentar la iglesia del Señor, la cual él ganó por su propia sangre.",
              },
              {
                citation: "Filipenses 1:1",
                text: "Pablo y Timoteo, siervos de Jesucristo, a todos los santos en Cristo Jesús que están en Filipos, con los obispos y diáconos:",
              },
            ],
          },
        ],
      },
      {
        number: 9,
        segments: [
          {
            text: "La manera designada por Cristo para la convocatoria de cualquier persona, equipada y dotada por el Espíritu Santo, para el oficio de obispo o anciano en una iglesia, es, que él sea escogido entre ellos por el sufragio común de la Iglesia misma;",
            referenceId: "9a",
          },

          {
            text: "y solemnemente apartado mediante ayuno y oración, con la imposición de las manos de los ancianos de la iglesia, si hay algunos anteriormente constituido en ella;",
            referenceId: "9b",
          },
          {
            text: "y para un diácono que sea elegido por el mismo sufragio, y apartado por la oración, y la misma imposición de las manos.",
            referenceId: "9c",
          },
        ],
        references: [
          {
            id: "9a",
            citations: [
              {
                citation: "Hechos 14:23",
                text: "Y constituyeron ancianos en cada iglesia, y habiendo orado con ayunos, los encomendaron al Señor en quien habían creído.",
              },
            ],
          },

          {
            id: "9b",
            citations: [
              {
                citation: "1 Timoteo 4:14",
                text: "No descuides el don que hay en ti, que te fue dado mediante profecía con la imposición de las manos del presbiterio.",
              },
            ],
          },
          {
            id: "9c",
            citations: [
              {
                citation: "Hechos 6:3, 5, 6",
                text: "Buscad, pues, hermanos, de entre vosotros a siete varones de buen testimonio, llenos del Espíritu Santo y de sabiduría, a quienes encarguemos de este trabajo. [...] Agradó la propuesta a toda la multitud; y eligieron a Esteban, varón lleno de fe y del Espíritu Santo, a Felipe, a Prócoro, a Nicanor, a Timón, a Parmenas, y a Nicolás prosélito de Antioquía; a los cuales presentaron ante los apóstoles, quienes, orando, les impusieron las manos.",
              },
            ],
          },
        ],
      },
      {
        number: 10,
        segments: [
          {
            text: "El trabajo de los pastores es constantemente atender al servicio de Cristo, en sus iglesias, en el ministerio de la Palabra y la oración, de velar por sus almas, como quienes han de dar cuenta a Él;",
            referenceId: "10a",
          },
          {
            text: "es obligatorio de las iglesias a las que ellos ministran, no sólo a darles todo el debido respeto, sino también compartir con ellos de todas sus cosas buenas de acuerdo a su capacidad,",
            referenceId: "10b",
          },
          {
            text: "a fin de que puedan tener una provisión adecuada, sin estar inmersos en los asuntos seculares,",
            referenceId: "10c",
          },
          {
            text: "y también pueden ser capaces de ejercer la hospitalidad hacia los demás,",
            referenceId: "10d",
          },
          {
            text: "y esto es requerido por la ley de la naturaleza, y por orden expresa de nuestro Señor Jesús, quien ha ordenado que los que predican el Evangelio vivan del Evangelio.",
            referenceId: "10e",
          },
        ],
        references: [
          {
            id: "10a",
            citations: [
              {
                citation: "Hechos 6:4",
                text: "Y nosotros persistiremos en la oración y en el ministerio de la palabra.",
              },
              {
                citation: "Hebreos 13:17",
                text: "Obedeced a vuestros pastores, y sujetaos a ellos; porque ellos velan por vuestras almas, como quienes han de dar cuenta; para que lo hagan con alegría, y no quejándose, porque esto no os es provechoso.",
              },
            ],
          },
          {
            id: "10b",
            citations: [
              {
                citation: "1 Timoteo 5:17, 18",
                text: "Los ancianos que gobiernan bien, sean tenidos por dignos de doble honor, mayormente los que trabajan en predicar y enseñar. Pues la Escritura dice: No pondrás bozal al buey que trilla; y: Digno es el obrero de su salario.",
              },
              {
                citation: "Gálatas 6:6, 7",
                text: "El que es enseñado en la palabra, haga partícipe de toda cosa buena al que lo instruye. No os engañéis; Dios no puede ser burlado: pues todo lo que el hombre sembrare, eso también segará.",
              },
            ],
          },
          {
            id: "10c",
            citations: [
              {
                citation: "2 Timoteo 2:4",
                text: "Ninguno que milita se enreda en los negocios de la vida, a fin de agradar a aquel que lo tomó por soldado.",
              },
            ],
          },
          {
            id: "10d",
            citations: [
              {
                citation: "1 Timoteo 3:2",
                text: "Pero es necesario que el obispo sea irreprensible, marido de una sola mujer, sobrio, prudente, decoroso, hospedador, apto para enseñar;",
              },
            ],
          },
          {
            id: "10e",
            citations: [
              {
                citation: "1 Corintios 9:6-14",
                text: "¿O sólo yo y Bernabé no tenemos derecho de no trabajar? [...] Así también ordenó el Señor a los que anuncian el evangelio, que vivan del evangelio.",
              },
            ],
          },
        ],
      },
      {
        number: 11,
        segments: [
          {
            text: "A pesar de que sea responsabilidad de los obispos o pastores de las iglesias, estar constantemente dedicados a la predicación de la Palabra, según su oficio, sin embargo, la obra de predicar la palabra no es tan particularmente limitada a ellos, sino que otros también dotados y equipados por el Santo Espíritu para ello, y aprobados y llamados por la Iglesia, puede y debe llevarla a cabo.",
            referenceId: "11a",
          },
        ],
        references: [
          {
            id: "11a",
            citations: [
              {
                citation: "Hechos 11:19-21",
                text: "Ahora bien, los que habían sido esparcidos a causa de la persecución que hubo con motivo de Esteban, pasaron hasta Fenicia, Chipre y Antioquía, no hablando a nadie la palabra, sino sólo a los judíos. Pero había entre ellos unos varones de Chipre y de Cirene, los cuales, cuando entraron en Antioquía, hablaron también a los griegos, anunciando el evangelio del Señor Jesús. Y la mano del Señor estaba con ellos, y gran número creyó y se convirtió al Señor.",
              },
              {
                citation: "1 Pedro 4:10, 11",
                text: "Cada uno según el don que ha recibido, minístrelo a los otros, como buenos administradores de la multiforme gracia de Dios. Si alguno habla, hable conforme a las palabras de Dios; si alguno ministra, ministre conforme al poder que Dios da, para que en todo sea Dios glorificado por Jesucristo, a quien pertenecen la gloria y el imperio por los siglos de los siglos. Amén.",
              },
            ],
          },
        ],
      },
      {
        number: 12,
        segments: [
          {
            text: "Como todos los creyentes están obligados a unirse ellos mismos a iglesias particulares, cuando y donde tengan la oportunidad de hacerlo; asimismo todos aquellos que son admitidos a los privilegios de una iglesia, también están bajo las reprensión y el gobierno de esta, de acuerdo con la regla de Cristo.",
            referenceId: "12a",
          },
        ],
        references: [
          {
            id: "12a",
            citations: [
              {
                citation: "1 Tesalonicenses 5:14",
                text: "También os rogamos, hermanos, que amonestéis a los ociosos, que alentéis a los de poco ánimo, que sostengáis a los débiles, que seáis pacientes para con todos.",
              },
              {
                citation: "2 Tesalonicenses 3:6, 14, 15",
                text: "Pero os ordenamos, hermanos, en el nombre de nuestro Señor Jesucristo, que os apartéis de todo hermano que ande desordenadamente, y no según la enseñanza que recibisteis de nosotros. [...] Si alguno no obedece a lo que decimos por medio de esta carta, a ése señaladlo, y no os juntéis con él, para que se avergüence. Mas no lo tengáis por enemigo, sino amonestadle como a hermano.",
              },
            ],
          },
        ],
      },
      {
        number: 13,
        segments: [
          {
            text: "Ningún miembro de la iglesia, sobre la base de alguna ofensa recibida, después de haber cumplido con el deber requerido en este caso hacia la persona a la que se siente ofendido, debe perturbar en algo el orden de la iglesia, o ausentarse él mismo de las asambleas de la iglesia, o la administración de alguna de las ordenanzas, sobre la base de tal ofensa de cualquier otro miembro, sino que debe esperar en Cristo, en el procedimiento posterior de la iglesia.",
            referenceId: "13a",
          },
        ],
        references: [
          {
            id: "13a",
            citations: [
              {
                citation: "Mateo 18:15-17",
                text: "Por tanto, si tu hermano peca contra ti, ve y repréndele estando tú y él solos; si te oyere, has ganado a tu hermano. Mas si no te oyere, toma aún contigo uno o dos, para que en boca de dos o tres testigos conste toda palabra. Si no los oyere a ellos, dilo a la iglesia; y si no oyere a la iglesia, tenle por gentil y publicano.",
              },
              {
                citation: "Efesios 4:2, 3",
                text: "con toda humildad y mansedumbre, soportándoos con paciencia los unos a los otros en amor, solícitos en guardar la unidad del Espíritu en el vínculo de la paz.",
              },
            ],
          },
        ],
      },
      {
        number: 14,
        segments: [
          {
            text: "Como que cada iglesia, y todos los miembros de la misma, están obligados a orar continuamente por el bien y la prosperidad de todas las iglesias de Cristo, en todos los lugares y en todas las ocasiones ayudar a cada uno dentro de los límites de sus puestos y oficios, en el ejercicio de sus dones y gracias,",
            referenceId: "14a",
          },
          {
            text: "así las iglesias, cuando estén establecidas por la providencia de Dios de manera que puedan gozar de la oportunidad y el beneficio de ello,",
            referenceId: "14b",
          },
          {
            text: "deben tener comunión entre sí, para su paz, crecimiento en amor y edificación mutua.",
            referenceId: "14c",
          },
        ],
        references: [
          {
            id: "14a",
            citations: [
              {
                citation: "Efesios 6:18",
                text: "orando en todo tiempo con toda oración y súplica en el Espíritu, y velando en ello con toda perseverancia y súplica por todos los santos;",
              },
              {
                citation: "Salmo 122:6",
                text: "Pedid por la paz de Jerusalén; Sean prosperados los que te aman.",
              },
            ],
          },
          {
            id: "14b",
            citations: [
              {
                citation: "Romanos 16:1, 2",
                text: "Os recomiendo además nuestra hermana Febe, la cual es diaconisa de la iglesia en Cencrea; que la recibáis en el Señor, como es digno de los santos, y que la ayudéis en cualquier cosa en que necesite de vosotros; porque ella ha ayudado a muchos, y a mí mismo.",
              },
            ],
          },
          {
            id: "14c",
            citations: [
              {
                citation: "3 Juan 8-10",
                text: "Nosotros, pues, debemos acoger a tales personas, para que cooperemos con la verdad.",
              },
            ],
          },
        ],
      },
      {
        number: 15,
        segments: [
          {
            text: "En los casos de dificultades o diferencias, ya sea en el punto de la doctrina o en el gobierno, en el que cualquiera de las iglesias en general están preocupados, o cualquier iglesia, en su paz, unión, y edificación; o cualquier miembro o miembros de cualquier iglesia son dañados, en o por cualquier procedimiento de reprensión no de acuerdo a la verdad y el orden: es conforme a la mente de Cristo, que muchas iglesias que tengan comunión entre sí, hacer, a través de sus mensajeros, una reunión para examinar y dar su consejo en o alrededor de esa materia en la diferencia, que deberán notificarse a todas las iglesias concernidas;",
            referenceId: "15a",
          },
          {
            text: "sin embargo estos mensajeros reunidos, no tienen en sus manos un poder eclesiástico propiamente dicho; ni con alguna jurisdicción sobre las iglesias mismas, para ejercer cualquier censura ya sea por las iglesias o personas; ni imponer su determinación en las iglesias u oficiales.",
            referenceId: "15b",
          },
        ],
        references: [
          {
            id: "15a",
            citations: [
              {
                citation: "Hechos 15:2, 4, 6, 22, 23, 25",
                text: "Como Pablo y Bernabé tuviesen una discusión y contienda no pequeña con ellos, se dispuso que subiesen Pablo y Bernabé a Jerusalén, y algunos otros de ellos, a los apóstoles y a los ancianos, para tratar esta cuestión. [...] Y llegados a Jerusalén, fueron recibidos por la iglesia y los apóstoles y los ancianos, y refirieron todas las cosas que Dios había hecho con ellos.",
              },
            ],
          },
          {
            id: "15b",
            citations: [
              {
                citation: "2 Corintios 1:24",
                text: "No que nos enseñoreemos de vuestra fe, sino que colaboramos para vuestro gozo; porque por la fe estáis firmes.",
              },
              {
                citation: "1 Juan 4:1",
                text: "Amados, no creáis a todo espíritu, sino probad los espíritus si son de Dios; porque muchos falsos profetas han salido por el mundo.",
              },
            ],
          },
        ],
      },
    ],
  },
  // Chapter 28: De la Comunión de los Santos
  {
    id: 28,
    title: "De la Comunión de los Santos",
    paragraphs: [
      {
        number: 1,
        segments: [
          {
            text: "Todos los santos que están unidos a Jesucristo,",
            referenceId: "1a",
          },
          {
            text: "su cabeza, por su Espíritu, y la fe,",
            referenceId: "1b",
          },
          {
            text: "a pesar de que no se hacen por ello una persona con él,",
            referenceId: "1c",
          },
          {
            text: "tienen comunión con sus gracias, sufrimientos, muerte, resurrección y gloria;",
            referenceId: "1d",
          },
          {
            text: "y, uniéndose unos a los otros en amor, tienen comunión en los dones y demás gracias,",
            referenceId: "1e",
          },
          {
            text: "y están obligados al cumplimiento de tales deberes, públicos y privados, de manera ordenada, así como contribuir para su bien común, tanto en el hombre interior como en el exterior.",
            referenceId: "1f",
          },
        ],
        references: [
          {
            id: "1a",
            citations: [
              {
                citation: "1 Juan 1:3",
                text: "lo que hemos visto y oído, eso os anunciamos, para que también vosotros tengáis comunión con nosotros; y nuestra comunión verdaderamente es con el Padre, y con su Hijo Jesucristo.",
              },
              {
                citation: "Juan 1:16",
                text: "Porque de su plenitud tomamos todos, y gracia sobre gracia.",
              },
              {
                citation: "Romanos 6:5, 6",
                text: "Porque si fuimos plantados juntamente con él en la semejanza de su muerte, así también lo seremos en la de su resurrección;",
              },
            ],
          },
          {
            id: "1b",
            citations: [
              {
                citation: "Efesios 4:15, 16",
                text: "sino que siguiendo la verdad en amor, crezcamos en todo en aquel que es la cabeza, esto es, Cristo,",
              },
              {
                citation: "1 Corintios 12:7",
                text: "Pero a cada uno le es dada la manifestación del Espíritu para provecho.",
              },
            ],
          },
          {
            id: "1c",
            citations: [
              {
                citation: "1 Corintios 8:6",
                text: "para nosotros, sin embargo, sólo hay un Dios, el Padre, del cual proceden todas las cosas, y nosotros somos para él; y un Señor, Jesucristo, por medio del cual son todas las cosas, y nosotros por medio de él.",
              },
              {
                citation: "Colosenses 1:18, 19",
                text: "y él es la cabeza del cuerpo que es la iglesia, él que es el principio, el primogénito de entre los muertos, para que en todo tenga la preeminencia;",
              },
              {
                citation: "1 Timoteo 6:15, 16",
                text: "la cual a su tiempo mostrará el bienaventurado y solo Soberano, Rey de reyes, y Señor de señores,",
              },
            ],
          },
          {
            id: "1d",
            citations: [
              {
                citation: "Filipenses 3:10",
                text: "a fin de conocerle, y el poder de su resurrección, y la participación de sus padecimientos, llegando a ser semejante a él en su muerte,",
              },
            ],
          },
          {
            id: "1e",
            citations: [
              {
                citation: "1 Corintios 3:21-23",
                text: "Así que, ninguno se gloríe en los hombres; porque todo es vuestro:",
              },
              {
                citation: "1 Tesalonicenses 5:11, 14",
                text: "Por lo cual, animaos unos a otros, y edificaos unos a otros, así como lo hacéis.",
              },
            ],
          },
          {
            id: "1f",
            citations: [
              {
                citation: "Romanos 1:12",
                text: "esto es, para ser mutuamente confortados por la fe que nos es común a vosotros y a mí.",
              },
              {
                citation: "1 Juan 3:17, 18",
                text: "Pero el que tiene bienes de este mundo y ve a su hermano tener necesidad, y cierra contra él su corazón, ¿cómo mora el amor de Dios en él?",
              },
              {
                citation: "Gálatas 6:10",
                text: "Así que, según tengamos oportunidad, hagamos bien a todos, y mayormente a los de la familia de la fe.",
              },
            ],
          },
        ],
      },
      {
        number: 2,
        segments: [
          {
            text: "Los santos de profesión están obligados a mantener una santa intimidad y la comunión en la adoración a Dios, y en la realización de otros servicios espirituales de que tiendan a su edificación mutua;",
            referenceId: "2a",
          },
          {
            text: "como también en el alivio de unos a otros en las cosas externas de acuerdo a sus diferentes capacidades, y necesidades;",
            referenceId: "2b",
          },
          {
            text: "Según la norma del evangelio, aunque esta comunión deba ejercerse especialmente en las relaciones en que se encuentren, ya sea en familias o iglesias,",
            referenceId: "2c",
          },
          {
            text: "no obstante, como Dios ofreciere la oportunidad, debe extenderse a toda la familia de la fe, es decir todos los que en cualquier lugar invocan el nombre del Señor Jesús;",
            referenceId: "2d",
          },
          {
            text: "sin embargo, su comunión unos con otros como santos, no quita ni infringe el derecho o la propiedad que cada hombre tiene sobre sus bienes y posesiones.",
            referenceId: "2e",
          },
        ],
        references: [
          {
            id: "2a",
            citations: [
              {
                citation: "Hebreos 10:24, 25",
                text: "Y considerémonos unos a otros para estimularnos al amor y a las buenas obras; no dejando de congregarnos, como algunos tienen por costumbre, sino exhortándonos; y tanto más, cuanto veis que aquel día se acerca.",
              },
              {
                citation: "Hebreos 3:12, 13",
                text: "Mirad, hermanos, que no haya en ninguno de vosotros corazón malo de incredulidad para apartarse del Dios vivo; antes exhortaos los unos a los otros cada día, entre tanto que se dice: Hoy; para que ninguno de vosotros se endurezca por el engaño del pecado.",
              },
            ],
          },
          {
            id: "2b",
            citations: [
              {
                citation: "Hechos 11:29, 30",
                text: "Entonces los discípulos, cada uno conforme a lo que tenía, determinaron enviar socorro a los hermanos que habitaban en Judea; lo cual en efecto hicieron, enviándolo a los ancianos por mano de Bernabé y de Saulo.",
              },
            ],
          },
          {
            id: "2c",
            citations: [
              {
                citation: "Efesios 6:4",
                text: "Y vosotros, padres, no provoquéis a ira a vuestros hijos, sino criadlos en disciplina y amonestación del Señor.",
              },
              {
                citation: "1 Corintios 12:14-27",
                text: "Además, el cuerpo no es un solo miembro, sino muchos. [...] Vosotros, pues, sois el cuerpo de Cristo, y miembros cada uno en particular.",
              },
            ],
          },
          {
            id: "2d",
            citations: [
              {
                citation: "Hechos 5:4",
                text: "Reteniéndola, ¿no se te quedaba a ti? y vendida, ¿no estaba en tu poder? ¿Por qué pusiste esto en tu corazón? No has mentido a los hombres, sino a Dios.",
              },
            ],
          },
          {
            id: "2e",
            citations: [
              {
                citation: "Efesios 4:28",
                text: "El que hurtaba, no hurte más, sino trabaje, haciendo con sus manos lo que es bueno, para que tenga qué compartir con el que padece necesidad.",
              },
            ],
          },
        ],
      },
    ],
  },
  // Chapter 29: Del Bautismo y la Cena del Señor
  {
    id: 29,
    title: "Del Bautismo y la Cena del Señor",
    paragraphs: [
      {
        number: 1,
        segments: [
          {
            text: "El Bautismo y la Cena del Señor son ordenanzas de la institución positiva y soberana, nombradas por el Señor Jesús, el único legislador,",
            referenceId: "1a",
          },
          {
            text: "para que continúen en su Iglesia hasta el fin del mundo.",
            referenceId: "1b",
          },
        ],
        references: [
          {
            id: "1a",
            citations: [
              {
                citation: "Mateo 28:19, 20",
                text: "Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo; enseñándoles que guarden todas las cosas que os he mandado; y he aquí yo estoy con vosotros todos los días, hasta el fin del mundo. Amén.",
              },
            ],
          },
          {
            id: "1b",
            citations: [
              {
                citation: "1 Corintios 11:26",
                text: "Así, pues, todas las veces que comiereis este pan, y bebiereis esta copa, la muerte del Señor anunciáis hasta que él venga.",
              },
            ],
          },
        ],
      },
      {
        number: 2,
        segments: [
          {
            text: "Estas santas designaciones deben ser administradas únicamente por aquellos que estén cualificados y llamados para ello, de acuerdo con la comisión de Cristo.",
            referenceId: "2a",
          },
        ],
        references: [
          {
            id: "2a",
            citations: [
              {
                citation: "Mateo 28:19",
                text: "Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo;",
              },
              {
                citation: "1 Corintios 4:1",
                text: "Así, pues, téngannos los hombres por servidores de Cristo, y administradores de los misterios de Dios.",
              },
            ],
          },
        ],
      },
    ],
  },
  // Chapter 30: Del Bautismo
  {
    id: 30,
    title: "Del Bautismo",
    paragraphs: [
      {
        number: 1,
        segments: [
          {
            text: "El bautismo es una ordenanza del Nuevo Testamento, ordenado por Jesucristo, para que sea a la parte bautizada un signo de su comunión con él, en su muerte y resurrección; de ser injertado en él,",
            referenceId: "1a",
          },
          {
            text: "para la remisión de los pecados;",
            referenceId: "1b",
          },
          {
            text: "y de su entrega a Dios, por medio de Jesucristo, para vivir y caminar en novedad de vida.",
            referenceId: "1c",
          },
        ],
        references: [
          {
            id: "1a",
            citations: [
              {
                citation: "Romanos 6:3-5",
                text: "¿O no sabéis que todos los que hemos sido bautizados en Cristo Jesús, hemos sido bautizados en su muerte? Porque somos sepultados juntamente con él para muerte por el bautismo, a fin de que como Cristo resucitó de los muertos por la gloria del Padre, así también nosotros andemos en vida nueva.",
              },
              {
                citation: "Colosenses 2:12",
                text: "sepultados con él en el bautismo, en el cual fuisteis también resucitados con él, mediante la fe en el poder de Dios que le levantó de los muertos.",
              },
              {
                citation: "Gálatas 3:27",
                text: "porque todos los que habéis sido bautizados en Cristo, de Cristo estáis revestidos.",
              },
            ],
          },
          {
            id: "1b",
            citations: [
              {
                citation: "Marcos 1:4",
                text: "Bautizaba Juan en el desierto, y predicaba el bautismo de arrepentimiento para perdón de pecados.",
              },
              {
                citation: "Hechos 22:16",
                text: "Ahora, pues, ¿por qué te detienes? Levántate y bautízate, y lava tus pecados, invocando su nombre.",
              },
            ],
          },
          {
            id: "1c",
            citations: [
              {
                citation: "Romanos 6:4",
                text: "Porque somos sepultados juntamente con él para muerte por el bautismo, a fin de que como Cristo resucitó de los muertos por la gloria del Padre, así también nosotros andemos en vida nueva.",
              },
            ],
          },
        ],
      },
      {
        number: 2,
        segments: [
          {
            text: "Los que en realidad profesan arrepentimiento hacia Dios, la fe en, y la obediencia a, nuestro Señor Jesucristo, son los únicos sujetos adecuados de esta ordenanza.",
            referenceId: "2a",
          },
        ],
        references: [
          {
            id: "2a",
            citations: [
              {
                citation: "Marcos 16:16",
                text: "El que creyere y fuere bautizado, será salvo; mas el que no creyere, será condenado.",
              },
              {
                citation: "Hechos 8:36, 37",
                text: "Y yendo por el camino, llegaron a cierta agua, y dijo el eunuco: Aquí hay agua; ¿qué impide que yo sea bautizado?",
              },
              {
                citation: "Hechos 2:41",
                text: "Así que, los que recibieron su palabra fueron bautizados; y se añadieron aquel día como tres mil personas.",
              },
              {
                citation: "Hechos 8:12",
                text: "Pero cuando creyeron a Felipe, que anunciaba el evangelio del reino de Dios y el nombre de Jesucristo, se bautizaban hombres y mujeres.",
              },
              {
                citation: "Hechos 18:8",
                text: "Y Crispo, el principal de la sinagoga, creyó en el Señor con toda su casa; y muchos de los corintios, oyendo, creían y eran bautizados.",
              },
            ],
          },
        ],
      },
      {
        number: 3,
        segments: [
          {
            text: "El elemento exterior para ser utilizados en esta ordenanza es el agua, en donde la parte será bautizada,",
            referenceId: "3a",
          },
          {
            text: "en el nombre del Padre, y del Hijo, y del Espíritu Santo.",
            referenceId: "3b",
          },
        ],
        references: [
          {
            id: "3a",
            citations: [
              {
                citation: "Hechos 8:38",
                text: "Y mandó parar el carro; y descendieron ambos al agua, Felipe y el eunuco, y le bautizó.",
              },
            ],
          },
          {
            id: "3b",
            citations: [
              {
                citation: "Mateo 28:19, 20",
                text: "Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo; enseñándoles que guarden todas las cosas que os he mandado; y he aquí yo estoy con vosotros todos los días, hasta el fin del mundo. Amén.",
              },
            ],
          },
        ],
      },
      {
        number: 4,
        segments: [
          {
            text: "La inmersión, o la persona sumergida en el agua, es necesario para la debida administración de esta ordenanza.",
            referenceId: "4a",
          },
        ],
        references: [
          {
            id: "4a",
            citations: [
              {
                citation: "Mateo 3:16",
                text: "Y Jesús, después que fue bautizado, subió luego del agua; y he aquí los cielos le fueron abiertos, y vio al Espíritu de Dios que descendía como paloma, y venía sobre él.",
              },
              {
                citation: "Juan 3:23",
                text: "Juan bautizaba también en Enón, junto a Salim, porque había allí muchas aguas; y venían, y eran bautizados.",
              },
            ],
          },
        ],
      },
    ],
  },
  // Chapter 31: Sobre la Imposición de las Manos
  {
    id: 31,
    title: "Sobre la Imposición de las Manos",
    paragraphs: [
      {
        number: 1,
        segments: [
          {
            text: "Creemos que la imposición de manos (con la oración) sobre los creyentes bautizados, como tal, es una ordenanza de Cristo, y debe ser sometido a todas esas personas que toman parte en la Cena del Señor,",
          },
          {
            text: "y que el fin de este ordenanza no es para los dones extraordinarios del Espíritu, sino para una recepción mayor del Espíritu de la promesa, o para la adición de las gracias del Espíritu, y la influencia de esto, para confirmar fortaleza, y consolarlos en Cristo Jesús;",
          },
          {
            text: "esto siendo ratificado y establecido por los extraordinarios dones del Espíritu en los tiempos primitivos para permanecer en la Iglesia, como era reunirse el primer día de la semana, siendo el día de adoración, o el Día de Reposo Cristiano, bajo el evangelio;",
          },
          {
            text: "y como era la predicación de la Palabra, y como lo era el bautismo, y orar y cantar salmos, para que el Evangelio fuera confirmado con señales y prodigios, y diversos milagros y dones del Espíritu Santo en general, así era confirmada cada ordenanza en tal manera en particular.",
          },
        ],
        references: [],
      },
    ],
  },
  // Chapter 32: De la Cena del Señor
  {
    id: 32,
    title: "De la Cena del Señor",
    paragraphs: [
      {
        number: 1,
        segments: [
          {
            text: "La cena del Señor Jesús fue instituida por Él la misma noche en que fue traicionado,",
            referenceId: "1a",
          },
          {
            text: "para que se observe en sus iglesia,",
            referenceId: "1b",
          },
          {
            text: "hasta el fin del mundo,",
            referenceId: "1c",
          },
          {
            text: "para el recuerdo perpetuo, y mostrando sucesivamente el sacrificio de sí mismo en su muerte,",
            referenceId: "1d",
          },
          {
            text: "la confirmación de la fe de los creyentes en todos los beneficios de la misma,",
            referenceId: "1e",
          },
          {
            text: "para su alimento espiritual, y el crecimiento en Él,",
            referenceId: "1f",
          },
          {
            text: "en un mayor compromiso, y para todos los deberes que deben a Él, y ser un vínculo y una prenda de su comunión con Él, y con otros.",
            referenceId: "1g",
          },
        ],
        references: [
          {
            id: "1a",
            citations: [
              {
                citation: "1 Corintios 11:23-26",
                text: "Porque yo recibí del Señor lo que también os he enseñado: Que el Señor Jesús, la noche que fue entregado, tomó pan;",
              },
            ],
          },
          {
            id: "1b",
            citations: [
              {
                citation: "1 Corintios 11:23-26",
                text: "Porque yo recibí del Señor lo que también os he enseñado: Que el Señor Jesús, la noche que fue entregado, tomó pan;",
              },
            ],
          },
          {
            id: "1c",
            citations: [
              {
                citation: "1 Corintios 11:23-26",
                text: "Porque yo recibí del Señor lo que también os he enseñado: Que el Señor Jesús, la noche que fue entregado, tomó pan;",
              },
            ],
          },
          {
            id: "1d",
            citations: [
              {
                citation: "1 Corintios 11:23-26",
                text: "Porque yo recibí del Señor lo que también os he enseñado: Que el Señor Jesús, la noche que fue entregado, tomó pan;",
              },
            ],
          },
          {
            id: "1e",
            citations: [
              {
                citation: "1 Corintios 11:23-26",
                text: "Porque yo recibí del Señor lo que también os he enseñado: Que el Señor Jesús, la noche que fue entregado, tomó pan;",
              },
            ],
          },
          {
            id: "1f",
            citations: [
              {
                citation: "1 Corintios 11:23-26",
                text: "Porque yo recibí del Señor lo que también os he enseñado: Que el Señor Jesús, la noche que fue entregado, tomó pan;",
              },
            ],
          },
          {
            id: "1g",
            citations: [
              {
                citation: "1 Corintios 10:16, 17, 21",
                text: "La copa de bendición que bendecimos, ¿no es la comunión de la sangre de Cristo? El pan que partimos, ¿no es la comunión del cuerpo de Cristo?",
              },
            ],
          },
        ],
      },
      {
        number: 2,
        segments: [
          {
            text: "En esta ordenanza Cristo no es ofrecido a su Padre, ni es en absoluto ningún verdadero sacrificio hecho para remisión de los pecados de los vivos o muertos, sino solamente un recordatorio de aquel único sacrificio ofrecido por Él mismo y a sí mismo en la cruz, una vez por todas;",
            referenceId: "2a",
          },
          {
            text: "y una ofrenda espiritual de toda la alabanza posible a Dios por Él mismo.",
            referenceId: "2b",
          },
          {
            text: "Así que el sacrificio papal de la misa, como ellos lo llaman, es la más abominable, perjudicial para el propio sacrificio de Cristo la única propiciación por todos los pecados de los elegidos.",
          },
        ],
        references: [
          {
            id: "2a",
            citations: [
              {
                citation: "Hebreos 9:25, 26, 28",
                text: "y no para ofrecerse muchas veces, como entra el sumo sacerdote en el Lugar Santísimo cada año con sangre ajena. De otra manera le hubiera sido necesario padecer muchas veces desde el principio del mundo; pero ahora, en la consumación de los siglos, se presentó una vez para siempre por el sacrificio de sí mismo para quitar de en medio el pecado.",
              },
              {
                citation: "1 Corintios 11:24",
                text: "y habiendo dado gracias, lo partió, y dijo: Tomad, comed; esto es mi cuerpo que por vosotros es partido; haced esto en memoria de mí.",
              },
            ],
          },
          {
            id: "2b",
            citations: [
              {
                citation: "Mateo 26:26, 27",
                text: "Y mientras comían, tomó Jesús el pan, y bendijo, y lo partió, y dio a sus discípulos, y dijo: Tomad, comed; esto es mi cuerpo.",
              },
            ],
          },
        ],
      },
      {
        number: 3,
        segments: [
          {
            text: "El Señor Jesús, en esta ordenanza, ha nombrado a sus ministros para orar y bendecir los elementos del pan y el vino, y por lo tanto sean ellos agrupados y apartados de un uso común para un uso santo, y para tomar y partir el pan, para tomar la copa, y, participando también ellos mismos, den ambos a los comulgantes.",
            referenceId: "3a",
          },
        ],
        references: [
          {
            id: "3a",
            citations: [
              {
                citation: "1 Corintios 11:23-26",
                text: "Porque yo recibí del Señor lo que también os he enseñado: Que el Señor Jesús, la noche que fue entregado, tomó pan;",
              },
            ],
          },
        ],
      },
      {
        number: 4,
        segments: [
          {
            text: "La negación de la copa al pueblo,",
            referenceId: "4a",
          },
          {
            text: "rindiendo culto a los elementos, el elevarlos hacia arriba, o llevarlos de un lugar a otro para adorarlos, y reservarlos para cualquier pretendido uso religioso,",
            referenceId: "4b",
          },
          {
            text: "es contrario a la naturaleza de esta ordenanza, y la institución de Cristo.",
            referenceId: "4c",
          },
        ],
        references: [
          {
            id: "4a",
            citations: [
              {
                citation: "Mateo 26:26-28",
                text: "Y mientras comían, tomó Jesús el pan, y bendijo, y lo partió, y dio a sus discípulos, y dijo: Tomad, comed; esto es mi cuerpo.",
              },
            ],
          },
          {
            id: "4b",
            citations: [
              {
                citation: "Éxodo 20:4, 5",
                text: "No te harás imagen, ni ninguna semejanza de lo que esté arriba en el cielo, ni abajo en la tierra, ni en las aguas debajo de la tierra. No te inclinarás a ellas, ni las honrarás;",
              },
            ],
          },
          {
            id: "4c",
            citations: [
              {
                citation: "Mateo 15:9",
                text: "Pues en vano me honran, Enseñando como doctrinas, mandamientos de hombres.",
              },
            ],
          },
        ],
      },
      {
        number: 5,
        segments: [
          {
            text: "Los elementos externos de esta ordenanza, debidamente separados para el uso ordenado por Cristo, tienen tal relación con el crucificado, que de verdad, aunque en términos que se usan en sentido figurado, a veces se les llaman por los nombres de las cosas que representan, a saber, el cuerpo y la sangre de Cristo,",
            referenceId: "5a",
          },
          {
            text: "no obstante, en esencia y naturaleza, ellos siguen siendo verdadera y solamente pan y vino, como lo eran antes.",
            referenceId: "5b",
          },
        ],
        references: [
          {
            id: "5a",
            citations: [
              {
                citation: "1 Corintios 11:27",
                text: "De manera que cualquiera que comiere este pan o bebiere esta copa del Señor indignamente, será culpado del cuerpo y de la sangre del Señor.",
              },
            ],
          },
          {
            id: "5b",
            citations: [
              {
                citation: "1 Corintios 11:26-28",
                text: "Así, pues, todas las veces que comiereis este pan, y bebiereis esta copa, la muerte del Señor anunciáis hasta que él venga.",
              },
            ],
          },
        ],
      },
      {
        number: 6,
        segments: [
          {
            text: "Esa doctrina que sostiene un cambio de la sustancia del pan y del vino, en la sustancia del cuerpo y sangre de Cristo, comúnmente llamada transubstanciación, por la consagración de un sacerdote, o por cualquier otro modo, es repugnante no sólo a la Escritura,",
            referenceId: "6a",
          },
          {
            text: "sino también al común sentido y la razón, trastorna la naturaleza de la ordenanza, y ha sido, y es, la causa de múltiples supersticiones, sí, de crasas idolatrías.",
          },
        ],
        references: [
          {
            id: "6a",
            citations: [
              {
                citation: "Hechos 3:21",
                text: "a quien de cierto es necesario que el cielo reciba hasta los tiempos de la restauración de todas las cosas, de que habló Dios por boca de sus santos profetas que han sido desde tiempo antiguo.",
              },
              {
                citation: "Lucas 14:6, 39",
                text: "Y no pudieron replicar a estas cosas.",
              },
              {
                citation: "1 Corintios 11:24, 25",
                text: "y habiendo dado gracias, lo partió, y dijo: Tomad, comed; esto es mi cuerpo que por vosotros es partido; haced esto en memoria de mí.",
              },
            ],
          },
        ],
      },
      {
        number: 7,
        segments: [
          {
            text: "Los dignos receptores, participando exteriormente de los elementos visibles en esta ordenanza, también participan en lo interior por la fe, en verdad y de hecho, sin embargo no carnal y corporalmente, sino que lo reciben espiritualmente, alimentándose de Cristo crucificado, y de todos los beneficios de su muerte;",
            referenceId: "7a",
          },
          {
            text: "siendo el cuerpo y la sangre de Cristo no corporal o carnalmente, sino espiritualmente presente a la fe de los creyentes en esa ordenanza, tanto como los elementos lo están para sus sentidos externos.",
            referenceId: "7b",
          },
        ],
        references: [
          {
            id: "7a",
            citations: [
              {
                citation: "1 Corintios 10:16",
                text: "La copa de bendición que bendecimos, ¿no es la comunión de la sangre de Cristo? El pan que partimos, ¿no es la comunión del cuerpo de Cristo?",
              },
            ],
          },
          {
            id: "7b",
            citations: [
              {
                citation: "1 Corintios 11:23-26",
                text: "Porque yo recibí del Señor lo que también os he enseñado: Que el Señor Jesús, la noche que fue entregado, tomó pan;",
              },
            ],
          },
        ],
      },
      {
        number: 8,
        segments: [
          {
            text: "Todas las personas ignorantes e impías, ya que no son aptos para gozar de la comunión con Cristo, por ser ellos desmerecedores de la mesa del Señor, no pueden, sin pecar grandemente contra él, mientras permanezcan como tales, participar de estos sagrados misterios, o ser admitidos en ellos;",
            referenceId: "8a",
          },
          {
            text: "sí, cualquiera que los recibe indignamente, es culpable del cuerpo y la sangre del Señor, come y bebe juicio para sí mismo.",
            referenceId: "8b",
          },
        ],
        references: [
          {
            id: "8a",
            citations: [
              {
                citation: "2 Corintios 6:14, 15",
                text: "No os unáis en yugo desigual con los incrédulos; porque ¿qué compañerismo tiene la justicia con la injusticia? ¿Y qué comunión la luz con las tinieblas?",
              },
              {
                citation: "Mateo 7:6",
                text: "No deis lo santo a los perros, ni echéis vuestras perlas delante de los cerdos, no sea que las pisoteen, y se vuelvan y os despedacen.",
              },
            ],
          },
          {
            id: "8b",
            citations: [
              {
                citation: "1 Corintios 11:29",
                text: "Porque el que come y bebe indignamente, sin discernir el cuerpo del Señor, juicio come y bebe para sí.",
              },
            ],
          },
        ],
      },
    ],
  },
  // Chapter 33: Del Estado del Hombre Después de la Muerte y de la Resurrección de los Muertos
  {
    id: 33,
    title:
      "Del Estado del Hombre Después de la Muerte y de la Resurrección de los Muertos",
    paragraphs: [
      {
        number: 1,
        segments: [
          {
            text: "Los cuerpos de los hombres vuelven al polvo después de la muerte y ven la corrupción,",
            referenceId: "1a",
          },
          {
            text: "pero sus almas, que ni mueren ni duermen, teniendo una subsistencia inmortal, vuelven inmediatamente a Dios que las dio.",
            referenceId: "1b",
          },
          {
            text: "Las almas de los justos siendo hechas perfectas en santidad, son recibidas en el paraíso, donde se encuentran con Cristo, y miran el rostro de Dios en luz y gloria, esperando la plena redención de sus cuerpos,",
            referenceId: "1c",
          },
          {
            text: "y son las almas de los impíos echadas en el infierno, donde permanecen en tormentos y oscuridad total, reservados al juicio del gran día,",
            referenceId: "1d",
          },
          {
            text: "además de estos dos lugares, para las almas separadas de sus cuerpos, la Escritura no reconoce ninguno.",
          },
        ],
        references: [
          {
            id: "1a",
            citations: [
              {
                citation: "Génesis 3:19",
                text: "Con el sudor de tu rostro comerás el pan hasta que vuelvas a la tierra, porque de ella fuiste tomado; pues polvo eres, y al polvo volverás.",
              },
              {
                citation: "Hechos 13:36",
                text: "Porque a la verdad David, habiendo servido a su propia generación según la voluntad de Dios, durmió, y fue reunido con sus padres, y vio corrupción.",
              },
            ],
          },
          {
            id: "1b",
            citations: [
              {
                citation: "Eclesiastés 12:7",
                text: "y el polvo vuelva a la tierra, como era, y el espíritu vuelva a Dios que lo dio.",
              },
            ],
          },
          {
            id: "1c",
            citations: [
              {
                citation: "Lucas 23:43",
                text: "Entonces Jesús le dijo: De cierto te digo que hoy estarás conmigo en el paraíso.",
              },
              {
                citation: "2 Corintios 5:1, 6, 8",
                text: "Porque sabemos que si nuestra morada terrestre, este tabernáculo, se deshiciere, tenemos de Dios un edificio, una casa no hecha de manos, eterna, en los cielos.",
              },
              {
                citation: "Filipenses 1:23",
                text: "Porque de ambas cosas estoy puesto en estrecho, teniendo deseo de partir y estar con Cristo, lo cual es muchísimo mejor;",
              },
              {
                citation: "Hebreos 12:23",
                text: "a la congregación de los primogénitos que están inscritos en los cielos, a Dios el Juez de todos, a los espíritus de los justos hechos perfectos,",
              },
            ],
          },
          {
            id: "1d",
            citations: [
              {
                citation: "1 Pedro 3:19",
                text: "en el cual también fue y predicó a los espíritus encarcelados,",
              },
              {
                citation: "Lucas 16:23, 24",
                text: "Y en el Hades alzó sus ojos, estando en tormentos, y vio de lejos a Abraham, y a Lázaro en su seno.",
              },
            ],
          },
        ],
      },
      {
        number: 2,
        segments: [
          {
            text: "En el último día, los santos que se encuentran con vida, no dormirán, sino que serán cambiados,",
            referenceId: "2a",
          },
          {
            text: "y todos los muertos serán resucitados con los mismos cuerpos, y no con otros,",
            referenceId: "2b",
          },
          {
            text: "aunque con diferentes cualidades, y éstos serán unidos de nuevo a sus almas para siempre.",
            referenceId: "2c",
          },
        ],
        references: [
          {
            id: "2a",
            citations: [
              {
                citation: "1 Corintios 15:51, 52",
                text: "He aquí, os digo un misterio: No todos dormiremos; pero todos seremos transformados,",
              },
              {
                citation: "1 Tesalonicenses 4:17",
                text: "Luego nosotros los que vivimos, los que hayamos quedado, seremos arrebatados juntamente con ellos en las nubes para recibir al Señor en el aire, y así estaremos siempre con el Señor.",
              },
            ],
          },
          {
            id: "2b",
            citations: [
              {
                citation: "Job 19:26, 27",
                text: "Y después de deshecha esta mi piel, en mi carne he de ver a Dios;",
              },
            ],
          },
          {
            id: "2c",
            citations: [
              {
                citation: "1 Corintios 15:42, 43",
                text: "Así también es la resurrección de los muertos. Se siembra en corrupción, resucitará en incorrupción.",
              },
            ],
          },
        ],
      },
      {
        number: 3,
        segments: [
          {
            text: "Los cuerpos de los injustos, por el poder de Cristo, se levantarán para la deshonra; los cuerpos de los justos, por su Espíritu, para honra,",
            referenceId: "3a",
          },
          {
            text: "y serán hechos conforme al cuerpo glorioso de Él.",
            referenceId: "3b",
          },
        ],
        references: [
          {
            id: "3a",
            citations: [
              {
                citation: "Hechos 24:15",
                text: "teniendo esperanza en Dios, la cual ellos también abrigan, de que ha de haber resurrección de los muertos, así de justos como de injustos.",
              },
              {
                citation: "Juan 5:28, 29",
                text: "No os maravilléis de esto; porque vendrá hora cuando todos los que están en los sepulcros oirán su voz;",
              },
            ],
          },
          {
            id: "3b",
            citations: [
              {
                citation: "Filipenses 3:21",
                text: "el cual transformará el cuerpo de la humillación nuestra, para que sea semejante al cuerpo de la gloria suya, por el poder con el cual puede también sujetar a sí mismo todas las cosas.",
              },
            ],
          },
        ],
      },
    ],
  },
  // Chapter 34: Del Juicio Final
  {
    id: 34,
    title: "Del Juicio Final",
    paragraphs: [
      {
        number: 1,
        segments: [
          {
            text: "Dios ha establecido un día en que juzgará al mundo con justicia, por medio de Jesucristo; a quien es dado todo poder y juicio por el Padre;",
            referenceId: "1a",
          },
          {
            text: "en cuyo día, no sólo los ángeles apóstatas serán juzgados,",
            referenceId: "1b",
          },
          {
            text: "sino que igualmente todas las personas que han vivido sobre la tierra deberán comparecer ante el tribunal de Cristo,",
            referenceId: "1c",
          },
          {
            text: "para dar cuenta de sus pensamientos, palabras, y acciones, y recibir de acuerdo a lo que han hecho en el cuerpo, sea bueno o malo.",
            referenceId: "1d",
          },
        ],
        references: [
          {
            id: "1a",
            citations: [
              {
                citation: "Hechos 17:31",
                text: "por cuanto ha establecido un día en el cual juzgará al mundo con justicia, por aquel varón a quien designó, dando fe a todos con haberle levantado de los muertos.",
              },
              {
                citation: "Juan 5:22, 27",
                text: "Porque el Padre a nadie juzga, sino que todo el juicio dio al Hijo,",
              },
            ],
          },
          {
            id: "1b",
            citations: [
              {
                citation: "1 Corintios 6:3",
                text: "¿O no sabéis que hemos de juzgar a los ángeles? ¿Cuánto más las cosas de esta vida?",
              },
              {
                citation: "Judas 6",
                text: "Y a los ángeles que no guardaron su dignidad, sino que abandonaron su propia morada, los ha guardado bajo oscuridad, en prisiones eternas, para el juicio del gran día;",
              },
              {
                citation: "2 Corintios 5:10",
                text: "Porque es necesario que todos nosotros comparezcamos ante el tribunal de Cristo, para que cada uno reciba según lo que haya hecho mientras estaba en el cuerpo, sea bueno o sea malo.",
              },
            ],
          },
          {
            id: "1c",
            citations: [
              {
                citation: "Mateo 25:32-46",
                text: "Y serán reunidas delante de él todas las naciones; y apartará los unos de los otros, como aparta el pastor las ovejas de los cabritos. Y pondrá las ovejas a su derecha, y los cabritos a su izquierda. Entonces el Rey dirá a los de su derecha: Venid, benditos de mi Padre, heredad el reino preparado para vosotros desde la fundación del mundo.",
              },
              {
                citation: "Eclesiastés 12:14",
                text: "Porque Dios traerá toda obra a juicio, juntamente con toda cosa encubierta, sea buena o sea mala.",
              },
            ],
          },
          {
            id: "1d",
            citations: [
              {
                citation: "Mateo 12:36",
                text: "Mas yo os digo que de toda palabra ociosa que hablen los hombres, de ella darán cuenta en el día del juicio.",
              },
              {
                citation: "Romanos 14:10, 12",
                text: "Pero tú, ¿por qué juzgas a tu hermano? O tú también, ¿por qué menosprecias a tu hermano? Porque todos compareceremos ante el tribunal de Cristo.",
              },
            ],
          },
        ],
      },
      {
        number: 2,
        segments: [
          {
            text: "El propósito de Dios al establecer este día, es la manifestación de la gloria de su misericordia, en la salvación eterna de los elegidos; y de su justicia, en la condenación eterna de los réprobos, que son malvados y desobedientes;",
            referenceId: "2a",
          },
          {
            text: "porque entonces los justos entrarán a la vida eterna, y recibirán la plenitud de gozo y de gloria con recompensas eternas, en presencia del Señor; pero los malos, que no conocieron a Dios, ni obedecen al evangelio de Jesucristo, serán echados a un lado en tormentos eternos, y en pena de eterna perdición, excluidos de la presencia del Señor, y de la gloria de su poder.",
            referenceId: "2b",
          },
        ],
        references: [
          {
            id: "2a",
            citations: [
              {
                citation: "Romanos 9:22, 23",
                text: "¿Y qué, si Dios, queriendo mostrar su ira y hacer notorio su poder, soportó con mucha paciencia los vasos de ira preparados para destrucción,",
              },
            ],
          },
          {
            id: "2b",
            citations: [
              {
                citation: "Mateo 25:21, 34",
                text: "Y su señor le dijo: Bien, buen siervo y fiel; sobre poco has sido fiel, sobre mucho te pondré; entra en el gozo de tu señor.",
              },
              {
                citation: "2 Timoteo 4:8",
                text: "Por lo demás, me está guardada la corona de justicia, la cual me dará el Señor, juez justo, en aquel día; y no sólo a mí, sino también a todos los que aman su venida.",
              },
              {
                citation: "Mateo 25:46",
                text: "E irán éstos al castigo eterno, y los justos a la vida eterna.",
              },
              {
                citation: "Marcos 9:48",
                text: "donde el gusano de ellos no muere, y el fuego nunca se apaga.",
              },
              {
                citation: "2 Tesalonicenses 1:7-10",
                text: "y a vosotros que sois atribulados, daros reposo con nosotros, cuando se manifieste el Señor Jesús desde el cielo con los ángeles de su poder,",
              },
            ],
          },
        ],
      },
      {
        number: 3,
        segments: [
          {
            text: "Como Cristo quiere que seamos ciertamente persuadidos de que habrá un día de juicio, tanto para disuadir a todos los hombres de pecado,",
            referenceId: "3a",
          },
          {
            text: "y para el mayor consuelo de los piadosos en su adversidad,",
            referenceId: "3b",
          },
          {
            text: "así también quiere que ese día sea desconocido por los hombres, para que puedan sacudirse de toda seguridad carnal, y estén siempre alerta, porque no saben a qué hora vendrá el Señor,",
            referenceId: "3c",
          },
          {
            text: "y puedan estar siempre preparados para decir, Ven Señor Jesús; ven pronto.",
            referenceId: "3d",
          },
          {
            text: " Amén.",
          },
        ],
        references: [
          {
            id: "3a",
            citations: [
              {
                citation: "2 Corintios 5:10, 11",
                text: "Porque es necesario que todos nosotros comparezcamos ante el tribunal de Cristo, para que cada uno reciba según lo que haya hecho mientras estaba en el cuerpo, sea bueno o sea malo.",
              },
            ],
          },
          {
            id: "3b",
            citations: [
              {
                citation: "2 Tesalonicenses 1:5-7",
                text: "Esto es demostración del justo juicio de Dios, para que seáis tenidos por dignos del reino de Dios, por el cual asimismo padecéis.",
              },
            ],
          },
          {
            id: "3c",
            citations: [
              {
                citation: "Marcos 13:35-37",
                text: "Velad, pues, porque no sabéis cuándo vendrá el señor de la casa; si al anochecer, o a la medianoche, o al canto del gallo, o a la mañana; para que cuando venga de repente, no os halle durmiendo. Y lo que a vosotros digo, a todos lo digo: Velad.",
              },
              {
                citation: "Lucas 12:35-40",
                text: "Estén ceñidos vuestros lomos, y vuestras lámparas encendidas; y vosotros sed semejantes a hombres que aguardan a que su señor regrese de las bodas, para que cuando llegue y llame, le abran en seguida. Bienaventurados aquellos siervos a los cuales su señor, cuando venga, halle velando; de cierto os digo que se ceñirá, y hará que se sienten a la mesa, y vendrá a servirles. Y aunque venga a la segunda vigilia, y aunque venga a la tercera vigilia, si los hallare así, bienaventurados son aquellos siervos. Pero sabed esto, que si supiese el padre de familia a qué hora el ladrón había de venir, velaría ciertamente, y no dejaría minar su casa. Vosotros, pues, también, estad preparados, porque a la hora que no penséis, el Hijo del Hombre vendrá.",
              },
            ],
          },
          {
            id: "3d",
            citations: [
              {
                citation: "Apocalipsis 22:20",
                text: "El que da testimonio de estas cosas dice: Ciertamente vengo en breve. Amén; sí, ven, Señor Jesús.",
              },
            ],
          },
        ],
      },
    ],
  },
];
