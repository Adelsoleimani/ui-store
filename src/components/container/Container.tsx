function Container({ children }: { children: React.ReactNode }) {
  return (
    <div dir="rtl" className="px-20">
      {children}
    </div>
  );
}

export default Container;
