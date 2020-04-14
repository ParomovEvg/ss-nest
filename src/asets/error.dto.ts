export class ErrorDto {
  name: any;
  message: string;
  param: any;
}


export const createError = <T extends ErrorDto>(
  constructor: new () => T,
  name: T['name'],
  message: ((param: T['param']) => T['message']) | T['message'],
) => {
  const obj = new constructor();
  obj.name = name;
  return (param: T['param']) => {
    if(message instanceof Function){
      obj.message = message(param);
    } else {
      obj.message = message
    }
    obj.param = param;
    return obj;
  };
};
