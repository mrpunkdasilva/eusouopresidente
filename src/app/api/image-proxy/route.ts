import { NextResponse } from 'next/server';

const ALLOWED_HOSTS = new Set([
  'upload.wikimedia.org',
  'images.unsplash.com',
  'res.cloudinary.com',
]);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'Parâmetro "url" é obrigatório.' }, { status: 400 });
  }

  let parsedUrl: URL;

  try {
    parsedUrl = new URL(url);
  } catch {
    return NextResponse.json({ error: 'URL inválida.' }, { status: 400 });
  }

  if (!['http:', 'https:'].includes(parsedUrl.protocol) || !ALLOWED_HOSTS.has(parsedUrl.hostname)) {
    return NextResponse.json({ error: 'Host não permitido.' }, { status: 403 });
  }

  try {
    const response = await fetch(parsedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; EuSouOPresidente/1.0)',
        Accept: 'image/*',
      },
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Falha ao buscar imagem: ${response.status}` },
        { status: response.status }
      );
    }

    const contentType = response.headers.get('content-type') ?? 'application/octet-stream';
    const buffer = await response.arrayBuffer();

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400, immutable',
      },
    });
  } catch {
    return NextResponse.json({ error: 'Erro ao buscar imagem.' }, { status: 502 });
  }
}
