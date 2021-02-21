const randomNum0 = Math.floor(Math.random() * 100);
const randomNum1 = Math.floor(Math.random() * 100);
const randomNum2 = Math.floor(Math.random() * 100);

const dummyTask2 = {
  completed: false,
  taskId: randomNum2,
  taskName: 'Kup narty',
};

const dummyTask1 = {
  completed: true,
  taskId: randomNum1,
  taskName: 'Naucz się TS',
};

const dummyTask0 = {
  completed: false,
  taskId: randomNum0,
  taskName: 'Wyrzuć śmieci',
};

const dummyColumns2 = {
  columnContent: { task0: dummyTask0, task1: dummyTask1, task2: dummyTask2 },
  columnName: 'Książki',
};

const dummyColumns1 = {
  columnContent: { task0: dummyTask0, task1: dummyTask1, task2: dummyTask2 },
  columnName: 'Lista Zakupów',
};

const dummyColumns0 = {
  columnContent: { task0: dummyTask0, task1: dummyTask1, task2: dummyTask2 },
  columnName: 'TODO',
};

export const dummyProject2 = {
  archive: true,
  favourite: true,
  projectId: randomNum2 + 3,
  projectName: 'Wychodzi?',
  projectContent: {
    column0: dummyColumns0,
    column1: dummyColumns1,
    column2: dummyColumns2,
  },
};

export const dummyProject1 = {
  archive: true,
  favourite: false,
  projectId: randomNum1 + 1,
  projectName: 'Mój projekt 1',
  projectContent: {
    column0: dummyColumns0,
    column1: dummyColumns1,
    column2: dummyColumns2,
  },
};

export const dummyProject0 = {
  archive: false,
  favourite: true,
  projectId: randomNum0 * 2,
  projectName: 'Project 0',
  projectContent: {
    column0: dummyColumns0,
    column1: dummyColumns1,
    column2: dummyColumns2,
  },
};
