/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { publishingTokensResolveTarget } from "../../funcs/publishingTokensResolveTarget.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetPublishingTokenTargetByIDRequest$inboundSchema,
};

export const tool$publishingTokensResolveTarget: ToolDefinition<typeof args> = {
  name: "publishing-tokens-resolve-target",
  description: `Get a specific publishing token target

Get information about a particular publishing token target.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await publishingTokensResolveTarget(
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
