import react, { ReactNode } from 'react';

interface GlobalLayoutProps {
  children: ReactNode;
}
function GlobalLayout({ children }: GlobalLayoutProps) {
  return (
    <>
      <div className="pt-2 px-7 bg-red-50 w-screen h-screen">{children}</div>
    </>
  );
}
export default GlobalLayout;
