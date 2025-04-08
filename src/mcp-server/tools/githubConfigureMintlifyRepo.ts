/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { githubConfigureMintlifyRepo } from "../../funcs/githubConfigureMintlifyRepo.js";
import * as shared from "../../sdk/models/shared/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: shared.GithubConfigureMintlifyRepoRequest$inboundSchema,
};

export const tool$githubConfigureMintlifyRepo: ToolDefinition<typeof args> = {
  name: "github-configure-mintlify-repo",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await githubConfigureMintlifyRepo(
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
