const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="px-4 w-full max-w-7xl mx-auto">
      <p>© {currentYear} Marta Gomes. All rights reserved.</p>
      <p>
        <small className="block">The content and design of this CV (text, layout, and images) may not be copied, redistributed, or modified without permission. The source code is available under the MIT License.</small>
        <a href="/LICENSE" className="underline">Code License (MIT)</a> | <a href="/LICENSE-CONTENT" className="underline">CV Content & Design</a>
      </p>
    </footer>
  )
}

export default Footer;