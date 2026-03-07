export const categories = [
  { id: 40, slug: 'ai', label: 'AI' },
  { id: 41, slug: 'cultura', label: 'Cultura' },
  { id: 38, slug: 'daily', label: 'Daily' },
  { id: 39, slug: 'deploylandia', label: 'Deploylandia' },
  { id: 37, slug: 'devops', label: 'DevOps' },
  { id: 42, slug: 'kanban', label: 'Kanban' },
  { id: 32, slug: 'my-take-on', label: 'My take on' },
  { id: 27, slug: 'predictions', label: 'Predictions' },
  { id: 35, slug: 'software-factory', label: 'Software factory' },
  { id: 45, slug: 'sicurezza', label: 'Sicurezza' },
  { id: 43, slug: 'team', label: 'Team' },
  { id: 23, slug: 'testing', label: 'Testing' },
  { id: 44, slug: 'valore', label: 'Valore' },
  { id: 28, slug: 'video', label: 'Video' },
] as const;

export type Category = (typeof categories)[number];

export const categoriesBySlug = new Map<string, Category>(
  categories.map((category) => [category.slug, category])
);

export const categoriesById = new Map<number, Category>(
  categories.map((category) => [category.id, category])
);

export function getCategoryLabel(slug: string): string {
  return categoriesBySlug.get(slug)?.label ?? slug;
}
