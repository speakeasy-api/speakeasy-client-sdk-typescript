/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { githubGetAction } from "../../funcs/githubGetAction.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetGitHubActionRequest$inboundSchema,
};

export const tool$githubGetAction: ToolDefinition<typeof args> = {
  name: "github-get-action",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await githubGetAction(
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

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
