import type { GuideCopy, GuideUI } from "@/app/components/planning-guide/PlanningGuideArticle";

export const guideCopy = {
  "eyebrow": "Guía para propietarios",
  "h1": "Cómo elegir un estudio de interiorismo para tu vivienda en Riviera Maya",
  "intro": "Un portafolio puede ayudarte a encontrar una estética que te guste. Elegir quién diseñará y equipará tu vivienda requiere otra conversación: qué coordinará el estudio, qué tendrás que resolver tú y cómo revisarán juntos las propuestas.",
  "coverage_note": "Si buscas ayuda para una vivienda completa en Riviera Maya, compara las propuestas con esa necesidad en mente. Un concepto de diseño, una selección de muebles y un proyecto que coordina diseño e instalación pueden cubrir trabajos diferentes, aunque las fotografías resulten igual de atractivas.",
  "sections": [
    {
      "id": "mayan",
      "h2": "BUSCA UN PROYECTO QUE PUEDAS ENTENDER, ADEMÁS DE UNA HABITACIÓN QUE TE GUSTE",
      "paragraphs": [
        "Al revisar un portafolio, pregunta qué hizo el estudio en ese proyecto. ¿Desarrolló la distribución, seleccionó el mobiliario, diseñó elementos a medida o coordinó compras e instalación? ¿Qué decisiones estaban tomadas cuando se incorporó?",
        "Busca una explicación del trabajo además de las fotografías del resultado. El proyecto no tiene que ser idéntico a tu vivienda para servir como referencia, pero conviene entender qué parte de esa experiencia se relaciona con lo que necesitas.",
        "En Mayan Sanctuary, Siamo se incorporó durante la construcción de una vivienda familiar de tres niveles en Senderos Mayakoba. La descripción explica su trabajo en cocina, lavandería, mobiliario y acabados pendientes, y cómo compartió las propuestas con los propietarios y su constructor."
      ],
      "links": [
        {
          "label": "Conoce Mayan Sanctuary:",
          "href": "https://siamodesign.com/es/portafolio/mayan-sanctuary/"
        }
      ]
    },
    {
      "id": "scope",
      "h2": "COMPARA PROPUESTAS CON EL MISMO ALCANCE",
      "paragraphs": [
        "Antes de comparar el total, revisa si cada propuesta responde las mismas preguntas:"
      ],
      "bullets": [
        "¿Qué habitaciones y espacios contempla, y qué elementos existentes se conservarán?",
        "¿Qué documentos de diseño o selecciones recibirás?",
        "¿Quién comprará los artículos y dará seguimiento a los proveedores?",
        "¿Qué trabajos de entrega, montaje e instalación incluye?",
        "¿Qué tareas quedan contigo, con tu constructor o con otro especialista?"
      ],
      "after_list": [
        "Marca cada punto como incluido, excluido o pendiente de aclaración. Una descripción breve junto a cada respuesta resulta más útil que una casilla por sí sola. Comparar es más sencillo cuando puedes ver qué cubre cada propuesta."
      ]
    },
    {
      "id": "fee",
      "h2": "DISTINGUE LOS HONORARIOS DEL EQUIPAMIENTO DE TU VIVIENDA",
      "paragraphs": [
        "Pregunta cómo se relaciona el importe propuesto con los servicios profesionales, el mobiliario, los artículos domésticos y los trabajos necesarios para instalarlos. Aclara si una cifra es una estimación, un precio confirmado de proveedor o una previsión que todavía depende de las selecciones.",
        "Pregunta también cómo se conversarán los cambios al alcance acordado. Se trata de entender la propuesta que estás valorando, sin asumir que todos los estudios utilizan el mismo modelo de cobro."
      ]
    },
    {
      "id": "decisions",
      "h2": "ENTIENDE CÓMO TOMARÁS LAS DECISIONES",
      "paragraphs": [
        "Pide un ejemplo de cómo se presentan las propuestas y se recogen tus comentarios. Aclara qué necesita tu confirmación antes de comprar o fabricar, y cómo se tratan los cambios después de aprobar una pieza.",
        "Siamo revisa las propuestas de diseño mediante videollamadas y comparte mood boards y selecciones de artículos en Drive. Las propuestas de compra incluyen tiendas, enlaces y opciones de precio. Esa conversación permite explicar qué decisiones quieres tomar personalmente y qué tareas prefieres delegar."
      ]
    },
    {
      "id": "next-step",
      "h2": "ELIGE EL APOYO QUE NECESITA EL PROYECTO COMPLETO",
      "paragraphs": [
        "Una selección útil reúne tres elementos: un trabajo que valoras, un alcance adecuado para tu vivienda y responsabilidades que entiendes. Tanto si vives en México como en otro país, explica quién quieres que coordine las actividades en la propiedad.",
        "Si buscas apoyo con diseño, selección de mobiliario, compras e instalación, conoce el servicio integral de Siamo. El estudio revisa la ubicación y el alcance para valorar si es adecuado para tu proyecto."
      ],
      "links": [
        {
          "label": "Conoce el servicio integral:",
          "href": "https://siamodesign.com/es/servicios/diseno-llave-en-mano/"
        },
        {
          "label": "Para preparar la información inicial de tu vivienda:",
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
  "breadcrumb_current": "Elegir estudio",
  "hero_link": "En esta guía",
  "hero_target": "#mayan",
  "contents": "En esta guía",
  "contents_label": "Contenido de la guía",
  "mobile_contents_label": "Contenido de la guía en móvil",
  "hero_alt": "Sala y cocina de Mayan Sanctuary, Playa del Carmen",
  "hero_caption": "Mayan Sanctuary · Playa del Carmen",
  "case_alt": "Comedor de Mayan Sanctuary, Senderos Mayakoba",
  "case_caption": "Mayan Sanctuary · Senderos Mayakoba, Playa del Carmen"
} as const satisfies GuideUI;
