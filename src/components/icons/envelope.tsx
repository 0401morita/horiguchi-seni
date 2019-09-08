export default ({ color = '#fff' }: { color?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" stroke={color}>
    <rect width="48" height="48" fill="none" stroke="none" />
    <rect
      x="6"
      y="10"
      width="36"
      height="29"
      rx="3"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M12.15,20.1l9.51,6.34a4.2,4.2,0,0,0,4.68,0L36,20"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);
