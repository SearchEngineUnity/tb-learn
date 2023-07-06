/* eslint-disable import/prefer-default-export */
import * as portableTexts from './portableTexts';
import * as blocks from './blocks';
import * as documents from './documents';
import * as formParts from './formParts';
import * as insertables from './insertables';
import * as sections from './sections';
import * as types from './types';

export const schemaTypes = [
  ...Object.values(types),
  ...Object.values(portableTexts),
  ...Object.values(formParts),
  ...Object.values(insertables),
  ...Object.values(blocks),
  ...Object.values(sections),
  ...Object.values(documents),
];
