"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cities_1 = __importDefault(require("./api/cities"));
var routes = (0, express_1.Router)();
routes.get('/', function (req, res) {
    res.send('hello welcome to the project main router');
});
routes.use('/city', cities_1.default);
exports.default = routes;
