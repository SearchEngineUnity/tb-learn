/* eslint-disable import/prefer-default-export */
import React from 'react';
import Widget from './SanityLimitWidget';

export function sanityLimitWidget({ projectId }) {
  return {
    title: 'Attribute Limit',
    name: 'attribute-limit',
    id: 'attribute-limit',
    component: () => <Widget projectId={projectId} />,
  };
}
