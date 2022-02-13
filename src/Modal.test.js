import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Modal from "./Modal";

describe(Modal.name, () => {
  it("renders a button with `What's the next?` label", () => {
    render(<Modal label="What's the next?" />);
    expect(
      screen.getByRole("button", { name: "What's the next?" })
    ).toBeInTheDocument();
  });

  describe("on `What's the next?` button click", () => {
    beforeEach(() => {
      render(
        <Modal label="What's the next?">
          <div data-testid="content" />
        </Modal>
      );
      fireEvent.click(screen.getByRole("button", { name: "What's the next?" }));
    });

    it("does not render a button with `What's the next?` label", () => {
      expect(
        screen.queryByRole("button", { name: "What's the next?" })
      ).not.toBeInTheDocument();
    });

    it("renders a specific element", () => {
      expect(screen.getByTestId("content")).toBeInTheDocument();
    });

    it("renders a button with `D'accord ça roule` label", () => {
      expect(
        screen.getByRole("button", { name: "D'accord ça roule" })
      ).toBeInTheDocument();
    });
  });

  describe("on `D'accord ça roule` button click", () => {
    beforeEach(() => {
      render(<Modal label="What's the next?" />);
      fireEvent.click(screen.getByRole("button", { name: "What's the next?" }));
      fireEvent.click(
        screen.getByRole("button", { name: "D'accord ça roule" })
      );
    });

    it("does not render a button with `D'accord ça roule` label", () => {
      expect(
        screen.queryByRole("button", { name: "D'accord ça roule" })
      ).not.toBeInTheDocument();
    });

    it("renders a button with `What's the next?` label", () => {
      expect(
        screen.queryByRole("button", { name: "What's the next?" })
      ).toBeInTheDocument();
    });
  });
});