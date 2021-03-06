import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Review from '../../components/Review';
import Filter from '../../components/Filter';
import Menu from '../../components/Menu';
import {useState} from 'react';


const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two', className: 'myOptionClassName' }, 
];


function Linenfabric(){
  
 
 

  const [items ,setItem]=useState(Menu);
  const filterItem =(cateItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === cateItem;

    });
    setItem(updatedItems);

  }

    return(
        <div>
             <Head>
          <title>BedsDivans</title>
          <meta name="description" content="Generated by create next app" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
          <link rel="icon" href="/logo (1).png" />
        </Head>

        <Header/>

        
        
          <div className="container">
              <div className="row text-center ">
                  <h2 className="font-weight-bold mt-6" style={{color:"#0e3f70"}}>House fabric divan beds</h2>
                  <p className="mt-4" style={{fontSize:"18px"}}>A great night’s sleep starts with the perfect bed, and we can help with that! Not only are our house fabric divan beds ridiculously comfortable, but they’re super stylish too. 

Available in a variety of fabrics and colours, our range of divan beds will complement any home decor perfectly. We have something to suit everyone.

Our fast delivery times and a generous range of top-quality divans make us the go-to destination for beautiful new beds. Our impressive range includes Suede divan beds, velvet fabric beds and Sleigh beds and many more beautiful bed designs. Check out our full collection below.

Whether you are looking for a divan bed with headboard or in search of low divan beds, we have it covered.</p>

              </div>

          </div>

          <div>
            <div className="container mt-4 rounded" style={{backgroundColor:"#f2f2f2"}}>
              <div className="row" style={{padding:"10px"}}>
                  <div className="col-md-3">
                  <span style={{marginRight:"0 !important", margin:"0 auto" }}>
                  <select className="dropdown-section">
                  <option  label="Beds"/>
                  <option value="2FT 6" label="2Feet"/>
                  <option value="2FT 6" label="2Feet"/>
                  <option value="2FT 6" label="2Feet"/>
                  <option value="2FT 6" label="2Feet"/>
                  </select>
                  </span>

                  
                  </div>
                  <div className="col-md-3">
                      <h4 className="font-weight-bold" style={{color:"#0e3f70"}}>Color</h4>
                  </div>
                  <div className="col-md-3">
                      <h4 className="font-weight-bold" style={{color:"#0e3f70"}}>Price</h4>
                  </div>

              </div>


          </div>
        </div>

          

          
    
          

          <div className="menu-tabs container">
            <div className="menu-tab d-flex justify-content-around">
              <button className="btn btn-warning" onClick={() => filterItem('2ft')}>Divan Bed 2ft</button>
              <button className="btn btn-warning" onClick={() => filterItem('3ft')}>Divan Bed 3ft</button>
              <button className="btn btn-warning" onClick={() => filterItem('4ft')}>Divan Bed 4ft</button>
              <button className="btn btn-warning" onClick={() => filterItem('5ft')}>Divan Bed 5ft</button>
              <button className="btn btn-warning" onClick={() => setItem(Menu)}>All</button>

            </div>

          </div>
{/* Product Start */}
          <div className="container ">
          <div
                  className="row "
                  style={{ marginTop: "86px", marginLeft: "-30px" }}
                >

                  {
                    items.map((elem) =>{
                      const {id, image, name, price, compareprice}= elem;

                      return(
<div
                    className="col-md-3 my-6"
                    style={{ position: "relative", left: "10px" }}
                  >
                    <div class="card" style={{ width: "19rem" }}>
                      <a href="" style={{ textDecoration: "none" }}>
                        <Image width={400} height={300}
                          class="card-img-top"
                          src={image}
                          alt="Card image cap"
                        />
                      </a>
                      <div
                        class="card-body cardTxt"
                        style={{ paddingleft: "18px" }}
                      >
                        <h6 class="card-title  card-hoverText">
                          {" "}
                          <b>{name}</b>
                        </h6>
                        <p class="card-text ">
                          <img
                            src="/assets/images/banner/Group 429.png"
                            alt=""
                          />
                        </p>
                        <a href="#" style={{ textDecoration: "none" }}>
                          <p className="card-text" style={{ fontSize: "19px" }}>
                            {" "}
                            <b> {price} </b>
                            <del style={{ color: "#7c7c7c" }}>{compareprice}</del>{" "}
                          </p>
                        </a>
                     
                      </div>
                    </div>
                  </div>
                      )
                    })
                  }
                  
                  
                  {/* <div
                    className="col-md-3"
                    style={{ position: "relative", left: "20px" }}
                  >
                    <div class="card" style={{ width: "19rem" }}>
                      <a href="" style={{ textDecoration: "none" }}>
                        <Image width={400} height={300}
                          class="card-img-top"
                          src="/assets/images/linenproduct/blue.jpg"
                          alt="Card image cap"
                        />
                      </a>
                      <div
                        class="card-body cardTxt"
                        style={{ paddingleft: "18px" }}
                      >
                        <h6 class="card-title  card-hoverText">
                          {" "}
                          <b> Olivier Fabric Ottoman Bed </b>
                        </h6>
                        <p class="card-text ">
                          <img
                            src="/assets/images/banner/Group 429.png"
                            alt=""
                          />
                        </p>
                        <a href="#" style={{ textDecoration: "none" }}>
                          <p className="card-text" style={{ fontSize: "19px" }}>
                            {" "}
                            <b> £400.00 </b>
                            <del style={{ color: "#7c7c7c" }}>£749.00</del>{" "}
                          </p>
                        </a>
                     
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-3"
                    style={{ position: "relative", left: "20px" }}
                  >
                    <div class="card" style={{ width: "19rem" }}>
                      <a href="" style={{ textDecoration: "none" }}>
                        <Image width={400} height={300}
                          class="card-img-top"
                          src="/assets/images/linenproduct/bed1-min-768x511.png"
                          alt="Card image cap"
                        />
                      </a>
                      <div
                        class="card-body cardTxt"
                        style={{ paddingleft: "18px" }}
                      >
                        <h6 class="card-title  card-hoverText">
                          {" "}
                          <b> Olivier Fabric Ottoman Bed </b>
                        </h6>
                        <p class="card-text ">
                          <img
                            src="/assets/images/banner/Group 429.png"
                            alt=""
                          />
                        </p>
                        <a href="#" style={{ textDecoration: "none" }}>
                          <p className="card-text" style={{ fontSize: "19px" }}>
                            {" "}
                            <b> £400.00 </b>
                            <del style={{ color: "#7c7c7c" }}>£749.00</del>{" "}
                          </p>
                        </a>
                     
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-3"
                    style={{ position: "relative", left: "20px" }}
                  >
                    <div class="card" style={{ width: "19rem" }}>
                      <a href="" style={{ textDecoration: "none" }}>
                        <Image width={400} height={300}
                          class="card-img-top"
                          src="/assets/images/linenproduct/08C93201-9373-4B56-9C8B-AF2CE115A7A4-768x536.jpeg"
                          alt="Card image cap"
                        />
                      </a>
                      <div
                        class="card-body cardTxt"
                        style={{ paddingleft: "18px" }}
                      >
                        <h6 class="card-title  card-hoverText">
                          {" "}
                          <b> Olivier Fabric Ottoman Bed </b>
                        </h6>
                        <p class="card-text ">
                          <img
                            src="/assets/images/banner/Group 429.png"
                            alt=""
                          />
                        </p>
                        <a href="#" style={{ textDecoration: "none" }}>
                          <p className="card-text" style={{ fontSize: "19px" }}>
                            {" "}
                            <b> £400.00 </b>
                            <del style={{ color: "#7c7c7c" }}>£749.00</del>{" "}
                          </p>
                        </a>
                         
                      </div>
                    </div>
                  </div> */}
                </div>

          </div>

        


{/* Shop by Size Start */}
          <div className="section mt-10">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center" data-aos="fade-up">
              <div className="section-title">
                <h2 className="title text-blue">Shop By Size</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="size-box">
              <div className="single-box">
                <a href="#">
                  
                  <Image
                    width={140}
                    height={100}
                    alt="BedsDivan"
                    src="/assets/images/image/bed-sizes-01.png"
                  />
                </a>

                <p className="text-center text-blue mt-2"> <b> 2.6ft Single</b></p>
              </div>

              <div className="single-box">
                <a href="#">
                  
                  <Image
                    width={140}
                    height={100}
                    alt="BedsDivan"
                    src="/assets/images/image/bed-sizes-02.png"
                  />
                </a>
                <p className="text-center text-blue mt-2"> <b> 3ft Single </b></p>
              </div>

              <div className="single-box">
                <a href="#">
                  <Image
                    width={140}
                    height={128}
                    alt="BedsDivan"
                    src="/assets/images/image/bed-sizes-03.png"
                  />
                </a>
                <p className="text-center text-blue mt-2"> <b> 4ft Single </b></p>
              </div>

              <div className="single-box">
                <a href="#">
                  <Image
                    width={140}
                    height={128}
                    alt="BedsDivan"
                    src="/assets/images/image/bed-sizes-04.png"
                  />
                </a>
                <p className="text-center text-blue mt-2"> <b> 4.6ft Single</b></p>
              </div>

              <div className="single-box">
                <a href="#">
                  <Image
                    width={140}
                    height={128}
                    alt="BedsDivan"
                    src="/assets/images/image/bed-sizes-05.png"
                  />
                </a>
                <p className="text-center text-blue mt-2"> <b> 5ft Single</b></p>
              </div>

              <div className="single-box">
                <a href="#">
                  <Image
                    width={250}
                    height={50}
                    alt="BedsDivan"
                    src="/assets/images/image/bed-sizes-N-01.png"
                  />
                </a>
                <p className="text-center text-blue mt-2"> <b> 6ft Single </b></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shop by Size End */}

          <div className="container">
          <div
                  className="row "
                  style={{ marginTop: "86px", marginLeft: "-30px" }}
                >
                  
                  <div
                    className="col-md-3"
                    style={{ position: "relative", left: "10px" }}
                  >
                    <div class="card" style={{ width: "19rem" }}>
                      <a href="" style={{ textDecoration: "none" }}>
                        <Image width={400} height={300}
                          class="card-img-top"
                          src="/assets/images/linenproduct/divan-grey-pic-new-1 (1).jpg"
                          alt="Card image cap"
                        />
                      </a>
                      <div
                        class="card-body cardTxt"
                        style={{ paddingleft: "18px" }}
                      >
                        <h6 class="card-title  card-hoverText">
                          {" "}
                          <b> Olivier Fabric Ottoman Bed </b>
                        </h6>
                        <p class="card-text ">
                          <img
                            src="/assets/images/banner/Group 429.png"
                            alt=""
                          />
                        </p>
                        <a href="#" style={{ textDecoration: "none" }}>
                          <p className="card-text" style={{ fontSize: "19px" }}>
                            {" "}
                            <b> £400.00 </b>
                            <del style={{ color: "#7c7c7c" }}>£749.00</del>{" "}
                          </p>
                        </a>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-3"
                    style={{ position: "relative", left: "20px" }}
                  >
                    <div class="card" style={{ width: "19rem" }}>
                      <a href="" style={{ textDecoration: "none" }}>
                        <Image width={400} height={300}
                          class="card-img-top"
                          src="/assets/images/linenproduct/blue.jpg"
                          alt="Card image cap"
                        />
                      </a>
                      <div
                        class="card-body cardTxt"
                        style={{ paddingleft: "18px" }}
                      >
                        <h6 class="card-title  card-hoverText">
                          {" "}
                          <b> Olivier Fabric Ottoman Bed </b>
                        </h6>
                        <p class="card-text ">
                          <img
                            src="/assets/images/banner/Group 429.png"
                            alt=""
                          />
                        </p>
                        <a href="#" style={{ textDecoration: "none" }}>
                          <p className="card-text" style={{ fontSize: "19px" }}>
                            {" "}
                            <b> £400.00 </b>
                            <del style={{ color: "#7c7c7c" }}>£749.00</del>{" "}
                          </p>
                        </a>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-3"
                    style={{ position: "relative", left: "20px" }}
                  >
                    <div class="card" style={{ width: "19rem" }}>
                      <a href="" style={{ textDecoration: "none" }}>
                        <Image width={400} height={300}
                          class="card-img-top"
                          src="/assets/images/linenproduct/bed1-min-768x511.png"
                          alt="Card image cap"
                        />
                      </a>
                      <div
                        class="card-body cardTxt"
                        style={{ paddingleft: "18px" }}
                      >
                        <h6 class="card-title  card-hoverText">
                          {" "}
                          <b> Olivier Fabric Ottoman Bed </b>
                        </h6>
                        <p class="card-text ">
                          <img
                            src="/assets/images/banner/Group 429.png"
                            alt=""
                          />
                        </p>
                        <a href="#" style={{ textDecoration: "none" }}>
                          <p className="card-text" style={{ fontSize: "19px" }}>
                            {" "}
                            <b> £400.00 </b>
                            <del style={{ color: "#7c7c7c" }}>£749.00</del>{" "}
                          </p>
                        </a>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-3"
                    style={{ position: "relative", left: "20px" }}
                  >
                    <div class="card" style={{ width: "19rem" }}>
                      <a href="" style={{ textDecoration: "none" }}>
                        <Image width={400} height={300}
                          class="card-img-top"
                          src="/assets/images/linenproduct/08C93201-9373-4B56-9C8B-AF2CE115A7A4-768x536.jpeg"
                          alt="Card image cap"
                        />
                      </a>
                      <div
                        class="card-body cardTxt"
                        style={{ paddingleft: "18px" }}
                      >
                        <h6 class="card-title  card-hoverText">
                          {" "}
                          <b> Olivier Fabric Ottoman Bed </b>
                        </h6>
                        <p class="card-text ">
                          <img
                            src="/assets/images/banner/Group 429.png"
                            alt=""
                          />
                        </p>
                        <a href="#" style={{ textDecoration: "none" }}>
                          <p className="card-text" style={{ fontSize: "19px" }}>
                            {" "}
                            <b> £400.00 </b>
                            <del style={{ color: "#7c7c7c" }}>£749.00</del>{" "}
                          </p>
                        </a>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                      </div>
                    </div>
                  </div>
                </div>

          </div>

          <div className="container">
          <div
                  className="row "
                  style={{ marginTop: "86px", marginLeft: "-30px" }}
                >
                  
                  <div
                    className="col-md-3"
                    style={{ position: "relative", left: "10px" }}
                  >
                    <div class="card" style={{ width: "19rem" }}>
                      <a href="" style={{ textDecoration: "none" }}>
                        <Image width={400} height={300}
                          class="card-img-top"
                          src="/assets/images/linenproduct/divan-grey-pic-new-1 (1).jpg"
                          alt="Card image cap"
                        />
                      </a>
                      <div
                        class="card-body cardTxt"
                        style={{ paddingleft: "18px" }}
                      >
                        <h6 class="card-title  card-hoverText">
                          {" "}
                          <b> Olivier Fabric Ottoman Bed </b>
                        </h6>
                        <p class="card-text ">
                          <img
                            src="/assets/images/banner/Group 429.png"
                            alt=""
                          />
                        </p>
                        <a href="#" style={{ textDecoration: "none" }}>
                          <p className="card-text" style={{ fontSize: "19px" }}>
                            {" "}
                            <b> £400.00 </b>
                            <del style={{ color: "#7c7c7c" }}>£749.00</del>{" "}
                          </p>
                        </a>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-3"
                    style={{ position: "relative", left: "20px" }}
                  >
                    <div class="card" style={{ width: "19rem" }}>
                      <a href="" style={{ textDecoration: "none" }}>
                        <Image width={400} height={300}
                          class="card-img-top"
                          src="/assets/images/linenproduct/blue.jpg"
                          alt="Card image cap"
                        />
                      </a>
                      <div
                        class="card-body cardTxt"
                        style={{ paddingleft: "18px" }}
                      >
                        <h6 class="card-title  card-hoverText">
                          {" "}
                          <b> Olivier Fabric Ottoman Bed </b>
                        </h6>
                        <p class="card-text ">
                          <img
                            src="/assets/images/banner/Group 429.png"
                            alt=""
                          />
                        </p>
                        <a href="#" style={{ textDecoration: "none" }}>
                          <p className="card-text" style={{ fontSize: "19px" }}>
                            {" "}
                            <b> £400.00 </b>
                            <del style={{ color: "#7c7c7c" }}>£749.00</del>{" "}
                          </p>
                        </a>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-3"
                    style={{ position: "relative", left: "20px" }}
                  >
                    <div class="card" style={{ width: "19rem" }}>
                      <a href="" style={{ textDecoration: "none" }}>
                        <Image width={400} height={300}
                          class="card-img-top"
                          src="/assets/images/linenproduct/bed1-min-768x511.png"
                          alt="Card image cap"
                        />
                      </a>
                      <div
                        class="card-body cardTxt"
                        style={{ paddingleft: "18px" }}
                      >
                        <h6 class="card-title  card-hoverText">
                          {" "}
                          <b> Olivier Fabric Ottoman Bed </b>
                        </h6>
                        <p class="card-text ">
                          <img
                            src="/assets/images/banner/Group 429.png"
                            alt=""
                          />
                        </p>
                        <a href="#" style={{ textDecoration: "none" }}>
                          <p className="card-text" style={{ fontSize: "19px" }}>
                            {" "}
                            <b> £400.00 </b>
                            <del style={{ color: "#7c7c7c" }}>£749.00</del>{" "}
                          </p>
                        </a>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-3"
                    style={{ position: "relative", left: "20px" }}
                  >
                    <div class="card" style={{ width: "19rem" }}>
                      <a href="" style={{ textDecoration: "none" }}>
                        <Image width={400} height={300}
                          class="card-img-top"
                          src="/assets/images/linenproduct/08C93201-9373-4B56-9C8B-AF2CE115A7A4-768x536.jpeg"
                          alt="Card image cap"
                        />
                      </a>
                      <div
                        class="card-body cardTxt"
                        style={{ paddingleft: "18px" }}
                      >
                        <h6 class="card-title  card-hoverText">
                          {" "}
                          <b> Olivier Fabric Ottoman Bed </b>
                        </h6>
                        <p class="card-text ">
                          <img
                            src="/assets/images/banner/Group 429.png"
                            alt=""
                          />
                        </p>
                        <a href="#" style={{ textDecoration: "none" }}>
                          <p className="card-text" style={{ fontSize: "19px" }}>
                            {" "}
                            <b> £400.00 </b>
                            <del style={{ color: "#7c7c7c" }}>£749.00</del>{" "}
                          </p>
                        </a>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                      </div>
                    </div>
                  </div>
                </div>

          </div>


          <div className="container">
              <div className="row text-center ">
                  <h2 className="font-weight-bold mt-6" style={{color:"#0e3f70"}}>What is a linen fabric divan Bed?</h2>
                  <p className="mt-4" style={{fontSize:"18px"}}>When it comes to buying a new bed, a linen fabric divan bed is one of the best choices out there. These box-shaped beds are simple but incredibly practical. A divan bed set consists of a specially designed, firm base and a matching mattress.

