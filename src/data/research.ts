// Add `year` and `link` (DOI / arXiv / Scholar) to each entry when you have them.
export type Publication = { title: string; venue: string; type: string; year?: string; link?: string };

export const publications: Publication[] = [
  {
    title: 'Understanding the Dynamics of the Evolution of Weights in Neural Networks using the Dynamic Mode Decomposition Approach',
    venue: 'IEEE',
    type: 'Conference',
  },
  {
    title: 'Multilingual Speech Emotion Recognition: Investigating Similarities between English and German',
    venue: 'IEEE',
    type: 'Conference',
  },
  {
    title: 'Going Beyond Traditional Methods: Using LSTM Networks to Predict Rainfall in Kerala',
    venue: 'Springer',
    type: 'Book chapter',
  },
  {
    title: 'A Comparison between Steepest Descent and Non-linear Conjugate Gradient Algorithms for Binding Energy Minimization of Organic Molecules',
    venue: 'IOP Journal of Physics: Conference Series',
    type: 'Journal',
  },
  {
    title: 'Implementation of Hack ALU using Quantum Dot Cellular Automata',
    venue: 'IEEE',
    type: 'Conference',
  },
  {
    title: 'Learning (With) Distributed Optimization',
    venue: 'ResearchGate',
    type: 'Preprint',
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Agents & GenAI', items: ['Agentic AI', 'LangGraph', 'LangChain', 'Anthropic SDK', 'OpenAI SDK', 'RAG', 'FAISS', 'Prompt engineering', 'Agent evaluation'] },
  { group: 'Robotics', items: ['ROS 2', 'Nav2', 'Motion planning', 'Visual servoing', 'RGB-D / point clouds', 'TurtleBot 4', 'Dobot Magician'] },
  { group: 'Vision & ML', items: ['PyTorch', 'TensorFlow', 'Hugging Face', 'YOLO', 'CLIP', 'LLaVA', 'OpenCV', 'GANs', 'Reinforcement learning'] },
  { group: 'Languages', items: ['Python', 'Java', 'Go', 'JavaScript', 'MATLAB'] },
  { group: 'Backend & Web', items: ['FastAPI', 'Flask', 'Spring Boot', 'REST', 'React', 'Streamlit', 'Microsoft Graph API'] },
  { group: 'Data & Infra', items: ['PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB', 'Kafka', 'Docker', 'Kubernetes', 'AWS', 'CI/CD'] },
];

// "Foundations": undergrad projects. Each one expands on click to show what it was
// (`what`) and what it taught me (`learned`). `link` is optional.
export type Foundation = { year: string; title: string; area: string; what: string; learned: string; link?: string };

export const foundations: Foundation[] = [
  {
    year: '2023', title: 'Interpreting neural layers with Dynamic Mode Decomposition', area: 'Deep learning · XAI',
    what: 'Used DMD plus explainability techniques to study how network weights evolve during training. Weights converge to specific points on the complex plane, and different layer types show distinct dynamics. Published at IEEE.',
    learned: 'How to treat a model as a dynamical system, and how to probe a black box with math instead of guesswork.',
  },
  {
    year: '2023', title: 'Bilingual (English/German) speech emotion recognition', area: 'Deep learning · Audio',
    what: 'Compared emotion recognition across English and German speech using MFCC features, outperforming the state-of-the-art baselines of the time. Published at IEEE.',
    learned: 'Models inherit the language and culture of their data, so evaluation has to cover the users you actually serve.',
  },
  {
    year: '2022', title: 'Neuro-driven wheels: DIY brain-computer interface kits', area: 'Hardware · BCI',
    what: 'Built low-cost brain-computer-interface projects for STEM education, including a vehicle steered by brain signals, to make BCI technology approachable for students.',
    learned: 'First time closing the loop between a noisy sensor and a moving machine. That was the seed of my robotics work.',
  },
  {
    year: '2022', title: 'Distilled GANs for image super-resolution', area: 'Deep learning', link: 'https://github.com/AkshayaJeyaprakash/Distilled-Learning-GAN',
    what: 'A GAN super-resolution model combining knowledge distillation with a refined, regularized loss. It beat established baselines on quality and trained faster.',
    learned: 'Loss design and distillation: making models smaller and faster without giving up quality.',
  },
  {
    year: '2022', title: 'Steepest descent vs. conjugate gradient for molecular energy', area: 'Optimization', link: 'https://github.com/AkshayaJeyaprakash/Binding_energy_minimization',
    what: 'Applied both optimizers to binding-energy minimization of organic molecules: conjugate gradient costs more per iteration but converges in far fewer. Published in IOP Journal of Physics.',
    learned: 'The optimization intuition behind every training loop I’ve written since.',
  },
  {
    year: '2022', title: 'Smart irrigation with Raspberry Pi, federated learning & blockchain', area: 'Hardware · Federated learning',
    what: 'Sensors on a Raspberry Pi feed an irrigation alarm; each household trains locally and model weights are recorded on a blockchain across time steps.',
    learned: 'Privacy-preserving ML at the edge, an idea I came back to for the CT↔MRI work at IIT (BHU).',
  },
  {
    year: '2022', title: 'MongoStreamify: a video streaming platform', area: 'Backend', link: 'https://github.com/EswarDivi/MongoStreamify',
    what: 'Upload, stream and watch video on a FastAPI + Jinja2 app backed by MongoDB, deployed with Docker.',
    learned: 'Shipping a real backend end to end, with APIs, storage and containers.',
  },
  {
    year: '2022', title: 'Rainfall forecasting in Kerala', area: 'Time series', link: 'https://drive.google.com/drive/folders/1CWF3fS0Wak4d4HJ-mBVbBEsTVxrWKmxi?usp=sharing',
    what: 'Benchmarked DMD, ARIMA, SARIMA, Prophet, least-squares prediction and LSTMs with a moving-window setup. Became a Springer book chapter.',
    learned: 'Always benchmark against simple baselines. The fancy model doesn’t always win.',
  },
  {
    year: '2021', title: 'DDoS detection in software-defined networks', area: 'Machine learning · Security',
    what: 'Simulated DDoS attacks in Mininet, extracted traffic features with Wireshark, and framed detection as an SVM classification problem.',
    learned: 'Building my own environment and dataset when none exists.',
  },
  {
    year: '2021', title: 'Stock forecasting with regression', area: 'Machine learning', link: 'https://drive.google.com/drive/folders/1q7x0bkzr5PlliO5Fa-P1syLGwtY9RDuQ?usp=sharing',
    what: 'Compared time-series regression methods for stock prediction and explained each one’s accuracy from how it works.',
    learned: 'Explaining why a model behaves the way it does, not just reporting a score.',
  },
  {
    year: '2021', title: 'Stock trend prediction with clustering', area: 'Machine learning', link: 'https://github.com/AkshayaJeyaprakash/Stock_predictions_clustering_algorithms',
    what: 'Predicted bullish vs. bearish trends using basic clustering algorithms instead of traditional time-series models.',
    learned: 'Reframing a problem can make a simple tool surprisingly effective.',
  },
  {
    year: '2021', title: 'RNA folding as an integer linear program', area: 'Optimization', link: 'https://github.com/AmritaAIE/ILPBIO-CEN/tree/main/RNA%20FOLDING',
    what: 'Formulated RNA secondary-structure prediction as an ILP and solved it with the Gurobi optimizer in MATLAB.',
    learned: 'Turning a messy real-world problem into clean constraints a solver can handle.',
  },
  {
    year: '2021', title: 'Graph of epistemic embeddings over Wikipedia', area: 'Graphs', link: 'https://github.com/AkshayaJeyaprakash/Graphical_Representation_of_Epistemic_Embeddings-',
    what: 'Crawled Wikipedia from a seed topic to a set depth and visualized how pages connect, as groundwork for knowledge graphs.',
    learned: 'Graphs as a way to structure knowledge. It’s the same idea behind retrieval for LLM agents.',
  },
  {
    year: '2020', title: 'Blockchain with Merkle trees', area: 'Data structures', link: 'https://github.com/AkshayaJeyaprakash/MerkelTree_Blockchain',
    what: 'An online blockchain network using Merkle trees for fast, secure verification, with a Python backend.',
    learned: 'Hashing, integrity and verification, which came up again in supply-chain security work at Guidewire.',
  },
  {
    year: '2020', title: 'Blockchain in MATLAB', area: 'Data structures', link: 'https://drive.google.com/drive/folders/1DMxZtF4J0Z-IGcDdKygY-00EkFMIbAXK?usp=sharing',
    what: 'A from-scratch blockchain with proof-of-work, built to learn object-oriented programming in MATLAB.',
    learned: 'Building something from first principles is the fastest way to really understand it.',
  },
  {
    year: '2020', title: 'Snake-game agent with Deep Q-Learning', area: 'Reinforcement learning', link: 'https://drive.google.com/drive/folders/14Hpz_a7Jla79zKgbN9sQdvH-yq0pd_kq?usp=sharing',
    what: 'Built a snake environment in Pygame and trained a Deep Q-Network in PyTorch to play it with no dataset, just rewards and penalties.',
    learned: 'Reward design and agents that learn by acting. It was my first step toward robot learning.',
  },
  {
    year: '2020', title: 'Dijkstra’s shortest path in MATLAB', area: 'Algorithms', link: 'https://github.com/AkshayaJeyaprakash/Dijkstra_path_finding_algorithm',
    what: 'A simple implementation of the shortest-path algorithm behind map routing.',
    learned: 'Graph search fundamentals, the same family of algorithms that solves the maze on my Dobot arm.',
  },
  {
    year: '2020', title: 'PageRank via eigendecomposition', area: 'Linear algebra', link: 'https://drive.google.com/drive/folders/10npglk7PDiKnxIfXoiGgwV73jo3V3bEM?usp=drive_link',
    what: 'Implemented PageRank from eigenvectors and eigenvalues to rank pages by importance.',
    learned: 'Linear algebra as a practical tool, not just theory.',
  },
  {
    year: '2020', title: 'Socket-based chat messenger in Java', area: 'Networking', link: 'https://drive.google.com/drive/folders/1q1OGmQrx7d41YLGLCB2k9HReFRjQ_CHl?usp=sharing',
    what: 'A chat app with a GUI, built on raw sockets and ports to understand how networked apps really talk.',
    learned: 'How services communicate under the hood, which I relied on daily when I later worked on distributed systems.',
  },
];

export const awards: {
  title: string;
  event: string;
  year: string;
  detail?: string;
  tags?: string[];
  link?: string;
  image?: { src: string; alt: string };
}[] = [
  {
    title: 'Most Innovative Hack',
    event: 'Voxel51 Hackathon · The GAME School at ASU',
    year: '2026',
    detail:
      'With Nivas Piduru, extended the FiftyOne MCP server from one-query-one-tool-call to goal-driven agents: a single high-level instruction is broken into a sequence of steps, each building on the last, with intermediate results tracked and the next action chosen at every stage.',
    tags: ['Agentic AI', 'MCP', 'Tool orchestration', 'Computer vision', 'FiftyOne'],
    link: 'https://github.com/AkshayaJeyaprakash/fiftyone-mcp-server',
    image: { src: 'images/voxel51-hackathon.webp', alt: 'Akshaya and teammate Nivas Piduru on stage with the Voxel51 team after winning Most Innovative Hack' },
  },
  {
    title: 'Silver Medal',
    event: 'B.Tech CSE (AI), Amrita Vishwa Vidyapeetham',
    year: '2024',
  },
];
