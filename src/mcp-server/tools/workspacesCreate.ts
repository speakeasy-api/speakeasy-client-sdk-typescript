/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { workspacesCreate } from "../../funcs/workspacesCreate.js";
import * as shared from "../../sdk/models/shared/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: shared.Workspace$inboundSchema,
};

export const tool$workspacesCreate: ToolDefinition<typeof args> = {
  name: "workspaces-create",
  description: `Create a workspace

Creates a workspace`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await workspacesCreate(
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
