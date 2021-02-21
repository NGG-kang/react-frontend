const { produce } = require('immer');

const fruits = ['오렌지', '사과', 'ㄹㅁ', 'ㅂㄴㄴ'];

const newFruits = produce(fruits, (draft) => {
  draft.splice(1, 2, '딸기');
});

console.log(newFruits);

const baseState = [
  {
    todo: 'Learn typescript',
    done: true,
  },
  {
    todo: 'Try immer',
    done: false,
  },
];

[
  { todo: 'Learn typescript', done: true },
  { todo: 'Try immer', done: true },
  { todo: 'Tweet about it' },
];
