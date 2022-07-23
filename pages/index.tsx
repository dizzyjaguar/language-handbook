import { Box, Center, Input } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Language Pocketbook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center>
        <Box w='50%'>
          <Input h={200} placeholder='Start translating...' />
        </Box>
      </Center>
    </Box>



  )
}

export default Home
