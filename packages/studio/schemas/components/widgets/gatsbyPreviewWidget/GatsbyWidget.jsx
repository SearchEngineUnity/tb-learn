import React from 'react';
import { DashboardWidgetContainer } from '@sanity/dashboard';
import { Flex, Button, Box, Stack, Card } from '@sanity/ui';
import styled from 'styled-components';
import SiteItem from './SiteItem';

const ContentCard = styled(Card)`
  min-height: 66px;
`;

function Widget({ site }) {
  const { organizationId } = site;
  const gatsbySitesUrl = `https://www.gatsbyjs.com/dashboard/organization/${organizationId}/sites`;

  return (
    <DashboardWidgetContainer
      header="My Gatsby Cloud Preview"
      footer={
        <Flex direction="column" align="stretch">
          <Button
            as="a"
            href={gatsbySitesUrl}
            target="_blank"
            flex={1}
            paddingX={2}
            paddingY={4}
            mode="bleed"
            tone="primary"
            text="Manage site at Gatsby"
          />
        </Flex>
      }
    >
      <ContentCard paddingY={1}>
        <Box paddingY={2}>
          <Stack as="ul" space={2}>
            <SiteItem site={site} />
          </Stack>
        </Box>
      </ContentCard>
    </DashboardWidgetContainer>
  );
}

export default Widget;
