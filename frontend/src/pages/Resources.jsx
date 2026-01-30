import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { fetchContent } from '@/lib/sanity';
import { ArrowRight, Download, Search, FileText } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { PortableText } from '@portabletext/react';

export default function Resources() {
  const [posts, setPosts] = useState([]);
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const blogData = await fetchContent('blogPost');
      const resourceData = await fetchContent('resource');
      setPosts(blogData);
      setResources(resourceData);
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-slate-900 py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-cyan-600">Insights & Guides</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources to Grow Your Business</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Practical advice, KRA compliance tips, and AI strategies for Kenyan business owners.
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
            
          {/* Blog Feed */}
          <div className="w-full md:w-2/3 space-y-8">
             <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-slate-900">Latest Articles</h2>
             </div>

             {loading ? <p>Loading articles...</p> : posts.map((post) => (
               <Card key={post._id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                     <div className="md:w-1/3 h-48 md:h-auto relative">
                        <img 
                            src={post.mainImage} 
                            alt={post.title} 
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                     </div>
                     <div className="md:w-2/3 p-6 flex flex-col justify-between">
                        <div>
                            <Badge variant="outline" className="mb-2">Blog</Badge>
                            <h3 className="text-xl font-bold mb-2 text-slate-900 hover:text-primary cursor-pointer">
                                {post.title}
                            </h3>
                            <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                                {post.excerpt}
                            </p>
                        </div>
                        <div className="flex items-center text-primary font-medium text-sm cursor-pointer group">
                            Read Article <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform"/>
                        </div>
                     </div>
                  </div>
               </Card>
             ))}
          </div>

          {/* Sidebar / Downloads */}
          <div className="w-full md:w-1/3 space-y-8">
             <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Search Resources</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search..." className="pl-8" />
                    </div>
                </CardContent>
             </Card>

             <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                        <Download className="h-5 w-5 text-primary" />
                        Free Downloads
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {loading ? <p>Loading...</p> : resources.map(res => (
                        <div key={res._id} className="flex items-center justify-between p-3 bg-white rounded border border-slate-200 hover:border-primary cursor-pointer transition-colors">
                            <div className="flex items-center gap-3">
                                <FileText size={18} className="text-slate-400" />
                                <span className="font-medium text-sm text-slate-700">{res.title}</span>
                            </div>
                            <Download size={14} className="text-slate-400" />
                        </div>
                    ))}
                </CardContent>
             </Card>
             
             <div className="bg-slate-900 rounded-xl p-6 text-white text-center">
                 <h3 className="font-bold text-xl mb-2">Subscribe for Updates</h3>
                 <p className="text-sm text-slate-400 mb-4">Get the latest KRA & AI insights delivered to your inbox.</p>
                 <Input placeholder="Enter your email" className="bg-slate-800 border-slate-700 mb-2 text-white"/>
                 <Button className="w-full bg-primary hover:bg-primary/90">Subscribe</Button>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
