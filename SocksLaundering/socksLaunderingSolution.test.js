const socksLaundering = require('./socksLaunderingSolution');

test('for a simple case', () => {
  const numberMachineCanWash = 2;
  const cleanSocks = [1, 2, 3, 1, 2, 3];
  const numberOfCleanSocks = cleanSocks.length;
  const dirtySocks = [3, 3, 4, 1, 2, 7, 9];
  const numberOfDirtySocks = dirtySocks.length;
  expect(socksLaundering(numberMachineCanWash, cleanSocks, numberOfCleanSocks, dirtySocks, numberOfDirtySocks))
    .toBe(4);
});


test('For another simple case where the maximum number is five', () => {
  const numberMachineCanWash = 4;
  const cleanSocks = [1, 1, 1, 1, 1, 1];
  const numberOfCleanSocks = cleanSocks.length;
  const dirtySocks = [1, 2, 2, 1, 3, 4, 5, 2];
  const numberOfDirtySocks = dirtySocks.length;
  expect(socksLaundering(numberMachineCanWash, cleanSocks, numberOfCleanSocks, dirtySocks, numberOfDirtySocks))
    .toBe(5);
});

test('For a case where the clean and dirty array have on element each', () => {
  const numberMachineCanWash = 1;
  const cleanSocks = [8];
  const numberOfCleanSocks = cleanSocks.length;
  const dirtySocks = [8];
  const numberOfDirtySocks = dirtySocks.length;
  expect(socksLaundering(numberMachineCanWash, cleanSocks, numberOfCleanSocks, dirtySocks, numberOfDirtySocks))
    .toBe(1);
});

test('For a case where the clean and dirty array have no colour of socks in common', () => {
  const numberMachineCanWash = 20;
  const cleanSocks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numberOfCleanSocks = cleanSocks.length;
  const dirtySocks = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const numberOfDirtySocks = dirtySocks.length;
  expect(socksLaundering(numberMachineCanWash, cleanSocks, numberOfCleanSocks, dirtySocks, numberOfDirtySocks))
    .toBe(0);
});

test('For a case where the clean and dirty array have all colors in common and are of equal length', () => {
  const numberMachineCanWash = 20;
  const cleanSocks = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
  const numberOfCleanSocks = cleanSocks.length;
  const dirtySocks = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
  const numberOfDirtySocks = dirtySocks.length;
  expect(socksLaundering(numberMachineCanWash, cleanSocks, numberOfCleanSocks, dirtySocks, numberOfDirtySocks))
    .toBe(10);
});

test('For a case where the clean and dirty array have all colors in common and are not of equal length', () => {
  const numberMachineCanWash = 20;
  const cleanSocks = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
  const numberOfCleanSocks = cleanSocks.length;
  const dirtySocks = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
  const numberOfDirtySocks = dirtySocks.length;
  expect(socksLaundering(numberMachineCanWash, cleanSocks, numberOfCleanSocks, dirtySocks, numberOfDirtySocks))
    .toBe(10);
});

test('For a case where the machine cannot wash any socks', () => {
  const numberMachineCanWash = 0;
  const cleanSocks = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
  const numberOfCleanSocks = cleanSocks.length;
  const dirtySocks = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
  const numberOfDirtySocks = dirtySocks.length;
  expect(socksLaundering(numberMachineCanWash, cleanSocks, numberOfCleanSocks, dirtySocks, numberOfDirtySocks))
    .toBe(5);
});

test('For a case where all the socks he can take are initially dirty and the machine can wash all of them', () => {
  const numberMachineCanWash = 30;
  const cleanSocks = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11];
  const numberOfCleanSocks = cleanSocks.length;
  const dirtySocks = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
  const numberOfDirtySocks = dirtySocks.length;
  expect(socksLaundering(numberMachineCanWash, cleanSocks, numberOfCleanSocks, dirtySocks, numberOfDirtySocks))
    .toBe(6);
});

test('For a case where all the socks he can take are initially dirty and the machine only 4', () => {
  const numberMachineCanWash = 4;
  const cleanSocks = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11];
  const numberOfCleanSocks = cleanSocks.length;
  const dirtySocks = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
  const numberOfDirtySocks = dirtySocks.length;
  expect(socksLaundering(numberMachineCanWash, cleanSocks, numberOfCleanSocks, dirtySocks, numberOfDirtySocks))
    .toBe(2);
});

test('For a case of re-occurring elements', () => {
  const numberMachineCanWash = 4;
  const cleanSocks = [1, 2, 3, 2, 3, 4, 5];
  const numberOfCleanSocks = cleanSocks.length;
  const dirtySocks = [2, 1, 1, 1, 3, 3, 3, 4, 4, 4, 5, 5, 6, 5, 7, 5, 6];
  const numberOfDirtySocks = dirtySocks.length;
  expect(socksLaundering(numberMachineCanWash, cleanSocks, numberOfCleanSocks, dirtySocks, numberOfDirtySocks))
    .toBe(5);
});

test('For another case of re-occurring elements where k = 10', () => {
  const numberMachineCanWash = 10;
  const cleanSocks = [10, 11, 12, 11, 10, 10, 13, 11, 12, 10, 13, 14, 11, 10, 12];
  const numberOfCleanSocks = cleanSocks.length;
  const dirtySocks = [10, 10, 11, 12, 13, 10, 14, 14, 14, 12, 12, 10, 10, 11, 11];
  const numberOfDirtySocks = dirtySocks.length;
  expect(socksLaundering(numberMachineCanWash, cleanSocks, numberOfCleanSocks, dirtySocks, numberOfDirtySocks))
    .toBe(12);
});

test('For another case of re-occurring elements where k = 0', () => {
  const numberMachineCanWash = 0;
  const cleanSocks = [10, 11, 12, 11, 10, 10, 13, 11, 12, 10, 13, 14, 11, 10, 12];
  const numberOfCleanSocks = cleanSocks.length;
  const dirtySocks = [10, 10, 11, 12, 13, 10, 14, 14, 14, 12, 12, 10, 10, 11, 11];
  const numberOfDirtySocks = dirtySocks.length;
  expect(socksLaundering(numberMachineCanWash, cleanSocks, numberOfCleanSocks, dirtySocks, numberOfDirtySocks))
    .toBe(6);
});
