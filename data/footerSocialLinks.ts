import siteMetadata from '@/data/siteMetadata'

// Footer social links configuration.
// - To show a social icon, include it in the array below.
// - To hide it, remove or comment out the line.
// - Order here = display order in footer.
// - Links with empty/undefined href are automatically hidden.
const footerSocialLinks = [
  { kind: 'mail' as const, href: siteMetadata.email ? `mailto:${siteMetadata.email}` : '' },
  { kind: 'github' as const, href: siteMetadata.github },
  // { kind: 'facebook' as const, href: siteMetadata.facebook },
  // { kind: 'youtube' as const, href: siteMetadata.youtube },
  // { kind: 'linkedin' as const, href: siteMetadata.linkedin },
  // { kind: 'twitter' as const, href: siteMetadata.twitter },
  // { kind: 'x' as const, href: siteMetadata.x },
  // { kind: 'mastodon' as const, href: siteMetadata.mastodon },
  // { kind: 'threads' as const, href: siteMetadata.threads },
  // { kind: 'instagram' as const, href: siteMetadata.instagram },
  // { kind: 'medium' as const, href: siteMetadata.medium },
  // { kind: 'bluesky' as const, href: siteMetadata.bluesky },
]

export default footerSocialLinks
