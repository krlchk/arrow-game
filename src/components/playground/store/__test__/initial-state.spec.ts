import { describe, expect, it } from "vitest";
import playgroundReducer, { initialState } from "../slices";

describe("initial state", () => {
  it("initial state check", () => {
    const state = playgroundReducer(undefined, { type: "unknown" });
    expect(initialState).toEqual(state);
  });
});
