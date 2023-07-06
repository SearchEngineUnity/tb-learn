/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

function VideoPreview(props) {
  const {
    renderDefault,
    url,
    schemaType: { icon },
  } = props;

  const Link = (
    <a href={url} target="_blank" rel="noreferrer">
      {url}
    </a>
  );

  return (
    <>
      {renderDefault({
        ...props,
        title: 'Video',
        subtitle: Link,
        media: icon,
      })}
    </>
  );
}

export default VideoPreview;
