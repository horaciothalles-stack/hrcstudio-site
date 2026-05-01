import { createServer } from 'node:http';

const mod = await import('../dist/server/server.js');
export default mod.default ?? mod;
