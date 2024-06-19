import React from 'react';
import { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./home.css";

const Home = () => {

  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (button) => {
    setActiveButton(button);
  };
  return (
    <div>
      <div style={{ width: '100%', height: 'auto' }}>
        <img src="/bg.png" alt="background image" className="w-100" />
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
          <p className="text-center fs-20 fw-400">PRODUCT PORTFOLIO</p>
          <div className="col-md-10 text-center fs-22 fw-500 pb-5">
            <p className="fs-18 fw-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <span className="text-orange">Molestias deserunt</span> dicta dolorem laborum non quaerat iusto voluptas amet voluptates vel, culpa autem. Tenetur expedita voluptatum nihil quibusdam maiores! Vel, fugit?
            </p>
          </div>

          <div className="col-md-10 pt-5">
            <div style={{ position: 'relative' }}>
              <div className="border_circle"></div>
              <div style={{ left: '0%', display: 'flex', position: 'absolute', justifyContent: 'space-around', width: '100%', top: '-21%' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8.5%', width: '100%' }}>
                  <div className='boxStyle'>
                    <div>
                      <img src="/first.png" style={{ width: '35%' }} alt="Civil & Fixtures" />
                    </div>
                    <div>Civil & <br /> Fixtures</div>
                  </div>
                  <div className='boxStyle'></div>
                  <div className='boxStyleLarge'>
                    <div><img src="/fan.png" style={{ width: '100%' }} alt="HVAC" /></div>
                    <div>HVAC</div>
                  </div>
                  <div className='boxStyle'></div>
                  <div className='boxStyle'></div>
                </div>
              </div>
              <div style={{ left: '0%', display: 'flex', position: 'absolute', justifyContent: 'space-around', width: '100%', bottom: '-18%' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '6%', width: '100%' }}>
                  <div className='boxStyle'>
                    <div><img src="/first.png" style={{ width: '35%' }} alt="Fire Fighting" /></div>
                    <div>Fire Fighting</div>
                  </div>
                  <div className='boxStyle'>
                    <div><img src="/first.png" style={{ width: '35%' }} alt="Water" /></div>
                    <div>Water <br /></div>
                  </div>
                  <div className='boxStyle'>
                    <div><img src="/first.png" style={{ width: '35%' }} alt="Water Distribution" /></div>
                    <div>Water <br /> Distribution</div>
                  </div>
                  <div className='boxStyle'>
                    <div><img src="/first.png" style={{ width: '35%' }} alt="Boiler & Steam" /></div>
                    <div>Boiler & Steam</div>
                  </div>
                  <div className='boxStyle'>
                    <div><img src="/first.png" style={{ width: '35%' }} alt="HSD System" /></div>
                    <div>HSD System</div>
                  </div>
                  <div className='boxStyle'>
                    <div><img src="/first.png" style={{ width: '35%' }} alt="Compressed Air System" /></div>
                    <div>Compressed <br /> Air System</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="row m-0 justify-content-center pt-5 pb-5">
          <p className="text-center fs-20 fw-500">ABOUT US</p>
          <h2 className="text-center">TRP: Your <span className="text-orange">One-Stop Solution</span> for Procurement Excellence</h2>
          <div className="col-md-10 text-center fs-22 fw-500 pb-5">
            <p className="fs-18 fw-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <span className="text-orange">Molestias deserunt</span> dicta dolorem laborum non quaerat iusto voluptas amet voluptates vel, culpa autem. Tenetur expedita voluptatum nihil quibusdam maiores! Vel, fugit?
            </p>
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

              <div className="row m-0 justify-content-center pt-5 pb-5">
          <p className="text-center fs-20 fw-500">WHY DO YOU NEED US</p>
          <div className='col-md-10'>
          <h2 className="text-center">Discover the essential reasons <span className="text-orange"> why TRP </span>is indispensable for your bussiness.</h2>
          </div>
          </div>

<div className='tabs'>
  <div className='buy_vende_btn'>
    <div>
    <button
          className={`tab_btns ${activeButton === 'buyer' ? 'clicked' : ''}`}
          onClick={() => handleClick('buyer')}
        >
          Buyer
        </button>
    </div>
    <div>
    <button
          className={`tab_btns ${activeButton === 'vendor' ? 'clicked' : ''}`}
          onClick={() => handleClick('vendor')}
        >
          Vendor
        </button>
    </div>
  </div>
</div>






        </div>
      </div>
    </div>


  );
}

export default Home;
