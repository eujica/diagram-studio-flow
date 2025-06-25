
import React, { useCallback } from 'react';
import {
  ReactFlow,
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Connection,
  Edge,
  ConnectionMode,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { initialNodes, initialEdges } from './WorkflowData';
import StepNode from './StepNode';
import './WorkflowSystem.css';

const nodeTypes = {
  step: StepNode,
};

const WorkflowSystem = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const addNewStep = () => {
    const newId = `step-${nodes.length + 1}`;
    const newNode = {
      id: newId,
      type: 'step',
      position: { x: Math.random() * 500, y: Math.random() * 300 },
      data: {
        stepNumber: nodes.length + 1,
        items: [
          { type: 'text', label: 'Texto' },
        ],
      },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const organizeNodes = () => {
    const organizedNodes = nodes.map((node, index) => ({
      ...node,
      position: {
        x: (index % 4) * 300 + 50,
        y: Math.floor(index / 4) * 200 + 50,
      },
    }));
    setNodes(organizedNodes);
  };

  return (
    <div className="workflow-container">
      <div className="workflow-toolbar">
        <button onClick={addNewStep} className="add-step-btn">
          + Adicionar etapa
        </button>
        <button onClick={organizeNodes} className="organize-btn">
          Auto-organizar
        </button>
      </div>
      <div className="workflow-canvas">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          connectionMode={ConnectionMode.Loose}
          fitView
          style={{ backgroundColor: '#f8f9fa' }}
        >
          <MiniMap />
          <Controls />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </div>
    </div>
  );
};

export default WorkflowSystem;
