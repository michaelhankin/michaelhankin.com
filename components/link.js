export default function Link({ href, children }) {
  const external =
    href.indexOf("http://") === 0 || href.indexOf("https://") === 0;
  return (
    <a
      href={href}
      {...(external
        ? {
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : {})}
    >
      {children}
    </a>
  );
}
