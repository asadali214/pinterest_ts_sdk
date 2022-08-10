/**
 * Pinterest APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import { Owner, ownerSchema } from './owner';

/** Model of type board that creates a new board. */
export interface Board {
  /** This is the board ID. */
  id: string;
  /** This is the name of the board. */
  name: string;
  /** Describe what the board is about. */
  description: string;
  /** State who the owner of the board is. */
  owner: Owner;
  /** Set privacy setting of the board. */
  privacy: string;
}

export const boardSchema: Schema<Board> = object({
  id: ['id', string()],
  name: ['name', string()],
  description: ['description', string()],
  owner: ['owner', lazy(() => ownerSchema)],
  privacy: ['privacy', string()],
});
