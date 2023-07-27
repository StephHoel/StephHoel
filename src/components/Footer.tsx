import Link from './Link'

export default function Footer() {
  return (
    <div className="mx-8 space-y-2 flex justify-between items-center">
      <div className="fd:text-lg">© Steph Hoel</div>

      <div className="text-6xl fd:text-5xl space-x-4">
        <Link href={'https://github.com/StephHoel'}>
          <i className="ph ph-github-logo" />
        </Link>

        <Link href={'https://www.linkedin.com/in/StephHoel/'}>
          <i className="ph ph-linkedin-logo" />
        </Link>

        <Link href={'https://www.instagram.com/steph.hoel/'}>
          <i className="ph ph-instagram-logo" />
        </Link>
      </div>
    </div>
  )
}
