import Image from "next/image";

function navBar(){
  return(
    <nav className="float-right pr-8">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Account</a>
      </nav>
  );
}

export default function Home() {
  return (
      navBar() 
  );
}


