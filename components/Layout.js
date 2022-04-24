import React from 'react';
import Script from 'next/script'
import Head from 'next/head';
import Header from '../components/Header';
import Home from '../components/Home';

export default function Layout() {

    return (
        <div>
            <Head>
                <meta charset="utf-8" />
                <link href="https://dev.modelosistema.bravo.st/css/cdn_painel_v4.css" rel="stylesheet"></link>
                <title>Painel | Portal</title>
            </Head>
            <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" />
            <Script src="https://dev.modelosistema.bravo.st/js/extensao/bravoselect.min.js" />
            <Header/>
            <Home/>
            <footer>
            </footer>
        </div>
    )
}
