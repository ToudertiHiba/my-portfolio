export default function Footer() {
    return (
        <footer id="footer" className=" bg-blue-400 container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <div className="container">

                <h1>Hiba TOUDERTI</h1>
                
                <a href="https://github.com/ToudertiHiba" className="inline m-10 "><img src="./img/github.png" alt="github" className="inline"/></a>
                <a href="https://www.linkedin.com/in/hiba-touderti/" className="inline  m-10 "><img src="./img/linkedin.png" alt="linkedin" className="inline"/></a>
                
                
            </div>
            <div className="footer-copyright container text-center py-3">
                &copy; {new Date().getFullYear()} Copyright: <span bg-indigo-800> Hiba TOUDERTI. </span>
                
                <br className="hidden lg:inline-block" />
                <text>All Rights Reserved.</text>
            </div>

        </footer>
    );
}