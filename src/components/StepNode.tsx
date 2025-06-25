
import React, { useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Plus, Type, Image, Video, Headphones, FileText, Trash2 } from 'lucide-react';

interface StepItem {
  type: 'text' | 'image' | 'video' | 'audio' | 'document';
  label: string;
}

interface StepNodeProps {
  data: {
    stepNumber: number;
    items: StepItem[];
  };
  id: string;
}

const getIcon = (type: string) => {
  switch (type) {
    case 'text':
      return <Type size={14} />;
    case 'image':
      return <Image size={14} />;
    case 'video':
      return <Video size={14} />;
    case 'audio':
      return <Headphones size={14} />;
    case 'document':
      return <FileText size={14} />;
    default:
      return <Type size={14} />;
  }
};

const StepNode: React.FC<StepNodeProps> = ({ data, id }) => {
  const [items, setItems] = useState(data.items);
  const [showAddMenu, setShowAddMenu] = useState(false);

  const addItem = (type: StepItem['type']) => {
    const newItem: StepItem = {
      type,
      label: type.charAt(0).toUpperCase() + type.slice(1),
    };
    setItems([...items, newItem]);
    setShowAddMenu(false);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="step-node">
      <Handle type="target" position={Position.Left} className="handle" />
      
      <div className="step-header">
        <span className="step-number">{data.stepNumber}</span>
      </div>
      
      <div className="step-content">
        {items.map((item, index) => (
          <div key={index} className="step-item">
            <div className="item-content">
              {getIcon(item.type)}
              <span className="item-label">{item.label}</span>
            </div>
            <button
              className="remove-item-btn"
              onClick={() => removeItem(index)}
            >
              <Trash2 size={12} />
            </button>
          </div>
        ))}
        
        <div className="add-item-section">
          {showAddMenu ? (
            <div className="add-menu">
              {(['text', 'image', 'video', 'audio', 'document'] as const).map((type) => (
                <button
                  key={type}
                  className="add-option"
                  onClick={() => addItem(type)}
                >
                  {getIcon(type)}
                  <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                </button>
              ))}
            </div>
          ) : (
            <button
              className="add-item-btn"
              onClick={() => setShowAddMenu(true)}
            >
              <Plus size={14} />
              <span>Adicionar</span>
            </button>
          )}
        </div>
      </div>
      
      <Handle type="source" position={Position.Right} className="handle" />
    </div>
  );
};

export default StepNode;
