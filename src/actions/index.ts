import { defineAction, type SafeResult } from "astro:actions";
import { z } from "astro:schema";
import { getActionState } from "@astrojs/react/actions";

export const server = {
  like: defineAction({
    accept: "form",
    input: z.object({
      projectId: z.string(),
    }),
    handler: async ({ projectId }, ctx) => {
      const { data: currentLikes = 0, error } = await getActionState<
        SafeResult<any, number>
      >(ctx);

      // handle errors
      if (error) throw error;
      return "success";
    },
  }),
};
