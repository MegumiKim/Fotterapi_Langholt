import docProject from '../schemas/documents/project.js'
import docHomePage from '../schemas/documents/homePage.js'
import siteSettings from '../schemas/settings/site-settings.js'
import objNavigationItem from '../schemas/objects/navigationItem.js'
import objLink from '../schemas/objects/link.js'
import objImage from '../schemas/objects/image.js'
import objRichText from '../schemas/objects/richText.js'
import objGallery from '../schemas/objects/gallery.js'
import objQuote from '../schemas/objects/quote.js'
import objCta from '../schemas/objects/cta.js'
import objTextWithImage from '../schemas/objects/textWithImage.js'
import objReviews from '../schemas/objects/reviews.js'

export const schemaTypes = [
  // Documents//
  docProject,
  docHomePage,

  // Objects //
  // objNavigationItem,
  // objLink,
  objImage,
  objRichText,
  objGallery,
  objQuote,
  objCta,
  objTextWithImage,
  objReviews,
  //
  // Settings
  //
  // siteSettings,
]
