
# New Pin

## Structure

`NewPin`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `createdAt` | `string` | Required | - |
| `link` | `string` | Required | - |
| `title` | `string` | Required | - |
| `description` | `string` | Required | - |
| `dominantColor` | `string` | Required | - |
| `altText` | `string` | Required | - |
| `boardId` | `string` | Required | - |
| `boardSectionId` | `string` | Required | - |
| `boardOwner` | [`BoardOwner`](../../doc/models/board-owner.md) | Required | - |
| `media` | [`Media`](../../doc/models/media.md) | Required | - |
| `parentPinId` | `string` | Required | - |

## Example (as JSON)

```json
{
  "id": "813744226420795884",
  "created_at": "01/02/2020 01:10:40",
  "link": "https://www.pinterest.com/",
  "title": "string",
  "description": "string",
  "dominant_color": "#6E7874",
  "alt_text": "string",
  "board_id": "string",
  "board_section_id": "string",
  "board_owner": {
    "username": "string"
  },
  "media": {
    "media_type": "string"
  },
  "parent_pin_id": "string"
}
```

