import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { fetchContent } from '@/lib/sanity';
import { ArrowRight, Download, Search, FileText, List, LayoutGrid } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { PortableText } from '@portabletext/react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export default function Resources() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("list");

  useEffect(() => {
    async function getData() {
      const blogData = await fetchContent('blogPost');
      setPosts(blogData);
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <SEO
        title="ERP Resources & Guides | KRA Compliance Tips for Kenyan Businesses"
        description="Practical ERP guides, KRA compliance tips, M-Pesa integration tutorials, and business automation strategies for Kenyan business owners."
        canonical="/resources"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources" },
        ]}
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-slate-900 py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-primary">Insights & Guides</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources to Grow Your Business</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-8">
            Practical advice, KRA compliance tips, and business strategies for Kenyan business owners.
          </p>

          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
            <Input 
                placeholder="Search articles..." 
                className="pl-12 h-12 text-lg bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 hover:border-slate-600 focus-visible:ring-primary focus-visible:border-primary rounded-full" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
          {/* Blog Feed */}
          <div className={viewMode === "grid" ? "max-w-6xl mx-auto" : "max-w-4xl mx-auto space-y-8"}>
             <div className="flex items-center justify-between mb-4 gap-4">
                <h2 className="text-2xl font-bold text-slate-900">
                    {searchQuery ? `Search Results for "${searchQuery}"` : 'Latest Articles'}
                </h2>
                <ToggleGroup
                    type="single"
                    value={viewMode}
                    onValueChange={(value) => value && setViewMode(value)}
                    className="shrink-0"
                >
                    <ToggleGroupItem value="list" aria-label="List view">
                        <List className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="grid" aria-label="Grid view">
                        <LayoutGrid className="h-4 w-4" />
                    </ToggleGroupItem>
                </ToggleGroup>
             </div>

             {loading ? <p>Loading articles...</p> : (
                <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-8"}>
                {posts
                    .filter(post =>
                        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((post) => (
                    viewMode === "grid" ? (
                        <Card key={post._id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                            <div className="h-48 relative">
                                <img
                                    src={post.mainImage}
                                    alt={post.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6 flex flex-col justify-between flex-1">
                                <div>
                                    <Badge variant="outline" className="mb-2">Blog</Badge>
                                    <Link to={`/resources/${post.slug.current}`}>
                                        <h3 className="text-lg font-bold mb-2 text-slate-900 hover:text-primary cursor-pointer transition-colors">
                                            {post.title}
                                        </h3>
                                    </Link>
                                    <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                                        {post.excerpt}
                                    </p>
                                </div>
                                <Link to={`/resources/${post.slug.current}`} className="flex items-center text-primary font-medium text-sm cursor-pointer group">
                                    Read Article <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform"/>
                                </Link>
                            </div>
                        </Card>
                    ) : (
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
                                        <Link to={`/resources/${post.slug.current}`}>
                                            <h3 className="text-xl font-bold mb-2 text-slate-900 hover:text-primary cursor-pointer transition-colors">
                                                {post.title}
                                            </h3>
                                        </Link>
                                        <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                    <Link to={`/resources/${post.slug.current}`} className="flex items-center text-primary font-medium text-sm cursor-pointer group">
                                        Read Article <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform"/>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    )
                ))}
                </div>
             )}

             {!loading && posts.filter(post =>
                    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
                ).length === 0 && (
                <div className="text-center py-12 text-slate-500 bg-white rounded-lg border border-dashed border-slate-200">
                    <Search className="h-10 w-10 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium">No articles found matching "{searchQuery}"</p>
                    <button
                        onClick={() => setSearchQuery('')}
                        className="text-primary hover:underline mt-2 text-sm"
                    >
                        Clear search
                    </button>
                </div>
            )}
          </div>
      </section>

      <Footer />
    </div>
  );
}
