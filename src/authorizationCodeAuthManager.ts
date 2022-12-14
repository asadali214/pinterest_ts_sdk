/**
 * Pinterest APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { OAuthToken } from './models/oAuthToken';
import { ClientInterface } from "./clientInterface";
import { OAuthAuthorizationController } from './controllers/oAuthAuthorizationController';
import { OAuthScopeEnum } from './models/oAuthScopeEnum';

export class AuthorizationCodeAuthManager {
  private _oAuthClientId: string;
  private _oAuthClientSecret: string;
  private _oAuthRedirectUri: string;
  private _oAuthToken?: OAuthToken;
  private _oAuthScopes?: OAuthScopeEnum[];
  private _oAuthController: OAuthAuthorizationController;
  private _baseUri: string;

  constructor({
    oAuthClientId,
    oAuthClientSecret,
    oAuthRedirectUri,
    oAuthToken,
    oAuthScopes,
  }: {
    oAuthClientId: string,
    oAuthClientSecret: string,
    oAuthRedirectUri: string,
    oAuthToken?: OAuthToken,
    oAuthScopes?: OAuthScopeEnum[],
  },
    baseUri: string,
    client: ClientInterface
  ) {
    this._oAuthClientId = oAuthClientId;
    this._oAuthClientSecret = oAuthClientSecret;
    this._oAuthRedirectUri = oAuthRedirectUri;
    this._oAuthToken = oAuthToken;
    this._oAuthScopes = oAuthScopes;
    this._oAuthController = new OAuthAuthorizationController(client);
    this._baseUri = baseUri;
  }

  public buildAuthorizationUrl(
    state: string,
    additionalParams?: Record<string, string>
  ): string {
    let query = this._baseUri + '/';
    let queryParams: Record<string, string | undefined> = {
      response_type: 'code',
      client_id: this._oAuthClientId,
      redirect_uri: this._oAuthRedirectUri,
      scope: this._oAuthScopes?.join(','),
      state: state,
      ...additionalParams,
    };
    let queryString: string[] = [];
    for (const key of Object.keys(queryParams)) {
      const value = queryParams[key];
      if (value !== undefined && value !== null) {
        queryString.push(
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        );
      }
    }
    return (query +=
      (query.indexOf('?') === -1 ? '?' : '&') + queryString.join('&'));
  }

  public async fetchToken(
    authorizationCode: string,
    additionalParams?: Record<string, unknown>
  ): Promise<OAuthToken> {
    const authorization = this.getClientBasicAuth(
      this._oAuthClientId,
      this._oAuthClientSecret
    );
    const { result } = await this._oAuthController.requestToken(
      authorization,
      authorizationCode,
      this._oAuthRedirectUri,
      additionalParams
    );
    if (typeof result.expiresIn !== 'undefined' && result.expiresIn > 0) {
      result.expiry = (Date.now() / 1000) + result.expiresIn;
    }
    return result;
  }

  public async refreshToken(
    additionalParams?: Record<string, unknown>
  ): Promise<OAuthToken> {
    if (typeof this._oAuthToken?.refreshToken === 'undefined') {
      throw new Error();
    }
    const authorization = this.getClientBasicAuth(
      this._oAuthClientId,
      this._oAuthClientSecret
    );
    const { result } = await this._oAuthController.refreshToken(
      authorization,
      this._oAuthToken?.refreshToken,
      this._oAuthScopes?.join(','),
      additionalParams
    );
    if (typeof result.expiresIn !== 'undefined' && result.expiresIn > 0) {
      result.expiry = (Date.now() / 1000) + result.expiresIn;
    }
    return result;
  }

  private getClientBasicAuth(clientId: string, clientSecret: string): string {
    return `Basic ${Buffer.from(clientId + ':' + clientSecret,).toString('base64')}`;
  }
}
