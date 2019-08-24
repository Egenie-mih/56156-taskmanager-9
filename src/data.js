import {getRandomBoolean, getRandomArray} from "./components/util";

export const taskData = () => ({
  description: [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`,
  ][Math.floor(Math.random() * 3)],
  dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
  tags: new Set(getRandomArray([
    `homework`,
    `theory`,
    `practice`,
    `intensive`,
    `keks`,
    `relax`,
    `work`
  ])),
  repeatingDays: {
    'mo': false,
    'tu': false,
    'we': getRandomBoolean(),
    'th': false,
    'fr': false,
    'sa': false,
    'su': false,
  },
  color: [
    `black`,
    `yellow`,
    `blue`,
    `green`,
    `pink`,
  ][Math.floor(Math.random() * 5)],
  isFavorite: getRandomBoolean(),
  isArchive: getRandomBoolean()
});
