// noteNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const NoteNode = ({ id, data }) => {
  // Notes might not have handles, or maybe just one to attach to things
  const handles = []; 

  return (
    <BaseNode id={id} data={data} title="Note" handles={handles} style={{ backgroundColor: '#fff9c4' }}>
      <textarea 
        placeholder="Type note here..." 
        style={{ width: '100%', height: 60, border: 'none', resize: 'none', background: 'transparent' }}
      />
    </BaseNode>
  );
};
