import {useAppDispatch, useAppSelector} from '@/app/hooks.ts';
import {selectLoan, setDuration, setPurpose, setSum} from '@/app/loan/loanSlice.ts';
import {useState} from 'react';

export default function useProductForm() {
  const dispatch = useAppDispatch();
  const loan = useAppSelector(selectLoan).loan;

  const setSumHandler = (sum: number) => {
    dispatch(setSum(sum));
    setPayment(Math.round(sum / loan.duration / 12));
  };

  const setDurationHandler = (d: number) => {
    dispatch(setDuration(d));
    setPayment(Math.round(loan.sum / d / 12));
  };

  const [payment, setPayment] = useState(0);

  return {
    sum: loan.sum,
    setSum: setSumHandler,
    duration: loan.duration,
    setDuration: setDurationHandler,
    purpose: loan.purpose,
    setPurpose: (purpose: string) => dispatch(setPurpose(purpose)),
    payment,
  };
}
