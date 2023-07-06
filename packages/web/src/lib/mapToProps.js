export function mapSeoToProps(
  {
    pageTitle,
    metaDescription,
    fbShareMetaPack,
    twitterShareMetaPack,
    slug,
    noindex,
    nofollow,
    canonical,
  },
  type,
) {
  return {
    type,
    pageTitle,
    metaDescription,
    fbShareMetaPack,
    twitterShareMetaPack,
    slug: slug.current,
    noindex,
    nofollow,
    canonical,
  };
}

export function mapCtaFormToProps({ idTag, title, subtitle, form, _rawDisclaimer }) {
  return {
    id: idTag,
    title,
    subtitle,
    form,
    disclaimer: _rawDisclaimer,
  };
}

export function mapMainNavToProps({ menu }) {
  return {
    menu,
  };
}

export function mapGuideSegmentToProps({ idTag, title, subtitle, col, cards }) {
  return {
    id: idTag,
    title,
    subtitle,
    col,
    cards,
  };
}

export function mapGuideCardToProps({ h1, slug, excerpt, cardImage, displayDate }) {
  return {
    title: h1,
    date: displayDate,
    excerpt,
    image: cardImage?.mainImage?._rawAsset,
    imageAlt: cardImage?.mainImage?.alt,
    imageFilename: cardImage?.mainImage?._rawAsset?.originalFilename,
    url: `/${slug.current}`,
  };
}

export function mapFluidImgBlockToProps({
  idTag,
  _rawAsset,
  alt,
  _rawCaption,
  maxHeight,
  maxWidth,
}) {
  return {
    id: idTag,
    image: _rawAsset,
    alt,
    caption: _rawCaption,
    maxHeight,
    maxWidth,
  };
}

export function mapGuideHeroToProps({ hero, displayDate, includeDisclaimer }) {
  return {
    featureType: hero?.feature || 'image',
    h1: hero.h1,
    subtitle: hero?._rawSubtitle,
    date: displayDate,
    feature: {
      image: hero?.image,
      video: hero?.video,
      productGrid: hero?.productGrid,
    },
    includeDisclaimer,
  };
}

// combine w/ mapLrFlexToProps
export function mapLrHeroToProps({
  _rawFooter,
  blockAlignment,
  headerAlignment,
  footerAlignment,
  blocks,
  designSettings,
  header,
  idTag,
  layout,
  reverseOrder,
}) {
  return {
    idTag,
    heading: header?.heading,
    subheading: header?.subheading,
    subtitle: header?._rawSubtitle,
    blocks,
    footer: _rawFooter,
    layout,
    blockAlignment,
    headerAlignment,
    footerAlignment,
    reverseOrder,
    designSettings,
  };
}

export function mapHeroBlockToProps({ title, _rawSubtitle }) {
  return {
    h1: title,
    subtitle: _rawSubtitle,
  };
}

export function mapLearningSegmentToProps({ idTag }) {
  return {
    idTag,
  };
}

export function mapNavBrandToProps({ brandGroup, alt }) {
  return {
    alt,
    brandGroup,
  };
}

export function mapNavItemToProps({ isButton, title, nav }) {
  return {
    isButton,
    url: nav?.slug?.current,
    title,
  };
}

export function mapNavGroupToProps({ title, nav, group }) {
  return {
    title,
    url: nav?.slug?.current,
    subGroup: group,
  };
}

// combine w/ mapLrHeroToProps
export function mapLrFlexToProps({
  _rawFooter,
  blockAlignment,
  headerAlignment,
  footerAlignment,
  blocks,
  designSettings,
  header,
  idTag,
  layout,
  reverseOrder,
}) {
  return {
    idTag,
    heading: header?.heading,
    subheading: header?.subheading,
    subtitle: header?._rawSubtitle,
    blocks,
    footer: _rawFooter,
    layout,
    blockAlignment,
    headerAlignment,
    footerAlignment,
    reverseOrder,
    designSettings,
  };
}

export function mapSectionBlockToProps({
  header,
  _rawText,
  _rawFooter,
  headerAlignment,
  textAlignment,
  footerAlignment,
}) {
  return {
    heading: header?.heading,
    subheading: header?.subheading,
    subtitle: header?._rawSubtitle,
    sectionText: _rawText,
    footer: _rawFooter,
    headerAlignment,
    textAlignment,
    footerAlignment,
  };
}

