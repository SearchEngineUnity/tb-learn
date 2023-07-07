import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { media } from 'sanity-plugin-media';
import { dashboardTool, projectUsersWidget, projectInfoWidget } from '@sanity/dashboard';
import { netlifyWidget } from 'sanity-plugin-dashboard-widget-netlify';
import { colorInput } from '@sanity/color-input';
import { gatsbyWidget } from './schemas/components/widgets/gatsbyPreviewWidget';
import { schemaTypes } from './schemas';
import deskStructure from './deskStructure';
import { GatsbyPreviewAction } from './actions';

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
        // netlifyWidget({
        //   title: 'My Netlify deploys',
        //   sites: [
        //     {
        //       title: 'Site Builder V2',
        //       apiId: 'e978dfee-c169-45df-9cea-aa427232a7f8',
        //       buildHookId: '63e28e14258d2d0fddde9ef4',
        //       name: 'tb-learn',
        //     },
        //   ],
        //   layout: { width: 'small', height: 'small' },
        // }),
        gatsbyWidget({
          site: {
            title: 'tb-learn Preview',
            name: 'tb-learn-preview',
            id: 'tb-learn-preview',
            organizationId: 'd7d268c0-3157-4cab-a651-e456e34643bb',
            url: 'https://preview-tblearn.gatsbyjs.io/',
            adminUrl:
              'https://www.gatsbyjs.com/dashboard/d7d268c0-3157-4cab-a651-e456e34643bb/sites/64e0eaa0-6fe3-4311-af21-a8cc9d9d4d1a/cmsPreview',
            buildHookId: '64e0eaa0-6fe3-4311-af21-a8cc9d9d4d1a',
          },
        }),
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
        return [GatsbyPreviewAction, ...prev];
      }
      return prev;
    },
  },
});
