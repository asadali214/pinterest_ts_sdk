# Pins

```ts
const pinsController = new PinsController(client);
```

## Class Name

`PinsController`


# Create Pin

Create a new pin in Pinterest board.

```ts
async createPin(
  body: NewPinRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreatePinResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`NewPinRequest`](../../doc/models/new-pin-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreatePinResponse`](../../doc/models/create-pin-response.md)

## Example Usage

```ts
const bodyMediaSource: MediaSourceFile = {
  sourceType: null,
  url: 'some public url',
};

const body: NewPinRequest = {
  boardId: 'string',
  mediaSource: bodyMediaSource,
};

try {
  const { result, ...httpResponse } = await pinsController.createPin(body);
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
| 400 | Invalid pin parameters | `ApiError` |
| 403 | The pin's image is too small, too large, or is broken | `ApiError` |
| 404 | Board or section not found | `ApiError` |
| 429 | This request exceeded a rate limit. This can happen if a client exceeds one of the published rate limits or if multiple write operations are applied to an object within a short time window. | `ApiError` |

