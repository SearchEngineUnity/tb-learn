/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Link({ url, children }) {
  return (
    <span>
      <a href={url} target="_blank" rel="noreferrer">
        {children}
      </a>
    </span>
  );
}

function Links({ url, adminUrl }) {
  if (url && adminUrl) {
    return (
      <span>
        (<Link url={url}>view</Link>, <Link url={adminUrl}>admin</Link>)
      </span>
    );
  }

  if (url) {
    return <Link url={url}>(view)</Link>;
  }
  if (adminUrl) {
    return <Link url={adminUrl}>(admin)</Link>;
  }
  return null;
}

export default Links;
