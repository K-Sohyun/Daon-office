import type { Metadata } from "next";
import { LayoutProvider } from "@/contexts/LayoutContext";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "다온오피스",
  description: "다온오피스에 오신 걸 환영합니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <LayoutProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </LayoutProvider>
      </body>
    </html>
  );
}
