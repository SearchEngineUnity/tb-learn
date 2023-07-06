/* eslint-disable import/prefer-default-export */
import React from 'react';
import Widget from './GatsbyWidget';

export function gatsbyWidget(config) {
  const {
    site: { title, name, id },
  } = config;

  return {
    title,
    name,
    id,
    component: () => <Widget {...config} />,
  };
}
