"use client"

import { FC, useEffect, useState } from "react";

interface CurrencyProps {
    value?: string | number;
}

export const formatter = new Intl.NumberFormat("en-US",{
    style:"currency",
    currency:"USD",
  });

const Currency:FC<CurrencyProps> = ({value}) => {
    const [isMounted,setMounted] = useState<boolean>(false);
    useEffect(()=>{
        setMounted(true);
    },[]);
    if(!isMounted)
        return null;
  return (
    <div className="font-semibold">
        {formatter.format(Number(value))}
    </div>
  )
}

export default Currency
