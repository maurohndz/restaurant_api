import type * as http from 'http';
import bodyParser from 'body-parser';
import express, { Router } from 'express';
//
import { registerRoutes } from './registerRoutes';

class Server {
  private readonly port: string;
  private readonly version: string;
  private readonly express: express.Express;
  private httpServer?: http.Server;

  constructor(port: string, version: string) {
    this.port = port;
    this.version = version;

    // Init App
    this.express = express();

    // Config app
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));

    // Config Routes
    const router = Router();
    this.express.use('/api/v1/', router);
    // Register routes
    registerRoutes(router);
  }

  // Listen Server
  async listen(): Promise<void> {
    await new Promise<void>((resolve) => {
      this.httpServer = this.express.listen(this.port, () => {
        // eslint-disable-next-line prettier/prettier
        console.log(`Backend App is running at http://localhost:${this.port}/api/${this.version} in ${this.express.get('env')} mode`);

        resolve();
      });
    });
  }

  // Stop Server
  async stop(): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      if (this.httpServer != null) {
        this.httpServer.close((error) => {
          if (error != null) {
            reject(error);
          }

          resolve();
        });
      }

      resolve();
    });
  }
}

export default Server;
