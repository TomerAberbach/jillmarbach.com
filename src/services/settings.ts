import { getEntry } from 'astro:content'
import type { CollectionEntry } from 'astro:content'

export const getSettings = async (): Promise<
  CollectionEntry<`settings`>[`data`]
> => (await getEntry(`settings`, `settings`))!.data
