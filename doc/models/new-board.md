
# New Board

## Structure

`NewBoard`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `name` | `string` | Required | - |
| `description` | `string` | Required | - |
| `owner` | [`Owner`](../../doc/models/owner.md) | Required | - |
| `privacy` | `string` | Required | - |

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

