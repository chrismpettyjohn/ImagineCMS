'use client';
import { useParams } from 'next/navigation';
import { ContentPagesEditPage } from '../../../../ui/pages/content-pages/ContentPageEdit';

export default function ContentPagesEdit() {
    const params = useParams<{ contentPageID: string; }>()

    return <ContentPagesEditPage contentPageID={ Number(params.contentPageID) } />;
}
