/**
 * Pinterest APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import { BoardOwner, boardOwnerSchema } from './boardOwner';
import { Media, mediaSchema } from './media';

export interface NewPin {
  id: string;
  createdAt: string;
  link: string;
  title: string;
  description: string;
  dominantColor: string;
  altText: string;
  boardId: string;
  boardSectionId: string;
  boardOwner: BoardOwner;
  media: Media;
  parentPinId: string;
}

export const newPinSchema: Schema<NewPin> = object({
  id: ['id', string()],
  createdAt: ['created_at', string()],
  link: ['link', string()],
  title: ['title', string()],
  description: ['description', string()],
  dominantColor: ['dominant_color', string()],
  altText: ['alt_text', string()],
  boardId: ['board_id', string()],
  boardSectionId: ['board_section_id', string()],
  boardOwner: ['board_owner', lazy(() => boardOwnerSchema)],
  media: ['media', lazy(() => mediaSchema)],
  parentPinId: ['parent_pin_id', string()],
});
