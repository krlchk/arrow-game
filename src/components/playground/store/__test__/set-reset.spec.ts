import { describe, expect, it } from "vitest";
import playgroundReducer, { initialState, setReset } from "../slices";

describe("reducer setReset", () => {
  it("check setReset", () => {
    const setResetState = playgroundReducer(initialState, setReset());
    expect(setResetState).toEqual(initialState);
  });
});
