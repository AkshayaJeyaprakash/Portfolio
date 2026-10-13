// Media paths are relative to /public. Any file that doesn't exist yet renders as a
// "no signal" placeholder, so you can list videos now and drop the files in later.
export type MediaItem =
  | { kind: 'video'; src: string; caption: string; poster?: string }
  | { kind: 'youtube'; id: string; caption: string }
  | { kind: 'image'; src: string; caption: string };

export type Project = {
  slug: string;
  title: string;
  label: string; // detection-style class label shown on cards
  tagline: string;
  when: string;
  context: string;
  team: string;
  stack: string[];
  cover: MediaItem;
  metrics: { value: string; label: string }[];
  summary: string;
  pipeline: { step: string; detail: string }[];
  myRole?: string[];
  media: MediaItem[];
  repo: string;
};

export const projects: Project[] = [
  {
    slug: 'atom',
    title: 'ATOM',
    label: 'mobile_robot',
    tagline: 'A TurtleBot 4 that finds anything you describe, like “find the red bottle”, with no retraining.',
    when: 'Mar to May 2026',
    context: 'RAS 598 · Mobile Robotics, ASU',
    team: 'Team of 3, with Moss Barnett & Nivas Piduru',
    stack: ['ROS 2 Jazzy', 'Nav2', 'YOLOv8', 'CLIP', 'LLaVA', 'OAK-D', 'Flask', 'Streamlit'],
    cover: { kind: 'video', src: 'videos/atom-perception.mp4', caption: 'Onboard perception: live YOLO detections' },
    metrics: [
      { value: '72%', label: 'end-to-end success over 25 trials' },
      { value: '10-15s', label: 'to find a remembered object (vs 5-10 min exploring)' },
      { value: '3', label: 'model ensemble: YOLO, CLIP and LLaVA' },
      { value: '0', label: 'environment-specific retraining' },
    ],
    summary:
      'ATOM (Autonomous Task & Object Management) turns a typed or spoken request into a full search-and-approach mission. An LLM parses the request, a persistent spatial memory recalls where similar objects were last seen, Nav2 drives there, and a three-model ensemble confirms the target before closed-loop depth control brings the robot within arm’s reach. It runs across three machines: the robot, a ROS 2 VM, and a GPU host for inference.',
    pipeline: [
      { step: 'Parse', detail: 'LLaVA turns “find the red bottle” into a detector class plus a visual description.' },
      { step: 'Recall', detail: 'A JSON spatial memory ranks places the object was seen before, by confidence.' },
      { step: 'Navigate', detail: 'Nav2 (AMCL + MPPI) visits remembered poses, falling back to lawnmower-pattern coverage.' },
      { step: 'Detect', detail: 'YOLOv8n runs on the live OAK-D stream, then the robot centers the target visually.' },
      { step: 'Validate', detail: 'CLIP similarity and LLaVA reasoning must agree before the robot commits.' },
      { step: 'Approach', detail: 'Stereo-depth closed loop drives to 0.45 m, then celebrates with sound + LEDs.' },
    ],
    myRole: [
      'Navigation goal management: the Nav2 action client and costmap handling.',
      'Safety monitor: a 10 Hz emergency-stop override that bypasses Nav2, plus battery auto-docking below 20%.',
      'Exploration coordination: the 10-state, 10 Hz state machine that orchestrates the whole mission.',
    ],
    media: [
      { kind: 'youtube', id: 'H7eNWHjfP0s', caption: 'Exploring the lab and reaching a fire extinguisher' },
      { kind: 'youtube', id: 'XrjEcctO69g', caption: 'Autonomous battery docking' },
      { kind: 'video', src: 'videos/atom-perception.mp4', caption: 'Onboard YOLO perception' },
      { kind: 'image', src: 'images/atom/depth.png', caption: 'Measured OAK-D depth error: ±0.2 cm at 1 m vs 25 cm spread at 2.5 m, which is why ATOM only trusts depth up close' },
      { kind: 'image', src: 'images/atom/rqt-graph.jpg', caption: 'The live ROS 2 node graph' },
    ],
    repo: 'https://github.com/AkshayaJeyaprakash/Project_ATOM_RAS598',
  },
  {
    slug: 'maze-dobot',
    title: 'Maze-Solving Arm',
    label: 'robot_arm',
    tagline: 'A Dobot arm that looks at a hand-drawn maze, solves it, and traces the path on voice command.',
    when: 'Nov 2025',
    context: 'Robotics coursework, ASU',
    team: 'Solo project',
    stack: ['ROS 2', 'OpenCV', 'MCP (ros-mcp-bridge)', 'LLMs', 'Dobot Magician', 'Streamlit'],
    cover: { kind: 'image', src: 'images/maze/cover.jpg', caption: 'Solved path overlaid on the camera view' },
    metrics: [
      { value: '0.0', label: 'collision ratio on verified paths' },
      { value: '9', label: 'stage vision pipeline, every stage logged' },
      { value: 'px → mm', label: 'camera-to-arm calibration' },
    ],
    summary:
      'An overhead camera captures a physical maze; a perception node corrects perspective, finds the red and green start/end markers, detects the grid, and solves it. The path is verified against the walls, converted from pixels into arm coordinates, and drawn by the Dobot. An LLM connected through an MCP bridge to ROS lets you just say “finish at red”, and it works out that means starting from green.',
    pipeline: [
      { step: 'Capture', detail: 'Grab a frame and warp the maze to a top-down view.' },
      { step: 'Markers', detail: 'Detect the red and green dots, then carve them out of the binary map.' },
      { step: 'Grid', detail: 'Find grid lines and edges to build a cell graph.' },
      { step: 'Solve', detail: 'Search the cell graph and verify the path never crosses a wall.' },
      { step: 'Map', detail: 'Unwarp waypoints and transform pixels to Dobot coordinates.' },
      { step: 'Draw', detail: 'Executor node traces the path; natural-language commands arrive via MCP.' },
    ],
    media: [
      { kind: 'video', src: 'videos/maze-dobot.mp4', caption: 'Demo: the arm solving and tracing the maze' },
      { kind: 'image', src: 'images/maze/01-capture.jpg', caption: '1 · Raw capture' },
      { kind: 'image', src: 'images/maze/03-dots.jpg', caption: '2 · Start / end marker detection' },
      { kind: 'image', src: 'images/maze/04-grid.jpg', caption: '3 · Grid detection' },
      { kind: 'image', src: 'images/maze/05-solved.jpg', caption: '4 · Solved path' },
      { kind: 'image', src: 'images/maze/06-waypoints.jpg', caption: '5 · Waypoints for the arm' },
    ],
    repo: 'https://github.com/AkshayaJeyaprakash/MazeSolving_Dobot_using_ROS2',
  },
  {
    slug: 'language-dobot',
    title: 'Talk-to-Arm',
    label: 'manipulator',
    tagline: '“Put the block nearest the camera between red and yellow.” Language-driven pick-and-place.',
    when: 'Nov to Dec 2025',
    context: 'Robotics coursework, ASU',
    team: 'Solo project',
    stack: ['ROS 2', 'Gemini 2.5 Flash', 'OpenCV', '3D pose estimation', 'Dobot Magician', 'Streamlit'],
    cover: { kind: 'image', src: 'images/blocks/annotated.png', caption: 'Blocks detected with color, position and rotation' },
    metrics: [
      { value: '~90%', label: 'task accuracy under noisy camera input' },
      { value: '5', label: 'operations: stack, stack-all, row, beside, between' },
      { value: '4', label: 'ROS 2 nodes: perception → parse → convert → execute' },
    ],
    summary:
      'A vision node detects blocks with their color, position and rotation and keeps a memory of the scene. An LLM parser with full spatial awareness turns free-form requests like “the farthest block”, “next to the stack” or “between red and yellow” into structured commands, with a stack-protection rule so it never knocks over a tower you didn’t mention. The executor plans and runs the arm motions, with a web dashboard for live monitoring.',
    pipeline: [
      { step: 'Perceive', detail: 'Color segmentation + pose estimation for each block, including rotation.' },
      { step: 'Remember', detail: 'A block memory tracks positions and which blocks are stacked.' },
      { step: 'Parse', detail: 'Gemini resolves spatial references (nearest, farthest, between) into block IDs.' },
      { step: 'Convert', detail: 'Pixel waypoints are transformed into arm coordinates.' },
      { step: 'Execute', detail: 'Stack, arrange in a row, or place beside / between, with live status.' },
    ],
    media: [
      { kind: 'video', src: 'videos/language-dobot.mp4', caption: 'Demo: natural-language block manipulation' },
      { kind: 'image', src: 'images/blocks/annotated.png', caption: 'Detection with rotation estimates' },
      { kind: 'image', src: 'images/blocks/detected.png', caption: 'Raw detections' },
    ],
    repo: 'https://github.com/AkshayaJeyaprakash/Controlling_Dobot_using_Natural_Language',
  },
  {
    slug: 'tictactoe-dobot',
    title: 'Tic-Tac-Toe Arm',
    label: 'game_agent',
    tagline: 'A robot arm that draws the board, reads your move with YOLO, and never loses.',
    when: 'Dec 2025',
    context: 'Robotics coursework, ASU',
    team: 'Course project',
    stack: ['YOLO (custom-trained)', 'OpenCV', 'Minimax', 'Dobot Magician', 'Python'],
    cover: { kind: 'video', src: 'videos/tictactoe-dobot.mp4', caption: 'A full game against the arm' },
    metrics: [
      { value: 'Custom', label: 'YOLO model trained to read X / O marks' },
      { value: 'Minimax', label: 'game search for optimal play' },
      { value: 'Pen', label: 'the arm physically draws grid, X and O' },
    ],
    summary:
      'The arm draws a 3×3 grid with a pen and waits for the human to play. A camera polls the board, a custom-trained YOLO model reads each cell, and the system diffs the new board against the last one to find your move. Minimax picks the reply and the arm draws its X or O in the right cell, until someone wins or it’s a draw.',
    pipeline: [
      { step: 'Draw', detail: 'The arm draws the board from calibrated grid points.' },
      { step: 'Watch', detail: 'The camera polls the board; YOLO classifies each cell.' },
      { step: 'Diff', detail: 'Compare with the previous board to detect the human’s move.' },
      { step: 'Decide', detail: 'Minimax evaluates the board and picks the optimal move.' },
      { step: 'Play', detail: 'The arm draws X or O and checks for a win.' },
    ],
    media: [
      { kind: 'video', src: 'videos/tictactoe-dobot.mp4', caption: 'Demo: a full game against the arm' },
    ],
    repo: 'https://github.com/AkshayaJeyaprakash/Dobot_TicTacToe',
  },
];
