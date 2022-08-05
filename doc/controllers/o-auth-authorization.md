# O Auth Authorization

```ts
const oAuthAuthorizationController = new OAuthAuthorizationController(client);
```

## Class Name

`OAuthAuthorizationController`

## Methods

* [Request Token](../../doc/controllers/o-auth-authorization.md#request-token)
* [Refresh Token](../../doc/controllers/o-auth-authorization.md#refresh-token)


# Request Token

Create a new OAuth 2 token.

:information_source: **Note** This endpoint does not require authentication.

```ts
async requestToken(
  authorization: string,
  code: string,
  redirectUri: string,
  fieldParameters?: Record<string, unknown>,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OAuthToken>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string` | Header, Required | Authorization header in Basic auth format |
| `code` | `string` | Form, Required | Authorization Code |
| `redirectUri` | `string` | Form, Required | Redirect Uri |
| `fieldParameters` | `Record<string, string>` | Optional | Pass additional field parameters. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OAuthToken`](../../doc/models/o-auth-token.md)

## Example Usage

```ts
const grantType = null;
const authorization = 'Authorization8';
const code = 'code8';
const redirectUri = 'redirect_uri8';
try {
  const { result, ...httpResponse } = await oAuthAuthorizationController.requestToken(authorization, code, redirectUri);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | OAuth 2 provider returned an error. | [`OAuthProviderError`](../../doc/models/o-auth-provider-error.md) |
| 401 | OAuth 2 provider says client authentication failed. | [`OAuthProviderError`](../../doc/models/o-auth-provider-error.md) |


# Refresh Token

Obtain a new access token using a refresh token

:information_source: **Note** This endpoint does not require authentication.

```ts
async refreshToken(
  authorization: string,
  refreshToken: string,
  scope?: string,
  fieldParameters?: Record<string, unknown>,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OAuthToken>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string` | Header, Required | Authorization header in Basic auth format |
| `refreshToken` | `string` | Form, Required | Refresh token |
| `scope` | `string \| undefined` | Form, Optional | Requested scopes as a space-delimited list. |
| `fieldParameters` | `Record<string, string>` | Optional | Pass additional field parameters. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OAuthToken`](../../doc/models/o-auth-token.md)

## Example Usage

```ts
const grantType = null;
const authorization = 'Authorization8';
const refreshToken = 'refresh_token0';
try {
  const { result, ...httpResponse } = await oAuthAuthorizationController.refreshToken(authorization, refreshToken);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | OAuth 2 provider returned an error. | [`OAuthProviderError`](../../doc/models/o-auth-provider-error.md) |
| 401 | OAuth 2 provider says client authentication failed. | [`OAuthProviderError`](../../doc/models/o-auth-provider-error.md) |

