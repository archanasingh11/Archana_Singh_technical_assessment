// draggableNode.js

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        style={{ 
          cursor: 'grab', 
          minWidth: '60px', 
          height: '60px',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          flexDirection: 'column',
          backgroundColor: '#fff',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '8px 16px',
          boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
          color: '#1e293b',
          fontWeight: '500',
          fontSize: '12px',
          transition: 'all 0.2s',
          gap: '4px'
        }}
        draggable
      >
        <span style={{ fontSize: '16px' }}>
            {/* You could add icons here based on type */}
            {type === 'customInput' && '📥'}
            {type === 'customOutput' && '📤'}
            {type === 'llm' && '🤖'}
            {type === 'text' && '📄'}
            {type === 'transform' && '🔧'}
            {type === 'filter' && '🔍'}
            {type === 'note' && '📝'}
            {type === 'api' && '🌐'}
            {type === 'debug' && '🐞'}
        </span>
        {label}
      </div>
    );
  };