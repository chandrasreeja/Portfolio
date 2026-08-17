import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chandra Sreeja Chinigepalli | Data Engineer & CS Grad Student @ UIUC',
  description:
    'Portfolio of Chandra Sreeja Chinigepalli — Master of Computer Science student at UIUC with 2+ years of experience in data engineering, ETL pipelines, analytics, & ML systems at Barclays & ADM.',
  keywords: [
    'Chandra Sreeja',
    'Chandra Sreeja Chinigepalli',
    'Data Engineer',
    'UIUC Computer Science',
    'ETL Pipelines',
    'PySpark',
    'Machine Learning',
    'Barclays',
    'ADM',
    'SMARTHUB',
  ],
  authors: [{ name: 'Chandra Sreeja Chinigepalli' }],
  creator: 'Chandra Sreeja Chinigepalli',
  openGraph: {
    title: 'Chandra Sreeja Chinigepalli | Developer Portfolio',
    description:
      'Master of Computer Science at UIUC | Data Engineer | Scalable ETL Pipelines & ML Systems',
    url: 'https://chandrasreeja.github.io',
    siteName: 'Chandra Sreeja Chinigepalli Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chandra Sreeja Chinigepalli | Developer Portfolio',
    description:
      'Master of Computer Science at UIUC | Data Engineer | Scalable ETL Pipelines & ML Systems',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#0a192f',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-navy text-slate antialiased selection:bg-navy-lightest selection:text-green min-h-screen">
        {children}
      </body>
    </html>
  );
}
