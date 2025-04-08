/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { eventsPost } from "../../funcs/eventsPost.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.PostWorkspaceEventsRequest$inboundSchema,
};

export const tool$eventsPost: ToolDefinition<typeof args> = {
  name: "events-post",
  description: `Post events for a specific workspace

Sends an array of events to be stored for a particular workspace.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await eventsPost(
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
