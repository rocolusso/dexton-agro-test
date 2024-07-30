import Image from "next/image";


import servicesImg from '@/public/assets/images/4.jpg'

import feautersImg from '@/public/assets/images/1.jpg'
import benefitsImg from '@/public/assets/images/6.jpg'

import logo from '@/public/assets/images/logo.png'

import item1 from '@/public/assets/products/item1.jpeg'
import item2 from '@/public/assets/products/item2.jpeg'
import item3 from '@/public/assets/products/item3_1.jpg'

import Link from "next/link";


export default function Home() {
  return (
      <div className={''}>
          <header className={' pb-5 pt-5 bg-green-950'}>
              <div className={'container mx-auto '}>
                  <nav className={'flex flex-col xl:flex-row items-center justify-between  mx-auto '}>
                      <Link  href={'/'} className={'px-5 sm:px-0 logo text-[60px] text-white  max-w-fit'}>
                          <div className={'flex gap-10'}>
                              <div>
                                  DEXTON
                              </div>
                              <Image
                                  src={logo}
                                  alt={'logo'}
                                  width={100}
                                  height={100}
                              />
                          </div>
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
                              Products
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

                      <div className={'locale'}>
                          <Link href={'/en'} className={'p-3 bg-yellow-500 text-black rounded'}>
                              EN
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
                      <div className={'mx-auto bg-white bg-opacity-70 rounded-xl  p-10 '}>
                          <div className={'text-center uppercase text-[60px]'}>
                              Dexton Handel GmbH
                          </div>
                          <div className={'mx-auto'}>
                              <p className={'text-[24px] '}>
                                  Unser Unternehmen spezialisiert sich auf den Großverkauf von Pflanzenöl, wie unraffiniertem und raffiniertem Sonnenblumenöl, Sojaöl und Rapsöl, die aus eigenem Rohmaterial auf dem Territorium von Bulgarien, Argentinien und der Ukraine hergestellt werden.
                                  Wir bieten hochwertige Produkte, die den unterschiedlichen Bedürfnissen unserer Kunden entsprechen.
                                  Monatliche Produktionsmenge:
                                  Bulgarien

                                  Speiseöl, unraffiniertes Sonnenblumenöl 1000 Tonnen,
                                  Speiseöl, raffiniertes Sonnenblumenöl 800 Tonnen.
                                  Argentinien
                                  Speiseöl, unraffiniertes Sonnenblumenöl 3500 Tonnen.
                                  Ukraine
                                  Speiseöl, unraffiniertes Sonnenblumenöl 1000 Tonnen,
                                  Speiseöl, raffiniertes Sonnenblumenöl 900 Tonnen,
                                  Speiseöl, unraffiniertes Sojaöl 700 Tonnen,
                                  Speiseöl, unraffiniertes Rapsöl 700 Tonnen.
                              </p>
                          </div>
                      </div>
                  </div>

              </div>

              <div className={'services container mx-auto py-[100px]'} id={'services'}>

                  <div
                      className={'text-[1.5rem] sm:text-[3.5rem] hover:underline hover:scale-110 duration-500  text-center uppercase font-bold'}>
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
                                  Massenverteilung: Effiziente Massenverteilungsdienste, um große Bestellungen nahtlos
                                  zu bewältigen.
                              </li>

                              <li className={'list-disc py-5 hover:p-5 hover:text-white hover:bg-green-800 hover:translate-x-5 duration-300'}>
                                  Logistikunterstützung: Umfassende Logistikunterstützung zur Verwaltung von Transport
                                  und Lieferung.
                              </li>

                              <li className={'list-disc py-5 hover:p-5 hover:text-white hover:bg-green-800 hover:translate-x-5 duration-300'}>
                                  Kundendienst: Ein engagiertes Kundendienstteam steht Ihnen für Anfragen und
                                  Bestellungen zur Verfügung.
                              </li>
                          </ul>
                      </div>

                  </div>


              </div>


              <div className={'feauters container mx-auto py-[100px]'} id={'feauters'}>

                  <div
                      className={'text-[1.5rem] sm:text-[3.5rem] hover:underline hover:scale-110 duration-500  text-center uppercase font-bold'}>
                      Vorteile
                  </div>

                  <div className={'grid grid-cols-1 sm:grid-cols-2 px-5 py-10 items-center'}>


                      <div className={'max-w-[600px] mx-auto'}>
                          <ul className={'ml-[40px] text-[24px]'}>

                              <li className={'list-disc py-5  hover:p-5 hover:text-white hover:bg-green-800  hover:translate-x-5 duration-300'}>
                                  Maßgeschneiderte Verpackungsoptionen: Angepasste Verpackungslösungen, um Ihren
                                  spezifischen Geschäftsanforderungen gerecht zu werden.
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


              <div className={'products container mx-auto py-[100px]'}>

                  <div
                      className={'text-[1.5rem] sm:text-[3.5rem] hover:underline hover:scale-110 duration-500  text-center uppercase font-bold'}>
                      PRODUKTE
                  </div>

                  <div className={'grid grid-cols-1 sm:grid-cols-3 items-start  gap-10 px-5 py-10 '}>

                      <div className={''}>

                          <div className={'text-[30px]'}>
                              Indikatoren für unraffiniertes Rapsöl:
                          </div>
                          <Image
                              className={'rounded-2xl hover:translate-x-5 duration-300'}
                              src={item1}
                              alt={''}
                              width={1000}
                              height={1000}
                          />


                          <div className={'max-w-[600px] p-3 mx-auto'}>

                              <ul className={'ml-[40px] text-[24px]'}>
                                  <li className={'list-disc py-5    '}>
                                      Farbwert, max. – 50 mg. Iod
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Säurezahl, max. – 3 (KOH) mg/g
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Massenanteil an entfetteten Verunreinigungen, max. – 0,1%
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Massenanteil an Feuchtigkeit und flüchtigen Stoffen, max. – 0,1%
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Peroxidzahl, max. – 5 ½ O mmol/kg
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Phosphorgehalt, max. – 270 ppm
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Blei (PB), max. – 0,1
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Arsen (AC), max. – 0,1
                                  </li>
                              </ul>
                          </div>
                      </div>


                      <div className={''}>

                          <div className={'text-[30px]'}>
                              Indikatoren für unraffiniertes Sonnenblumenöl:
                          </div>
                          <Image
                              className={'rounded-2xl hover:translate-x-5 duration-300'}
                              src={item2}
                              alt={''}
                              width={1000}
                              height={1000}
                          />


                          <div className={'max-w-[600px] p-3 mx-auto'}>

                              <ul className={'ml-[40px] text-[24px]'}>
                                  <li className={'list-disc py-5    '}>
                                      Farbwert, max. – 20 mg. Iod
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Säurezahl, max. – 3 (KOH) mg/g
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Massenanteil an entfetteten Verunreinigungen, max. – 0,1%
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Massenanteil an Feuchtigkeit und flüchtigen Stoffen, max. – 0,2%
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Peroxidzahl, max. – 5 ½ O mmol/kg
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Phosphorgehalt, max. – 230 ppm
                                  </li>
                              </ul>
                          </div>
                      </div>

                      <div className={''}>

                          <div className={'text-[30px]'}>
                              Indikatoren für unraffiniertes Sojaöl:
                          </div>
                          <Image
                              className={'rounded-2xl hover:translate-x-5 duration-300'}
                              src={item3}
                              alt={''}
                              width={1000}
                              height={1000}
                          />


                          <div className={'max-w-[600px] p-3 mx-auto'}>

                              <ul className={'ml-[40px] text-[24px]'}>
                                  <li className={'list-disc py-5    '}>
                                      Farbwert, max. – 60 mg. Iod
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Säurezahl, max. – 1,5 (KOH) mg/g
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Massenanteil an entfetteten Verunreinigungen, max. – 0,1%
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Massenanteil an Feuchtigkeit und flüchtigen Stoffen, max. – 0,1%
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Peroxidzahl, max. – 4 ½ O mmol/kg
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Phosphorgehalt, max. – 290 ppm
                                  </li>
                              </ul>
                          </div>
                      </div>

                  </div>


              </div>


              <div className={'benefits container mx-auto py-[100px]'} id={'benefits'}>

              <div
                      className={'text-[1.5rem] sm:text-[3.5rem] hover:underline hover:scale-110 duration-500  text-center uppercase font-bold'}>
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
                                  Wettbewerbsfähige Preise: Unsere Großhandelspreise sind darauf ausgelegt, Ihnen ein
                                  hervorragendes Preis-Leistungs-Verhältnis zu bieten.
                              </li>

                              <li className={'list-disc py-5  hover:p-5 hover:text-white hover:bg-green-800  hover:translate-x-5 duration-300'}>
                                  Zuverlässige Lieferkette: Mit einem robusten Vertriebsnetz gewährleisten wir eine
                                  pünktliche Lieferung und eine konstante Versorgung.
                              </li>
                          </ul>
                      </div>

                  </div>


              </div>


              <div className={'partners container mx-auto py-[100px]'} id={'benefits'}>

                  <div
                      className={'text-[1.5rem] sm:text-[3.5rem] hover:underline hover:scale-110 duration-500  text-center uppercase font-bold'}>
                      Partners
                  </div>

                  <div
                      className={'grid grid-cols-1 sm:grid-cols-1 max-w-[600px] mx-auto gap-5  px-5 py-10 items-center'}>

                      <div
                          className={'bg-green-700 p-3  text-white hover:bg-yellow-500 hover:text-black hover:scale-110 duration-300'}>
                          <Link className={'uppercase  text-[20px]'} href={'https://averecommodities.com'}>
                              Avere Commodities SA
                          </Link>
                      </div>

                      <div
                          className={'bg-green-700 p-3 text-white hover:bg-yellow-500 hover:text-black hover:scale-110 duration-300'}>
                          <Link className={'uppercase  text-[20px]'} href={'https://www.vicentin.com.ar'}>
                              Vicentin SAIC / <br/> Oleaginosa San Lorenzo SA
                          </Link>
                      </div>

                      <div
                          className={'bg-green-700 p-3 text-white hover:bg-yellow-500 hover:text-black hover:scale-110 duration-300'}>
                          <Link className={'uppercase  text-[20px]'} href={'https://www.bonoilseeds.com'}>
                              BONOIL
                          </Link>
                      </div>

                      <div
                          className={'bg-green-700 p-3 text-white hover:bg-yellow-500 hover:text-black hover:scale-110 duration-300'}>
                          <div className={'uppercase  text-[20px]'}>
                              MBOCUMBO LTD
                          </div>
                      </div>

                      <div
                          className={'bg-green-700 p-3 text-white hover:bg-yellow-500 hover:text-black hover:scale-110 duration-300'}>
                          <Link className={'uppercase  text-[20px]'} href={'https://greengold-int.com'}>

                              GREEN GOLD <br/> INTERNATIONAL LTD

                          </Link>
                      </div>


                  </div>


              </div>


              <div className={'contacts bg-green-600'}>
                  <div className={' container mx-auto py-[100px]    '} id={'contacts'}>

                      <div
                          className={'hover:underline hover:scale-110 duration-500 text-[60px] text-white text-center uppercase font-bold'}>
                          Kontakte
                      </div>

                      <div
                          className={'mx-auto bg-green-950 text-white  p-10 mt-[50px] max-w-[700px] grid grid-cols-1 items-center justify-center text-[24px]'}>
                          <div className={'p-5'}>
                              Company Address:
                              Am Heerdter Krankenhaus 4
                              40549 Düsseldorf
                              Germany
                          </div>
                          <div className={'p-5'}>
                              Phone: +491635729793 <br/> (WhatsApp verfügbar)

                          </div>
                          <div className={'p-5'}>
                              Email: salesdepartment@dexton-handel-gmbh.de
                          </div>
                      </div>

                  </div>
              </div>


          </main>


          <footer className={' pb-5 pt-5 bg-green-950'}>
              <div className={'container mx-auto '}>
                  <div className={'flex flex-col md:flex-row items-center justify-between  mx-auto '}>
                      <Link  href={'/'} className={'px-5 sm:px-0 logo text-[60px] text-white  max-w-fit'}>
                          <div className={'flex gap-10'}>
                              <div>
                                  DEXTON
                              </div>
                              <Image
                                  src={logo}
                                  alt={'logo'}
                                  width={100}
                                  height={100}
                              />
                          </div>
                      </Link>
                      <div
                          className={'flex  flex-col md:flex-row  flex-wrap   items-center gap-10 mx-auto max-w-fit text-white'}>
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
                              Products
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
