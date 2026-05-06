import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { fetchContent } from '@/lib/sanity';
import { Badge } from '@/components/ui/badge';
import { PortableText } from '@portabletext/react';
import { ArrowRight, Check, Copy } from 'lucide-react';
import { SEO } from '@/components/SEO';

function CodeBlock({ code, language }) {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      console.error("Failed to copy code block:", error);
    }
  };

  return (
    <div className="my-8 overflow-hidden rounded-lg border border-slate-800 bg-slate-950 shadow-sm">
      <div className="flex min-h-10 items-center justify-between gap-3 border-b border-slate-800 px-4 py-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          {language || 'command'}
        </span>
        <button
          type="button"
          onClick={copyCode}
          className="inline-flex h-8 items-center gap-2 rounded-md border border-slate-700 px-3 text-xs font-medium text-slate-200 transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label={copied ? "Command copied" : "Copy command"}
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-6 text-slate-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}

const ptComponents = {
  types: {
    callToAction: ({ value }) => {
      return (
        <div className="my-12 bg-slate-900 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-500"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{value.title}</h3>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto text-lg leading-relaxed">{value.text}</p>
            <Link 
              to={value.url} 
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary hover:bg-primary/90 rounded-full transition-all duration-300 shadow-lg hover:shadow-primary/25 group-hover:scale-105"
            >
              {value.buttonText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          {/* Decorative circles */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      );
    },
    image: ({ value }) => {
      return (
        <img
          src={value.imageUrl} // Assuming mockData or sanity returns this
          alt={value.alt || ' '}
          className="w-full h-auto rounded-xl my-8 shadow-md"
        />
      );
    },
    code: ({ value }) => {
      return <CodeBlock code={value.code} language={value.language} />;
    }
  },
  block: {
    h1: ({ children }) => <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-12 mb-6 leading-tight">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-10 mb-5 leading-tight">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-4 leading-snug">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg md:text-xl font-bold text-slate-900 mt-6 mb-3">{children}</h4>,
    normal: ({ children }) => <p className="text-lg text-slate-700 leading-8 mb-6">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 italic text-xl text-slate-800 bg-slate-50 rounded-r-lg">
        "{children}"
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-slate-700">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-lg text-slate-700">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-2">{children}</li>,
    number: ({ children }) => <li className="pl-2">{children}</li>,
  },
  marks: {
    link: ({ value, children }) => {
      const href = value?.href || '#';
      const isInternal = href.startsWith('/');
      if (isInternal) {
        return <Link to={href} className="text-primary hover:text-primary/80 underline underline-offset-2 font-medium">{children}</Link>;
      }
      return <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline underline-offset-2 font-medium">{children}</a>;
    },
  },
};

function InlineMarkdown({ text }) {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('`') && part.endsWith('`')) {
          return <code key={index} className="rounded bg-slate-100 px-1.5 py-0.5 text-base text-slate-900">{part.slice(1, -1)}</code>;
        }
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          return <em key={index}>{part.slice(1, -1)}</em>;
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </>
  );
}

function MarkdownContent({ markdown }) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const elements = [];
  let codeBlock = null;
  let listItems = [];

  const flushList = () => {
    if (!listItems.length) return;
    elements.push(
      <ul key={`list-${elements.length}`} className="list-disc pl-6 mb-6 space-y-2 text-lg text-slate-700">
        {listItems.map((item, index) => (
          <li key={index} className="pl-2"><InlineMarkdown text={item} /></li>
        ))}
      </ul>
    );
    listItems = [];
  };

  lines.forEach((line, index) => {
    const codeMatch = line.match(/^```(\w+)?/);
    if (codeMatch && !codeBlock) {
      flushList();
      codeBlock = { language: codeMatch[1], lines: [] };
      return;
    }
    if (codeMatch && codeBlock) {
      elements.push(
        <CodeBlock
          key={`code-${index}`}
          code={codeBlock.lines.join('\n')}
          language={codeBlock.language}
        />
      );
      codeBlock = null;
      return;
    }
    if (codeBlock) {
      codeBlock.lines.push(line);
      return;
    }

    if (!line.trim()) {
      flushList();
      return;
    }
    if (line.trim() === '---') {
      flushList();
      elements.push(<hr key={`hr-${index}`} className="my-10 border-slate-200" />);
      return;
    }
    if (line.startsWith('# ')) {
      flushList();
      return;
    }
    if (line.startsWith('## ')) {
      flushList();
      elements.push(<h2 key={index} className="text-2xl md:text-3xl font-bold text-slate-900 mt-10 mb-5 leading-tight"><InlineMarkdown text={line.slice(3)} /></h2>);
      return;
    }
    if (line.startsWith('### ')) {
      flushList();
      elements.push(<h3 key={index} className="text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-4 leading-snug"><InlineMarkdown text={line.slice(4)} /></h3>);
      return;
    }
    if (line.startsWith('- ')) {
      listItems.push(line.slice(2));
      return;
    }
    if (line.startsWith('> ')) {
      flushList();
      elements.push(
        <blockquote key={index} className="border-l-4 border-primary pl-6 py-2 my-8 italic text-xl text-slate-800 bg-slate-50 rounded-r-lg">
          <InlineMarkdown text={line.slice(2)} />
        </blockquote>
      );
      return;
    }

    flushList();
    elements.push(<p key={index} className="text-lg text-slate-700 leading-8 mb-6"><InlineMarkdown text={line} /></p>);
  });

  flushList();
  return <>{elements}</>;
}

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    async function getData() {
      // In a real app, we'd query by slug: *[_type == "blogPost" && slug.current == $slug][0]
      // For mock, we just filter the list
      const allPosts = await fetchContent('blogPost');
      const found = allPosts.find(p => p.slug.current === slug);
      if (found?.markdownPath) {
        const response = await fetch(found.markdownPath);
        const markdown = await response.text();
        setPost({ ...found, markdown });
      } else {
        setPost(found);
      }
      setLoading(false);
    }
    getData();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (!post) return <div>Post not found</div>;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt || "",
    image: post.mainImage || "",
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://erpkenya.com/resources/${slug}`,
    },
    author: { "@type": "Organization", name: "ERP Kenya" },
    publisher: {
      "@type": "Organization",
      name: "ERP Kenya",
      url: "https://erpkenya.com",
    },
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <SEO
        title={post.title}
        description={post.excerpt ? post.excerpt.slice(0, 160) : post.title}
        canonical={`/resources/${slug}`}
        ogType="article"
        ogImage={post.mainImage}
        jsonLd={articleJsonLd}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: post.title },
        ]}
      />
      <Navbar />
      
      <article className="container mx-auto px-4 py-20 max-w-3xl">
         <Badge className="mb-4">{post._type === 'blogPost' ? 'Blog' : 'Resource'}</Badge>
         <h1 className="text-4xl font-bold mb-6 text-slate-900">{post.title}</h1>
         
         <div className="flex items-center gap-4 mb-8 text-slate-500 text-sm">
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            <span>•</span>
            <span>{post.readTime || '5 min read'}</span>
         </div>

         {post.mainImage && (
            <img 
                src={post.mainImage} 
                alt={post.title} 
                className="w-full h-[400px] object-cover rounded-xl mb-10 shadow-lg"
            />
         )}

         <div className="max-w-none">
            {post.markdown ? (
              <MarkdownContent markdown={post.markdown} />
            ) : (
              <PortableText value={post.content} components={ptComponents} />
            )}
         </div>
      </article>

      <Footer />
    </div>
  );
}
