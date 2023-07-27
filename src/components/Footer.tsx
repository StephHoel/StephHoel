export default function Footer() {
  return (
    <div className="mx-8 space-y-2 flex justify-between items-center">
      <div className="fd:text-lg">© Steph Hoel</div>
      <div className="text-6xl fd:text-5xl space-x-4">
        <a
          href="https://github.com/StephHoel"
          className="dk:hover:text-blue-400"
          target="_blank"
          rel="noreferrer"
        >
          <i className="ph ph-github-logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/StephHoel/"
          className="dk:hover:text-blue-400"
          target="_blank"
          rel="noreferrer"
        >
          <i className="ph ph-linkedin-logo" />
        </a>
        <a
          href="https://www.instagram.com/steph.hoel/"
          className="dk:hover:text-blue-400"
          target="_blank"
          rel="noreferrer"
        >
          <i className="ph ph-instagram-logo" />
        </a>
      </div>
    </div>
  )
}
