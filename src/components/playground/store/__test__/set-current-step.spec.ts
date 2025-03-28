import { describe, expect, it } from "vitest";
import playgroundReducer, { initialState, setCurrentStep } from "../slices";

describe("reducer setCurrentStep", () => {
  it("check setCurrentStep", () => {
    const setCurrentStepState = playgroundReducer(
      initialState,
      setCurrentStep(),
    );

    expect(initialState.currentStep).toBe(0);
    expect(setCurrentStepState.currentStep).toBe(1);
  });
});
