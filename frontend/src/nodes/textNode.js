// textNode.js

import { useState, useEffect, useRef } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

// Helper to calculate handle position
// Spacing handles evenly or at fixed intervals
const getHandleStyle = (index, total) => {
  // If we want them distributed along the left side:
  // return { top: `${((index + 1) / (total + 1)) * 100}%` };
  
  // Or fixed logic:
  return { top: 50 + (index * 24) }; // Simple offset, might need tuning
};

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [handles, setHandles] = useState([]);
  const textareaRef = useRef(null);

  // Regex to find {{ variable }}
  // Matches {{ variableName }} where variableName is a valid JS identifier
  const variableRegex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

  useEffect(() => {
    // Parse text for variables
    const matches = [...currText.matchAll(variableRegex)];
    const variables = Array.from(new Set(matches.map(m => m[1]))); // Unique variables

    // Generate output handle (always present)
    const newHandles = [
      {
        type: 'source',
        position: Position.Right,
        id: `${id}-output`,
      }
    ];

    // Generate input handles for variables
    variables.forEach((variable, index) => {
      newHandles.push({
        type: 'target',
        position: Position.Left,
        id: `${id}-${variable}`,
        style: { top: `${index * 20 + 50}px` } // Stack them starting from top
      });
    });

    setHandles(newHandles);
  }, [currText, id]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode id={id} data={data} title="Text" handles={handles}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <label style={{ marginBottom: 5 }}>
            Text:
        </label>
        <textarea 
            ref={textareaRef}
            value={currText} 
            onChange={handleTextChange} 
            style={{
                width: '100%',
                minHeight: '40px',
                resize: 'none',
                overflow: 'hidden',
                boxSizing: 'border-box'
            }}
        />
      </div>
    </BaseNode>
  );
}
