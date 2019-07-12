import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import App from '../containers/App/App';
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <App />
  </Layout>
);

export default IndexPage;
