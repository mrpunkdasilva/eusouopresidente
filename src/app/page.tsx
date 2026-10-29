'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Download, Upload, ShieldCheck, Palette, FileText, RotateCcw } from 'lucide-react';
import html2canvas from 'html2canvas-pro';
import jsPDF from 'jspdf';

const TEMPLATES: Record<string, { header: string; subheader: string; title: string; logo: string; content: string }> = {
  brasil: {
    header: 'REPÚBLICA FEDERATIVA DO BRASIL',
    subheader: 'Gabinete da Presidência da República',
    title: 'Pronunciamento Oficial ao Povo Brasileiro',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Coat_of_arms_of_Brazil.svg',
    content: `Dirijo-me ao povo brasileiro e à comunidade internacional como o verdadeiro presidente eleito do Brasil.

Antes de mais nada, queria agradecer ao Presidente Milei, pela coragem, senso de justiça e legalidade, ao Presidente Trump e ao maravilhoso povo americano por me acolher. Essa é uma terra de liberdades e irmãos que comungam dos mesmos valores das boas pessoas do meu país.

O Presidente Trump é um grande defensor da liberdade de expressão.

Na noite de domingo, vi estarrecido uma fraude eleitoral se concretizar diante dos meus olhos. A atuação ilegítima e ilegal do ex-advogado do Lula permitiu que uma impossibilidade matemática se concretizasse e Lula acrescentasse mais de 10 milhões de votos do primeiro para o segundo turno.

Uma decisão do STF, tomada por cima da competência do TSE, estendeu a votação no apagar das luzes, e a ordem só chegou depois do fim do horário legal, quando as urnas já estavam encerradas. Eleitores ficaram submetidos a regras diferentes. Até agora, o TSE se limitou a defender a prorrogação do horário e não há sequer uma única resposta crível. E as nulidades não são o único problema. Ao longo de toda a campanha, houve abuso de poder político, econômico e uso da máquina pública em favor da reeleição. São fatos graves, expressamente vedados por lei, que justificam a cassação da chapa Lula-Alckmin.

A resposta do regime ao meu questionamento veio rápida. Como num plano previamente elaborado, sete minutos após essa repugnante fraude eleitoral, o juiz, implicado em um imenso escândalo de corrupção, diretamente citado no inquérito que usou para tentar sequestrar meus passaportes, e que muito provavelmente estaria preso, se eles não tivessem impedido a minha posse, pôs em andamento a máquina de perseguição política do regime. Sendo impedido de origem e completamente suspeito para iniciar qualquer procedimento judicial contra mim, a sua mera participação em atos processuais mostra o tamanho da arbitrariedade e ilegalidade em andamento.

Não era minha intenção deixar minha pátria, mas eu sei exatamente onde isso vai dar. Isso é o manual clássico de qualquer golpe de Estado. A perseguição política que começou com meu pai, o ex-presidente Jair Bolsonaro, e se espalhou para milhares de outros brasileiros patriotas comuns e até mesmo cidadãos americanos, tem um único objetivo: silenciar qualquer pessoa que não concorde com o regime de exceção instaurado no Brasil, através de uma Suprema Corte aparelhada pela organização criminosa petista.

Para deixar claro, não existe nenhum mandado de prisão contra mim, porque eu não cometi nenhum crime. O que existe é uma caça às bruxas politicamente motivada, que visava me colocar como refém e objeto de chantagem para proteger os juízes corruptos da Suprema Corte do impeachment. Eis o roteiro da perseguição: apreensão de passaporte, tornozeleira eletrônica, censura, prisão domiciliar, julgamento de fachada e, finalmente, condenação política. Não vou submeter minha família a isso e meu país não merece passar novamente por este vexame internacional.

Diante da instrumentalização política da Justiça no Brasil, trouxe minha família para os Estados Unidos, onde estamos em segurança. Agradeço, mais uma vez, ao Presidente Trump e ao governo americano por nos acolherem e nos darem a segurança jurídica que não temos mais no Brasil.

Quero deixar claro: não fugi do Brasil, eu saí pelo Brasil, saí de um regime de exceção para poder ser o líder que o meu povo merece, pois calado, preso e censurado, como meu pai está, eu não poderia ser essa liderança e seríamos entregues ao teatro institucional de uma oposição castrada e controlada pela Suprema Corte repleta de serviçais do regime.

Não sou o primeiro a ter que lutar pelo próprio país longe dele. Rui Barbosa foi para o exílio por enfrentar o arbítrio de Floriano Peixoto e de lá seguiu defendendo a lei e a liberdade. Charles de Gaulle liderou a França Livre a partir de Londres, condenado à morte pelo regime de Vichy, e voltou para libertar o seu país. José Martí organizou a luta pela independência de Cuba a partir de Nova York. Na Venezuela, Juan Guaidó e Edmundo González tiveram que deixar o país por enfrentar a ditadura chavista, e María Corina Machado, mesmo perseguida, se recusou a legitimar a fraude e se tornou um símbolo mundial da resistência democrática. Todos eles foram tratados como criminosos pelos regimes que enfrentavam. A história os chamou de outra coisa.

Este é apenas o começo da nossa luta pela democracia, pelos direitos humanos e pela liberdade no Brasil. Quero dizer, não só para os meus 60 milhões de eleitores, mas para o povo brasileiro, que eu sou o presidente eleito e os criminosos que roubaram a eleição do Brasil são parte de uma organização criminosa que implementou uma tirania. Vocês que almejavam a mudança, e eu não vou abandoná-los, eu serei a voz e a liderança livre da nossa nação.

Às instituições brasileiras, faço um apelo: essa sandice precisa acabar. O Brasil vive hoje um caos jurídico, de corrupção e de perseguição política, em que a oposição tem medo de falar e a família de ex-presidente é tratada como inimiga do Estado. Nenhuma nação consegue viver em paz ou prosperar assim. Ainda há tempo de restabelecer o equilíbrio entre os Poderes e devolver aos brasileiros a confiança que perderam.

À comunidade internacional, peço: não normalizem o que está acontecendo no Brasil. O que acontece hoje no meu país não é normal e não pode ser tratado como normal.

Aos senadores, deputados e governadores que ajudei a eleger, e em especial ao meu candidato à presidência do Senado, Rogério Marinho: sei que hoje vocês não têm a liberdade necessária para o pleno exercício da atividade política. Por isso, liderarei a oposição daqui. Direi o que vocês, aí, não podem dizer, e assumirei os riscos que vocês não podem correr.

E a você, que votou em mim e sonha com a mudança: não estamos derrotados e não estamos sozinhos. Este é apenas o começo da nossa luta pela democracia, pelos direitos humanos e pela liberdade no Brasil. Nos próximos dias, vou me dirigir regularmente ao povo brasileiro, e apresentaremos uma estratégia para mobilizar a oposição e o imenso apoio popular que temos, por todos os meios pacíficos e legítimos, para impedir que Lula consolide um regime ditatorial no Brasil. Peço a cada um que permaneça firme e jamais desista.

Saí do Brasil, mas não abandonei os brasileiros. Esta luta não terminou no dia 25 de outubro. Ela só termina quando o Brasil voltar a ser um país livre. E esse dia vai chegar.

Que Deus abençoe o Brasil.`,
  },
  imperio: {
    header: 'IMPÉRIO DO BRASIL',
    subheader: 'Casa Imperial e Suprema Regência',
    title: 'Decreto Imperial de Restauração',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Coat_of_arms_of_the_Empire_of_Brazil_%281870%E2%80%931889%29.svg',
    content: `Aos povos do Império do Brasil e às nações aliadas, fazemos saber que a ordem legítima e soberana há de prevalecer sobre qualquer forma de tirania e arbítrio institucional...`,
  },
  empresa: {
    header: 'CONSELHO DE ADMINISTRAÇÃO',
    subheader: 'Diretoria Executiva Global',
    title: 'Comunicado Oficial aos Acionistas e Mercado',
    logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80',
    content: `Comunicamos a todos os colaboradores, parceiros e acionistas que nossa gestão continuará pautada pela estrita legalidade, inovação e liberdade de mercado...`,
  },
};

