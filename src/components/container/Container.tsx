function Container({ children }: { children: React.ReactNode }) {
  return (
    <div dir="rtl" className="container mx-auto px-4">
      {children}
    </div>
  );
}

export default Container;
