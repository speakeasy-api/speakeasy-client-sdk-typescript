/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { organizationsDeleteBillingAddOn } from "../../funcs/organizationsDeleteBillingAddOn.js";
import * as operations from "../../sdk/models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DeleteBillingAddOnRequest$inboundSchema,
};

export const tool$organizationsDeleteBillingAddOn: ToolDefinition<typeof args> =
  {
    name: "organizations-delete-billing-add-on",
    description: `Delete billing add ons`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] = await organizationsDeleteBillingAddOn(
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
