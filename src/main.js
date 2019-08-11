import {getMenuLayout} from './components/menu.js';
import {getSearchLayout} from './components/search.js';
import {getFiltersLayout} from './components/filters.js';
import {getTaskCardLayout} from './components/task.js';
import {getEditTaskCardLayout} from './components/task-edit.js';
import {getLoadMoreButtonLayout} from './components/load-more.js';
import {getBoardLayout} from './components/board.js';

const renderComponent = (container, layout) => {
  container.insertAdjacentHTML(`beforeend`, layout);
};

const mainContainer = document.querySelector(`main`);
const menuContainer = document.querySelector(`.main__control`);

renderComponent(menuContainer, getMenuLayout());
renderComponent(mainContainer, getSearchLayout());
renderComponent(mainContainer, getFiltersLayout());
renderComponent(mainContainer, getBoardLayout());

const NUMBER_OF_CARDS = 3;
const boardContainer = document.querySelector(`.board`);
const boardTasks = document.querySelector(`.board__tasks`);

renderComponent(boardTasks, getEditTaskCardLayout());

for (let i = 0; i < NUMBER_OF_CARDS; i++) {
  renderComponent(boardTasks, getTaskCardLayout());
}

renderComponent(boardContainer, getLoadMoreButtonLayout());
