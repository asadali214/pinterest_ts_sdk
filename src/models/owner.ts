/**
 * Pinterest APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

/** Model to create an endpoint of type owner. */
export interface Owner {
  /** States the name of the board owner. */
  username: string;
}

export const ownerSchema: Schema<Owner> = object({
  username: ['username', string()],
});
