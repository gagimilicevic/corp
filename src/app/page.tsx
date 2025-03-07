import imageData from '@/assets/home.jpg';
import Hero from '@/components/hero';

export default function HomePage() {
  return (
    <Hero imgData={imageData} imgAlt="Home page" title="Professional Cloud Hosting" />
  );
}
