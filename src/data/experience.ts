export type Role = {
  org: string;
  title: string;
  place?: string;
  start: string;
  end: string;
  kind: 'industry' | 'research';
  points: string[];
  tags: string[];
};

export const experience: Role[] = [
  {
    org: 'JagCo Global Inc.',
    title: 'Automation Engineering Intern',
    start: 'May 2026',
    end: 'Present',
    kind: 'industry',
    points: [
      'Built and shipped a multi-agent B2B sales system that handles prospect discovery, personalized outreach, follow-ups and lead qualification. It is live in production.',
      'Designed its evaluation framework: a simulated-customer agent that stress-tests conversations end to end, plus a sandboxed pipeline to validate every release.',
      'Built “Friday”, a multimodal AI receptionist that spots visitors with a fine-tuned detector, greets them by voice within a second and notifies staff. No visitor was missed in daily on-site testing.',
    ],
    tags: ['LLM agents', 'Agent evaluation', 'Computer vision', 'Voice AI'],
  },
  {
    org: 'EcoRobotics Lab, ASU',
    title: 'Research Volunteer',
    start: 'Feb 2026',
    end: 'May 2026',
    kind: 'research',
    points: [
      'Built a vision-guided manipulation pipeline for plant-health (NDVI) assessment using RGB-D sensing, surface-normal estimation and motion planning.',
      'Added RANSAC filtering and leaf segmentation to improve NDVI accuracy, and positioned the robot so the camera sits perpendicular to each leaf.',
    ],
    tags: ['RGB-D', 'Point clouds', 'RANSAC', 'Motion planning'],
  },
  {
    org: 'Guidewire Software',
    title: 'Software Developer I',
    place: 'Bangalore',
    start: 'May 2024',
    end: 'Jun 2025',
    kind: 'industry',
    points: [
      'Improved reliability of a SCIM user-provisioning API by adding Karate acceptance tests and redesigning REST logic from asynchronous to synchronous for accurate user lifecycle management.',
      'Shipped features through a Dockerized CI/CD workflow across dev and non-production AWS environments; co-built customer-facing React components with TDD.',
    ],
    tags: ['Java', 'Spring Boot', 'Kafka', 'DynamoDB', 'Kubernetes', 'React'],
  },
  {
    org: 'Guidewire Software',
    title: 'Software Engineering Intern',
    place: 'Bangalore',
    start: 'Jan 2024',
    end: 'May 2024',
    kind: 'industry',
    points: [
      'Contributed to Sentinel, a secure software-supply-chain management platform.',
    ],
    tags: ['Go', 'Ginkgo/Gomega', 'AWS SQS', 'S3', 'ArangoDB'],
  },
  {
    org: 'IIT (BHU) Varanasi',
    title: 'Research Intern',
    start: 'Jan 2024',
    end: 'May 2024',
    kind: 'research',
    points: [
      'Built a privacy-preserving CycleGAN pipeline for CT ↔ MRI conversion: a locally hosted vision encoder means raw patient scans never reach the GAN.',
      'Reached ~30 dB PSNR, comparable to baselines trained on raw data.',
    ],
    tags: ['CycleGAN', 'Medical imaging', 'Privacy'],
  },
  {
    org: 'Amrita Institute of Medical Sciences (BodyScan)',
    title: 'Research Intern',
    place: 'Faridabad',
    start: 'Nov 2023',
    end: 'Dec 2023',
    kind: 'research',
    points: [
      'Trained CNN models for non-invasive, early-stage disease screening from user-captured images.',
      'Lifted real-world accuracy from ~62% to ~97% by designing augmentations around how users actually capture photos (lighting, angle, quality) on a ~500-sample dataset.',
    ],
    tags: ['CNNs', 'Data augmentation', 'Healthcare'],
  },
  {
    org: 'IIT Patna',
    title: 'Research Intern',
    start: 'Sep 2023',
    end: 'Dec 2023',
    kind: 'research',
    points: [
      'Developed a GAN architecture to forecast a patient’s cancer survival probability over 30 years from clinical history and imaging.',
    ],
    tags: ['GANs', 'Survival analysis', 'Multimodal'],
  },
  {
    org: 'Amrita Vishwa Vidyapeetham',
    title: 'Undergraduate Research Intern',
    start: 'May 2023',
    end: 'Nov 2023',
    kind: 'research',
    points: [
      'Built an AI hospital chatbot on GPT-3.5 Turbo with prompt engineering and front-end data collection, using human feedback to refine prompts.',
    ],
    tags: ['LLMs', 'Prompt engineering', 'RLHF'],
  },
  {
    org: 'Nummero (Ginee)',
    title: 'AI/ML Developer Intern',
    start: 'Jul 2022',
    end: 'Mar 2023',
    kind: 'industry',
    points: [
      'First AI hire. Reproduced four published approaches for comparing visual content, then designed a combined CNN pipeline that fixed their individual weaknesses.',
      'Deployed it to predict A/B-test winners for marketing creatives. It matched live results ~75% of the time and made A/B testing 40% more efficient.',
      'Also shipped content automation: article and caption generation, text-to-image, background removal, rephrasing and summarization.',
    ],
    tags: ['CNNs', 'Generative AI', 'Production ML'],
  },
];

export const education = [
  {
    school: 'Arizona State University',
    degree: 'MS, Robotics & Autonomous Systems (Artificial Intelligence)',
    detail: 'School of Computing and Augmented Intelligence',
    when: '2027',
    score: 'GPA 4.22 / 4',
  },
  {
    school: 'Amrita Vishwa Vidyapeetham',
    degree: 'B.Tech, Computer Science & Engineering (AI)',
    detail: 'Silver medalist · Centre for Computational Engineering and Networking',
    when: '2020 to 2024',
    score: 'CGPA 9.16 / 10',
  },
];
