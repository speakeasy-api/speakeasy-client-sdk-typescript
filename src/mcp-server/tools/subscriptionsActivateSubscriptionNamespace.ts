/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { subscriptionsActivateSubscriptionNamespace } from "../../funcs/subscriptionsActivateSubscriptionNamespace.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ActivateSubscriptionNamespaceRequest$inboundSchema,
};

export const tool$subscriptionsActivateSubscriptionNamespace: ToolDefinition<
  typeof args
> = {
  name: "subscriptions-activate-subscription-namespace",
  description: `Activate an ignored namespace for a subscription`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await subscriptionsActivateSubscriptionNamespace(
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
