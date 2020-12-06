import Layout from 'components/layout';
import AddPostForm from 'components/add-posts-form';
import { PageTitle } from 'styles/styled-globals';

const NewPost: React.FC = () => (
  <Layout>
    <PageTitle>Add new post page</PageTitle>
    <AddPostForm />
  </Layout>
);


export default NewPost;
