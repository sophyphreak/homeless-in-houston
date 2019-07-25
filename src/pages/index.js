import React from 'react';

import Layout from '../presentational/layout';
import SEO from '../presentational/seo';
import App from '../container/App/App';
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <App />
  </Layout>
);

export default IndexPage;
