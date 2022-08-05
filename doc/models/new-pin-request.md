
# New Pin Request

## Structure

`NewPinRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `link` | `string \| undefined` | Optional | - |
| `title` | `string \| undefined` | Optional | - |
| `description` | `string \| undefined` | Optional | - |
| `dominantColor` | `string \| undefined` | Optional | - |
| `altText` | `string \| undefined` | Optional | - |
| `boardId` | `string` | Required | - |
| `boardSectionId` | `string \| undefined` | Optional | - |
| `mediaSource` | [`MediaSourceFile`](../../doc/models/media-source-file.md) | Required | - |
| `parentPinId` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "board_id": "string",
  "media_source": {
    "source_type": "image_url",
    "url": "some public url"
  }
}
```

