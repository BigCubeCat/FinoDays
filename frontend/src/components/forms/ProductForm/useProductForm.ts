import {useState} from 'react';

export default function useProductForm() {
  const [sum, setSum] = useState(0);
  const [payment, setPayment] = useState(0);
  const [purpose, setPurpose] = useState('other');
  const [time, setTime] = useState<number>(1);

  return {
    sum, setSum,
    payment, setPayment,
    purpose, setPurpose,
    time, setTime
  };
}