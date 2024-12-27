import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/Components/ui/card";
import { Account } from '@/types';
import AccountCard from "@/Components/AccountCard";

interface DashboardProps {
    accounts: Account[];
}

export default function Dashboard({ accounts }: DashboardProps) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    Home
                </h2>
            }
        >

            <Head title="Home" />

            <div id="mainBody" className="p-8 flex flex-col gap-3">
                <h1 className='text-3xl font-semibold mb-3'>Dashboard</h1>
                <Card>
                    <CardHeader>
                        <CardTitle className='text-2xl'>My Accounts</CardTitle>
                    </CardHeader>
                    <CardContent className='px-4 flex flex-col'>
                        { accounts.map((account: Account) => (
                            <AccountCard key={account.id} account={account} />
                        )) }
                    </CardContent>
                </Card>

            </div>
        </AuthenticatedLayout>
    );
}
