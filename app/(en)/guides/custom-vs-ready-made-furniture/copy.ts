import type { GuideCopy, GuideUI } from "@/app/components/planning-guide/PlanningGuideArticle";

export const guideCopy = {
  "eyebrow": "A guide for homeowners",
  "h1": "Custom or Ready-Made Furniture? Plan the Mix for Your Riviera Maya Home",
  "intro": "Furnishing a whole home does not require choosing everything from one catalogue or making every piece to order. Start with what each room needs to do, the space available and the items you want to keep. Then consider where a ready-made piece fits and where a made-to-measure solution deserves a closer look.",
  "coverage_note": "For a home in the Riviera Maya, this is part of a wider design conversation. Furniture choices need to work together across the rooms, rather than become a series of purchases that you try to reconcile afterwards.",
  "sections": [
    {
      "id": "room",
      "h2": "START WITH THE ROOM, NOT THE PRODUCT",
      "paragraphs": [
        "Before comparing individual pieces, consider how you will use the room and move through it. A dining table needs room for people to sit and pass behind the chairs. Storage needs to accommodate what you use and leave access to doors or other furniture.",
        "Review photographs, plans and the pieces you already own with the design team. Confirm the measurements and conditions needed for an order before committing to a purchase or fabrication."
      ]
    },
    {
      "id": "ready-made",
      "h2": "WHEN A READY-MADE PIECE MAY FIT",
      "paragraphs": [
        "An existing design can be worth considering when its dimensions, finish and function suit the room. Check the actual product specification, available options and current availability rather than assume a photograph shows every detail you need.",
        "Ask what is included in the quoted price and what still needs arranging for delivery or assembly. A piece being listed for sale does not, by itself, confirm that it is ready for immediate delivery to your property."
      ]
    },
    {
      "id": "custom",
      "h2": "WHEN TO EXPLORE A MADE-TO-MEASURE OPTION",
      "paragraphs": [
        "A custom piece may be worth discussing when you need a particular fit or function that the options you have reviewed do not provide. Examples might include storage for an awkward space, a piece that needs to align with existing elements or dimensions that are difficult to find in a catalogue.",
        "Before approving fabrication, agree what will define the piece: measurements, layout, materials, finish and the information you need to review. Clarify who prepares the specification, who checks it at the property and who carries out the fabrication and installation. A design studio and a workshop may have different responsibilities."
      ]
    },
    {
      "id": "compare",
      "h2": "COMPARE THE COMPLETE CHOICE",
      "paragraphs": [
        "For either type of furniture, review:"
      ],
      "bullets": [
        "How its dimensions and function fit the room.",
        "What is specified about materials and finishes, including any relevant care instructions.",
        "What you need to approve before ordering.",
        "What the quoted price covers and what is separate.",
        "What the supplier has confirmed about availability, delivery and installation."
      ],
      "after_list": [
        "Check these points for the actual item rather than assume that custom is always better, ready-made is always cheaper or one option is always faster. The useful comparison is between the options available for your home."
      ]
    },
    {
      "id": "next-step",
      "h2": "BRING THE SELECTIONS TOGETHER",
      "paragraphs": [
        "Some rooms may combine existing furniture, ready-made pieces and elements made to order. Review how they work together before approving each purchase separately: proportions, colours, materials and the way you will use the spaces all belong in that discussion.",
        "If you want support coordinating the design, furniture selection, purchases and installation of your home, explore Siamo’s full-service interior design. Explain what you already have and which decisions you would like help making; the location and scope are reviewed for each project."
      ],
      "links": [
        {
          "label": "Explore full-service interior design:",
          "href": "https://siamodesign.com/services/full-service/"
        },
        {
          "label": "Prepare for your first conversation:",
          "href": "https://siamodesign.com/guides/planning-home-design-and-furnishing/"
        }
      ],
      "cta": {
        "label": "Tell us about your project:",
        "href": "https://siamodesign.com/questionnaire/"
      }
    }
  ]
} as const satisfies GuideCopy;

export const guideUI = {
  "skip": "Skip to content",
  "breadcrumb_label": "Breadcrumb",
  "home": "Home",
  "breadcrumb_current": "Furniture choices",
  "hero_link": "In this guide",
  "hero_target": "#room",
  "contents": "In this guide",
  "contents_label": "Guide contents",
  "mobile_contents_label": "Guide contents on mobile",
  "hero_alt": "Living area and kitchen at Mayan Sanctuary, Playa del Carmen",
  "hero_caption": "Mayan Sanctuary · Playa del Carmen",
  "case_alt": "Dining area at Mayan Sanctuary, Senderos Mayakoba",
  "case_caption": "Mayan Sanctuary · Senderos Mayakoba, Playa del Carmen"
} as const satisfies GuideUI;
