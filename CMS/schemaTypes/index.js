import docProject from '../schemas/documents/project.js'
import siteSettings from '../schemas/settings/site-settings.js'
import objNavigationItem from '../schemas/objects/navigationItem.js'
import objLink from '../schemas/objects/link.js'
import objImage from '../schemas/objects/image.js'
import objRichText from '../schemas/objects/richText.js'
import objGallery from '../schemas/objects/gallery.js'
import objQuote from '../schemas/objects/quote.js'
import objCta from '../schemas/objects/cta.js'

export const schemaTypes = [
  // Documents//
  docProject,

  // Objects //
  objNavigationItem,
  objLink,
  objImage,
  objRichText,
  objGallery,
  objQuote,
  objCta,
  //
  // Settings
  //
  siteSettings,
]
