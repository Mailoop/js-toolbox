import { over, is, lensPath } from 'ramda';

const defaultAwesomeFunction = (name) => {
  const returnStr = `I am the Default Awesome Function, fellow comrade! - ${name}`;
  return returnStr;
};

const awesomeFunction = () => 'I am just an Awesome Function';

export const logMapper = () => (elm) => { console.log(`console.log : ${elm}`); return (elm); };

export const arr = (size, value = 0) => Array.from(Array(size), () => value);

export const arithmeticSuite = (size, start = 0, step = 1) =>
  arr(size).map((val, idx) => start + (step * idx));

export const geoSuite = (size, start = 1, step = 2) =>
  arr(size).map((val, idx) => start * (step ** idx));

export const integerSuite = (size, start = 0) => arr(size).map((val, idx) => start + idx);


export const sumBy = (toGroup, toCount) => (acc, val) => {
  acc[toGroup(val)] = (acc[toGroup(val)] || 0) + (toCount(val) || 0);
  return (acc);
};

export const sumIn = (object, keys, value) =>
  over(lensPath(keys), x => (x || 0) + (value || 0), object);

export const traverse = (node, leafCalback, path = []) => {
  if (is(Number)(node)) {
    leafCalback(path, node);
  } else {
    Object.keys(node).forEach(key => traverse(node[key], leafCalback, [...path, key]));
  }
};

export default defaultAwesomeFunction;

export { awesomeFunction };
