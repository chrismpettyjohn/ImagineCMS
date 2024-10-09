'use client';
import { useParams } from 'next/navigation';
import { MediaEditPage } from '../../../../ui/pages/media/MediaEdit';

export default function MediaEdit() {
    const params = useParams<{ mediaID: string; }>()

    return <MediaEditPage mediaID={Number(params.mediaID)} />;
}
