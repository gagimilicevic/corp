import imageData from '@/assets/scale.jpg';
import Hero from '@/components/hero';

export default function ScalePage() {
    return (
        <Hero imgData={imageData} imgAlt='Scale page' title='Scale your app to infinity' />
    );
}
