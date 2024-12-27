import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button } from "@/Components/ui/button";
import { Account } from "@/models";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";


export default function Dashboard({ children }: { children: React.ReactNode }) {
    return (

        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Home
                </h2>
            }
        >

            <Head title="Home" />

            <div id="mainBody" className="p-6 flex flex-col gap-3">
                <h1 className='text-3xl font-semibold mb-3'>Dashboard</h1>

                <Card>
                    <CardHeader>
                        <CardTitle>My Accounts</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {/* {accounts.data.map} */}



                    </CardContent>
                </Card>

            </div>



        </AuthenticatedLayout>
    );
}
