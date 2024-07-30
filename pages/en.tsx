import Image from "next/image";


import servicesImg from '@/public/assets/images/4.jpg'

import feautersImg from '@/public/assets/images/1.jpg'
import benefitsImg from '@/public/assets/images/6.jpg'

import logo from '@/public/assets/images/logo.png'

import item1 from '@/public/assets/products/item1.jpeg'
import item2 from '@/public/assets/products/item2.jpeg'
import item3 from '@/public/assets/products/item3_1.jpg'

import Link from "next/link";
import {useState} from "react";


export default function Home() {


    const [ name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [isBlocked,setIsBlocked] = useState(false)


    const submitHandler = async (e:any)=>{
        e.preventDefault()
        e.stopPropagation()

        setIsBlocked(true)

        const sendForm = async ()=>{
            const res = await fetch('/api/form',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    message:{
                        username:name,
                        userphone:phone,
                        useremail:email,
                        userSubject:subject,
                        userMessage:message
                    },
                })
            })
        }

        await sendForm()

        setName('')
        setPhone('')
        setEmail('')
        setSubject('')
        setMessage('')

        setIsBlocked(false)

    }


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
                          <Link href={'/#products1'}
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
                          <Link href={'/'} className={'p-3 bg-yellow-500 text-black'}>
                              DE
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
                                  Our company specializes in the wholesale distribution of vegetable oil, such as unrefined and refined sunflower oil, soybean oil, and rapeseed oil, produced from our own raw materials in Bulgaria, Argentina, and Ukraine. We offer high-quality products that meet the diverse needs of our customers. Monthly production volume: Bulgaria Edible oil, unrefined sunflower oil 1000 tons, Edible oil, refined sunflower oil 800 tons. Argentina Edible oil, unrefined sunflower oil 3500 tons. Ukraine Edible oil, unrefined sunflower oil 1000 tons, Edible oil, refined sunflower oil 900 tons, Edible oil, unrefined soybean oil 700 tons, Edible oil, unrefined rapeseed oil 700 tons.
                              </p>
                          </div>
                      </div>
                  </div>

              </div>

              <div className={'services container mx-auto py-[100px]'} id={'services'}>

                  <div
                      className={'text-[1.5rem] sm:text-[3.5rem] hover:underline hover:scale-110 duration-500  text-center uppercase font-bold'}>
                      Services
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
                                  Bulk Distribution: Efficient bulk distribution services to seamlessly handle large orders.
                              </li>

                              <li className={'list-disc py-5 hover:p-5 hover:text-white hover:bg-green-800 hover:translate-x-5 duration-300'}>
                                  Logistics Support: Comprehensive logistics support to manage transportation and delivery.
                              </li>

                              <li className={'list-disc py-5 hover:p-5 hover:text-white hover:bg-green-800 hover:translate-x-5 duration-300'}>
                                  Customer Service: A dedicated customer service team is available for inquiries and orders.
                              </li>
                          </ul>
                      </div>

                  </div>


              </div>





              <div className={'products container mx-auto py-[100px]'} id={'products1'}>

                  <div
                      className={'text-[1.5rem] sm:text-[3.5rem] hover:underline hover:scale-110 duration-500  text-center uppercase font-bold'}>
                      Products
                  </div>

                  <div className={'grid grid-cols-1 sm:grid-cols-3 items-start  gap-10 px-5 py-10 '}>

                      <div className={''}>

                          <div className={'text-[30px]'}>
                              Unrefined rapeseed oil indicators:
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
                                      Color value, max. – 50 mg. iodine
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Acid number, max. – 3 (KOH) mg/g
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Mass fraction of defatted impurities, max. – 0.1%
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Mass fraction of moisture and volatile substances, max. – 0.1%
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Peroxide number, max. – 5 ½ O mmol/kg.
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Phosphorus content, max. – 270 ppm.
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Lead (PB), max. – 0.1
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Arsenic (AC), max. – 0.1
                                  </li>
                              </ul>
                          </div>
                      </div>


                      <div className={''}>

                          <div className={'text-[30px]'}>
                              Unrefined sunflower oil indicators:
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
                                      Color value, max. – 20 mg. iodine
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Acid value, max. – 3 (KOH) mg/g.
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Mass fraction of defatted impurities, max. – 0.1%.
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Mass fraction of moisture and volatile substances, max. – 0.2%.
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Peroxide number, max. – 5 ½ O mmol/kg.
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Phosphorus content, max. – 230 ppm.
                                  </li>
                              </ul>
                          </div>
                      </div>

                      <div className={''}>
                          <div className={'text-[30px]'}>
                              Unrefined soybean oil indicators:
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
                                      Color value, max. – 60 mg. iodine
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Acid number, max. – 1.5 (KOH) mg/g.
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Mass fraction of defatted impurities, max. – 0.1%
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Mass fraction of moisture and volatile substances, max. – 0.1%
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Peroxide number, max. – 4 ½ O mmol/kg.
                                  </li>
                                  <li className={'list-disc py-5     '}>
                                      Phosphorus content, max. – 290 ppm.
                                  </li>
                              </ul>
                          </div>
                      </div>

                  </div>


              </div>


              <div className={'benefits container mx-auto py-[100px]'} id={'benefits'}>

                  <div
                      className={'text-[1.5rem] sm:text-[3.5rem] hover:underline hover:scale-110 duration-500  text-center uppercase font-bold'}>
                      Benefits
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
                                  Competitive Prices: Our wholesale prices are designed to offer you excellent value for
                                  money.

                              </li>

                              <li className={'list-disc py-5  hover:p-5 hover:text-white hover:bg-green-800  hover:translate-x-5 duration-300'}>
                                  Reliable Supply Chain: With a robust distribution network, we ensure timely delivery
                                  and consistent supply.
                              </li>

                              <li className={'list-disc py-5  hover:p-5 hover:text-white hover:bg-green-800  hover:translate-x-5 duration-300'}>
                                  Customized Packaging Options: Tailored packaging solutions to meet your specific
                                  business requirements.
                              </li>

                              <li className={'list-disc py-5  hover:p-5 hover:text-white hover:bg-green-800  hover:translate-x-5 duration-300'}>
                                  Quality Assurance: Strict quality control processes ensure the highest standards.
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
                          Contacts
                      </div>


                      <div className={'flex flex-col sm:flex-row flex-wrap'}>


                          <div
                              className={'mx-auto bg-green-950 text-white  p-10 mt-[50px] max-w-[700px] grid grid-cols-1 items-center justify-center text-[24px]'}>
                              <div className={'p-5'}>
                                  Company Address:
                                  Am Heerdter Krankenhaus 4
                                  40549 Düsseldorf
                                  Germany
                              </div>
                              <div className={'p-5'}>
                                  Phone: +491635729793 <br/> (WhatsApp available)

                              </div>
                              <div className={'p-5'}>
                                  Email: salesdepartment@dexton-handel-gmbh.de
                              </div>
                          </div>


                          <div className={'form mx-auto'}>
                              <form onSubmit={submitHandler}
                                    className={'max-w-[700px] px-10 py-10  mx-auto bg-green-600'}>
                                  <fieldset disabled={isBlocked}>
                                      <div className={'uppercase text-center text-[36px] font-bold pb-5 text-white'}>
                                          Contact Us
                                      </div>

                                      <input
                                          className={'px-5 py-3 w-full mb-3'}
                                          placeholder={'Name'}
                                          type={'text'}
                                          onChange={e => setName(e.target.value)}
                                          value={name}
                                      />
                                      <input
                                          className={'px-5 py-3 w-full mb-3'}
                                          placeholder={'Phone'}
                                          type={'tel'}
                                          onChange={e => setPhone(e.target.value)}
                                          value={phone}
                                      />
                                      <input
                                          className={'px-5 py-3 w-full mb-3'}
                                          placeholder={'Email'}
                                          type={'email'}
                                          onChange={e => setEmail(e.target.value)}
                                          value={email}
                                      />
                                      <input
                                          className={'px-5 py-3 w-full mb-3'}
                                          placeholder={'Subject'}
                                          type={'text'}
                                          onChange={e => setSubject(e.target.value)}
                                          value={subject}
                                      />
                                      <textarea
                                          className={'px-5 py-3 w-full mb-3 h-[150px]'}
                                          placeholder={'Message'}
                                          onChange={e => setMessage(e.target.value)}
                                          value={message}
                                      />
                                      <div className={'flex justify-center hover:scale-110 duration-300'}>
                                          <button type={'submit'}
                                                  className={'w-[250px] text-white font-bold bg-yellow-500 px-5 py-3 uppercase hover:bg-green-400 hover:text-white duration-300'}>Send
                                              Message
                                          </button>
                                      </div>
                                  </fieldset>
                              </form>
                          </div>


                      </div>


                  </div>
              </div>


          </main>


          <footer className={' pb-5 pt-5 bg-green-950'}>
              <div className={'container mx-auto '}>
                  <div className={'flex flex-col md:flex-row items-center justify-between  mx-auto '}>
                      <Link href={'/'} className={'px-5 sm:px-0 logo text-[60px] text-white  max-w-fit'}>
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
                          <Link href={'/#products1'}
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
