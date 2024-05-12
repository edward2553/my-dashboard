import React from 'react';
import { Sidebar } from '../components';

const DashboardLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex">
        <Sidebar />
        <div className="w-full text-slate-900">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
