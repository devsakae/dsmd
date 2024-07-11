import NavBarItem from "./NavBarItem";

export default function NavBar() {
  return (
    <div className="flex justify-center dark:bg-gray-600 dark:text-yellow-50 bg-amber-200 py-6">
      <NavBarItem title="Trending" param="trending" />
      <NavBarItem title="Top rated" param="topRated" />
    </div>
  )
}
