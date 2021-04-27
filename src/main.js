import {TASK_RENDER_NUM} from "./components/config.js";
import {getMenuTemplate} from "./components/menu.js";
import {getFilterTemplate} from "./components/filter.js";
import {getBoardTemplate} from "./components/board.js";
import {getAddTaskTemplate} from "./components/task-add.js";
import {getTaskTemplate} from "./components/task.js";
import {render} from "./components/functions.js";

const mainElement = document.querySelector(`.main`);
const headerElement = mainElement.querySelector(`.main__control`);

render(headerElement, getMenuTemplate());
render(mainElement, getFilterTemplate());
render(mainElement, getBoardTemplate());

const taskListElement = mainElement.querySelector(`.board__tasks`);

render(taskListElement, getAddTaskTemplate());

for (let i = 0; i < TASK_RENDER_NUM; i++) {
  render(taskListElement, getTaskTemplate());
}
