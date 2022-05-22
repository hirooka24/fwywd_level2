import Logo from '@/component/atom/Logo/index';
import { PageHeader } from '@/component/header_index';

const Home: React.FC = () => (
  <main className='mx-auto max-w-6xl py-6'>
    <h1 className='text-lg font-bold text-primary-800'>
      Welcome to Kikagaku Next.js Starter Kit!!
      <PageHeader />
    </h1>
  </main>
);

export default Home;
