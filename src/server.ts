import express from "express";
import bodyParser from "body-parser";
import authRouter from './interface/routes/authRouts'

class App {
    private readonly app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.registerRoutes();
    }
    private config() {
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
    }


    // Initialize all the routes of the application
    private registerRoutes(): void {
        const router = express.Router();       
        this.app.use('/api/signupuser/', authRouter)

    }

    // Server will listen to this port
    private startServer() {
        try {
            //const PORT: number = 8080;
            this.app.listen(process.env.PORT, () => {
                console.log(`App listening on port ===> http://localhost:${process.env.PORT}/`);
            });
        } catch (error) {
            console.error('Server could not be started', error);
            process.exit(1);
        }

    }
}



export default App;
