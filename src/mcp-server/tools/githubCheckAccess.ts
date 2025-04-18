/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { githubCheckAccess } from "../../funcs/githubCheckAccess.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CheckGithubAccessRequest$inboundSchema,
};

export const tool$githubCheckAccess: ToolDefinition<typeof args> = {
  name: "github-check-access",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await githubCheckAccess(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    return formatResult(void 0, apiCall);
  },
};
