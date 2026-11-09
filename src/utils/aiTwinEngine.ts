import { PERSONAL_INFO, PROJECTS, EXPERIENCE, EDUCATION_LIST, SKILL_CATEGORIES, LEADERSHIP_ROLES, CERTIFICATIONS } from '../data/portfolioData';

export const SYSTEM_KNOWLEDGE_PROMPT = `
You are the AI Digital Twin of Janodi Chamodya, a Computer Engineering Undergraduate at the University of Sri Jayewardenepura and a part-time Software Engineer at Flexaro.
You speak in a warm, confident, professional, and articulate first-person voice ("I", "my work", "my experience"), but always maintain transparency that you are Janodi's AI Digital Twin.

CRITICAL INSTRUCTIONS:
1. Ground every answer ONLY in the verified facts provided below.
2. NEVER fabricate, extrapolate, or invent achievements, metrics, GPA values, companies, or tools not listed.
3. If asked about something outside this knowledge base, respond honestly: "I haven't included that in my current portfolio data yet, but you are welcome to connect with Janodi directly via email at ${PERSONAL_INFO.email} or LinkedIn!"
4. Keep answers concise, engaging, and recruiter-focused. Suggest logical follow-up questions at the end when helpful.

VERIFIED FACTS:
- Full Name: Janodi Chamodya
- Headline: Computer Engineering Undergraduate | Software Engineer | Creative Technologist
- Current Education:
  * University of Sri Jayewardenepura: B.Sc. (Hons.) in Engineering – Computer Engineering (2024 – Present). Minor: Data Management (2025 – Present).
  * IMBS Green Campus: Diploma in Business Management (Nov 2025 – Present).
  * Taxila Central College: G.C.E. Advanced Level – Physical Science (2020 – 2022). Results: Chemistry A, Combined Mathematics A, Physics B, English A. Z-score: 1.86.
- Professional Experience:
  * Flexaro: Software Engineer (Part-time), January 2026 – Present.
  * Responsibilities: Contribute to development and maintenance of web applications; apply front-end development, debugging, and problem-solving skills; collaborate on functional, user-friendly solutions.
- Technical Skills:
  * Languages: C++, Python, Java, JavaScript, TypeScript, PHP, HTML, CSS, MySQL
  * Frameworks & Dev: React, Node.js, PostgreSQL, Tailwind CSS, Laravel
  * Infrastructure & Tools: Docker, AWS, Linux, Git
- Featured Projects:
  1. Multi-Modal AI-Driven Trading Decision Support System (Ongoing): Web-based crypto trading platform combining technical analysis, machine learning, backtesting, and explainable risk-aware validation to generate transparent BUY/SELL/HOLD recommendations. Tech: Python, React, TypeScript, FastAPI, PostgreSQL, Pandas, NumPy, scikit-learn, Binance API.
  2. 5-DOF Pick-and-Place Robotic Arm (2026): ESP32-based robotic arm detecting objects with IR sensor, picking up and sorting into 6 predefined slots using automated servo control. Tech: ESP32, Arduino C++, IR Sensor, Servo Motors, Wokwi.
  3. RaawaAI: AI-Powered Policy Resonance Simulator: Full-stack AI platform simulating public reactions to policies/campaigns using demographic personas with multi-agent simulation, backlash scoring, heatmaps, and LLM refinement. Tech: Python, FastAPI, React, Vite, OpenAI API, Hugging Face, AWS DynamoDB, Recharts.
  4. Nom Nom Zen: 2D Platform Game: C++ and SFML 2D platformer with food collection, obstacle avoidance, collision detection, progressive levels, custom game graphics.
  5. OREGO.lk Hospital Management System (2025–2026): Full-stack hospital management with role-based dashboards, JWT authentication, appointment booking, resource management, discharge tracking. Tech: Python, Flask, PostgreSQL, SQLAlchemy, JWT, React, TypeScript, Material UI, Axios.
- Leadership & Volunteering:
  * Project Head – Nenasara Sisila CSR Project (Feb 2026 – Apr 2026)
  * Assistant Secretary – IET on Campus USJ, Executive Board 26/27 (Nov 2026 – Present)
  * Faculty Ambassador – IEEE Student Branch (2025 – Present)
  * Logistics Standing Committee – IEEE Computer Society Chapter (2025 – Present)
  * Finance Committee – Root of Change, Nexus Club (July 2025 – Nov 2025)
  * Programming Committee – Career Gateway 1.0 (June 2026 – Aug 2026)
  * Finance Committee – Artemia 1.0 by IEEE Women in Engineering (Sep 2025 – Nov 2025)
  * Delegates Handling Committee – Algo Ace (May 2026 – Sep 2026)
  * Official Flair Dancing Crew Member – 26/27 (Sep 2026 – Present) - refreshes the mind and balances rigorous engineering workload.
- Contact:
  * Email: ${PERSONAL_INFO.email}
  * LinkedIn: ${PERSONAL_INFO.linkedin}
  * GitHub: ${PERSONAL_INFO.github}
  * Availability: Open to Opportunities & Collaborations
`;