The sturdy frame is covered in fabric for an aesthetically pleasing appearance and the bed is usually mounted on castor wheels or you can choose chrome gliders if you have wood or laminate flooring.</p>

              </div>

          </div>

          <div className="container">
              <div className="row text-center ">
                  <h2 className="font-weight-bold mt-6" style={{color:"#0e3f70"}}>Finding the right mattress type for your divan bed</h2>
                  <p className="mt-4" style={{fontSize:"18px"}}>The divan base and the mattress are designed to be used in conjunction with each other to provide comfort and good-quality sleep.

You can also choose which type of mattress you want that will suit you and your sleep pattern. Our beds come with a variety of options, choose from the orthopaedic, pocket, or pillow-top range. 

If you prefer a medium or soft mattress, our orthopaedic or pocket mattresses would be the ideal choice. If you like your mattress to be harder, the pillow top range would be the one for you.</p>

              </div>

          </div>

          <div className="container">
              <div className="row text-center ">
                  <h2 className="font-weight-bold mt-6" style={{color:"#0e3f70"}}>Is the standard option a spring mattress?</h2>
                  <p className="mt-4" style={{fontSize:"18px"}}>These days you have more options than just a spring mattress. Generally, you can use any style with a divan bed, however, some designer brands require a sprung edge base.

Sprung edge divans have springs integrated into the base. These springs act as a giant shock absorber and are very luxurious, taking pressure off the mattress.</p>

              </div>

          </div>

          <div className="container">
              <div className="row text-center ">
                  <h2 className="font-weight-bold mt-6" style={{color:"#0e3f70"}}>Which mattress size is best suited to a Divan base?</h2>
                  <p className="mt-4" style={{fontSize:"18px"}}>This depends on which size base you choose. For example, if you have a king size base you wouldn’t buy a single size mattress as it would be far too small.

Another advantage to divans is that they don’t take up too much space as the bed is only as wide as its mattress.</p>

              </div>

          </div>

          {/* Product End */}
          <br/>
          <br/>
          <Review/>
          <br/>
          <br/>
          <Footer/>


        </div>
    )
}
export default Linenfabric;