import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { fetchContent } from '@/lib/sanity';
import { Badge } from '@/components/ui/badge';
import { PortableText } from '@portabletext/react';

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

         <div className="prose prose-lg prose-slate max-w-none">
            <PortableText value={post.content} />
         </div>
      </article>

      <Footer />
    </div>
  );
}
