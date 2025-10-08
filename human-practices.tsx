import SectionNav, { Section } from "../components/SectionNav";
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import LeadDescription from "../components/LeadDescription";
import TableOfContents from "../components/TableOfContents";
import StakeholderTimeline from "../components/StakeholderTimeline";
import GoldenCircle from "../components/GoldenCircle";
import ValueChain from "../components/ValueChain";
import Alert from "../components/Alert";
import References, { Reference } from "../components/References";
import HoverCoin from "../components/HoverCircle";
import CollapseSection from "../components/CollapseSection";
import ExternalFileButton from "../components/ExternalFileButton";
import { PiCursorClickDuotone } from "react-icons/pi";
import { Carousel } from "../components/Carousel/Carousel";
import { CarouselImage } from "../types/Carousel";
import TooltipAssemble from "../components/TooltipAssemble";
import WordCloud from "../components/WordCloud";

const carouselImages1: CarouselImage[] = [
  {
    src: "https://static.igem.wiki/teams/5718/human-practices/overview/leaders-meeting-1.webp",
    alt: "Leaders Meetings",
  },
  {
    src: "https://static.igem.wiki/teams/5718/human-practices/overview/leaders-meeting-2.webp",
    alt: "Leaders Meetings",
  },
  {
    src: "https://static.igem.wiki/teams/5718/human-practices/overview/leaders-meeting-3.webp",
    alt: "Leaders Meetings",
  },
  {
    src: "https://static.igem.wiki/teams/5718/human-practices/overview/leaders-meeting-4.webp",
    alt: "Leaders Meetings",
  },
  {
    src: "https://static.igem.wiki/teams/5718/human-practices/overview/leaders-meeting-5.webp",
    alt: "Leaders Meetings",
  },
  {
    src: "https://static.igem.wiki/teams/5718/human-practices/overview/leaders-meeting-6.webp",
    alt: "Leaders Meetings",
  }
];

const carouselImages2: CarouselImage[] = [
  {
    src: "https://static.igem.wiki/teams/5718/human-practices/overview/team-meetings-11.webp",
    alt: "Team Meetings",
  },
  {
    src: "https://static.igem.wiki/teams/5718/human-practices/overview/team-meetings-6.webp",
    alt: "Team Meetings",
  },
  {
    src: "https://static.igem.wiki/teams/5718/human-practices/overview/team-meetings-3.webp",
    alt: "Team Meetings",
  },
  {
    src: "https://static.igem.wiki/teams/5718/human-practices/overview/team-meetings-4.webp",
    alt: "Team Meetings",
  },
  {
    src: "https://static.igem.wiki/teams/5718/human-practices/overview/team-meetings-2.webp",
    alt: "Team Meetings",
  },
];

const carouselImages3: CarouselImage[] = [
  {
    src: "https://static.igem.wiki/teams/5718/human-practices/overview/progress-meetings-1.webp",
    alt: "Progress Meetings",
  },
  {
    src: "https://static.igem.wiki/teams/5718/human-practices/overview/progress-meetings-2.webp",
    alt: "Progress Meetings",
  },
  {
    src: "https://static.igem.wiki/teams/5718/human-practices/overview/progress-meetings-3.webp",
    alt: "Progress Meetings",
  },
  {
    src: "https://static.igem.wiki/teams/5718/human-practices/overview/progress-meetings-4.webp",
    alt: "Progress Meetings",
  },
  {
    src: "https://static.igem.wiki/teams/5718/human-practices/overview/progress-meetings-5.webp",
    alt: "Progress Meetings",
  },
];

const carouselImages4: CarouselImage[] = [
  {
    src: "https://static.igem.wiki/teams/5718/human-practices/overview/meeting-area-1.webp",
    alt: "Area Meetings",
  },
  {
    src: "https://static.igem.wiki/teams/5718/human-practices/overview/meeting-area-2.webp",
    alt: "Area Meetings",
  },
  {
    src: "https://static.igem.wiki/teams/5718/human-practices/overview/meeting-area-3.webp",
    alt: "Area Meetings",
  },
  {
    src: "https://static.igem.wiki/teams/5718/human-practices/overview/meeting-area-4.webp",
    alt: "Area Meetings",
  },
  {
    src: "https://static.igem.wiki/teams/5718/human-practices/overview/meeting-area-5.webp",
    alt: "Area Meetings",
  },
];

const carouselImagesEmpathy: CarouselImage[] = [
  {
    src: "https://static.igem.wiki/teams/5718/human-practices/silver/empathy-hp-1.webp",
    alt: "Empathy Map 1",
  },
  {
    src: "https://static.igem.wiki/teams/5718/human-practices/silver/empathy-hp-2.webp",
    alt: "Empathy Map 2",
  },
  {
    src: "https://static.igem.wiki/teams/5718/human-practices/silver/empathy-hp-3.webp",
    alt: "Empathy Map 3",
  },
  {
    src: "https://static.igem.wiki/teams/5718/human-practices/silver/empathy-hp-4.webp",
    alt: "Empathy Map 4",
  },
  {
    src: "https://static.igem.wiki/teams/5718/human-practices/silver/empathy-hp-5.webp",
    alt: "Empathy Map 5",
  },
  {
    src: "https://static.igem.wiki/teams/5718/human-practices/silver/empathy-hp-6.webp",
    alt: "Empathy Map 6",
  },
  {
    src: "https://static.igem.wiki/teams/5718/human-practices/silver/empathy-hp-7.webp",
    alt: "Empathy Map 7",
  },
  {
    src: "https://static.igem.wiki/teams/5718/human-practices/silver/empathy-hp-8.webp",
    alt: "Empathy Map 8",
  },
  {
    src: "https://static.igem.wiki/teams/5718/human-practices/silver/empathy-hp-9.webp",
    alt: "Empathy Map 9",
  },
  {
    src: "https://static.igem.wiki/teams/5718/human-practices/silver/empathy-hp-10.webp",
    alt: "Empathy Map 10",
  },
];


const OverviewReferences: Reference[] = [
  {
    id: 1,
    number: 1,
    text: "<i>Massive Transformative Purpose – OpenEXO</i>. (s. f.). https://web.openexo.com/exo-model/massive-transformative-purpose/"

  },
  {
    id: 2,
    number: 2,
    text: "TEDx Talks. (2009, 29 septiembre). <i>Start with why -- how great leaders inspire action | Simon Sinek | TEDxPugetSound</i> [Vídeo]. YouTube. https://www.youtube.com/watch?v=u4ZoJKF_VuA"
  },
  {
    id: 3,
    number: 3,
    text: "Harvard University. “Implicit Association Test.” <i>Project Implicit</i>, Harvard, 2011, implicit.harvard.edu/implicit/takeatest.html."
  },
  {
    id: 4,
    number: 4,
    text: "Vertex42. “Simple Gantt Chart.” <i>Vertex42.com</i>, 12 Mar. 2021, www.vertex42.com/ExcelTemplates/simple-gantt-chart.html?utm_source=ms&utm_medium=file&utm_campaign=office&utm_content=url."
  }
];

const integratedReferences: Reference[] = [
  {
    id: 1,
    number: 1,
    text: " National Careers Service. “The STAR Method.” Nationalcareers.service.gov.uk, GOV.UK, 2024, nationalcareers.service.gov.uk/careers-advice/interview-advice/the-star-method."
  },
  {
    id: 2,
    number: 2,
    text: "Berné, M. (2023, July 24). Affinity Mapping: una técnica ágil para la organización de ideas. Blog. https://www.scrummanager.com/blog/2023/07/affinity-mapping-una-tecnica-agil-para-la-organizacion-de-ideas/"
  },
  {
    id: 3,
    number: 3,
    text: "Halfmann, B. (2022, October 11). What is Value Sensitive Design? And what are the benefits? Muteo. https://muteo.co/what-is-value-sensitive-design"
  },
  {
    id: 4,
    number: 4,
    text: "Chihuahua será sede del Foro Global Agroalimentario 2025 | Portal Gubernamental del Estado de Chihuahua. (s. f.). https://chihuahua.gob.mx/prensa/chihuahua-sera-sede-del-foro-global-agroalimentario-2025"
  },
  {
    id: 5,
    number: 5,
    text: "Ecosistema - unidades validadas Chihuahua. (s. f.). https://creatorapp.zohopublic.com/inndech/ecosistema/page-perma/Unidades_Validadas_Chihuahua/YbU1ESXWbNpfXkvea9yZuODkUBY9ewh6ZFtujjFk1Pd27sdJOdsdwMwuMThfPWejDmJuHgmu5bhQQrMFjzFDXWUGERzkN57pfBNp"
  },
  {
    id: 6,
    number: 6,
    text: "Hand, R. (2009, 17 marzo). A Talk with IBM’s Jonathan Feinberg about Wordle. VizWorld.com. https://vizworld.com/2009/03/a-talk-with-ibm%E2%80%99s-jonathan-feinberg-about-wordle/"
  }
];

const SilverReferences: Reference[] = [
  {
    id: 1,
    number: 1,
    text: "FAOSTAT. (2023). https://www.fao.org/faostat/es/#data/QCL"
  },
  {
    id: 2,
    number: 2,
    text: "Nchanji, E. B., & Ageyo, O. C. (2021). <i>Do Common Beans (Phaseolus vulgaris L.) Promote Good Health in Humans?</i> A Systematic Review and Meta-Analysis of Clinical and Randomized Controlled Trials. Nutrients, 13(11), 3701. https://doi.org/10.3390/nu13113701"
  },
  {
    id: 3,
    number: 3,
    text: "Almeida, N. (2024, 18 octubre). <i>A swift History of Beans - Feed</i>. Feed. https://feed.jeronimomartins.com/society/culture/a-swift-history-of-beans/"
  },
  {
    id: 4,
    number: 4,
    text: "Bean art work. (s. f.). <i>Mr. Smith’s Art Class Lone Oak Elementary School</i>. https://loes-art.weebly.com/bean-art-work.html"
  },
  {
    id: 5,
    number: 5,
    text: "Explore Louisiana. (2024, February 9). Red beans parade honors culinary tradition. ExploreLouisiana.com. https://www.explorelouisiana.com/articles/red-beans-parade-honors-culinary-tradition"
  },
  {
    id: 6,
    number: 6,
    text: "De Wulf, D. (2025, 11 septiembre). we’re building a mutual aid “machine”  — Welcome to Beanlandia. Welcome To Beanlandia. https://www.kreweofredbeans.org/toughts/were-building-a-mutual-aid-machine"
  },
  {
    id: 7,
    number: 7,
    text: "Our space | Discover Local History – Join Us Today — Welcome to Beanlandia. (s. f.). Welcome To Beanlandia. https://www.kreweofredbeans.org/airspace"
  },
  {
    id: 8,
    number: 8,
    text: "Germer, S. (2023, 20 febrero). Photos: The Krewe of Red Beans marches on Lundi Gras. NOLA.com. https://www.nola.com/entertainment_life/krewe-of-red-beans-marches-on-lundi-gras/collection_aab34508-b16d-11ed-a603-47a9d71655ef.html#12"
  },
  {
    id: 9,
    number: 9,
    text: "Lundi Gras | New Orleans. (s. f.). https://www.neworleans.com/events/holidays-seasonal/mardi-gras/lundi-gras/"
  },
  {
    id: 10,
    number: 10,
    text: "Ginsberg, R. (2023, May 15). Big dreams are small beans at Powerhouse Arts’ inaugural artists’ dinner. Cultbytes. https://cultbytes.com/big-dreams-are-small-beans-at-power-house-arts-inaugural-artists-dinner/"
  },
  {
    id: 11,
    number: 11,
    text: "Creative Chef » STIMULUS INTERACTIVA @POWERHOUSE ARTS New York. (s. f.). https://creativechef.nl/project/stimulus-interactiva-powerhouse-arts-new-york/"
  },
  {
    id: 12,
    number: 12,
    text: "Dutch Culture USA. (2025, 27 junio). «Stimulus Interactiva» - Immersive culinary art experience by Creative Chef Studio at Powerhouse Arts | Dutch Culture USA. https://dutchcultureusa.com/events/stimulus-interactiva-immersive-culinary-art-experience-by-creative-chef-studio-at-powerhouse-arts/"
  },
  {
    id: 13,
    number: 13,
    text: "ScienceDirect. (n.d.). Nutraceutical. In Topics in agricultural and biological sciences. Elsevier. https://www.sciencedirect.com/topics/agricultural-and-biological-sciences/nutraceutical"
  },
  {
    id: 14,
    number: 14,
    text: "Chavez-Santoscoy, R. A., Gutierrez-Uribe, J. A., Granados, O., Torre-Villalvazo, I., Serna-Saldivar, S. O., Torres, N., Palacios-González, B., & Tovar, A. R. (2014). Flavonoids and saponins extracted from black bean (Phaseolus vulgarisL.) seed coats modulate lipid metabolism and biliary cholesterol secretion in C57BL/6 mice. British Journal Of Nutrition, 112(6), 886-899. https://doi.org/10.1017/s0007114514001536"
  },
  {
    id: 15,
    number: 15,
    text: "Damián-Medina, K., Milenkovic, D., Salinas-Moreno, Y., Corral-Jara, K. F., Figueroa-Yáñez, L., Marino-Marmolejo, E., & Lugo-Cervantes, E. (2022). Anthocyanin-rich extract from black beans exerts anti-diabetic effects in rats through a multi-genomic mode of action in adipose tissue. Frontiers In Nutrition, 9. https://doi.org/10.3389/fnut.2022.1019259"
  },
  {
    id: 16,
    number: 16,
    text: "Kalra, E. K. (2003). Nutraceutical—Definition and introduction. Journal of Clinical Pharmacology, 45(8), 977–979. https://onlinejcf.com/article/S1071-9164%2809%2900251-6/fulltext"
  },
  {
    id: 17,
    number: 17,
    text: "Aregueta-Robles, U., Fajardo-Ramírez, O. R., Villela, L., Gutiérrez-Uribe, J. A., Hernández-Hernández, J., Del Carmen López-Sánchez, R., Scott, S., & Serna-Saldívar, S. (2018). Cytotoxic Activity of a Black Bean (<I>Phaseolus vulgaris</I> L.) Extract and its Flavonoid Fraction in Both in vitro and in vivo Models of Lymphoma. Revista de Investigaci�N Cl�Nica, 70(1), 32-39. https://doi.org/10.24875/ric.17002395"
  },
  {
    id: 18,
    number: 18,
    text: "Jaseda, I. A. (s. f.). Jaseda. https://jaseda.com/nuestra-oferta/welltives"
  },
  {
    id: 19,
    number: 19,
    text: "Melchor, D. (2025, 4 junio). Jaseda, la empresa que busca en el frijol la forma de combatir el cáncer. TecScience. https://tecscience.tec.mx/es/negocios-innovacion/suplemento-frijol-negro/"
  },
  {
    id: 20,
    number: 20,
    text: "Jelly Bean Universe - NASA. (s. f.). NASA. https://www.nasa.gov/stem-content/jelly-bean-universe/"
  },
  {
    id: 21,
    number: 21,
    text: "Caballero-García, M. A., Santoyo-Cortés, V. H., Ramírez-Galindo, J., & Rebollar-Ávila, C. (2025). Effects of the guaranteed price on the average rural price of beans in Mexico. Revista Mexicana de Ciencias Agrícolas, 16(2), e3645. https://doi.org/10.29312/remexca.v16i2.3645"
  },
  {
    id: 22,
    number: 22,
    text: "Article. (2024, 12 noviembre). Mexico Business. https://mexicobusiness.news/agribusiness/news/mexico-boosts-bean-production-food-security"
  },
  {
    id: 23,
    number: 23,
    text: "BBC. “Methods of Market Research – Secondary Research - Market Research - Edexcel - GCSE Business Revision - Edexcel.” BBC Bitesize, 2025, www.bbc.co.uk/bitesize/guides/z6y9rj6/revision/4. "
  },
  {
    id: 24,
    number: 24,
    text: "A global food crisis | World Food Programme. (2025). <i>UN World Food Programme (WFP)</i>. https://www.wfp.org/global-hunger-crisis"
  }
];

const IntegratedReferences: Reference[] = [
  {
    id: 1,
    number: 1,
    text: "National Careers Service. The STAR Method. <i>Nationalcareers.service.gov.uk</i>, GOV.UK, 2024, nationalcareers.service.gov.uk/careers-advice/interview-advice/the-star-method. "
  },
  {
    id: 2,
    number: 2,
    text: "Berné, M. (2023, July 24). <i>Affinity Mapping: una técnica ágil para la organización de ideas</i>. Blog. https://www.scrummanager.com/blog/2023/07/affinity-mapping-una-tecnica-agil-para-la-organizacion-de-ideas/"
  },
  {
    id: 3,
    number: 3,
    text: "Halfmann, B. (2022, October 11). <i>What is Value Sensitive Design? And what are the benefits?</i> Muteo. https://muteo.co/what-is-value-sensitive-design"
  },
  {
    id: 4,
    number: 4,
    text: "<i>Chihuahua será sede del Foro Global Agroalimentario 2025</i> | Portal Gubernamental del Estado de Chihuahua. (s. f.). https://chihuahua.gob.mx/prensa/chihuahua-sera-sede-del-foro-global-agroalimentario-2025"
  },
  {
    id: 5,
    number: 5,
    text: "<i>Ecosistema - unidades validadas Chihuahua</i>. (s. f.). https://creatorapp.zohopublic.com/inndech/ecosistema/page-perma/Unidades_Validadas_Chihuahua/YbU1ESXWbNpfXkvea9yZuODkUBY9ewh6ZFtujjFk1Pd27sdJOdsdwMwuMThfPWejDmJuHgmu5bhQQrMFjzFDXWUGERzkN57pfBNp"
  },
];

const MainReferences: Reference[] = [
  {
    id: 1,
    number: 1,
    text: "This represents a comprehensive compilation of references used throughout our Human Practices journey."
  }
];




