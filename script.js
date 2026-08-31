  // Initialize on DOM Load
  document.addEventListener('DOMContentLoaded', () => {

    // إضافة الاستماع لزر العودة بالمتصفح/الهاتف
    window.addEventListener("popstate", () => {
      const activeModal = document.querySelector(".modal.open, .project-modal.open, #projectModal.open");
      if (activeModal) {
        activeModal.classList.remove("open");
        document.body.style.overflow = "";
      }
    });

    // 1. Reveal Animations on Scroll
    const revealItems = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealItems.forEach(item => revealObserver.observe(item));

    // 2. Mobile Menu Toggle
    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuButton && mobileMenu) {
      menuButton.addEventListener("click", () => {
        const open = mobileMenu.classList.toggle("open");
        menuButton.setAttribute("aria-expanded", String(open));
      });

      document.querySelectorAll(".mobile-menu a").forEach(link => {
        link.addEventListener("click", () => {
          mobileMenu.classList.remove("open");
          menuButton.setAttribute("aria-expanded", "false");
        });
      });
    }

    // 3. Case Studies Data Store
    const projectsData = {
      "1": { // Project 1: Sharks Group
        title: "Sharks Group",
        meta: {
          type: "Content Marketing Strategy · Brand Positioning · B2B Marketing",
          duration: "July 2026 – Present",
          platforms: "Facebook · Instagram",
          role: "Content Marketing Strategist & Social Media Manager",
          context: "Executed with Sharks Group"
        },
        bannerImage: "sharks-group-banner.jpg",
        sections: [
          {
            title: "Overview",
            content: `<p>Sharks Group is a Libyan marketing and media company providing integrated marketing, media production, advertising, exhibition, printing, and digital solutions.</p>
                      <p>I joined the project as a Content Marketing Strategist, leading the content strategy, brand positioning direction, publishing planning, paid media planning, and coordination and review of the execution team.</p>
                      <p>The strategy began on 1 July 2026 and is currently ongoing, with the goal of repositioning Sharks from a company perceived as a provider of separate marketing services into a professional marketing and media partner for companies and major organizations.</p>`
          },
          {
            title: "Challenge",
            content: `<p>Sharks had an existing social media presence, but its communication was scattered and did not clearly reflect the company's actual capabilities or the position it wanted to occupy in the market.</p>
                      <p>The main challenge was therefore not a lack of services, but a lack of a clear and consistent market perception.</p>
                      <p><strong>The strategy needed to address several issues:</strong></p>
                      <ul>
                        <li>Unclear positioning and inconsistent marketing messages.</li>
                        <li>A strong dependence on personal relationships for generating business.</li>
                        <li>Communication that could easily become focused on promoting individual services rather than building the brand.</li>
                        <li>Limited visibility into the scale and quality of Sharks' actual work.</li>
                        <li>The need for a structured content system that could move the audience from awareness to trust and eventually to action.</li>
                      </ul>
                      <p>The objective was to build a digital presence that could create market demand rather than simply support existing relationships.</p>`
          },
          {
            type: "image",
            src: "sharks-group-approach.jpg",
            alt: "Sharks Group Strategy & Approach"
          },
          {
            title: "Approach",
            content: `<p>The strategy was built around a three-step progression: <strong>Awareness → Trust → Conversion</strong>.</p>
                      <p>The first priority was to establish what Sharks stands for and build awareness around the brand beyond its individual services. The second was to strengthen trust by demonstrating expertise, real projects, the people behind the company, and how work is actually executed. Only after establishing this foundation would service-led communication become more prominent, connecting specific services to the company's demonstrated capabilities and creating opportunities for direct business.</p>
                      <p><strong>The content strategy was structured around five interconnected pillars:</strong></p>
                      <div class="case-sub-block">
                        <h4>Educational Content</h4>
                        <p>Building awareness and authority through accessible marketing and media knowledge, including " لازم تعرف " (You Need To Know ) series.</p>
                      </div>
                      <div class="case-sub-block">
                        <h4>News & Case Studies</h4>
                        <p>Analyzing relevant marketing campaigns, industry developments, and real-world examples to demonstrate strategic thinking rather than simply reporting news.</p>
                      </div>
                      <div class="case-sub-block">
                        <h4>Brand & Behind the Scenes</h4>
                        <p>Showing the people, meetings, preparation, and field execution behind Sharks to make the company more tangible and build trust.</p>
                      </div>
                      <div class="case-sub-block">
                        <h4>Proof of Expertise</h4>
                        <p>Using Sharks' actual projects across media coverage, exhibitions, printing, visual identity, and other services as evidence of its capabilities and experience.</p>
                      </div>
                      <div class="case-sub-block">
                        <h4>Services</h4>
                        <p>Introducing Sharks' services progressively and strategically, with greater emphasis as the audience moves further along the awareness-to-conversion journey.</p>
                      </div>
                      <p>Rather than maintaining the same content mix throughout the campaign, the role of each pillar changes according to the strategic stage. Early communication prioritizes awareness and credibility, while later communication gives greater space to proof of expertise and service conversion.</p>`
          },
          {
            title: "Execution",
            content: `<p>The strategy was translated into an ongoing content system designed to make the different content formats support one another.</p>
                      <p>The educational content established Sharks as a source of useful marketing knowledge through formats such as " لازم تعرف " (You Need To Know ), covering practical marketing concepts, audience behavior, and the thinking behind successful campaigns.</p>
                      <p>The News & Case Studies stream added an analytical layer by connecting current marketing developments and global campaigns to practical lessons and strategic observations.</p>
                      <p>At the same time, Brand & Behind the Scenes content showed Sharks from the inside through meetings, project preparation, and field execution, while Proof of Expertise content turned the company's existing body of work into visible evidence of its capabilities.</p>
                      <p>Service communication was intentionally limited during the early stage rather than relying on continuous promotional posts. It is gradually introduced as the strategy progresses, with the goal of connecting services to demonstrated expertise and real business value.</p>
                      <p><strong>Alongside content development, my role included:</strong></p>
                      <ul>
                        <li>Developing ongoing content and publishing plans.</li>
                        <li>Defining content pillars, topics, and strategic priorities.</li>
                        <li>Planning paid media and campaign funding.</li>
                        <li>Coordinating task distribution across the execution team.</li>
                        <li>Reviewing content and maintaining quality standards.</li>
                        <li>Managing publishing schedules and deadlines.</li>
                        <li>Adjusting the content mix according to changing objectives.</li>
                      </ul>
                      <p>The result is intended to be more than a more active social media presence: a structured communication system designed to change how Sharks is understood in the market.</p>`
          },
          {
            type: "image",
            src: "sharks-group-pillars.jpg",
            alt: "Sharks Group Execution & Content Mix"
          },
          {
            title: "Results",
            content: `<p><em>The strategy is still ongoing, so these figures represent the first month of execution (1–31 July 2026) rather than final campaign results.</em></p>
                      <p><strong>During the first month:</strong></p>
                      <ul>
                        <li><strong>259.8K</strong> Content Views</li>
                        <li><strong>146.9K</strong> Viewers</li>
                        <li><strong>942</strong> Content Interactions</li>
                        <li><strong>290</strong> Link Clicks</li>
                        <li><strong>891</strong> Facebook Visits</li>
                      </ul>
                      <p>The first month established significant early awareness for the brand while deliberately keeping follower growth from becoming the primary KPI.</p>
                      <p>More importantly, the results show movement across both awareness and intent, from broad content exposure and repeated viewing to content interactions, page visits, and link clicks.</p>
                      <p>As the strategy progresses, the focus will gradually move toward stronger proof of expertise, clearer service communication, and converting the awareness and trust built in the early stages into qualified business opportunities.</p>`
          }
        ]
      },
      "2": { // Project 2: Libya Apps
        title: "Libya Apps",
        meta: {
          type: "Digital Platform Launch · Content Marketing Strategy · Brand Awareness",
          duration: "July 2026 – Present",
          platforms: "Facebook · Instagram",
          role: "Content Marketing Strategist & Social Media Manager",
          context: "Executed with Sharks Group" 
        },
        bannerImage: "libya-apps-banner.jpg",
        sections: [
          {
            title: "Overview",
            content: `<p>LIBYA APPS is a digital platform designed to bring Libyan applications together in one place, serving as a guide for companies, users, and developers and making it easier to discover and access local digital solutions.</p>
                      <p>I joined the project as a Content Marketing Strategist, responsible for developing the digital marketing strategy, content planning, publishing direction, paid media planning, and coordination of the execution team.</p>
                      <p>The strategy began in July 2026 ahead of the platform's planned launch in early 2027, with the goal of establishing LIBYA APPS as Libya's first dedicated directory for local applications.</p>`
          },
          {
            title: "Challenge",
            content: `<p>The project was starting its digital presence from zero. There was no established audience, content history, or existing brand awareness around the platform. This meant the communication strategy had to do more than simply announce a future product.</p>
                      <p><strong>It needed to:</strong></p>
                      <ul>
                        <li>Introduce an entirely new concept to the audience.</li>
                        <li>Establish a clear identity and positioning for LIBYA APPS.</li>
                        <li>Build credibility before the platform itself launches.</li>
                        <li>Create interest among companies, developers, partners, and users.</li>
                        <li>Support the project's field marketing and partnership efforts.</li>
                        <li>Gradually prepare the audience for the 2027 launch.</li>
                      </ul>
                      <p>The challenge was therefore to build awareness and trust around a platform before its official launch, while keeping the audience engaged throughout a long pre-launch period.</p>`
          },
          {
            type: "image",
            src: "libya-apps-approach.jpg",
            alt: "Libya Apps Strategy & Approach"
          },
          {
            title: "Approach",
            content: `<p>The strategy was designed around three progressive stages, allowing the communication to evolve as the launch approached.</p>
                      <div class="case-sub-block">
                        <h4>01 — Brand & Awareness (July – September 2026)</h4>
                        <p>The first stage focuses on establishing the identity of LIBYA APPS, introducing its vision, mission, and role, while building broader awareness around applications, digital transformation, and the importance of local digital solutions.</p>
                      </div>
                      <div class="case-sub-block">
                        <h4>02 — Product Preparation (October 2026)</h4>
                        <p>The second stage moves closer to the product itself, introducing the platform's components, how it works, its user experience, and its key features.</p>
                      </div>
                      <div class="case-sub-block">
                        <h4>03 — Launch Campaign (Late October – Launch)</h4>
                        <p>The final stage shifts into an intensive promotional campaign, gradually revealing more details about the platform, its partners, and the upcoming launch while building momentum toward the official launch alongside the Libyan Applications Exhibition.</p>
                      </div>
                      <p>The digital strategy also runs in parallel with field marketing, which focuses on attracting companies, developers, sponsors, and partners and collecting the information needed to build the platform.</p>`
          },
          {
            title: "Execution",
            content: `<p>The content strategy was built around five pillars, with their proportions and publishing frequency changing across each stage according to the objective:</p>
                      <ul>
                        <li><strong>Platform Content:</strong> Introducing LIBYA APPS, its vision, mission, goals, development journey, and role as a national reference.</li>
                        <li><strong>Digital Transformation & Awareness:</strong> Educational content simplifying digital transformation, the digital economy, and technology's role in local sectors.</li>
                        <li><strong>Community & Partnerships:</strong> Highlighting the Libyan application ecosystem, opportunities to join, collaborations, and supporting organizations.</li>
                        <li><strong>Exhibition & Events:</strong> Content dedicated to the Libyan Applications Exhibition, including updates and related activities.</li>
                        <li><strong>Interactive Content:</strong> Questions, polls, discussions, and challenges designed to involve the audience and build a community.</li>
                      </ul>
                      <p>Facebook & Instagram focused on accessible awareness-building, interactive communication, product education, and gradually preparing the audience for launch.</p>
                      <p>The overall execution was managed as an integrated pre-launch system rather than a collection of individual social media posts, allowing every stage and content pillar to contribute to the same positioning: making LIBYA APPS the first destination for discovering Libyan applications.</p>`
          },
          {
            type: "image",
            src: "libya-apps-pillars.jpg",
            alt: "Libya Apps Content Pillars & Execution"
          },
          {
            title: "Results",
            content: `<p><em>The strategy is still ongoing, so these figures represent the first month of execution (1–31 July 2026), rather than final launch results.</em></p>
                      <p><strong>During the first month:</strong></p>
                      <ul>
                        <li><strong>171.5K</strong> Content Views</li>
                        <li><strong>95.6K</strong> Viewers</li>
                        <li><strong>1.4K</strong> Content Interactions</li>
                        <li><strong>356</strong> Link Clicks</li>
                        <li><strong>2.1K</strong> Facebook Visits</li>
                        <li><strong>834</strong> New Followers</li>
                      </ul>
                      <p>For a platform that started its digital presence from zero, the first month established a strong initial level of awareness and audience interest while the project was still in its early brand-building stage.</p>
                      <p>The results also show movement beyond passive content consumption, with 356 link clicks and 2.1K Facebook visits indicating that a significant portion of the audience moved from discovering the content to exploring the platform's presence further.</p>
                      <p>As the strategy continues toward the product-focused and launch stages, the focus will gradually shift from initial awareness toward product understanding, partnership visibility, launch anticipation, and conversion.</p>`
          }
        ]
      },
      "3": { // Project 3: MENA Project 26
        title: "MENA Project 26",
        meta: {
          type: "Event Marketing · B2B Acquisition · Exhibition Marketing",
          duration: "October 2025 – February 2026",
          platforms: "Instagram · Facebook · LinkedIn · Website · WhatsApp · Email",
          role: " Marketing Strategist",
          context: "Executed with Sharks Group"
        },
        bannerImage: "mena-project-26-banner.jpg",
        sections: [
          {
            title: "Overview",
            content: `<p>MENA Project 26 is an international exhibition focused on construction, development, reconstruction, and related industries, part of the MENA series of exhibitions.</p>
                      <p>I worked on the project as a Content Marketing Strategist, responsible for developing the digital marketing strategy, planning campaigns, coordinating the team, and supporting the acquisition of exhibitors, visitors, and potential sponsors through digital and direct communication channels.</p>
                      <p>The strategy ran from October 2025 to February 2026, with the digital approach evolving according to the different stages of the exhibition's marketing cycle.</p>`
          },
          {
            title: "Challenge",
            content: `<p>The project operated within a highly competitive exhibition market, with several competing events taking place around the same period.</p>
                      <p>The main challenge was therefore timing: reaching potential exhibitors and sponsors early enough to secure their participation before they committed their budgets and resources to competing exhibitions.</p>
                      <p>At the same time, the project needed to shift its communication toward visitors as the exhibition date approached, while maintaining opportunities for partnerships and sponsorships throughout the campaign.</p>
                      <p>The challenge was not simply to promote the exhibition, but to build demand among different audiences at the right stage of the decision-making process.</p>`
          },
          {
            title: "Approach",
            content: `<p>The strategy was structured around two main phases:</p>
                      <div class="case-sub-block">
                        <h4>Phase 1 — B2B Acquisition (October – Mid-December)</h4>
                        <p>Focused primarily on targeting companies, exhibitors, sponsors, and potential partners through digital campaigns and direct outreach.</p>
                      </div>
                      <div class="case-sub-block">
                        <h4>Phase 2 — Visitor Acquisition (Mid-December – February)</h4>
                        <p>Gradually shifted communication toward visitor acquisition, building awareness and interest around the upcoming exhibition while keeping partnership opportunities open.</p>
                      </div>
                      <p>This approach allowed the campaign to move from securing the supply side of the exhibition to building demand from its audience, rather than communicating to all audiences with the same message throughout the campaign.</p>`
          },
          {
            type: "image",
            src: "mena-project-26-approach.jpg",
            alt: "MENA Project 26 Strategy & Approach"
          },
          {
            title: "Execution",
            content: `<p>The strategy was implemented across Instagram, Facebook, LinkedIn, the website, WhatsApp, and email.</p>
                      <p>I was responsible for planning the strategy and managing the team, coordinating the different activities throughout the campaign.</p>
                      <p>Alongside social media and digital campaigns, a dedicated team worked on building a database of potential companies and conducting direct outreach through email and WhatsApp.</p>
                      <p><strong>This created a combined acquisition system:</strong></p>
                      <ul>
                        <li>Digital campaigns to build awareness and generate interest.</li>
                        <li>Targeted company research and data collection.</li>
                        <li>Direct B2B communication through email and WhatsApp.</li>
                        <li>Content and communication adapted to exhibitors, visitors, sponsors, and partners.</li>
                        <li>Ongoing coordination between strategy, content, outreach, and campaign execution.</li>
                      </ul>
                      <p>Rather than treating the exhibition as a single promotional campaign, the execution was structured around the different audiences and their decision-making timelines.</p>`
          },
          {
            title: "Results",
            content: `<p><em>In general, the exhibition achieved broad market reach and strong turnout across both B2B and consumer segments:</em></p>
                      <ul>
                        <li><strong>12,000+</strong> Total Visitors</li>
                        <li><strong>90+</strong> Exhibiting Companies</li>
                      </ul>
                      <p>Overall, the combined marketing and outreach efforts contributed to building both sides of the exhibition ecosystem: attracting companies and exhibitors while driving audience demand leading up to the event.</p>
                      <p>The project demonstrated the value of combining digital marketing with direct B2B outreach when promoting an exhibition in a competitive market, particularly when early acquisition is critical to securing participation.</p>`
          }
        ]
      },
      "4": { // Project: Sky Seekers Libya
        title: "Sky Seekers Libya",
        meta: {
          type: "Content Marketing Strategy · Social Media Management · Market Entry Campaign",
          duration: "May 2025 – July 2025 · 3 Months",
          platforms: "Instagram · Facebook",
          role: "Content Marketing Strategist & Social Media Manager",
          context: "Executed with Sharks Group"
        },
        bannerImage: "sky-seekers-banner.jpg",
        sections: [
          {
            title: "Overview",
            content: `<p>Sky Seekers is a UAE-based travel and tourism company offering integrated travel solutions across multiple destinations, including flights, hotels, holiday packages, and visa services.</p>
                      <p>The project focused on launching Sky Seekers' Libyan branch in Benghazi and establishing its presence in the local market.</p>
                      <p>I joined the project as a Content Marketing Strategist and Social Media Manager, leading the marketing strategy across the three-month launch period, from pre-launch awareness to the official opening and the first phase of ongoing market presence.</p>
                      <p>The strategy was designed to position Sky Seekers as a professional, integrated travel and tourism company backed by the experience and capabilities of its UAE parent company, rather than simply as a new local travel office.</p>`
          },
          {
            title: "Challenge",
            content: `<p>The immediate challenge was to generate awareness around the opening of the new Libyan branch and ensure that the market knew Sky Seekers was opening in Benghazi on 1 June 2025.</p>
                      <p>However, announcing the opening directly would not create enough anticipation around a completely new local presence.</p>
                      <p><strong>The campaign needed to:</strong></p>
                      <ul>
                        <li>Build awareness before revealing the brand.</li>
                        <li>Create curiosity around an upcoming event in Benghazi.</li>
                        <li>Establish an emotional connection between travel and people.</li>
                        <li>Introduce Sky Seekers as a professional travel brand rather than simply a new agency.</li>
                        <li>Convert the attention generated by the launch into awareness of the company's actual services and offers.</li>
                      </ul>`
          },
          {
            type: "image",
            src: "sky-seekers-approach.jpg",
            alt: "Sky Seekers 3-Phase Market Entry Strategy"
          },
          {
            title: "Approach",
            content: `<p>The strategy was structured across three consecutive phases, with each phase serving a different stage of the customer journey:</p>
                      <div class="case-sub-block">
                        <h4>Phase 1 — Pre-Launch Awareness (May 2025)</h4>
                        <p>Build curiosity and emotional association around travel without immediately revealing the brand or the purpose of the campaign.</p>
                      </div>
                      <div class="case-sub-block">
                        <h4>Phase 2 — Launch & Market Introduction (June 2025)</h4>
                        <p>Reveal the brand and branch, generate a strong opening moment, introduce the company's first services and offers, and use the launch campaign to rapidly expand the audience.</p>
                      </div>
                      <div class="case-sub-block">
                        <h4>Phase 3 — Market Presence & Summer Offers (July 2025)</h4>
                        <p>Move beyond the launch itself and establish Sky Seekers as an active travel brand through a consistent mix of services, educational content, interactive communication, and seasonal offers.</p>
                      </div>
                      <p>The central creative direction during the pre-launch phase was to connect travel with relationships and emotional distance, using messages such as “نقربك من أحبابك البعاد” (Bringing You Closer to Your Loved Ones Far Away) and “رؤية العالم أصبحت أسهل” (Seeing the World Has Become Easier) to create an emotional reason to care about the upcoming brand before revealing it.</p>`
          },
          {
            title: "Execution",
            content: `<p><strong>Phase 1 — Pre-Launch (Teaser Campaign):</strong><br>
                      Rather than announcing the branch immediately, content included teaser posts, emotional messaging around travel and reconnecting with loved ones, teaser Reels, a 10-day countdown, and paid promotion to accelerate growth.<br>
                      <em>Result: 2,000+ new followers, ~1.5K interactions per post on promoted content.</em></p>
                      
                      <p><strong>Phase 2 — Launch & Opening Competition:</strong><br>
                      Shifted to direct brand introduction, featuring opening-event photos/videos, media coverage, Eid Al-Adha travel offers, core services, and a major opening competition offering five fully paid trips.<br>
                      <em>Result: 1,000+ additional followers, ~2K interactions per post on high-performing content.</em></p>
                      
                      <p><strong>Phase 3 — Establishing Market Presence:</strong><br>
                      Moved communication beyond the opening to create a sustainable content system built around four recurring pillars:</p>
                      <ul>
                        <li><strong>Interactive Content:</strong> Encouraging participation and conversation.</li>
                        <li><strong>Educational Content:</strong> Introducing destinations and cultural/heritage locations.</li>
                        <li><strong>Service Content:</strong> Communicating travel solutions, flights, and visa services.</li>
                        <li><strong>Special Offers:</strong> Promoting summer 2025 travel packages and Canton Fair China visa offers.</li>
                      </ul>`
          },
          {
            type: "image",
            src: "sky-seekers-execution.jpg",
            alt: "Sky Seekers Opening Campaign & Competition"
          },
          {
            title: "Results",
            content: `<p>Across the three-month launch period, the strategy successfully moved Sky Seekers through three distinct stages: <strong>Curiosity → Launch → Market Presence</strong>.</p>
                      <p><strong>Key performance highlights:</strong></p>
                      <ul>
                        <li><strong>3,000+</strong> New Followers across the first two phases alone.</li>
                        <li><strong>1.5K – 2K</strong> Average Interactions per post during key campaign periods.</li>
                        <li>High audience engagement and participation through the opening competition.</li>
                        <li>Seamless transition from pre-launch curiosity into active service and offer communication.</li>
                        <li>Established a long-term, repeatable social media structure for the Benghazi branch.</li>
                      </ul>
                      <p>The strategy successfully moved Sky Seekers from creating anticipation around a new brand to introducing its services and building a structured content system for ongoing market presence.</p>`
          }
        ]
      },
      "5": { // Project: Alamanah
        title: "Alamana",
        meta: {
          type: "B2B Content Marketing · Brand Awareness · Brand Positioning",
          duration: "March 2026 – July 2026",
          platforms: "Facebook · Instagram",
          role: "Content Marketing Strategist",
          context: "Executed with Sharks Group"
        },
        bannerImage: "al-amanah-banner.jpg",
        sections: [
          {
            title: "Overview",
            content: `<p>Alamana is a Libyan company specializing in heavy machinery, equipment, and trucks, and serves as the exclusive Libyan agent for LiuGong and FAW Trucks.</p>
                      <p>The project covered three social media accounts: Alamana Heavy Machinery & Equipment, FAW Libya, and LiuGong Libya.</p>
                      <p>I joined the project as a Content Marketing Strategist, responsible for developing the content direction, defining content priorities, planning publishing activity, developing B2B messaging, and coordinating and reviewing the execution of the content across the three accounts.</p>
                      <p>The strategy focused on building Alamana's digital presence as the official and trusted local representative of LiuGong and FAW in Libya, while developing a communication system capable of marketing products that are significantly more complex than conventional consumer products.</p>
                      <p>Rather than treating social media as a simple product catalogue, the strategy aimed to make the brands more recognizable, understandable, and credible to the businesses and decision-makers that could eventually become customers.</p>`
          },
          {
            title: "Challenge",
            content: `<p>Alamana had strong commercial assets through its exclusive representation of established international brands, but this positioning was not sufficiently reflected in its digital communication.</p>
                      <p>The challenge had two connected dimensions. First, the audience needed to understand who Al-Amanah was and what its relationship with LiuGong and FAW represented in the Libyan market. Second, heavy machinery and commercial trucks are inherently difficult products to market through social media. Unlike consumer products, they are purchased based on operational requirements, project suitability, productivity, durability, cost considerations, availability, and after-sales support.</p>
                      <p>The communication therefore needed to move beyond simply showing equipment and listing specifications.</p>
                      <p><strong>The strategy needed to:</strong></p>
                      <ul>
                        <li>Establish awareness of Alamana as the official local representative.</li>
                        <li>Build recognition around LiuGong and FAW within the Libyan market.</li>
                        <li>Make complex equipment easier for business audiences to understand.</li>
                        <li>Connect product features to real operational and project requirements.</li>
                        <li>Build trust around local availability, support, maintenance, and spare parts.</li>
                        <li>Create a consistent B2B communication system across three related accounts.</li>
                      </ul>
                      <p>The objective was to turn the digital presence from a collection of product posts into a credible communication channel for the company, its brands, and their commercial value.</p>`
          },
          {
            type: "image",
            src: "al-amanah-approach.jpg",
            alt: "Alamana B2B Positioning & Approach"
          },
          {
            title: "Approach",
            content: `<p>The strategy was built around four interconnected objectives: <strong>Awareness → Understanding → Trust → Purchase Consideration</strong>.</p>
                      <p>The first stage focused on establishing Al-Amanah and its represented brands in the digital space. The second introduced educational and contextual content to help the audience understand different equipment categories, product capabilities, and the practical value of specific features. The third strengthened credibility by connecting the brands and equipment to real projects, local market presence, exhibitions, and the company's support capabilities.</p>
                      <p>Finally, the majority of communication remained sales-oriented, presenting available equipment through a B2B value proposition rather than relying solely on technical specifications.</p>
                      <p><strong>Product communication was framed around business-relevant questions:</strong></p>
                      <ul>
                        <li>What type of project is this equipment suited for?</li>
                        <li>How can it improve productivity?</li>
                        <li>What operational problem does it solve?</li>
                        <li>How does durability affect long-term use?</li>
                        <li>How can the right equipment reduce operating costs?</li>
                        <li>What support is available after purchase?</li>
                      </ul>
                      <p>This approach allowed the products to be presented as business solutions rather than simply machines.</p>`
          },
          {
            title: "Content Strategy & Accounts Breakdown",
            content: `<p>The content system was adapted across the three accounts while maintaining a shared strategic direction:</p>
                      <div class="case-sub-block">
                        <h4>Alamana — Corporate & Equipment Communication</h4>
                        <p>Positioned around the company itself, its equipment portfolio, and its role as a local partner for businesses requiring heavy machinery. The content focused on sales communication through the formula: <em>Product capability → Operational benefit → Business value</em>.</p>
                      </div>
                      <div class="case-sub-block">
                        <h4>FAW Libya — Commercial Transportation</h4>
                        <p>Focused on trucks and their application across construction, infrastructure, and heavy-duty operations. Mixer trucks were positioned around concrete quality, dump trucks around heavy workloads, tractor trucks around pulling capability, and truck-mounted cranes around lifting efficiency.</p>
                      </div>
                      <div class="case-sub-block">
                        <h4>LiuGong Libya — Heavy Equipment</h4>
                        <p>Focused on establishing awareness around the represented brand and connecting its equipment to Libya's construction and development sectors, supported by a structured launch campaign.</p>
                      </div>
                      <div class="case-sub-block">
                        <h4>Exhibition & Trust-Building (Libya Build)</h4>
                        <p>In May 2026, participation in Libya Build was leveraged to bridge online awareness with physical presence and human interaction (Online awareness → Physical presence → Human interaction → Brand credibility).</p>
                      </div>`
          },
          {
            type: "image",
            src: "al-amanah-accounts.jpg",
            alt: "Alamana Three Accounts System & Libya Build"
          },
          {
            title: "Execution",
            content: `<p><strong>Across the project, my role included:</strong></p>
                      <ul>
                        <li>Developing content strategies for three related accounts.</li>
                        <li>Defining content pillars and monthly priorities.</li>
                        <li>Developing B2B-oriented product messaging.</li>
                        <li>Translating technical product features into practical business benefits.</li>
                        <li>Planning monthly publishing calendars.</li>
                        <li>Developing educational, sales, brand, and trust-building content.</li>
                        <li>Planning communication around Libya Build participation.</li>
                        <li>Developing the launch communication for LiuGong Libya.</li>
                        <li>Coordinating content requirements with the execution team.</li>
                        <li>Reviewing content and maintaining strategic consistency across the three accounts.</li>
                        <li>Adjusting the content direction according to commercial objectives.</li>
                      </ul>
                      <p>The strategy was executed entirely through organic social media communication without paid advertising, making the digital growth and audience exposure the result of the content and distribution strategy itself.</p>`
          },
          {
            title: "Results",
            content: `<p><em>The project did not have a single numerical conversion KPI because its primary objective during this stage was digital brand establishment and awareness, rather than direct lead generation through paid campaigns.</em></p>
                      <p><strong>Key qualitative achievements include:</strong></p>
                      <ul>
                        <li>Established a structured digital presence for Alamana as the official local representative of LiuGong and FAW.</li>
                        <li>Gained clearer and more consistent brand positioning across the Libyan market for both represented international brands.</li>
                        <li>Created a repeatable B2B content system balancing three core needs: <strong>Selling complex equipment → Educating the audience → Building trust</strong>.</li>
                        <li>Strengthened real-world credibility through comprehensive digital coverage of the Libya Build exhibition.</li>
                        <li>Successfully executed the structured launch campaign for LiuGong Libya.</li>
                      </ul>
                      <p>The project ultimately demonstrated how a traditionally difficult-to-market category can be translated into clear, business-oriented digital communication without reducing the products to generic promotional content.</p>`
          }
        ]
      },
      "6": { // Project 6: Rzaga Store
        title: "Rzaga Store",
        meta: {
          type: "Content Marketing Strategy · Brand Positioning · Organic Marketing",
          duration: "March 2026 – April 2026",
          platforms: "Instagram · TikTok",
          role: "Content Marketing Strategist & Social Media Manager",
          context: "Freelance Project"
        },
        bannerImage: "rzaga-store-banner.jpg",
        sections: [
          {
            title: "Overview",
            content: `<p>Rzaga is a Libyan street fashion brand that blends contemporary style, art, and cultural identity. The brand was founded around the idea of making fashion a universal language, combining Libyan roots with global influences and drawing inspiration from music, sports, and street culture.</p>
                      <p>I joined the project as a Content Marketing Strategist and Social Media Manager, leading the marketing strategy, brand positioning, content strategy, campaign planning, content direction, publishing planning, and coordination and review of the execution team.</p>
                      <p>The launch strategy was developed to establish Rzaga's identity, introduce its first products, generate sales from the available winter inventory, and build anticipation for the upcoming summer collection.</p>
                      <p>The campaign was executed entirely through organic content, with no paid advertising.</p>`
          },
          {
            title: "Challenge",
            content: `<p>Rzaga was a new brand entering the Libyan market with a strong creative vision but no established audience or digital presence.</p>
                      <p>The timing of the launch created an additional challenge: the brand was preparing to launch in late March and April, when the winter season was already approaching its end, while the available inventory consisted primarily of winter pieces.</p>
                      <p><strong>The strategy needed to solve several challenges simultaneously:</strong></p>
                      <ul>
                        <li>Launch a new brand and establish its identity from zero.</li>
                        <li>Build audience awareness and emotional connection before focusing heavily on sales.</li>
                        <li>Create demand for winter products despite the late-season timing.</li>
                        <li>Move limited available inventory while maintaining the brand's long-term positioning.</li>
                        <li>Introduce a second, limited-edition product without making the communication feel purely sales-driven.</li>
                        <li>Build an initial audience for the brand's future collections.</li>
                      </ul>
                      <p>The challenge was therefore not simply to sell clothing, but to establish a new brand and create enough interest around its identity to make a time-sensitive product launch commercially viable.</p>`
          },
          {
            type: "image",
            src: "rzaga-store-approach.jpg",
            alt: "Rzaga Store Marketing Funnel & Strategy"
          },
          {
            title: "Approach",
            content: `<p>The strategy was built around a gradual marketing funnel designed to move the audience from <strong>Brand Awareness → Product Interest → Purchase</strong>, while keeping the brand's identity at the center of communication.</p>
                      <p>The first priority was to establish what Rzaga stood for before asking the audience to buy from it. Content introduced the brand's story, founders, philosophy, cultural inspiration, and vision for the future, creating an emotional foundation for the product launch.</p>
                      <p>The product strategy introduced the first core piece, the Sweater, through its story, inspiration, design, materials, styling possibilities, and lifestyle positioning rather than relying solely on direct product promotion.</p>
                      <p>As interest developed, the strategy introduced a second limited-edition Hoodie through a gradual teaser sequence designed to create anticipation.</p>
                      <p><strong>The campaign combined four key strategic principles:</strong></p>
                      <div class="case-sub-block">
                        <h4>Brand Building</h4>
                        <p>Establishing Rzaga as a creative movement and cultural fashion brand rather than simply a clothing store.</p>
                      </div>
                      <div class="case-sub-block">
                        <h4>Storytelling</h4>
                        <p>Connecting each product to an idea, inspiration, or aspect of the brand's identity to make the pieces more meaningful to the audience.</p>
                      </div>
                      <div class="case-sub-block">
                        <h4>Organic Demand Generation</h4>
                        <p>Using content, anticipation, interaction, and product storytelling to build demand without relying on paid advertising.</p>
                      </div>
                      <div class="case-sub-block">
                        <h4>Scarcity & Timing</h4>
                        <p>Using the limited availability of the products and the approaching end of the winter season to create urgency around the remaining pieces.</p>
                      </div>`
          },
          {
            title: "Execution",
            content: `<p>The strategy was translated into a structured content rollout across Instagram and TikTok, beginning with brand establishment and gradually moving toward product launches and sales.</p>
                      <p><strong>Product Rollout & Teaser Sequence:</strong><br>
                      The Sweater was presented through its inspiration and design story, followed by product videos, detailed explanations, professional photography, styling content, and direct purchase CTAs. The Hoodie was subsequently introduced through a multi-step teaser sequence, creating strong anticipation before revealing the full product story.</p>
                      <p><strong>My role included:</strong></p>
                      <ul>
                        <li>Developing the overall marketing and content strategy.</li>
                        <li>Defining the brand positioning and communication direction.</li>
                        <li>Developing the content pillars and campaign structure.</li>
                        <li>Planning the launch sequence for both products.</li>
                        <li>Developing content ideas and publishing plans.</li>
                        <li>Defining the tone of voice and bilingual communication approach.</li>
                        <li>Directing content toward brand building, storytelling, and conversion.</li>
                        <li>Coordinating task distribution across the execution team.</li>
                        <li>Reviewing content and maintaining strategic and quality standards.</li>
                        <li>Managing campaign timelines and adjusting communication across stages.</li>
                      </ul>
                      <p>The campaign was executed with 100% organic reach, making the content itself the primary driver of audience growth, brand awareness, and product interest.</p>`
          },
          {
            type: "image",
            src: "rzaga-store-execution.jpg",
            alt: "Rzaga Store Content Rollout & Organic Engagement"
          },
          {
            title: "Results",
            content: `<p><em>The campaign began with two newly created social media accounts, giving Rzaga no existing digital audience to build upon.</em></p>
                      <p><strong>Key launch achievements:</strong></p>
                      <ul>
                        <li><strong>1,000+</strong> Combined Followers across Instagram and TikTok completely organically.</li>
                        <li><strong>Winter inventory successfully sold out</strong> despite launching late in the season.</li>
                        <li>Built strong audience interest in Rzaga's brand identity, story, and cultural philosophy.</li>
                        <li>Established a solid communication foundation for launching future collections to an already engaged audience.</li>
                      </ul>
                      <p>The campaign demonstrated that a new fashion brand could establish an initial audience and generate sales from limited winter inventory despite entering the market at the end of the season and without relying on paid advertising.</p>`
          }
        ]
      }
    };

    // 4. Full-screen Project View Modal System
    const projectView = document.getElementById("projectView");
    const closeProject = document.getElementById("closeProject");
    const projectViewInner = document.querySelector(".project-view-inner");

    document.querySelectorAll(".project-card").forEach(card => {
      card.addEventListener("click", () => {
        const projectId = card.getAttribute("data-project");
        const data = projectsData[projectId];

        if (projectView && data) {
          // Build Meta Header HTML
          let metaHtml = `
            <div class="project-view-top">
              <button class="close-project" id="closeProjectBtn">Close ×</button>
            </div>
            <h1 class="case-title">${data.title}</h1>
            <div class="case-meta-grid">
              <div class="meta-item"><span class="meta-label">Type</span><span class="meta-val">${data.meta.type}</span></div>
              <div class="meta-item"><span class="meta-label">Duration</span><span class="meta-val">${data.meta.duration}</span></div>
              <div class="meta-item"><span class="meta-label">Platforms</span><span class="meta-val">${data.meta.platforms}</span></div>
              <div class="meta-item"><span class="meta-label">Role</span><span class="meta-val">${data.meta.role}</span></div>
              ${data.meta.context ? `<div class="meta-item full-width-meta"><span class="meta-label">Context / Agency</span><span class="meta-val">${data.meta.context}</span></div>` : ''}
            </div>
          `;

          if (data.bannerImage) {
            metaHtml += `
              <div class="case-banner">
                <img src="${data.bannerImage}" alt="${data.title} Banner" />
              </div>
            `;
          }

          // Build Sections HTML
          let sectionsHtml = '<div class="case-dynamic-body">';
          data.sections.forEach(sec => {
            if (sec.type === "image") {
              sectionsHtml += `
                <div class="case-inline-image">
                  <img src="${sec.src}" alt="${sec.alt}" />
                </div>
              `;
            } else {
              sectionsHtml += `
                <div class="case-section-block">
                  <h3>${sec.title}</h3>
                  <div class="case-section-content">${sec.content}</div>
                </div>
              `;
            }
          });
          sectionsHtml += '</div>';

          // Render to DOM
          projectViewInner.innerHTML = metaHtml + sectionsHtml;

          // Re-bind close event button inside rendered content
          document.getElementById("closeProjectBtn").addEventListener("click", closeProjectView);

          // Open Modal
          projectView.classList.add("open");
          history.pushState({ modalOpen: true }, "");
          projectView.setAttribute("aria-hidden", "false");
          document.body.style.overflow = "hidden";
        }
      });
    });

    function closeProjectView(fromHistory = false) {
      if (projectView && projectView.classList.contains("open")) {
        projectView.classList.remove("open");
        projectView.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";

        // تنظيف سجل المتصفح إذا تم الإغلاق بزر Close بدلاً من زر العودة
        if (!fromHistory && history.state && history.state.modalOpen) {
          history.back();
        }
      }
    }

    // الاستماع لزر العودة بالهاتف أو المتصفح
    window.addEventListener("popstate", () => {
      if (projectView && projectView.classList.contains("open")) {
        closeProjectView(true);
      }
    });

    if (closeProject) {
      closeProject.addEventListener("click", () => closeProjectView(false));
    }

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && projectView && projectView.classList.contains("open")) {
        closeProjectView(false);
      }
    }); });