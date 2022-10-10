import Button from "./Button";
import Logo from "./Logo";
import Searcher from "./Searcher";

export default function Header() {
  return (
    <div className="py-8 px-16 flex justify-between">
      <div className="flex gap-2 items-center">
        <Logo />
        <Searcher />
      </div>
      <div>
        <Button text="Add a Photo" />
      </div>
    </div>
  )
}
