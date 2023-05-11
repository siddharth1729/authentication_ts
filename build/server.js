"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.registerRoutes();
        this.startServer();
    }
    config() {
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(body_parser_1.default.json());
    }
    // Initialize all the routes of the application
    registerRoutes() {
        const router = express_1.default.Router();
    }
    // Server will listen to this port
    startServer() {
        try {
            const PORT = 8080;
            this.app.listen(process.env.PORT || PORT, () => {
                console.log(`App listening on port ===> http://localhost:${PORT}/`);
            });
        }
        catch (error) {
            console.error('Server could not be started', error);
            process.exit(1);
        }
    }
}
exports.default = App;
