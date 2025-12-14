// debugNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const DebugNode = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-in` },
  ];

  return (
    <BaseNode id={id} data={data} title="Debug" handles={handles} style={{ border: '2px dashed red' }}>
      <div style={{ fontSize: 10, fontFamily: 'monospace' }}>
        Waiting for data...
      </div>
    </BaseNode>
  );
};
