// filterNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const FilterNode = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-input` },
    { type: 'source', position: Position.Right, id: `${id}-pass` },
    { type: 'source', position: Position.Bottom, id: `${id}-fail` },
  ];

  return (
    <BaseNode id={id} data={data} title="Filter" handles={handles}>
      <div style={{ padding: 10 }}>
        Simple metadata filter
      </div>
    </BaseNode>
  );
};
