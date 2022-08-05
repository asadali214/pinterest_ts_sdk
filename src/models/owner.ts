/**
 * Pinterest APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface Owner {
  username: string;
}

export const ownerSchema: Schema<Owner> = object({
  username: ['username', string()],
});