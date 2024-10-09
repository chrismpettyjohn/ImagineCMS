'use client';
import { useParams } from 'next/navigation';
import { UsersEditPage } from '../../../../ui/pages/users/UsersEdit';

export default function UsersEdit() {
    const params = useParams<{ userID: string; }>()

    return <UsersEditPage userID={Number(params.userID)} />;
}
