import './assests/styles/global.scss';
import Rating from './components/Rating/Rating';
import Testimonials from './components/Testimonials/Testimonials';
import Text from './components/Text/Text';

function App() {
  return (
    <div className="container">
      <Text />
      <div className="rating-container">
        <Rating />
        <Rating />
        <Rating />
      </div>
      <div className="testimonials-container">
        <Testimonials />
        <Testimonials />
        <Testimonials />
      </div>
    </div>
  );
}

export default App;
