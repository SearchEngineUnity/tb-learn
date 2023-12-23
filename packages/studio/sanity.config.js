import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { media } from 'sanity-plugin-media';
import { dashboardTool, projectUsersWidget, projectInfoWidget } from '@sanity/dashboard';
import { netlifyWidget } from 'sanity-plugin-dashboard-widget-netlify';
import { colorInput } from '@sanity/color-input';
import { sanityLimitWidget } from './schemas/components/widgets/sanityLimitWidget';
import { schemaTypes } from './schemas';
import deskStructure from './deskStructure';
import { DigitalOceanPreviewAction } from './actions';

export default defineConfig({
  name: 'default',
  title: 'TB/learn',
  projectId: '2gm63k8m',
  dataset: 'production',
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    media(),
    dashboardTool({
      widgets: [
        projectInfoWidget(),
        netlifyWidget({
          title: 'My Netlify deploys',
          sites: [
            {
              title: 'TB/learn',
              apiId: 'e098a902-176a-46ef-9ca6-f350d24ed353',
              buildHookId: '64a78c10ef91862305e752a2',
              name: 'tblearn',
            },
          ],
          layout: { width: 'small', height: 'small' },
        }),
        sanityLimitWidget({ projectId: '2gm63k8m' }),
        projectUsersWidget(),
      ],
    }),
    visionTool(),
    colorInput(),
  ],
  schema: {
    types: schemaTypes,
  },
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) => {
          if (
            templateItem.templateId === 'contactInfo' ||
            templateItem.templateId === 'customSpacing' ||
            templateItem.templateId === 'generalSettings' ||
            templateItem.templateId === 'layoutSpg' ||
            templateItem.templateId === 'palette' ||
            templateItem.templateId === 'typography'
          ) {
            return false;
          }
          return true;
        });
      }
      return prev;
    },
    actions: (prev, { schemaType }) => {
      if (
        schemaType === 'contactInfo' ||
        schemaType === 'customSpacing' ||
        schemaType === 'generalSettings' ||
        schemaType === 'layoutSpg' ||
        schemaType === 'palette' ||
        schemaType === 'typography'
      ) {
        return prev.filter(({ action }) => !['unpublish', 'delete', 'duplicate'].includes(action));
      }
      if (
        schemaType === 'page' ||
        schemaType === 'soloGuidePage' ||
        schemaType === 'flexListingPage'
      ) {
        return [DigitalOceanPreviewAction, ...prev];
      }
      return prev;
    },
  },
});
