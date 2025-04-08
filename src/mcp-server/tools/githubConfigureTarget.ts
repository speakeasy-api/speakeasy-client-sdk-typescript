/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { githubConfigureTarget } from "../../funcs/githubConfigureTarget.js";
import * as shared from "../../sdk/models/shared/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: shared.GithubConfigureTargetRequest$inboundSchema,
};

export const tool$githubConfigureTarget: ToolDefinition<typeof args> = {
  name: "github-configure-target",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await githubConfigureTarget(
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
