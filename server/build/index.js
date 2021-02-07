"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var expressConfig_1 = __importDefault(require("./configs/expressConfig"));
var route_1 = __importDefault(require("./routes/route"));
var app = express_1.default();
mongoose_1.default
    .connect("mongodb://" + process.env.DB_SERVERS + "/" + process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(function (error) {
    console.log('connection error', error);
})
    .then(function () {
    expressConfig_1.default(app);
    new route_1.default(app);
    app.listen(3000, function () {
        console.log('listening on port 3000');
    });
});
