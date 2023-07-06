import React from 'react';
import { GiLinkedRings } from 'react-icons/gi';

function InternalGlobalRenderer(props) {
  const { renderDefault } = props;
  return (
    <span>
      {renderDefault(props)}
      <a
        contentEditable={false}
        href={props?.value?.href || '#'}
        target="_blank"
        style={{ paddingLeft: '8px', paddingRight: '4px' }}
        rel="noreferrer"
      >
        <GiLinkedRings size="16px" style={{ verticalAlign: 'middle' }} />
      </a>
    </span>
  );
}

export default InternalGlobalRenderer;
