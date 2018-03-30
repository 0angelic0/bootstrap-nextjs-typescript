import * as React from 'react';
import Head from '../next/head';

const CustomHead = () =>
  <Head>
    <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
    <link rel='stylesheet' href='https://unpkg.com/react-table@latest/react-table.css' />
    <script src="/static/script/azure-storage.common.min.js"/>
    <script src="/static/script/azure-storage.blob.min.js"/>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>

export default CustomHead;