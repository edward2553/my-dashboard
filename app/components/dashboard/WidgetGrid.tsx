'use client'
import { IoAccessibilityOutline } from 'react-icons/io5';
import { SimpleWidget } from './SimpleWidget';
import { useAppSelector } from '@/app/store';

export const WidgetGrid = () => {

  const { count } = useAppSelector(store => store.count)

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        title={`${count}`}
        label="Contador"
        subTitle="Productos agregados"
        href="/dashboard/counter"
        icon={<IoAccessibilityOutline size={50} className="text-blue-500" />}
      />
    </div>
  );
};
