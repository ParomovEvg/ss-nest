"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const openapi = require("@nestjs/swagger");
const error_dto_1 = require("../../asets/error.dto");
var DatesAreTakenNames;
(function (DatesAreTakenNames) {
    DatesAreTakenNames["DatesAreTaken"] = "DatesAreTaken";
})(DatesAreTakenNames = exports.DatesAreTakenNames || (exports.DatesAreTakenNames = {}));
class DatesAreTaken {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, enum: require("./draw.errors.dto").DatesAreTakenNames }, message: { required: true, type: () => String }, param: { required: true, type: () => ({ startTaken: { required: true, type: () => String }, endTaken: { required: true, type: () => String }, start: { required: true, type: () => String }, end: { required: true, type: () => String } }) } };
    }
}
exports.DatesAreTaken = DatesAreTaken;
exports.createDatesAreTaken = error_dto_1.createError(DatesAreTaken, DatesAreTakenNames.DatesAreTaken, ({ start, end, startTaken, endTaken }) => {
    try {
        const startF = new Date(start).toLocaleString('ru-RU');
        const endF = new Date(end).toLocaleString('ru-RU');
        const startTakenF = new Date(startTaken).toLocaleString('ru-RU');
        const endTakenF = new Date(endTaken).toLocaleString('ru-RU');
        return `
${startF} --- ${endF} 
are already in the gap 
${startTakenF} --- ${endTakenF}
`;
    }
    catch (e) {
        return e.name;
    }
});
var EndEarlierThanStartName;
(function (EndEarlierThanStartName) {
    EndEarlierThanStartName["EndEarlierThanStart"] = "EndEarlierThanStart";
})(EndEarlierThanStartName || (EndEarlierThanStartName = {}));
class EndEarlierThanStart {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, enum: EndEarlierThanStartName }, message: { required: true, type: () => String }, param: { required: true, type: () => ({ start: { required: true, type: () => String }, end: { required: true, type: () => String } }) } };
    }
}
exports.EndEarlierThanStart = EndEarlierThanStart;
exports.createEndEarlierThanStart = error_dto_1.createError(EndEarlierThanStart, EndEarlierThanStartName.EndEarlierThanStart, ({ start, end }) => {
    try {
        const startF = new Date(start).toLocaleString('ru-RU');
        const endF = new Date(end).toLocaleString('ru-RU');
        return `${endF} - end Date 
earlier than
${startF} - start Date
`;
    }
    catch (e) {
        return e.name;
    }
});
var DrawNotFoundByIdName;
(function (DrawNotFoundByIdName) {
    DrawNotFoundByIdName["DrawNotFoundById"] = "DrawNotFoundById";
})(DrawNotFoundByIdName || (DrawNotFoundByIdName = {}));
class DrawNotFoundById {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, enum: DrawNotFoundByIdName }, message: { required: true, type: () => String }, param: { required: true, type: () => ({ id: { required: true, type: () => Number } }) } };
    }
}
exports.DrawNotFoundById = DrawNotFoundById;
exports.createDrawNotFoundById = error_dto_1.createError(DrawNotFoundById, DrawNotFoundByIdName.DrawNotFoundById, ({ id }) => `Draw where id = ${id} not found`);
var NotDrawNowName;
(function (NotDrawNowName) {
    NotDrawNowName["NotDrawNow"] = "NotDrawNow";
})(NotDrawNowName || (NotDrawNowName = {}));
class NotDrawNow {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, enum: NotDrawNowName }, message: { required: true, type: () => String }, param: { required: true, type: () => ({ now: { required: true, type: () => String } }) } };
    }
}
exports.NotDrawNow = NotDrawNow;
exports.createNotDrawNow = error_dto_1.createError(NotDrawNow, NotDrawNowName.NotDrawNow, ({ now }) => `There are no active draws now : ${now}`);
var DateNotValidName;
(function (DateNotValidName) {
    DateNotValidName["DateNotValid"] = "DateNotValid";
})(DateNotValidName || (DateNotValidName = {}));
class DateNotValid {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, enum: DateNotValidName }, message: { required: true, type: () => String }, param: { required: true, type: () => ({ dateString: { required: true, type: () => String } }) } };
    }
}
exports.DateNotValid = DateNotValid;
exports.createDateNotValid = error_dto_1.createError(DateNotValid, DateNotValidName.DateNotValid, ({ dateString }) => `Date string not valid ${dateString}`);
//# sourceMappingURL=draw.errors.dto.js.map