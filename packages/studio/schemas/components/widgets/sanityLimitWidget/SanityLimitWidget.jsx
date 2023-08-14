import React, { useEffect, useState } from 'react';
import { DashboardWidgetContainer } from '@sanity/dashboard';
import { Stack, Card, Text } from '@sanity/ui';
import styled from 'styled-components';

const ContentCard = styled(Card)`
  min-height: 66px;
`;

const StyledText = styled(Text)`
  color: ${(props) => (props.value >= props.limit * 0.8 ? '#c13126' : 'inherit')};
`;

function Widget({ projectId }) {
  const [limits, setLimits] = useState();
  const handleFetchData = async () => {
    const response = await fetch(`https://${projectId}.api.sanity.io/v1/data/stats/production`);
    const data = await response.json();
    setLimits(data);
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <DashboardWidgetContainer header="Sanity Limits">
      <ContentCard paddingY={1}>
        {limits && (
          <Stack paddingY={2} paddingX={3} space={4}>
            <StyledText value={limits.fields.count.value} limit={limits.fields.count.limit}>
              Attribute Limit: {limits.fields.count.value}/{limits.fields.count.limit}
            </StyledText>
            <StyledText value={limits.documents.count.value} limit={limits.documents.count.limit}>
              Document Limit: {limits.documents.count.value}/{limits.documents.count.limit}
            </StyledText>
          </Stack>
        )}
      </ContentCard>
    </DashboardWidgetContainer>
  );
}

export default Widget;
