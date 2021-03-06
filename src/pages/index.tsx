import { Box, Button, IconClose, IconCode, Stack, Text } from 'degen';
import Head from 'next/head';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import Dashboard from '../components/screens/dashboard';
import SetUp from '../components/screens/setup';
import { useDiscord } from '../utils/context/discord';
import { views } from '../utils/types/discord';

export default function Home() {

  const { logout, userToken, view } = useDiscord();
  return (
    <div>
      <Head>
        <title>FDN</title>
      </Head>

      <Box backgroundColor="background" minHeight="viewHeight" maxWidth="viewWidth" paddingX={{xs: '6', md: "32"}} paddingBottom="24">
          <Box display="flex" height={{xs: '20', md: '40'}} padding={{xs: '0', md: '8'}} justifyContent="flex-end" alignItems="center">
            { userToken && <Stack>
              <Button onClick={() => {logout()}} variant="secondary" size="small" suffix={<IconClose/>}> stop using my token... </Button>
            </Stack>}
            <Box marginLeft="2">
              <Button as="a" href="https://github.com/NoblePlace/fdn" target="_blank" variant="secondary" size="small" shape="square">
                <IconCode/>
              </Button>
            </Box>
          </Box>
          <Stack space={{xs: '12', md: '24'}}>
            <Stack>
              <Text size="headingOne" weight="bold" color="foreground"> Hey! </Text>
              <Text size="extraLarge"> so... f**k discord notifications... right?</Text>
            </Stack>
            <Stack space={{xs: '4', md: '8'}}>
              <Stack direction="horizontal" align="center">
                <Text size="extraLarge" weight="medium" color="foreground"> {"let's fix that real quick:"} </Text>
              </Stack>
              
              { view === views.setup ?
                <SetUp/>
              :
                <Dashboard/>
              }

            </Stack>
          </Stack>
      </Box>
    </div>
  )
}

