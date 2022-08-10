
# Board

Model of type board that creates a new board.

## Structure

`Board`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | This is the board ID. |
| `name` | `string` | Required | This is the name of the board. |
| `description` | `string` | Required | Describe what the board is about. |
| `owner` | [`Owner`](../../doc/models/owner.md) | Required | State who the owner of the board is. |
| `privacy` | `string` | Required | Set privacy setting of the board. |

## Example (as JSON)

```json
{
  "id": "549755885175",
  "name": "Summer Recipes",
  "description": "My favorite summer recipes",
  "owner": {
    "username": "string"
  },
  "privacy": "PUBLIC"
}
```

