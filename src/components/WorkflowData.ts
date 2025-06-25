
export const initialNodes = [
  {
    id: 'step-1',
    type: 'step',
    position: { x: 50, y: 50 },
    data: {
      stepNumber: 1,
      items: [
        { type: 'text', label: 'Texto' },
        { type: 'text', label: 'Texto' },
        { type: 'video', label: 'Vídeo' },
        { type: 'text', label: 'Texto' },
        { type: 'audio', label: 'Áudio' },
      ],
    },
  },
  {
    id: 'step-2',
    type: 'step',
    position: { x: 350, y: 50 },
    data: {
      stepNumber: 2,
      items: [
        { type: 'text', label: 'Texto' },
        { type: 'image', label: 'Imagem' },
        { type: 'document', label: 'Espaço' },
        { type: 'audio', label: 'Áudio' },
        { type: 'text', label: 'Texto' },
        { type: 'image', label: 'Imagem' },
        { type: 'document', label: 'Espaço' },
        { type: 'audio', label: 'Áudio' },
      ],
    },
  },
  {
    id: 'step-3',
    type: 'step',
    position: { x: 650, y: 50 },
    data: {
      stepNumber: 3,
      items: [
        { type: 'text', label: 'Texto' },
        { type: 'text', label: 'Escolha Única' },
        { type: 'video', label: 'Vídeo' },
        { type: 'document', label: 'Espaço' },
        { type: 'audio', label: 'Áudio' },
      ],
    },
  },
  {
    id: 'step-4',
    type: 'step',
    position: { x: 950, y: 50 },
    data: {
      stepNumber: 4,
      items: [
        { type: 'text', label: 'Texto' },
        { type: 'video', label: 'Vídeo' },
        { type: 'document', label: 'Espaço' },
        { type: 'audio', label: 'Áudio' },
      ],
    },
  },
  {
    id: 'step-5',
    type: 'step',
    position: { x: 200, y: 300 },
    data: {
      stepNumber: 5,
      items: [
        { type: 'text', label: 'Texto' },
        { type: 'video', label: 'Vídeo' },
        { type: 'audio', label: 'Áudio' },
        { type: 'video', label: 'Vídeo' },
        { type: 'audio', label: 'Áudio' },
        { type: 'text', label: 'Texto' },
      ],
    },
  },
  {
    id: 'step-6',
    type: 'step',
    position: { x: 500, y: 300 },
    data: {
      stepNumber: 6,
      items: [
        { type: 'text', label: 'Texto' },
        { type: 'text', label: 'Texto' },
        { type: 'video', label: 'Vídeo' },
        { type: 'document', label: 'Espaço' },
        { type: 'audio', label: 'Áudio' },
      ],
    },
  },
  {
    id: 'step-7',
    type: 'step',
    position: { x: 800, y: 300 },
    data: {
      stepNumber: 7,
      items: [
        { type: 'text', label: 'Texto' },
        { type: 'text', label: 'Escolha Única' },
      ],
    },
  },
  {
    id: 'step-8',
    type: 'step',
    position: { x: 1100, y: 300 },
    data: {
      stepNumber: 8,
      items: [
        { type: 'text', label: 'Texto' },
        { type: 'text', label: 'Escolha Única' },
        { type: 'document', label: 'Espaço' },
      ],
    },
  },
];

export const initialEdges = [
  {
    id: 'e1-2',
    source: 'step-1',
    target: 'step-2',
    type: 'smoothstep',
    style: { stroke: '#94a3b8', strokeWidth: 2 },
  },
  {
    id: 'e2-3',
    source: 'step-2',
    target: 'step-3',
    type: 'smoothstep',
    style: { stroke: '#94a3b8', strokeWidth: 2 },
  },
  {
    id: 'e3-4',
    source: 'step-3',
    target: 'step-4',
    type: 'smoothstep',
    style: { stroke: '#94a3b8', strokeWidth: 2 },
  },
  {
    id: 'e2-5',
    source: 'step-2',
    target: 'step-5',
    type: 'smoothstep',
    style: { stroke: '#94a3b8', strokeWidth: 2 },
  },
  {
    id: 'e5-6',
    source: 'step-5',
    target: 'step-6',
    type: 'smoothstep',
    style: { stroke: '#94a3b8', strokeWidth: 2 },
  },
  {
    id: 'e6-7',
    source: 'step-6',
    target: 'step-7',
    type: 'smoothstep',
    style: { stroke: '#94a3b8', strokeWidth: 2 },
  },
  {
    id: 'e7-8',
    source: 'step-7',
    target: 'step-8',
    type: 'smoothstep',
    style: { stroke: '#94a3b8', strokeWidth: 2 },
  },
];
