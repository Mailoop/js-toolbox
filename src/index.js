const defaultAwesomeFunction = (name) => {
  const returnStr = `I am the Default Awesome Function, fellow comrade! - ${name}`;
  return returnStr;
};

const awesomeFunction = () => 'I am just an Awesome Function';

export const logMapper = () =>  elm => { console.log(`console.log : ${elm}`); return (elm) }

export const arr = (size, value = 0) => Array.from(Array(size), () => value)

export const arithmeticSuite = (size, start = 0, step = 1) => arr(size).map((val, idx) => start + step * idx)
export const geoSuite = (size, start = 1, step = 2) => arr(size).map((val, idx) => start * (step ** idx))

export const integerSuite = (size, start = 0) => arr(size).map((val, idx) => start + step * idx)
 
export default defaultAwesomeFunction;

export { awesomeFunction };
