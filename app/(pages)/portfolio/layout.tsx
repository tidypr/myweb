import PortfolioHeader from "@/components/portfolio/PortfolioHeader";

export default function Portfoliolayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PortfolioHeader />
      {children}
    </>
  );
}
