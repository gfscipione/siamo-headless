import type { GuideCopy, GuideUI } from "@/app/components/planning-guide/PlanningGuideArticle";

export const guideCopy = {
  "eyebrow": "A guide for homeowners",
  "h1": "Choosing an Interior Designer for Your Riviera Maya Home",
  "intro": "A portfolio can help you find a style you like. Choosing who will design and furnish your home takes another conversation: what will the studio actually coordinate, what will you need to handle, and how will you review the work together?",
  "coverage_note": "If you want help with a complete home in the Riviera Maya, compare proposals against that need. A design concept, a furniture selection and a coordinated design-and-installation project can describe different amounts of work, even when their photographs look equally appealing.",
  "sections": [
    {
      "id": "mayan",
      "h2": "LOOK FOR A PROJECT YOU CAN UNDERSTAND, NOT JUST A ROOM YOU LIKE",
      "paragraphs": [
        "When reviewing a portfolio, ask what the studio did in the project. Did it develop the layout, select furniture, design built-in elements or coordinate purchases and installation? Which decisions were already made when the team joined?",
        "Look for an explanation of the work as well as photographs of the result. A project does not need to resemble your home exactly to be useful evidence, but you should understand which parts of the experience relate to what you need.",
        "At Mayan Sanctuary, Siamo joined a three-level family home in Senderos Mayakoba during construction. The project description explains its work on the kitchen, laundry room, furnishings and remaining finishes, and how proposals were shared with the owners and their builder."
      ],
      "links": [
        {
          "label": "Explore Mayan Sanctuary:",
          "href": "https://siamodesign.com/portfolio/mayan-sanctuary/"
        }
      ]
    },
    {
      "id": "scope",
      "h2": "COMPARE PROPOSALS AGAINST THE SAME SCOPE",
      "paragraphs": [
        "Before comparing a total, check whether each proposal answers the same questions:"
      ],
      "bullets": [
        "Which rooms and spaces are covered, and which existing elements will be kept?",
        "What design documents or selections will you receive?",
        "Who will purchase the selected items and follow up with suppliers?",
        "What delivery, assembly and installation work is included?",
        "Which tasks remain with you, your builder or another specialist?"
      ],
      "after_list": [
        "Mark each item as included, excluded or awaiting clarification. A short description beside each answer is more useful than a tick alone. Two proposals are easier to compare when you can see what each one covers."
      ]
    },
    {
      "id": "fee",
      "h2": "SEPARATE THE DESIGN FEE FROM THE ITEMS FOR YOUR HOME",
      "paragraphs": [
        "Ask how the proposed amount relates to professional services, furniture, household items and the work needed to install them. Clarify whether a figure is an estimate, a confirmed supplier price or an allowance that still depends on selections.",
        "Also ask how changes to the agreed scope will be discussed. The purpose is to understand the proposal you are considering, rather than assume that every studio uses the same pricing model."
      ]
    },
    {
      "id": "decisions",
      "h2": "UNDERSTAND HOW YOU WILL MAKE DECISIONS",
      "paragraphs": [
        "Ask to see an example of how proposals are presented and how your feedback is recorded. Clarify what needs your confirmation before purchasing or fabrication, and how changes are handled once an item has been approved.",
        "Siamo reviews design proposals through video calls and shares mood boards and item selections through Drive. Purchasing proposals include stores, links and price options. You can use that conversation to explain which decisions you want to make personally and which tasks you want to delegate."
      ]
    },
    {
      "id": "next-step",
      "h2": "CHOOSE THE SUPPORT THAT FITS YOUR WHOLE PROJECT",
      "paragraphs": [
        "A useful shortlist brings together three things: work you value, a scope that fits your home and responsibilities you understand. Whether you live in Mexico or another country, explain who you want to coordinate the work at the property.",
        "If you are looking for support with design, furniture selection, purchases and installation, explore Siamo’s full-service interior design. The studio reviews the location and scope to assess whether it fits your project."
      ],
      "links": [
        {
          "label": "Explore full-service interior design:",
          "href": "https://siamodesign.com/services/full-service/"
        },
        {
          "label": "For help preparing the initial information about your home:",
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
  "breadcrumb_current": "Choosing a design studio",
  "hero_link": "In this guide",
  "hero_target": "#mayan",
  "contents": "In this guide",
  "contents_label": "Guide contents",
  "mobile_contents_label": "Guide contents on mobile",
  "hero_alt": "Living area and kitchen at Mayan Sanctuary, Playa del Carmen",
  "hero_caption": "Mayan Sanctuary · Playa del Carmen",
  "case_alt": "Dining area at Mayan Sanctuary, Senderos Mayakoba",
  "case_caption": "Mayan Sanctuary · Senderos Mayakoba, Playa del Carmen"
} as const satisfies GuideUI;
