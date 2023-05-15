"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = exports.UserService = exports.UserRepository = void 0;
const server_1 = __importDefault(require("./server"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const databaseconnection_1 = __importDefault(require("./database/databaseconnection"));
const server = new server_1.default();
console.log("===========", process.env.PORT);
class UserRepository {
    constructor(db) {
        this.db = db;
        console.log('UserRepository constructor called');
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const [newUser] = yield this.db('users').insert(user).returning('*');
            return newUser;
        });
    }
}
exports.UserRepository = UserRepository;
class UserService {
    constructor(db) {
        this.userRepository = new UserRepository(db);
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userRepository.create(user);
        });
    }
}
exports.UserService = UserService;
class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    signUp(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const x = yield this.userService.createUser(user);
                console.log("=====+++++++++++.", x);
            }
            catch (error) {
                console.log("===================", error);
            }
        });
    }
}
exports.UserController = UserController;
const userService = new UserService(databaseconnection_1.default);
const userController = new UserController(userService);
const user = {
    name: "John Doe",
    username: "johndoe"
};
userController.signUp(user);
