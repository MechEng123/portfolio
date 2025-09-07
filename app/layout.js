
export const metadata = {
  title: "Hussain Syed | P.Eng., PMP® Portfolio",
  description: "PMP® Project Manager & Process Engineer for High‑Rise Facade Manufacturing – KSA ready.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900">{children}</body>
    </html>
  );
}
