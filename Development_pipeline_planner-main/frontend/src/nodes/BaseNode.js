// BaseNode.js
import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, data, title, handles = [], children, style }) => {
  return (
    <div className="custom-node" style={style}>
      <div className="custom-node-header">
        <span>{title}</span>
      </div>
      <div className="custom-node-body">
        {children}
      </div>
      {handles.map((handle, index) => (
        <Handle
          key={`${id}-${handle.id}-${index}`}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={handle.style}
        />
      ))}
    </div>
  );
};
