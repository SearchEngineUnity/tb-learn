import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

function ExternalLinkRenderer(props) {
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
        <FaExternalLinkAlt size="14px" style={{ verticalAlign: 'middle' }} />
      </a>
    </span>
  );
}

export default ExternalLinkRenderer;
