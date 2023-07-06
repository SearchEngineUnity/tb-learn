// this is currently not in use but is kept should we ever work ont his feature

/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import client from 'part:@sanity/base/client';

const { projectId, dataset } = client.config();

const InlineImageRenderer = ({ asset, children }) => {
  if (asset && children) {
    const image = asset._ref.replace(/image-/, '').replace(/\-(?![\s\S]*\-)/, '.'); // eslint-disable-line
    const imageCdn = `https://cdn.sanity.io/images/${projectId}/${dataset}/`;

    return (
      <span>
        <img src={`${imageCdn}${image}`} alt={children} width="100%" height="auto" />
      </span>
    );
  }
  if (children) {
    return (
      <span>
        Alt text:
        {children}
      </span>
    );
  }
  return null;
};

InlineImageRenderer.propTypes = {
  children: PropTypes.node.isRequired,
  asset: PropTypes.isRequired,
};

export default InlineImageRenderer;