export function mapStackSectionToProps({
  _rawFooter,
  blockAlignment,
  headerAlignment,
  footerAlignment,
  blocks,
  designSettings,
  header,
  idTag,
  blockWidth,
}) {
  return {
    idTag,
    heading: header?.heading,
    subheading: header?.subheading,
    subtitle: header?._rawSubtitle,
    blocks,
    footer: _rawFooter,
    blockWidth,
    blockAlignment,
    headerAlignment,
    footerAlignment,
    designSettings,
  };
}

export function mapPaginatedListingSectionToProps({
  _rawFooter,
  headerAlignment,
  footerAlignment,
  layout = '1/1/1/1',
  designSettings,
  header,
  idTag,
}) {
  return {
    idTag,
    heading: header?.heading,
    subheading: header?.subheading,
    subtitle: header?._rawSubtitle,
    footer: _rawFooter,
    layout,
    headerAlignment,
    footerAlignment,
    designSettings,
  };
}

export function mapMuiBtnToProps({ idTag, btnAlignment, link, text, design }) {
  return {
    idTag,
    text,
    variant: design?.settings?.variant,
    disableElevation: design?.settings?.disableElevation,
    disableFocusRipple: design?.settings?.disableFocusRipple,
    disableRipple: design?.settings?.disableRipple,
    fullWidth: design?.settings?.fullWidth,
    borderRadius: design?.settings?.borderRadius,
    padding: design?.settings?.padding,
    link,
    colors: design?.colors,
    alignment: btnAlignment,
    typography: design?.typography,
    bgImage: design?.settings?.variant === 'contained' ? design?.bgImage?.asset?.url : null,
  };
}

export function mapMuiBtnSubmitToProps({ settings, colors, typography, bgImage }) {
  return {
    variant: settings?.variant,
    disableElevation: settings?.disableElevation,
    disableFocusRipple: settings?.disableFocusRipple,
    disableRipple: settings?.disableRipple,
    fullWidth: settings?.fullWidth,
    borderRadius: settings?.borderRadius,
    padding: settings?.padding,
    colors,
    typography,
    bgImage: settings?.variant === 'contained' ? bgImage?.asset?.url : null,
  };
}

export function mapGridFlexToProps({
  header,
  _rawFooter,
  headerAlignment,
  footerAlignment,
  layout,
  tiles,
  tileOption,
}) {
  return {
    heading: header?.heading,
    subheading: header?.subheading,
    subtitle: header?._rawSubtitle,
    footer: _rawFooter,
    headerAlignment,
    footerAlignment,
    layout,
    tiles,
    tileOption,
  };
}

export function mapFluidImgToProps({ _rawAsset, alt, maxHeight, maxWidth, _rawCaption }) {
  return {
    image: _rawAsset,
    alt,
    maxHeight,
    maxWidth,
    caption: _rawCaption,
  };
}

export function mapBlockFormNetlifyToProps({
  _rawFormNetlify,
  heading,
  headingLevel,
  titleAlignment,
  _rawFormStyle,
}) {
  return {
    heading,
    headingLevel,
    titleAlignment,
    form: _rawFormNetlify,
    style: _rawFormStyle,
  };
}

export function mapTestimonialGridToProps({
  header,
  _rawFooter,
  headerAlignment,
  footerAlignment,
  _rawTestimonialList,
  tileOption,
  layout,
}) {
  return {
    heading: header?.heading,
    subheading: header?.subheading,
    subtitle: header?._rawSubtitle,
    footer: _rawFooter,
    headerAlignment,
    footerAlignment,
    testimonialList: _rawTestimonialList,
    tileOption,
    layout,
  };
}

export function mapTestimonialListToProps({ image, text, name, role, company }) {
  return {
    image: image?.asset,
    alt: image?.alt,
    text,
    name,
    role,
    company,
  };
}

export function mapClickableImageToProps({ _rawImage, link, alignment, borderRadius }) {
  return {
    image: _rawImage,
    link,
    alignment,
    borderRadius,
  };
}

export function mapSmartGridBlockToProps({
  header,
  _rawFooter,
  headerAlignment,
  footerAlignment,
  layout,
  _rawTiles,
}) {
  return {
    heading: header?.heading,
    subheading: header?.subheading,
    subtitle: header?._rawSubtitle,
    footer: _rawFooter,
    headerAlignment,
    footerAlignment,
    layout,
    tiles: _rawTiles,
  };
}

export function mapProductGridToProps({ idTag, btnText, pageJumpText, _rawTiles, design }) {
  return {
    id: idTag,
    btnText,
    pageJumpText,
    tiles: _rawTiles,
    design,
  };
}

export function mapVideoToProps({ idTag, url }) {
  return {
    id: idTag,
    url,
  };
}
