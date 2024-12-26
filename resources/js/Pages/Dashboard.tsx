import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button } from "@/Components/ui/button";


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



        </AuthenticatedLayout>
    );
}
