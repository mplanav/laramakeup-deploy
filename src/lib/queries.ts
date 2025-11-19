export const heroQuery = `
  *[_type == "hero" && language == $lang][0]{
    title,
    subtitle,
    introParagraphs,
    email,
    ctaText,
    ctaLink,
    "heroImage": heroImage.asset->url
  }
`;

export const galleryPageQuery = `
  *[_type == "galleryPage" && slug.current == $slug][0]{
    title,
    "images": images[]{
      asset->{ url }
    },
    "videos": videos[]{
      asset->{ url }
    }
  }
`;

export const contactQuery = `
  *[_type == "contact" && language == $lang][0]{
    intro,
    title,
    instagramUrl,
    email,
    phone,
    formspreeUrl,
    placeholders,
    buttonText,
    directText
  }
`;

export const cvQuery = `
  *[_type == "cv" && language == $lang][0]{
    title,
    paragraphs,
    "cvDownloadUrl": cvDownloadFile.asset->url,
    cvDownloadText,
    viewOnlineText
  }
`;


export const navbarQuery = `
  *[_type == "navbar"][0]{
    home,
    sculpting,
    mouldmaking,
    prosthetic,
    sfx,
    cv,
    contact,
    lang_es,
    lang_en
  }
`;
