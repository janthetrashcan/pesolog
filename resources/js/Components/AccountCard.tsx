import React from 'react';
import {
    Card,
    CardContent,
    CardHeader,
  } from "@/Components/ui/card";
import {
    PhilippinePeso,
    Banknote,
    CreditCard,
    PiggyBank,
    ScrollText,
    FilePenLine,
    Wallet
  } from 'lucide-react';
import { Account } from '@/types';

interface AccountCardProps{
    account: Account;
}

const getIconByAccountType = (accountType: number) => {
    switch(accountType){
        // general
        case 1:
            return <Wallet />;
        // cash
        case 2:
            return <Banknote />;
        // credit card
        case 3:
            return <CreditCard />;
        // savings account
        case 4:
            return <PiggyBank />;
        // Insurance
        case 5:
            return <ScrollText />;
        // Loan
        case 6:
            return <FilePenLine />;
        default:
            return <PhilippinePeso />;
    }
}

export default function AccountCard({ account }: AccountCardProps){
    return(
        <Card className={`w-[16rem] bg-${ account.color }`}>
            <CardHeader className='font-bold text-xl flex flex-row justify-between align-text-top'>
                <h1>{ account.name }</h1>
                <span>{ getIconByAccountType(account.account_type_id) }</span>
            </CardHeader>


            <CardContent className='font-normal'>
                Balance: { account.currency } { account.balance }
            </CardContent>
        </Card>
    );
}
