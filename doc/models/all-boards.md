
# All Boards

## Structure

`AllBoards`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `items` | [`Board[]`](../../doc/models/board.md) | Required | - |
| `bookmark` | `string` | Required | - |

## Example (as JSON)

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

