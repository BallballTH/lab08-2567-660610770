
export default function footer({year, fullname, Id}) {
  return (
    <div className="mt-3">
        <p className="text-secondary text-center">
          copyright © {year} {fullname} {Id}
        </p>
    </div>
  )
}
