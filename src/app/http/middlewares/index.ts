import { handleBodyRequestParsing, handleCompression, handleCors } from './common-handlers';

export default [
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
];
