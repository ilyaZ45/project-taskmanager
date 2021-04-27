import {getSortingTemplate} from "./sorting.js";
import {getLoadMoreButtonTemplate} from "./load-more-button.js";

export const getBoardTemplate = () => (
  `<section class="board container">
    ${getSortingTemplate()}
    <div class="board__tasks"></div>
    ${getLoadMoreButtonTemplate()}
  </section>`
);
