import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import { ProfileStats } from "./ProfileStats";

describe("ProfileStats", () => {
    it("renders stats", () => {
        render(
            <ProfileStats
                stats={{
                    followerCount: 100,
                    followingCount: 50,
                    postCount: 10,
                }}
            />
        );
        //screen.debug();
        //expect(screen.getByText("999")).toBeInTheDocument();
        expect(screen.getByText("100")).toBeInTheDocument();
    });
});