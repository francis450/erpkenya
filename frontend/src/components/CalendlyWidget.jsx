import React, { useState } from 'react';
import { PopupModal, InlineWidget } from "react-calendly";
import { Button } from '@/components/ui/button';

export const CALENDLY_URLS = {
  demo: "https://calendly.com/contact-erpkenya",
  aiConsult: "https://calendly.com/contact-erpkenya"
};

export function CalendlyButton({ 
  url = CALENDLY_URLS.demo, 
  text = "Schedule Demo", 
  variant = "default", 
  className = "",
  rootElement = document.getElementById("root")
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button 
        variant={variant} 
        className={className} 
        onClick={() => setIsOpen(true)}
      >
        {text}
      </Button>
      
      <PopupModal
        url={url}
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        rootElement={rootElement}
      />
    </>
  );
}

export function CalendlyEmbed({ url = CALENDLY_URLS.aiConsult }) {
  return (
    <div className="w-full h-[650px]">
       <InlineWidget url={url} styles={{ height: '650px' }} />
    </div>
  );
}
