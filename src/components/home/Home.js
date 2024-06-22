import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./home.css";

const Home = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div>
      <div style={{ width: '100%', height: 'auto' }}>
        <img src="/bgimages.png" alt="background image" className="w-100" />
      </div>

      <div style={{ width: '100%', height: 'auto' }}>
        <div className="row m-0">
          <div className="bg-orange d-flex justify-content-center">
            <div className="col-md-10 d-flex justify-content-center text-center pt-4 pb-4">
              <div className="col-md-3">
                <div>
                  <p className="fw-700 fs-30 mb-0">250+ Cr</p>
                  <p className="fw-500 fs-18">Material Estimated</p>
                </div>
              </div>
              <div className="col-md-3">
                <div>
                  <p className="fw-700 fs-30 mb-0">1980+</p>
                  <p className="fw-500 fs-18">PAN India Vendors</p>
                </div>
              </div>
              <div className="col-md-3">
                <div>
                  <p className="fw-700 fs-30 mb-0">1024+</p>
                  <p className="fw-500 fs-18">Projects Estimated</p>
                </div>
              </div>
              <div className="col-md-3">
                <div>
                  <p className="fw-700 fs-30 mb-0">900+</p>
                  <p className="fw-500 fs-18">Locations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* Product Portfolio Section */}
        <div className="row m-0 justify-content-center pt-5 pb-5">
          <p className="text-center fs-20 fw-500">PRODUCT PORTFOLIO</p>
          <div className="col-md-10 text-center fs-22 fw-500 pb-5">
            <h2 class="text-center fs-30 fw-500">Discover our vast range of <span class="text-orange fs-30 fw-700"> quality construction materials </span> , tailored to meet all your project needs.</h2>
          </div>

          <div className="col-md-10 pt-5">
            <div style={{ position: 'relative' }}>
              <div className="border_circle"></div>

              <div style={{ position: 'absolute', top: "-20%", width: "100%", left: "-3%" }}>
                <div className='divss2'>
                  <div className=''>
                    <div className='boxStyle'>
                      <div><img src="/first.png" style={{ width: '60%' }} alt="Fire Fighting" /></div>
                      <div><p className='fs-13 fw-600 pt-1'> Civil & <br></br> Interiors </p></div>
                    </div>

                  </div>
                  <div className=''>
                    <div className='boxStyle'>
                      <div><img src="/eigth.png" style={{ width: '60%' }} alt="Fire Fighting" /></div>
                      <div><p className='fs-13 fw-600 pt-1'> Electrical </p></div>
                    </div>

                  </div>
                  <div className=''>
                    <div className='boxStyleLarge'>
                      <div><img src="/fan.png" style={{ width: '60%' }} alt="Fire Fighting" /></div>
                      <div><p className='fs-13 fw-600 pt-1'> HVAC </p></div>
                    </div>

                  </div>
                  <div className=''>
                    <div className='boxStyle'>
                      <div><img src="/seventh.png" style={{ width: '60%' }} alt="Fire Fighting" /></div>
                      <div><p className='fs-13 fw-600 pt-1'> Plumbing & <br></br> Sanitary </p></div>
                    </div>

                  </div>
                  <div className=''>
                    <div className='boxStyle'>
                      <div><img src="/sixth.png" style={{ width: '60%' }} alt="Fire Fighting" /></div>
                      <div><p className='fs-13 fw-600 pt-1'> Water <br></br> Treatment </p></div>
                    </div>

                  </div>
                </div>
              </div>

              <div style={{ position: 'absolute', top: "80%", width: "100%", left: "-3%" }}>
                <div className='divss'>
                  <div className=''>
                    <div className='boxStyle'>
                      <div><img src="/fifth.png" style={{ width: '60%' }} alt="Fire Fighting" /></div>
                      <div><p className='fs-13 fw-600 pt-1'> Fire Fighting </p></div>
                    </div>

                  </div>
                  <div className=''>
                    <div className='boxStyle'>
                      <div><img src="/fourth.png" style={{ width: '60%' }} alt="Fire Fighting" /></div>
                      <div><p className='fs-13 fw-600 pt-1'> Water <br></br> Distribution </p></div>
                    </div>

                  </div>
                  <div className=''>
                    <div className='boxStyle'>
                      <div><img src="/third.png" style={{ width: '60%' }} alt="Fire Fighting" /></div>
                      <div><p className='fs-13 fw-600 pt-1'> Boiler & Steam </p></div>
                    </div>

                  </div>
                  <div className=''>
                    <div className='boxStyle'>
                      <div><img src="/second.png" style={{ width: '60%' }} alt="Fire Fighting" /></div>
                      <div><p className='fs-13 fw-600 pt-1' style={{ lineHeight: "18px" }}> Construcation<br></br>equipment &<br></br>Safety Gear </p></div>
                    </div>

                  </div>
                  <div className=''>
                    <div className='boxStyle'>
                      <div><img src="/thenth.png" style={{ width: '60%' }} alt="Fire Fighting" /></div>
                      <div><p className='fs-13 fw-600 pt-1'> HSD System </p></div>
                    </div>

                  </div>
                  <div className=''>
                    <div className='boxStyle'>
                      <div><img src="/ninth.png" style={{ width: '60%' }} alt="Fire Fighting" /></div>
                      <div><p className='fs-13 fw-600 pt-1'> Compressed <br></br> Air System </p></div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="row m-0 justify-content-center pt-5 pb-5">
          <p className="text-center fs-20 fw-500">ABOUT US</p>
          <h2 className="text-center fs-30 fw-500">TRP: Your <span className="text-orange fw-700 fs-30">One-Stop Solution</span> for Procurement Excellence</h2>
          <div className="col-md-10 text-center fs-22 fw-500 pb-4">
            <p className="fs-16 fw-400">
              At TRP, we streamline the procurement process, making it efficient. Our platform connects buyers with a vast array of products, ensuring that you always find the right materials at competitive prices. For sellers, we provide access to a wide market, helping you reach new customers and expand your business.</p>
          </div>

          <div className="row m-0 justify-content-center">
            <div className="col-md-10 text-center pt-4 pb-4" style={{ backgroundColor: '#ffd798', borderRadius: '20px' }}>
              <div className="row m-0">
                <div className="col-md-3" style={{ position: 'relative' }}>
                  <div>
                    <div className="details_text_box mt-3">
                      <img src="/group4.png" alt="EPC Companies" style={{ width: '20%' }} />
                      <div className="text-start">EPC Companies</div>
                    </div>
                    <div className="details_text_box">
                      <img src="/group3.png" alt="Manufacturing Companies" style={{ width: '20%' }} />
                      <div className="text-start">Manufacturing <br /> Companies</div>
                    </div>
                    <div className="details_text_box">
                      <img src="/griup2.png" alt="Contractors" style={{ width: '20%' }} />
                      <div className="text-start">Contractors</div>
                    </div>
                    <div className="details_text_box">
                      <img src="/group.png" alt="End Users" style={{ width: '20%' }} />
                      <div className="text-start">End Users</div>
                    </div>
                  </div>
                  <div style={{ position: 'absolute', top: "13%", left: "95%" }}>
                    <div style={{ position: 'absolute', top: "0%", left: "100%" }}>
                      <div className=''>
                        <div className='underline2'></div>
                      </div>
                    </div>
                    <div className='underline_parent'>
                      <div className="underline"></div>
                      <div className="underline"></div>
                      <div className="underline"></div>
                      <div className="underline"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div style={{ position: 'relative', top: "50%", left: "5%" }}>
                    <div className=''>
                      <div className='underline3'></div>
                    </div>
                    <div style={{ position: 'relative', top: "50%", left: "0%" }}>
                      <div className='row m-0 justify-content-center'>
                        <div className='absolute_div'>
                          <div className='col-md-4'>
                            <div className='new_div'>
                              <div className='buyer_text'>
                                <p>Buyer</p>
                              </div>
                              <div className='new_div_child'>
                                <img src="/person.png" alt='person' />
                              </div>
                            </div>
                          </div>
                          <div className='col-md-4'>
                            <div className='circle'>
                              <div>
                                <img src="/logohasmukh.png" alt='person' className='w-100' />
                              </div>
                            </div>
                          </div>
                          <div className='col-md-4'>
                            <div className='new_div'>
                              <div className='buyer_text'>
                                <p>Seller</p>
                              </div>
                              <div className='new_div_child2'>
                                <img src="/person.png" alt='person' />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3" style={{ position: 'relative' }}>
                  <div>
                    <div className="details_text_box mt-3">
                      <img src="/group7.png" alt="EPC Companies" style={{ width: '20%' }} />
                      <div className="text-start">MSME Manufacturers</div>
                    </div>
                    <div className="details_text_box">
                      <img src="/group8.png" alt="Manufacturing Companies" style={{ width: '20%' }} />
                      <div className="text-start">Distributers <br /> Wholesalers</div>
                    </div>
                    <div className="details_text_box">
                      <img src="/group9.png" alt="Contractors" style={{ width: '20%' }} />
                      <div className="text-start">OEM Companies</div>
                    </div>
                    <div className="details_text_box">
                      <img src="/group10.png" alt="End Users" style={{ width: '20%' }} />
                      <div className="text-start">Traders</div>
                    </div>
                  </div>
                  <div style={{ position: 'absolute', top: "13%", left: "-13%" }}>
                    <div style={{ position: 'absolute', top: "0%", left: "0%" }}>
                      <div className=''>
                        <div className='underline2'></div>
                      </div>
                    </div>
                    <div className='underline_parent'>
                      <div className="underline"></div>
                      <div className="underline"></div>
                      <div className="underline"></div>
                      <div className="underline"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className='button_div pt-5'>
            <button className='navbar_Btn cp bg-orange'>Know More</button>
          </div>

          <div className="row m-0 justify-content-center pt-5">
            <p className="text-center fs-20 fw-500">WHY DO YOU NEED US</p>
            <div className='col-md-10'>
              <h2 className="text-center fs-30 fw-500">Discover the essential reasons <span className="text-orange fs-30 fw-700"> why TRP </span>is indispensable for your bussiness.</h2>
            </div>
          </div>


          <div className='row m-0 p-0'>
            <div className='col-md-12 p-0 pt-4'>
              {activeTab === 'tab1' && (
                <div className="tab-content">
                  <div class='row m-0 justify-content-center pt-3 tabs_section'>
                    <div className='tabs pb-4'>
                      <div className='buy_vende_btn'>
                        <div>
                          {/* <button
                      className={`tab_btns ${activeButton === 'buyer' ? 'clicked' : ''}`}
                      onClick={() => handleClick('buyer')}
                    >
                      Buyer
                    </button> */}
                          <button
                            className={`tab_btns ${activeTab === 'tab1' ? 'active' : ''}`}
                            onClick={() => setActiveTab('tab1')}
                          >
                            Buyer
                          </button>
                        </div>
                        <div>
                          {/* <button
                      className={`tab_btns ${activeButton === 'vendor' ? 'clicked' : ''}`}
                      onClick={() => handleClick('vendor')}
                    >
                      Vendor
                    </button> */}
                          <button
                            className={`tab_btns ${activeTab === 'tab2' ? 'active' : ''}`}
                            onClick={() => setActiveTab('tab2')}
                          >
                            Seller
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class='col-md-10 d-flex justify-content-center'>
                      <ul class="nav nav-pills ul_tab" id="pills-tab" role="tablist" style={{ position: "relative" }}>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">EPC Companies</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Manufacturing Companies</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contractors</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="pills-endusers-tab" data-bs-toggle="pill" data-bs-target="#pills-endusers" type="button" role="tab" aria-controls="pills-endusers" aria-selected="false">End Users</button>
                        </li>
                        <div className='paddings_align'>
                          <div className='tab_underline'></div>
                        </div>
                      </ul>
                    </div>
                  </div>

                  <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                      <div className='container'>
                        <div className='row m-0 justify-content-center pt-5'>
                          <div className='col-md-6 text-center'>
                            <img src='./tab1.png' className='img_fluid' alt='tab1 image' />
                          </div>
                          <div className='col-md-6 text-start d-flex align-items-center'>
                            <div>
                              <h2 className='fs-23 fw-800 pb-3'>Complex Supply chain</h2>
                              {/* <p className='fs-16 fw-500'>  */}
                              <div className='d-flex flex-column w-100'>
                                <div className='d-flex gap-3'>
                                  <div><img src='./danger.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'><span className="fs-18 fw-800">Challenge: </span> EPC projects usually involve many different suppliers and subcontractors, which can make managing the supply chain complicated. It's challenging to coordinate and oversee all these different groups.</p>
                                  </div>
                                </div>
                                <div className='d-flex gap-3'>
                                  <div><img src='./trplogo.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'><span className="fs-18 fw-800">TRP Solution: </span> TRP simplifies this process by providing a centralized platform to efficiently coordinate and carryout all procurement activities. With TRP, you can ensure seamless communication, streamlined operations, and effective collaboration among all parties, enhancing project efficiency and reducing logistical challenges.</p>
                                  </div>
                                </div>
                              </div>
                              {/* </p> */}
                              {/* <p className='fs-16 fw-500'><span className="fs-18 fw-800"><span><img src='./trplogo.png' alt='danger image'/></span> TRP Solution: </span>TRP simplifies this process by providing a centralized platform to efficiently coordinate and carryout all procurement activities. With TRP, you can ensure seamless communication, streamlined operations, and effective collaboration among all parties, enhancing project efficiency and reducing logistical challenges.</p> */}
                            </div>
                          </div>
                          <div className='col-md-6 text-start d-flex align-items-center pt-5'>
                            <div>
                              <h2 className='fs-23 fw-800 pb-3'>Vendor Pricing Discrepancies</h2>
                              <div className='d-flex flex-column w-100'>
                                <div className='d-flex gap-3'>
                                  <div><img src='./danger.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'><span className="fs-18 fw-800">Challenge: </span>Negotiating costs becomes challenging when there are discrepancies in pricing among different vendors for similar materials or services.</p>
                                  </div>
                                </div>
                                <div className='d-flex gap-3'>
                                  <div><img src='./trplogo.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'><span className="fs-18 fw-800">TRP Solution: </span> TRP's extensive market reach and direct access to multiple suppliers enable EPC companies to conduct price benchmarking effectively.</p>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                          <div className='col-md-6 text-center pt-5'>
                            <img src='./tab2.png' className='img_fluid' alt='tab1 image' />
                          </div>
                          <div className='col-md-6 text-center pt-5'>
                            <img src='./tab3.png' className='img_fluid' alt='tab1 image' />
                          </div>
                          <div className='col-md-6 text-start d-flex align-items-center pt-5'>
                            <div>
                              <h2 className='fs-23 fw-800 pb-3'>Technology Integration</h2>
                              <div className='d-flex flex-column w-100'>
                                <div className='d-flex gap-3'>
                                  <div><img src='./danger.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'><span className="fs-18 fw-800">Challenge: </span> Incorporating procurement management software and digital platforms requires investment and training but can enhance efficiency and transparency.</p>
                                  </div>
                                </div>
                                <div className='d-flex gap-3'>
                                  <div><img src='./trplogo.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'><span className="fs-18 fw-800">TRP Solution: </span> The TRP technology platform, ProcureRight, enables EPC companies to effectively monitor their ongoing inquiries, access historical procurement data, and manage estimations.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                      <div className='container'>
                        <div className='row m-0 justify-content-center pt-5'>
                          <div className='col-md-6 text-center'>
                            <img src='./tab4.png' className='img_fluid' alt='tab1 image' />
                          </div>
                          <div className='col-md-6 text-start d-flex align-items-center'>
                            <div>
                              <h2 className='fs-23 fw-800 pb-3'>Frequent Creation of Vendor Codes</h2>
                              <div className='d-flex flex-column w-100'>
                                <div className='d-flex gap-3'>
                                  <div><img src='./danger.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'><span className="fs-18 fw-800">Challenge: </span> Manufacturing companies face the challenge of creating new vendor codes for every purchase, leading to increased administrative burden and complexity. This process is time-consuming and inefficient.</p>
                                  </div>
                                </div>
                                <div className='d-flex gap-3'>
                                  <div><img src='./trplogo.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'><span className="fs-18 fw-800">TRP Solution: </span> Onboarding TRP, you gain indirect access to a comprehensive network of over 3000 pre-vetted vendors, all conveniently gathered in one location. This centralized platform caters to your diverse requirements, ultimately saving you valuable time and effort in your procurement process.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-md-6 text-start d-flex align-items-center pt-5'>
                            <div>
                              <h2 className='fs-23 fw-800 pb-3'>Streamlining Utility Procurements</h2>
                              <div className='d-flex flex-column w-100'>
                                <div className='d-flex gap-3'>
                                  <div><img src='./danger.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'><span className="fs-18 fw-800">Challenge: </span> Manufacturing companies invest in both Capital Expenditure (CapEx) and Operational Expenditure (OpEx) to meet their plant requirements, which may involve purchasing new materials or upgrading existing technology.</p>
                                  </div>
                                </div>
                                <div className='d-flex gap-3'>
                                  <div><img src='./trplogo.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'><span className="fs-18 fw-800">TRP Solution: </span> TRP offers assistance in procuring all necessary materials for utility needs.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-md-6 text-center pt-5'>
                            <img src='./tab5.png' className='img_fluid' alt='tab1 image' />
                          </div>
                          <div className='col-md-6 text-center pt-5'>
                            <img src='./tab6.png' className='img_fluid' alt='tab1 image' />
                          </div>
                          <div className='col-md-6 text-start d-flex align-items-center pt-5'>
                            <div>
                              <h2 className='fs-23 fw-800 pb-3'>Optimizing Procurement Amid MOQ Challenges</h2>
                              <div className='d-flex flex-column w-100'>
                                <div className='d-flex gap-3'>
                                  <div><img src='./danger.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'><span className="fs-18 fw-800">Challenge: </span> Suppliers often expect MOQs (Minimum Order Quantities) against client requirements. However, these requirements may not align with the buyer's needs, leading to excess inventory or higher costs for smaller orders.</p>
                                  </div>
                                </div>
                                <div className='d-flex gap-3'>
                                  <div><img src='./trplogo.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'><span className="fs-18 fw-800">TRP Solution: </span> TRP’s platform simplifies vendor management, allowing you to efficiently handle all transactions and relationships from one central hub.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                      <div className='container'>
                        <div className='row m-0 justify-content-center pt-5'>
                          <div className='col-md-6 text-center'>
                            <img src='./tab7.png' className='img_fluid' alt='tab1 image' />
                          </div>
                          <div className='col-md-6 text-start d-flex align-items-center'>
                            <div>
                              <h2 className='fs-23 fw-800 pb-3'>Digitization Challenges in Construction Procurement</h2>
                              <div className='d-flex flex-column w-100'>
                                <div className='d-flex gap-3'>
                                  <div><img src='./danger.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'> <span className="fs-18 fw-800"> Challenge: </span> In the construction industry, many contractors still rely on traditional manual procurement methods, such as sending RFQs via platforms like WhatsApp or email and manually tracking follow-ups. This repetitive process lacks the benefits of historical purchase data, hindering efficiency and productivity.</p>
                                  </div>
                                </div>
                                <div className='d-flex gap-3'>
                                  <div><img src='./trplogo.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'><span className="fs-18 fw-800"> TRP Solution: </span> The TRP technology platform, ProcureRight, enables clients to centralize their procurements, including handling estimates, purchase requisitions, and more, all within one user-friendly platform.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-md-6 text-start d-flex align-items-center pt-5'>
                            <div>
                              <h2 className='fs-23 fw-800 pb-3'>Geographical Constraints</h2>
                              <div className='d-flex flex-column w-100'>
                                <div className='d-flex gap-3'>
                                  <div><img src='./danger.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'> <span className="fs-18 fw-800"> Challenge: </span> Sourcing materials across different regions can be difficult and time-consuming </p>
                                  </div>
                                </div>
                                <div className='d-flex gap-3'>
                                  <div><img src='./trplogo.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'><span className="fs-18 fw-800"> TRP Solution: </span> TRP supplies materials on a pan-India basis, ensuring you can access the products you need, regardless of your location.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-md-6 text-center pt-5'>
                            <img src='./tab8.png' className='img_fluid' alt='tab1 image' />
                          </div>
                          <div className='col-md-6 text-center pt-5'>
                            <img src='./tab9.png' className='img_fluid' alt='tab1 image' />
                          </div>
                          <div className='col-md-6 text-start d-flex align-items-center pt-5'>
                            <div>
                              <h2 className='fs-23 fw-800 pb-3'>High Costs of Specialized Resources</h2>
                              <div className='d-flex flex-column w-100'>
                                <div className='d-flex gap-3'>
                                  <div><img src='./danger.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'> <span className="fs-18 fw-800"> Challenge: </span> Employing specialized procurement resources can be expensive for MSME contractors.</p>
                                  </div>
                                </div>
                                <div className='d-flex gap-3'>
                                  <div><img src='./trplogo.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'><span className="fs-18 fw-800"> TRP Solution: </span> With TRP managing procurement, clients can streamline the process by sharing their project BOQs. TRP takes over from there, reducing overhead and ensuring efficient purchasing.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="pills-endusers" role="tabpanel" aria-labelledby="pills-endusers-tab">
                      <div className='container'>
                        <div className='row m-0 justify-content-center pt-5'>
                          <div className='col-md-6 text-center'>
                            <img src='./tab10.png' className='img_fluid' alt='tab1 image' />
                          </div>
                          <div className='col-md-6 text-start d-flex align-items-center'>
                            <div>
                              <h2 className='fs-23 fw-800 pb-3'>Lack of Product Understanding</h2>
                              <div className='d-flex flex-column w-100'>
                                <div className='d-flex gap-3'>
                                  <div><img src='./danger.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'> <span className="fs-18 fw-800"> Challenge: </span>End users often struggle with understanding the specifications and suitability of various construction materials.</p>
                                  </div>
                                </div>
                                <div className='d-flex gap-3'>
                                  <div><img src='./trplogo.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'><span className="fs-18 fw-800"> TRP Solution: </span>TRP offers comprehensive product specifications for every inquiry, empowering end users to make informed decisions and select the ideal materials for their requirements.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-md-6 text-start d-flex align-items-center pt-5'>
                            <div>
                              <h2 className='fs-23 fw-800 pb-3'>Limited Market Reach</h2>
                              <div className='d-flex flex-column w-100'>
                                <div className='d-flex gap-3'>
                                  <div><img src='./danger.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'> <span className="fs-18 fw-800"> Challenge: </span> Conducting market research to find the best products and prices can be time-consuming and overwhelming for clients not related to construction industry</p>
                                  </div>
                                </div>
                                <div className='d-flex gap-3'>
                                  <div><img src='./trplogo.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'><span className="fs-18 fw-800"> TRP Solution: </span> TRP simplifies this process by offering a wide range of products from trusted vendors, all in one place, making it easy to compare and choose the best options.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-md-6 text-center pt-5'>
                            <img src='./tab11.png' className='img_fluid' alt='tab1 image' />
                          </div>
                          <div className='col-md-6 text-center pt-5'>
                            <img src='./tab12.png' className='img_fluid' alt='tab1 image' />
                          </div>
                          <div className='col-md-6 text-start d-flex align-items-center pt-5'>
                            <div>
                              <h2 className='fs-23 fw-800 pb-3'>No Cost Benchmarking</h2>
                              <div className='d-flex flex-column w-100'>
                                <div className='d-flex gap-3'>
                                  <div><img src='./danger.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'> <span className="fs-18 fw-800"> Challenge: </span> Without cost benchmarks, end users may overpay for materials or struggle to stay within budget.</p>
                                  </div>
                                </div>
                                <div className='d-flex gap-3'>
                                  <div><img src='./trplogo.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'><span className="fs-18 fw-800"> TRP Solution: </span> TRP provides competitive pricing and cost benchmarks, helping you stay within budget and get the best value for your money.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'tab2' && (
                <div className="tab-content">
                  <div class='row m-0 justify-content-center pt-3 tabs_section'>
                    <div className='tabs pb-4'>
                      <div className='buy_vende_btn'>
                        <div>
                          {/* <button
                      className={`tab_btns ${activeButton === 'buyer' ? 'clicked' : ''}`}
                      onClick={() => handleClick('buyer')}
                    >
                      Buyer
                    </button> */}
                          <button
                            className={`tab_btns ${activeTab === 'tab1' ? 'active' : ''}`}
                            onClick={() => setActiveTab('tab1')}
                          >
                            Buyer
                          </button>
                        </div>
                        <div>
                          {/* <button
                      className={`tab_btns ${activeButton === 'vendor' ? 'clicked' : ''}`}
                      onClick={() => handleClick('vendor')}
                    >
                      Vendor
                    </button> */}
                          <button
                            className={`tab_btns ${activeTab === 'tab2' ? 'active' : ''}`}
                            onClick={() => setActiveTab('tab2')}
                          >
                            Seller
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class='col-md-10 d-flex justify-content-center'>
                      <ul class="nav nav-pills ul_tab" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">MSME Manufacturers</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Distributers & Wholesalers</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">OEM Companies</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="pills-endusers-tab" data-bs-toggle="pill" data-bs-target="#pills-endusers" type="button" role="tab" aria-controls="pills-endusers" aria-selected="false">Traders</button>
                        </li>
                        <div className='paddings_align'>
                          <div className='tab_underline2'></div>
                        </div>
                      </ul>
                    </div>
                  </div>
                  <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                      <div className='container'>
                        <div className='row m-0 justify-content-center pt-5'>
                          <div className='col-md-6 text-center'>
                            <img src='./tab13.png' className='img_fluid' alt='tab1 image' />
                          </div>
                          <div className='col-md-6 text-start d-flex align-items-center'>
                            <div>
                              <h2 className='fs-23 fw-800 pb-3'>Limited Sales Team</h2>
                              <div className='d-flex flex-column w-100'>
                                <div className='d-flex gap-3'>
                                  <div><img src='./danger.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'> <span className="fs-18 fw-800"> Challenge: </span> MSME manufacturers often have small sales teams, making it difficult to reach a broad customer base and generate significant sales.</p>
                                  </div>
                                </div>
                                <div className='d-flex gap-3'>
                                  <div><img src='./trplogo.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'><span className="fs-18 fw-800"> TRP Solution: </span> TRP connects you with a vast network of buyers, expanding your reach and driving sales without the need for a large sales team.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-md-6 text-start d-flex align-items-center pt-5'>
                            <div>
                              <h2 className='fs-23 fw-800 pb-3'>Limited  Brand Visibility</h2>
                              <div className='d-flex flex-column w-100'>
                                <div className='d-flex gap-3'>
                                  <div><img src='./danger.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'> <span className="fs-18 fw-800"> Challenge: </span> Building brand visibility in a competitive market can be challenging for MSME manufacturers with limited resources.</p>
                                  </div>
                                </div>
                                <div className='d-flex gap-3'>
                                  <div><img src='./trplogo.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'><span className="fs-18 fw-800"> TRP Solution: </span> TRP provides a platform to present your products to a wider audience, enhancing brand visibility and helping you stand out in the market.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-md-6 text-center pt-5'>
                            <img src='./tab14.png' className='img_fluid' alt='tab1 image' />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                      <div className='container'>
                        <div className='row m-0 justify-content-center pt-5'>
                          <div className='col-md-6 text-center'>
                            <img src='./tab15.png' className='img_fluid' alt='tab1 image' />
                          </div>
                          <div className='col-md-6 text-start d-flex align-items-center'>
                            <div>
                              <h2 className='fs-23 fw-800 pb-3'>Geographical Constraints</h2>
                              <div className='d-flex flex-column w-100'>
                                <div className='d-flex gap-3'>
                                  <div><img src='./danger.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'> <span className="fs-18 fw-800"> Challenge: </span> Distributors and wholesalers often face limitations in expanding their market reach due to geographical constraints.</p>
                                  </div>
                                </div>
                                <div className='d-flex gap-3'>
                                  <div><img src='./trplogo.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'><span className="fs-18 fw-800"> TRP Solution: </span> TRP offers a pan-India platform, enabling you to reach customers across the country and expand your market without geographical limitations.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-md-6 text-start d-flex align-items-center pt-5'>
                            <div>
                              <h2 className='fs-23 fw-800 pb-3'>Streamlining Utility Procurements</h2>
                              <div className='d-flex flex-column w-100'>
                                <div className='d-flex gap-3'>
                                  <div><img src='./danger.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'> <span className="fs-18 fw-800"> Challenge: </span> Managing a complex supply chain can lead to inefficiencies and increased operational costs.</p>
                                  </div>
                                </div>
                                <div className='d-flex gap-3'>
                                  <div><img src='./trplogo.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'><span className="fs-18 fw-800"> TRP Solution: </span> TRP streamlines the supply chain process by connecting you with a wide network of buyers and suppliers, ensuring smooth and efficient operations.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-md-6 text-center pt-5'>
                            <img src='./tab16.png' className='img_fluid' alt='tab1 image' />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                      <div className='container'>
                        <div className='row m-0 justify-content-center pt-5'>
                          <div className='col-md-6 text-center'>
                            <img src='./tab17.png' className='img_fluid' alt='tab1 image' />
                          </div>
                          <div className='col-md-6 text-start d-flex align-items-center'>
                            <div>
                              <h2 className='fs-23 fw-800 pb-3'>Focus on Key Accounts</h2>
                              <div className='d-flex flex-column w-100'>
                                <div className='d-flex gap-3'>
                                  <div><img src='./danger.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'> <span className="fs-18 fw-800"> Challenge: </span> OEM companies face challenges in directly reaching all potential accounts, leaving a significant portion of the market untapped.</p>
                                  </div>
                                </div>
                                <div className='d-flex gap-3'>
                                  <div><img src='./trplogo.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'><span className="fs-18 fw-800"> TRP Solution: </span> TRP aggregates requirements from multiple buyers and presents these inquiries to OEMs, thereby becoming a key partner for OEM companies.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="pills-endusers" role="tabpanel" aria-labelledby="pills-endusers-tab">
                      <div className='container'>
                        <div className='row m-0 justify-content-center pt-5'>
                          <div className='col-md-6 text-center'>
                            <img src='./tab18.png' className='img_fluid' alt='tab1 image' />
                          </div>
                          <div className='col-md-6 text-start d-flex align-items-center'>
                            <div>
                              <h2 className='fs-23 fw-800 pb-3'>Limited Understanding of Complex Material Specifications</h2>
                              <div className='d-flex flex-column w-100'>
                                <div className='d-flex gap-3'>
                                  <div><img src='./danger.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'> <span className="fs-18 fw-800"> Challenge: </span> Traders often struggle with understanding the intricate details and specifications of various construction and industrial materials, which can lead to incorrect purchasing decisions.</p>
                                  </div>
                                </div>
                                <div className='d-flex gap-3'>
                                  <div><img src='./trplogo.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'><span className="fs-18 fw-800"> TRP Solution: </span> TRP provides comprehensive product information and expert guidance, ensuring you have a clear understanding of material specifications and helping you make informed purchasing decisions.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-md-6 text-start d-flex align-items-center pt-5'>
                            <div>
                              <h2 className='fs-23 fw-800 pb-3'>Supplier Reliability</h2>
                              <div className='d-flex flex-column w-100'>
                                <div className='d-flex gap-3'>
                                  <div><img src='./danger.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'> <span className="fs-18 fw-800"> Challenge: </span> Ensuring the reliability and quality of suppliers can be difficult for traders without established relationships.</p>
                                  </div>
                                </div>
                                <div className='d-flex gap-3'>
                                  <div><img src='./trplogo.png' alt='danger image' className='' /></div>
                                  <div>
                                    <p className='fs-16 fw-500'><span className="fs-18 fw-800"> TRP Solution: </span> TRP connects you with a network of thoroughly vetted and trusted suppliers, ensuring you receive high-quality materials consistently.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-md-6 text-center pt-5'>
                            <img src='./tab19.png' className='img_fluid' alt='tab1 image' />
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}


            </div>
          </div>
          <div>
          </div>



        </div>

        <div style={{ background: "rgb(57 57 57)" }}>
          <div className='main_container'>
            <div className='row m-0 justify-content-center pt-5 pb-5'>
              <div className='col-md-6'>
                <div className='box_background'>
                  <div><p className='fs-30 fw-700'>Procure<span className='text-orange'>Right</span></p></div>
                  <img src='./backgroundimg.png' className='w-100' />
                </div>
              </div>
              <div className='col-md-6 paddings'>
                <h2 className='text-white fs-28 fw-400'>Introducing <span className='fs-30 fw-700'>Procure<span className='text-orange'>Right<span>:</span></span></span> Your Ultimate Procurement Solution</h2>
                <p className='fs-16 fw-500' style={{ color: "#d7d7d7" }}>Welcome to ProcureRight, the innovative buyer and seller portal designed exclusively for TRP users. This portal is customized by professionals in the construction industry aiming to solve  complex procurement problems.</p>
                <div>
                  <p className='para_text mb-0'><span> . </span>  Accurate Product Selection:</p>
                  <p className='para_text2'>Enables clients to buy the right products at the right cost.</p>
                </div>
                <div>
                  <p className='para_text mb-0'> <span> . </span>  Comprehensive Database:</p>
                  <p className='para_text2'>Seamlessly navigate our extensive database of construction materials.</p>
                </div>
                <div className='row m-0'>
                  <div className='col-md-6 p-0'>
                    <p className='mb-0 text-white fs-30 fw-700'> 11000+</p>
                    <p className='fs-14 fw-400 text-white'>Products In Our Library</p>
                  </div>
                  <div className='col-md-6 p-0'>
                    <p className='mb-0 text-white fs-30 fw-700'> 1980+</p>
                    <p className='fs-14 fw-400 text-white'>Pan India Vendors</p>
                  </div>
                  <div className='col-md-6 p-0'>
                    <p className='mb-0 text-white fs-30 fw-700'> 1024+</p>
                    <p className='fs-14 fw-400 text-white'>Projects Estimated</p>
                  </div>
                  <div className='col-md-6 p-0'>
                    <p className='mb-0 text-white fs-30 fw-700'> 900+</p>
                    <p className='fs-14 fw-400 text-white'>Locations Catered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row m-0 justify-content-center pt-5 pb-5">
          <p className="text-center fs-20 fw-500">Sectors</p>
          <h2 className="text-center fs-30 fw-500">TRP is catering to <span className="text-orange fs-30 fw-700">diverse sectors</span> with its sector agnostic approach.</h2>
          <div className="col-md-10 text-center fs-22 fw-500 pb-3">
            <p className="fs-16 fw-400">
              Dive into TRP's expansive network catering to various architectural sectors, ensuring quality materials for diverse projects. Experience our tailored procurement solutions designed to meet the unique needs of each sector, delivering excellence every step of the way.
            </p>
          </div>

<div className='container'>
  <div className='row m-0 justify-content-center'>
    <div className='col-md-11'>
    <div className="image_anchor2">
          <div style={{position:"relative"}}>
            <img src="/home1.png" alt="Fire Fighting" style={{ width: '100%' }} />
            <div className='home_image_text'><p>Hospitality <span>?</span></p></div>
          </div>
          <div style={{position:"relative"}}>
            <img src="/home2.png" alt="Fire Fighting" style={{ width: '100%' }} />
            <div className='home_image_text'><p>Educational <span>?</span></p></div>
          </div>
          <div style={{position:"relative"}}>
            <img src="/home3.png" alt="Fire Fighting" style={{ width: '100%' }} />
            <div className='home_image_text'><p>Industrial <span>?</span></p></div>
          </div>
          <div style={{position:"relative"}}>
            <img src="/home4.png" alt="Fire Fighting" style={{ width: '100%' }} />
            <div className='home_image_text'><p>Commercial <span>?</span></p></div>
          </div>
          <div style={{position:"relative"}}>
            <img src="/home5.png" alt="Fire Fighting" style={{ width: '100%' }} />
            <div className='home_image_text'><p>Data Centers <span>?</span></p></div>
          </div>
      </div>
      <div className="image_anchor2 pt-4">
      <div style={{position:"relative"}}>
            <img src="/home6.png" alt="Fire Fighting" style={{ width: '100%' }} />
            <div className='home_image_text'><p>Warehouse <span>?</span></p></div>
          </div>
          <div style={{position:"relative"}}>
            <img src="/home7.png" alt="Fire Fighting" style={{ width: '100%' }} />
            <div className='home_image_text'><p>Hospitals <span>?</span></p></div>
          </div>
          <div style={{position:"relative"}}>
            <img src="/home8.png" alt="Fire Fighting" style={{ width: '100%' }} />
            <div className='home_image_text'><p>Residential <span>?</span></p></div>
          </div>
          <div style={{position:"relative"}}>
            <img src="/home9.png" alt="Fire Fighting" style={{ width: '100%' }} />
            <div className='home_image_text'><p>Corporate Office <span>?</span></p></div>
          </div>
          <div style={{position:"relative"}}>
            <img src="/home10.png" alt="Fire Fighting" style={{ width: '100%' }} />
            <div className='home_image_text'><p>Co-working Space <span>?</span></p></div>
          </div>
      </div>

    </div>
  </div>
      </div>

          <div>
          </div>



        </div>


        <div className='main_container'>
          <div className='container-fluid border_radius' style={{ background: "#f5f5f5" }}>
            <div className='row m-0 justify-content-center align-items-center pt-4 pb-4'>
              <div className='col-md-6 paddings'>
                <h2 className='text-black fs-30 fw-500'> Empowering <span className='text-orange fs-33 fw-700'> MSME Vendors </span>: Our Commitment to Growth</h2>
                <p className='mb-0 fs-16 fw-500 text-black'>At TRP, we firmly believe in fostering economic growth and supporting local businesses. That's why we proudly promote Micro, Small, and Medium Enterprises (MSMEs) as part of our procurement strategy. By prioritizing partnerships with MSME vendors, we not only contribute to the development of local economies but also ensure a diverse and sustainable supply chain.</p>
              </div>
              <div className='col-md-6'>
                <div className=''>
                  <img src='./coupleimage.png' className='w-100' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ width: '100%', height: 'auto' }}>
          <div className="row m-0">
            <div className="bg-orange d-flex justify-content-center">
              <div className="col-md-10 d-flex justify-content-center text-center pt-4 pb-4">
                <div className='fs-22 fw-700'>“End the chase with vendors. Let TRP handle all your procurement needs seamlessly.”</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
