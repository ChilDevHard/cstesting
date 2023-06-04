import Head from 'next/head';
import {Box, Container, Typography} from "@mui/material"
import Layout from '../components/layout';
import CarSearch from '../components/carSearch';

export default function Home() {
  return (
    <Layout>
          <CarSearch/>
    </Layout>
  )
}
