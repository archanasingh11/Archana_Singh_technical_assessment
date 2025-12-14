// apiNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const APINode = ({ id, data }) => {
  const [method, setMethod] = useState('GET');
  
  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-params` },
    { type: 'source', position: Position.Right, id: `${id}-response` },
  ];

  return (
    <BaseNode id={id} data={data} title="API Request" handles={handles}>
      <label>
        Method:
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
        </select>
      </label>
      <input type="text" placeholder="https://api.example.com" style={{ width: '100%', marginTop: 5 }} />
    </BaseNode>
  );
};
