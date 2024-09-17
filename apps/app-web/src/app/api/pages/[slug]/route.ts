import { NextResponse } from 'next/server';

const pages = {
    home: [
        { type: 'Header', props: { title: 'Welcome to Home', subtitle: 'Enjoy your stay!' } },
        { type: 'Button', props: { label: 'Click Me!', onClick: () => alert('Clicked!') } },
    ],
    login: [
        { type: 'Header', props: { title: 'Login Page', subtitle: 'Please login' } },
        { type: 'Button', props: { label: 'Login', onClick: () => alert('Logging in...') } },
    ],
};

export async function GET(req: Request, { params }: { params: { slug: string } }) {
    const { slug } = params;
    // eslint-disable-next-line
    // @ts-ignore
    const page = pages[slug as string];

    if (!page) {
        return NextResponse.json({ message: 'Page not found' }, { status: 404 });
    }

    return NextResponse.json({ components: page }, { status: 200 });
}
