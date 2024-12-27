import React from 'react';
import {
    Card,
    CardContent,
    CardHeader,
  } from "@/Components/ui/card";
import { Account } from '@/types';

interface AccountCardProps{
    account: Account;
}

export default function AccountCard({ account }: AccountCardProps){
    return(
        <Card className={`w-[16rem] bg-${ account.color }`}>
            <CardHeader className='font-bold text-xl mb-[-1rem]'>
                { account.name }
            </CardHeader>
            <CardContent className='font-normal'>
                Balance: { account.currency } { account.balance }
            </CardContent>
        </Card>
    );
}
