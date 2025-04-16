/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { publishingTokensGet } from "../../funcs/publishingTokensGet.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetPublishingTokenByIDRequest$inboundSchema,
};

export const tool$publishingTokensGet: ToolDefinition<typeof args> = {
  name: "publishing-tokens-get",
  description: `Get a specific publishing token

Get information about a particular publishing token.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await publishingTokensGet(
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
