import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="bg-white dark:bg-slate-950 py-6 w-full">
        <div className="container mx-auto flex justify-center items-center space-x-4">
          <Link
            href="https://www.linkedin.com/in/adrianzykwan"
            aria-label="LinkedIn"
            prefetch={false}
          >
            <LinkedinIcon className="h-6 w-6 text-muted-foreground hover:text-primary-foreground transition-colors dark:text-slate-500" />
          </Link>
          <Link
            href="https://x.com/adriankwann"
            aria-label="Twitter"
            prefetch={false}
          >
            <TwitterIcon className="h-6 w-6 text-muted-foreground hover:text-primary-foreground transition-colors dark:text-slate-500" />
          </Link>
          <div className="text-muted-foreground hover:text-primary-foreground transition-colors dark:text-slate-500">
            By Adrian Kwan
          </div>
        </div>
      </footer>
    </>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  // Explicit type for props
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  // Explicit type for props
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
