/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { artifactsGetTags } from "../../funcs/artifactsGetTags.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetTagsRequest$inboundSchema,
};

export const tool$artifactsGetTags: ToolDefinition<typeof args> = {
  name: "artifacts-get-tags",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await artifactsGetTags(
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
