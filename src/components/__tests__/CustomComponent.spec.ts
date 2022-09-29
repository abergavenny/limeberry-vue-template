import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import CustomComponent from "../CustomComponent.vue";

describe("CustomComponent", () => {
  it("renders properly", () => {
    const wrapper = mount(CustomComponent, {});
    expect(wrapper.text()).toContain("Custom Component");
  });
});
