export default function SectionHeading({ children, id }) {
  return (
    <div className="flex items-center gap-4">
      <h2 id={id} className="text-2xl font-extrabold sm:text-3xl">{children}</h2>
      <span className="h-0.5 w-16 bg-mustard-500/70" aria-hidden="true" />
    </div>
  )
}
