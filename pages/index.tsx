import styled from 'styled-components';
import Layout from 'components/Layout/Layout';

const Button = styled.button`
  color: #222;
  padding: 10px 20px;
  border: none;
  background-color: cyan;
`;

const Home = () => {
  return (
    <Layout>
      <Button>
        Button
      </Button>
    </Layout>
  )
}
export default Home
