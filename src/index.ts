import './config/loadEnv';
import config from './config';
import Server from './server/server';

const server = new Server(config.api.port, config.api.version);

void server.listen();
