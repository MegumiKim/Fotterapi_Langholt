import docHomePage from '../schemas/documents/homePage.js'
import docAboutPage from '../schemas/documents/aboutPage.js'
import docTreatmentsPage from '../schemas/documents/treatmentsPage.js'
import siteSettings from '../schemas/settings/site-settings.js'
// import objNavigationItem from '../schemas/objects/navigationItem.js'
// import objLink from '../schemas/objects/link.js'
import objImage from '../schemas/objects/image.js'
import objRichText from '../schemas/objects/richText.js'
import objGallery from '../schemas/objects/gallery.js'
import objQuote from '../schemas/objects/quote.js'
import objCta from '../schemas/objects/cta.js'
import objTextWithImage from '../schemas/objects/textWithImage.js'
import objReviews from '../schemas/objects/reviews.js'
import objLocation from '../schemas/objects/location.js'

export const schemaTypes = [
  // Documents//
  docHomePage,
  docAboutPage,
  docTreatmentsPage,

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
  objLocation,
  //
  // Settings
  //
  siteSettings,
]
