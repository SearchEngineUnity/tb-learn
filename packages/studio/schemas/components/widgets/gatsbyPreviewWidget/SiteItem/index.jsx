import React from 'react';
import { Button, Flex, Box, Text, Stack, useToast } from '@sanity/ui';
import Links from './Links';

function SiteItem({ site }) {
  const { name, title, url, adminUrl, buildHookId } = site;
  const toast = useToast();

  const handleDeploy = (e, id) => {
    e.preventDefault();
    toast.push({
      status: 'success',
      title: 'Gatsby Preview Clear Cache and Rebuild triggered!',
    });

    fetch(`https://webhook.gatsbyjs.com/hooks/builds/trigger/${id}`, {
      method: 'POST',
      headers: {
        'x-gatsby-cache': 'false',
        'x-runner-type': 'PREVIEW',
      },
    });
  };

  return (
    <Flex as="li">
      <Box flex={1} paddingY={2} paddingX={3}>
        <Stack space={4}>
          <Text as="h4">
            {title || name}
            <Links url={url} adminUrl={adminUrl} />
          </Text>
          <Button
            mode="ghost"
            onClick={(e) => handleDeploy(e, buildHookId)}
            text="Clear Cache and Rebuild"
          />
        </Stack>
      </Box>
    </Flex>
  );
}

export default SiteItem;
