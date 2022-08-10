
# New Pin

Model to create a new pin.

## Structure

`NewPin`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | ID of the new pin. |
| `createdAt` | `string` | Required | Timestamp at which the pin is created. |
| `link` | `string` | Required | Link to the created pin. |
| `title` | `string` | Required | Title of the created pin. |
| `description` | `string` | Required | Describes what the pin is about. |
| `dominantColor` | `string` | Required | States the dominant color of the created pin. |
| `altText` | `string` | Required | ALT text of the created pin. |
| `boardId` | `string` | Required | This is the board ID of the board in which the pin was created. |
| `boardSectionId` | `string` | Required | This is the board section ID of the parent board. |
| `boardOwner` | [`Owner`](../../doc/models/owner.md) | Required | States the owner of the board in which the pin is created. |
| `media` | [`Media`](../../doc/models/media.md) | Required | Defines the type of media. |
| `parentPinId` | `string` | Required | This is the ID of parent pin. |

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

