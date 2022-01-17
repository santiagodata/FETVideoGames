import { Injectable } from "@angular/core";
import { BuscadorComponent } from "../components/buscador/buscador.component";

@Injectable()
export class VideojuegosService {

  private videojuegos: Videojuego[] = [
    {
      nombre: 'Fornite',
      descripcion: 'Fortnite es un videojuego del año 2017 desarrollado por la empresa Epic Games, lanzado como diferentes paquetes de software que presentan diferentes modos de juego, pero que comparten el mismo motor de juego y mecánicas. Fue anunciado en los Spike Video Game Awards en 2011',
      img: './assets/img/ps4/fornite.jpg',
      lanzamiento: '2017',
      consola: 'PS4',

    },
    {
      nombre: 'Minecraft',
      descripcion: 'Minecraft es un videojuego de construcción, de tipo «mundo abierto» o sandbox creado originalmente por el sueco Markus Persson (conocido comúnmente como Notch),2 y posteriormente desarrollado por su empresa, Mojang Studios. Fue lanzado públicamente el 17 de mayo de 2009, después de diversos cambios fue lanzada su versión completa el 18 de noviembre de 2011. Markus Persson, el creador de Minecraft.Un mes antes del lanzamiento de su versión completa, el 18 de octubre de 2011, fue estrenada una versión para Android, y el 17 de noviembre del mismo año fue lanzada la versión para iOS. El 9 de mayo de 2012 fue lanzada la versión del juego para Xbox 360 y PS3. Todas las versiones de Minecraft reciben actualizaciones constantes desde su lanzamiento. El 11 de noviembre de 2014, Minecraft lanzó su edición para el apartado de PlayStation Vita, desarrollada por Mojang y 4J Studios, esta versión presenta las mismas actualizaciones y similares características que las otras versiones de consola; además, cuenta con el sistema de venta cruzada, es decir que al comprar la versión de PlayStation 3 se adquiere también la de PlayStation Vita. A septiembre de 2014 se habían vendido más de 54 millones de copias. El 15 de septiembre de 2014, fue adquirido por la empresa Microsoft por un valor de 2500 millones USD. Este suceso provocó el alejamiento de Markus Persson de la compañía. El 1 de noviembre de 2016 Microsoft anunció el lanzamiento de la versión completa de Minecraft Education Edition.',
      img: './assets/img/pc/minecraft.png',
      lanzamiento: '2009',
      consola: 'PC',

    },
    {
      nombre: 'Quantum Break',
      descripcion: 'Remedy Entertainment ha diseñado siempre videojuegos con un enfoque único. El estudio finlandés no ' +
        'solo ha creado y desarrollado la saga Max Payne (la tercera entrega es de Rockstar Games), sino que ha sido ' +
        'capaz de ofrecer experiencias como Alan Wake o su reciente Control. En ambos casos, hacen uso de una narrativa' +
        ' de corte lynchiana que nos traslada a extraños mundos llenos de misterios, donde la verdad se esconde y las ' +
        'líneas entre la ficción y la realidad se difuminan hasta casi desaparecer. Después de la publicación de ' +
        'Alan Wake, la colaboración entre Xbox Games Studios (entonces Microsoft Game Studios) y Remedy Entertainment se' +
        ' extendió con un segundo juego, Quantum Break. A pesar de que las críticas no fueron siempre positivas, este ' +
        'título se ha infiltrado entre los mejores juegos para la redacción de MeriStation. El mérito de Remedy fue ' +
        'intentar integrar una serie de televisión dentro de un videojuego, de manera que narrara los acontecimientos ' +
        'desde el punto de vista de los villanos. Así las cosas, este juego de ciencia ficción cuenta con actores ' +
        'como Shawn Ashmore, Lance Reddick, Dominic Monaghan o Courtney Hope. El resultado es un producto que cuenta ' +
        'la historia de Jack Joyce, un joven normal y corriente que termina metido en un embrollo de dimensiones colosales.' +
        ' Un accidente en un experimento para viajar en el tiempo provoca la hecatombe y hace que Jack adquiera poderes para ' +
        'manipular el tiempo. Esto se traduce en un shooter en tercera persona con poderes, una especie de punto de partida' +
        ' que ha servido de base para el sistema jugable de Control, la producción más reciente de Remedy. Quantum Break' +
        ' no es un producto sin fallos, pero a lo largo de su aventura principal ofrece ideas frescas y una historia que' +
        ' no deja indiferente a nadie.',
      img: './assets/img/xbox/quantum.jpg',
      lanzamiento: '2016',
      consola: 'XBOX',

    },

    {
      nombre: 'Halo 5: Guardians',
      descripcion: '343 Industries no lo ha tenido fácil. Después de la publicación de Halo Reach, Bungie decidió volar libre y firmó un acuerdo con Activision para desarrollar su nueva propiedad intelectual, Destiny. Esa libertad quedó encorsetada, pues al final tuvieron que romper ese acuerdo para convertirse en un estudio de desarrollo completamente independiente. Esa, sin embargo, es otra historia. La que nos interesa en este caso es la de la desarrolladora que está a cargo de la saga Halo, un estudio que ya lo intentó con la cuarta entrega y que tampoco consiguió triunfar del todo con Halo 5: Guardians. En nuestro Top 7 de Halo quedó en sexta posición, pero eso no ha impedido que siga siendo un gran juego dentro de la plataforma Xbox.',
      img: './assets/img/xbox/halo.jpg',
      lanzamiento: '2017',
      consola: 'XBOX',

    },
    {
      nombre: 'Forza Horizon 4',
      descripcion: 'Forza Horizon 4 es un juego de coches que no exige ser fan de los coches, un hecho insólito que refuerza aún más la valía de uno de los mejores videojuegos que nos ha dado la presente generación de consolas. Cualquiera puede disfrutar de su experiencia gamberra y desbordante, de los preciosos lugares que visitaremos, esta vez localizados en Reino Unido. Playground Games, un estudio que ha pasado a ser propiedad de Xbox Game Studios, ya partía de la excelencia con Forza Horizon 2 y Forza Horizon 3, pero la cuarta entrega introdujo una novedad muy reseñable, las estaciones el año. Así las cosas, un mismo entorno puede cambiar radicalmente en función de la época en la que circules con el coche. Esto, por supuesto, afecta directamente a la conducción. No es lo mismo quemar las ruedas en una superficie seca que hacerlo sobre un camino embarrado por la lluvia o cubierto de nieve. Todo ello se combina con los cambios climáticos dinámicos, los vehículos ajenos a la competición y otros fenómenos meteorológicos como la niebla, la tormenta o el viento. En definitiva, añade múltiples variables que se mezclan para ofrecer experiencias diferenciadas en un contexto de mundo abierto.',
      img: './assets/img/xbox/forza.jpg',
      lanzamiento: '2018',
      consola: 'XBOX',

    },
    {
      nombre: 'Devil May Cry 5',
      descripcion: 'Devil May Cry 5 es el nuevo capítulo de la historia de los hijos de Sparda. Tras más de diez años, la icónica saga de Capcom regresa a la línea temporal que la vio nacer, trayendo de vuelta a viejos conocidos como Dante y Nero, nuevas caras como el enigmático V y una jugabilidad con sabor a declaración de intenciones. Devil May Cry 5 presenta la jugabilidad más profunda y variada que se ha visto en un hack and slash hasta la fecha, sin sacrificar por el camino ni un ápice de diversión. Puede que trate sobre el infierno, pero este juego es lo más parecido a alcanzar el cielo.',
      img: './assets/img/ps4/devil.jpg',
      lanzamiento: '2019',
      consola: 'PS4',

    },
    {
      nombre: 'Red Dead Redemption 2',
      descripcion: 'Ambiantado en el salvaje Oeste a finales del siglo XIX, Red Dead Redemption 2 es toda una joya de los videojuegos, un título que permanecerá para siempre como uno de los mejores juegos de PS4. Un mapa enorme que está abierto desde el principio, una historia que nos ofrece todas las mecánicas imaginables y todos los elementos de las mejores películas de western y una gran variedad de misiones que van desde el sigilo, caza o pesca, hasta aventuras románticas, son sólo algunos de los elementos de un juego casi redondo.',
      img: './assets/img/ps4/rdr.jpg',
      lanzamiento: '2018',
      consola: 'PS4',

    },
    {
      nombre: 'Grand Theft Auto V',
      descripcion: 'Grand Theft Auto V (abreviado como GTA V o GTA 5) es un videojuego de acción-aventura de mundo abierto desarrollado por el estudio Rockstar North y distribuido por Rockstar Games. Fue lanzado el 17 de septiembre de 2013 para las consolas PlayStation 3 y Xbox 360. Posteriormente, distribuido el 18 de noviembre de 2014 para las consolas de nueva generación PlayStation 4 y Xbox One y la vista en primera persona, luego para Microsoft Windows el 14 de abril de 2015 y finalmente se confirmó su lanzamiento para PlayStation 5, Xbox Series X y Xbox Series S para marzo de 2022. Entre las novedades se encuentra la mejora de gráficos (8k) incluido el soporte de 120 FPS. Se trató del primer gran título en la serie Grand Theft Auto desde el lanzamiento de Grand Theft Auto IV en 2008, el cual estrenó la «era HD» de la mencionada serie de videojuegos. La primera información fue revelada por Rockstar Games el 25 de octubre de 2011 en la red social Twitter. El juego está ambientado en la ciudad ficticia de Los Santos, así como en las zonas que la rodean, basada en la ciudad de Los Ángeles y el sur de California. La ciudad también era la ambientación del anterior juego GTA:San Andreas. Por primera vez el juego se centraría en tres personajes distintos en vez de uno solo: Michael, Trevor y Franklin, además del personaje que el jugador utiliza en el modo en línea. El tráiler de estreno de Grand Theft Auto V se dio a conocer el 2 de noviembre de 2011. Es el juego más caro de la historia, con un gasto de 265 millones de dólares, superando a su antecesor GTA IV —100 millones. Grand Theft Auto V recaudó 800 millones de dólares en las primeras 24 horas de su estreno, lo que lo convirtió en el videojuego que más dinero había recaudado en menos tiempo de toda la historia; y había recaudado en 3 días un monto récord de 1000 millones de dólares en ventas',
      img: './assets/img/pc/gta.jpg',
      lanzamiento: '2013',
      consola: 'PC',

    },
    {
      nombre: 'Cyberpunk 2077',
      descripcion: 'Cyberpunk 2077 es un videojuego desarrollado y publicado por CD Projekt, que se lanzó para Microsoft Windows, PlayStation 4, y Xbox One el 10 de diciembre de 2020, y posteriormente en PlayStation 5, Xbox Series X|S y Google Stadia. Siendo una adaptación del juego de rol de mesa Cyberpunk 2020, se establece cincuenta y siete años más tarde en la ciudad distópica de Night City, California. Es un mundo abierto con seis distritos diferentes, con una perspectiva de primera persona y los jugadores asumen el papel del personaje personalizable llamado V, quienes pueden mejorar sus estadísticas con experiencia. V tiene un arsenal de armas y opciones para combate cuerpo a cuerpo, los cuales pueden ser modificados.',
      img: './assets/img/pc/cyberpunk.jpg',
      lanzamiento: '2019',
      consola: 'PC',

    },

    {
      nombre: 'Call of Dutty Warzone',
      descripcion: 'Call of Duty: Warzone es un videojuego de disparos en primera persona, perteneciente al Battle royale gratuito, lanzado el 10 de marzo de 2020 para PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S y Microsoft Windows. El modo juego está disponible en estas plataformas y es parte del videojuego de 2019, Call of Duty: Modern Warfare, pero no requiere su compra y se presentó durante la temporada 2 del contenido de Modern Warfare. Con la integración con Call of Duty: Vanguard pasó a denominarse Call of Duty: Warzone Pacific. Call of Duty: Warzone fue desarrollado por Infinity Ward y Raven Software y publicado por Activision. Warzone permite el combate multijugador en línea entre 150 jugadores, aunque algunos modos de juego por tiempo limitado admiten 200 jugadores. El juego presenta tanto un juego multiplataforma como una progresión multiplataforma entre tres juegos.',
      img: './assets/img/pc/warzone.jpg',
      lanzamiento: '2020',
      consola: 'PC',

    },

  ];

  constructor() {
    console.log('Servicio listo para usarse. ');
  }


  getVideojuegos(): Videojuego[] {
    return this.videojuegos;
  }

  getVideojuego(idx: number) {
    return this.videojuegos[idx];
  }

  buscarVideojuegos(termino: string): Videojuego[] {
    let videojuegosArr: Videojuego[] = [];

    termino = termino.toLowerCase();

    for (let videojuego of this.videojuegos) {
      let nombre = videojuego.nombre.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        videojuegosArr.push(videojuego);
      }
    }
    return videojuegosArr;
  }
}

export interface Videojuego {
  nombre: string;
  descripcion: string;
  img: string;
  lanzamiento: string;
  consola: string;
}

