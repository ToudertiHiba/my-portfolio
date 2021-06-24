export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                        Bonjour, Je suis Hiba TOUDERTI. 
                        <br className="hidden lg:inline-block" /> J'aime créer des applications.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Je suis étudiante en Génie Informatique à l'Ecole Mohammadia d'Ingénieurs.
                        Je suis très motivée, avec une connaissance avérée de plusieurs langages de programmation.
                        J'ai des compétences de communication exceptionnelles et une expérience approfondie
                        de l'utilisation de mes connaissances et de mon expertise dans une grande variété de projets.

                    </p>
                    <div className="flex justify-center">
                        <a
                            href='/TOUDERTI Hiba CV.pdf' download="TOUDERTIHiba.pdf"
                            className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-lg">
                            Télécharger Mon CV
                        </a>
                        
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 hover:text-white rounded text-lg">
                            Voir Mes Projets
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded-full"
                        alt="photo"
                        src="./photo2.jpeg"
                    />
                </div>
            </div>
        </section>
    );
}