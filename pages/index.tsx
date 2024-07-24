import Image from "next/image";


import servicesImg from '@/public/assets/images/4.jpg'

import feautersImg from '@/public/assets/images/1.jpg'
import benefitsImg from '@/public/assets/images/6.jpg'

import Link from "next/link";


export default function Home() {
  return (
      <div className={''}>
          <header className={' pb-5 pt-5 bg-green-950'}>
              <div className={'container mx-auto '}>
                  <nav className={'flex flex-col xl:flex-row items-center justify-between  mx-auto '}>
                      <Link  href={'/'} className={'px-5 sm:px-0 logo text-[60px] text-white  max-w-fit'}>
                          DEXTON
                      </Link>
                      <div className={'hidden md:flex  flex-wrap gap-10 mx-auto max-w-fit text-white'}>
                          <Link href={'/'}
                                className={'px-8 py-5   hover:border-b-black    hover:scale-110 duration-500 uppercase underline hover:bg-yellow-500 hover:text-black border border-b-white border-t-transparent border-r-transparent border-l-transparent    '}>
                              Home
                          </Link>

                          <Link href={'/#services'}
                                className={'px-8 py-5    hover:border-b-black    hover:scale-110 duration-500 uppercase underline hover:bg-yellow-500 hover:text-black border border-b-white border-t-transparent border-r-transparent border-l-transparent    '}>
                              Services
                          </Link>
                          <Link href={'/#feauters'}
                                className={'px-8 py-5  hover:border-b-black     hover:scale-110 duration-500 uppercase underline hover:bg-yellow-500 hover:text-black border border-b-white border-t-transparent border-r-transparent border-l-transparent    '}>
                              Feauters
                          </Link>
                          <Link href={'/#benefits'}
                                className={'px-8 py-5  hover:border-b-black     hover:scale-110 duration-500 uppercase underline hover:bg-yellow-500 hover:text-black border border-b-white border-t-transparent border-r-transparent border-l-transparent    '}>
                              Benefits
                          </Link>

                          <Link href={'/#contacts'}
                              className={'px-8 py-5  hover:border-b-black     hover:scale-110 duration-500 uppercase underline hover:bg-yellow-500 hover:text-black border border-b-white border-t-transparent border-r-transparent border-l-transparent    '}>
                              Contacts
                          </Link>
                      </div>
                  </nav>
              </div>
          </header>


          <main>
              <div
                  className={'hero_section'} style={{
                  backgroundImage: `url("assets/images/2_3.jpg")`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",

                  backgroundAttachment: "fixed",
                  backgroundPosition: 'center',
              }}
              >

                  <div className={'container mx-auto py-[250px]'} id={'about'}>
                      <div className={'mx-auto bg-white bg-opacity-70 rounded-xl max-w-[800px] p-10 '}>
                          <div className={'text-center uppercase text-[60px]'}>
                              Dexton Handel GmbH
                          </div>
                          <div className={'mx-auto '}>
                              <p className={'text-[24px] text-center'}>
                                  Unser Unternehmen ist auf den Großhandel und die Massenverteilung verschiedener
                                  Öle spezialisiert, darunter Sonnenblumenöl, Sojabohnenöl, Rapsöl und mehr.
                                  Wir sind bestrebt, hochwertige Produkte anzubieten, die den vielfältigen
                                  Bedürfnissen unserer Kunden gerecht werden.
                              </p>
                          </div>
                      </div>
                  </div>

              </div>

              <div className={'services container mx-auto py-[100px]'} id={'services'}>

                  <div className={'text-[1.5rem] sm:text-[3.5rem] hover:underline hover:scale-110 duration-500 text-[60px] text-center uppercase font-bold'}>
                      Dienstleistungen
                  </div>

                  <div className={'grid grid-cols-1 sm:grid-cols-2 px-5 py-10 items-center'}>

                      <Image
                          className={'rounded-2xl hover:translate-x-5 duration-300'}
                          src={servicesImg}
                          alt={''}
                          width={1000}
                          height={1000}
                      />


                      <div className={'max-w-[600px] mx-auto'}>
                          <ul className={'ml-[40px] text-[24px]'}>
                              <li className={'list-disc py-5 hover:p-5 hover:text-white hover:bg-green-800 hover:translate-x-5 duration-300'}>
                                  Massenverteilung: Effiziente Massenverteilungsdienste, um große Bestellungen nahtlos zu bewältigen.
                              </li>

                              <li className={'list-disc py-5 hover:p-5 hover:text-white hover:bg-green-800 hover:translate-x-5 duration-300'}>
                                  Logistikunterstützung: Umfassende Logistikunterstützung zur Verwaltung von Transport und Lieferung.</li>

                              <li className={'list-disc py-5 hover:p-5 hover:text-white hover:bg-green-800 hover:translate-x-5 duration-300'}>
                                  Kundendienst: Ein engagiertes Kundendienstteam steht Ihnen für Anfragen und Bestellungen zur Verfügung.
                              </li>
                          </ul>
                      </div>

                  </div>


              </div>


              <div className={'feauters container mx-auto py-[100px]'} id={'feauters'}>

                  <div className={'text-[1.5rem] sm:text-[3.5rem] hover:underline hover:scale-110 duration-500 text-[60px] text-center uppercase font-bold'}>
                      Eigenschaften
                  </div>

                  <div className={'grid grid-cols-1 sm:grid-cols-2 px-5 py-10 items-center'}>


                      <div className={'max-w-[600px] mx-auto'}>
                          <ul className={'ml-[40px] text-[24px]'}>
                              <li className={'list-disc py-5  hover:p-5 hover:text-white hover:bg-green-800  hover:translate-x-5 duration-300'}>
                                  Breites Sortiment an Ölen: Wir bieten eine vielfältige Auswahl an Ölen, darunter Sonnenblumenöl, Sojabohnenöl, Rapsöl und andere.
                              </li>

                              <li className={'list-disc py-5  hover:p-5 hover:text-white hover:bg-green-800  hover:translate-x-5 duration-300'}>
                                  Maßgeschneiderte Verpackungsoptionen: Angepasste Verpackungslösungen, um Ihren spezifischen Geschäftsanforderungen gerecht zu werden.
                              </li>

                              <li className={'list-disc py-5  hover:p-5 hover:text-white hover:bg-green-800  hover:translate-x-5 duration-300'}>
                                  Qualitätssicherung: Strenge Qualitätskontrollprozesse garantieren höchste Standards.
                              </li>
                          </ul>
                      </div>


                      <Image
                          className={'rounded-2xl hover:-translate-x-5 duration-300'}
                          src={feautersImg}
                          alt={''}
                          width={1000}
                          height={1000}
                      />


                  </div>


              </div>


              <div className={'benefits container mx-auto py-[100px]'} id={'benefits'}>

                  <div className={'text-[1.5rem] sm:text-[3.5rem] hover:underline hover:scale-110 duration-500 text-[60px] text-center uppercase font-bold'}>
                      Vorteile
                  </div>

                  <div className={'grid grid-cols-1 sm:grid-cols-2 px-5 py-10 items-center'}>

                      <Image
                          className={'rounded-2xl hover:translate-x-5 duration-300'}
                          src={benefitsImg}
                          alt={''}
                          width={1000}
                          height={1000}
                      />


                      <div className={'max-w-[600px] mx-auto'}>
                          <ul className={'ml-[40px] text-[24px]'}>
                              <li className={'list-disc py-5  hover:p-5 hover:text-white hover:bg-green-800  hover:translate-x-5 duration-300'}>
                                  Hochwertige Öle: Wir beziehen unsere Öle von vertrauenswürdigen Lieferanten, um höchste Qualität und Reinheit zu gewährleisten.</li>

                              <li className={'list-disc py-5  hover:p-5 hover:text-white hover:bg-green-800  hover:translate-x-5 duration-300'}>
                                  Wettbewerbsfähige Preise: Unsere Großhandelspreise sind darauf ausgelegt, Ihnen ein hervorragendes Preis-Leistungs-Verhältnis zu bieten.
                              </li>

                              <li className={'list-disc py-5  hover:p-5 hover:text-white hover:bg-green-800  hover:translate-x-5 duration-300'}>
                                  Zuverlässige Lieferkette: Mit einem robusten Vertriebsnetz gewährleisten wir eine pünktliche Lieferung und eine konstante Versorgung.
                              </li>
                          </ul>
                      </div>

                  </div>


              </div>


              <div className={'contacts bg-green-600'}>
                  <div className={' container mx-auto py-[100px]    '} id={'contacts'}>

                      <div className={'hover:underline hover:scale-110 duration-500 text-[60px] text-white text-center uppercase font-bold'}>
                          Kontakte
                      </div>

                      <div className={'mx-auto bg-green-950 text-white  p-10 mt-[50px] max-w-[700px] grid grid-cols-1 items-center justify-center text-[24px]'}>
                          <div className={'p-5'}>
                              Company Adress:
                              Am Heerdter Krankenhaus 4
                              40549 Düsseldorf
                              Germany
                          </div>
                          <div className={'p-5'}>
                              Phone: +4915778656905
                          </div>
                          <div className={'p-5'}>
                              Email: info@dexton-handel.de
                          </div>
                      </div>

                  </div>
              </div>


          </main>


          <footer className={' pb-5 pt-5 bg-green-950'}>
              <div className={'container mx-auto '}>
                  <div className={'flex flex-col md:flex-row items-center justify-between  mx-auto '}>
                      <Link href={'/'} className={'px-5 sm:px-0 logo text-[60px] text-white  max-w-fit'}>
                          DEXTON
                      </Link>
                      <div className={'flex  flex-col md:flex-row  flex-wrap   items-center gap-10 mx-auto max-w-fit text-white'}>
                          <Link href={'/'}
                                className={'px-8 py-5   hover:border-b-black    hover:scale-110 duration-500 uppercase underline hover:bg-yellow-500 hover:text-black border border-b-white border-t-transparent border-r-transparent border-l-transparent    '}>
                              Home
                          </Link>

                          <Link href={'/#services'}
                                className={'px-8 py-5   hover:border-b-black    hover:scale-110 duration-500 uppercase underline hover:bg-yellow-500 hover:text-black border border-b-white border-t-transparent border-r-transparent border-l-transparent    '}>
                              Services
                          </Link>
                          <Link href={'/#feauters'}
                                className={'px-8 py-5  hover:border-b-black     hover:scale-110 duration-500 uppercase underline hover:bg-yellow-500 hover:text-black border border-b-white border-t-transparent border-r-transparent border-l-transparent    '}>
                              Feauters
                          </Link>
                          <Link href={'/#benefits'}
                                className={'px-8 py-5  hover:border-b-black     hover:scale-110 duration-500 uppercase underline hover:bg-yellow-500 hover:text-black border border-b-white border-t-transparent border-r-transparent border-l-transparent    '}>
                          Benefits
                          </Link>

                          <Link href={'/#contacts'}
                              className={'px-8 py-5  hover:border-b-black     hover:scale-110 duration-500 uppercase underline hover:bg-yellow-500 hover:text-black border border-b-white border-t-transparent border-r-transparent border-l-transparent    '}>
                              Contacts
                          </Link>
                      </div>
                  </div>
              </div>
          </footer>


      </div>
  );
}
