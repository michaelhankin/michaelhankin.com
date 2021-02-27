import Layout from "../components/layout";

function Link({ href, children }) {
  return (
    <a
      href={href}
      className="bg-yellow-100 hover:bg-yellow-200 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <Layout title="Michael Hankin">
      <main>
        <h1 className="text-2xl font-black mb-4">Hi, I'm Michael 👋</h1>
        <div className="space-y-6 text-lg leading-normal">
          <p>
            I'm a full-stack software engineer at{" "}
            <Link href="https://www.bloomberg.com/company/">
              Bloomberg L.P.
            </Link>{" "}
            Prior to that I worked at{" "}
            <Link href="https://www.athenahealth.com/">athenahealth</Link>, and
            before that, I got a B.S. in Computer Science at{" "}
            <Link href="https://www.utexas.edu/">UT Austin</Link>.
          </p>
          <p>
            In my free time, I partake in a bunch of different hobbies including
            cooking, playing guitar, and watching movies. Cooking is the one
            that I spend most of my time on recently.
          </p>
          <p>
            If you'd like to get in touch with me/see what I've worked on, check
            out these links:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <Link href="mailto:me@michaelhankin.com">Email</Link>
            </li>
            <li>
              <Link href="https://github.com/michaelhankin">GitHub</Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/michaelhankin/">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href="/Michael_Hankin_Resume.pdf">Resume</Link>
            </li>
          </ul>
        </div>
      </main>
    </Layout>
  );
}
