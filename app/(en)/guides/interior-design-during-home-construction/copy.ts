import type { GuideCopy, GuideUI } from "@/app/components/planning-guide/PlanningGuideArticle";

export const guideCopy = {
  "eyebrow": "A guide for homeowners",
  "h1": "When to Bring an Interior Designer into Your Riviera Maya Home Build",
  "intro": "If your home in the Riviera Maya is still under construction, you do not have to wait until handover to discuss its interiors. Start with the choices that remain open: finishes, the kitchen, lighting and the furniture you will need to live there.",
  "coverage_note": "You may already live in Mexico and still want someone else to coordinate those details. Being close to the property does not mean you want to source every piece or follow every purchase yourself. Explain both the stage of construction and the support you are looking for when you first contact a studio.",
  "sections": [
    {
      "id": "review",
      "h2": "WHAT TO REVIEW WHILE YOUR HOME IS UNDER CONSTRUCTION",
      "paragraphs": [
        "Before ordering furniture or confirming finishes, establish what has been decided and what you can still choose. A useful starting point is to separate decisions into three groups:"
      ],
      "bullets": [
        "Installed: elements already in place that the interior design will need to work with.",
        "Committed: materials, pieces or work already ordered, even if they have not arrived at the property.",
        "Open: choices you can still discuss with the studio and the people carrying out the construction."
      ],
      "after_list": [
        "For example, the intended dining-table position helps frame a conversation about lighting. Appliance choices connect with the kitchen design. These relationships give you a reason to discuss the home as a whole before making each purchase separately.",
        "This is a suggested way to prepare for the conversation, rather than a defined Siamo procedure or a statement of what your project includes."
      ]
    },
    {
      "id": "builder",
      "h2": "IF YOU ALREADY HAVE A BUILDER, CLARIFY HOW DECISIONS WILL BE SHARED",
      "paragraphs": [
        "Having a builder and needing interior design can be complementary. Agree who develops proposals, who approves them and who carries out each part of the work.",
        "Before incorporating a proposal into the project, consider asking:"
      ],
      "bullets": [
        "What information does the builder need to check whether it can be carried out?",
        "Who confirms measurements and site conditions before an item is ordered or fabricated?",
        "Who coordinates with the appropriate specialist if a choice affects lighting or an installation?"
      ],
      "after_list": [
        "Responsibilities are agreed for each project. Interior design coordination should leave you clear about who is responsible for carrying out the construction work."
      ]
    },
    {
      "id": "mayan",
      "h2": "MAYAN SANCTUARY: AN EXAMPLE IN SENDEROS MAYAKOBA",
      "paragraphs": [
        "At Mayan Sanctuary, a three-level family home in Playa del Carmen, Siamo joined during construction, before the finishes were completed.",
        "Alongside furniture and décor selection, the studio designed the kitchen and laundry room and selected finishes that had not yet been purchased. Proposals were developed with the owners and passed to their builder for execution. The team also coordinated electrical and lighting adjustments in selected areas with the construction electrician.",
        "This project offers a concrete example of collaboration while a home is still being built. The scope for your own home would be reviewed separately, taking account of its current condition and the decisions still to be made."
      ],
      "links": [
        {
          "label": "Explore Mayan Sanctuary:",
          "href": "https://siamodesign.com/portfolio/mayan-sanctuary/"
        }
      ]
    },
    {
      "id": "finished",
      "h2": "WHAT IF THE HOME IS ALREADY FINISHED?",
      "paragraphs": [
        "Start with what is already there. Explain what you want to keep, what needs furnishing and which spaces need to work together. If you are waiting for handover, share the information available and what still needs to be checked at the property.",
        "You do not need to choose all the furniture before asking for help. Begin with how you will use the home and the tasks you would like to delegate; individual selections can be developed as part of the project."
      ]
    },
    {
      "id": "delegate",
      "h2": "WHAT TO DELEGATE WHEN YOU WANT A FULL SERVICE",
      "paragraphs": [
        "If you want support coordinating design, furniture selection, purchases and installation, explore Siamo's full-service interior design. Your home's location, condition and proposed scope help the studio assess whether the service fits.",
        "This applies whether you already live in Mexico or manage your property from another country. Explain which choices you want to approve personally and which follow-up tasks you would prefer the studio to handle."
      ],
      "links": [
        {
          "label": "Explore full-service interior design:",
          "href": "https://siamodesign.com/services/full-service/"
        }
      ]
    },
    {
      "id": "next-step",
      "h2": "THE NEXT STEP FOR YOUR HOME",
      "paragraphs": [
        "Tell us where your home is, its current stage and which decisions remain open. That gives us a starting point to discuss the support you need for its interior design and furnishing."
      ],
      "links": [
        {
          "label": "For help organising that information before you contact us, read our home design and furnishing planning guide:",
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
  "breadcrumb_current": "Home construction guide",
  "hero_link": "In this guide",
  "hero_target": "#review",
  "contents": "In this guide",
  "contents_label": "Guide contents",
  "mobile_contents_label": "Guide contents on mobile",
  "hero_alt": "Living area with a sofa beside the kitchen and dining space at Mayan Sanctuary",
  "hero_caption": "Mayan Sanctuary, a family home in Senderos Mayakoba, Playa del Carmen.",
  "case_alt": "Kitchen with dark cabinetry, counter seating and woven pendant lights at Mayan Sanctuary",
  "case_caption": "Mayan Sanctuary, a family home in Senderos Mayakoba, Playa del Carmen."
} as const satisfies GuideUI;
