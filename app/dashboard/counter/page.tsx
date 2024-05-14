
import { CarCounter } from '@/app/shopping-cart';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Counter',
  description: 'Contador',
};

const CounterPage = () => {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span className='mb-2'>Productos en el carrito</span>
      <CarCounter value={20} />
    </div>
  );
};

export default CounterPage;
