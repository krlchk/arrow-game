import { IEndGameConditions, IMapArrowCodesProps } from "./types";

export const TIMER_CONSTANT: number = 2000;

export const MAP_ARROW_CODES: IMapArrowCodesProps = {
  ArrowUp: "⬆️",
  ArrowDown: "⬇️",
  ArrowLeft: "⬅️",
  ArrowRight: "➡️",
};

export const ARR_ARROW_CODES = Object.keys(MAP_ARROW_CODES);

export const END_GAME_CONDITIONS: IEndGameConditions = {
  SUCCESS_COUNT: 3,
  UNSUCCESS_COUNT: 3,
};