function OverviewSection({
  scrollTo,
  sections,
  currentSectionIndex,
  handleSectionNavigation,
  handleBackToOverview,
  setActiveSection
}: {
  scrollTo?: string;
  sections: Section[];
  currentSectionIndex: number;
  handleSectionNavigation: (index: number) => void;
  handleBackToOverview: () => void;
  setActiveSection: (section: any) => void;
}) {

  const [selectedWord, setSelectedWord] = useState<string | null>(null);



  return (
    <div className="min-h-screen">
      <div className="px-4 py-8">

        <div className="lg:flex lg:justify-center lg:gap-8 xl:gap-12 2xl:gap-16 
          max-w-[1600px] xl:max-w-[1800px] 2xl:max-w-[2200px] mx-auto">

          {/* Left Sidebar - TOC */}
          <aside className="hidden lg:block lg:w-[260px] xl:w-[280px] 2xl:w-[300px] 
            sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto z-40 flex-shrink-0">
            <TableOfContents />
          </aside>

          <div className="w-full lg:max-w-[900px] xl:max-w-[1100px] 2xl:max-w-[1300px] min-w-0
        mx-auto lg:pr-16 xl:pr-24 2xl:pr-32">



            <main className="prose prose-lg leading-[3rem] 
                  prose-p:mb-4 prose-p:md:mb-6 prose-p:lg:mb-8
                  prose-p:last:mb-0
                  prose-base sm:prose-lg lg:prose-xl 2xl:prose-2xl
                  prose-p:text-justify
                  max-w-none
                  px-0">

              {/* Lead Description Section */}
              <div id="content-section" className="lead-description-class"></div>
              <LeadDescription
                title=""
                description='We are working to understand the broader impact of our synthetic biology project through stakeholder engagement and ethical considerations.'
                author="PHASEOS, team Tec-Chihuahua 2025"
              />

              {/* Add section divider after lead */}
              <div className="section-divider my-8" />
              {/* Section 1 Overview */}

              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12">
                <div>
                  <h2 id="overview-overview" className="scroll-mt-32">
                    Overview
                  </h2>
                  <hr />
                </div>
                <article className="space-y-4! md:space-y-6! lg:space-y-8!">
                  <img
                    src="https://static.igem.wiki/teams/5718/human-practices/overview/why-who-what-bean-section-1.webp"
                    alt="Why, Who, What Bean"
                    className="w-md rounded-lg float-right pt-8 px-16"
                  />
                  <p>
                    In order to fully grasp the depth of our fieldwork, it’s essential to start by understanding<i> who we are</i> and <i> why we do what we do</i>. This section introduces the heart of Phasea, our team, our purpose, and the human-centered approach that shaped every decision.
                  </p>
                  <p>
                    From our name and working culture to our values and internal reflections, we explore the foundations that guided our Human Practices journey. Through tools like personality mapping, empathy analysis, and the Golden Circle, we uncover how our collective vision aligns with a real world necessity.
                  </p>
                </article>
              </section>

              {/* Section 2 Overview */}

              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12">
                <div>
                  <h2 id="who-we-are" className="scroll-mt-32">
                    Who we are
                  </h2>
                  <hr />
                </div>
                <article className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                  <p>
                    We are <b>PHASEOS</b>, a team committed to the transformation of agriculture through <b>open science</b>, <b> sustainable engineering</b>, and <b>empathy</b>. Our name was not chosen at random; it carries both a strategic and symbolic meaning. It is inspired by the plant <i>Phaseolus vulgaris</i>, often referred to as the common bean, a crop that holds cultural, nutritional, and economic value in a vast amount of communities, especially in Mexico. Our acronym, PHASEOS, encapsulates what we stand for:
                  </p>

                  <img
                    src="https://static.igem.wiki/teams/5718/human-practices/overview/phaseos-loop.webp"
                    alt="PHASEOS loop"
                    className="max-w-full h-auto rounded"
                  />
                  <p>
                    For us, this name represents something more than just what is said; it represents our way of establishing roots for future generations and contributing to the world.
                  </p>
                  <p>
                    Our product Phasea is merely <b>the first phase</b>, a first step in a larger mission to create solutions that are not only scientifically impressive, but also hold a <b>socially responsible and meaningful impact</b>.
                  </p>
                </article>
              </section>

              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12">
                <div>
                  <h2 id="growing-impact" className="scroll-mt-32">
                    Growing Impact: Linking Our Work to the SDGs
                  </h2>
                  <hr />
                </div>
                <article className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                  <p>
                    Once our project's meaning was established, it was time to grasp the impact it can have on the world. Phasea was born from a simple truth farmers reminded us of in the bean fields. As <Link className="text-[#649026] underline" to="/human-practices?section=integrated&scroll=seeds-to-milestones-interview-timeline">Carlos Domínguez</Link> said to us: <b>"If the countryside doesn't produce, the city doesn't eat."</b>
                  </p>
                  <p>
                    <b>Guided by Human Practices, we listened, learned, and designed with farmers, ensuring our solution meets real necessities</b>. Anchored in the Sustainable Development Goals, <b>we aligned that local vision with a global mission.</b>
                  </p>
                  <p>
                    Our path aligns directly with SDG 2 – Zero Hunger, by helping <b>secure food production and farmer livelihoods</b>. Along the way, we also advance SDG 12 – Responsible Consumption & Production, by <b>reducing chemical dependency</b>, and SDG 15 – Life on Land, by <b>protecting the health of agricultural soils</b>.
                  </p>

                  <div className="flex justify-center">
                    <img
                      src="https://static.igem.wiki/teams/5718/human-practices/overview/ods-image-section-3.webp"
                      alt="ODS Image"
                      className="w-lg rounded-lg pt-8"
                    />
                  </div>
                  <div className="flex justify-center mt-4">
                    <span className="text-caption">
                      <b>Figure 1. </b>SDG 2, 12 and 15.
                    </span>
                  </div>

                  <p>
                    Human Practices ensure our work responds to <i>communities’ real needs</i>, while the SDGs provide a <i>global framework</i> to measure and communicate our impact. By integrating both, Phasea is not just a lab innovation, it’s a step toward <b>sustainable, equitable, and resilient agriculture</b>.
                  </p>
                  <div className="flex justify-center px-4 sm:px-12 md:px-4 lg:px-2 xl:px-2">
                    <Link to="/sustainability" className="bg-[#649026] hover:bg-[#8CC938] text-[#FFFFEE] text-[20px] font-bold py-2 px-6 rounded-full flex items-center justify-center gap-2 w-full md:w-1/2 text-center transition-all duration-200 ease-in-out hover:scale-105">
                      <PiCursorClickDuotone className="w-24 h-auto" />
                      Please visit the Sustainability section for a broader look
                    </Link>
                  </div>
                </article>
              </section>

              {/* Section Designed with Purpose */}

              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12">
                <div>
                  <h2 id="designed-with-purpose" className="scroll-mt-32">
                    Designed with Purpose
                  </h2>
                  <hr />
                </div>
                <article className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                  <p>Through early conversations with stakeholders and initial literature review, <b>we identified the core concerns regarding the problem</b>; such as yield loss, chemical dependency, environmental damage and economic viability. After bringing these challenges to our attention, we then <b>reflected as a team</b>, exchanging insights to better understand what the information gathered <b>truly meant</b>. Finally linking them to the SDGs, and by integrating this global framework to our project, we shaped the <b>vision, mission and values</b> that guided Phasea’s development at every stage.
                  </p>
                  <p>
                    By defining these concepts within the previous context, we express our commitment to <b>building sustainable and collaborative agriculture</b>, where innovation works hand in hand with farming communities to protect and promote the cultural identity of the common bean. Through the development of biotechnological solutions that strengthen resilience in bean cultivation and securing reliable harvests, Phasea seeks to <b>bridge the gap between science and society, ensuring long-term impact for both people and the planet</b>.
                  </p>

                  <img
                    src="https://static.igem.wiki/teams/5718/human-practices/silver/vmv-phasea.webp"
                    alt="Vision Mision Values Image"
                    className="w-full rounded-lg"
                  />
                  <div className="flex justify-center mt-4">
                    <span className="text-caption">
                      <b>Figure 2. </b>Designed with purpose, our Vision, Mission and Values.
                    </span>
                  </div>
                  <p>
                    This analysis helped us highlight Phasea’s objective, not only to provide an innovative solution against anthracnose, but to also contribute to a future where agriculture is resilient, communities are empowered, and the <b>common bean remains a symbol of cultural identity and food security for generations to come</b>.
                  </p>
                </article>
              </section>


              {/* Section 4 Beyond the Harvest */}

              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12">
                <div>
                  <h2 id="beyond-the-harvest" className="scroll-mt-32">
                    Beyond the Harvest: Our Massive Transformational Purpose
                  </h2>
                  <hr />
                </div>
                <article className="space-y-4! md:space-y-6! lg:space-y-8!">
                  <p>
                    Building on this journey, Phasea’s <b>Massive Transformational Purpose </b>(MTP) comes into focus. This tool is a bold and clear statement that defines an organization's ultimate mission, serving as a <b>North Star </b>for guiding actions and driving focus <Link to="/human-practices?section=overview&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[1]</Link>. For us, it was essential to identify our MTP, which is:
                  </p>
                  <h4 className=" text-h4bold text-center text-[#649026]">
                    Empowering bean farmers to thrive off sustainability and resilience.
                  </h4>
                  <p>
                    This purpose goes beyond commercial goals or academic recognition. It represents our <b>reason for existing</b>, a call to transform the agricultural landscape by working hand-in-hand alongside those who face it on a daily basis. We believe that <b>real change only happens when people are at the center of innovation</b>. And that’s exactly what Human Practices means to us: listening with intention, designing with empathy, and aligning science with realities.
                  </p>
                </article>
              </section>

              {/* Section 5 Overview */}
              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12">
                <div className="mb-8">
                  <h2 id="why-hp-matter" className="scroll-mt-32">Why Human Practices Matter: The Golden Circle</h2>
                  <hr />
                </div>
                <article className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                  <p>
                    To guide our Human Practices journey, we adapted Simon Sinek’s <b>Golden Circle</b> framework <Link to="/human-practices?section=overview&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[2]</Link>.
                    This approach helped us ground our work in three essential questions:
                  </p>

                  <GoldenCircle
                    what="#F9CF5F"
                    whatinfo={`Phasea is a co-designed <b>biofungicide shaped by stakeholder feedback</b>, adopting <b>aspersion application, preventive treatment and visual manuals</b>. Rooted in community values, it aims to combat anthracnose while protecting the common bean as a global nutritional and cultural staple.<b> It’s not just science; it’s collaboration in action. </b>`}
                    bwhat="Phasea is a co-designed <b>biofungicide shaped by stakeholder feedback</b>, adopting <b>aspersion application, preventive treatment and visual manuals</b>. Rooted in community values, it aims to combat anthracnose while protecting the common bean as a global nutritional and cultural staple.<b> It’s not just science; it’s collaboration in action. </b>"
                    how="#FCE4A3"
                    howinfo={'Through an iterative process of <b>active listening, reflection and adaptation</b>, we engaged with key actors and used participatory tools such as empathy maps, visual mapping and discussion tables, to analyze information and uncover its true meaning, allowing us to <b>identify key insights and integrate them</b> into our project decisions.'}
                    bhow="Through an iterative process of <b>active listening, reflection and adaptation</b>, we engaged with key actors and used participatory tools such as empathy maps, visual mapping and discussion tables, to analyze information and uncover its true meaning, allowing us to <b>identify key insights and integrate them</b> into our project decisions."
                    why='#F4EFD6'
                    whyinfo={'By listening to those affected and aligning with their true needs,<b> we ensure that our work responds meaningfully to the complexity of the world around us</b>. Accessibility and compatibility matter as much as scientific performance, therefore, combating anthracnose is <b>not just a technical challenge, it’s also a social and ethical one</b>.'}
                    bwhy="By listening to those affected and aligning with their true needs,<b> we ensure that our work responds meaningfully to the complexity of the world around us</b>. Accessibility and compatibility matter as much as scientific performance, therefore, combating anthracnose is <b>not just a technical challenge, it’s also a social and ethical one</b>."
                    logo={true}
                  />

                </article>
              </section>

              {/* Section 6 Overview */}
              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12">
                <div className="mb-8">
                  <h2 id="human-side-phasea" className="scroll-mt-32">The Human Side of Phasea</h2>
                  <hr />
                </div>
                <article className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                  <p>
                    After defining the purpose that lies at the heart of our project and recognizing the essential role of Human Practices, it is time to introduce the people who bring Phasea to life. Born from empathy, guided by values, and driven by science, our team embodies the very principles that shaped this project.
                  </p>
                  <p>
                    We proudly represent <b>Tecnológico de Monterrey, Campus Chihuahua</b>, celebrating <b>10 years of iGEM participation</b> since 2015. Each of the past generations has left a lasting legacy and set an inspiring example both locally and internationally. Therefore, our work is built upon the lessons learned and wisdom they shared. Guided by a team of advisors and instructors, most of them former team members, we received invaluable feedback, driving us to constantly improve.
                  </p>
                  <div className="flex justify-center">
                    <img
                      src="https://static.igem.wiki/teams/5718/human-practices/overview/igem-tec-chihuahua-timeline.webp"
                      alt="iGEM Tec-Chihuahua"
                      className="w-full rounded-lg pt-8"
                    />
                  </div>
                  <div className="flex justify-center mt-4">
                    <span className="text-caption">
                      <b>Figure 3. </b>Timeline of Tec-Chihuahua's teams
                    </span>
                  </div>
                  <p>
                    Now it is our turn. What began in 2015 has now grown into a decade of participation, with each team contributing to the legacy we proudly continue today. We, too, aspire to leave our own mark, inspiring future generations not only within our institution, but across the world to innovate and embrace the journey of working towards a shared goal, positively contributing to a brighter future.
                  </p>
                  <p>
                    In the mark of the <b>10th year anniversary since our campus’s first participation in the iGEM competition </b>,  we surveyed former team members with Human Practices experience to identify the <b>most relevant methodologies</b> for effectively integrating HP into a project. Based on their insights, we created a simple guide to serve as a starting point for future teams, including essential advice and lessons learned from previous years. This contribution not only preserves a decade of collective knowledge, but also highlights best practices, strengthens collaboration and provides a practical toolbox that will help future teams design projects that are more reflective, responsible, and impactful from the very beginning.
                  </p>
                  <div className="flex justify-center px-4 sm:px-12 md:px-4 lg:px-2 xl:px-2">
                    <Link to="/contribution" className="bg-[#649026] hover:bg-[#8CC938] text-[#FFFFEE] text-[20px] font-bold py-2 px-6 rounded-full flex items-center justify-center gap-2 w-full md:w-1/2 text-center transition-all duration-200 ease-in-out hover:scale-105">
                      <PiCursorClickDuotone className="w-24 h-auto" />
                      Click here to find our Human Practices Contribution
                    </Link>
                  </div>
                </article>
              </section>

              {/* Section 7 Overview */}
              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12">
                <div className="mb-8">
                  <h2 id="self-knowledge-team-synergy" className="scroll-mt-32">From Self-Knowledge to Team Synergy</h2>
                  <hr />
                </div>
                <article className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                  <p>
                    Before setting out to understand others, we started by understanding ourselves through internal Human Practices. As a multidisciplinary team, we knew that collaboration would be the key to success, however, collaboration requires empathy, communication, and awareness of our strengths. This is why we decided to use the 16 Personalities Test to evaluate our soft skills, identify the best work strategy, and find ways to enhance our internal communication and team dynamics. This helped us to:
                  </p>
                  <ul className="flex gap-8 flex-col space-y-6 md:space-y-8 lg:space-y-10 text-h5 indent-8 custom-ul">
                    <li>Discover the unique potential each member brings to the team.</li>
                    <li>Improve task delegation and team organization.</li>
                    <li>Strengthen collaboration by understanding our different work styles. </li>
                  </ul>
                  <p>
                    This internal work laid the foundation for a positive team culture centered on empathy, ethics, and awareness, which not only enhanced our internal dynamics but also shaped the way we engaged with stakeholders and made decisions throughout the project.
                  </p>
                  <p>

                  </p>
                </article>
                <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 items-center justify-center px-4 sm:px-12 md:px-4 lg:px-2 xl:px-2">

                  <p>
                    Here are the people behind PHASEOS:
                  </p>

                  {/* Skills Photos Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8">
                    <img
                      src="https://static.igem.wiki/teams/5718/human-practices/overview/skills-profile-amada-2.webp"
                      alt="Member 1 Skills"
                      className="max-w-full h-auto rounded-lg"
                    />
                    <img
                      src="https://static.igem.wiki/teams/5718/human-practices/overview/skills-profile-dani-2.webp"
                      alt="Member 2 Skills"
                      className="max-w-full h-auto rounded-lg"
                    />
                    <img
                      src="https://static.igem.wiki/teams/5718/human-practices/overview/skills-profile-esteban-2.webp"
                      alt="Member 3 Skills"
                      className="max-w-full h-auto rounded-lg"
                    />
                    <img
                      src="https://static.igem.wiki/teams/5718/human-practices/overview/skills-profile-paco-2.webp"
                      alt="Member 8 Skills"
                      className="max-w-full h-auto rounded-lg"
                    />
                    <img
                      src="https://static.igem.wiki/teams/5718/human-practices/overview/skills-profile-jesus-2.webp"
                      alt="Member 4 Skills"
                      className="max-w-full h-auto rounded-lg"
                    />
                    <img
                      src="https://static.igem.wiki/teams/5718/human-practices/overview/skills-profile-julia-2.webp"
                      alt="Member 5 Skills"
                      className="max-w-full h-auto rounded-lg"
                    />
                    <img
                      src="https://static.igem.wiki/teams/5718/human-practices/overview/skills-profile-macris-2.webp"
                      alt="Member 6 Skills"
                      className="max-w-full h-auto rounded-lg"
                    />
                    <img
                      src="https://static.igem.wiki/teams/5718/human-practices/overview/skills-profile-mariana-2.webp"
                      alt="Member 7 Skills"
                      className="max-w-full h-auto rounded-lg"
                    />
                    <img
                      src="https://static.igem.wiki/teams/5718/human-practices/overview/skills-profile-priss-2.webp"
                      alt="Member 9 Skills"
                      className="max-w-full h-auto rounded-lg"
                    />
                    { /*
                  <img
                    src="https://static.igem.wiki/teams/5718/human-practices/overview/skills-profile-triana-2.webp"
                    alt="Member 10 Skills"
                    className="max-w-full h-auto rounded-lg"
                  />
                  */ }
                    <img
                      src="https://static.igem.wiki/teams/5718/human-practices/overview/skills-profile-vale-2.webp"
                      alt="Member 11 Skills"
                      className="max-w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="flex justify-center mt-4">
                    <span className="text-caption">
                      <b>Figure 4. </b>Skillset PHASEOS Team 2025.
                    </span>
                  </div>

                  <article className="flex flex-col gap-4 md:gap-6 lg:gap-8">

                    <p>
                      Our team consists of <b>10 multidisciplinary students</b> from a wide range of fields such as biotechnology, chemistry, computer science, mechatronics, international business, and finance. To harness this diversity, we conducted a hard skills analysis that allowed us to clearly understand the unique strengths of each discipline and the areas where we can complement one another. This diversity not only fuels our creativity but also enhances our ability to develop solutions that are both technically solid and socially conscious.
                    </p>

                    <div className="flex justify-center px-4 sm:px-12 md:px-4 lg:px-2 xl:px-2">

                      <Link to="/entrepreneurship?section=skills-stakeholders&scroll=detailed-hard-skills-analysis-section" className="bg-[#649026] hover:bg-[#8CC938] text-[#FFFFEE] text-[20px] font-bold py-2 px-6 rounded-full flex items-center justify-center gap-2 w-full md:w-1/2 text-center transition-all duration-200 ease-in-out hover:scale-105">
                        <PiCursorClickDuotone className="w-24 h-auto" />
                        Click here to see our hard skills in the Entrepreneurship Page
                      </Link>
                    </div>

                    <p>
                      This analysis showed us the importance of having a balanced team that can bring to the table different perspectives, boosting creativity and enriching our project. For this reason, it was of utmost importance practicing internal human practices to maintain respect, empathy and trust within our team.
                    </p>

                  </article>
                </div>

              </section>

              {/* Section 8 Overview */}
              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12">
                <div className="mb-8">
                  <h2 id="internal-reflections-unconscious-biases-analysis" className="scroll-mt-32">Internal Reflections: Unconscious Biases Analysis</h2>
                  <hr />
                </div>
                <article className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                  <p>
                    To ensure that our work was not only scientifically rigorous but also socially responsible, we began by looking inward. As a multidisciplinary team, we recognized that <b>unconscious biases </b>(automatic associations influenced by culture, experience, and background) can shape how we perceive problems, design solutions, and interact with stakeholders.
                  </p>
                  <p>
                    To better understand these biases, each team member completed the <b>Harvard University Implicit Association Test (IAT)</b>, a tool designed to uncover hidden preferences and associations we may not consciously recognize [3]. Individual results were kept private, however, we created a safe space for <b>reflection</b> and <b>group discussion</b>, analyzing the general insights to <b>ensure that personal biases did not influence the project design</b>. To further safeguard against bias, we also consulted with individuals both inside and outside the project context, asking them to review our information and provide feedback, which was implemented as an insight that came from <TooltipAssemble Dectext={false} low={false} title="María del Socorro Reveles" paragraph='"Having external reviewers can help you detect blind spots and avoid tunnel vision within your team."' img='https://static.igem.wiki/teams/5718/interviews/maria-del-socorro-1.webp'>María del Socorro’s</TooltipAssemble> interview.
                  </p>
                  <p>
                    These discussions strengthened our awareness, helped reduce blind spots, and guided us toward creating Phasea in a more <b>fair and empathetic</b> way attentive to the needs of the communities affected. Recognizing our biases was the first step toward designing responsibly.
                  </p>
                </article>
              </section>

              {/* Section 8 Overview */}
              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12">
                <div className="mb-8">
                  <h2 id="working-as-one" className="scroll-mt-32">Working as One…</h2>
                  <hr />
                </div>
                <article className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                  <p>
                    Our working strategy reflects our commitment to <b>communication, transparency and empathy</b>. Throughout the development of our project we held a variety of weekly and daily meetings, each with specific objectives tailored to the team’s needs or the issues at hand, which helped structure and strengthen our internal collaboration.
                  </p>
                  <p>
                    The area leaders and several team members received <b>project management training</b> from the civil association <b>Startup Chihuahua</b>, where we learned about <b>agile methodologies</b>. These practices were crucial for monitoring daily progress, identifying challenges early, and ensuring that support was available whenever needed.
                  </p>
                  <p>
                    To further enhance organization and coordination, we used digital tools such as <b>Notion</b> and a <b>Gantt chart</b> <Link to="/human-practices?section=overview&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]"> [4]</Link>. These tools allowed us to maintain a clear, structured calendar with specific deadlines, getting early feedback from advisors and instructors, and adjust our work efficiently based on continuous reflection and iteration.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 p-12">
                    <div className="bg-[#FFFFEE] rounded-xl p-4 flex flex-col gap-4 md:gap-6 lg:gap-8 shadow-2xl">
                      <div className="aspect-[3/2] w-full">
                        <Carousel
                          images={carouselImages1}
                          autoPlayInterval={5000}
                          showArrows={true}
                          showDots={true}
                          height="100%"
                          width="100%"
                          className="rounded-xl [&_img]:h-full [&_img]:w-full [&_img]:object-cover"
                        />
                      </div>

                      <h4 className="text-h4bold text-center text-[#649026]">Leaders' Meetings (Tuesdays)</h4>
                      <p>
                        For area leads, PIs, and advisors. Weekly planning, progress review, cross-area coordination, and strategic decision-making to ensure all areas align toward project goals.
                      </p>
                    </div>

                    <div className="bg-[#FFFFEE] rounded-xl p-4 flex flex-col gap-4 md:gap-6 lg:gap-8 shadow-2xl">
                      <div className="aspect-[3/2] w-full">
                        <Carousel
                          images={carouselImages2}
                          autoPlayInterval={5000}
                          showArrows={true}
                          showDots={true}
                          height="100%"
                          width="100%"
                          className="rounded-xl [&_img]:h-full [&_img]:w-full [&_img]:object-cover"
                        />
                      </div>
                      <h4 className="text-h4bold text-center text-[#649026]">Team Meetings</h4>
                      <p>
                        Internal team meetings for members to organize and decide important matters such as summer work schedules and other team decisions. These also include daily stand-up check-ins (15-minute ceremonies) where members share what was done the previous day, what will be worked on today, and any blockers preventing progress.
                      </p>
                    </div>

                    <div className="bg-[#FFFFEE] rounded-xl p-4 flex flex-col gap-4 md:gap-6 lg:gap-8 shadow-2xl">
                      <div className="aspect-[3/2] w-full">
                        <Carousel
                          images={carouselImages3}
                          autoPlayInterval={5000}
                          showArrows={true}
                          showDots={true}
                          height="100%"
                          width="100%"
                          className="rounded-xl [&_img]:h-full [&_img]:w-full [&_img]:object-cover"
                        />
                      </div>
                      <h4 className="text-h4bold text-center text-[#649026]">Progress Meetings (Fridays)</h4>
                      <p>
                        Sessions with the primary PI, secondary PI, instructors, and advisors (any available). Started during the project proposal phase as pitch presentations for project ideation, these meetings now track progress by area and as a whole, identifying any issues along the way.
                      </p>
                    </div>

                    <div className="bg-[#FFFFEE] rounded-xl p-4 flex flex-col gap-4 md:gap-6 lg:gap-8 shadow-2xl">
                      <div className="aspect-[3/2] w-full">
                        <Carousel
                          images={carouselImages4}
                          autoPlayInterval={5000}
                          showArrows={true}
                          showDots={true}
                          height="100%"
                          width="100%"
                          className="rounded-xl [&_img]:h-full [&_img]:w-full [&_img]:object-cover"
                        />
                      </div>
                      <h4 className="text-h4bold text-center text-[#649026]">Area Meetings</h4>
                      <p>
                        Focused sessions involving advisors and members working on specific areas. These meetings address particular topics, provide feedback on work to be done or improved, and follow up on action items for progress meetings and future dates.
                      </p>
                    </div>

                  </div>



                  <p>
                    From the beginning, we established a clear <b>work schedule</b> for both vacation periods and school terms, which was challenging due to the team's diverse opinions. Nevertheless, through <b>open communication</b> during our meetings, where every member was encouraged to share and <b>respect each other’s viewpoints</b>, we were able to reach fair agreements.
                  </p>

                  <p>
                    By understanding who we are, we became better equipped to understand others. Our internal Human Practices helped us identify unconscious biases, strengthen collaboration, and lay the ethical foundation upon which Phasea was built. Up next, in the section Understanding the Field, we will explore how we went from building our team and finding our purpose to <b>listening, learning, and co-designing</b> with the people our solution is meant to serve.
                  </p>
                </article>
              </section>

              {/* References section */}
              <section>
                <div id="references-section">
                  <References
                    references={OverviewReferences}
                    title="References"
                    description=""
                    className="pt-12"
                  />
                </div>
              </section>

            </main>
          </div>

        </div>
      </div>

      {/* Section Navigation Footer */}
      <div className="w-full bg-transparent mt-16">
        <div className="mx-auto py-4 px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 xl:gap-16 2xl:gap-[20rem]">

            {/* Previous Section */}
            {currentSectionIndex > 0 ? (
              <button
                onClick={() => handleSectionNavigation(currentSectionIndex - 1)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:scale-105 transition-all duration-700 cursor-pointer bg-[#FFFFEE] shadow-2xl hover:bg-[#FFFFE1] border border-[#441D04] min-w-[200px] justify-center lg:justify-start"
              >
                <span className="text-h3bold">←</span>
                <div className="text-center lg:text-left">
                  <div className="text-h4bold lg:text-h3bold">Previous</div>
                  <div className="text-h4 lg:text-h3">{sections[currentSectionIndex - 1].title}</div>
                </div>
              </button>
            ) : <div className="hidden lg:block w-[200px]" />}

            {/* Progress & Back to Overview */}
            <div className="text-center px-4 py-2">
              <div className="text-h4bold lg:text-h3bold mb-2">
                {currentSectionIndex + 1} of {sections.length}
              </div>
              <button
                onClick={handleBackToOverview}
                className="text-[#649026] hover:text-[#6EA71E] text-h4bold lg:text-h3bold cursor-pointer"
              >
                ← Back to Sections
              </button>
            </div>

            {/* Next Section */}
            {currentSectionIndex < sections.length - 1 ? (
              <button
                onClick={() => handleSectionNavigation(currentSectionIndex + 1)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:scale-105 transition-all duration-700 cursor-pointer min-w-[200px] justify-center lg:justify-end"
                style={{ backgroundColor: sections[currentSectionIndex].color, color: '#FFFFEE' }}
              >
                <div className="text-center lg:text-right">
                  <div className="text-h4bold lg:text-h3bold">Next</div>
                  <div className="text-h4 lg:text-h3">{sections[currentSectionIndex + 1].title}</div>
                </div>
                <span className="text-h3bold">→</span>
              </button>
            ) : <div className="hidden lg:block w-[200px]" />}

          </div>
        </div>
      </div>

    </div>
  );
}

function SilverHPSection({
  scrollTo,
  sections,
  currentSectionIndex,
  handleSectionNavigation,
  handleBackToOverview,
  setActiveSection
}: {
  scrollTo?: string;
  sections: Section[];
  currentSectionIndex: number;
  handleSectionNavigation: (index: number) => void;
  handleBackToOverview: () => void;
  setActiveSection: (section: any) => void;
}) {

  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  return (
    <div className="min-h-screen">

      <div className="px-4 py-8">

        <div className="lg:flex lg:justify-center lg:gap-8 xl:gap-12 2xl:gap-16 
          max-w-[1600px] xl:max-w-[1800px] 2xl:max-w-[2200px] mx-auto">

          {/* Left Sidebar - TOC */}
          <aside className="hidden lg:block lg:w-[260px] xl:w-[280px] 2xl:w-[300px] 
            sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto z-40 flex-shrink-0">
            <TableOfContents />
          </aside>

          <div className="w-full lg:max-w-[900px] xl:max-w-[1100px] 2xl:max-w-[1300px] min-w-0
        mx-auto lg:pr-16 xl:pr-24 2xl:pr-32">


            <main className="prose prose-lg leading-[3rem] 
                  prose-p:mb-4 prose-p:md:mb-6 prose-p:lg:mb-8
                  prose-p:last:mb-0
                  prose-base sm:prose-lg lg:prose-xl 2xl:prose-2xl
                  prose-p:text-justify
                  max-w-none
                  px-0">

              <div id="content-section" className="lead-description-class"></div>
              {/* Lead Description Section */}
              <LeadDescription
                title=""
                description="Our solution takes root and grows stronger when grounded in the perspectives of those it serves."
                author="PHASEOS, team Tec-Chihuahua 2025"
              />

              {/* Add section divider after lead */}
              <div className="section-divider my-8" />

              {/* Section 1 Overview */}
              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12">
                <div className="mb-8">
                  <h2 id="overview-silverhp" className="scroll-mt-32">Overview</h2>
                  <hr />
                </div>
                <article className="space-y-4! md:space-y-6! lg:space-y-8!">

                  <img
                    src="https://static.igem.wiki/teams/5718/human-practices/silver/bean-with-glasses-2-section-1.webp"
                    alt="Bean with glasses"
                    className="w-lg rounded-lg float-right pt-8 px-16"
                  />

                  <p>
                    After deeply connecting as a team and building Phasea with empathy from the inside out, the next step was to look outward. What is truly at stake? How can we ensure that our work is not only feasible, but also responsible, necessary, and transformative for those who need it most?
                  </p>
                  <p>
                    This section tells the story of how we came to understand the problem in its full dimension and how that understanding shaped our decisions. We immersed ourselves in the social, environmental, and economic context surrounding common beans and the people who grow them. To achieve this, we applied analytical tools and participatory methods that helped us listen, learn, and adapt. By doing so, we recognized that anthracnose is not only a biological hazard capable of wiping out up to 100% of a harvest <Link to="/human-practices?section=overview&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[1]</Link>; it is also a direct threat to food security, culture, and livelihoods. This broader perspective guided us toward designing a solution rooted in empathy, sustainability, and responsibility.
                  </p>

                </article>
              </section>

              {/* Section 2 */}
              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12">
                <div className="mb-8">
                  <h2 id="more-than-a-crop" className="scroll-mt-32">More Than a Crop: Beans in Science, Art, and Identity</h2>
                  <hr />
                </div>
                <article className="space-y-4! md:space-y-6! lg:space-y-8!">

                  <p>
                    Before beginning our Human Practices journey, we knew that as a team we first needed to understand the importance of beans from different perspectives.
                  </p>

                  <p>
                    As we all know, common beans are more than food, they are symbols that embody history, identity, and creativity. In Mexico and across Latin America, they have been part of daily life for centuries, connecting people to their roots and traditions. Beyond their nutritional value, common beans stand as representations of community, resilience, and innovation. They are also the focus of extensive scientific research exploring their nutritional and health benefits, with evidence suggesting their potential to prevent and treat chronic diseases and metabolic conditions<Link to="/human-practices?section=overview&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[2]</Link>. This staple crop unites people who consume it to the past and communities to traditions, creating a strong sense of unity. For this reason, we now explore the bean and its importance across various dimensions.

                  </p>

                  <CollapseSection
                    title="History of the Common Bean"
                    backgroundColor="#649026"
                    startExpanded={false}
                  >
                    <div id="history-common-bean" className="p-4 md:p-6 lg:p-8 rounded flex flex-col gap-4 md:gap-6 lg:gap-8">
                      <p>
                        Beginning the journey from the roots, when Europeans arrived in the Americas during the 15th and 16th centuries, they encountered <b>native foods</b> that constituted local diets such as maize, potatoes, tomatoes, and, among them, new specimens of beans <Link to="/human-practices?section=overview&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[3]</Link>. Taken back across the Atlantic, beans quickly became valued in Europe for their nutritional richness and ease of storage. Over time, these legumes <b>played a crucial role in fighting malnutrition,</b> sustaining populations during difficult periods such as the Great Depression and World War II, when they were included in U.S. servicemen’s rations worldwide. After their population, beans were often labeled as “poor man’s food,” but they truly deserve recognition as <b>“everyone’s food”</b> having <b>nourished civilizations across centuries and continents.</b> From the Aztec and Inca peoples to households around the globe today, beans remain a <b>timeless source of sustenance and resilience</b> <Link to="/human-practices?section=overview&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[3]</Link>.
                      </p>
                    </div>

                  </CollapseSection>

                  <CollapseSection
                    title="Bean Art Work"
                    backgroundColor="#649026"
                    startExpanded={false}
                  >
                    <div id="art-and-symbolism" className="p-4 md:p-6 lg:p-8 rounded flex flex-col gap-4 md:gap-6 lg:gap-8">
                      <p>
                        This crop has served as an inspiration for various works of art due to both its material form and <b>cultural significance</b>. In schools like the Lone Oak Elementary School in New Mexico, where bean artwork projects inspired by sand paintings from the Southwest region, allow children to <b>experiment with texture, color, and pattern,</b> using a wide variety of beans, literally creating with seeds of life <Link to="/human-practices?section=silver&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[4]</Link>.
                      </p>
                      <img
                        src="https://static.igem.wiki/teams/5718/human-practices/silver/art-and-symbolism-bean.webp"
                        alt="Bean art and symbolism"
                        className=" rounded-lg pt-8 px-16" />

                      <div className="flex justify-center mt-4">
                        <span className="text-caption">
                          <b>Figure 1. </b>Bean mosaics by students from Lone Oak Elementary School (New Mexico), inspired by Indigenous and Southwestern designs such as the Pueblo Buffalo, basket weaving patterns, and the Pueblo Sun Symbol. <Link to="/human-practices?section=silver&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[4]</Link>
                        </span>
                      </div>

                      <p>
                        In New Orleans, the <i><b>Krewe of Red Beans</b></i> organizes the annual Red Beans Parade during <i>Lundi Gras</i> Monday, where participants decorate costumes and vehicles with beans to honor Louisiana's most popular culinary tradition; <b>Red Beans and Rice</b> <Link to="/human-practices?section=silver&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[5]</Link>. <b> Beanlandia</b> , a cultural and community center with its own <b> bean museum</b>  run by the krewe, showcases the best "bean suits" from each parade while also narrating its origins. Beyond sharing these traditions with visitors, the space fosters a strong sense of community built on values such as <b> solidarity</b>, volunteer work, and partnerships with other organizations. In doing so, they give their bean-themed traditions a higher purpose that extends well beyond celebration, <b>addressing social and environmental issues</b><Link to="/human-practices?section=silver&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[6]</Link> <Link to="/human-practices?section=silver&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[7]</Link>. As Sara Roahen, author of <i>Gumbo Tales: Finding My Place at the New Orleans Table</i>, says:
                      </p>
                      <p className="text-[#649026]">
                        "Food unites with complete sincerity. It harbors no ulterior motives; its power is irreversible. Red beans and rice is my best example." <Link to="/human-practices?section=silver&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[5]</Link>.
                      </p>


                      <img
                        src="https://static.igem.wiki/teams/5718/human-practices/silver/bean-photos-by-sophia-germer.webp"
                        alt="Photos by Sophia Germer"
                        className=" rounded-lg pt-8 px-16" />

                      <div className="flex justify-center mt-4">
                        <span className="text-caption">
                          <b>Figure 2. </b>. Participants of the Red Beans Parade in New Orleans celebrating creativity through bean-decorated outfits and art. Photos by Sophia Germer, Feb. 20, 2023. <Link to="/human-practices?section=silver&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[8]</Link> <Link to="/human-practices?section=silver&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[9]</Link>
                        </span>
                      </div>

                      <p>
                        Another example of this connection between beans, art, and creativity is Stimulus Interactiva at Powerhouse Arts (PHA) in New York City by dutch artist Jasper Udnik ten Cate on October 7th, 2024. An immersive culinary art experience by Creative Chef Studio that uses beans as a metaphor for imagination and connectivity, bringing together <b>food, history, and artistic performance</b> to reframe how we relate to everyday ingredients. According to the artist, <b>“Connection with nature and the environment brings to light stories that need to be told. Stories that address serious topics, but also hopeful and positive messages to educate and stimulate wonder and amazement”.</b> The <b>guided gastronomic experience</b> and sculptural installation of a <b>hundred ceramic beans</b> remained at the heart of the event, complementing each other in such a way that makes it so <b>unique and unprecedented.</b> <Link to="/human-practices?section=silver&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[10]</Link> <Link to="/human-practices?section=silver&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[11]</Link> <Link to="/human-practices?section=silver&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[12]</Link>
                      </p>

                      <img
                        src="https://static.igem.wiki/teams/5718/human-practices/silver/bean-artwork-photos.webp"
                        alt="Bean artwork photos"
                        className="rounded-lg pt-8 px-16" />

                      <div className="flex justify-center mt-4">
                        <span className="text-caption">
                          <b>Figure 3. </b> Images from Stimulus Interactiva at Powerhouse Arts New York, 2024. An immersive culinary art experience by Jasper Udink ten Cate that used beans as a metaphor for imagination and connection. <Link to="/human-practices?section=silver&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[10]</Link> <Link to="/human-practices?section=silver&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[11]</Link> <Link to="/human-practices?section=silver&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[12]</Link>
                        </span>
                      </div>

                      <div className="w-7/8 mx-auto">

                        <span className="text-h5bold">"The bean is a unique plant originating from the American continent. Unlike other plants, [beans] enhance the fertility of the environment in which they are planted. Beans therefore serve as a metaphor for the fertility artists and creatives can provide for their environment around them. Theirs are stories that travel the world and take shape and reflect identity. It is these very stories that define who we are as individuals and as a community". </span>

                        <span className="text-h5bold block mt-4 pt-4 text-right">– Jasper Udink ten Cate. <Link to="/human-practices?section=silver&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[12]</Link></span>
                      </div>

                    </div>

                  </CollapseSection>


                  <CollapseSection
                    title="Beans in Science"
                    backgroundColor="#649026"
                    startExpanded={false}
                  >

                    <div id="beans-in-science" className="p-4 md:p-6 lg:p-8 rounded flex flex-col gap-4 md:gap-6 lg:gap-8">

                      <p>
                        Following this journey, modern science continues to uncover the <b>exceptional properties</b> of beans, positioning them as <b>functional foods and nutraceuticals</b> (any food product that provides medical or health benefits, including the prevention and treatment of diseases) <Link to="/human-practices?section=silver&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[13]</Link>. Research has shown that extracts from black beans, rich in flavonoids, saponins, and anthocyanins, can modulate lipid metabolism<Link to="/human-practices?section=silver&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[14]</Link>,  and exert protective effects against metabolic disorders such as type 2 diabetes <Link to="/human-practices?section=silver&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[15]</Link>, cardiac fibrosis <Link to="/human-practices?section=silver&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[16]</Link>, and even reduce tumor growth <Link to="/human-practices?section=silver&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[17]</Link>. Companies like <b>JASEDA</b>, a Mexican enterprise, have translated these findings into innovative products such as <i>Wellbean</i>, a nutritional supplement which harnesses bean extracts, vitamins C, D and Zinc, which provide natural antioxidants and anti-inflammatory components to promote health and prevent chronic diseases like cancer <Link to="/human-practices?section=silver&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[18]</Link> <Link to="/human-practices?section=silver&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[19]</Link>. These advances illustrate how beans can move seamlessly from the field to the laboratory, expanding their role from a staple crop into a source of therapeutic potential.
                      </p>

                    </div>

                  </CollapseSection>

                  <h3 className="text-h3bold text-[#649026]">A Universal Symbol</h3>

                  <div className="float-right w-sm">
                    <img
                      src="https://static.igem.wiki/teams/5718/human-practices/silver/bean-references-imgs.webp"
                      alt="Jelly Bean, Mr. Bean and The Cloud Gate"
                      className="w-full rounded-lg"
                    />

                    <span className="text-caption block text-left mt-2 px-6">
                      <b>Figure 4. </b>The Jelly Bean universe by NASA, Mr. Bean and The Cloud Gate at Chicago <Link to="/human-practices?section=silver&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[20]</Link>
                    </span>
                  </div>


                  <p>
                    Common beans <b>embody history, nourish the present, and inspire the future</b>. They appear in art, science, and even astronomy, as in the <i>Jelly Bean Universe</i>, a metaphor illustrating the composition of visible and dark matter. From the humor of <i>Mr. Bean</i> to the shape of <i>Chicago’s Cloud Gate sculpture</i>, affectionately called “The Bean,” their symbolism transcends borders and generations <Link to="/human-practices?section=silver&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[20]</Link>. Erikan Baluku, a researcher from Uganda, stressed the <TooltipAssemble Dectext={false} low={false} title="Erikan Baluku" paragraph='"In Uganda, 80% of households depend on beans as their main source of protein. And in schools, 100% of students eat beans daily from primary to secondary."' img='https://static.igem.wiki/teams/5718/interviews/maria-del-socorro-1.webp'>bean's importance</TooltipAssemble> not only in America and Europe but across the world to Africa where they are, too, a staple crop.
                    From culture to science, beans represent connection, resilience, and balance, qualities that inspire not only communities but also innovation itself. Protecting them means safeguarding both heritage and sustainability. This is where our journey begins with Understanding the Field, our first step toward addressing one of the greatest threats faced by bean farmers.
                  </p>

                </article>
              </section>

              {/* Section 3 */}
              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12">
                <div className="mb-8">
                  <h2 id="the-challenge" className="scroll-mt-32">The Challenge: Anthracnose</h2>
                  <hr />
                </div>
                <article className="space-y-4! md:space-y-6! lg:space-y-8!">
                  <p>
                    After exploring how common beans have inspired culture, art, and science, it becomes clear that their value goes far beyond the field. However, even a crop so deeply rooted in history and resilience now faces threats that endanger its continuity. One of the most serious is <b>anthracnose</b>, a disease caused by the fungus <i>Colletotrichum lindemuthianum</i>, considered one of the most destructive for the common bean <i>(Phaseolus vulgaris)</i> in Mexico and worldwide. This pathogen significantly reduces yield and grain quality, causing blemishes, smaller seeds, and rot, which directly impact its market value, food security, and farmers’ income. As researcher,  <TooltipAssemble Dectext={false} low={false} title="Erikan Baluku" paragraph='"I have seen it in Africa... it can affect up to 40% of bean pods, especially during rainy seasons."' img='https://static.igem.wiki/teams/5718/interviews/maria-del-socorro-1.webp'>Erikan Baluku</TooltipAssemble>, from Uganda said to us, traditional control through chemical fungicides, although effective, has environmental and economic consequences. Excessive use degrades soil biodiversity, alters microbial balance, and creates dependence on non-sustainable inputs. Therefore, developing synthetic biology and ecological alternatives is essential to protect productivity without compromising the environment.

                  </p>

                  <p>
                    Beans are a cornerstone of Mexico’s agricultural system, they occupy <b>7.9% of the country’s agricultural</b> area and represent 2.4% of the total production value, equivalent to <b>13,969 million pesos in 2023</b> <Link to="/human-practices?section=silver&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[21]</Link> Even so, national production, 723,642 tons does not meet domestic demand, making it necessary to <b>import 313,000 tons valued at 369 million USD</b> <Link to="/human-practices?section=silver&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[22]</Link>.
                  </p>

                  <div className="py-24">
                    <div className="bg-[#649026] rounded-lg p-6">
                      <img
                        src="https://static.igem.wiki/teams/5718/human-practices/silver/bean-hands-together.webp"
                        className="flex float-left w-sm pb-2"
                      />
                      <p className="text-[#FFFFEE] text-h4bold">
                        Why is it crucial to solve this problem for the community?
                      </p>
                      <p className="text-[#FFFFEE]">
                        Beans are a cornerstone of Mexico’s culture, nutrition, and economy. Effectively addressing anthracnose is essential to ensure stable yields, protect farmers’ income, and preserve this vital food source. Moreover, reducing reliance on chemical fungicides helps protect soil health and biodiversity, promoting a more sustainable and resilient agricultural system that benefits both producers and consumers. Addressing anthracnose is therefore not only about protecting a crop, but about safeguarding cultural heritage, ensuring food security, and advancing toward a more sustainable agricultural future for the communities that depend on it.
                      </p>
                    </div>
                  </div>

                </article>
              </section>

              {/* Section 4 */}
              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12">
                <div className="mb-8">
                  <h2 id="what-we-thought-we-knew" className="scroll-mt-32">What We Thought We Knew: Our Initial Hypotheses</h2>
                  <hr />
                </div>
                <article className="space-y-4! md:space-y-6! lg:space-y-8!">
                  <p>
                    Confronting anthracnose made us realize that this challenge was not only scientific,it was deeply human. Behind each infected field are the lives, traditions, and livelihoods of those who depend on the common bean, a crop that represents both cultural heritage and food security in Mexico and worldwide. To better understand the scale of this issue, we began with secondary research, analyzing existing studies and data on anthracnose, fungicides, and bean production <Link to="/human-practices?section=silver&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[23]</Link>. This gave us a technical and contextual overview of the problem. We then moved on to primary research, where we spoke with farmers and experts to validate and expand our understanding through real experiences in the field.
                  </p>
                  <p>
                    From this process, key questions emerged:
                  </p>
                  <h5 className="text-center text-[#649026]">
                    <b><i>What makes bean producers vulnerable to anthracnose?</i></b>
                  </h5>
                  <h5 className="text-center text-[#649026]">
                    <b><i>Why do these challenges persist despite existing control methods?</i></b>
                  </h5>
                  <p>
                    Exploring these questions revealed the magnitude of the problem. With over 37 million tons of common beans produced annually  <Link to="/human-practices?section=silver&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[1]</Link>,  anthracnose can devastate up to 100% of a harvest <Link to="/human-practices?section=silver&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[1]</Link>, and even a 10% loss equals 2.7 million tons of wasted food <Link to="/human-practices?section=silver&scroll=references-section" className="text-[#649026] underline hover:text-[#8CC938]">[24]</Link>. ]. For millions of families, beans remain their most affordable source of protein, making every loss a direct threat to both nutrition and economic stability.
                  </p>
                  <p>
                    Our hypotheses were therefore not mere assumptions, but conclusions shaped by early research, expert insights, and first-hand evidence confirming the widespread impact of anthracnose. <i>(We explore these insights further in the next section.)</i>
                  </p>

                  <ol className="custom-ol2 flex flex-col gap-4 md:gap-6 lg:gap-8 items-center">
                    <li className="bg-[#649026] lg:w-3/4 mx-auto md:w-7/8 sm:w-7/8 rounded-full text-center text-[#FFFFEE] px-8 py-6">
                      <h4>There is a need for antifungal solutions that are environmentally safe,
                        affordable, and compatible with existing farming tools.</h4>
                    </li>
                    <li className="bg-[#649026] lg:w-3/4 mx-auto md:w-7/8 sm:w-7/8 rounded-full text-center text-[#FFFFEE] px-8 py-6">
                      <h4>Stakeholders are more likely to adopt Phasea if they understand how it works and trust its effectiveness under local conditions.</h4>
                    </li>
                    <li className="bg-[#649026] lg:w-3/4 mx-auto md:w-7/8 sm:w-7/8 rounded-full text-center text-[#FFFFEE] px-8 py-6">
                      <h4>If Phasea reduces disease without chemical residues, then farmers will prefer it over fungicides that leave detectable residues.</h4>
                    </li>
                    <li className="bg-[#649026] lg:w-3/4 mx-auto md:w-7/8 sm:w-7/8 rounded-full text-center text-[#FFFFEE] px-8 py-6">
                      <h4>If Phasea include biodegradable components and no live microbes, then non-target organisms and soil health will remain unaffected post-application.</h4>
                    </li>
                  </ol>

                  <p>
                    These hypotheses served as a guide for future interactions with stakeholders, allowing us to obtain context and relevant information from primary sources. They were essential in order to further retrieve and understand:
                  </p>

                  <Alert
                    title='Interactive circles'
                    paragraph='Hover or click the circle to see more about the data we collected.'
                    iconType="hover-click"
                    variant="interactive"
                  />

                  <div className='grid gap-36 lg:grid-cols-3 md:grid-cols-2 pb-24 sm:grid-cols-1'>

                    <HoverCoin
                      title=""
                      subtitle=''
                      paragraph="Data on costs of fungicides and yield losses caused by anthracnose (which in extreme cases can reach up to 100% of production)."
                      img="https://static.igem.wiki/teams/5718/human-practices/silver/economic-data-img-2-section-2.webp"
                    />
                    <HoverCoin
                      title=""
                      subtitle=''
                      paragraph="Insights into 
                      beliefs and attitudes toward chemical vs. organic practices, reflecting cultural and generational perspectives."
                      img="https://static.igem.wiki/teams/5718/human-practices/silver/cultural-data-img-2-section-2.webp"
                    />
                    <HoverCoin
                      title=""
                      subtitle=''
                      paragraph="Preferences on application methods
                        and compatibility with producers’ current farming equipment, ensuring practical adoption."
                      img="https://static.igem.wiki/teams/5718/human-practices/silver/technical-feedback-img-2-section-2.webp"
                    />
                  </div>
                  <p>
                    These steps were designed not only to collect technical information but also to uncover the human realities behind each decision keeping empathy, sustainability and food security at the center of our approach.
                  </p>


                </article>

              </section>



              {/* Section 4 */}
              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12">
                <div className="mb-8">
                  <h2 id="bigger-picture-visualizing-the-challenge" className="scroll-mt-32">The Bigger Picture: Visualizing the Challenge</h2>
                  <hr />
                </div>
                <article className="space-y-4! md:space-y-6! lg:space-y-8!">
                  <img
                    src="https://static.igem.wiki/teams/5718/human-practices/silver/bean-question-marks-1-section-3.webp"
                    alt="Bean surrounded by question marks"
                    className="w-sm rounded-lg float-right pt-8 px-16"
                  />
                  <p>
                    Before designing a solution for anthracnose in common beans, it was essential to fully grasp the complexity of the problem. Tools like the <b>Ishikawa Diagram</b> and the <b>Problem & Objective Tree</b> helped us identify root causes, reframe them as opportunities, and move beyond a purely technical lens.
                  </p>
                  <p>
                    This approach revealed that anthracnose is not only a biological hazard capable of destroying entire harvests; it is a challenge shaped by social inequities, economic pressures, and technological limitations. These factors amplify the damage across bean-producing regions, turning a plant disease into a systemic food security risk for many communities.
                  </p>


                  <CollapseSection
                    title="Fishing for Root Causes"
                    backgroundColor="#649026"
                    startExpanded={false}
                  >

                    <div id="fishing-root-causes" className="p-4 md:p-6 lg:p-8 rounded flex flex-col gap-4 md:gap-6 lg:gap-8">
                      <p>
                        We began our analysis with the <b>Ishikawa Diagram</b>, a tool that allowed us to visually organize and categorize the core problems of the disease’s impact.  This analysis revealed that <b>anthracnose is not only a biological hazard, it is shaped and intensified by social, economic, and technological realities,</b> magnifying its impact across bean-producing regions. Yet beyond the diagram, every category tells a human story. <b><i>“Climate variability”</i></b>, as Engr. Roberto Gallegos told us, climate change is causing heavier and poorly distributed rainfall, recurring droughts and unexpected wet periods, creating ideal conditions for the fungus and directly affecting crop yield.<b><i> High fungicide costs</i></b>, as reflect families forced to choose between protecting their harvests or meeting basic household needs. <b><i>Limited farmer knowledge</i></b> speaks of producers like Abelardo Escárcega, who recognize the disease only by its local name, chahuistle.
                      </p>
                      <div className='py-16'>
                        <img
                          src="https://static.igem.wiki/teams/5718/human-practices/silver/ishikawa-diagram-section-2.webp"
                          alt="Ishikawa Diagram"
                          className="max-w-full h-auto rounded-lg" />
                        <div className="flex justify-center mt-4">
                          <span className="text-caption">
                            <b>Figure 5. </b>Ishikawa diagram.
                          </span>
                        </div>
                      </div>
                      <p>
                        What might appear as a technical map is, in truth, a portrait of lived experiences where environmental, economic, social, and technological struggles converge. This realization showed us that combating anthracnose cannot rely on technical fixes alone. It requires a holistic approach, one that acknowledges farmer realities, addresses systemic barriers, and opens opportunities for sustainable innovation. Through this lens, the Ishikawa Diagram became more than a tool; it guided us toward designing Phasea with empathy, collaboration, and a human-centered perspective.
                      </p>
                    </div>
                  </CollapseSection>

                  <CollapseSection
                    title="Problem & Objective Tree"
                    backgroundColor="#649026"
                    startExpanded={false}
                  >
                    <div id="problem-objective-tree" className="p-4 md:p-6 lg:p-8 rounded flex flex-col gap-4 md:gap-6 lg:gap-8">
                      <p>
                        While the Ishikawa Diagram helped us map the roots and structure of the problem, in order to understand the complexity of anthracnose in beans, we also used a key strategic tool:<b> the Problem & Objective Tree</b>. This visual framework allowed us to connect root causes with possible solutions, moving beyond technical symptoms to reveal the social, economic, and market dynamics that sustain the disease.
                      </p>

                      <div className="flex justify-center px-4 sm:px-12 md:px-4 lg:px-2 xl:px-2">
                        <Link to="https://static.igem.wiki/teams/5718/human-practices/silver/problem-and-objective-tree-phaseos-1.pdf" target="_blank" className="bg-[#649026] hover:bg-[#8CC938] text-[#FFFFEE] text-[20px] font-bold py-2 px-6 rounded-full flex items-center justify-center gap-2 w-full md:w-1/2 text-center transition-all duration-200 ease-in-out hover:scale-105">
                          <PiCursorClickDuotone className="w-24 h-auto" />
                          Take an in-depth look at the Problem Tree
                        </Link>
                      </div>

                      <img
                        src="https://static.igem.wiki/teams/5718/human-practices/silver/problem-tree-1-section-2.webp"
                        alt="Problem Tree Diagram"
                        className="max-w-full h-auto rounded-lg" />
                      <div className="flex justify-center mt-4">
                        <span className="text-caption">
                          <b>Figure 6. </b> Problem & Objective Tree diagram.
                        </span>
                      </div>
                      <p>
                        Building the objective tree was our turning point. It helped us reimagine each root as a potential area of action. For example, limited technical knowledge became a chance to empower farmers through training, while the lack of sustainable alternatives turned into an opportunity to develop accessible, biology-based solutions. The tree enabled us to visualize the path toward a context-driven solution; one that goes beyond laboratory innovation to create real impact in the field. This is where Phasea comes in. By listening to farmers and understanding their realities, we integrated the social, environmental, economic and technological context to our proposal, shifting from solving a purely technical challenge to addressing a deeply human one.
                      </p>

                    </div>
                  </CollapseSection>

                </article>
              </section>
              {/* Section 2 Rooted in Values */}
              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12">
                <div className="mb-8">
                  <h2 id="rooted-in-values" className="scroll-mt-32">Rooted in Values</h2>
                  <hr />
                </div>
                <article className="space-y-4! md:space-y-6! lg:space-y-8!">
                  <p>
                    After identifying the main causes and areas of opportunity, we were able to recognize core concerns regarding anthracnose across the social, environmental, economic, and technological context. Some of them including; yield loss, chemical dependency, environmental damage and treatment effectiveness. Taking these into account allowed us to ensure our project is beneficial both for communities and for the world.
                  </p>
                  <p>
                    Through applying methodologies such as the previously mentioned and analyzing the information gathered we <b>reflected</b> on what was truly behind it and <b>the values it echoed</b>. Then we correlated them to the <Link to="/sustainability" target="_blank" className="text-[#649026] font-bold underline hover:text-[#8CC938]">SDGs</Link>, which as a whole, guided our project’s development during all stages.
                  </p>
                  <p>
                    Phasea was driven by three core values that shaped its purpose and impact: <b>Empathy, Food Security and Sustainability</b>. But, what do they mean to us for our project?

                  </p>
                  <div className='flex justify-center py-16'>
                    <img
                      src="https://static.igem.wiki/teams/5718/human-practices/silver/venn-diagram-human-practices.webp"
                      alt="Venn Diagram"
                      className="max-w-3/4" />
                  </div>
                  <div className="flex justify-center mt-4">
                    <span className="text-caption">
                      <b>Figure 7. </b>Venn diagram illustrating the core values guiding Phasea’s development.

                    </span>
                  </div>
                  <p>
                    <b>Empathy</b> means to actively listen to farmers and communities, addressing real needs in the field, considering their social and economic context, and respecting local knowledge and practices. <b>Food Security</b> reinforces this mission by protecting beans as a staple crop in Mexico and worldwide, reducing yield losses caused by disease, ensuring the accessibility of the product for both small and large-scale farmers, and safeguarding the quality and availability of harvests. Finally, <b>Sustainability</b> ensures long-term balance by reducing dependency on toxic chemicals, preserving soils and biodiversity, offering an eco-friendly solution compatible with agricultural practices, and contributing to global SDGs such as Zero Hunger, Responsible Production, and Life on Land.
                  </p>
                </article>

              </section>


              {/* Section 3 Our Core Bioethical Principles*/}
              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12">
                <div className="mb-8">
                  <h2 id="core-bioethical-principles" className="scroll-mt-32">Our Core Bioethical Principles</h2>
                  <hr />
                </div>
                <article className="space-y-4! md:space-y-6! lg:space-y-8!">
                  <p>
                    As Ethicist María del Socorro Reveles mentioned during her interview, we need to seek the <b>balance between ethics and technology</b> and they must advance simultaneously to avoid irreversible impacts. She provided a different perspective on human <b>dignity</b> as the ultimate goal achieved through food security. Even if our technical research does not directly involve people, it inevitably affects communities and must prioritize the common good.
                  </p>
                  <p>
                    Therefore, as a scientific research project that aims to have a positive impact on society, we used the bioethical principles, commonly used in the medical field, as an ethical framework adapted to Human Practices to guide our project. This approach allowed us to critically evaluate the ethical implications and potential areas of conflict that could emerge with the implementation of our product.
                  </p>
                  <div className='py-16'>
                    <img
                      src="https://static.igem.wiki/teams/5718/human-practices/silver/bioethical-principle-beans.webp"
                      alt="Bioethical Principles Diagram"
                      className="max-w-full h-auto rounded-lg" />
                    <div className="flex justify-center mt-4">
                      <span className="text-caption">
                        <b>Figure 8. </b>Bioethical Principles diagram.
                      </span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <ol className="space-y-4 custom-ol2 list-inside px-10 flex flex-col gap-10 md:gap-6 lg:gap-8 items-center">
                      <div className="bg-[#649026] text-[#FFFFEE] rounded-lg px-4 py-4">
                        <li>
                          <h4 className="text-h4bold mb-2 inline">Eco-Conscious Formulation:</h4>
                          <p className="ml-4">
                            Prioritizing environment-safe formulation through the use of synthetic biology as an alternative to chemical products and risk assessments, supporting sustainability and non-maleficence.
                          </p>
                        </li>
                      </div>

                      <div className="bg-[#649026] text-[#FFFFEE] rounded-lg px-4 py-4">
                        <li>
                          <h4 className="text-h4bold mb-2 inline">Educational Transparency:</h4>
                          <p className="ml-4">
                            Creating user-friendly visuals and fungal disease comparisons, ensuring accessibility and informed understanding, aligning with autonomy and justice.
                          </p>
                        </li>
                      </div>

                      <div className="bg-[#649026] text-[#FFFFEE] rounded-lg px-4 py-4">
                        <li>
                          <h4 className="text-h4bold mb-2 inline">Accessibility:</h4>
                          <p className="ml-4">
                            Adapting Phasea for everyday farming tools and taking into account the demographics of our stakeholders ensures accessibility and affordability, promoting equity and food security.
                          </p>
                        </li>
                      </div>

                      <div className="bg-[#649026] text-[#FFFFEE] rounded-lg px-4 py-4">
                        <li>
                          <h4 className="text-h4bold mb-2 inline">Rigorous Validation:</h4>
                          <p className="ml-4">
                            Collaborating with NGOs and researchers for third-party validation enhances trust, supports justice, and aligns with our goal of providing a reliable, accessible solution.
                          </p>
                        </li>
                      </div>
                    </ol>
                  </div>
                </article>
              </section>

              {/* Section 4 */}
              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12">
                <div className="mb-8">
                  <h2 id="field-table" className="scroll-mt-32">From Field to Table: The Bean Value Chain</h2>
                  <hr />
                </div>

                <article className="space-y-4! md:space-y-6! lg:space-y-8!">
                  <p>
                    Our bioethical principles ensure that every stakeholder and area impacted by beans is benefited and respected. This is why, inspired by our advisors, former iGEMers themselves, we adopted an analysis tool that has been part of iGEM Tec-Chihuahua’s legacy since 2018. To design a truly effective solution, we first needed to understand the entire <b>journey of the common bean</b>, from the moment the seed touches the soil to when it reaches the consumer’s plate. Mapping the value chain from the <b>production perspective</b>, allowed us to identify where Phasea can generate the greatest impact, recognizing that each link directly influences crop quality, profitability, and sustainability.
                  </p>

                  <p>
                    Through different interactions with stakeholders, we realized that this tool will <b>constantly evolve as we become more involved in the industry</b>.  For instance, during our interview with Silvia Román, we identified one stakeholder that we hadn’t previously identified; <b>bean collection centers</b>. She introduced us to Fernando Fernández, an important actor in this stage of the value chain, who guided us through the facility and explained how they clean and sort beans before reaching the market.
                  </p>

                  <Alert
                    title='Interactive Bean Value Chain'
                    paragraph='Hover or click on the different stages of the value chain. You can find a more detailed description in the collapsed section below.'
                    iconType="hover-click"
                    variant="interactive"
                  />

                  <div className="flex justify-between py-20 gap-2">
                    <ValueChain
                      title="Suppliers"
                      paragraph="<b>Input providers</b><br/>Foundation of the chain, providing seeds, fertilizers, tools, and technologies that enable productive crop cycles."
                      img="https://static.igem.wiki/teams/5718/human-practices/3.webp"
                      num='1'
                      shape='polygon'
                    />
                    <ValueChain
                      title="Producers"
                      paragraph="<b>Farmers</b><br/>Operational core that cultivates bean crops, making critical decisions on inputs, management, and harvest timing for optimal quality and sustainability."
                      img="https://static.igem.wiki/teams/5718/human-practices/valuechain-icon-producer.webp"
                      num='2'
                      shape='polygon'
                    />
                    <ValueChain
                      title=" Bean Collection Centers"
                      paragraph="<b>Processing facilities</b><br/>Sort and grade beans by quality standards, determining market value. Disease damage like anthracnose directly reduces profitability.
"
                      img="https://static.igem.wiki/teams/5718/human-practices/valuechain-icon-collection.webp"
                      num='3'
                      shape='polygon'
                    />
                    <ValueChain
                      title="Transportation and Logistics"
                      paragraph="<b>Supply chain integrity</b><br/>Safeguard product quality during movement, preventing post-harvest losses and maintaining bean integrity from farm to market.
"
                      img="https://static.igem.wiki/teams/5718/human-practices/transport.webp"
                      num='4'
                      shape='polygon'
                    />
                    <ValueChain
                      title="Distributors"
                      paragraph="<b>Market Connectors</b><br/>Bridge producers and consumers, shaping pricing and access while advancing food security (SDG 2) through equitable distribution."
                      img="https://static.igem.wiki/teams/5718/human-practices/retailers.webp"
                      num='5'
                      shape='polygon'
                    />
                    <ValueChain
                      title="Consumers"
                      paragraph="<b>End beneficiaries</b><br/>Complete the value chain by choosing quality beans, gaining nutritional benefits while incentivizing sustainable agricultural practices."
                      img="https://static.igem.wiki/teams/5718/human-practices/final.webp"
                      num='6'
                      shape='polygon'
                    />
                  </div>

                  <p>
                    By understanding this value chain, we see that Phasea not only addresses a technical problem
                    but intervenes in a complex system where each actor plays an essential role. This reinforces
                    our commitment to designing solutions with real and lasting impact, benefiting everyone from the field to the table.
                  </p>

                  <div className="mt-8">
                    <CollapseSection
                      title="How Beans Move from Field to Table: The Complete Story"
                      backgroundColor="#649026"
                      textColor="#FFFFEE"
                      borderRadius="12px"
                      startExpanded={false}
                      img="https://static.igem.wiki/teams/5718/general/logo-img-ph-pearl.webp"
                    >
                      <div className="p-6 bg-[#FFFFEE] rounded-lg">

                        <div className="flex flex-col gap-10">
                          <div className="flex items-start space-x-4">
                            <div>
                              <img src="https://static.igem.wiki/teams/5718/human-practices/polygon-1.webp" className="flex float-left w-xs" />
                              <h4 className="text-h4bold text-[#649026] mb-2">Suppliers</h4>
                              <p>
                                Suppliers provide essential agricultural inputs such as seeds, fertilizers, tools and technologies like Phasea. Their role ensures that producers begin the season with the resources required for a productive and healthy crop cycle.
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-4">
                            <div>
                              <img src="https://static.igem.wiki/teams/5718/human-practices/polygon-2.webp" className="flex float-left w-xs" />
                              <h4 className="text-h4bold text-[#649026] mb-2">Producers</h4>
                              <p>
                                Producers combine their practical experience with the technical guidance of agronomists. They manage bean crops, select inputs, and decide when to harvest, playing a key role in achieving high yield, quality, and sustainability.
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-4">
                            <div>
                              <img src="https://static.igem.wiki/teams/5718/human-practices/polygon-3.webp" className="flex float-left w-xs" />
                              <h4 className="text-h4bold text-[#649026] mb-2">Bean Collection Centers</h4>
                              <p>
                                Bean collection centers receive and classify harvested beans based on quality criteria like size and color. Their assessments influence market readiness and pricing. For example, beans affected by anthracnose tend to shrink in size and lose visual quality, reducing their market value and limiting sales potential for producers.
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-4">
                            <div>
                              <img src="https://static.igem.wiki/teams/5718/human-practices/polygon-4.webp" className="flex float-left w-xs" />
                              <h4 className="text-h4bold text-[#649026] mb-2">Transportation and Logistics</h4>
                              <p>
                                Transportation and logistics ensure the efficient and safe movement of beans across the supply chain. This stage is crucial to prevent post-harvest losses and maintain product integrity from origin to market.
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-4">
                            <div>
                              <img src="https://static.igem.wiki/teams/5718/human-practices/polygon-5.webp" className="flex float-left w-xs" />
                              <h4 className="text-h4bold text-[#649026] mb-2">Distributors</h4>
                              <p>
                                Retailers and wholesalers act as intermediaries between producers and consumers. They influence market accessibility, pricing, and the availability of beans in both local and national markets. By ensuring that nutritious and affordable beans reach diverse populations, their role aligns with SDG 2: Zero Hunger, contributing to improved food security and equitable distribution of agricultural goods.
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-4">

                            <div>
                              <img src="https://static.igem.wiki/teams/5718/human-practices/polygon-6.webp" className="flex float-left w-xs" />
                              <h4 className="text-h4bold text-[#649026] mb-2">Consumers</h4>
                              <p>
                                Final consumers are the ones who purchase and eat beans. Choosing high-quality beans that are protected from diseases like anthracnose results in healthier, cleaner, and more nutritious food, offering better flavor, appearance, and safety, which enhances the overall eating experience. By accessing reliable, contaminant-free beans, consumers benefit from improved food quality while indirectly supporting sustainable agricultural innovation.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CollapseSection>

                    <p>
                      By understanding this value chain, we see that Phasea not only addresses a technical problem but intervenes in a complex system where each actor plays an essential role. This reinforces our commitment to designing solutions with real and lasting impact, benefiting everyone from the field to the table.
                    </p>
                  </div>
                </article>
              </section>


              {/* Section 5 */}
              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12">
                <div className="mb-8">
                  <h2 id="beyond-the-field" className="scroll-mt-32">Beyond the Field: The Network of Indirect Actors</h2>
                  <hr />
                </div>

                <article className="space-y-4! md:space-y-6! lg:space-y-8!">

                  <p>
                    Through the bean value chain, we identified direct actors involved such as farmers, suppliers, and consumers. We then realized through interactions with our instructors and stakeholders that there is an even broader network of indirect actors whose influence is just as critical. From academics to government institutions and cultural organizations, these stakeholders provide the framework of support, policies, and knowledge that enable innovations like Phasea to be developed, adopted, and scaled. Farmers themselves confirmed during our field interviews that <i>they usually purchase inputs through local distributors and agro-stores they already trust</i>, insights that reinforced our decision to integrate Phasea into this very supply chain, a strategy further detailed in the <Link to="/entrepreneurship" target="_blank" className="text-[#649026] underline hover">Entrepreneurship section</Link>.
                  </p>


                  <div className="flex justify-between py-20 gap-2">
                    <ValueChain
                      title="Suppliers"
                      paragraph="Trusted local channels providing <b>agricultural inputs to farmers</b>. They <b>offer market insights on anthracnose treatments</b> and serve as the primary access point for reaching producers. Phasea strengthens their portfolio with a sustainable, regulation-compliant innovation."
                      img="https://static.igem.wiki/teams/5718/human-practices/suppliers-img-icon.webp"
                      num='1'
                      shape='circle'
                    />
                    <ValueChain
                      title="Producers"
                      paragraph="End <b>users affected by anthracnose</b> who validate the product through <b>real-world application</b> and <b>experiential feedback</b>. Phasea provides them an effective, easy-to-adopt alternative to current treatment methods."
                      img="https://static.igem.wiki/teams/5718/human-practices/producers-img-icon.webp"
                      num='2'
                      shape='circle'
                    />
                    <ValueChain
                      title=" Investigation and Academic Institutions"
                      paragraph="Universities, research centers, and agronomy experts providing <b>technical knowledge, scientific validation, and strategic guidance</b>. The project demonstrates applied science creating measurable social, environmental, and economic impact."
                      img="https://static.igem.wiki/teams/5718/human-practices/academics-institutions-img-icon.webp"
                      num='3'
                      shape='circle'
                    />
                    <ValueChain
                      title="GOs and NGOs"
                      paragraph="Civil associations and sustainability authorities ensuring <b>legal compliance, biosafety standards, and potential funding</b>. Phasea aligns with green policies, promoting sustainable practices with lower risk than chemical fungicides."
                      img="https://static.igem.wiki/teams/5718/human-practices/gos-ngos-img-icon.webp"
                      num='4'
                      shape='circle'
                    />
                    <ValueChain
                      title="Cultural Sector"
                      paragraph="Institutions preserving <b>gastronomy, agricultural traditions, and ancestral bean cultivation practices</b>. Phasea supports chemical-free heritage food production, facilitating acceptance among change-resistant communities while preserving traditional methods."
                      img="https://static.igem.wiki/teams/5718/human-practices/cultural-sector-img-icon.webp"
                      num='5'
                      shape='circle'
                    />
                    <ValueChain
                      title="Entrepreneurship"
                      paragraph="Accelerators, incubators, technology parks, and investment funds providing <b>capital access, mentorship, stakeholder connections, and scalability guidance</b>. The project offers economic returns with high-visibility positive impact."
                      img="https://static.igem.wiki/teams/5718/human-practices/entrepreneurship-img-icon.webp"
                      num='6'
                      shape='circle'
                    />
                    <ValueChain
                      title="Final Consumer"
                      paragraph="Worldwide bean consumers providing <b>feedback on product acceptance and sustainability perception</b>. Phasea delivers safer, chemical-free food aligned with health and environmental trends."
                      img="https://static.igem.wiki/teams/5718/human-practices/final-consumer-img-icon.webp"
                      num='7'
                      shape='circle'
                    />
                  </div>

                  <div className="mt-8">
                    <CollapseSection
                      title="How Each Stakeholder Powers Phasea & What They Gain"
                      backgroundColor="#649026"
                      textColor="#FFFFEE"
                      borderRadius="12px"
                      startExpanded={false}
                      img="https://static.igem.wiki/teams/5718/general/logo-img-ph-pearl.webp"
                    >
                      <div className="p-6 bg-[#FFFFEE] rounded-lg">


                        <div className="flex flex-col gap-10">
                          <div className="flex items-start space-x-4">
                            <div>
                              <img src="https://static.igem.wiki/teams/5718/human-practices/circle-1.webp" className="flex float-left w-xs" />
                              <h3 className="text-h3bold mb-2">Suppliers</h3>
                              <p>
                                <b>Who are they?</b>: Agricultural input providers who supply seeds, fertilizers, and crop protection products to farmers.
                              </p>
                              <p>
                                <b>Project involvement</b>: They help us understand current market dynamics and the treatments most commonly used against anthracnose. Their distribution channels are also the most trusted and accessible for farmers.
                              </p>
                              <p>
                                <b>How does the project return to them?</b>:  Phasea offers them a sustainable, innovative product that aligns with regulations and differentiates their portfolio, strengthening their market relevance.
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-4">
                            <div>
                              <img src="https://static.igem.wiki/teams/5718/human-practices/circle-2.webp" className="flex float-left w-xs" />
                              <h3 className="text-h3bold mb-2">Producers</h3>
                              <p>
                                <b>Who are they?</b>: These are farmers who grow beans and are affected by anthracnose in both seasonal and irrigated crops. They are the end users and main beneficiaries of the product.
                              </p>
                              <p>
                                <b>Project involvement</b>: Product validation, application method feedback and sharing specific information based on experience. They are the stakeholder whom we impact on a greater scale, therefore they provide key insights, which then we implement in our project.
                              </p>
                              <p>
                                <b>How does the project return to them?</b>: It offers them an effective alternative to current anthracnose treatment methods that is easy to incorporate into their daily routine.
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-4">
                            <div>
                              <img src="https://static.igem.wiki/teams/5718/human-practices/circle-3.webp" className="flex float-left w-xs" />
                              <h3 className="text-h3bold mb-2">Investigation and Academic Institutions</h3>
                              <p>
                                <b>Who are they?</b>: Universities, research centers, and agronomy experts involved in beans and crop disease.

                              </p>
                              <p>
                                <b>Project involvement</b>: They provide technical knowledge, research validation, and advice to strengthen our scientific foundation and scaling plans.
                              </p>
                              <p>
                                <b>How does the project return to them?</b>: A solution that applies science and technological knowledge to develop real-world solutions with positive social, environmental, and economic impact, especially in managing anthracnose in common beans.
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-4">
                            <div>
                              <img src="https://static.igem.wiki/teams/5718/human-practices/circle-3.webp" className="flex float-left w-xs" />
                              <h3 className="text-h3bold mb-2">GOs and NGOs</h3>
                              <p>
                                <b>Who are they?</b>: Civil associations, regulatory and sustainability authorities.
                              </p>
                              <p>
                                <b>Project involvement</b>: Legal validation, regulatory and biosafety parameters, as well as funding or sponsorship.
                              </p>
                              <p>
                                <b>How does the project return to them?</b>: It gives them a solution aligned with green policies that promotes sustainable agricultural practices and has minimal risk compared to chemical fungicides.
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-4">
                            <div>
                              <img src="https://static.igem.wiki/teams/5718/human-practices/circle-4.webp" className="flex float-left w-xs" />
                              <h3 className="text-h3bold mb-2">Cultural Sector</h3>
                              <p>
                                <b>Who are they?</b>: Centers of gastronomy, cultural heritage and agricultural traditions.
                              </p>
                              <p>
                                <b>Project involvement</b>: Validation of the product's impact on preserving bean and ancestral practices that have been passed down from generations. By meeting their needs, we ensure that the product can be more easily accepted by stakeholders who are more closed to change (such as farmers or rural communities) and whose priority is to preserve their cultivation practices but still require an effective solution against anthracnose.
                              </p>
                              <p>
                                <b>How does the project return to them?</b>: The product contributes to the preservation of beans as a chemical-free heritage food, helping sustain culinary and agricultural traditions for future generations.
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-4">
                            <div>
                              <img src="https://static.igem.wiki/teams/5718/human-practices/circle-5.webp" className="flex float-left w-xs" />
                              <h3 className="text-h3bold mb-2">Entrepreneurship</h3>
                              <p>
                                <b>Who are they?</b>: Accelerators, incubators, technology parks, investment and financing funds. Both local and international.
                              </p>
                              <p>
                                <b>Project involvement</b>: Financial advice, access to capital, linkages with all types of stakeholders, mentoring and scalability.
                              </p>
                              <p>
                                <b>How does the project return to them?</b>: Opportunity for economic return and positive impact with high visibility.
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-4">
                            <div>
                              <img src="https://static.igem.wiki/teams/5718/human-practices/circle-6.webp" className="flex float-left w-xs" />
                              <h3 className="text-h3bold mb-2">Final Consumer</h3>
                              <p>
                                <b>Who are they?</b>: People worldwide who consume beans.
                              </p>
                              <p>
                                <b>Project involvement</b>: They provide feedback on acceptance and perception, and receive in return a product aligned with new health and sustainability trends.
                              </p>
                              <p>
                                <b>How does the project return to them?</b>: Phasea replaces the use of chemical fungicides in bean production, giving consumers access to safer food that is aligned with new health and sustainability trends.
                              </p>
                            </div>
                          </div>
                        </div>


                      </div>
                    </CollapseSection>
                  </div>


                  <p>
                    Recognizing the role of these indirect actors reminded us that Phasea is not built in isolation. It is the product of a living ecosystem where collaboration, empathy, and sustainability converge to create real impact from local fields to global markets.
                  </p>
                </article>
              </section>

              {/* Section 6 Voices behind Phasea: Understanding Who we Serve*/}
              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12">
                <div className="mb-8">
                  <h2 id="voices-behind-phasea-understanding-who-we-serve" className="scroll-mt-32">Voices Behind Phasea: Understanding Who We Serve</h2>
                  <hr />
                </div>
                <article className="space-y-4! md:space-y-6! lg:space-y-8!">
                  <p>
                    After mapping the value chain and identifying direct and indirect actors, the next step was to connect with the real people behind these roles. To achieve this, we designed interviews rooted in empathy, aiming to understand needs, emotions, and motivations rather than only technical practices.
                  </p>
                  <CollapseSection
                    title="Archetype Map"
                    backgroundColor="#649026"
                    startExpanded={false}
                  >

                    <div id="archetype-map" className="p-4 md:p-6 lg:p-8 rounded flex flex-col gap-4 md:gap-6 lg:gap-8">
                      <p>
                        Before proposing solutions, we knew it was essential to gain a deep understanding of all the people involved,  both directly and indirectly in the problem. This process led us to create our <b>Archetype Map</b>, a tool that helped us clearly visualize each profile’s roles, motivations, and needs. The archetypes were not imagined characters but rather patterns distilled from real conversations, giving us a set of representative voices within the common bean system.
                      </p>
                      <div className='py-16'>
                        <img
                          src="https://static.igem.wiki/teams/5718/human-practices/silver/our-archetype-map.webp"
                          alt="Archetype Map"
                          className="max-w-full h-auto rounded-lg" />
                        <div className="flex justify-center mt-4">
                          <span className="text-gray-600 text-caption">
                            <b>Figure 9. </b>Archetype Map.
                          </span>
                        </div>
                      </div>
                      <p>
                        The Archetype Map revealed the diversity of actors and helped us establish clear priorities. While many participants such as consumers, regulators, and suppliers play important roles, it became evident that farmers are the primary end-users. This insight guided our focus; Phasea had to be designed with farmers at its core, while still generating positive ripple effects for the broader network of stakeholders.
                      </p>
                    </div>
                  </CollapseSection>


                  <CollapseSection
                    title="Empathy Map"
                    backgroundColor="#649026"
                    startExpanded={false}
                  >

                    <div id="empathy-map" className="p-4 md:p-6 lg:p-8 rounded flex flex-col gap-4 md:gap-6 lg:gap-8">
                      <p>
                        Each archetype evolved into a story; people with different realities, concerns, and expectations, yet all connected by the same system. To get closer to their lived experience, we applied the <b>empathy map</b> methodology. These maps were essential in allowing us to step into their shoes, to understand what they see, think, feel, and do. This process not only uncovered key insights about their needs and frustrations but also helped us spot opportunities where our solution could fit naturally.
                      </p>
                      <div className="aspect-video w-full">
                        <Carousel
                          images={carouselImagesEmpathy}
                          autoPlayInterval={3000}
                          showArrows={true}
                          showDots={true}
                          height="100%"
                          width="100%"
                          className="rounded-xl [&_img]:h-full [&_img]:w-full [&_img]:object-cover"
                        />
                      </div>

                      <div className="flex justify-center mt-4">
                        <span className="text-gray-600 text-caption">
                          <b>Figure 10. </b>Empathy Map Carousel.
                        </span>
                      </div>

                    </div>
                    <p>
                      As a result, this comprehensive and deeper understanding of each archetype allowed us to develop semi-structured interviews focused on listening to the stories that needed to be told and learning from the people affected.
                    </p>
                  </CollapseSection>


                  <CollapseSection
                    title="Relationship Map"
                    backgroundColor="#649026"
                    startExpanded={false}
                  >

                    <div id="relationship-map" className="p-4 md:p-6 lg:p-8 rounded flex flex-col gap-4 md:gap-6 lg:gap-8">
                      <p>
                        Once we understood each actor individually, we needed to see how they related to one another. That’s where the Relationship Map came in, revealing the network of interactions, influences, and dependencies among stakeholders. It was like turning on the lights in a scene where all the characters were already present, but we didn’t yet know who influenced whom. This visualization helped us identify key points of collaboration and potential bottlenecks for implementing our solution.
                      </p>

                      <p>
                        We acknowledge that this type of stakeholder relationship mapping can also be approached through data science methodologies. However, as an initial exploration, what we developed was a first draft of collaboration and connection, a reference framework that helped us understand the complex system surrounding our project.
                      </p>

                      <p>
                        Through interviews, research, and mentions of other relevant actors made by stakeholders themselves, we began to outline this <b>interconnected web</b>. Even when some were not directly linked, their actions and decisions have <b>ripple effects across the system</b>. This map reflects our interpretation <b>based on qualitative evidence</b>, serving as a foundation for understanding the relationships that shape our context. In future stages, this work could evolve into a more detailed study of collaboration dynamics.
                      </p>

                      <div className='py-16'>
                        <img
                          src="https://static.igem.wiki/teams/5718/human-practices/silver/stakeholderrelationship-map.webp"
                          alt="Relationship Map"
                          className="max-w-full h-auto rounded-lg" />
                        <div className="flex justify-center mt-4">
                          <span className="text-caption">
                            <b>Figure 11. </b>Relationship Map.
                          </span>
                        </div>
                      </div>
                      <p>
                        Through the Relationship Map, we discovered that suppliers and regulators are key connectors in the system. Farmers often depend on suppliers for advice on purchasing, while regulators determine which products reach the market. This revealed the importance of engaging both groups, ensuring Phasea would be both trusted and legally viable. Moreover, since these interactions are <b>social phenomena</b>, not only economic or scientific, this section emphasizes the role of people. For that reason, our subsequent approaches drew heavily from <b>cultural and anthropological perspectives</b>, allowing us to better understand the human dynamics shaping the system.
                      </p>
                    </div>
                  </CollapseSection>


                  <CollapseSection
                    title="Power-Interest Map"
                    backgroundColor="#649026"
                    startExpanded={false}
                  >

                    <div id="power-interest-map" className="p-4 md:p-6 lg:p-8 rounded flex flex-col gap-4 md:gap-6 lg:gap-8">
                      <p>
                        Finally, to prioritize our actions and know who to involve at each stage, we built the <b>Power-Interest Map</b>. This tool allowed us to classify stakeholders according to their level of power and degree of interest in the project, but more importantly, it revealed why some actors matter more than others in shaping solutions for anthracnose.
                      </p>
                      <div className='py-16'>
                        <img
                          src="https://static.igem.wiki/teams/5718/human-practices/silver/powerinterest-map.webp"
                          alt="Power-Interest Map"
                          className="max-w-full h-auto rounded-lg" />
                        <div className="flex justify-center mt-4">
                          <span className="text-caption">
                            <b>Figure 12. </b>Power-Interest Map.
                          </span>
                        </div>
                      </div>

                      <ul className="flex gap-8 flex-col space-y-6 md:space-y-8 lg:space-y-10 text-h5 indent-8 custom-ul">
                        <li><b>Manage Closely (High Power, High Interest):</b> Farmers, agronomists, and suppliers were placed here because they directly face the disease and influence how solutions are adopted. Farmers are the primary end-users, agronomists (who can also be farmers or suppliers) provide technical guidance, and suppliers decide which products reach rural communities. Their daily decisions have the strongest impact on Phasea’s success.
                        </li>
                        <li><b>Keep Satisfied (High Power, Low Interest):</b>Regulators, promoters, and ethicists hold decision-making power but are less directly affected by the disease. Regulators establish biosafety and approval processes, promoters amplify visibility, and ethicists influence perceptions of safety and responsibility. Keeping them satisfied ensures smooth adoption.
                        </li>
                        <li><b>Keep Informed (High Interest, Low Power):</b>Entrepreneurs and researchers are deeply engaged in innovation but hold less direct influence over farmers’ decisions. Still, their involvement strengthens technical validation and future scaling.
                        </li>
                        <li><b>Monitor (Low Power, Low Interest):</b>Consumers and preservationists are indirectly affected. While their influence is smaller, their perspectives matter; consumers shape long-term demand for sustainable beans, and preservationists emphasize protecting cultural heritage.
                        </li>
                      </ul>
                      <p>
                        This process showed us that not all stakeholders should be engaged in the same way. While regulators and suppliers needed alignment from the very beginning, consumers and preservationists could be integrated gradually. The Power-Interest Map helped us design a strategy that is both realistic and respectful of each actor’s role in tackling anthracnose.
                      </p>
                    </div>
                  </CollapseSection>

                  <hr />

                  <div className='flex items-center justify-center'><p>Each methodology was a step on a ladder:</p></div>
                  <div className='py-16'>
                    <img
                      src="https://static.igem.wiki/teams/5718/human-practices/silver/methodological-ladder-diagram.webp"
                      alt="Methodological Ladder Diagram"
                      className="max-w-full h-auto rounded-lg" />
                    <div className="flex justify-center mt-4">
                      <span className="text-caption">
                        <b>Figure 13. </b>Diagram of the methodological ladder used in our Human Practices process.
                      </span>
                    </div>
                  </div>

                  <p>
                    Thanks to this process, we stopped seeing our stakeholders as a static list and began understanding them as a living, interconnected ecosystem full of opportunities to co-create value.
                  </p>
                </article>
              </section>


              {/* Section 7 Designing with Voices */}
              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12">
                <div className="mb-8">
                  <h2 id="designing-with-voices" className="scroll-mt-32">Designing With Voices, Not Just Data</h2>
                  <hr />
                </div>

                <article className="space-y-4! md:space-y-6! lg:space-y-8!">

                  <p>
                    After identifying our archetypes, the next step was to design tailored interviews for each one, aiming to capture not only data but also the emotions, motivations, and experiences that define their relationship with bean cultivation and the anthracnose challenge. To achieve this, we adopted a qualitative methodology based on semi-structured interviews, grounded in three key pillars.
                  </p>
                  <img
                    src="https://static.igem.wiki/teams/5718/human-practices/silver/designing-with-voices-diagram.webp"
                    alt="Designing With Voices Diagram"
                    className="max-w-full h-auto rounded-lg" />
                  <div className="flex justify-center ">
                    <span className="text-caption">
                      <b>Figure 14. </b>Designing With Voices Diagram.
                    </span>
                  </div>
                  <p>
                    This methodology allowed us to listen attentively and respectfully to every voice involved, ensuring Phasea is a project built on human experience with an ethical and collaborative focus.
                  </p>

                  <div className="flex justify-center px-4 sm:px-12 md:px-4 lg:px-2 xl:px-2">

                    <Link to="https://static.igem.wiki/teams/5718/human-practices/silver/phasea-interview-guide.pdf" target="_blank" className="bg-[#649026] hover:bg-[#8CC938] text-[#FFFFEE] text-[20px] font-bold py-2 px-6 rounded-full flex items-center justify-center gap-2 w-full md:w-1/2 text-center transition-all duration-200 ease-in-out hover:scale-105">
                      <PiCursorClickDuotone className="w-24 h-auto" />
                      See our detailed questions
                    </Link>
                  </div>
                </article>
              </section>

              {/* Section 8 Rooted in Context */}
              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12">
                <div className="mb-8">
                  <h2 id="rooted-in-context" className="scroll-mt-32">Rooted in Context, Grown by Collaboration</h2>
                  <hr />
                </div>

                <article className="space-y-4! md:space-y-6! lg:space-y-8!">

                  <p>
                    Our journey to build Phasea was never about creating in isolation. Each step, from defining hypotheses to validating them in the field, was guided by empathy and grounded in the realities of bean producers and their ecosystems. Tools like the Ishikawa Diagram and the Problem & Objective Tree helped us connect technical challenges with their social, environmental, and economic roots, providing a common language between science and community.
                  </p>
                  <img
                    src="https://static.igem.wiki/teams/5718/human-practices/silver/rooted-in-context-bean-fix.webp"
                    alt="Bean with glasses"
                    className="w-xl rounded-lg float-right pt-8 px-16"
                  />
                  <p>
                    Above all, Phasea was shaped with people, not just for them. Farmers, agronomists, suppliers, and regulators became active collaborators whose voices guided every decision. The result is more than a product, it’s a living solution, rooted in collective effort and designed to create sustainable change where it matters most: in the field.
                  </p>
                </article>
              </section>

              {/* References section */}
              <div id="references-section">
                <References
                  references={SilverReferences}
                  title="References"
                  description=""
                  className="pt-12"
                />
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Section Navigation Footer */}
      <div className="w-full bg-transparent mt-16">
        <div className="mx-auto py-4 px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 xl:gap-16 2xl:gap-[20rem]">

            {/* Previous Section */}
            {currentSectionIndex > 0 ? (
              <button
                onClick={() => handleSectionNavigation(currentSectionIndex - 1)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:scale-105 transition-all duration-700 cursor-pointer bg-[#FFFFEE] shadow-2xl hover:bg-[#FFFFE1] border border-[#441D04] min-w-[200px] justify-center lg:justify-start"
              >
                <span className="text-h3bold">←</span>
                <div className="text-center lg:text-left">
                  <div className="text-h4bold lg:text-h3bold">Previous</div>
                  <div className="text-h4 lg:text-h3">{sections[currentSectionIndex - 1].title}</div>
                </div>
              </button>
            ) : <div className="hidden lg:block w-[200px]" />}

            {/* Progress & Back to Overview */}
            <div className="text-center px-4 py-2">
              <div className="text-h4bold lg:text-h3bold mb-2">
                {currentSectionIndex + 1} of {sections.length}
              </div>
              <button
                onClick={handleBackToOverview}
                className="text-[#649026] hover:text-[#6EA71E] text-h4bold lg:text-h3bold cursor-pointer"
              >
                ← Back to Sections
              </button>
            </div>

            {/* Next Section */}
            {currentSectionIndex < sections.length - 1 ? (
              <button
                onClick={() => handleSectionNavigation(currentSectionIndex + 1)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:scale-105 transition-all duration-700 cursor-pointer min-w-[200px] justify-center lg:justify-end"
                style={{ backgroundColor: sections[currentSectionIndex].color, color: '#FFFFEE' }}
              >
                <div className="text-center lg:text-right">
                  <div className="text-h4bold lg:text-h3bold">Next</div>
                  <div className="text-h4 lg:text-h3">{sections[currentSectionIndex + 1].title}</div>
                </div>
                <span className="text-h3bold">→</span>
              </button>
            ) : <div className="hidden lg:block w-[200px]" />}

          </div>
        </div>
      </div>

    </div>
  );
}


function IntegratedHPSection({
  scrollTo,
  sections,
  currentSectionIndex,
  handleSectionNavigation,
  handleBackToOverview,
  setActiveSection
}: {
  scrollTo?: string;
  sections: Section[];
  currentSectionIndex: number;
  handleSectionNavigation: (index: number) => void;
  handleBackToOverview: () => void;
  setActiveSection: (section: any) => void;
}) {

  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  return (
    <div className="min-h-screen">

      <div className="px-4 py-8 mx-auto">

        <div className="lg:flex lg:justify-center lg:gap-8 xl:gap-12 2xl:gap-16 
          max-w-[1600px] xl:max-w-[1800px] 2xl:max-w-[2200px] mx-auto">

          {/* Left Sidebar - TOC */}
          <aside className="hidden lg:block lg:w-[260px] xl:w-[280px] 2xl:w-[300px] 
              sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto z-40 flex-shrink-0">
            <TableOfContents />
          </aside>

          <div className="w-full lg:max-w-[900px] xl:max-w-[1100px] 2xl:max-w-[1300px] min-w-0
            mx-auto lg:pr-16 xl:pr-24 2xl:pr-32">

            <main className="prose prose-lg leading-[3rem] 
                  prose-p:mb-4 prose-p:md:mb-6 prose-p:lg:mb-8
                  prose-p:last:mb-0
                  prose-base sm:prose-lg lg:prose-xl 2xl:prose-2xl
                  prose-p:text-justify
                  max-w-none
                  px-0">

              {/* Lead Description Section */}
              <div id="content-section" className="lead-description-class"></div>
              <LeadDescription
                title=""
                description="How stakeholder feedback directly shaped our project design and implementation strategy."
                author="Integration Team"
              />

              {/* Add section divider after lead */}
              <div className="section-divider my-8 mx-auto" />

              {/* Section 1 */}
              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12 mx-auto">
                <div className="mb-8 mx-auto">
                  <h2 id="how-listening-changed-everything" className="scroll-mt-32">How Listening Changed Everything</h2>
                  <hr />
                </div>

                <div>
                  <p>
                    In the previous stage, we immersed ourselves in the bean ecosystem, listening to every voice
                    that shapes it; from the farmers who work tirelessly each year and feel the weight of every harvest, to
                    the researchers who view science as a way to safeguard the future. Through our Human Practices journey, we
                    mapped relationships, identified needs, and uncovered stories of struggle, resilience, and hope, which later
                    became the cornerstone and drive of our project.
                  </p>
                  <p>
                    Listening revealed more than technical challenges; it uncovered the values that would shape Phasea. As farmer <TooltipAssemble title='Pilar Martínez' paragraph='In his experience, they’ve done more harm than good. “The land gets used to them, like if I were drinking poison,” he reflected.' img='https://static.igem.wiki/teams/5718/entrepreneurship/tooltips/carlos-dominguez-producer.avif' low={false} Dectext={false}>Pilar Martínez</TooltipAssemble> told us, <b>“What we produce here is not just for us, it’s food for everyone.”</b> This simple truth placed food security at the heart of our mission. Others, like Carlos Dominguez, expressed frustration over chemical dependency and rising costs, while Harim Rodríguez, an input supplier, highlighted the urgency of adopting sustainable bio-inputs. These voices showed us that sustainability was not an option but a necessity, and that empathy must guide every decision we make.

                  </p>

                  <p>
                    From that point on, every conversation became more than data; it became a seed capable of shaping Phasea’s
                    design, purpose, and execution. Our Integrated Human Practices reflects this journey, how authentic voices
                    turned into concrete actions, and how those actions transformed Phasea into a project <b>built with empathy, guided
                      by sustainability, and committed to food security</b>.
                  </p>

                </div>
              </section>

              {/* Section 2 */}
              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12 mx-auto">
                <div className="mb-8 mx-auto">
                  <h2 id="seeds-phasea-interview-journey" className="scroll-mt-32">Seeds of Phasea: Our Interview Journey</h2>
                  <hr />
                </div>

                <div className="mx-auto">
                  <img
                    src="https://static.igem.wiki/teams/5718/human-practices/integrated/starc-diagram-section-1.webp"
                    alt="STARC Diagram"
                    className="w-xl rounded-lg float-left px-24"
                  />
                </div>

                <div>
                  <p>
                    Each dialogue, whether with farmers, regulators, suppliers, or institutions, became more than an interview; it became a story that helped shape the foundation of our project. Listening turned into learning, and learning turned into design. To capture these voices in a clear and transparent way, we adapted the <b>STAR method</b>, traditionally used in behavioral interviews [1], into our own Human Practices framework, <b>STAR+C</b>. By adding <b>Communication as a final step, after Situation, Task, Action, and Result</b>; we ensured that every insight would not remain on paper but return to the people who inspired it.

                  </p>
                  <p>
                    Through this process, interviews evolved from static records into seeds of transformation. Each story influenced how we structured Phasea, its objectives, strategies, and even the way we communicate. Most importantly, these stories returned to the community through continuous dialogue, allowing Phasea to grow as a shared solution, nurtured by the people who made it possible.

                  </p>

                </div>
              </section>

              {/* Section 3 */}
              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12 mx-auto">
                <div className="mb-8 mx-auto">
                  <h2 id="seeds-to-milestones-interview-timeline" className="scroll-mt-32">From Seeds to Milestones: Our Interview Timeline</h2>
                  <hr />
                </div>

                <div>
                  <p>
                    As our conversations multiplied, each voice became part of a larger story. To understand how every dialogue shaped Phasea, we organized our journey into a timeline, a living record that shows not only when we listened, but how each story built upon the last, turning uncertainty into insight and ideas into action. Throughout our Human Practices journey, we <b>conducted around 55 interviews</b> across the bean system. Each participant represented one of the archetypes mapped in the previous section. By arranging these interactions chronologically, we could visualize how perspectives from different actors complemented one another, revealing connections that were not visible before.

                  </p>
                  <p>
                    This process strengthened our understanding of the common bean value chain, from direct actors (farmers, suppliers, distributors, consumers) who experience the effects of anthracnose firsthand, to indirect actors (research centers, regulators, cultural institutions, and accelerators) who influence the ecosystem where innovation can thrive. Our timeline demonstrates that these voices did not emerge in isolation but formed a sequence, each conversation expanding our vision and deepening our empathy. From the first seeds of insight to the milestones of change, this continuous dialogue, guided by the STAR+C methodology, became the framework through which food security, empathy, and sustainability took root in every decision we made.
                  </p>
                  <div className="flex justify-center px-4 sm:px-12 md:px-4 lg:px-2 xl:px-2">

                    <Link to="https://static.igem.wiki/teams/5718/human-practices/integrated/igem-2025-logbook.pdf" className="bg-[#649026] hover:bg-[#8CC938] text-[#FFFFEE] text-[20px] font-bold py-2 px-6 rounded-full flex items-center justify-center gap-2 w-full md:w-1/2 text-center transition-all duration-200 ease-in-out hover:scale-105">
                      <PiCursorClickDuotone className="w-24 h-auto" />
                      See our Field Log (full interviews)
                    </Link>
                  </div>

                  <div className="not-prose w-full my-12 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-10 px-4 sm:px-6 md:px-8 lg:px-10">
                    <StakeholderTimeline />
                  </div>



                </div>
              </section>


              {/* Section 4 */}
              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12 mx-auto">
                <div className="mb-8 mx-auto">
                  <h2 id="complexity-to-clarity-initial-hypotheses" className="scroll-mt-32">From Complexity to Clarity: Our initial hypotheses</h2>
                  <hr />
                </div>

                <div>
                  <p>
                    As our interview timeline unfolded, patterns began to emerge. Each story, each perspective, revealed not only challenges but also the opportunities hidden within them. By connecting these insights, we moved from listening to understanding, from collecting voices to identifying what truly mattered. In our initial analysis of the problem, we proposed four hypotheses about what we thought would make Phasea both effective and adoptable. Through more than 50 interviews, we refined them, confirmed some, and challenged others. Integrating this knowledge to the approach of our project.

                  </p>


                  <div className="flex justify-center px-4 sm:px-12 md:px-4 lg:px-2 xl:px-2">

                    <Link to="/human-practices?section=silver&scroll=what-we-thought-we-knew" className="bg-[#649026] hover:bg-[#8CC938] text-[#FFFFEE] text-[20px] font-bold py-2 px-6 rounded-full flex items-center justify-center gap-2 w-full md:w-1/2 text-center transition-all duration-200 ease-in-out hover:scale-105">
                      <PiCursorClickDuotone className="w-24 h-auto" />
                      Click here to go to our initial hypotheses in the previous section
                    </Link>
                  </div>

                  <br />


                  <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 items-center">
                    <CollapseSection title="Producers are most likely to adopt a biological solution because of its environmental benefits."
                      backgroundColor="#649026"
                      startExpanded={true}
                    >
                      <div className="overflow-x-auto overflow-y-visible py-8 md:px-8 lg:px-12 xl:px-16 scrollbar-thin scrollbar-thumb-[#80B61C] scrollbar-track-[#FFFFEE]">
                        <table className="min-w-[700px] sm:min-w-[800px] lg:min-w-[1000px] table-auto border-separate border-spacing-0 border border-[#441D04] w-full mx-auto">
                          <tr>
                            <th className="border border-[#441D04] px-2 py-1 bg-[#80B61C] bold text-3xl hover:bg-[#80B61C]/80 hover:text-zinc-600 transition-all duration-200">What we found</th>
                            <th className="border border-[#441D04] px-2 py-1 bg-[#80B61C] bold text-3xl hover:bg-[#80B61C]/80 hover:text-zinc-600 transition-all duration-200">Status</th>
                            <th className="border border-[#441D04] px-2 py-1 bg-[#80B61C] bold text-3xl hover:bg-[#80B61C]/80 hover:text-zinc-600 transition-all duration-200">Example Insight/Quote</th>
                          </tr>
                          <tr className="hover:bg-[#FFFFEE]/65 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg hover:z-10 relative">
                            <td className="border border-[#441D04] px-2 py-4 bg-[#FFFFEE] transition-all duration-200 ease-in-out text-ellipsis hover:bg-[#CBEA8D] hover:text-[#441D04] hover:border-2 hover:border-[#441D04] hover:font-bold">There is a clear need for sustainable antifungal solutions, but adoption depends on cost-effectiveness and compatibility with existing farming tools. Farmers like Carlos Domínguez and suppliers  such as Harim emphasized the need for sustainable inputs and that they must work with current sprayers and tractors to be viable. Many valued cleaner food, but most prioritized cost and yield first. Residue-free beans are an advantage, but not the main driver.</td>
                            <td className="border border-[#441D04] px-2 py-4 bg-[#FFFFEE] transition-all duration-200 ease-in-out text-ellipsis hover:bg-[#CBEA8D] hover:text-[#441D04] hover:border-2 hover:border-[#441D04] hover:font-bold">Refined</td>
                            <td className="border border-[#441D04] px-2 py-4 bg-[#FFFFEE] transition-all duration-200 ease-in-out text-ellipsis hover:bg-[#CBEA8D] hover:text-[#441D04] hover:border-2 hover:border-[#441D04] hover:font-bold">Carlos Luis Domínguez: “If we can reduce pesticides, all the better, but it has to work with what we already have.”</td>
                          </tr>
                        </table>
                      </div>
                    </CollapseSection>
                    <CollapseSection title="Stakeholders are more likely to adopt Phasea if they understand how it works
                        and trust its effectiveness under local conditions."
                      backgroundColor="#649026"
                      startExpanded={true}
                    >
                      <div className="overflow-x-auto overflow-y-visible py-8 md:px-8 lg:px-12 xl:px-16 scrollbar-thin scrollbar-thumb-[#80B61C] scrollbar-track-[#FFFFEE]">
                        <table className="min-w-[700px] sm:min-w-[800px] lg:min-w-[1000px] table-auto border-separate border-spacing-0 border border-[#441D04] w-full mx-auto">
                          <tr>
                            <th className="border border-[#441D04] px-2 py-1 bg-[#80B61C] bold text-3xl hover:bg-[#80B61C]/80 hover:text-zinc-600 transition-all duration-200">What we found</th>
                            <th className="border border-[#441D04] px-2 py-1 bg-[#80B61C] bold text-3xl hover:bg-[#80B61C]/80 hover:text-zinc-600 transition-all duration-200">Status</th>
                            <th className="border border-[#441D04] px-2 py-1 bg-[#80B61C] bold text-3xl hover:bg-[#80B61C]/80 hover:text-zinc-600 transition-all duration-200">Example Insight/Quote</th>
                          </tr>
                          <tr className="hover:bg-[#FFFFEE]/65 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg hover:z-10 relative">
                            <td className="border border-[#441D04] px-2 py-4 bg-[#FFFFEE] transition-all duration-200 ease-in-out text-ellipsis hover:bg-[#CBEA8D] hover:text-[#441D04] hover:border-2 hover:border-[#441D04] hover:font-bold">Partially confirmed because trust is critical, but we learned farmers expect visible, fast results; biofungicides require additional communication and demonstrations.</td>
                            <td className="border border-[#441D04] px-2 py-4 bg-[#FFFFEE] transition-all duration-200 ease-in-out text-ellipsis hover:bg-[#CBEA8D] hover:text-[#441D04] hover:border-2 hover:border-[#441D04] hover:font-bold">Refined</td>
                            <td className="border border-[#441D04] px-2 py-4 bg-[#FFFFEE] transition-all duration-200 ease-in-out text-ellipsis hover:bg-[#CBEA8D] hover:text-[#441D04] hover:border-2 hover:border-[#441D04] hover:font-bold">Willy Ordoñez: “I trust more in what I’ve lived; I’d try bio-inputs if I see them working in my own field.”</td>
                          </tr>
                        </table>
                      </div>
                    </CollapseSection>

                    <CollapseSection title="If Phasea reduces disease without chemical residues, then farmers will prefer
                        it over fungicides that leave detectable residues."
                      backgroundColor="#649026"
                      startExpanded={true}
                    >
                      <div className="overflow-x-auto overflow-y-visible py-8 md:px-8 lg:px-12 xl:px-16 scrollbar-thin scrollbar-thumb-[#80B61C] scrollbar-track-[#FFFFEE]">
                        <table className="min-w-[700px] sm:min-w-[800px] lg:min-w-[1000px] table-auto border-separate border-spacing-0 border border-[#441D04] w-full mx-auto">
                          <tr>
                            <th className="border border-[#441D04] px-2 py-1 bg-[#80B61C] bold text-3xl hover:bg-[#80B61C]/80 hover:text-zinc-600 transition-all duration-200">What we found</th>
                            <th className="border border-[#441D04] px-2 py-1 bg-[#80B61C] bold text-3xl hover:bg-[#80B61C]/80 hover:text-zinc-600 transition-all duration-200">Status</th>
                            <th className="border border-[#441D04] px-2 py-1 bg-[#80B61C] bold text-3xl hover:bg-[#80B61C]/80 hover:text-zinc-600 transition-all duration-200">Example Insight/Quote</th>
                          </tr>
                          <tr className="hover:bg-[#FFFFEE]/65 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg hover:z-10 relative">
                            <td className="border border-[#441D04] px-2 py-4 bg-[#FFFFEE] transition-all duration-200 ease-in-out text-ellipsis hover:bg-[#CBEA8D] hover:text-[#441D04] hover:border-2 hover:border-[#441D04] hover:font-bold">Partially confirmed because many valued cleaner food, but most prioritized cost and yield first. Residue-free beans are an advantage, but not the main driver.</td>
                            <td className="border border-[#441D04] px-2 py-4 bg-[#FFFFEE] transition-all duration-200 ease-in-out text-ellipsis hover:bg-[#CBEA8D] hover:text-[#441D04] hover:border-2 hover:border-[#441D04] hover:font-bold">Refined</td>
                            <td className="border border-[#441D04] px-2 py-4 bg-[#FFFFEE] transition-all duration-200 ease-in-out text-ellipsis hover:bg-[#CBEA8D] hover:text-[#441D04] hover:border-2 hover:border-[#441D04] hover:font-bold">GCMA analysts: “Yield, price, and time of effectiveness matter most to adoption.”</td>
                          </tr>
                        </table>
                      </div>
                    </CollapseSection>
                    <CollapseSection title="If Phasea include biodegradable components and no live microbes, then non-target organisms
                        and soil health will remain unaffected post-application."
                      backgroundColor="#649026"
                      startExpanded={true}
                    >
                      <div className="overflow-x-auto overflow-y-visible py-8 md:px-8 lg:px-12 xl:px-16 scrollbar-thin scrollbar-thumb-[#80B61C] scrollbar-track-[#FFFFEE]">
                        <table className="min-w-[700px] sm:min-w-[800px] lg:min-w-[1000px] table-auto border-separate border-spacing-0 border border-[#441D04] w-full mx-auto">
                          <tr>
                            <th className="border border-[#441D04] px-2 py-1 bg-[#80B61C] bold text-3xl hover:bg-[#80B61C]/80 hover:text-zinc-600 transition-all duration-200">What we found</th>
                            <th className="border border-[#441D04] px-2 py-1 bg-[#80B61C] bold text-3xl hover:bg-[#80B61C]/80 hover:text-zinc-600 transition-all duration-200">Status</th>
                            <th className="border border-[#441D04] px-2 py-1 bg-[#80B61C] bold text-3xl hover:bg-[#80B61C]/80 hover:text-zinc-600 transition-all duration-200">Example Insight/Quote</th>
                          </tr>
                          <tr className="hover:bg-[#FFFFEE]/65 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg hover:z-10 relative">
                            <td className="border border-[#441D04] px-2 py-4 bg-[#FFFFEE] transition-all duration-200 ease-in-out text-ellipsis hover:bg-[#CBEA8D] hover:text-[#441D04] hover:border-2 hover:border-[#441D04] hover:font-bold">Confirmed because regulators and ethicists stressed biosafety and soil health as key for long-term acceptance; this aligned with our lab design.</td>
                            <td className="border border-[#441D04] px-2 py-4 bg-[#FFFFEE] transition-all duration-200 ease-in-out text-ellipsis hover:bg-[#CBEA8D] hover:text-[#441D04] hover:border-2 hover:border-[#441D04] hover:font-bold">Confirmed</td>
                            <td className="border border-[#441D04] px-2 py-4 bg-[#FFFFEE] transition-all duration-200 ease-in-out text-ellipsis hover:bg-[#CBEA8D] hover:text-[#441D04] hover:border-2 hover:border-[#441D04] hover:font-bold">María del Socorro Rebeles (CEDH): “Every improvement must protect both people and the environment.”</td>
                          </tr>
                        </table>
                      </div>
                    </CollapseSection>

                    <p>
                      Through every conversation, what began as technical assumptions grew into a holistic understanding; Phasea had to
                      fit farmers’ realities, align with cultural practices, and prove its impact not only in the field but in the lives
                      it touches. This is how feedback turned complexity into clarity, and how listening transformed ideas into concrete impact.
                    </p>


                    <div className='bg-[#649026] rounded-4xl w-full h-auto flex flex-row items-center'>
                      <img src='https://static.igem.wiki/teams/5718/human-practices/integrated/bean-thinking.avif' alt='Bean Hypothesis' className='w-1/4 h-auto' />
                      <p className='text-5xl pr-20 text-[#FFFFEE]'>Note: While some hypotheses may require further data analysis, the main goal of our Human Practices work was to understand what truly matters to those involved, allowing us to adapt our approach accordingly. In future stages, this will be strengthened through partnerships and specialized tools to solidify Phasea’s foundation.</p>
                    </div>
                  </div>


                </div>
              </section>

              {/* Section 5 */}
              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12 mx-auto">
                <div className="mb-8 mx-auto">
                  <h2 id="how-we-listened-learned-and-changed-key-insights" className="scroll-mt-32">How we listened, learned and changed: Key insights</h2>
                  <hr />
                </div>

                <div>
                  <p>
                    Phasea’s purpose was built through listening. By identifying <b>valuable insights</b> from our field interviews, we were able to guide decisions across the Lab, Entrepreneurship, Model, and Wiki, ensuring that every step <b>aligned with real-world needs and values</b>. Acting as knowledge brokers, we bridged the gap between scientific research and agricultural practice, translating complex data into accessible tools and practical solutions that farmers could apply directly to manage challenges like anthracnose. This approach allowed us to merge the scientific, the technical, and the human, ensuring that innovation was not only possible, but meaningful and responsible.

                  </p>

                  <p>
                    Through Affinity Mapping, we organized the voices from the field using an <b>insight matrix</b> into five key categories of insight, based on their <b>impact and the changes they inspired</b> across our project. The following insights shaped Phasea to what it is now:
                  </p>

                  <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 items-center">

                    <CollapseSection
                      title="Perception and Adoption of Innovations"
                      backgroundColor="#649026"
                      startExpanded={false}>
                      <p>
                        <img src="https://static.igem.wiki/teams/5718/human-practices/integrated/tabla1.avif" alt="Perception Table" className='w-full h-auto' />
                      </p>
                    </CollapseSection>

                    <CollapseSection
                      title="Crop Management Strategies"
                      backgroundColor="#649026"
                      startExpanded={false}>
                      <p>
                        <img src="https://static.igem.wiki/teams/5718/human-practices/integrated/tabla2.avif" alt="Crop Management Table" className='w-full h-auto' />

                      </p>
                    </CollapseSection>

                    <CollapseSection
                      title="Product Presentation and Accesibility"
                      backgroundColor="#649026"
                      startExpanded={false}>
                      <p>
                        <img src="https://static.igem.wiki/teams/5718/human-practices/integrated/tabla3.avif" alt="Product Presentation Table" className='w-full h-auto' />

                      </p>
                    </CollapseSection>

                    <CollapseSection
                      title="Sustainability and Health"
                      backgroundColor="#649026"
                      startExpanded={false}>
                      <p>
                        <img src="https://static.igem.wiki/teams/5718/human-practices/integrated/tabla4.avif" alt="Sustainability Table" className='w-full h-auto' />

                      </p>
                    </CollapseSection>

                    <CollapseSection
                      title="Socioeconomic Value of Beans"
                      backgroundColor="#649026"
                      startExpanded={false}>
                      <p>
                        <img src="https://static.igem.wiki/teams/5718/human-practices/integrated/tabla5.avif" alt="Socioeconomic Table" className='w-full h-auto' />

                      </p>
                    </CollapseSection>

                  </div>

                  <p>
                    In this way insights from the field have been central to Phasea’s evolution. They shaped every aspect of our work, from experimental design and product formulation to entrepreneurship strategies, ensuring that our solutions respond to the real challenges farmers face. Each piece of feedback, whether about application methods or communication needs, refined our approach and helped transform Phasea from a synthetic biology concept into a practical and meaningful solution.

                  </p>

                  <p>
                    By listening to farmers, suppliers, and regulators, we ensured that Phasea was not built in isolation but in partnership with the communities it serves. Guided by the values of empathy, sustainability, and food security, every decision aimed to create a solution that is feasible, accessible, and socially responsible. Through this process, Phasea has grown into a project that embodies both innovation and collaboration, driven by the needs of those who cultivate the land every day.

                  </p>
                </div>
              </section>
              {/* Section 6 */}
              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12 mx-auto">
                <div className="mb-8 mx-auto">
                  <h2 id="Connecting the Dots" className="scroll-mt-32">Connecting the Dots: Affinity mapping and stakeholder values iGEM </h2>
                  <hr />
                  <p>As mentioned in the previous section, after collecting dozens of interviews and field insights, we needed a way to make sense of it all, to transform scattered information into patterns that could guide our decisions. <b>Affinity Mapping</b> became the bridge between data and design, allowing us to visualize recurring themes, shared priorities, and the values that guided our stakeholders [2].
                  </p>
                  <p>
                    Through this method, we identified key principles such as <b>sustainability, community, empathy, and cooperation</b>, which strongly aligned with Phasea’s mission. At the same time, other values, like <b>unfamiliarity</b> with the agrochemical consequences, revealed deeper systemic challenges that needed to be addressed in our design process.
                  </p>
                  <p>
                    To represent these dynamics, we created a diagram illustrating how stakeholder values and project values intersect. At the center lie the shared values that sustain <b>Phasea: empathy, sustainability, and food security</b>, while the outer areas highlight the tensions that must be acknowledged to ensure inclusivity and long-term impact.
                  </p>

                  <img
                    src="https://static.igem.wiki/teams/5718/human-practices/integrated/values-diagram.avif"
                    alt="Value’s diagram"
                    className="w-full h-auto"
                  />
                  <div className="flex justify-center mt-4">
                    <span className="text-gray-600 text-body">
                      <b>Figure 1. </b>Value’s diagram
                    </span>
                  </div>
                  <p>
                    With this clearer understanding, we began adapting Phasea to directly respond to stakeholder needs. We applied participatory tools such as archetype identification, power–interest matrices, and empathy maps, which allowed us to categorize, prioritize, and deeply understand each group’s perspectives. Farmers, for instance, emphasized that effectiveness must go hand in hand with practicality and affordability, inspiring us to integrate a cost-effectiveness analysis into our entrepreneurship.
                  </p>
                  <img
                    src="https://static.igem.wiki/teams/5718/human-practices/integrated/affinity-mapping.avif"
                    alt="Affinity Mapping"
                    className="w-full h-auto"
                  />
                  <div className="flex justify-center mt-4">
                    <span className="text-gray-600 text-body">
                      <b>Figure 2. </b>Affinity Mapping
                    </span>
                  </div>
                  <p>
                    This iterative process, listening, analyzing, adapting and enabling us to design a solution that is not only scientifically sound but also socially responsible and contextually relevant. By using <b>Affinity Mapping</b>, we ensured that Phasea is not just a solution for today but one that is adaptable and sustainable in the long run, meeting the evolving needs of stakeholders across diverse regions.

                  </p>
                  <CollapseSection
                    title="Socioeconomic Value of Beans"
                    backgroundColor="#649026"
                    startExpanded={false}>
                    <section>
                      <p>
                        The feedback loop is the foundation of our Human Practices approach. It’s a continuous process where we <b>collect, analyze, integrate, and validate</b> information from diverse sources like farmers, researchers, regulators, and community members, to guide our decisions.
                      </p>
                      <p>
                        It served as a way to constantly <b>reflect, adapt, and improve Phasea</b>. Each round of feedback helped us identify new perspectives, refine our design, and ensure that our solution stayed relevant, ethical, and grounded in real needs. Instead of moving in a straight line, our project evolved through iteration, learning from every interaction and translating insights into action.

                      </p>
                      <img
                        src="https://static.igem.wiki/teams/5718/human-practices/integrated/feedbac-cycle.avif"
                        alt="Feedback Cycle"
                        className="w-full h-auto"
                      />
                      <div className="flex justify-center mt-4">
                        <span className="text-gray-600 text-body">
                          <b>Figure 3. </b>Feedback Cycle
                        </span>
                      </div>
                      <p>
                        To see this loop in action we also developed an <b>engineering cycle applied to Human Practices</b> of our most important insight: preventive treatment rather than curative </p>
                      <div className="flex justify-center px-4 sm:px-12 md:px-4 lg:px-2 xl:px-2">
                        <Link to="/engineering" className="bg-[#649026] hover:bg-[#8CC938] text-[#FFFFEE] text-[20px] font-bold py-2 px-6 rounded-full flex items-center justify-center gap-2 w-full md:w-1/2 text-center transition-all duration-200 ease-in-out hover:scale-105">
                          <PiCursorClickDuotone className="w-24 h-auto" />
                          Click here to see our Human Practices Engineering Cycle
                        </Link>
                      </div>
                    </section>
                  </CollapseSection>
                </div>
              </section>

              {/* Section 7 */}
              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12 mx-auto">
                <div className="mb-8 mx-auto">
                  <h2 id="Designing with Values in Mind" className="scroll-mt-32">Designing with Values in Mind: Value Sensitive Design</h2>
                  <hr />
                </div>
                <p>
                  Continuing with the co-design process of Phasea, it was not only essential to define the values driving the project but also to understand the values of our stakeholders to ensure that Phasea not only addressed the problem of anthracnose, but also met their ethical and social concerns. As Halfmann (2022) explains, Value Sensitive Design (VSD) allows for the integration of ethical responsibility in the design process, considering technology as a tool that shapes human interaction, and therefore, we must think about how these values affect the user experience at every stage of the design [3].
                </p>
                <p>
                  The VSD process is based on four key steps:
                </p>
                <img
                  src="https://static.igem.wiki/teams/5718/human-practices/integrated/vsd-process.avif"
                  alt="Value’s diagram"
                  className="w-full h-auto"
                />
                <div className="flex justify-center mt-4">
                  <span className="text-gray-600 text-body">
                    <b>Figure 4. </b>VSD process.
                  </span>
                </div>
                <p>Building on the insights identified through Affinity Mapping, we applied Value Sensitive Design (VSD) to integrate stakeholder values directly into our decision-making process. Rather than simply recognizing shared and conflicting values, this approach helped us translate them into design priorities for Phasea. By addressing tensions such as misinformation or unfamiliarity, and reinforcing positive values like sustainability, empathy, and cooperation, VSD provided a framework for balancing ethical, social, and practical considerations.
                </p>
                <p>
                  The following chart illustrates this balance, showing how the values of Phasea and its stakeholders intersect to shape a solution that is not only scientifically sound but also socially responsive and adaptable to evolving agricultural needs.
                </p>
                <img
                  src="https://static.igem.wiki/teams/5718/human-practices/integrated/value-s-balance.avif"
                  alt="Value’s balance"
                  className="w-full h-auto"
                />
                <div className="flex justify-center mt-4">
                  <span className="text-gray-600 text-body">
                    <b>Figure 5. </b>Value’s balance.
                  </span>
                </div>
                <p>
                  With this understanding of the values and their impact, we were able to make informed decisions. For example, we created clear <b>user guides</b> to improve accessibility, and integrated <b>a cost-benefit analysis</b> to ensure affordability. Throughout this process, participatory methodologies helped us maintain a human-centered approach, ensuring that Phasea was an effective and responsible solution that addresses not only current needs but also the evolving needs of agricultural communities in the future.
                </p>
              </section>

              {/* Section 8 */}
              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12 mx-auto">
                <div className="mb-8 mx-auto">
                  <h2 id="Engaging with Stakeholders" className="scroll-mt-32">Engaging with Stakeholders: Close the Loop</h2>
                  <hr />
                </div>
                <p>Thanks to the journey that led us here, from listening and learning to designing with purpose, we reached the most meaningful stage of our Human Practices work: <b>giving back to the community that inspired Phasea.</b>
                </p>
                <p>
                  Engaging with stakeholders has never been a one-way exchange. Through continuous dialogue, feedback loops, and strategic partnerships, we co-designed Phasea to address the real needs of the agricultural community, fostering trust, collaboration, and <TooltipAssemble title='María del Socorro Reveles' paragraph='"No one rejects their own ideas" by involving communities in the design and decision-making process you generate ownership of the solution.' img='https://static.igem.wiki/teams/5718/entrepreneurship/tooltips/maria-del-socorro-ethicist.avif' low={false} Dectext={false}>shared ownership of the project</TooltipAssemble>. This process reflects the heart of Human Practices, <b>a cycle of giving and receiving</b>. We learned from those who live with the problem, and in turn, we aimed to leave something valuable behind, a tool, an idea, or simply knowledge that empowers them to keep growing. Phasea is not only a scientific achievement; it is a shared effort built on empathy, trust, and collaboration with the agricultural community.
                </p>
                <CollapseSection
                  className='pb-5'
                  title="ExpoAgro Chihuahua"
                  backgroundColor="#649026"
                  startExpanded={false}>
                  <br />
                  <h4><b>Our Participation in ExpoAgro Chihuahua 2025</b></h4>
                  <p>ExpoAgro Chihuahua 2025 became a true meeting point between science and the agricultural community. By joining efforts with <b>Sistema Producto Frijol</b>, we gained a platform to <b>showcase Phasea</b> directly to farmers, experts, and organizations, through the projection of our Promotion Video. This exchange allowed us to validate our proposal in a real-world setting, adapt our message to the local context, and <b>build trust</b> with the people who will ultimately benefit from our solution.</p>
                  <br />
                  <h4><b>What is ExpoAgro Chihuahua?</b></h4>
                  <p>Held on September 11th and 12th, ExpoAgro Chihuahua is one of the most important agri-food events in Mexico and Latin America as part of the Global Agroalimentary Forum. Organized by the Gobierno del Estado de Chihuahua, the Consejo Nacional Agropecuario (CNA), and the Consejo Estatal Agropecuario de Chihuahua (CEACH), the forum gathered more than <b>6,000 attendees from over 40 countries</b> [4]. For us, it was not just an exhibition, it was an opportunity to present Phasea to those who face agricultural challenges every day, while continuing a tradition of iGEM teams from Chihuahua who have participated in past editions. </p>
                  <br />
                  <h4><b>Why did it matter to us?</b></h4>
                  <p>Participating in ExpoAgro gave us far more than visibility. It placed us in direct conversation with farmers, industry leaders, and policymakers, the very people who will use or regulate our solution. Some of them whom we had previously been in contact with and who gave us valuable feedback on issues such as affordability, competitiveness, and environmental safety guiding us to refine Phasea beyond the laboratory. For our team, this event was not only about showcasing innovation, but about listening, learning, and ensuring that Human Practices remained at the core of our work.
                  </p>

                  <img
                    src="https://static.igem.wiki/teams/5718/human-practices/integrated/expoagro.avif"
                    alt=" PHASEOS team during our participation in ExpoAgro Chihuahua 2025"
                    className="w-full h-auto"
                  />
                  <div className="flex justify-center mt-4">
                    <span className="text-gray-600 text-body">
                      <b>Figure 6. </b> PHASEOS team during our participation in ExpoAgro Chihuahua 2025
                    </span>
                  </div>
                  <br />
                  <h4><b>What we offered</b></h4>
                  <p>At ExpoAgro, we introduced Phasea as a sustainable and effective alternative to traditional fungicides. Emphasizing on innovation with responsibility, we showed how Phasea is being shaped through a co-design process with continuous farmer feedback. With the support of Sistema Producto Frijol, we displayed our presentation video at their stand, a space of great relevance within the sector. To ensure accessibility and a good level of understanding from the attendees, we adapted it to Spanish, allowing the local community to connect more easily with our proposal. This collaboration reflected a shared commitment, recognizing beans as an essential food for Mexico and the world, and promoting sustainable solutions that strengthen the entire value chain.
                  </p>
                  <br />
                  <h4><b>Listening and Learning from the Agricultural Ecosystem</b></h4>
                  <p>Throughout the event, we immersed ourselves in the dynamics of the sector from different perspectives. We attended the culinary competition organized by Sistema Producto Frijol, where we interviewed participants, like <TooltipAssemble title='Sofía Duarte' paragraph='“I grew up watching how my mother’s family planted beans, it’s a beautiful work and that’s where all these dishes come from”.' img='https://static.igem.wiki/teams/5718/entrepreneurship/tooltips/sofia-duarte-preservationist.avif' low={false} Dectext={false}>Sofía Duarte</TooltipAssemble>, who shared their inspiration, stories and insights about the cultural and nutritional importance of beans. This reflection highlighted how deeply beans are tied not only to agriculture, but also to nutrition, culture, and daily life.</p>

                  <p>
                    We also reconnected with producers we had previously interviewed, such as Ing. Fernando Fernández and the Sistema Producto Frijol president Hernán Hernández. This way strengthening the relationship with those who had already contributed to our validation process and sharing with them the changes adopted thanks to their insights.

                  </p>

                  <p>We established meaningful interactions with key stakeholders such as:</p>
                  <img
                    src="https://static.igem.wiki/teams/5718/human-practices/integrated/key-lessons.avif"
                    alt="Key lessons."
                    className="w-full h-auto"
                  />
                  <div className="flex justify-center mt-4">
                    <span className="text-gray-600 text-body">
                      <b>Figure 7. </b> Key lessons.
                    </span>
                  </div>
                  <p>For us, ExpoAgro was not an isolated milestone but part of a long-term commitment to co-design Phasea with the people who live agriculture every day. The relationships built here will guide our next steps, refining our solution technically, aligning with regulations, and ensuring that innovation translates into real impact for farmers, communities, and the future of sustainable agriculture.
                  </p>

                  <p>
                    At the same time, <b>this experience allowed us to give something back</b>, sharing scientific knowledge in an accessible way, promoting sustainable practices, and opening spaces for dialogue where local <b>voices could be heard and valued</b>. In doing so, ExpoAgro became not only a platform for learning, but a true exchange, where <b>both the community and our team grew together</b>.

                  </p>
                </CollapseSection>

                <CollapseSection
                  title="Chihuahua TechWeek"
                  backgroundColor="#649026"
                  startExpanded={false}>
                  <br />
                  <h4><b>Our Participation in Chihuahua TechWeek 2025</b></h4>

                  <p>Chihuahua Tech Week is the first large-scale technology week in the state of Chihuahua. More than <b>70 events take place simultaneously</b> under a collective impact agenda that promotes science, technology, and innovation across the region. This initiative reflects the power of <b>strategic communication and cross-sector collaboration within the local ecosystem</b>.
                  </p>
                  <img
                    src="https://static.igem.wiki/teams/5718/human-practices/integrated/chihuahua-tech-week.avif"
                    alt=" PHASEOS team during our participation in Chihuahua Tech Week 2025."
                    className="w-full h-auto"
                  />
                  <div className="flex justify-center mt-4">
                    <span className="text-gray-600 text-body">
                      <b>Figure 8. </b>  PHASEOS team during our participation in Chihuahua Tech Week 2025.
                    </span>
                  </div>

                  <div className='bg-[#649026] rounded-4xl w-full h-auto flex flex-row items-center'>
                    <img src='https://static.igem.wiki/teams/5718/human-practices/integrated/bean-participate.avif' alt='Bean TechWeek' className='w-1/4 h-auto' />
                    <p className='text-5xl pr-20 text-[#FFFFEE]'>On September 20, at Parque Tecnológico Orión, our team organized and held an event focused on sustainable agriculture. For us, it was not only an opportunity to present Phasea, but also to promote the transfer of knowledge and technology by strengthening collaboration among actors in the bean value chain and the broader agricultural industry, ultimately supporting the creation of solutions that are meaningful and relevant to the communities involved.</p>
                  </div>

                  <p>Our team aimed to <b>foster collaboration</b> among stakeholders, creating a space for <b>interdisciplinary exchange</b> that could lead to future partnerships. By bringing together diverse perspectives, we sought to build a more comprehensive and integrated understanding of the challenges and opportunities within agriculture and sustainability.</p>
                  <br />
                  <h4><b>Why did it matter to us?</b></h4>
                  <p>Participating in Chihuahua Tech Week was key to closing the feedback loop with stakeholders we had previously interviewed, while also expanding our connections with new sectors. This allowed us to:
                  </p>
                  <div className='flex flex-col items-center justify-center gap-5'>
                    <div className='rounded-2xl bg-[#649026] p-4'>Recieve direct feedback on Phasea's adaptability and impact.</div>
                    <div className='rounded-2xl bg-[#649026] p-4'>Strengthen strategic partnership between and with producers, regulators and distributors.</div>
                    <div className='rounded-2xl bg-[#649026] p-4'>Validate Phasea not only as a scientific innovation, but as a recognized project within the regional and international innovation ecosystem</div>
                  </div>

                  <p>Most importantly, we demonstrated that a student-led synthetic biology project can evolve into a validated initiative with tangible local and global impact. Phasea, together with previous iGEM Tec-Chihuahua projects such as <b>Zymetec</b> and <b>Aureobos</b>, has been officially incorporated into Chihuahua’s portfolio of validated technological units [5], <b>solidifying our role as part of the region’s innovation strategy</b> and proving the long-term value of student-driven research. </p>
                  <br />
                  <h4><b>What we offered:</b></h4>
                  <p>Our event during Chihuahua Tech Week was designed to foster collaboration and dialogue among key stakeholders by combining spaces of awareness, co-creation and sharing of knowledge with the objective of shaping solutions that address real needs. The activities were structured into four main phases: </p>
                  <ul className='list-disc'>
                    <li>Firstly, an interactive talk on sustainability, soil health and disease prevention and treatment.</li>
                    <li>Followed by three main activities: Value chain collaborative mapping, dialogue and co-creation tables, where participants discussed agricultural challenges and opportunities, and final reflections on the difficulty and impact sustainability can have to positively contribute to a better future. </li>
                  </ul>
                  <img className='w-full h-auto' src="https://static.igem.wiki/teams/5718/human-practices/integrated/interactive-talk.avif" alt="Interactive Talk on Sustainable Agriculture" />
                  <br />
                  <h4><b>Value chain collaborative mapping </b></h4>
                  <p>Each participant received a color-coded post-it based on their role (producers, distributors, researchers, NGOs, consumers, students). They were asked to write:</p>
                  <img
                    src="https://static.igem.wiki/teams/5718/human-practices/integrated/co-design-activities.avif"
                    alt=" Co- Design activities ."
                    className="w-full h-auto"
                  />
                  <div className="flex justify-center mt-4">
                    <span className="text-gray-600 text-body">
                      <b>Figure 9. </b>  Co- Design activities.
                    </span>
                  </div>
                  <p>
                    The results revealed shared concerns such as distrust in food quality  <b><i>“I don’t trust what I eat, even if it says organic”</i></b>, indiscriminate use of agrochemicals, water scarcity, soil infertility, and weaknesses in distribution systems. The goals included ensuring food equality, improving access to technology, efficient use of water, and incorporating biotechnological tools. Phasea was designed to respond to this reality, a transparent and reliable biofungicide that restores trust in what we grow and eat; an alternative that protects soil, and that serves as a bridge between producers and consumers to ensure that no one is left out of the journey from field to table. More than a synthetic biology solution, Phasea is a commitment to the countryside and to common beans, the crop that has nourished Mexico and the world for generations, and which we now defend.

                  </p>
                  <br />
                  <h4><b>Co-creation tables: Agricultural Challenges and Opportunities </b></h4>
                  <p>
                    Divided in mixed groups (researchers, consumers, producers, regulators), participants discussed the problems identified in the previous activity with their respective tables and wrote down which problems they considered most relevant as a team and ordered them by priority. Then, they did this same process for the opportunities they see in the agricultural industry in order to introduce sustainable technologies.
                  </p>
                </CollapseSection>
                <img
                  src="https://static.igem.wiki/teams/5718/human-practices/integrated/co-creation-tables.avif"
                  alt=" Co- creation tables"
                  className="w-full h-auto"
                />
                <div className="flex justify-center mt-4">
                  <span className="text-gray-600 text-body">
                    <b>Figure 10. </b>  Co- creation tables
                  </span>
                </div>

                <div className="flex justify-center px-4 sm:px-12 md:px-4 lg:px-2 xl:px-2">
                  <a href='https://static.igem.wiki/teams/5718/human-practices/integrated/co-creation-tables.avif' className="bg-[#649026] hover:bg-[#8CC938] text-[#FFFFEE] text-[20px] font-bold py-2 px-6 rounded-full flex items-center justify-center gap-2 w-full md:w-1/2 text-center transition-all duration-200 ease-in-out hover:scale-105">
                    <PiCursorClickDuotone className="w-24 h-auto" />
                    Click to see the answers in English
                  </a>
                </div>

                <p>In these activities, we witnessed how <b>diversity of perspectives enriches, but also challenges</b> the process of building solutions. Producers, researchers, consumers, and distributors agreed that the main challenges of agriculture are poor planning in cultivation, weak disease identification, water scarcity, limited financing, and low food education. At the same time, <b>clear opportunities emerged</b>, bringing sustainable technologies closer to farmers, incentivizing research, promoting campaigns to increase bean consumption, innovating, and opening export markets. </p>

                <p>
                  In one of the tables, participants even <b>entered into debate</b> about whether these new biological solutions are truly safe and necessary. This exchange revealed that trust is just as important as science. These conversations confirmed for us <b>that the only way to achieve lasting change is through multidisciplinarity</b>, where every voice from producer to consumer can bring a new perspective while designing solutions.

                </p>
                <br />
                <h4><b>Reflection on impact and difficulty </b></h4>
                <p>During this activity participants were asked to dialogue and evaluate the difficulty and impact of implementing sustainability in agriculture.</p>
                <img
                  src="https://static.igem.wiki/teams/5718/human-practices/integrated/reflection-impact-and-difficulty.avif"
                  alt="  Reflection on impact and difficulty."
                  className="w-full h-auto"
                />
                <div className="flex justify-center mt-4">
                  <span className="text-gray-600 text-body">
                    <b>Figure 11. </b>   Reflection on impact and difficulty.
                  </span>
                </div>

                <p>
                  The conclusion was clear, yes, there are significant barriers such as climate change, lack of financing, or rigid regulations, but <b>everyone agreed that sustainability is no longer optional</b>, it is an urgent necessity. A very meaningful moment occurred when Sergio Rodríguez hesitated about where to place his point in the <b>Impact vs. Difficulty Map</b>. He acknowledged that these solutions have enormous impact in the field, but also that their adoption depends heavily on producers’ individual conditions. At that moment, Leonel Altamirano encouraged him to see the situation from another perspective, helping him understand that <b>although difficulty is high, collaboration and support can pave the way</b>. This exchange symbolized the essence of the entire event, that beyond obstacles, the positive impact of sustainability is undeniable, improving productivity without destroying the soil and restoring trust in the food that reaches our tables. For Phasea, this perception is a call to act with responsibility and perseverance, proving that synthetic biology can overcome barriers and become a real tool for change for farmers, consumers, and entire communities.

                </p>
                <br />
                <h4><b>Listening and Learning from the Agricultural Ecosystem</b></h4>
                <p>From our event, two main lessons emerged: </p>
                <img
                  src="https://static.igem.wiki/teams/5718/human-practices/integrated/key-lessons-chtw.avif"
                  alt="Key lessons from collaboration in CHTW."
                  className="w-full h-auto"
                />
                <div className="flex justify-center mt-4">
                  <span className="text-gray-600 text-body">
                    <b>Figure 12. </b>Key lessons from collaboration in CHTW.
                  </span>
                </div>
                <p>
                  Beyond these general conclusions, the direct feedback from participants gave our reflection an even deeper dimension. We know that what is not measured cannot be improved, which is why at the end <b>we applied a questionnaire</b> and where participants highlighted the <b>dialogue tables as the most valuable activity</b>, since they were the space where discussions led to questioning of food choices, where safety of synthetic biology based solutions was debated, and where concrete ways to protect the soil were explored. When asked about the importance of sustainability in agriculture, participants gave it the highest score, confirming that it is no longer optional but an urgent necessity.

                </p>

                <div className='bg-[#649026] rounded-4xl w-full h-auto flex flex-row items-center'>
                  <img src='https://static.igem.wiki/teams/5718/human-practices/integrated/bean-each.avif' alt='Bean Smart' className='w-1/4 h-auto' />
                  <p className='text-5xl pr-20 text-[#FFFFEE]'>Finally, each participant left with a personal commitment, which some shared outloud, from spreading awareness about the nutritional value of common beans and promoting food self-sufficiency in communities, to supporting renewable low-cost technologies and leveraging synthetic biology in favor of agriculture.</p>
                </div>
                For us as PHASEOS, this was the clearest validation, our work not only respond to technical and agricultural needs, but also <b>connects with the aspirations of a community ready to collaborate in building a more sustainable, fair, and resilient agriculture.</b>
              </section>

              {/* Section 8 */}
              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12 mx-auto">
                <div className="mb-8 mx-auto">
                  <h2 id="What We Heard Most" className="scroll-mt-32">What We Heard Most: Our Word Cloud</h2>
                  <hr />
                </div>
                <p>Through our interviews and interactions, certain words began to repeat themselves, revealing not only the challenges of the agricultural sector but also the values and emotions that sustain it. To visualize this, we created a <b>word cloud</b>, where the size of each term reflects its frequency and importance among the voices we heard. [6].</p>
                <img
                  src="https://static.igem.wiki/teams/5718/human-practices/integrated/what-we-heard-most.avif"
                  alt="WordCloud."
                  className="w-full h-auto"
                />
                <div className="flex justify-center mt-4">
                  <span className="text-gray-600 text-body">
                    <b>Figure 13. </b>What we heard most.
                  </span>
                </div>
                <p>
                  These recurring terms provided us with a deeper understanding of the <b>complexities</b> and realities of bean farming, but also revealed the <b>profound connection</b> between the agricultural community and their land. Actively listening to these words, and to the people behind them, we learned that beans are not just a crop; they are a staple of life, a cultural and nutritional foundation for millions.

                </p>
                <img src='https://static.igem.wiki/teams/5718/human-practices/integrated/bean-puente.avif' className='float-right w-1/4 h-auto' alt='Bean on a bridge'></img>
                <p>
                  For these farmers, <b>the struggle goes beyond disease or fungicides</b>; it is tied to climate uncertainty, limited government support, and the economic pressures that weigh heavily on each harvest. Sustainability emerged as a key concern, with many hoping for environmentally safe alternatives to replace harmful chemicals, though challenges like limited access, costs, and lack of information remain.
                </p>
                <p>Yet, this exchange was not one-sided. As we listened and learned, we also <b>helped connect people and knowledge</b>. During our participation in <b>Chihuahua Tech Week</b>, farmers met researchers, distributors and regulators. These encounters sparked <b>networks of collaboration and trust that now strengthen the agricultural sector beyond our project</b>. The Word Cloud thus became more than a visualization, it became a <b>reflection of a living dialogue between science and community</b>. It reminded us that Phasea’s role is not only to fight disease but to empower farmers through solutions that are accessible, sustainable, and culturally grounded.

                </p>
              </section>

              {/* Section 9 */}
              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12 mx-auto">
                <div className="mb-8 mx-auto">
                  <h2 id="Growing Forward" className="scroll-mt-32">Growing Forward: Future plans in Human</h2>
                  <hr />
                </div>
                <p>We understand that Phasea alone cannot address the entire challenge. Therefore, it is essential to develop tools that encompass each key step of the bean value chain while supporting stakeholders from sowing and treatment to harvest and distribution. As we observed in the events we participated in, and even within our team, achieving this approach is only possible through active collaboration with representatives from across the entire bean value chain <b>reaching a collective impact</b></p>
                <b>Seeds of knowledge: Sharing what we learned</b>
                <img src="https://static.igem.wiki/teams/5718/human-practices/integrated/bean-manual.avif" alt="Farmer Bean" className='w-1/4 h-auto float-right' />
                <p>
                  As part of this effort we developed a <b>visual manual</b> directed to producers and distributors to facilitate the prevention, detection and treatment of anthracnose. Which we shared with stakeholders such as producer Willy Ordoñez, distributor Sergio Rodríguez and <TooltipAssemble title='Sebastián Alzate' paragraph='He explained that the key is building scientific solutions that do not remain in the laboratory, but actually reach the soil, the hands, and the lives of those who plant the future of agriculture every single day.' img='https://static.igem.wiki/teams/5718/entrepreneurship/tooltips/sebastian-alzate-agronomist-from-antioquia-colombia.webp' low={false} Dectext={false}>Sebastián Alzate</TooltipAssemble>, who had previously shown interest in distributing our visual manual with the community of producers he has built through his channel “Tu Agrónomo Virtual” (Your Virtual Agronomist). Furthermore, we plan to <b>distribute this manual</b> with our stakeholders and new actors we may identify in the future, ensuring that every person who it reaches, is informed about how to <b>prevent, detect and treat anthracnose, this way reducing incidence and unnecessary use of inadequate treatment</b> for the disease. This visual manual was the result of producer, researcher, distributor and ethicist feedback, who, like us, knew and expressed the importance of acting as <b>knowledge brokers between science and farmers</b>.
                </p>
                <div className="flex justify-center px-4 sm:px-12 md:px-4 lg:px-2 xl:px-2">

                  <a href="https://www.canva.com/design/DAG0YSQRdCg/jwRcUF5BglmHbsre1ucFbA/edit?utm_content=DAG0YSQRdCg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" className="bg-[#649026] hover:bg-[#8CC938] text-[#FFFFEE] text-[20px] font-bold py-2 px-6 rounded-full flex items-center justify-center gap-2 w-full md:w-1/2 text-center transition-all duration-200 ease-in-out hover:scale-105">
                    <PiCursorClickDuotone className="w-24 h-auto" />
                    Click here to see our Visual Manual
                  </a>
                </div>
                <b>Our proposal: Uniting Knowledge, People, and Innovation </b>
                <p>Committed to creating meaningful change, we are preparing to explore the opportunity for a <b>collaborative proposal with SADER</b> (Secretaria de Agricultura y Desarollo Rural). This institution, responsible for promoting the development of Mexican agriculture, plays a key role in innovation and driving policies that benefit producers and the agro-industry as a whole.
                </p>
                <img src="https://static.igem.wiki/teams/5718/human-practices/integrated/bean-sader.avif" alt="Scientific Bean" className='w-1/4 h-auto float-right' />
                <p>
                  This proposal was born from the interactions and active participation of our stakeholders, who showed us firsthand how <b>creating spaces for dialogue enriches innovation.</b> Through these connections, we witnessed the power of bringing diverse voices together and the impact it can have on generating real solutions.

                </p>
                <p>
                  In this context, we propose the creation of a <b>collaborative cluster</b> involving academia, government, and industry to co-design strategies, develop sustainable solutions, and share best practices that <b>strengthen the agricultural sector</b>. More than driving innovation, this initiative, along with our visual manual, represents the <b>closing of our Human Practices loop, giving back the knowledge, tools, and connections to the very community that inspired their creation</b>.

                </p>
                <div className="flex justify-center px-4 sm:px-12 md:px-4 lg:px-2 xl:px-2">

                  <a href="https://static.igem.wiki/teams/5718/human-practices/integrated/propuesta-sader-cl-ster-agr-cola.pdf" className="bg-[#649026] hover:bg-[#8CC938] text-[#FFFFEE] text-[20px] font-bold py-2 px-6 rounded-full flex items-center justify-center gap-2 w-full md:w-1/2 text-center transition-all duration-200 ease-in-out hover:scale-105">
                    <PiCursorClickDuotone className="w-24 h-auto" />
                    Click here to see the detailed description of our Cluster Proposal
                  </a>
                </div>
              </section>

              {/* Section 10 */}
              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12 mx-auto">
                <div className="mb-8 mx-auto">
                  <h2 id="What we reflected on" className="scroll-mt-32">What we reflected on: Personal team reflections</h2>
                  <hr />
                </div>
                <p>
                  Through our Integrated Human Practices journey, we made sure Phasea was not just designed for communities, but with them. By listening, iterating, and co-creating, we answered iGEM’s central question: our project is both responsible and good for the world.
                </p>
                <p>Reflecting on our journey as a team, <b>we recognize how much we've grown; both as individuals and as a collective</b>. The process of developing Phasea has not only been about synthetic biology innovation, but also about <b>learning from each other</b> and from the many stakeholders we've interacted with. In this part, we reflect on the lessons we’ve learned, the challenges we've faced, and the insights that have shaped us along the way. These reflections not only highlight what worked well, but also what didn’t, helping us better understand how we can improve and continue to grow in the future.</p>


                <div className="mt-8">
                  <CollapseSection
                    title="How Each Stakeholder Powers Phasea & What They Gain"
                    backgroundColor="#649026"
                    textColor="#FFFFEE"
                    borderRadius="12px"
                    startExpanded={false}
                    img="https://static.igem.wiki/teams/5718/general/logo-img-ph-pearl.webp"
                  >
                    <div className="flex flex-col gap-10">
                      <div className="flex items-start space-x-4 gap-10 flex-col">
                        <div>
                          <img src="https://static.igem.wiki/teams/5718/human-practices/integrated/daniela.avif" className="flex float-left w-xs" />
                          <h3 className="text-h3bold mb-2">Daniela Ponce:</h3>
                          <p>
                            <b>Personal Reflection and Learning</b>: Participating in this project was an enriching experience that allowed me to apply classroom and laboratory knowledge in a real-world context, gain a deeper understanding of people’s needs, and strengthen skills such as communication, empathy, critical thinking, and teamwork, always maintaining a focus on social impact.

                          </p>
                          <p>
                            <b>Impact of Chihuahua Tech Week and ExpoAgro</b>: These events were key to the development of the project, as they brought us directly closer to the people experiencing the issues firsthand. Listening to their experiences enabled us to contrast our hypotheses with reality and adapt our approach to make it more human, practical, and relevant, while also fostering collaborative learning and team feedback.
                          </p>
                          <p>
                            <b>Advice for Future Teams</b>:  It is essential to move beyond the theoretical level and engage with the target audience to understand their real context. Participating in events and spaces for direct interaction enriches projects and increases their potential impact by ensuring solutions remain relevant and people-centered.
                          </p>
                        </div>
                        <div>
                          <img src="https://static.igem.wiki/teams/5718/human-practices/integrated/paco.avif" className="flex float-left w-xs" />
                          <h3 className="text-h3bold mb-2">Paco Huerta:</h3>
                          <p>
                            <b>Personal Reflection and Learning</b>: Thanks to this event we were able to further develop areas in our project in order to make a positive impact among our future customers. This experience not only allowed us to understand their views  but also helped us bond with them

                          </p>
                          <p>
                            <b>Impact of Chihuahua Tech Week and ExpoAgro</b>: It was thanks to this event that we were able to further impact and improve our solution by adapting to the needs of our customers via interviews and discussions which allowed us to receive crucial feedback.
                          </p>
                          <p>
                            <b>Advice for Future Teams</b>:  Viewing the problems of the people is not enough nowadays, a deep thorough research is required in order to develop a solution that addresses their needs while maintaining a friendly environment which looks for the customers wellbeing rather than constant solutions.
                          </p>
                        </div>
                        <div>
                          <img src="https://static.igem.wiki/teams/5718/human-practices/integrated/amada.avif" className="flex float-left w-xs" />
                          <h3 className="text-h3bold mb-2">Amada García:</h3>
                          <p>
                            <b>Personal Reflection and Learning</b>: Being part of this team pushed me far beyond my comfort zone, getting to know laboratory work, analytical processes, and building a large-scale front-end project from scratch with our own vision. I discovered how technology, business, and social impact intertwine when building something tangible, learning about entrepreneurship, market validation, and user needs. Working with such a committed team taught me that success happens when we leverage everyone's unique strengths through good communication, and managing tight deadlines significantly improved my resilience and organizational skills.


                          </p>
                          <p>
                            <b>Impact of Chihuahua Tech Week and ExpoAgro</b>: After months of investigating and connecting with agricultural stakeholders through visits and interviews, ExpoAgro made me feel truly part of this community, seeing all these people from the sector gathered in one place motivated me to push our project out of the lab and into real hands. Chihuahua Tech Week revealed the incredible entrepreneurial energy in our city around sustainability, agriculture, and technology, making me realize we're more connected globally than I thought. Both events, especially ExpoAgro with the Global Agri-Food Forum 2025 that involved companies with international reach and world-class speakers from different countries, helped me appreciate and embrace my local community while understanding our potential to contribute globally.

                          </p>
                          <p>
                            <b>Advice for Future Teams</b>:  Participate in events, or host them, where you can interact with people living the problems firsthand. These opportunities give you essential social awareness and a deep understanding of your environment if you want to create real impact. Don’t stay in the theoretical bubble; the contrast between what you think the problem is and what it actually is can be huge, and that reality check is invaluable for building something that truly matters.

                          </p>
                        </div>
                        <div>
                          <img src="https://static.igem.wiki/teams/5718/human-practices/integrated/jesus.avif" className="flex float-left w-xs" />
                          <h3 className="text-h3bold mb-2">Jesus Herrera:</h3>
                          <p>
                            <b>Personal Reflection and Learning</b>: Being part of this project was one of the most meaningful learning experiences I’ve had so far. It taught me how real impact comes from understanding people first, not just from technical knowledge. Working alongside such a diverse and passionate team made me appreciate how different perspectives can merge into one shared purpose. I also learned to value communication and patience, especially when things didn’t go as planned, and to trust the process even when results took time. This experience reminded me that science is not only about experiments or results, but also about empathy, collaboration, and perseverance. Additionally, it gave me the opportunity to learn new tools and methods that I’m sure will be useful for future projects, both academic and professional.


                          </p>
                          <p>
                            <b>Impact of Chihuahua Tech Week and ExpoAgro</b>: Both events gave our project a sense of reality that’s impossible to achieve from behind a desk. Talking directly with farmers, entrepreneurs, and organizations opened my eyes to the real challenges behind agricultural production. Hearing their stories made our project feel more grounded and necessary. ExpoAgro showed me the human side of agriculture (people working tirelessly despite the difficulties) while Chihuahua Tech Week connected us to innovation and made me see how our work fits within a broader technological movement. Together, these experiences reinforced the importance of linking research with the community it aims to serve.
                          </p>
                          <p>
                            <b>Advice for Future Teams</b>:  Don’t be afraid to step outside the lab or the classroom. The best insights come from conversations, not just data. Take every opportunity to listen to others, to observe, and to ask questions, even simple ones. Stay curious, stay humble, and remember that progress often starts with empathy. If you truly understand the people you want to help, your project will naturally find its purpose and direction.
                          </p>
                        </div>
                        <div>
                          <img src="https://static.igem.wiki/teams/5718/human-practices/integrated/pris.avif" className="flex float-left w-xs" />
                          <h3 className="text-h3bold mb-2">Priscila Vargas:</h3>
                          <p>
                            <b>Personal Reflection and Learning</b>: Working on this project not only gave me many technical learnings about laboratory work and applied synthetic biology, but it also provided me with significant personal growth in how to work as part of a team to achieve our common goal. It challenged me and showed me that I am capable of accomplishing many things. Above all, having the opportunity to interact with the people directly involved in our problem motivated me to keep working on creating new solutions for real-world issues, and it was a great source of inspiration to complete the project.


                          </p>
                          <p>
                            <b>Impact of Chihuahua Tech Week and ExpoAgro</b>: These events were key to the project, as they allowed us to broaden our perspective and listen to the people who are experiencing the problem firsthand. It was very rewarding to see how the effort we put into planning the events paid off, since we had very interesting conversations with many people. It gave us a closer understanding of what people experience in their daily lives with this issue and helped us gain a much deeper comprehension of the project.

                          </p>
                          <p>
                            <b>Advice for Future Teams</b>:  Although researching the issue gives you a certain level of understanding, it does not compare to directly talking with someone who is experiencing it. These conversations are highly valuable because they allow you to see and understand many things that you would not initially consider. Therefore, a strong recommendation is to participate in these kinds of events that facilitate such communication.

                          </p>
                        </div>
                        <div>
                          <img src="https://static.igem.wiki/teams/5718/human-practices/integrated/mariana.avif" className="flex float-left w-xs" />
                          <h3 className="text-h3bold mb-2">Mariana Rodriguez:</h3>
                          <p>
                            <b>Personal Reflection and Learning</b>: Throughout the project I had the opportunity to learn a lot from people with very diverse backgrounds. Listening to their stories not only broadened my perspective on the issue but also taught me the value of approaching challenges with empathy. What made our work so special was being part of a multidisciplinary team, where different skills and viewpoints came together to create something stronger than any of us could have achieved alone. This experience strengthened my communication, organizational, adaptability and leadership skills leaving me with lessons that will continue to guide me beyond iGEM.


                          </p>
                          <p>
                            <b>Impact of Chihuahua Tech Week and ExpoAgro</b>: These events were a very important part of the development of our project and for me as a person. They pushed me beyond my comfort zone by challenging me to plan and coordinate activities that brought together people who might not otherwise share the same space. In doing so, we created opportunities for enriching debates and meaningful knowledge exchange. I learned the importance of bridging the gap between science and people by acknowledging their voices and needs as the foundation for designing innovative and responsible solutions.

                          </p>
                          <p>
                            <b>Advice for Future Teams</b>:  Participating in this project can be the trampoline that helps you grow personally just as much as professionally. Connect deeply with your team, effective communication is key. Be brave enough to try different things and reach out to people, as networking can be a turning point in your project’s journey. Remember that the technical aspect is not everything, don’t lose sight of the people for whom you are developing a solution, focus on a human-centered approach, and embrace mistakes as part of the learning process.


                          </p>
                        </div>
                        <div>
                          <img src="https://static.igem.wiki/teams/5718/human-practices/integrated/esteban.avif" className="flex float-left w-xs" />
                          <h3 className="text-h3bold mb-2">Esteban Hernández:</h3>
                          <p>
                            <b>Personal Reflection and Learning</b>: Seeing the wide range of events taking place, the number of projects focused on real solutions, and the quality of people you meet and connect with truly motivates you to keep improving, whether it’s your project, technology, or innovation. It also gave us a clearer understanding of how the real world works and allowed us to learn from the best projects, both at a local and global level.



                          </p>
                          <p>
                            <b>Impact of Chihuahua Tech Week and ExpoAgro</b>: This event allowed us to better understand the perspectives of people facing local, everyday challenges. It gave us the opportunity to envision our project as a truly useful tool for them, while listening to their experiences to refine our impact. Beyond improving the project itself, this experience provided a more human and collaborative connection with the very people we aim to serve.


                          </p>
                          <p>
                            <b>Advice for Future Teams</b>: Being able to participate in different events, create your own, and evaluate them fosters a much more human and participatory connection, not only with the people around you but also within your own team. Moreover, the potential you discover in both individuals and projects plays a key role in driving personal growth as well as the development of the project itself.


                          </p>
                        </div>
                        <div>
                          <img src="https://static.igem.wiki/teams/5718/human-practices/integrated/julia.avif" className="flex float-left w-xs" />
                          <h3 className="text-h3bold mb-2">Julia Roldán :</h3>
                          <p>
                            <b>Personal Reflection and Learning</b>: This project was a transformative experience that showed me the true meaning of applied research: connecting science with real world needs. I learned that negative results are not failures but valuable insights, reinforcing the importance of rigor, documentation, and integrity. Teamwork under time pressure strengthened my communication, problem solving, and adaptability skills, while also teaching me that research is an iterative, evolving process.


                          </p>
                          <p>
                            <b>Impact of Chihuahua Tech Week and ExpoAgro</b>: These events reshaped our perspective by immersing us in the agricultural ecosystem and innovation networks. We gained first hand understanding of farmers’ challenges economic, cultural, and technological and received feedback that refined both our technical protocols and communication strategy. They reminded us that research must stay relevant, accessible, and in dialogue with society.

                          </p>
                          <p>
                            <b>Advice for Future Teams</b>:  Embrace uncertainty, document everything, and value both successes and failures. Maintain scientific rigor while adapting to evidence, and engage early with the target community through outreach and dialogue. Above all, cultivate humility knowledge advances not only through confirmed results but also through discarded hypotheses.
                          </p>
                        </div>
                        <div>
                          <img src="https://static.igem.wiki/teams/5718/human-practices/integrated/vale.avif" className="flex float-left w-xs" />
                          <h3 className="text-h3bold mb-2">Valeria Sánchez::</h3>
                          <p>
                            <b>Personal Reflection and Learning</b>: iGEM taught me much more than synthetic biology. It taught me to believe in myself, to never give up when things didn’t go as expected, and to find joy even in the chaotic moments of the lab. I learned the value of working with people who share the same passion and how, with effort and heart, ideas can turn into something real. This experience helped me grow as a person in every aspect, not just academically.



                          </p>
                          <p>
                            <b>Impact of Chihuahua Tech Week and ExpoAgro</b>: Having the opportunity to be present at these events allowed me to meet people from various sectors, such as farmers, distributors, nongovernmental organizations, researchers, and consumers, who with their contributions added their grain of sand to the project. It is very valuable to see how each of them becomes part of this initiative, giving it a meaning that goes beyond the theoretical and laboratory work, and turning it into a collective effort with true social impact.

                            Both events have a very big impact on the agricultural community. They gave us the opportunity to listen firsthand to those who live and work in the field. Thanks to these conversations, we were able to obtain very valuable information for the project, not only from a technical point of view, but also from the real experience of the people. Talking with them gave us a clearer perspective on the problem and helped us better understand their needs. In addition, being able to share ideas and listen to their concerns allowed us to empathize with their situation and become even more aware of the impact that our work can have. This experience reminded us that the project is designed to generate a real and positive change in the lives of those who are part of this community.


                          </p>
                          <p>
                            <b>Advice for Future Teams</b>:  A project is strengthened when it is connected with people. Do not limit yourselves to the laboratory, seek spaces to interact with the community and listen to their voices. That feedback will give you perspectives that you will not find in papers. Keep an open mind, be flexible, and remember that science has true value when it generates useful solutions with a positive impact.


                          </p>
                        </div>
                        <div>
                          <img src="https://static.igem.wiki/teams/5718/human-practices/integrated/macris.avif" className="flex float-left w-xs" />
                          <h3 className="text-h3bold mb-2">MaCris Granados:</h3>
                          <p>
                            <b>Personal Reflection and Learning</b>:  Both events were inspiring for me. They gave me much more than professional insights, they also contributed to my personal growth. I learned the importance of being proactive, empathetic, and solution-oriented in every interaction. Beyond iGEM or my academic career, these experiences reminded me that many families depend directly on the agricultural system, and that food waste often means meals that never reach a table. This perspective motivated me to see my role not only as a student or team member, but also as someone who can actively contribute to a broader social impact.



                          </p>
                          <p>
                            <b>Impact of Chihuahua Tech Week and ExpoAgro</b>: At ExpoAgro, the highlight was connecting with a wide range of people and listening to a keynote that emphasized how the agricultural world is changing. The discussion about shifting consumer demands, evolving food markets, and the impact of exports and imports left a strong impression on me. As an International Business student, it was meaningful to realize how much these dynamics will influence daily life, even if I do not specialize directly in agribusiness.

                            At Chihuahua Tech Week, I appreciated engaging with different actors across the value chain. While our team had already conducted interviews, seeing how all these stakeholders recognized the same challenges we identified was powerful. It helped me understand how our project can fit into this ecosystem and showed me that even small contributions can begin to make a meaningful difference.


                          </p>
                          <p>
                            <b>Advice for Future Teams</b>:  My advice for future teams is to always give themselves the chance to empathize with others and to broaden their horizons. These events are not only about presenting your project, they are opportunities to connect, listen, and learn from the people who face these challenges every day. By approaching each conversation with openness and empathy, teams can discover valuable insights that enrich both the project and their personal growth.

                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4"></div>
                    </div>
                  </CollapseSection>
                  <br />
                </div>
                <p>
                  Through this process, we’ve come to realize that listening is a powerful tool. For us, it was crucial in shaping Phasea and ensuring that the solution we created truly met the needs of the communities we are serving. These reflections offer advice for future iGEMers, emphasizing the importance of listening, adapting, and co-creating with the people you aim to help.

                </p>

                <p>
                  Furthermore, you can explore our Human Practices contribution:
                </p>

                <div className="flex justify-center px-4 sm:px-12 md:px-4 lg:px-2 xl:px-2">

                  <a href="https://www.canva.com/design/DAGvaeWpazs/PQp-xZLrvOSHf0N3AYXEjg/edit?utm_content=DAGvaeWpazs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" className="bg-[#649026] hover:bg-[#8CC938] text-[#FFFFEE] text-[20px] font-bold py-2 px-6 rounded-full flex items-center justify-center gap-2 w-full md:w-1/2 text-center transition-all duration-200 ease-in-out hover:scale-105">
                    <PiCursorClickDuotone className="w-24 h-auto" />
                    Click here to see our Human Practices Contribution
                  </a>
                </div>
              </section>

              {/* Section 11 */}
              <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12 mx-auto">
                <div className="mb-8 mx-auto">
                  <h2 id="Thank You for Growing with Us" className="scroll-mt-32">Thank You for Growing with Us</h2>
                  <hr />
                </div>
                <p>We would like to sincerely thank everyone who supported our project and helped us plant our little <b>seed of inspiration</b>. Your guidance and collaboration have shown us the importance of a <b>human-centered approach</b> in developing solutions that truly respond to real needs. Together, we hope to inspire future generations to create innovative, responsible solutions and contribute to positive change, paving the way for a <b>brighter and more sustainable future in agriculture</b>.
                </p>
                <img
                  src="https://static.igem.wiki/teams/5718/human-practices/integrated/hp-recompilation.avif"
                  alt="Our Team."
                  className="w-full h-auto"
                />
                <div className="flex justify-center mt-4">
                  <span className="text-gray-600 text-body">
                    <b>Figure 14. </b>Human Practices interviews recompilation
                  </span>
                </div>
                <img src='https://static.igem.wiki/teams/5718/human-practices/integrated/protecting.avif' alt='Protecting the fields, sowing the future' className='w-full h-auto' />
              </section>

              {/* References section */}
              <section id="references-section" className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12">
                <References
                  references={integratedReferences}
                  title="References"
                  description=""
                  className=""
                />
              </section>
            </main>
          </div>

        </div>
      </div>

      {/* Section Navigation Footer */}
      <div className="w-full bg-transparent mt-16">
        <div className="mx-auto py-4 px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 xl:gap-16 2xl:gap-[20rem]">

            {/* Previous Section */}
            {currentSectionIndex > 0 ? (
              <button
                onClick={() => handleSectionNavigation(currentSectionIndex - 1)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:scale-105 transition-all duration-700 cursor-pointer bg-[#FFFFEE] shadow-2xl hover:bg-[#FFFFE1] border border-[#441D04] min-w-[200px] justify-center lg:justify-start"
              >
                <span className="text-h3bold">←</span>
                <div className="text-center lg:text-left">
                  <div className="text-h4bold lg:text-h3bold">Previous</div>
                  <div className="text-h4 lg:text-h3">{sections[currentSectionIndex - 1].title}</div>
                </div>
              </button>
            ) : <div className="hidden lg:block w-[200px]" />}

            {/* Progress & Back to Overview */}
            <div className="text-center px-4 py-2">
              <div className="text-h4bold lg:text-h3bold mb-2">
                {currentSectionIndex + 1} of {sections.length}
              </div>
              <button
                onClick={handleBackToOverview}
                className="text-[#649026] hover:text-[#6EA71E] text-h4bold lg:text-h3bold cursor-pointer"
              >
                ← Back to Sections
              </button>
            </div>

            {/* Next Section */}
            {currentSectionIndex < sections.length - 1 ? (
              <button
                onClick={() => handleSectionNavigation(currentSectionIndex + 1)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:scale-105 transition-all duration-700 cursor-pointer min-w-[200px] justify-center lg:justify-end"
                style={{ backgroundColor: sections[currentSectionIndex].color, color: '#FFFFEE' }}
              >
                <div className="text-center lg:text-right">
                  <div className="text-h4bold lg:text-h3bold">Next</div>
                  <div className="text-h4 lg:text-h3">{sections[currentSectionIndex + 1].title}</div>
                </div>
                <span className="text-h3bold">→</span>
              </button>
            ) : <div className="hidden lg:block w-[200px]" />}

          </div>
        </div>
      </div>


    </div>
  );
}


export function HumanPractices() {
  const [searchParams] = useSearchParams();
  const [activeSection, setActiveSection] = useState<'overview' | 'silver' | 'integrated' | null>(null);
  const scrollId = searchParams.get('scroll') || undefined;

  useEffect(() => {
    const section = searchParams.get('section');
    if (section) setActiveSection(section as 'overview' | 'silver' | 'integrated');
    // aqui si no tenemos un scrollId especifico, mandamos al usuario a la navegacion de las secciones
  }, [searchParams]);

  useEffect(() => {
    if (scrollId) {
      setTimeout(() => {
        const el = document.getElementById(scrollId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100); // Delay to ensure DOM is updated
    }
  }, [activeSection, searchParams]);

  const sections: Section[] = [
    {
      title: "Seeds of Purpose",
      description: "Project introduction and context",
      imageUrl: 'https://static.igem.wiki/teams/5718/human-practices/icon-seeds-of-purpose.webp',
      color: "#A15715",
      emissiveColor: "#A15715",
      onClick: () => setActiveSection('overview')
    },
    {
      title: "Understanding the Field",
      description: "Community engagement and research",
      imageUrl: 'https://static.igem.wiki/teams/5718/human-practices/icon-understanding-the-field.webp',
      color: "#00A9A9",
      emissiveColor: "#00A9A9",
      onClick: () => setActiveSection('silver')
    },
    {
      title: "From Roots to Pods",
      description: "Implementation and integration",
      imageUrl: 'https://static.igem.wiki/teams/5718/human-practices/icon-from-roots-to-branches.webp',
      color: "#74B31B",
      emissiveColor: "#74B31B",
      onClick: () => setActiveSection('integrated')
    }
  ];

  const getCurrentSectionIndex = () => {
    switch (activeSection) {
      case 'overview': return 0;
      case 'silver': return 1;
      case 'integrated': return 2;
      default: return 0;
    }
  };

  const handleSectionNavigation = (index: number) => {
    const sectionKeys = ['overview', 'silver', 'integrated'];
    const targetSection = sectionKeys[index];
    if (targetSection) {
      setActiveSection(targetSection as any);

      setTimeout(() => {
        const contentElement = document.getElementById('content-section');
        if (contentElement) {
          contentElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      }, 100);

    }
  };

  const handleBackToOverview = () => {
    setActiveSection(null);
    setTimeout(() => {
      const overviewElement = document.getElementById('section-nav');
      if (overviewElement) {
        const elementPosition = overviewElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 100;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const renderSectionContent = () => {
    const currentSectionIndex = getCurrentSectionIndex();

    switch (activeSection) {
      case 'overview':
        return <OverviewSection
          scrollTo={scrollId}
          sections={sections}
          currentSectionIndex={currentSectionIndex}
          handleSectionNavigation={handleSectionNavigation}
          handleBackToOverview={handleBackToOverview}
          setActiveSection={setActiveSection}
        />;
      case 'silver':
        return <SilverHPSection
          scrollTo={scrollId}
          sections={sections}
          currentSectionIndex={currentSectionIndex}
          handleSectionNavigation={handleSectionNavigation}
          handleBackToOverview={handleBackToOverview}
          setActiveSection={setActiveSection}
        />;
      case 'integrated':
        return <IntegratedHPSection
          scrollTo={scrollId}
          sections={sections}
          currentSectionIndex={currentSectionIndex}
          handleSectionNavigation={handleSectionNavigation}
          handleBackToOverview={handleBackToOverview}
          setActiveSection={setActiveSection}
        />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Single Lead Description at the top when no section is selected */}
      {(
        <div>
          {/* Three-column layout below navigation */}
          <div className="lg:grid 
          lg:grid-cols-[1fr_3fr_1fr] 
          xl:grid-cols-[1fr_4fr_1fr] 
          2xl:grid-cols-[minmax(300px,1fr)_minmax(0,4fr)_minmax(350px,1fr)]
          lg:gap-6 xl:gap-8 py-8 px-4">


            {/* Left Sidebar - Empty on landing */}
            <aside className="hidden lg:block"></aside>

            <div id="overview-section" className="w-full lg:max-w-none max-w-4xl mx-auto min-w-0">
              <LeadDescription
                title=""
                description="Creating solutions alongside the people who face the problem, not just for them."
                author="PHASEOS, team Tec-Chihuahua 2025"
              />


              {/* Add section divider after lead */}
              <div className="section-divider my-8" />

              <main className="prose prose-lg leading-[3rem] 
                prose-p:mb-4 prose-p:md:mb-6 prose-p:lg:mb-8
                prose-p:last:mb-0
                sm:px-4 md:px-6 lg:px-8 xl:px-10">

                {/* Section 1 Preview */}

                <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12">
                  <article className="space-y-4! md:space-y-6! lg:space-y-8!">
                    <p>
                      When shaping our Human Practices approach, we aimed to ground our project in both scientific relevance and cultural meaning. We chose to work with the common bean not only because of its role in food security, but because it is <b>deeply rooted in our history, traditions, and collective identity as mexicans</b>.
                    </p>
                    <p>
                      This staple crop holds a deep cultural value; it has nourished Mexican communities for centuries, representing our country’s food sovereignty and tradition. This perspective allowed us to explore the intersections between technology, sustainability, and cultural heritage, ensuring that our project responds to real needs <b>while honoring the values of the communities it seeks to impact</b>. For us it has been a symbol of community, family, and nourishment. However, this cultural heritage is threatened. In Mexico and around the world, thousands of bean producers face major challenges such as climate change, soil degradation, limited innovation, and unpredictable harvest yields. Among all of these challenges one has achieved a greater level of damage for farmers: <b>anthracnose</b>, which causes severe <b>damage to the productivity and profit</b> of their crops.
                    </p>
                    <p>
                      With the increased use of agrochemicals causing quickly rising concerns, protecting this crop means protecting a way of life shared by generations of farmers and families. These commonly used products cause great harm to the ecosystems, and the wellbeing of those who grow and harvest our food.
                    </p>
                    <p>
                      For our team, this was a call to action. We realized that real impact could only be achieved by creating solutions <i>alongside</i> the people who face the problem, not just <i>for</i> them. For us, the key to <b>Human Practices is the correlation of innovation with both human and environmental wellbeing</b>. This is why from the very beginning, we interacted with various actors relevant to the problematic and conducted interviews, which gave us important perspectives on the issue.
                    </p>
                  </article>
                </section>


                {/* Section 2 Preview */}

                <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12">
                  <div>
                    <h3 className="text-h3bold text-[#649026]">
                      Listening First: How Human Practices Shaped Our Project
                    </h3>
                    <hr />
                  </div>
                  <article className="space-y-4! md:space-y-6! lg:space-y-8!">
                    <p>
                      Before designing Phasea, we listened. We reached out to farmers, researchers, local suppliers, and stakeholders across the common bean value chain. We didn’t just collect feedback, but also <b>built connection</b>. Through the questions, observations, and shared stories, we have gained a direct <b>understanding</b> and witnessed the challenges firsthand by approaching and becoming actively involved in them. The project was shaped through the understanding of the <b>real world challenges</b> they face. Their insights challenged our assumptions, validated or refuted our hypotheses, and helped us pivot when necessary. Because of them, Phasea is not only technically feasible, it’s also grounded in reality.
                    </p>
                    <p>
                      For us, Human Practices means:
                    </p>


                    <img
                      src="https://static.igem.wiki/teams/5718/human-practices/preview/human-practices-gif-1.webp"
                      alt="Human Practices Image"
                      className="w-full rounded-lg px-4"
                    />

                    <p>
                      To help you navigate our Human Practices section, we have organized it into three distinct parts.
                      Every section following a clear format:
                    </p>

                    <p className="indent-8">
                      <b>I. A brief introduction.</b>
                    </p>

                    <p className="indent-8">
                      <b>II. Key content, tools, and reflections that guided our work.</b>
                    </p>

                    <p className="indent-8">
                      <b>III. Brief closure of the section and how the information was relevant for us.</b>
                    </p>

                    <p>
                      This structure will let you understand how our Human Practices efforts evolved from building empathy and understanding the views of the people who live the problem every day, to responsibly integrating stakeholder’s perspectives and ethical considerations, and finally documenting our process so others can learn from and build upon it.
                    </p>

                    <p>
                      Throughout the sections, you'll find:
                    </p>

                    <ol className="flex gap-8 flex-col space-y-6 md:space-y-8 lg:space-y-10 text-h5 indent-8 custom-ol">
                      <li><b>Seeds of Purpose:</b> Where our story begins, who we are, why Human Practices matter, and the goals and purpose that ground Phasea.</li>
                      <li><b>Understanding the Field:</b> We explored the bigger picture, engaged with relevant actors in the bean value chain to understand their needs and motivations, designing Phasea ethically and with a human-centered approach.</li>
                      <li><b>From Roots to Pods:</b> We show how Human Practices guided Phasea’s design and execution, adapting the project ethically and creatively based on our insights.</li>
                    </ol>

                  </article>
                </section>



              </main>



            </div>

            {/* Right Sidebar - Empty on landing */}
            <aside className="hidden lg:block"></aside>
          </div>

          {/*}
        <div className="flex py-8 justify-center max-w-[1/2]">
            <section className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 scroll-mt-24 pt-8 md:pt-12">
              <References
                references={MainReferences}
                title="References"
                description=""
                className="pt-12"
              />
            </section>
        </div>
*/}
          <div className="py-8 min-h-0 px-2">
            {/* Section Navigation */}
            <SectionNav
              sections={sections}
              title="Click on each section to explore our human practices journey"
              className="py-8 min-h-0"
              scrollToContentId="content-section"
              enableAutoScroll={true}
              maxItemsPerRow={3}
              id="section-nav"
            />
          </div>

        </div>
      )}


      {/* Section content with integrated navigation */}
      {activeSection && renderSectionContent()}

    </div>
  );
}
