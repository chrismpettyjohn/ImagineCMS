'use client';
import { useParams } from 'next/navigation';
import { ContentTypesEditPage } from '../../../../ui/pages/content-types/ContentTypeEdit';

export default function ContentTypesEdit() {
    const params = useParams<{ contentTypeID: string; }>()

    return <ContentTypesEditPage contentTypeID={Number(params.contentTypeID)} />;
}
