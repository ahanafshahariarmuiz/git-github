import Button from "./components/Button";

export default function page() {
  return (
    <div className="w-full flex h-screen">
      <div className="w-full h-screen bg-amber-400 grid place-content-center">
        <Button />
      </div>
      <div className="w-full h-screen bg-indigo-400 grid place-content-center">
        <Button />
      </div>
      <div className="w-full h-screen bg-rose-400 grid place-content-center">
        <Button />
      </div>
    </div>
  )
}
