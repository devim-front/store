"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrictStore = void 0;
var service_1 = require("@devim-front/service");
/**
 * Строгое хранилище.
 *
 * @template E Коллекция событий хранилища.
 */
var StrictStore = /** @class */ (function (_super) {
    __extends(StrictStore, _super);
    function StrictStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StrictStore;
}(service_1.StrictService));
exports.StrictStore = StrictStore;
