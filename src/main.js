import {createSiteMenuTemplate} from "./components/site-menu.js";
import {createSortingTemplate} from "./components/sorting.js"
import {createFilterTemplate} from "./components/filter.js";
import {createTaskTemplate} from "./components/task.js";
import {createTaskEditTemplate} from "./components/task-edit.js";

import {createLoadMoreButtonTemplate} from "./components/load-more-button.js"
import {createBoardTemplate} from "./components/board.js"
import {generateTasks} from "./mock/task.js"

import {generateFilters} from "./mock/filter.js";

const TASK_COUNT = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const render = (container, template, position = `beforeend`) => {
  container.insertAdjacentHTML(position, template);
};


const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const filters = generateFilters();
const tasks = generateTasks(TASK_COUNT);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createFilterTemplate(filters), `beforeend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

const boardElement = siteMainElement.querySelector(`.board`);
const taskListElement = siteMainElement.querySelector(`.board__tasks`);

render(boardElement, createSortingTemplate(), `afterbegin`);
render(taskListElement, createTaskEditTemplate(tasks[0]), `beforeend`);

let showingTaskCount = SHOWING_TASKS_COUNT_ON_START;

for (let i = 1; i < showingTaskCount; i++) {
  render(taskListElement, createTaskTemplate(tasks[i]), `beforeend`);
};

render(boardElement, createLoadMoreButtonTemplate(), `beforeend`)

const loadMoreButton = boardElement.querySelector(`.load-more`);

loadMoreButton.addEventListener(`click`, () => {
    const prevTasksCount = showingTaskCount;
    showingTaskCount = showingTaskCount + SHOWING_TASKS_COUNT_BY_BUTTON;

    tasks.slice(prevTasksCount, showingTaskCount).forEach((task) => render(taskListElement, createTaskTemplate(task), `beforeend`));
});
