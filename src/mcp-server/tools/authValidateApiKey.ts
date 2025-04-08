/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { authValidateApiKey } from "../../funcs/authValidateApiKey.js";
import { formatResult, ToolDefinition } from "../tools.js";

export const tool$authValidateApiKey: ToolDefinition = {
  name: "auth-validate-api-key",
  description: `Validate the current api key.`,
  tool: async (client, ctx) => {
    const [result, apiCall] = await authValidateApiKey(
      client,
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
