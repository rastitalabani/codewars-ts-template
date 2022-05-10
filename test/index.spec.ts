import { assert } from "chai";
import main from "../src/index";

describe("CodeWars Tests", function () {
  it("test1", function () {
    assert.equal(main(1), 1);
  });
});
