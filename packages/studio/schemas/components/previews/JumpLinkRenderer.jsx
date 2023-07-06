/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { MdLink } from 'react-icons/md';

function JumpLinkRenderer(props) {
  const { renderDefault } = props;
  return (
    <span>
      {renderDefault(props)}
      <a contentEditable={false} href="#" style={{ paddingLeft: '8px', paddingRight: '4px' }}>
        <MdLink size="16px" style={{ verticalAlign: 'middle' }} />
      </a>
    </span>
  );
}

export default JumpLinkRenderer;
