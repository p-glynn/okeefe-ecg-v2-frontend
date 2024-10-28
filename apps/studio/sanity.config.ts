import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { media } from 'sanity-plugin-media';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';
import { structure } from './structure';

export default defineConfig({
  name: 'default',
  title: "O'Keefe ECG v2",

  projectId: 'zl3yviy5',
  dataset: 'production',

  plugins: [
    structureTool({
      name: 'questions',
      title: 'All Questions',
      structure,
    }),
    visionTool(),
    media(),
  ],

  schema: {
    types: schemaTypes,
  },
});
