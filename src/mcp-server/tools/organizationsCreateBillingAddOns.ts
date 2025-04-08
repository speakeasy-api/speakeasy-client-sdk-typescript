/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { organizationsCreateBillingAddOns } from "../../funcs/organizationsCreateBillingAddOns.js";
import * as shared from "../../sdk/models/shared/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: shared.OrganizationBillingAddOnRequest$inboundSchema,
};

export const tool$organizationsCreateBillingAddOns: ToolDefinition<
  typeof args
> = {
  name: "organizations-create-billing-add-ons",
  description: `Create billing add ons`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await organizationsCreateBillingAddOns(
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
