import { baseUrl } from "./baseUrl";

describe("baseUrl", () => {
  it("should leave basic urls untouched", () => {
    expect(baseUrl("mchess.io")).toEqual("mchess.io");
  });

  it("should trim anything before a ://", () => {
    expect(baseUrl("http://mchess.io")).toEqual("mchess.io");
    expect(baseUrl("https://mchess.io")).toEqual("mchess.io");
  });

  it("should trim anything after the base url", () => {
    expect(baseUrl("https://mchess.io/game")).toEqual("mchess.io");
    expect(baseUrl("mchess.io/game")).toEqual("mchess.io");
  });

  it("should work for the cases in the app so far", () => {
    expect(baseUrl("https://mchess.io/")).toEqual("mchess.io");
    expect(baseUrl("https://angussbj.github.io/befunge/")).toEqual(
      "angussbj.github.io"
    );
    expect(
      baseUrl(
        "https://play.google.com/store/apps/details?id=angus.planarodenumerics&hl=en_AU&gl=US"
      )
    ).toEqual("play.google.com");
  });
});
