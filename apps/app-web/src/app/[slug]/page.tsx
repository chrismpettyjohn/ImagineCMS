
import ComposerClient from "../../libs/composer/ComposerClient";

async function fetchPageData(slug: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/pages/${slug}`);
    if (!res.ok) {
        throw new Error('Failed to fetch page data');
    }
    const data = await res.json();
    return data.components || [];
}

interface PageProps {
    params: { slug: string };
}

const Page = async ({ params }: PageProps) => {
    const components = await fetchPageData(params.slug);

    return (
        <div>
            <h1>{params.slug.charAt(0).toUpperCase() + params.slug.slice(1)} Page</h1>
            <ComposerClient components={components} slug={params.slug} />
        </div>
    );
};

export default Page;
