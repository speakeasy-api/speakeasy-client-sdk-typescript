/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  output,
  ZodEffects,
  ZodError,
  ZodObject,
  ZodRawShape,
  ZodTypeAny,
} from "zod";
import { SDKValidationError } from "../sdk/models/errors/sdkvalidationerror.js";
import { ERR, OK, Result } from "../sdk/types/fp.js";

/**
 * Utility function that executes some code which may throw a ZodError. It
 * intercepts this error and converts it to an SDKValidationError so as to not
 * leak Zod implementation details to user code.
 */
export function parse<Inp, Out>(
  rawValue: Inp,
  fn: (value: Inp) => Out,
  errorMessage: string,
): Out {
  try {
    return fn(rawValue);
  } catch (err) {
    if (err instanceof ZodError) {
      throw new SDKValidationError(errorMessage, err, rawValue);
    }
    throw err;
  }
}

/**
 * Utility function that executes some code which may result in a ZodError. It
 * intercepts this error and converts it to an SDKValidationError so as to not
 * leak Zod implementation details to user code.
 */
export function safeParse<Inp, Out>(
  rawValue: Inp,
  fn: (value: Inp) => Out,
  errorMessage: string,
): Result<Out, SDKValidationError> {
  try {
    return OK(fn(rawValue));
  } catch (err) {
    return ERR(new SDKValidationError(errorMessage, err, rawValue));
  }
}

export function collectExtraKeys<
  Shape extends ZodRawShape,
  Catchall extends ZodTypeAny,
  K extends string,
>(
  obj: ZodObject<Shape, "strip", Catchall>,
  extrasKey: K,
  optional: boolean,
): ZodEffects<
  typeof obj,
  & output<ZodObject<Shape, "strict">>
  & {
    [k in K]: Record<string, output<Catchall>>;
  }
> {
  return obj.transform((val) => {
    const extras: Record<string, output<Catchall>> = {};
    const { shape } = obj;
    for (const [key] of Object.entries(val)) {
      if (key in shape) {
        continue;
      }

      const v = val[key];
      if (typeof v === "undefined") {
        continue;
      }

      extras[key] = v;
      delete val[key];
    }

    if (optional && Object.keys(extras).length === 0) {
      return val;
    }

    return { ...val, [extrasKey]: extras };
  });
}
