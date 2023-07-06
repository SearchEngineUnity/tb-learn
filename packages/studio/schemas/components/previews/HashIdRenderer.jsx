import React from 'react';
import { FaHashtag } from 'react-icons/fa';

function HashIdRenderer(props) {
  const { renderDefault } = props;
  return (
    <span>
      {renderDefault(props)}
      <FaHashtag
        size="14px"
        style={{
          display: 'inline',
          paddingLeft: '8px',
          paddingRight: '4px',
          verticalAlign: 'middle',
        }}
      />
    </span>
  );
}

export default HashIdRenderer;
