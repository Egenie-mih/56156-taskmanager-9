import {getMenuLayout} from "./components/menu.js";
import {getSearchLayout} from "./components/search.js";
import {getFilterLayout} from "./components/filter.js";
import {getFilterItemLayout, getFilterCountMap, getFilters} from "./components/filter-item.js";
import {getBoardLayout} from "./components/board.js";
import {getEditTaskCardLayout} from "./components/task-edit.js";
import {getTaskCardLayout} from "./components/task.js";
import {getLoadMoreButtonLayout} from "./components/load-more.js";
import {taskData} from "./data.js";

const renderComponent = (container, layout) => {
  container.insertAdjacentHTML(`beforeend`, layout);
};

const NUMBER_OF_CARDS = 13;
const NUMBER_OF_SHOWN_CARDS = 8;
const tasksArr = new Array(NUMBER_OF_CARDS).fill(``).map(taskData);

const mainContainer = document.querySelector(`main`);
const menuContainer = document.querySelector(`.main__control`);

renderComponent(menuContainer, getMenuLayout());
renderComponent(mainContainer, getSearchLayout());
renderComponent(mainContainer, getFilterLayout());
renderComponent(mainContainer, getBoardLayout());

const filterContainer = mainContainer.querySelector(`.main__filter`);
const boardContainer = mainContainer.querySelector(`.board`);
const boardTasks = boardContainer.querySelector(`.board__tasks`);

renderComponent(filterContainer, getFilters(getFilterCountMap(tasksArr)).map(getFilterItemLayout).join(``));
renderComponent(boardTasks, getEditTaskCardLayout(tasksArr[0]));
renderComponent(boardTasks, tasksArr.slice(1, NUMBER_OF_SHOWN_CARDS).map(getTaskCardLayout).join(``));
renderComponent(boardContainer, getLoadMoreButtonLayout());

const loadMoreButtonElementClickHandler = () => {
  let renderedCards = boardTasks.children;
  let countRenderedCards = renderedCards.length;
  let differenceTasksAndCards = NUMBER_OF_CARDS - countRenderedCards;
  let sliceEnd = differenceTasksAndCards % NUMBER_OF_SHOWN_CARDS === 0 ? NUMBER_OF_CARDS : countRenderedCards + NUMBER_OF_SHOWN_CARDS;
  renderComponent(boardTasks, tasksArr.slice(countRenderedCards, sliceEnd).map(getTaskCardLayout).join(``));

  if (renderedCards.length === tasksArr.length) {
    boardContainer.removeChild(loadMoreButtonElement);
  }
};

const loadMoreButtonElement = boardContainer.querySelector(`.load-more`);
loadMoreButtonElement.addEventListener(`click`, loadMoreButtonElementClickHandler);
