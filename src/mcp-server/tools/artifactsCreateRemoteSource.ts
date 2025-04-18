/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { artifactsCreateRemoteSource } from "../../funcs/artifactsCreateRemoteSource.js";
import * as shared from "../../sdk/models/shared/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: shared.RemoteSource$inboundSchema.optional(),
};

export const tool$artifactsCreateRemoteSource: ToolDefinition<typeof args> = {
  name: "artifacts-create-remote-source",
  description: `Configure a new remote source`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await artifactsCreateRemoteSource(
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
