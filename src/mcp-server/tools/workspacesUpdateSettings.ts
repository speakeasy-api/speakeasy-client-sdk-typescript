/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { workspacesUpdateSettings } from "../../funcs/workspacesUpdateSettings.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateWorkspaceSettingsRequest$inboundSchema,
};

export const tool$workspacesUpdateSettings: ToolDefinition<typeof args> = {
  name: "workspaces-update-settings",
  description: `Update workspace settings

Update settings about a particular workspace.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await workspacesUpdateSettings(
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
