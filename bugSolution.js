```javascript
import {useRouter} from 'next/router';

const MyComponent = () => {
  const router = useRouter();
  const handleClick = () => {
    // Check if the current route is already the home route
    if (router.pathname !== '/') {
      router.push('/');
    }
  };

  return (
    <button onClick={handleClick}>Go to Home</button>
  );
};

export default MyComponent;```