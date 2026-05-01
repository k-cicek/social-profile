import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { FollowButton } from "./FollowButon";

describe("FollowButton", () => {
    it("sends updated follow state and follower count", async () => {
        const onUpdate = vi.fn();

        vi.stubGlobal(
            "fetch",
            vi.fn().mockResolvedValue({
                ok: true,
                json: async () => ({
                    isFollowing: true,
                    followerCount: 101,
                }),
            })
        );

        render(
            <FollowButton
                userId="1"
                initialIsFollowing={false}
                initialFollowerCount={100}
                onUpdate={onUpdate}
            />
        );

        const button = screen.getByRole("button", { name: /takip et/i });

        await userEvent.click(button);

        await waitFor(() => {
            expect(onUpdate).toHaveBeenCalledWith(true, 101);
        });
    });
});