import Link from 'next/link';
<script defer data-domain="sad-joliot-a59f17.netlify.app" src="https://plausible.io/js/plausible.js"></script>

export default function CustomLink({ as, href, ...otherProps }) {
  return (
    <>
      <Link as={as} href={href}>
        <a {...otherProps} />
      </Link>
    </>
  );
}
