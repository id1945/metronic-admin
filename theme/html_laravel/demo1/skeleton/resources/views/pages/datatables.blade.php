{{-- Extends layout --}}
@extends('layout.default')

{{-- Content --}}
@section('content')

    <div class="card card-custom">
        <div class="card-header flex-wrap border-0 pt-6 pb-0">
            <div class="card-title">
                <h3 class="card-label">HTML Table
                    <div class="text-muted pt-2 font-size-sm">Datatable initialized from HTML table</div>
                </h3>
            </div>
            <div class="card-toolbar">
                <!--begin::Dropdown-->
                <div class="dropdown dropdown-inline mr-2">
                    <button type="button" class="btn btn-light-primary font-weight-bolder dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="svg-icon svg-icon-md">
                        <!--begin::Svg Icon | path:assets/media/svg/icons/Design/PenAndRuller.svg-->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect x="0" y="0" width="24" height="24"/>
                                <path d="M3,16 L5,16 C5.55228475,16 6,15.5522847 6,15 C6,14.4477153 5.55228475,14 5,14 L3,14 L3,12 L5,12 C5.55228475,12 6,11.5522847 6,11 C6,10.4477153 5.55228475,10 5,10 L3,10 L3,8 L5,8 C5.55228475,8 6,7.55228475 6,7 C6,6.44771525 5.55228475,6 5,6 L3,6 L3,4 C3,3.44771525 3.44771525,3 4,3 L10,3 C10.5522847,3 11,3.44771525 11,4 L11,19 C11,19.5522847 10.5522847,20 10,20 L4,20 C3.44771525,20 3,19.5522847 3,19 L3,16 Z" fill="#000000" opacity="0.3"/>
                                <path d="M16,3 L19,3 C20.1045695,3 21,3.8954305 21,5 L21,15.2485298 C21,15.7329761 20.8241635,16.200956 20.5051534,16.565539 L17.8762883,19.5699562 C17.6944473,19.7777745 17.378566,19.7988332 17.1707477,19.6169922 C17.1540423,19.602375 17.1383289,19.5866616 17.1237117,19.5699562 L14.4948466,16.565539 C14.1758365,16.200956 14,15.7329761 14,15.2485298 L14,5 C14,3.8954305 14.8954305,3 16,3 Z" fill="#000000"/>
                            </g>
                        </svg>
                        <!--end::Svg Icon-->
                    </span>Export
                    </button>
                    <!--begin::Dropdown Menu-->
                    <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                        <!--begin::Navigation-->
                        <ul class="navi flex-column navi-hover py-2">
                            <li class="navi-header font-weight-bolder text-uppercase font-size-sm text-primary pb-2">Choose an option:</li>
                            <li class="navi-item">
                                <a href="#" class="navi-link">
                                    <span class="navi-icon">
                                        <i class="la la-print"></i>
                                    </span>
                                    <span class="navi-text">Print</span>
                                </a>
                            </li>
                            <li class="navi-item">
                                <a href="#" class="navi-link">
                                    <span class="navi-icon">
                                        <i class="la la-copy"></i>
                                    </span>
                                    <span class="navi-text">Copy</span>
                                </a>
                            </li>
                            <li class="navi-item">
                                <a href="#" class="navi-link">
                                    <span class="navi-icon">
                                        <i class="la la-file-excel-o"></i>
                                    </span>
                                    <span class="navi-text">Excel</span>
                                </a>
                            </li>
                            <li class="navi-item">
                                <a href="#" class="navi-link">
                                    <span class="navi-icon">
                                        <i class="la la-file-text-o"></i>
                                    </span>
                                    <span class="navi-text">CSV</span>
                                </a>
                            </li>
                            <li class="navi-item">
                                <a href="#" class="navi-link">
                                    <span class="navi-icon">
                                        <i class="la la-file-pdf-o"></i>
                                    </span>
                                    <span class="navi-text">PDF</span>
                                </a>
                            </li>
                        </ul>
                        <!--end::Navigation-->
                    </div>
                    <!--end::Dropdown Menu-->
                </div>
                <!--end::Dropdown-->
                <!--begin::Button-->
                <a href="#" class="btn btn-primary font-weight-bolder">
                <span class="svg-icon svg-icon-md">
                    <!--begin::Svg Icon | path:assets/media/svg/icons/Design/Flatten.svg-->
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <rect x="0" y="0" width="24" height="24"/>
                            <circle fill="#000000" cx="9" cy="15" r="6"/>
                            <path d="M8.8012943,7.00241953 C9.83837775,5.20768121 11.7781543,4 14,4 C17.3137085,4 20,6.6862915 20,10 C20,12.2218457 18.7923188,14.1616223 16.9975805,15.1987057 C16.9991904,15.1326658 17,15.0664274 17,15 C17,10.581722 13.418278,7 9,7 C8.93357256,7 8.86733422,7.00080962 8.8012943,7.00241953 Z" fill="#000000" opacity="0.3"/>
                        </g>
                    </svg>
                    <!--end::Svg Icon-->
                </span>New Record</a>
                <!--end::Button-->
            </div>
        </div>

        <div class="card-body">

            <!--begin::Search Form-->
            <div class="mt-2 mb-5 mt-lg-5 mb-lg-10">
                <div class="row align-items-center">
                    <div class="col-lg-9 col-xl-8">
                        <div class="row align-items-center">
                            <div class="col-md-4 my-2 my-md-0">
                                <div class="input-icon">
                                    <input type="text" class="form-control" placeholder="Search..." id="kt_datatable_search_query"/>
                                    <span><i class="flaticon2-search-1 text-muted"></i></span>
                                </div>
                            </div>

                            <div class="col-md-4 my-2 my-md-0">
                                <div class="d-flex align-items-center">
                                    <label class="mr-3 mb-0 d-none d-md-block">Status:</label>
                                    <select class="form-control" id="kt_datatable_search_status">
                                        <option value="">All</option>
                                        <option value="1">Pending</option>
                                        <option value="2">Delivered</option>
                                        <option value="3">Canceled</option>
                                        <option value="4">Success</option>
                                        <option value="5">Info</option>
                                        <option value="6">Danger</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4 my-2 my-md-0">
                                <div class="d-flex align-items-center">
                                    <label class="mr-3 mb-0 d-none d-md-block">Type:</label>
                                    <select class="form-control" id="kt_datatable_search_type">
                                        <option value="">All</option>
                                        <option value="1">Online</option>
                                        <option value="2">Retail</option>
                                        <option value="3">Direct</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-xl-4 mt-5 mt-lg-0">
                        <a href="#" class="btn btn-light-primary px-6 font-weight-bold">
                            Search
                        </a>
                    </div>
                </div>
            </div>
            <!--end::Search Form-->

            <table class="table table-bordered table-hover" id="kt_datatable">
                <thead>
                <tr>
                    <th>Record ID</th>
                    <th>Order ID</th>
                    <th>Country</th>
                    <th>Ship City</th>
                    <th>Ship Address</th>
                    <th>Company Agent</th>
                    <th>Company Name</th>
                    <th>Ship Date</th>
                    <th>Status</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>61715-075</td>
                    <td>China</td>
                    <td>Tieba</td>
                    <td>746 Pine View Junction</td>
                    <td>Nixie Sailor</td>
                    <td>Gleichner, Ziemann and Gutkowski</td>
                    <td>2/12/2018</td>
                    <td>3</td>
                    <td>2</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>63629-4697</td>
                    <td>Indonesia</td>
                    <td>Cihaur</td>
                    <td>01652 Fulton Trail</td>
                    <td>Emelita Giraldez</td>
                    <td>Rosenbaum-Reichel</td>
                    <td>8/6/2017</td>
                    <td>6</td>
                    <td>3</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>68084-123</td>
                    <td>Argentina</td>
                    <td>Puerto Iguazú</td>
                    <td>2 Pine View Park</td>
                    <td>Ula Luckin</td>
                    <td>Kulas, Cassin and Batz</td>
                    <td>5/26/2016</td>
                    <td>1</td>
                    <td>2</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>67457-428</td>
                    <td>Indonesia</td>
                    <td>Talok</td>
                    <td>3050 Buell Terrace</td>
                    <td>Evangeline Cure</td>
                    <td>Pfannerstill-Treutel</td>
                    <td>7/2/2016</td>
                    <td>1</td>
                    <td>3</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>31722-529</td>
                    <td>Austria</td>
                    <td>Sankt Andrä-Höch</td>
                    <td>3038 Trailsway Junction</td>
                    <td>Tierney St. Louis</td>
                    <td>Dicki-Kling</td>
                    <td>5/20/2017</td>
                    <td>2</td>
                    <td>3</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>64117-168</td>
                    <td>China</td>
                    <td>Rongkou</td>
                    <td>023 South Way</td>
                    <td>Gerhard Reinhard</td>
                    <td>Gleason, Kub and Marquardt</td>
                    <td>11/26/2016</td>
                    <td>5</td>
                    <td>3</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>43857-0331</td>
                    <td>China</td>
                    <td>Baiguo</td>
                    <td>56482 Fairfield Terrace</td>
                    <td>Englebert Shelley</td>
                    <td>Jenkins Inc</td>
                    <td>6/28/2016</td>
                    <td>2</td>
                    <td>3</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>64980-196</td>
                    <td>Croatia</td>
                    <td>Vinica</td>
                    <td>0 Elka Street</td>
                    <td>Hazlett Kite</td>
                    <td>Streich LLC</td>
                    <td>8/5/2016</td>
                    <td>6</td>
                    <td>1</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>0404-0360</td>
                    <td>Colombia</td>
                    <td>San Carlos</td>
                    <td>38099 Ilene Hill</td>
                    <td>Freida Morby</td>
                    <td>Haley, Schamberger and Durgan</td>
                    <td>3/31/2017</td>
                    <td>2</td>
                    <td>1</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>52125-267</td>
                    <td>Thailand</td>
                    <td>Maha Sarakham</td>
                    <td>8696 Barby Pass</td>
                    <td>Obed Helian</td>
                    <td>Labadie, Predovic and Hammes</td>
                    <td>1/26/2017</td>
                    <td>1</td>
                    <td>3</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>54092-515</td>
                    <td>Brazil</td>
                    <td>Canguaretama</td>
                    <td>32461 Ridgeway Alley</td>
                    <td>Sibyl Amy</td>
                    <td>Treutel-Ratke</td>
                    <td>3/8/2017</td>
                    <td>4</td>
                    <td>2</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>0185-0130</td>
                    <td>China</td>
                    <td>Jiamachi</td>
                    <td>23 Walton Pass</td>
                    <td>Norri Foldes</td>
                    <td>Strosin, Nitzsche and Wisozk</td>
                    <td>4/2/2017</td>
                    <td>3</td>
                    <td>1</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>21130-678</td>
                    <td>China</td>
                    <td>Qiaole</td>
                    <td>328 Glendale Hill</td>
                    <td>Myrna Orhtmann</td>
                    <td>Miller-Schiller</td>
                    <td>6/7/2016</td>
                    <td>3</td>
                    <td>1</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>40076-953</td>
                    <td>Portugal</td>
                    <td>Burgau</td>
                    <td>52550 Crownhardt Court</td>
                    <td>Sioux Kneath</td>
                    <td>Rice, Cole and Spinka</td>
                    <td>10/11/2017</td>
                    <td>4</td>
                    <td>1</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>36987-3005</td>
                    <td>Portugal</td>
                    <td>Bacelo</td>
                    <td>548 Morrow Terrace</td>
                    <td>Christa Jacmar</td>
                    <td>Brakus-Hansen</td>
                    <td>8/17/2017</td>
                    <td>1</td>
                    <td>2</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>67510-0062</td>
                    <td>South Africa</td>
                    <td>Pongola</td>
                    <td>02534 Hauk Trail</td>
                    <td>Shandee Goracci</td>
                    <td>Bergnaum, Thiel and Schuppe</td>
                    <td>7/24/2016</td>
                    <td>5</td>
                    <td>3</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>36987-2542</td>
                    <td>Russia</td>
                    <td>Novokizhinginsk</td>
                    <td>19427 Sloan Road</td>
                    <td>Jerrome Colvie</td>
                    <td>Kreiger, Glover and Connelly</td>
                    <td>3/4/2016</td>
                    <td>3</td>
                    <td>1</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>18</td>
                    <td>11673-479</td>
                    <td>Brazil</td>
                    <td>Conceição das Alagoas</td>
                    <td>191 Stone Corner Road</td>
                    <td>Michaelina Plenderleith</td>
                    <td>Legros-Gleichner</td>
                    <td>2/21/2018</td>
                    <td>1</td>
                    <td>2</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>19</td>
                    <td>47781-264</td>
                    <td>Ukraine</td>
                    <td>Yasinya</td>
                    <td>1481 Sauthoff Place</td>
                    <td>Lombard Luthwood</td>
                    <td>Haag LLC</td>
                    <td>1/21/2016</td>
                    <td>1</td>
                    <td>2</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>20</td>
                    <td>42291-712</td>
                    <td>Indonesia</td>
                    <td>Kembang</td>
                    <td>9029 Blackbird Point</td>
                    <td>Leonora Chevin</td>
                    <td>Mann LLC</td>
                    <td>9/6/2017</td>
                    <td>2</td>
                    <td>3</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>21</td>
                    <td>64679-154</td>
                    <td>Mongolia</td>
                    <td>Sharga</td>
                    <td>102 Holmberg Park</td>
                    <td>Tannie Seakes</td>
                    <td>Blanda Group</td>
                    <td>7/31/2016</td>
                    <td>6</td>
                    <td>3</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>22</td>
                    <td>49348-055</td>
                    <td>China</td>
                    <td>Guxi</td>
                    <td>45 Butterfield Street</td>
                    <td>Yardley Wetherell</td>
                    <td>Gerlach-Schultz</td>
                    <td>4/3/2017</td>
                    <td>2</td>
                    <td>2</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>23</td>
                    <td>47593-438</td>
                    <td>Portugal</td>
                    <td>Viso</td>
                    <td>97 Larry Center</td>
                    <td>Bryn Peascod</td>
                    <td>Larkin and Sons</td>
                    <td>5/22/2016</td>
                    <td>6</td>
                    <td>1</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>24</td>
                    <td>54569-0175</td>
                    <td>Japan</td>
                    <td>Minato</td>
                    <td>077 Hoffman Center</td>
                    <td>Chrissie Jeromson</td>
                    <td>Brakus-McCullough</td>
                    <td>11/26/2017</td>
                    <td>2</td>
                    <td>1</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>25</td>
                    <td>0093-1016</td>
                    <td>Indonesia</td>
                    <td>Merdeka</td>
                    <td>3150 Cherokee Center</td>
                    <td>Gusti Clamp</td>
                    <td>Stokes Group</td>
                    <td>4/12/2018</td>
                    <td>6</td>
                    <td>2</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>26</td>
                    <td>0093-5142</td>
                    <td>China</td>
                    <td>Jianggao</td>
                    <td>289 Badeau Alley</td>
                    <td>Otis Jobbins</td>
                    <td>Ruecker, Leffler and Abshire</td>
                    <td>3/6/2018</td>
                    <td>4</td>
                    <td>2</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>27</td>
                    <td>51523-026</td>
                    <td>Germany</td>
                    <td>Erfurt</td>
                    <td>132 Chive Way</td>
                    <td>Lonnie Haycox</td>
                    <td>Feest Group</td>
                    <td>4/24/2018</td>
                    <td>1</td>
                    <td>3</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>28</td>
                    <td>49035-522</td>
                    <td>Australia</td>
                    <td>Eastern Suburbs Mc</td>
                    <td>074 Algoma Drive</td>
                    <td>Heddi Castelli</td>
                    <td>Kessler and Sons</td>
                    <td>1/12/2017</td>
                    <td>5</td>
                    <td>1</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>29</td>
                    <td>58411-198</td>
                    <td>Ethiopia</td>
                    <td>Kombolcha</td>
                    <td>91066 Amoth Court</td>
                    <td>Tuck O'Dowgaine</td>
                    <td>Simonis, Rowe and Davis</td>
                    <td>5/6/2017</td>
                    <td>1</td>
                    <td>1</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>30</td>
                    <td>27495-006</td>
                    <td>Portugal</td>
                    <td>Arrifes</td>
                    <td>3 Fairfield Junction</td>
                    <td>Vernon Cosham</td>
                    <td>Kreiger-Nicolas</td>
                    <td>2/8/2017</td>
                    <td>4</td>
                    <td>2</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>31</td>
                    <td>55154-8284</td>
                    <td>Philippines</td>
                    <td>Talisay</td>
                    <td>09 Sachtjen Junction</td>
                    <td>Bryna MacCracken</td>
                    <td>Hyatt-Witting</td>
                    <td>7/22/2017</td>
                    <td>2</td>
                    <td>1</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>32</td>
                    <td>62678-207</td>
                    <td>Libya</td>
                    <td>Zuwārah</td>
                    <td>82 Thackeray Pass</td>
                    <td>Freda Arnall</td>
                    <td>Dicki, Morar and Stiedemann</td>
                    <td>7/22/2016</td>
                    <td>3</td>
                    <td>3</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>33</td>
                    <td>68428-725</td>
                    <td>China</td>
                    <td>Zhangcun</td>
                    <td>3 Goodland Terrace</td>
                    <td>Pavel Kringe</td>
                    <td>Goldner-Lehner</td>
                    <td>4/2/2017</td>
                    <td>4</td>
                    <td>1</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>34</td>
                    <td>0363-0724</td>
                    <td>Morocco</td>
                    <td>Temara</td>
                    <td>9550 Weeping Birch Crossing</td>
                    <td>Felix Nazaret</td>
                    <td>Waters, Quigley and Keeling</td>
                    <td>6/4/2016</td>
                    <td>5</td>
                    <td>3</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>35</td>
                    <td>37000-102</td>
                    <td>Paraguay</td>
                    <td>Los Cedrales</td>
                    <td>1 Ridge Oak Way</td>
                    <td>Penrod Allanby</td>
                    <td>Rodriguez Group</td>
                    <td>3/5/2018</td>
                    <td>2</td>
                    <td>3</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>36</td>
                    <td>55289-002</td>
                    <td>Philippines</td>
                    <td>Dologon</td>
                    <td>9 Vidon Terrace</td>
                    <td>Hubey Passby</td>
                    <td>Lemke-Hermiston</td>
                    <td>6/29/2017</td>
                    <td>2</td>
                    <td>3</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>37</td>
                    <td>15127-874</td>
                    <td>Tanzania</td>
                    <td>Nanganga</td>
                    <td>33 Anniversary Parkway</td>
                    <td>Magdaia Rotlauf</td>
                    <td>Hettinger, Medhurst and Heaney</td>
                    <td>2/18/2018</td>
                    <td>3</td>
                    <td>1</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>38</td>
                    <td>49349-123</td>
                    <td>Indonesia</td>
                    <td>Pule</td>
                    <td>77292 Bonner Plaza</td>
                    <td>Alfonse Lawrance</td>
                    <td>Schuppe-Harber</td>
                    <td>4/14/2017</td>
                    <td>1</td>
                    <td>3</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>39</td>
                    <td>17089-415</td>
                    <td>Palestinian Territory</td>
                    <td>Za‘tarah</td>
                    <td>42806 Ridgeview Terrace</td>
                    <td>Kessiah Chettoe</td>
                    <td>Mraz LLC</td>
                    <td>3/4/2017</td>
                    <td>5</td>
                    <td>2</td>
                    <td nowrap></td>
                </tr>
                <tr>
                    <td>40</td>
                    <td>51327-510</td>
                    <td>Philippines</td>
                    <td>Esperanza</td>
                    <td>4 Linden Court</td>
                    <td>Natka Fairbanks</td>
                    <td>Mueller-Greenholt</td>
                    <td>6/21/2017</td>
                    <td>3</td>
                    <td>3</td>
                    <td nowrap></td>
                </tr>
                </tbody>
            </table>

        </div>

    </div>

@endsection

{{-- Styles Section --}}
@section('styles')
    <link href="{{ asset('plugins/custom/datatables/datatables.bundle.css') }}" rel="stylesheet" type="text/css"/>
@endsection


{{-- Scripts Section --}}
@section('scripts')
    {{-- vendors --}}
    <script src="{{ asset('plugins/custom/datatables/datatables.bundle.js') }}" type="text/javascript"></script>

    {{-- page scripts --}}
    <script src="{{ asset('js/pages/crud/datatables/basic/basic.js') }}" type="text/javascript"></script>
    <script src="{{ asset('js/app.js') }}" type="text/javascript"></script>
@endsection
