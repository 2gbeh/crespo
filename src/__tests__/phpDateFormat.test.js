import phpDateFormat from "../utils/phpDateFormat";

const params = {
  input: "1970-01-01:00:00:00.000Z",
  output: { date: "Jan 1, 1970", time: "12:00 AM" },
};

describe("formats timestamp", () => {
  it("transforms timestamp to Jan 1, 1970", () => {
    expect(phpDateFormat(params.input)).toBe(params.output.date);
  });
  it("transforms timestamp to 12:00 AM", () => {
    expect(phpDateFormat(params.input, "h:i A")).toBe(params.output.time);
  });
});
