import React, { useState } from 'react';

export const Logo = ({ className = "" }: { className?: string }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`flex items-center ${className}`}>
      {!hasError ? (
        <img 
          src="/logo.png" 
          alt="Wasl Logo" 
          className="h-[61px] w-auto object-contain"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="flex items-center gap-2 text-[#8cc63f]">
          <span className="text-[61px] font-bold tracking-tighter leading-none" style={{ fontFamily: 'system-ui, sans-serif' }}>
            وصل
          </span>
        </div>
      )}
    </div>
  );
};
