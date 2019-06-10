import { handleBodyRequestParsing, handleCompression, handleCors } from './common-handlers';
import { handleXssProtection, handleXframeProtection, handleNoSniffProtection } from './security-handler';

export default [
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
  handleXssProtection,
  handleXframeProtection,
  handleNoSniffProtection,
];
