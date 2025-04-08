/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { artifactsGetBlob } from "../../funcs/artifactsGetBlob.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetBlobRequest$inboundSchema,
};

export const tool$artifactsGetBlob: ToolDefinition<typeof args> = {
  name: "artifacts-get-blob",
  description: `Get blob for a particular digest`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await artifactsGetBlob(
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
