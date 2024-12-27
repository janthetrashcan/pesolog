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
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from '@/Components/ui/dropdown-menu';
import { Ellipsis } from 'lucide-react';
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
                <h1 className='text-2xl font-semibold mb-3'>Dashboard</h1>
                <Card className='w-[35rem]'>
                    <CardHeader className='flex flex-row justify-between'>
                        <CardTitle className='text-xl'>My Accounts</CardTitle>
                        <DropdownMenu>
                            <DropdownMenuTrigger><Ellipsis /></DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>New Account</DropdownMenuItem>
                                <DropdownMenuItem>Manage Accounts</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </CardHeader>
                    <CardContent className='px-4 flex flex-wrap justify-start align-middle gap-2'>
                        { accounts.map((account: Account) => (
                            <AccountCard key={account.id} account={account} />
                        )) }
                    </CardContent>
                </Card>

            </div>
        </AuthenticatedLayout>
    );
}
