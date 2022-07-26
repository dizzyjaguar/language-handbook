import { Box, Button, ButtonGroup, Center, Container, Input } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout>
      <Box h='100vh' >
        <Head>
          <title>Language Pocketbook</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Center h='100%' flexDirection='column'>
          <Input w={500} h={500} placeholder='Start translating...' />
          <ButtonGroup>
            <Button colorScheme='teal' variant='solid'> hi</Button>
            <Button colorScheme='teal' variant='solid'> hi</Button>
          </ButtonGroup>
        </Center>

      </Box>
    </Layout>
  )
}

export default Home
