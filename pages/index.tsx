import type { NextPage } from 'next'
import { useState } from 'react'
import { Box, Button, ButtonGroup, Center, Container, Input } from '@chakra-ui/react'
import Head from 'next/head'
import Layout from '../components/Layout'


const Home: NextPage = () => {
  const [tInput, setTInput] = useState('')

  const handleInputChange = (e) => setTInput(e.target.value)

  return (
    <Layout>
      <Box h='' >
        <Head>
          <title>Language Pocketbook</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Center h='300px' flexDirection='column'>
          <Input w={500} h={200} placeholder='Start translating...' onChange={handleInputChange} />

          <Center w={500} h={200} px='16px' justifyContent='flex-start' border='1px solid #e2e8f0' borderRadius={6}>
            {tInput}

          </Center>

        </Center>
      </Box>
    </Layout>
  )
}

export default Home
