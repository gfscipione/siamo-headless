import type { GuideCopy, GuideUI } from "@/app/components/planning-guide/PlanningGuideArticle";

export const guideCopy = {
  "eyebrow": "Guía para propietarios",
  "h1": "Cuándo contratar el diseño de interiores de una casa en construcción en Riviera Maya",
  "intro": "Si tu vivienda en Riviera Maya sigue en construcción, no tienes que esperar a recibir las llaves para conversar sobre sus interiores. El punto de partida es identificar qué decisiones siguen abiertas: los acabados, la cocina, la iluminación o el mobiliario que necesitarás para vivir en ella.",
  "coverage_note": "Puedes vivir en México y querer delegar esa coordinación. Estar cerca de la casa no significa que quieras dedicarte a buscar cada pieza y seguir cada compra. La etapa de la obra y el apoyo que necesitas son dos cosas que conviene explicar desde el primer contacto.",
  "sections": [
    {
      "id": "review",
      "h2": "QUÉ REVISAR MIENTRAS LA CASA SIGUE EN OBRA",
      "paragraphs": [
        "Antes de encargar muebles o confirmar acabados, revisa qué está definido y qué todavía puedes elegir. Como punto de partida, separa las decisiones en tres grupos:"
      ],
      "bullets": [
        "Ejecutado: elementos que ya están instalados y que el diseño tendrá que considerar.",
        "Confirmado: materiales, piezas o trabajos ya encargados, aunque todavía no estén en la vivienda.",
        "Abierto: elecciones que aún puedes revisar con el estudio y con quienes ejecutan la obra."
      ],
      "after_list": [
        "Por ejemplo, la posición prevista para una mesa ayuda a conversar sobre la iluminación de ese espacio. La elección de electrodomésticos se relaciona con el diseño de la cocina. Estas relaciones son una razón para hablar del conjunto antes de resolver cada compra por separado.",
        "Esta clasificación es una sugerencia para ordenar la conversación; no establece el procedimiento ni las inclusiones de un proyecto de Siamo."
      ]
    },
    {
      "id": "builder",
      "h2": "SI YA TIENES CONSTRUCTOR, ACLARA CÓMO SE COMPARTIRÁN LAS DECISIONES",
      "paragraphs": [
        "Tener un constructor y necesitar diseño de interiores pueden ser necesidades complementarias. Conviene acordar quién prepara las propuestas, quién las aprueba y quién ejecuta cada trabajo.",
        "Antes de incorporar una propuesta al proyecto, puedes preguntar:"
      ],
      "bullets": [
        "¿Qué información necesita revisar el constructor para confirmar que se puede ejecutar?",
        "¿Quién confirma las medidas y las condiciones del espacio antes de comprar o fabricar?",
        "¿Quién coordina con el especialista correspondiente si una elección afecta a la iluminación o a una instalación?"
      ],
      "after_list": [
        "Las responsabilidades se acuerdan según el proyecto. La coordinación de interiores no debe dejar implícito quién se encarga de la ejecución de la obra."
      ]
    },
    {
      "id": "mayan",
      "h2": "MAYAN SANCTUARY: UN EJEMPLO EN SENDEROS MAYAKOBA",
      "paragraphs": [
        "En Mayan Sanctuary, una vivienda familiar de tres niveles en Playa del Carmen, Siamo se incorporó durante la construcción, antes de completar los acabados.",
        "Además de seleccionar mobiliario y decoración, el estudio diseñó la cocina y la lavandería y seleccionó acabados que todavía no se habían comprado. Las propuestas se desarrollaron con los propietarios y se entregaron al constructor para su ejecución. El equipo también coordinó ajustes eléctricos y de iluminación en áreas específicas con el electricista de la obra.",
        "Este caso muestra una forma concreta de colaborar mientras la vivienda sigue en construcción. El alcance de tu casa se revisaría por separado, según su estado y las decisiones pendientes."
      ],
      "links": [
        {
          "label": "Ver Mayan Sanctuary:",
          "href": "https://siamodesign.com/es/portafolio/mayan-sanctuary/"
        }
      ]
    },
    {
      "id": "finished",
      "h2": "Y SI LA VIVIENDA YA ESTÁ TERMINADA",
      "paragraphs": [
        "La conversación puede empezar desde lo que ya existe. Explica qué quieres conservar, qué necesitas equipar y qué espacios deben funcionar juntos. Si estás esperando la entrega, indica qué información tienes y qué queda por comprobar en la vivienda.",
        "No hace falta decidir tú todos los muebles antes de pedir ayuda. Puedes empezar por el uso de la casa y por las tareas que quieres delegar, dejando las elecciones concretas para el desarrollo del proyecto."
      ]
    },
    {
      "id": "delegate",
      "h2": "QUÉ DELEGAR SI BUSCAS UN SERVICIO INTEGRAL",
      "paragraphs": [
        "Si quieres apoyo para coordinar diseño, selección de mobiliario, compras e instalación, puedes explorar el diseño de interiores llave en mano de Siamo. La ubicación, el estado de la vivienda y el alcance permiten revisar si es la modalidad adecuada.",
        "Esto aplica tanto si ya vives en México como si coordinas tu propiedad desde otro país. En la primera conversación, explica qué quieres aprobar personalmente y qué seguimiento prefieres encargar al estudio."
      ],
      "links": [
        {
          "label": "Conocer el servicio llave en mano:",
          "href": "https://siamodesign.com/es/servicios/diseno-llave-en-mano/"
        }
      ]
    },
    {
      "id": "next-step",
      "h2": "EL SIGUIENTE PASO PARA TU VIVIENDA",
      "paragraphs": [
        "Cuéntanos dónde está la casa, en qué etapa se encuentra y qué decisiones quedan abiertas. Con esa información podemos conversar sobre el apoyo que necesitas para su diseño y equipamiento."
      ],
      "links": [
        {
          "label": "Si quieres ordenar esa información antes de escribirnos, consulta la guía para preparar tu proyecto:",
          "href": "https://siamodesign.com/es/guias/planificar-diseno-equipamiento-vivienda/"
        }
      ],
      "cta": {
        "label": "Cuéntanos sobre tu proyecto:",
        "href": "https://siamodesign.com/es/cuestionario/"
      }
    }
  ]
} as const satisfies GuideCopy;

export const guideUI = {
  "skip": "Saltar al contenido",
  "breadcrumb_label": "Ruta de navegación",
  "home": "Inicio",
  "breadcrumb_current": "Guía de interiores en obra",
  "hero_link": "En esta guía",
  "hero_target": "#review",
  "contents": "En esta guía",
  "contents_label": "Contenido de la guía",
  "mobile_contents_label": "Contenido de la guía en móvil",
  "hero_alt": "Sala con sofá junto a la cocina y el comedor de Mayan Sanctuary",
  "hero_caption": "Mayan Sanctuary, una vivienda familiar en Senderos Mayakoba, Playa del Carmen.",
  "case_alt": "Cocina con gabinetes oscuros, asientos en la barra y lámparas tejidas en Mayan Sanctuary",
  "case_caption": "Mayan Sanctuary, una vivienda familiar en Senderos Mayakoba, Playa del Carmen."
} as const satisfies GuideUI;
