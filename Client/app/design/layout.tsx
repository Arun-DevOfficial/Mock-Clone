// app/design/layout.tsx
export default function DesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Child route content renders here */}
      <main>{children}</main>
    </div>
  );
}
