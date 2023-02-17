import './assests/styles/global.scss';
import Rating from './components/Rating/Rating';
import Testimonials from './components/Testimonials/Testimonials';
import Text from './components/Text/Text';

const testimonials = [
  {
    id: 1,
    name: 'Colton Smith',
    avatar: 'image-colton.jpg',
    text: 'We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!',
  },
  {
    id: 2,
    name: 'Irene Roberts',
    avatar: 'image-irene.jpg',
    text: 'Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.',
  },
  {
    id: 3,
    name: 'Anne Wallace',
    avatar: 'image-anne.jpg',
    text: 'Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!',
  },
];

function App() {
  return (
    <div className="container">
      <Text />
      <div className="rating-container">
        <Rating phrase="Rated 5 Stars in Reviews" />
        <Rating phrase="Rated 5 Stars in Report Guru" />
        <Rating phrase="Rated 5 Stars in BestTech" />
      </div>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <Testimonials testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}

export default App;
