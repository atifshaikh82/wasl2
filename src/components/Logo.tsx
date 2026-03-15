import React, { useState } from 'react';

export const Logo = ({ className = "" }: { className?: string }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`flex items-center ${className}`}>
      {!hasError ? (
        <img 
          src="/logo.png" 
          alt="Wasl Logo" 
          className="h-[58px] w-auto object-contain"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="flex items-center gap-2 text-[#8cc63f]">
          <span className="text-[43px] font-bold tracking-tighter" style={{ fontFamily: 'system-ui, sans-serif' }}>
            وصل
          </span>
        </div>
      )}
    </div>
  );
};
