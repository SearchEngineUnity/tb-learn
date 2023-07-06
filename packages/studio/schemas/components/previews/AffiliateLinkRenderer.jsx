import React from 'react';
import { TbFileDollar } from 'react-icons/tb';

function AffiliateLinkRenderer(props) {
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
        <TbFileDollar size="17px" style={{ verticalAlign: 'middle' }} />
      </a>
    </span>
  );
}

export default AffiliateLinkRenderer;