async function toEmbeddedImage(url: string): Promise<string> {
  if (url.startsWith('data:')) return url;

  const fetchUrl = url.startsWith('/')
    ? url
    : `/api/image-proxy?url=${encodeURIComponent(url)}`;

  const response = await fetch(fetchUrl);
  if (!response.ok) throw new Error('Não foi possível carregar o brasão.');

  const blob = await response.blob();
  const objectUrl = URL.createObjectURL(blob);

  try {
    const image = new Image();

    await new Promise<void>((resolve, reject) => {
      image.onload = () => resolve();
      image.onerror = () => reject(new Error('Brasão inválido.'));
      image.src = objectUrl;
    });

    const size = 512;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;

    const context = canvas.getContext('2d');
    if (!context) throw new Error('Canvas indisponível.');

    const width = image.naturalWidth || size;
    const height = image.naturalHeight || size;
    const scale = Math.min(size / width, size / height);
    const drawWidth = width * scale;
    const drawHeight = height * scale;

    context.drawImage(
      image,
      (size - drawWidth) / 2,
      (size - drawHeight) / 2,
      drawWidth,
      drawHeight
    );

    return canvas.toDataURL('image/png');
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}

function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error('Não foi possível ler o arquivo.'));
    reader.readAsDataURL(file);
  });
}

