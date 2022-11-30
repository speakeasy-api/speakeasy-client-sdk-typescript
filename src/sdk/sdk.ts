import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";

import { ApiEndpoints } from "./apiendpoints";
import { Apis } from "./apis";
import { Embeds } from "./embeds";
import { Metadata } from "./metadata";
import { Requests } from "./requests";
import { Schemas } from "./schemas";

type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://api.prod.speakeasyapi.dev",
] as const;

export function withServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.replaceParameters(serverURL, params);
    }
    sdk._serverURL = serverURL;
  };
}

export function withClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}

export function withSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk._security = security;
  };
}

/* SDK Documentation: https://docs.speakeasyapi.dev - The Speakeasy Platform Documentation*/
export class SDK {
  public apiEndpoints: ApiEndpoints;
  public apis: Apis;
  public embeds: Embeds;
  public metadata: Metadata;
  public requests: Requests;
  public schemas: Schemas;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _security?: Security;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.3.3";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (!this._serverURL) {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      if (this._security) {
        this._securityClient = utils.createSecurityClient(
          this._defaultClient,
          this._security
        );
      } else {
        this._securityClient = this._defaultClient;
      }
    }
    
    this.apiEndpoints = new ApiEndpoints(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.apis = new Apis(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.embeds = new Embeds(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.metadata = new Metadata(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.requests = new Requests(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.schemas = new Schemas(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
