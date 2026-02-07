import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { fetchContent } from '@/lib/sanity';
import { Badge } from '@/components/ui/badge';
import { PortableText } from '@portabletext/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

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
};

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
      setPost(found);
      setLoading(false);
    }
    getData();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <Navbar />
      
      <article className="container mx-auto px-4 py-20 max-w-3xl">
         <Badge className="mb-4">{post._type === 'blogPost' ? 'Blog' : 'Resource'}</Badge>
         <h1 className="text-4xl font-bold mb-6 text-slate-900">{post.title}</h1>
         
         <div className="flex items-center gap-4 mb-8 text-slate-500 text-sm">
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            <span>•</span>
            <span>5 min read</span>
         </div>

         {post.mainImage && (
            <img 
                src={post.mainImage} 
                alt={post.title} 
                className="w-full h-[400px] object-cover rounded-xl mb-10 shadow-lg"
            />
         )}

         <div className="max-w-none">
            <PortableText value={post.content} components={ptComponents} />
         </div>
      </article>

      <Footer />
    </div>
  );
}
