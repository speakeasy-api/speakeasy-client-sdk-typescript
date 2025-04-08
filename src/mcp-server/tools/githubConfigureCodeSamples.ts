/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { githubConfigureCodeSamples } from "../../funcs/githubConfigureCodeSamples.js";
import * as shared from "../../sdk/models/shared/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: shared.GithubConfigureCodeSamplesRequest$inboundSchema,
};

export const tool$githubConfigureCodeSamples: ToolDefinition<typeof args> = {
  name: "github-configure-code-samples",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await githubConfigureCodeSamples(
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
