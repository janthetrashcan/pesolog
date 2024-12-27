import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button } from "@/Components/ui/button";


export default function Records({ children }: { children: React.ReactNode }) {
    return (

        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Home
                </h2>
            }
        >

            <Head title="Home" />

            <div id="mainBody" className="p-6">
                <h1 className='text-2xl font-semibold'>Records</h1>
            </div>



        </AuthenticatedLayout>
    );
}