export async function askAITwin(
  prompt: string,
  history: { role: 'user' | 'assistant'; content: string }[],
  userApiKey?: string
): Promise<{ text: string; mode: 'openai' | 'knowledge-engine'; followUps: string[] }> {
  const apiKey = userApiKey || (import.meta.env.VITE_OPENAI_API_KEY as string | undefined);

  // If API key is available, call OpenAI
  if (apiKey && apiKey.startsWith('sk-')) {
    try {
      const messages = [
        { role: 'system', content: SYSTEM_KNOWLEDGE_PROMPT },
        ...history.slice(-6).map((m) => ({ role: m.role, content: m.content })),
        { role: 'user', content: prompt },
      ];

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages,
          temperature: 0.5,
          max_tokens: 450,
        }),
      });

      if (!response.ok) {
        throw new Error(`OpenAI HTTP Error ${response.status}`);
      }

      const data = await response.json();
      const text = data.choices?.[0]?.message?.content || "I apologize, I couldn't generate an answer at this moment.";
      return {
        text,
        mode: 'openai',
        followUps: generateFollowUps(prompt),
      };
    } catch (err) {
      console.warn('OpenAI API call failed, falling back to local Knowledge Engine:', err);
      // fallback to knowledge engine below
    }
  }

  // Built-in Deterministic Knowledge Engine (High accuracy, instantaneous, zero-cost, truthful)
  const answer = queryKnowledgeEngine(prompt);
  return {
    text: answer,
    mode: 'knowledge-engine',
    followUps: generateFollowUps(prompt),
  };
}

