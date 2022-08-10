/**
 * Pinterest APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema, string } from '../schema';
import { Board, boardSchema } from './board';

export interface AllBoards {
  items: Board[];
  bookmark: string;
}

export const allBoardsSchema: Schema<AllBoards> = object({
  items: ['items', array(lazy(() => boardSchema))],
  bookmark: ['bookmark', string()],
});