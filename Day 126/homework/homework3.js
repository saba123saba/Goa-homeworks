// 3) Dynamic Attributes
// Create a component that renders an <img> element.
// Pass dynamic src and alt attributes using an object of values.

export default function App() {
    const imageAttributes = {
      src: 'https://www.pexels.com/photo/close-up-photo-of-glowing-blue-butterflies-326055/',
      alt: 'Placeholder Image'
    }
    
    return (
      <main> 
        <img src={imageAttributes.src} alt={imageAttributes.alt}></img>
      </main>
    );
}
  