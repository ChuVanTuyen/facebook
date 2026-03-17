export default function CircleQuestionIcon({ className = "h-6 w-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10zm0-18.5a8.5 8.5 0 1 0 8.5 8.5A8.51 8.51 0 0 0 12 3.5z"></path>
      <circle cx="12" cy="16" r="1"></circle>
      <path d="M12 14a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 .75-.75 1.5 1.5 0 1 0-1.5-1.5.75.75 0 0 1-1.5 0 3 3 0 1 1 3.75 2.9v.345A.75.75 0 0 1 12 14z"></path>
    </svg>
  );
}
