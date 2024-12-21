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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("@/lib/mongodb");
var user_model_1 = require("@/models/user.model");
var nodemailer_1 = require("nodemailer");
require("dotenv/config");
var fs_1 = require("fs");
var path_1 = require("path");
var mustache_1 = require("mustache");
var GMAIL = process.env.GMAIL;
var PASSWORD = process.env.PASSWORD;
var transporter = nodemailer_1.default.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: GMAIL,
        pass: PASSWORD,
    },
});
// Verify SMTP Configuration
transporter.verify(function (error, success) {
    if (error) {
        console.error("SMTP Configuration Error:", error);
    }
    else {
        console.log("SMTP Configuration is correct!");
    }
});
var otpMail = function (email, data) { return __awaiter(void 0, void 0, void 0, function () {
    var template, message, info, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                template = fs_1.default.readFileSync(path_1.default.join(process.cwd(), "views/email/otp.html"), "utf-8");
                message = {
                    from: GMAIL,
                    to: email,
                    subject: "OTP Untuk Verifikasi Akun",
                    html: mustache_1.default.render(template, data),
                };
                return [4 /*yield*/, transporter.sendMail(message)];
            case 1:
                info = _a.sent();
                return [2 /*return*/, info];
            case 2:
                error_1 = _a.sent();
                console.error("Error in otpMail:", error_1);
                throw error_1;
            case 3: return [2 /*return*/];
        }
    });
}); };
function processUsersWithOTP() {
    return __awaiter(this, void 0, void 0, function () {
        var users, _i, users_1, user, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, mongodb_1.default)()];
                case 1:
                    _a.sent();
                    console.log("Database connected");
                    console.log("Checking users with active OTP...");
                    return [4 /*yield*/, user_model_1.default.find({
                            otp: { $ne: null },
                            deleted_at: null,
                            otp_expires_at: { $gt: new Date() },
                            otp_status: false,
                            processing: false,
                        })];
                case 2:
                    users = _a.sent();
                    _i = 0, users_1 = users;
                    _a.label = 3;
                case 3:
                    if (!(_i < users_1.length)) return [3 /*break*/, 12];
                    user = users_1[_i];
                    _a.label = 4;
                case 4:
                    _a.trys.push([4, 8, 9, 11]);
                    user.processing = true;
                    return [4 /*yield*/, user.save()];
                case 5:
                    _a.sent();
                    console.log("Sending OTP to ".concat(user.email));
                    return [4 /*yield*/, otpMail(user.email, { otp: user.otp })];
                case 6:
                    _a.sent();
                    console.log("OTP sent to ".concat(user.email));
                    user.otp_status = true;
                    return [4 /*yield*/, user.save()];
                case 7:
                    _a.sent();
                    return [3 /*break*/, 11];
                case 8:
                    err_1 = _a.sent();
                    console.log("Error sending OTP to ".concat(user.email, ": ").concat(err_1.message));
                    return [3 /*break*/, 11];
                case 9:
                    user.processing = false;
                    return [4 /*yield*/, user.save()];
                case 10:
                    _a.sent();
                    return [7 /*endfinally*/];
                case 11:
                    _i++;
                    return [3 /*break*/, 3];
                case 12: return [2 /*return*/];
            }
        });
    });
}
function startProcessUsersWithOTP() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!true) return [3 /*break*/, 3];
                    return [4 /*yield*/, processUsersWithOTP()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 5000); })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 0];
                case 3: return [2 /*return*/];
            }
        });
    });
}
startProcessUsersWithOTP();
