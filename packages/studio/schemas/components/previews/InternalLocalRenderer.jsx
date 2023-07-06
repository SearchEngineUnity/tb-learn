import React from 'react';
import { FaLink } from 'react-icons/fa';

function InternalLocalRenderer(props) {
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
        <FaLink size="14px" style={{ verticalAlign: 'middle' }} />
      </a>
    </span>
  );
}

export default InternalLocalRenderer;
