```javascript
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(setData);
  }, []);

  //Solution 1: Conditional Rendering
  if (!data) {
    return <Text>Loading...</Text>;
  }

  //Solution 2: Optional Chaining
  return (
    <View>
      <Text>{data?.name}</Text>
    </View>
  );
};

export default MyComponent;
```