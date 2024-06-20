'use client'
import { useEffect,useState } from 'react';
import { Button } from '@/components/ui/button';
import { useCounterStore } from "@/stores/useCounterStore";

const CounterComponent = () => {
    const { count, incrementCount, decrementCount } = useCounterStore(
        (state:any) => state,
    );

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);
    
    if (!isClient) {
        return <div className="text-center mt-4">Loading...</div>;
      }
    
      return (
        <div className="flex flex-col items-center space-y-4 mt-8">
          <p className="text-2xl font-bold">Count: {count}</p>
          <div className="flex space-x-4">
            <Button
              onClick={incrementCount}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Increase
            </Button>
            <Button
              onClick={decrementCount}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Decrease
            </Button>
          </div>
        </div>
      );
    };
    
    export default CounterComponent;