function queryKnowledgeEngine(rawQuery: string): string {
  const q = rawQuery.toLowerCase();

  // 1. Technical background / general overview
  if (q.includes('technical background') || q.includes('who are you') || q.includes('introduce') || q.includes('about yourself') || q.includes('overview')) {
    return (
      `Hello! I'm Janodi Chamodya's AI Digital Twin. ` +
      `Janodi is a Computer Engineering undergraduate at the University of Sri Jayewardenepura (Minor in Data Management) and works part-time as a Software Engineer at Flexaro.\n\n` +
      `Her expertise spans modern web development (React, TypeScript, Python, FastAPI, Flask, PostgreSQL), AI/ML integration, and embedded systems/robotics (ESP32, C++). She is passionate about crafting human-friendly digital platforms and intelligent engineering solutions.`
    );
  }

  // 2. Flexaro / Work Experience
  if (q.includes('flexaro') || q.includes('experience') || q.includes('work') || q.includes('job') || q.includes('role')) {
    return (
      `I currently serve as a part-time Software Engineer at **Flexaro** (January 2026 – Present).\n\n` +
      `In this role, I:\n` +
      `• Contribute to the development and maintenance of high-performance web applications.\n` +
      `• Apply front-end engineering, debugging, and systematic problem-solving skills to real-world codebases.\n` +
      `• Collaborate with cross-functional teammates to deliver user-friendly, functional web solutions.`
    );
  }

  // 3. React and Python
  if (q.includes('react') || q.includes('python') || q.includes('typescript') || q.includes('stack')) {
    return (
      `Python and React form the backbone of several of my major projects:\n\n` +
      `• **React & TypeScript:** I use React with TypeScript and Tailwind CSS to build fluid, type-safe, component-driven user interfaces (such as this portfolio, the RaawaAI platform, and the OREGO hospital management dashboard).\n` +
      `• **Python:** I leverage Python for backend microservices (FastAPI & Flask), machine learning workflows (scikit-learn, Pandas, NumPy), and AI orchestration (OpenAI API, Hugging Face models).\n\n` +
      `Together, this stack allows me to move seamlessly from data modeling and REST APIs to polished, responsive frontend experiences.`
    );
  }

  // 4. Robotics / ESP32 project
  if (q.includes('robotic') || q.includes('arm') || q.includes('esp32') || q.includes('hardware') || q.includes('embedded')) {
    return (
      `My robotics highlight is the **5-DOF Pick-and-Place Robotic Arm** (2026):\n\n` +
      `• Built on an **ESP32** microcontroller programmed in **Arduino C++**.\n` +
      `• Uses an **Infrared (IR) sensor** to detect object presence on the feed line.\n` +
      `• Employs synchronized servo motor kinematics to grasp items and deposit them precisely across six predefined sorting slots.\n` +
      `• Validated and tuned through Wokwi simulation before physical hardware assembly.`
    );
  }

  // 5. Projects in general
  if (q.includes('project') || q.includes('built') || q.includes('portfolio work')) {
    return (
      `I've engineered five featured projects spanning different disciplines:\n\n` +
      `1. **Multi-Modal AI Trading Decision Support System** (Ongoing): ML-driven crypto platform with backtesting and explainable BUY/SELL/HOLD indicators.\n` +
      `2. **5-DOF Pick-and-Place Robotic Arm** (2026): Autonomous ESP32-powered pick-and-place sorter with IR sensors.\n` +
      `3. **RaawaAI: Policy Resonance Simulator**: Multi-agent platform simulating demographic public sentiment with backlash scoring and regional heatmaps.\n` +
      `4. **Nom Nom Zen: 2D Platform Game**: Custom C++/SFML game engine with progressive physics and obstacle mechanics.\n` +
      `5. **OREGO.lk Hospital Management System**: Role-based clinical portal built with Flask, PostgreSQL, and React/TypeScript.\n\n` +
      `Which one would you like to explore in more detail?`
    );
  }

  // 6. RaawaAI in detail
  if (q.includes('raawa') || q.includes('policy') || q.includes('simulation') || q.includes('resonance')) {
    return (
      `**RaawaAI** is an AI-powered policy resonance simulator I developed to forecast public reactions:\n\n` +
      `• Runs multi-agent simulations using realistic demographic personas.\n` +
      `• Computes sentiment analysis and quantitative backlash-probability scores.\n` +
      `• Visualizes geographical adoption through regional heatmaps.\n` +
      `• Features LLM-assisted policy refinement to optimize communication before official public launch.\n` +
      `• Built with Python, FastAPI, React, Vite, OpenAI API, Hugging Face, and AWS DynamoDB.`
    );
  }

  // 7. Trading system in detail
  if (q.includes('trading') || q.includes('crypto') || q.includes('finance') || q.includes('binance')) {
    return (
      `My **Multi-Modal AI-Driven Trading Decision Support System** is an ongoing initiative:\n\n` +
      `• Combines algorithmic technical indicators with machine learning models (scikit-learn, Pandas, NumPy).\n` +
      `• Integrates real-time market data through the Binance API.\n` +
      `• Delivers explainable risk-aware validation alongside BUY/SELL/HOLD recommendations.\n` +
      `• Backend developed with FastAPI and PostgreSQL, coupled with a reactive TypeScript dashboard.`
    );
  }

  // 8. OREGO hospital in detail
  if (q.includes('orego') || q.includes('hospital') || q.includes('management system')) {
    return (
      `**OREGO.lk** is a full-scale Hospital Management System (2025–2026):\n\n` +
      `• Features role-based dashboards for administrators, doctors, hospital staff, and patients.\n` +
      `• Implements JWT authentication, automated appointment booking, real-time resource management, and discharge tracking.\n` +
      `• Developed with Python, Flask, PostgreSQL, SQLAlchemy, React, TypeScript, and Material UI.`
    );
  }

  // 9. Nom Nom Zen game in detail
  if (q.includes('nom nom') || q.includes('game') || q.includes('sfml')) {
    return (
      `**Nom Nom Zen** is a desktop 2D platform game built in **C++ with SFML**:\n\n` +
      `• Implements custom collision detection, object-oriented state machines, and food collection mechanics.\n` +
      `• Designed original graphics, progressive level hazards, and tuned game logic for high frame-rate responsiveness.`
    );
  }

  // 10. Education / University / A/L
  if (q.includes('education') || q.includes('university') || q.includes('gpa') || q.includes('degree') || q.includes('school') || q.includes('study')) {
    return (
      `My academic path blends rigorous engineering with business fundamentals:\n\n` +
      `• **University of Sri Jayewardenepura (2024 – Present):** B.Sc. (Hons.) in Engineering – Computer Engineering, pursuing a Minor in **Data Management**.\n` +
      `• **IMBS Green Campus (Nov 2025 – Present):** Diploma in Business Management to complement technical skills with strategy.\n` +
      `• **Taxila Central College (2020 – 2022):** G.C.E. Advanced Level Physical Science with **Z-score 1.86** (Chemistry A, Combined Maths A, Physics B, English A).`
    );
  }

  // 11. Leadership & Extracurriculars
  if (q.includes('leadership') || q.includes('volunteer') || q.includes('society') || q.includes('ieee') || q.includes('iet') || q.includes('club')) {
    return (
      `I actively engage in leadership and engineering community service:\n\n` +
      `• **Project Head** – Nenasara Sisila CSR Project (2026)\n` +
      `• **Assistant Secretary** – IET on Campus USJ Executive Board 26/27 (2026–Present)\n` +
      `• **Faculty Ambassador** – IEEE Student Branch (2025–Present)\n` +
      `• **Logistics Committee Member** – IEEE Computer Society Chapter (2025–Present)\n` +
      `• **Programming Committee Member** – Career Gateway 1.0 (2026)\n` +
      `• **Finance Committee Member** – Artemia 1.0 (IEEE WIE) & Root of Change (Nexus Club)\n` +
      `• **Delegates Handling** – Algo Ace (2026)\n` +
      `• **USJ Flair Dancing Crew Member** (2026–Present) – bringing creativity and stamina into balance with academics.`
    );
  }

  // 12. Dancing / Hobbies
  if (q.includes('dance') || q.includes('dancing') || q.includes('hobby') || q.includes('flair') || q.includes('extracurricular')) {
    return (
      `Outside engineering, I am an official member of the **USJ Flair Dancing Crew (26/27)**!\n\n` +
      `Flair dancing is a fantastic creative outlet that keeps me physically energized, mentally refreshed, and helps me maintain a healthy balance between rigorous academic workloads and creative expression.`
    );
  }

  // 13. Opportunities / Career goals / Collaboration
  if (q.includes('opportunity') || q.includes('opportunities') || q.includes('hire') || q.includes('collaborate') || q.includes('interested in') || q.includes('goal')) {
    return (
      `I am actively **Open to Opportunities & Collaborations**!\n\n` +
      `I am particularly excited about:\n` +
      `• Software Engineering and Full-Stack development roles (React, TypeScript, Python).\n` +
      `• AI & Machine Learning applications solving real-world challenges.\n` +
      `• Robotics & embedded systems engineering.\n` +
      `• Innovative engineering teams that value continuous learning, curiosity, and measurable impact.\n\n` +
      `Feel free to reach out directly at **${PERSONAL_INFO.email}**!`
    );
  }

  // 14. Certifications
  if (q.includes('certificat') || q.includes('credential') || q.includes('course')) {
    return (
      `I hold four recognized certifications:\n\n` +
      `1. **Python Programming for Beginners** – University of Moratuwa\n` +
      `2. **Guiding Leadership & Outreach Program** – Sysco LABS Sri Lanka\n` +
      `3. **Web Development for Beginners** – University of Moratuwa\n` +
      `4. **Introduction to Artificial Intelligence** – LinkedIn`
    );
  }

  // 15. Contact info / CV
  if (q.includes('contact') || q.includes('email') || q.includes('linkedin') || q.includes('cv') || q.includes('resume')) {
    return (
      `You can reach Janodi through:\n\n` +
      `• **Email:** [${PERSONAL_INFO.email}](mailto:${PERSONAL_INFO.email})\n` +
      `• **LinkedIn:** [${PERSONAL_INFO.linkedin}](${PERSONAL_INFO.linkedin})\n` +
      `• **GitHub:** [${PERSONAL_INFO.github}](${PERSONAL_INFO.github})\n` +
      `• **Curriculum Vitae:** You can request Janodi's official CV using the **"Request CV"** button in the navigation or hero section, or by sending a direct email inquiry!`
    );
  }

  // Default fallback that is helpful and stays truthful
  return (
    `Thank you for asking! As Janodi Chamodya's AI Digital Twin, I can share verified insights about:\n\n` +
    `• Her role as Software Engineer at Flexaro and Computer Engineering studies at USJ.\n` +
    `• Her 5 featured projects: AI Trading System, 5-DOF Robotic Arm, RaawaAI, Nom Nom Zen game, and OREGO Hospital System.\n` +
    `• Her technical toolkit (Python, React, TypeScript, C++, PostgreSQL, Docker, AWS).\n` +
    `• Her 9 leadership & volunteering positions across IEEE, IET, and the Flair Dancing Crew.\n\n` +
    `Would you like to hear more about her engineering projects or her work at Flexaro?`
  );
}

function generateFollowUps(query: string): string[] {
  const q = query.toLowerCase();
  if (q.includes('project') || q.includes('trading') || q.includes('robotic')) {
    return [
      'Tell me about your 5-DOF robotic arm.',
      'How does RaawaAI simulate public sentiment?',
      'What is your role at Flexaro?',
    ];
  }
  if (q.includes('flexaro') || q.includes('experience')) {
    return [
      'What technologies do you use daily?',
      'What are your academic achievements at USJ?',
      'What opportunities are you looking for?',
    ];
  }
  if (q.includes('education') || q.includes('study') || q.includes('gpa')) {
    return [
      'What projects have you developed?',
      'What leadership roles have you held?',
      'Tell me about your experience at Flexaro.',
    ];
  }
  return [
    'Tell me about your technical background.',
    'What projects have you developed?',
    'What is your experience with React and Python?',
    'Tell me about your robotics project.',
    'What leadership roles have you held?',
  ];
}

