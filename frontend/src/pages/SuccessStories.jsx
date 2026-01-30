import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { fetchContent } from '@/lib/sanity';
import { Quote } from 'lucide-react';

export default function SuccessStories() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    async function getStories() {
      const data = await fetchContent('successStory');
      setStories(data);
    }
    getStories();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <Navbar />
      
      <section className="bg-slate-50 py-20 text-center">
         <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4 text-slate-900">Real Results from Kenyan Businesses</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                See how manufacturing, agriculture, and logistics companies are automating their growth.
            </p>
         </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {stories.map((story) => (
                <div key={story._id} className="flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="h-64 overflow-hidden relative">
                         <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            {story.industry}
                         </div>
                         <img 
                            src={story.image} 
                            alt={story.company} 
                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                         />
                         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
                            <h3 className="text-2xl font-bold text-white">{story.company}</h3>
                         </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                        <div className="mb-6">
                            <h4 className="text-sm font-semibold text-slate-400 uppercase mb-1">Key Result</h4>
                            <p className="text-3xl font-bold text-green-600">{story.metric}</p>
                        </div>
                        <div className="relative pl-8 mb-6 flex-1">
                            <Quote className="absolute left-0 top-0 text-slate-200 h-6 w-6 transform -scale-x-100" />
                            <p className="text-slate-600 italic leading-relaxed">
                                "{story.quote}"
                            </p>
                        </div>
                        <div className="flex items-center gap-3 border-t border-slate-100 pt-6">
                            <div className="h-10 w-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">
                                {story.author.charAt(0)}
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 text-sm">{story.author}</p>
                                <p className="text-xs text-slate-500">Verified Client</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
