'use client';
import { useParams } from 'next/navigation';
import { RolesEditPage } from '../../../../ui/pages/roles/RolesEdit';

export default function RolesEdit() {
    const params = useParams<{ roleID: string; }>()

    return <RolesEditPage roleID={Number(params.roleID)} />;
}
