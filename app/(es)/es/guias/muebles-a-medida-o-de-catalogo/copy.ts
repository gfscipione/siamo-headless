import type { GuideCopy, GuideUI } from "@/app/components/planning-guide/PlanningGuideArticle";

export const guideCopy = {
  "eyebrow": "Guía para propietarios",
  "h1": "¿Muebles a medida o de catálogo? Cómo combinar opciones para tu vivienda en Riviera Maya",
  "intro": "Equipar una vivienda completa no exige elegir todo de un catálogo ni fabricar cada pieza a medida. Empieza por el uso de cada habitación, el espacio disponible y los muebles que quieres conservar. Después puedes valorar dónde encaja una pieza existente y dónde conviene explorar una solución a medida.",
  "coverage_note": "En una vivienda en Riviera Maya, estas elecciones forman parte del diseño del conjunto. El mobiliario debe funcionar entre espacios, evitando que el proyecto se convierta en compras independientes que después tengas que conciliar.",
  "sections": [
    {
      "id": "room",
      "h2": "EMPIEZA POR EL ESPACIO",
      "paragraphs": [
        "Antes de comparar piezas, piensa cómo utilizarás la habitación y cómo te moverás en ella. Una mesa de comedor necesita espacio para sentarse y pasar detrás de las sillas. El almacenamiento debe responder a lo que guardas y permitir el acceso a puertas y otros muebles.",
        "Revisa fotografías, planos y las piezas que ya tienes con el equipo de diseño. Confirma las medidas y condiciones necesarias para el pedido antes de comprometer una compra o fabricación."
      ]
    },
    {
      "id": "ready-made",
      "h2": "CUÁNDO PUEDE ENCAJAR UNA PIEZA DE CATÁLOGO",
      "paragraphs": [
        "Un diseño existente puede ser una opción si sus medidas, acabado y función responden al espacio. Consulta la ficha del producto, las variantes disponibles y su disponibilidad actual, sin asumir que una fotografía muestra todos los detalles que necesitas.",
        "Pregunta qué incluye el precio y qué falta organizar para la entrega o el montaje. Que una pieza aparezca a la venta no confirma, por sí solo, que pueda entregarse inmediatamente en tu vivienda."
      ]
    },
    {
      "id": "custom",
      "h2": "CUÁNDO EXPLORAR UN MUEBLE A MEDIDA",
      "paragraphs": [
        "Puede valer la pena conversar sobre una pieza a medida cuando necesitas un ajuste o una función que no encuentras en las opciones revisadas. Por ejemplo, almacenamiento para un espacio irregular, una pieza que debe alinearse con elementos existentes o unas dimensiones difíciles de encontrar en catálogo.",
        "Antes de aprobar la fabricación, acuerda qué definirá la pieza: medidas, distribución, materiales, acabado y la información que necesitas revisar. Aclara quién prepara la especificación, quién la comprueba en la vivienda y quién fabrica e instala. El estudio de diseño y el taller pueden tener responsabilidades diferentes."
      ]
    },
    {
      "id": "compare",
      "h2": "COMPARA LA ELECCIÓN COMPLETA",
      "paragraphs": [
        "Para cualquiera de las dos opciones, revisa:"
      ],
      "bullets": [
        "Cómo se ajustan las medidas y la función a la habitación.",
        "Qué se especifica sobre materiales y acabados, incluidas las instrucciones de cuidado pertinentes.",
        "Qué debes aprobar antes de realizar el pedido.",
        "Qué cubre el precio y qué se considera por separado.",
        "Qué ha confirmado el proveedor sobre disponibilidad, entrega e instalación."
      ],
      "after_list": [
        "Comprueba estos puntos para la pieza concreta, sin asumir que lo hecho a medida siempre es mejor, que el catálogo siempre es más económico o que una opción siempre llega antes. La comparación útil es entre las alternativas disponibles para tu vivienda."
      ]
    },
    {
      "id": "next-step",
      "h2": "INTEGRA LAS SELECCIONES",
      "paragraphs": [
        "Una habitación puede combinar muebles existentes, piezas de catálogo y elementos fabricados por encargo. Antes de aprobar cada compra por separado, revisa cómo funcionan juntos: proporciones, colores, materiales y uso de los espacios forman parte de la misma conversación.",
        "Si buscas apoyo para coordinar diseño, selección de mobiliario, compras e instalación de tu vivienda, conoce el servicio integral de Siamo. Explica qué tienes y en qué decisiones necesitas ayuda; la ubicación y el alcance se revisan para cada proyecto."
      ],
      "links": [
        {
          "label": "Conoce el servicio integral:",
          "href": "https://siamodesign.com/es/servicios/diseno-llave-en-mano/"
        },
        {
          "label": "Prepara la primera conversación:",
          "href": "https://siamodesign.com/es/guias/planificar-diseno-equipamiento-vivienda/"
        }
      ],
      "cta": {
        "label": "Cuéntanos tu proyecto:",
        "href": "https://siamodesign.com/es/cuestionario/"
      }
    }
  ]
} as const satisfies GuideCopy;

export const guideUI = {
  "skip": "Saltar al contenido",
  "breadcrumb_label": "Ruta de navegación",
  "home": "Inicio",
  "breadcrumb_current": "Mobiliario para tu vivienda",
  "hero_link": "En esta guía",
  "hero_target": "#room",
  "contents": "En esta guía",
  "contents_label": "Contenido de la guía",
  "mobile_contents_label": "Contenido de la guía en móvil",
  "hero_alt": "Sala y cocina de Mayan Sanctuary, Playa del Carmen",
  "hero_caption": "Mayan Sanctuary · Playa del Carmen",
  "case_alt": "Comedor de Mayan Sanctuary, Senderos Mayakoba",
  "case_caption": "Mayan Sanctuary · Senderos Mayakoba, Playa del Carmen"
} as const satisfies GuideUI;
