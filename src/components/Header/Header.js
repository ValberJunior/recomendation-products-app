import React from 'react';

function Header() {
  return (
    <div className="w-3/4  mx-auto h-[72px] flex items-center justify-start">
      <picture>
        <img
          className="w-[148px] h-7"
          alt="RD Station Logo"
          title="RD Station"
          src="https://d3jj9yc7rgpax4.cloudfront.net/brand-system/logos/rdstation-logo-filled-default-horizontal.svg"
        />
      </picture>
    </div>
  );
}

export default Header;
