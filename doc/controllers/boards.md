# Boards

```ts
const boardsController = new BoardsController(client);
```

## Class Name

`BoardsController`

## Methods

* [Create Board](../../doc/controllers/boards.md#create-board)
* [Get All Boards](../../doc/controllers/boards.md#get-all-boards)


# Create Board

Endpoint to create a new board

```ts
async createBoard(
  boardRequest: BoardRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Board>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `boardRequest` | [`BoardRequest`](../../doc/models/board-request.md) | Body, Required | name of the board |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Board`](../../doc/models/board.md)

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


# Get All Boards

List all Pinterest boards

```ts
async getAllBoards(
  requestOptions?: RequestOptions
): Promise<ApiResponse<AllBoards>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AllBoards`](../../doc/models/all-boards.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await boardsController.getAllBoards();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "items": [
    {
      "id": "549755885175",
      "name": "Summer Recipes",
      "description": "My favorite summer recipes",
      "owner": {
        "username": "string"
      },
      "privacy": "PUBLIC"
    }
  ],
  "bookmark": "string"
}
```

