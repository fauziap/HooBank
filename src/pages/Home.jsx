import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Button from "../components/Button";
import hand from "../assets/hand.svg";
import paypal from "../assets/paypal.svg";
import googlePlay from "../assets/googlePlay.png";
import appStore from "../assets/appStore.png";
import scan from "../assets/scan.svg";
import airbnb from "../assets/airbnb.svg";
import binance from "../assets/binance.svg";
import coinbase from "../assets/coinbase.svg";
import dropbox from "../assets/dropbox.svg";

function Home() {
  return (
    <>
      <header className="py-8 text-white px-10">
        <Navbar />
      </header>
      <main className="overflow-hidden">
        <section className="md:file:relative">
          <div className="absolute -left-32 top-1/2 transform -translate-y-1/2 w-[300px] h-[500px] bg-gradient-to-br from-gray-400 to-transparent rounded-full blur-[150px] opacity-60"></div>

          <div className="flex md:ml-20 items-center">
            <div className="w-full ">
              <div className="md:w-3/5 flex md:flex-row flex-col items-center">
                <p className="items-center inline-block rounded-full bg-gray-900 text-gray-400 p-3 text-sm ">
                  <span className="text-xs text-cyan-600 bg-slate-800 rounded-full py-1 font-bold px-2 mr-2">
                    %
                  </span>
                  <span className="text-white">20%</span> DISCOUNT FOR{" "}
                  <span className="text-white">1 MONTH</span> ACCOUNT
                </p>
              </div>
              <h2
                data-aos="fade-up"
                className="md:text-[4rem] text-white font-bold mt-5"
              >
                The Next
                <span className="block text-transparent bg-clip-text bg-gradient-to-l from-cyan-100 to-cyan-600">
                  Generation
                </span>
                Payment Method.
              </h2>
              <p
                data-aos="fade-up" data-aos-delay="300"
                className="text-gray-400 w-3/4 mt-10 text-sm mb-6 leading-relaxed"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                culpa id explicabo debitis animi dolore molestiae libero aliquid
                aspernatur quia, sunt iure itaque voluptates atque perferendis
              </p>
            </div>
            <div className=" md:flex hidden  w-full">
              <img src={hand} alt="" />
            </div>
          </div>
        </section>

        <div className="flex pt-14 items-center justify-center space-x-16 bg-dark-background py-6">
          <div className="flex items-center space-x-2">
            <h2 className="text-white text-4xl font-bold mr-3">3800+</h2>
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-100 bg-clip-text text-transparent text-sm uppercase tracking-widest">
              User Active
            </span>
          </div>

          <div className="h-6 border-l border-gray-600"></div>

          <div className="flex items-center space-x-2">
            <h2 className="text-white text-4xl font-bold mr-3">230+</h2>
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-100 bg-clip-text text-transparent text-md uppercase tracking-widest">
              Trusted by Company
            </span>
          </div>

          <div className="h-6 border-l border-gray-600"></div>

          <div className="flex items-center space-x-2">
            <h2 className="text-white text-4xl font-bold mr-3">$230M+</h2>
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-100 bg-clip-text text-transparent text-md uppercase tracking-widest">
              Transaction
            </span>
          </div>
        </div>

        <section className="pt-40 pb-32">
          <div className="flex md:mx-20 items-center justify-center">
            <div className="w-full md:w-5/10">
              <h2 className="text-white text-[2.5rem] font-semibold">
                You do the business, <br />
                we’ll handle the money.
              </h2>
              <p className="text-gray-400 w-3/4 mt-10 text-sm mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                culpa id explicabo debitis animi dolore molestiae libero aliquid
                aspernatur quia, sunt iure itaque voluptates atque perferendis
              </p>
              <Button>Get Started</Button>
            </div>
            <div className="w-full md:w-5/10">
              <div data-aos="fade-up" data-aos-delay="0">
                <Card className="">
                  <div className="flex p-4 items-start gap-6  rounded-lg shadow-lg">
                    <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center bg-gray-900 rounded-full">
                      <i className="fa-solid fa-star text-4xl text-cyan-500"></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Rewards
                      </h3>
                      <p className="text-gray-400 text-sm ">
                        The best credit cards offer some tantalizing
                        combinations of promotions and prizes
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
              <div data-aos="fade-up" data-aos-delay="200">
                <Card>
                  <div className="flex my-4 p-4 items-start gap-6 bg-gray-900 rounded-lg shadow-lg">
                    <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center bg-gray-800 rounded-full">
                      <i className="fa-solid fa-shield text-4xl text-cyan-500"></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        100% Secured
                      </h3>
                      <p className="text-gray-400 text-sm ">
                        We take proactive steps make sure your information and
                        transactions are secure.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
              <div data-aos="fade-up" data-aos-delay="400">
                <Card className="">
                  <div className="flex p-4 items-start gap-6  rounded-lg shadow-lg">
                    <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center bg-gray-900 rounded-full">
                      <i className="fa-solid fa-paper-plane text-4xl text-cyan-500"></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Balance Transfer
                      </h3>
                      <p className="text-gray-400 text-sm ">
                        A balance transfer credit card can save you a lot of
                        money in interest charges.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="relative md:mx-20">
          <div className="absolute -left-32 top-1/2 transform -translate-y-1/2 w-[300px] h-[500px] bg-gradient-to-br from-cyan-400 to-transparent rounded-full blur-[150px] opacity-40"></div>
          <div className="flex items-center justify-between">
            <div className="w-full md:w-2/5">
              <img src={paypal} alt="" />
            </div>
            <div className="w-full md:w-3/6">
              <h2 className="text-white text-[2.5rem] font-semibold">
                Easily control your <br /> billing & invoicing.
              </h2>
              <p className="text-gray-400 mt-6 text-sm mb-6 leading-relaxed w-4/5">
                Elit enim sed massa etiam. Mauris eu adipiscing ultrices
                ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor
                integer platea placerat.
              </p>
              <div className="flex items-center space-x-6">
                <img src={googlePlay} alt="" />
                <img src={appStore} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:mx-20">
          <div className="flex items-center justify-center">
            <div className="w-full md:w-5/10">
              <h2 className="text-white text-[2.5rem] font-semibold">
                Find a better card deal <br /> in few easy steps.
              </h2>
              <p className="text-gray-400 w-3/4 mt-10 text-sm mb-6 leading-relaxed">
                Arcu tortor, purus in mattis at sed integer faucibus. Aliquet
                quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
              </p>
              <Button>Get Started</Button>
            </div>
            <div className="w-full md:w-5/10">
              <img src={scan} alt="" />
            </div>
          </div>
        </section>

        <section className="relative mt-20">
          <div className="absolute -right-32  transform -translate-y-1/2 w-[400px] h-[600px] bg-gradient-to-br from-cyan-400 to-transparent rounded-full blur-[150px] opacity-50"></div>
          <div className="md:mx-20">
            <div className="flex items-center justify-between mb-20">
              <div className="md:w-2/5">
                <h2 className="text-white text-[2.5rem] font-semibold">
                  What people are <br /> saying about us
                </h2>
              </div>
              <div className="md:w-3/6">
                <p className="text-gray-400 mt-6 text-sm mb-6 leading-relaxed w-4/6">
                  Everything you need to accept card payments <br /> and grow
                  your business anywhere on the planet.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div data-aos="fade-up" data-aos-delay="0">
              <Card>
                <Card.Testimoni
                  nama={"Freya"}
                  pendapat={
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos similique deleniti sapiente cupiditate expedita nam."
                  }
                  img={
                    "https://i.pinimg.com/originals/9f/46/37/9f4637fd133bf9e3a1a483fe721277b0.jpg"
                  }
                  alt={"Freya"}
                  jabatan={"Founder"}
                />
              </Card>
              </div>
              <div data-aos="fade-up" data-aos-delay="300">
              <Card className="">
                <Card.Testimoni
                  nama={"Freya"}
                  pendapat={
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos similique deleniti sapiente cupiditate expedita nam."
                  }
                  img={
                    "https://i.pinimg.com/originals/9f/46/37/9f4637fd133bf9e3a1a483fe721277b0.jpg"
                  }
                  alt={"Freya"}
                  jabatan={"Founder"}
                />
              </Card>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
              <Card className="">
                <Card.Testimoni
                  nama={"Freya"}
                  pendapat={
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos similique deleniti sapiente cupiditate expedita nam."
                  }
                  img={
                    "https://i.pinimg.com/originals/9f/46/37/9f4637fd133bf9e3a1a483fe721277b0.jpg"
                  }
                  alt={"Freya"}
                  jabatan={"Founder"}
                />
              </Card>
              </div>
              <br />
              <br />
            </div>
          </div>
        </section>

        <section className=" md:mx-20 ">
          <div className="grid md:grid-cols-4 items-center justify-center mx-14 gap-5">
            <img src={airbnb} alt="" />
            <img src={binance} alt="" />
            <img src={coinbase} alt="" />
            <img src={dropbox} alt="" />
          </div>
        </section>

        <section className="md:mx-20 my-20">
          <Card>
            <div className="flex py-10 px-20 items-center justify-between">
              <div>
                <h2 className="text-white text-[2.5rem] font-semibold">
                  Let’s try our service now!
                </h2>
                <p className="text-gray-400 w-3/5 mt-5 text-sm mb-6 leading-relaxed">
                  Everything you need to accept card payments and grow your
                  business anywhere on the planet.
                </p>
              </div>
              <div>
                <Button>Get Started</Button>
              </div>
            </div>
          </Card>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
