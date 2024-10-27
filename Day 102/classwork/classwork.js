// map ი არის მონაცემთა სტრუქტურა რომელიც ინახავს წყვილებს მასივის სახით!


// 1. შექმენი Map, სადაც თითოეულ სტრიქონს (string) დააკავშირებ მის სიგრძეს (length). დაამატე რამდენიმე სტრიქონი და შეაჯამე ყველა უნიკალური სიგრძის მნიშვნელობა.

const stringLengths = new Map();

stringLengths.set('Hello', 'Hello'.length);
stringLengths.set('World', 'World'.length);
stringLengths.set('JavaScript', 'JavaScript'.length);
stringLengths.set('OpenAI', 'OpenAI'.length);
stringLengths.set('ChatGPT', 'ChatGPT'.length);


const uniqueLengths = new Set(stringLengths.values());

const totalLength = Array.from(uniqueLengths).reduce((sum, length) => sum + length, 0);

console.log('სიგრძეები:', Array.from(uniqueLengths));
console.log('ჯამი:', totalLength);
