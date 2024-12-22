```javascript
import {useRouter} from 'next/router';

const MyComponent = () => {
  const router = useRouter();
  const handleClick = () => {
    // This will cause an infinite loop
    router.push('./');
  };

  return (
    <button onClick={handleClick}>Go to Home</button>
  );
};

export default MyComponent;```