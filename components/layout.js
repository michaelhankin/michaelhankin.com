import Head from "next/head";

export default function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header>
        <nav>
          <div className="w-screen bg-green-700 px-6 md:px-16 lg:px-24 py-8 lg:py-12 text-white flex flex-row justify-between items-center">
            <div className="flex flex-row items-center">
              <a href="/" className="mr-4 md:mr-6 lg:mr-8">
                <img
                  className="rounded-full h-10 w-10 md:h-12 md:w-12 lg:h-20 lg:w-20"
                  src="https://avatars.githubusercontent.com/u/9287361"
                  alt=""
                />
              </a>
              <a href="/" className="text-lg lg:text-3xl font-bold">
                Michael Hankin
              </a>
            </div>
          </div>
        </nav>
      </header>

      <div className="mt-12 px-6 md:px-16 lg:px-24 pb-8 lg:pl-52">
        <div className="max-w-prose">{children}</div>
      </div>
    </div>
  );
}