async function fileToLogoDataUrl(file: File): Promise<string> {
  const dataUrl = await fileToDataUrl(file);
  const image = new Image();

  await new Promise<void>((resolve, reject) => {
    image.onload = () => resolve();
    image.onerror = () => reject(new Error('Imagem inválida.'));
    image.src = dataUrl;
  });

  const maxSize = 512;
  const width = image.naturalWidth || maxSize;
  const height = image.naturalHeight || maxSize;
  const scale = Math.min(1, maxSize / Math.max(width, height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(width * scale));
  canvas.height = Math.max(1, Math.round(height * scale));

  const context = canvas.getContext('2d');
  if (!context) throw new Error('Canvas indisponível.');

  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL('image/png');
}

export default function Home() {
  const [templateId, setTemplateId] = useState('brasil');
  const [title, setTitle] = useState('');
  const [headerText, setHeaderText] = useState('');
  const [subHeaderText, setSubHeaderText] = useState('');
  const [content, setContent] = useState('');
  const [signature, setSignature] = useState('O Presidente Eleito');
  const [locationDate, setLocationDate] = useState('Brasília / Washington D.C., 28 de Outubro de 2026');
  const [logoUrl, setLogoUrl] = useState('');
  
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [theme, setTheme] = useState<'emerald' | 'amber'>('emerald');

  const previewRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Carregar do localStorage ou buscar do MongoDB (template inicial)
  useEffect(() => {
    async function loadData() {
      try {
        const localData = localStorage.getItem('eusouopresidente_doc');
        if (localData) {
          const doc = JSON.parse(localData);
          setTemplateId(doc.templateId || 'brasil');
          setTitle(doc.title);
          setHeaderText(doc.headerText);
          setSubHeaderText(doc.subHeaderText);
          setContent(doc.content);
          setSignature(doc.signature || 'O Presidente Eleito');
          setLocationDate(doc.locationDate || 'Brasília / Washington D.C., 28 de Outubro de 2026');
          setLogoUrl(doc.logoUrl);
          setLoading(false);
          return;
        }

        const res = await fetch('/api/documents');
        const json = await res.json();
        if (json.success && json.data) {
          const doc = json.data;
          setTemplateId(doc.templateId || 'brasil');
          setTitle(doc.title);
          setHeaderText(doc.headerText);
          setSubHeaderText(doc.subHeaderText);
          setContent(doc.content);
          setSignature(doc.signature || 'O Presidente Eleito');
          setLocationDate(doc.locationDate || 'Brasília / Washington D.C., 28 de Outubro de 2026');
          setLogoUrl(doc.logoUrl);
        }
      } catch (err) {
        console.error('Erro ao carregar dados:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Autosave no localStorage
  useEffect(() => {
    if (loading) return;
    const docState = {
      templateId,
      title,
      headerText,
      subHeaderText,
      content,
      signature,
      locationDate,
      logoUrl,
    };
    localStorage.setItem('eusouopresidente_doc', JSON.stringify(docState));
  }, [templateId, title, headerText, subHeaderText, content, signature, locationDate, logoUrl, loading]);

  const handleReset = () => {
    if (confirm('Deseja restaurar o template original do MongoDB e descartar suas alterações locais?')) {
      localStorage.removeItem('eusouopresidente_doc');
      window.location.reload();
    }
  };

  const handleTemplateChange = (value: string | null) => {
    if (!value) return;
    setTemplateId(value);
    const t = TEMPLATES[value];
    if (t) {
      setHeaderText(t.header);
      setSubHeaderText(t.subheader);
      setTitle(t.title);
      setLogoUrl(t.logo);
      setContent(t.content);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;

    setUploading(true);
    try {
      const dataUrl = await fileToLogoDataUrl(file);
      setLogoUrl(dataUrl);
    } catch (err) {
      console.error(err);
      alert('Não foi possível carregar essa imagem.');
    } finally {
      setUploading(false);
    }
  };

  const handleExportPDF = async () => {
    if (!previewRef.current) {
      alert('Elemento de visualização não encontrado.');
      return;
    }

    const preview = previewRef.current;

    setExporting(true);
    try {
      let embeddedLogoUrl = '';

      if (logoUrl) {
        try {
          embeddedLogoUrl = await toEmbeddedImage(logoUrl);
        } catch (logoError) {
          console.warn('Não foi possível embutir o brasão no PDF:', logoError);
        }
      }

      await document.fonts.ready;

      const canvas = await html2canvas(preview, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
        backgroundColor: '#ffffff',
        onclone: (clonedDocument) => {
          const clonedLogo = clonedDocument.querySelector<HTMLImageElement>(
            '[data-official-logo]'
          );

          if (clonedLogo && embeddedLogoUrl) {
            clonedLogo.src = embeddedLogoUrl;
            clonedLogo.removeAttribute('crossorigin');
          }
        },
      });
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      let exportCanvas = canvas;
      let imgHeight = (canvas.height * pageWidth) / canvas.width;

      if (imgHeight > pageHeight + 1) {
        const context = canvas.getContext('2d');

        if (context) {
          const { width, height } = canvas;
          const pixels = context.getImageData(0, 0, width, height).data;
          let lastContentRow = height - 1;

          for (let y = height - 1; y >= 0; y--) {
            let hasContent = false;

            for (let x = 0; x < width; x++) {
              const index = (y * width + x) * 4;
              const isOpaque = pixels[index + 3] > 8;
              const isNotWhite =
                pixels[index] < 245 ||
                pixels[index + 1] < 245 ||
                pixels[index + 2] < 245;

              if (isOpaque && isNotWhite) {
                hasContent = true;
                break;
              }
            }

            if (hasContent) {
              lastContentRow = y;
              break;
            }
          }

          const croppedHeight = Math.min(height, lastContentRow + 1);

          if (croppedHeight < height) {
            const cropped = document.createElement('canvas');
            cropped.width = width;
            cropped.height = croppedHeight;

            const croppedContext = cropped.getContext('2d');
            if (croppedContext) {
              croppedContext.fillStyle = '#ffffff';
              croppedContext.fillRect(0, 0, width, croppedHeight);
              croppedContext.drawImage(canvas, 0, 0);
              exportCanvas = cropped;
              imgHeight = (croppedHeight * pageWidth) / width;
            }
          }
        }
      }

      const imgData = exportCanvas.toDataURL('image/png');
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, pageWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0.5) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, pageWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`documento-oficial-${templateId}.pdf`);
    } catch (err) {
      console.error('Erro detalhado ao gerar PDF:', err);
      const message = err instanceof Error ? err.message : String(err);
      alert('Erro ao gerar PDF: ' + message);
    } finally {
      setExporting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-emerald-400 flex items-center justify-center font-mono text-base tracking-widest">
        CARREGANDO TEMPLATE DO MONGODB...
      </div>
    );
  }

  const accentColorClass = theme === 'emerald' ? 'text-emerald-400' : 'text-amber-400';
  const buttonBgClass = theme === 'emerald' ? 'bg-emerald-600 hover:bg-emerald-500 text-white font-medium' : 'bg-amber-600 hover:bg-amber-500 text-white font-medium';

  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-black">
      {/* Minimalist Header */}
      <header className="border-b border-zinc-800 bg-black/90 backdrop-blur sticky top-0 z-50 px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ShieldCheck className={`w-6 h-6 ${accentColorClass}`} aria-hidden="true" />
          <span className="text-base font-bold tracking-wider uppercase">
            EU SOU O PRESIDENTE
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={handleReset}
            className="border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-sm py-2 px-4 focus-visible:ring-2 focus-visible:ring-emerald-400"
            title="Restaurar template original do MongoDB"
          >
            <RotateCcw className="w-4 h-4 mr-2" aria-hidden="true" />
            Restaurar Original
          </Button>
          <Button
            variant="outline"
            onClick={() => setTheme(theme === 'emerald' ? 'amber' : 'emerald')}
            className="border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-sm py-2 px-4 focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <Palette className="w-4 h-4 mr-2" aria-hidden="true" />
            Tema: {theme === 'emerald' ? 'Verde' : 'Clássico'}
          </Button>
          <Button
            onClick={handleExportPDF}
            disabled={exporting}
            className={`${buttonBgClass} text-sm py-2 px-4 focus-visible:ring-2 focus-visible:ring-emerald-400`}
          >
            <Download className="w-4 h-4 mr-2" aria-hidden="true" />
            {exporting ? 'Gerando PDF...' : 'Baixar PDF'}
          </Button>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 max-w-[1600px] mx-auto w-full">
        {/* Left Column: Minimalist Editor */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <Card className="bg-zinc-900/50 border-zinc-800 text-zinc-100 shadow-none rounded-xl">
            <CardHeader className="pb-4">
              <CardTitle className={`text-lg font-semibold flex items-center gap-2 ${accentColorClass}`}>
                <FileText className="w-5 h-5" aria-hidden="true" />
                Editor de Documento
              </CardTitle>
              <CardDescription className="text-sm text-zinc-400">
                Alterações são salvas automaticamente no seu navegador (LocalStorage).
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-sm">
              <div className="space-y-2">
                <Label htmlFor="template-select" className="text-sm font-medium text-zinc-200">
                  Template / Presets
                </Label>
                <Select value={templateId} onValueChange={handleTemplateChange}>
                  <SelectTrigger id="template-select" className="bg-zinc-900 border-zinc-800 text-zinc-100 text-sm py-3 px-4 focus-visible:ring-2 focus-visible:ring-emerald-400">
                    <SelectValue placeholder="Selecione um template" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-zinc-800 text-zinc-100 text-sm">
                    <SelectItem value="brasil">República do Brasil (Padrão)</SelectItem>
                    <SelectItem value="imperio">Império do Brasil</SelectItem>
                    <SelectItem value="empresa">Presidência Corporativa</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Custom File Upload Component */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-zinc-200">
                  Brasão / Logotipo (salvo no navegador)
                </Label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <div className="flex items-center gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploading}
                    className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-zinc-200 text-sm py-3 px-4 flex items-center gap-2 w-full justify-start"
                  >
                    <Upload className="w-4 h-4 text-zinc-400" />
                    <span className="truncate">
                      {uploading ? 'Enviando imagem...' : 'Escolher arquivo de brasão...'}
                    </span>
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="header-text" className="text-sm font-medium text-zinc-200">
                  Cabeçalho Principal
                </Label>
                <Input
                  id="header-text"
                  value={headerText}
                  onChange={(e) => setHeaderText(e.target.value)}
                  className="bg-zinc-900 border-zinc-800 text-zinc-100 text-sm py-3 px-4 focus-visible:ring-2 focus-visible:ring-emerald-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subheader-text" className="text-sm font-medium text-zinc-200">
                  Sub-cabeçalho / Órgão
                </Label>
                <Input
                  id="subheader-text"
                  value={subHeaderText}
                  onChange={(e) => setSubHeaderText(e.target.value)}
                  className="bg-zinc-900 border-zinc-800 text-zinc-100 text-sm py-3 px-4 focus-visible:ring-2 focus-visible:ring-emerald-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="title-text" className="text-sm font-medium text-zinc-200">
                  Título do Pronunciamento
                </Label>
                <Input
                  id="title-text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="bg-zinc-900 border-zinc-800 text-zinc-100 text-sm py-3 px-4 focus-visible:ring-2 focus-visible:ring-emerald-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content-text" className="text-sm font-medium text-zinc-200">
                  Texto do Pronunciamento
                </Label>
                <Textarea
                  id="content-text"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={12}
                  className="bg-zinc-900 border-zinc-800 text-zinc-100 text-sm p-4 font-serif leading-relaxed focus-visible:ring-2 focus-visible:ring-emerald-400 resize-y"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location-date" className="text-sm font-medium text-zinc-200">
                    Local e Data
                  </Label>
                  <Input
                    id="location-date"
                    value={locationDate}
                    onChange={(e) => setLocationDate(e.target.value)}
                    className="bg-zinc-900 border-zinc-800 text-zinc-100 text-sm py-3 px-4 focus-visible:ring-2 focus-visible:ring-emerald-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signature-text" className="text-sm font-medium text-zinc-200">
                    Assinatura
                  </Label>
                  <Input
                    id="signature-text"
                    value={signature}
                    onChange={(e) => setSignature(e.target.value)}
                    className="bg-zinc-900 border-zinc-800 text-zinc-100 text-sm py-3 px-4 focus-visible:ring-2 focus-visible:ring-emerald-400"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: WCAG Compliant A4 Preview with Handwriting Signature */}
        <div className="lg:col-span-7 flex flex-col items-center justify-start bg-zinc-900/20 p-8 rounded-2xl border border-zinc-900 overflow-auto">
          <div className="w-full flex items-center justify-between mb-4">
            <span className="text-xs text-zinc-400 font-mono tracking-widest uppercase">Visualização A4</span>
            <span className="text-xs text-zinc-500 font-mono">Conforme WCAG AA</span>
          </div>

          {/* A4 Paper Document */}
          <div
            ref={previewRef}
            style={{ width: '210mm', minHeight: '297mm', padding: '20mm', boxSizing: 'border-box', backgroundColor: '#ffffff', color: '#09090b', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: 'serif', position: 'relative' }}
          >
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '2rem', color: '#09090b' }}>
                {logoUrl && (
                  <img
                    key={logoUrl}
                    data-official-logo
                    src={logoUrl}
                    alt="Brasão Oficial"
                    crossOrigin="anonymous"
                    style={{ width: '80px', height: '80px', objectFit: 'contain', marginBottom: '0.5rem' }}
                  />
                )}
                <h2 style={{ fontSize: '1rem', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#09090b', margin: 0 }}>
                  {headerText}
                </h2>
                <p style={{ fontSize: '11px', fontFamily: 'sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, color: '#3f3f46', margin: '0.25rem 0' }}>
                  {subHeaderText}
                </p>
                <div style={{ width: '6rem', height: '1.5px', backgroundColor: '#09090b', margin: '0.5rem 0' }} />
              </div>

              <div style={{ textAlign: 'center', margin: '1.5rem 0' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#09090b', margin: 0 }}>
                  {title}
                </h3>
              </div>

              <div style={{ textAlign: 'justify', fontSize: '13px', lineHeight: '1.6', color: '#18181b' }}>
                {content.split('\n\n').map((paragraph, index) => (
                  <p key={index} style={{ textIndent: '2rem', marginBottom: '1rem' }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '4rem', paddingTop: '2rem' }}>
              <p style={{ textAlign: 'right', fontSize: '12px', fontFamily: 'sans-serif', marginBottom: '3rem', fontWeight: 500, color: '#27272a' }}>
                {locationDate}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', minHeight: '3rem', maxWidth: '100%', padding: '0 1rem', fontSize: '2rem', lineHeight: 1.2, fontFamily: 'var(--font-dancing-script), cursive', color: '#1e3a8a', overflowWrap: 'anywhere' }}>
                  {signature}
                </div>
                <div style={{ width: '16rem', maxWidth: '100%', height: '1px', backgroundColor: '#71717a', margin: '0.25rem 0 0.75rem' }} />
                <p style={{ fontWeight: 'bold', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#09090b', margin: 0 }}>
                  {signature}
                </p>
                <p style={{ fontSize: '10px', fontFamily: 'sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#52525b', margin: '0.25rem 0 0 0' }}>
                  Presidente Eleito e Legítimo
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
