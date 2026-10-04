import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { projectId, dataset } from './src/sanity/env';
import { schemaTypes } from './src/sanity/schemas';

export default defineConfig({
  basePath: '/cms',
  name: 'ekodrix_studio',
  title: 'Ekodrix CMS Studio',
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
