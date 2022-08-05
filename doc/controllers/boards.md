# Boards

```ts
const boardsController = new BoardsController(client);
```

## Class Name

`BoardsController`


# Create Board

Endpoint to create a new board

```ts
async createBoard(
  boardRequest: BoardRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<NewBoard>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `boardRequest` | [`BoardRequest`](../../doc/models/board-request.md) | Body, Required | name of the board |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`NewBoard`](../../doc/models/new-board.md)

## Example Usage

```ts
const boardRequest: BoardRequest = {
  name: 'Summer Recipes',
  description: 'My favorite summer recipes',
  privacy: 'SECRET',
};

try {
  const { result, ...httpResponse } = await boardsController.createBoard(boardRequest);
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
| 400 | The board name is invalid or duplicate. | `ApiError` |

